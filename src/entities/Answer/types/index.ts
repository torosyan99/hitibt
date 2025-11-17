
export type AnswerType = 'warm' | 'time-warm' | 'done' | 'error';

export interface AnswerProps {
  type: AnswerType;
  title: string,
  text: string,
  className?:string
}
