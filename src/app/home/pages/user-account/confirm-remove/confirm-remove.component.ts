import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-remove',
  templateUrl: './confirm-remove.component.html',
  styleUrls: ['./confirm-remove.component.css']
})
export class ConfirmRemoveComponent implements OnInit {

  @Input() articleTitle: string;
  @Output() removeAnsw = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }


  yesRemove() {
    this.removeAnsw.emit(true);
  }

  closeModal() {
    
  }

  onClickedOutside(e: Event) {
    this.removeAnsw.emit(false);
  }

}
