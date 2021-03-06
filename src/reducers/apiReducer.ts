// responsible for handling api request state - success state, pending state, and error state
import {
  REQUEST_ERRORS,
  REQUEST_SUCCESS,
  REQUEST_PENDING
} from '../actions/types';

interface InitialState {
  error: string;
  status: number;
  pending: boolean;
}

export interface ApiAction {
  type: string;
  payload?: {
    error?: string;
    status?: number;
    pending: boolean;
  };
}
const initialState = {
  error: '',
  status: 0,
  pending: false
};

export const apiReducer = (
  state: InitialState = initialState,
  action: ApiAction
) => {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case REQUEST_PENDING:
      return {
        ...state,
        ...action.payload
      };
    case REQUEST_ERRORS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
