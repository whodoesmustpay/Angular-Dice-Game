import { Injectable } from '@angular/core';
import { Dice } from './dice';

@Injectable({
  providedIn: 'root',
})
export class DiceService {
  constructor() {}

  dice: Dice[] = [];

  generateNumber(min: number, max: number): number {
    const rand = Math.floor(Math.random() * (max - min + 1) + min);
    return rand;
  }

  rollDice(count: number): Dice[] {
    let dice: Dice[] = [];

    for (let i = 1; i <= count; i++) {
      const result = this.generateNumber(1, 6);
      dice.push({ result: result, name: `die${result}` });
    }
    return dice;
  }

  getMultiplier(dice: Dice[]): number {
    for (let i = 0; i < dice.length; i++) {
      const die = dice[i].result;
      const scoreMultiplier = this.dice.reduce(
        (acc, cur) => (cur.result === die ? ++acc : acc),
        0
      );

      if (!scoreMultiplier || scoreMultiplier > 1) {
        return scoreMultiplier == 2 ? 5 : 10;
      }
    }

    return 0;
  }

  getScore(dice: Dice[]): number {
    let score = 0;
    dice.forEach((res) => {
      score += res.result;
    });

    return score;
  }
}
