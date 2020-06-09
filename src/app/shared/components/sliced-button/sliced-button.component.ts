import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'sliced-button',
  templateUrl: './sliced-button.component.html',
  styleUrls: ['./sliced-button.component.scss']
})
export class SlicedButtonComponent implements OnInit {
  @Input() text: string;
  @Input() btnClass: string;
  @Output() btnClicked: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.btnClicked.next();
  }

}
