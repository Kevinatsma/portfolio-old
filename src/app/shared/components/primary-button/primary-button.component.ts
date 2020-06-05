import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {
  @Input() btnText: string;
  @Output() onClickFn: EventEmitter<any> = new EventEmitter(); 


  constructor() { }

  ngOnInit(): void {
  }

  onClick = () => {
    this.onClickFn.emit();
  }

}
