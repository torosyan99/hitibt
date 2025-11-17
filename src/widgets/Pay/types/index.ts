import type {PeriodType} from "@/features/SubPeriod";

export interface State {
  devices: number;
  period: PeriodType;
  email: {
    text: string;
    error: boolean;
  };
}


export type Action =
  | { type: 'SET_DEVICES'; payload: number }
  | { type: 'SET_PERIOD'; payload: PeriodType }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_EMAIL_ERROR'; payload: boolean };