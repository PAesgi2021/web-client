import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PostService } from "../../services/post-service/post.service";
import { Post } from "../../models/post";
import { CreatePostDto } from "../../services/dto/create-post.dto";
import { HttpService } from "../../services/utils/http.service";
import { AccountService } from "../../services/account/account.service";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Observable } from "rxjs";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { map, startWith } from "rxjs/operators";
import { Challenge } from "../../models/challenge";
import { ChallengeService } from "../../services/challenge-service/challenge.service";


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  @Output()
  public readonly postCreated: EventEmitter<Post>;

  public createPostForm: FormGroup;

  private readonly defaultFormState: CreatePostDto = {
    description: '',
    isPrivate: false,
    image: '',
    profile_id: this.httpService.getCookie().current_profile_id,
  };

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = [];
  challenges: Challenge[] = [];
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  // -------------------------------------------------------------------------------------------------------------------

  public constructor(
    private router: Router,
    private postService: PostService,
    private httpService: HttpService,
    private accountService: AccountService,
    private challengeService: ChallengeService,
  ) {
    this.postCreated = new EventEmitter<Post>();
    this.accountService.checkAuthentication();

  }

  public ngOnInit(): void {
    this.fetchChallenges();
    this.createPostForm = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.minLength(1)]),
      isPrivate: new FormControl(false),
      image: new FormControl(''),
      profile_id: new FormControl(this.httpService.getCookie().current_profile_id),
      tagCtrl: new FormControl()
    });

  }

  // -------------------------------------------------------------------------------------------------------------------

  private fetchChallenges(): void {
    this.challengeService.getAllChallenge().subscribe(response => {
      response.map(value => {
        this.challenges.push(new Challenge({
          ...value
        }));
        this.allTags.push(value.tag)
      });
      this.filteredTags = this.createPostForm.get('tagCtrl').valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allTags.slice()));
    });
  }

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.createPostForm.get('tagCtrl').setValue("");
  }

  public remove(fruit: string): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.tags.includes(event.option.viewValue)) {
      this.tags.push(event.option.viewValue);
    }
    this.tagInput.nativeElement.value = '';
    this.createPostForm.get('tagCtrl').setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  // -------------------------------------------------------------------------------------------------------------------

  public onSubmitPost(event: Event): void {
    event.preventDefault();
    if (this.createPostForm.invalid) return;

    const newPost: CreatePostDto = this.createPostForm.value;
    newPost.challenges_id = this.toChallengeIds();
    this.postService.createPost(newPost).subscribe((newPost: Post) => this.postCreated.emit(newPost));

    this.createPostForm.reset(this.defaultFormState);
  }

  public handleImageChange(event): void {
    if (!event.target.files || !event.target.files[0]) return;

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.createPostForm.get('image').setValue(reader.result as string);
      console.log(file);
    }

    reader.readAsDataURL(file);
  }

  public toChallengeIds(): number[] {
    let result: number[] = []

    this.challenges.forEach(value => {
      if (this.tags.includes(value.tag)) result.push(value.id);
    });

    console.log(result);
    return result;
  }
}
