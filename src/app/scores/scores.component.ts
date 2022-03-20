import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss'],
})
export class ScoresComponent implements OnInit {
  @Input() currentPoints = 0;
  @Input() bonusPoints = 0;
  @Input() totalPoints = 0;
  @Input() sessionScore = 0;

  constructor() {}

  ngOnInit(): void {}
}
