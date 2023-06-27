export class Statistics {
  correctAnswers: number = 0
  questionNumber: number = 0

  ispis?(): void {
    console.log(this.correctAnswers + ' od ' + this.questionNumber)
  }
}
