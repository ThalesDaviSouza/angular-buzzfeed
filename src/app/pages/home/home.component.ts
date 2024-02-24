import { Component, OnInit } from '@angular/core';
import quizz_questions from './../../../assets/data/quizz_questions.json'
import { QuizzData } from 'src/app/models/quizzData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quizz_questions:QuizzData = {
    title: '',
    questions: [],
    results: {}
  }

  constructor() { }

  ngOnInit(): void {
    if(quizz_questions){
      this.quizz_questions = quizz_questions
    }
  }

}
