import { getUsers } from '../actions/usersActions';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

// gets the particular store object for a given Container
export const getDataModel = (
  state: { api: { error?: string; pending: boolean }; [x: string]: {} },
  model: string
) => ({ [model]: state[model] });

// assumes one getter per Container instance
export const getData = (model: string, dispatch: Dispatch<AnyAction>) => {
  switch (model) {
    case 'users': {
      return () => getUsers(dispatch);
    }
    default: {
      throw new Error('no model supplied for getData');
    }
  }
};
