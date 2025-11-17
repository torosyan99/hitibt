export interface DetailsType {
  checked: boolean;
  period: string;
  price: string;
  tablet?:string;
  onClick?: () => void;
}

export interface State {
  devices: number;
  details: DetailsType;
  email: {
    text: string;
    error: boolean;
  };
}

export type Action =
  | { type: 'SET_DEVICES'; payload: number }
  | { type: 'SET_PERIOD'; payload: DetailsType }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_EMAIL_ERROR'; payload: boolean };

