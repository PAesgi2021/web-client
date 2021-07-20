import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { map, startWith } from "rxjs/operators";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { Location } from '@angular/common';
import { ChallengeService } from "../../services/challenge-service/challenge.service";
import { HttpService } from "../../services/utils/http.service";
import { PostService } from "../../services/post-service/post.service";
import { CreatePostDto } from "../../services/dto/create-post.dto";
import { Challenge } from "../../models/challenge";


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = [];
  challenges: Challenge[] = [];
  createPostForm: FormGroup;
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    private _location: Location,
    private challengeService: ChallengeService,
    public httpService: HttpService,
    private postService: PostService,
  ) {
    this.fetchChallenges();
  }

  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.minLength(1)]),
      isPrivate: new FormControl(false),
      image: new FormControl(''),
      profile_id: new FormControl(this.httpService.getCookie().current_profile_id),
      tagCtrl: new FormControl()
    });
  }

  // -------------------------------------------------------------------------------------------------------------------

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

  public handleCancelAction(): void {
    this._location.back();
  }

  public handleImageChange(event): void {
    if (!event.target.files || !event.target.files[0]) return;

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.createPostForm.get('image').setValue(reader.result as string);
    }

    reader.readAsDataURL(file);
  }

  public handleValidClick(): void {
    const newPost: CreatePostDto = {
      description: this.createPostForm.get('description').value,
      isPrivate: this.createPostForm.get('isPrivate').value,
      image: this.createPostForm.get('image').value,
      profile_id: this.createPostForm.get('profile_id').value,
      challenges_id: this.toChallengeIds(),
    };

    this.postService.createPost(newPost).subscribe(value => {
      console.log(value);
      this.handleCancelAction();
    });
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
