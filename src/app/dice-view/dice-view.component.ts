import { Component, OnInit } from '@angular/core';
import { Dice } from '../dice';
import { DiceService } from '../dice.service';
import { PlayerScores } from '../player-scores';
import { SCORE } from '../mock-data';

@Component({
  selector: 'app-dice-view',
  templateUrl: './dice-view.component.html',
  styleUrls: ['./dice-view.component.scss'],
})
export class DiceViewComponent implements OnInit {
  constructor(private diceService: DiceService) {}

  dice: Dice[] = [];
  playerScores: PlayerScores[] = SCORE;

  ngOnInit(): void {
    this.rollDice();
    this.resetSession();
  }

  rollDice(): void {
    this.dice = this.diceService.rollDice(3);
    this.diceService.dice = this.dice;

    const bonusPoints = this.diceService.getMultiplier(this.dice);
    const currentPoints = this.diceService.getScore(this.dice);

    this.playerScores.map((res) => {
      res.currentPoints = currentPoints;
      res.bonusPoints = bonusPoints;
      res.totalPoints = currentPoints + bonusPoints;
      res.sessionScore += res.totalPoints;
    });
  }

  resetSession(): void {
    this.playerScores.map((res) => {
      res.currentPoints = 0;
      res.bonusPoints = 0;
      res.totalPoints = 0;
      res.sessionScore = 0;
    });
  }
}
