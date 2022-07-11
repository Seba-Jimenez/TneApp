import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-h',
  templateUrl: './modal-h.page.html',
  styleUrls: ['./modal-h.page.scss'],
})
export class ModalHPage implements OnInit {
  @Input() marker: any;
  
  constructor() { }

  ngOnInit() {
  }

}
