export interface QuestionGroup {
  id: number;
  groupName: string;
  questionTag: string;
  QuestionDetail: QuestionDetail[];
}

export interface QuestionDetail {
  questionGroupId: number;
  questionString: string;
  QuestionAnswer: QuestionAnswer[];
}

export interface QuestionAnswer {
  order: number;
  answerString: string;
  isCorrect: boolean;
}
