import type {ReactNode} from "react";

export type Steps = Array<{
  text: string;
  children?: ReactNode;
  Icon: ReactNode;
}>

export interface StepperProps {
  steps: Steps;
  firstBackFn: () => void;
  backFn: () => void;
}