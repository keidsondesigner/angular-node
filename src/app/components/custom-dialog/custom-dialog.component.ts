import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {
  @Input('show') show = false;

  @Input('title') courseTitle: string = 'Course Title';

  @Output('close') onClose = new EventEmitter();

  @Output('delete') onDelete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }
}
