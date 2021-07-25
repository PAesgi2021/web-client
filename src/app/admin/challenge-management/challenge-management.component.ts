import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {ChallengeService} from "../../services/challenge-service/challenge.service";
import {Challenge} from "../../models/challenge";


@Component({
  selector: 'app-challenge-management',
  templateUrl: './challenge-management.component.html',
  styleUrls: ['./challenge-management.component.scss']
})
export class ChallengeManagementComponent implements OnInit {

  challenges: Challenge[];
  isFetching: boolean;
  isSearching: boolean;
  myControl: FormControl;

  // -------------------------------------------------------------------------------------------------------------------

  constructor(
    public challengeService: ChallengeService,
    public router: Router
  ) {
    this.isFetching = true;
    this.isSearching = false;
  }

  public ngOnInit(): void {
    this.challenges = this.fetchChallenges();
  }

  // -------------------------------------------------------------------------------------------------------------------

  public handleAddPostAction(): any {
    this.router.navigate(['admin/create-challenge']);
  }

  public fetchChallenges(): Challenge[] {
    const result: Challenge[] = [];
    this.challengeService.getAllChallenge().subscribe(response => {
      response.map(challenge => {
        result.push(new Challenge({
          ...challenge
        }));
      });
    });

    this.handleIsFetching();
    return result;
  }

  public handleIsFetching(): void {
    this.challenges ? this.isFetching = false : this.isFetching = true;
  }

  public handleRemoveClick(id: string) {
    this.challengeService.deleteChallenge(id).subscribe(console.log);
    this.challenges.forEach((value, index) => {
      if (value.id.toString() === id) this.challenges.splice(index, 1)
    })
  }
}
