
import { getUsers } from '../actions/usersActions'
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

// assumes one getter per Container instance
export const getData = (model: string, dispatch: Dispatch<AnyAction>) => {
  switch(model) {
    case ('users'): {
      return () => getUsers(dispatch)
    }
    default: {
      throw new Error('no model supplied for getData')
    }
  }
} 