// responsible for handling users request state - success state, pending state, and error state
import { GET_USERS } from '../actions/types'

interface InitialState {
  users: User[]
}
export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export interface UsersAction {
  type: string,
  payload: {
    users: User[]
  }
}
const initialState = {
  users: []
}

export const usersReducer = ( state: InitialState = initialState, action: UsersAction) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}