import {Component, OnInit} from '@angular/core';
import {ChallengeService} from "../services/challenge-service/challenge.service";
import {Challenge} from "../models/challenge";

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  isFetching: boolean;
  challenges: Challenge[]

  constructor(
    private challengeService: ChallengeService,
  ) {
  }

  ngOnInit(): void {
    this.isFetching = true;
    this.fetchChallenges();
  }

  private fetchChallenges(): void {
    this.challengeService.getAllChallenge().subscribe(challenges => {
      this.challenges = [];
      challenges.map(challenge => this.challenges.push(new Challenge({...challenge})));
      this.isFetching = false;
    });
  }

}
