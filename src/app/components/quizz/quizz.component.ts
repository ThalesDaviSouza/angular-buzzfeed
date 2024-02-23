import { Component, Input, OnInit } from '@angular/core';
import { QuestionData } from 'src/app/models/questionData';
import { QuizzData } from 'src/app/models/quizzData';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  @Input() quizzData:QuizzData = {
    title: '',
    questions: []
  }

  selectedQuestionIndex:number = -1;
  answers:string[] = [];
  finished = true;

  constructor() { }

  ngOnInit(): void {
    if(this.quizzData.title != ''){
      this.selectedQuestionIndex = 0;
      this.finished = false;
    }
  }

  getSelectedQuestion():QuestionData|null{
    if(this.selectedQuestionIndex != -1){
      return this.quizzData.questions[this.selectedQuestionIndex]
    }

    return null;
  }

  playerchoose(alias:string){
    this.answers.push(alias)

    if(this.selectedQuestionIndex + 1 == this.quizzData.questions.length){
      this.finished = true
    }else{
      this.selectedQuestionIndex++;
    }
  }
}
