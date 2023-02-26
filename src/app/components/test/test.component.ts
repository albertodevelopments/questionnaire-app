import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public question: string
  public answers: any[]
  public correctAnswer: boolean
  public answerChosen: boolean

  constructor() { 
    this.question = '¿Cuál es la capital de España?'
    this.answers = [
      {
        'answer': 'Zaragoza',
        'correct': false
      },
      {
        'answer': 'Barcelona',
        'correct': false
      },
      {
        'answer': 'Madrid',
        'correct': true
      },
      {
        'answer': 'Sevilla',
        'correct': false
      }
    ]
    this.correctAnswer = false
    this.answerChosen = false
  }

  ngOnInit(): void {
  }

  checkAnswerIndex(index: number) {
    const correct = this.answers[index].correct
    this.answerChosen = true
  }

  checkAnswerObj(obj: any): void{
    this.correctAnswer = obj.correct
    this.answerChosen = true
  }

  checkAnswer(){

    if(!this.question) return false

    if(!this.answers || !Array.isArray(this.answers)) {
      return false
    }else{
      const correctAnswers = this.answers.filter(answer => answer.correct)

      if(!(this.answers.length >= 2 && this.answers.length <= 4)) return false

      if(correctAnswers.length !== 1){
        return false
      }

      return true
    }
  }

}
