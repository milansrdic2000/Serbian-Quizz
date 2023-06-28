export class Question {
  questionText: string = ''
  answerList: Answer[] = []
  questionCategory: string = ''
  questionType: QuestionType = QuestionType.OneAnswer

  constructor(
    $questionText: string,
    $answerList: Answer[],
    $questionCategory: string
  ) {
    this.questionText = $questionText
    this.answerList = $answerList
    this.questionCategory = $questionCategory
  }
}
enum QuestionType {
  OneAnswer,
  MultipleAnswer,
  Write,
}
export class Answer {
  answer: string = ''
  correct: boolean = false

  constructor(answer: string, correct: boolean = false) {
    this.answer = answer
    this.correct = correct
  }
}
