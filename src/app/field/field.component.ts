import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() label:string; // "title"
  @Input() control:FormControl; //clientForm.get('title')

  constructor() { }

  ngOnInit() {
  }

}
