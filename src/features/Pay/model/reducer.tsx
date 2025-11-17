import type {State, Action} from '../types'

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_DEVICES':
      return {...state, devices: action.payload};

    case 'SET_PERIOD':
      return {...state, details: action.payload};

    case 'SET_EMAIL':
      return {
        ...state,
        email: {text: action.payload, error: false},
      };

    case 'SET_EMAIL_ERROR':
      return {
        ...state,
        email: {...state.email, error: action.payload},
      };

    default:
      return state;
  }
}