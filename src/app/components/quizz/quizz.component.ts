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
    questions: [],
    results: {}
  }

  selectedQuestionIndex:number = -1;
  answers:string[] = [];
  result:string = '';
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

  async playerchoose(alias:string){
    this.answers.push(alias)

    if(this.selectedQuestionIndex + 1 == this.quizzData.questions.length)
    {
      let finalAnswer = await this.checkResult(this.answers);
      this.result = this.quizzData.results[finalAnswer as keyof typeof this.quizzData.results]
      this.finished = true
    }
    else
    {
      this.selectedQuestionIndex++;
    }
  }

  async checkResult(answers:string[]) {
    let frequency:any = {};
    let maxFrequency = 0;
    let result = ''

    // Complexidade cerca de O(N)
    for(const actual of answers){
      if(frequency[actual] === undefined){
        frequency[actual] = 1
      }
      else{
        frequency[actual]++
      }

      if(frequency[actual] > maxFrequency){
        maxFrequency = frequency[actual]
        result = actual;
      }
    }

    return result;
  }

}
