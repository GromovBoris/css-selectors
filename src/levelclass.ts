export default class Level {
  number: string;
  description: string;
  html: string;
  correct: string;

  constructor(
    number: string,
    description: string,
    html: string,
    correct: string
  ) {
    this.number = number;
    this.description = description;
    this.html = html;
    this.correct = correct;
  }
}
