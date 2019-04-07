import { Student } from './student.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student

  constructor() { }

  ngOnInit() {
  }

}

// qualquer coisa que não é string tem que usar 
//property biding []