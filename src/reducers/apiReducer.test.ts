import { apiReducer, ApiAction } from './apiReducer';
import {
  REQUEST_ERRORS,
  REQUEST_SUCCESS,
  REQUEST_PENDING
} from '../actions/types';

describe('apiReducer Tests', () => {
  it('should return the initial state', () => {
    expect(apiReducer(undefined, {} as ApiAction)).toEqual({
      error: '',
      status: 0,
      pending: false
    });
  });
  it('should successfully handle REQUEST_SUCCESS', () => {
    expect(
      apiReducer(undefined, {
        type: REQUEST_SUCCESS,
        payload: { error: '', status: 200, pending: false }
      })
    ).toEqual({ error: '', status: 200, pending: false });
  });
  it('should successfully handle REQUEST_PENDING', () => {
    expect(
      apiReducer(undefined, {
        type: REQUEST_PENDING,
        payload: { error: '', status: 200, pending: true }
      })
    ).toEqual({ error: '', status: 200, pending: true });
  });
  it('should successfully handle REQUEST_ERRORS', () => {
    expect(
      apiReducer(undefined, {
        type: REQUEST_ERRORS,
        payload: {
          error: 'some kind of network error',
          pending: false,
          status: 400
        }
      })
    ).toEqual({
      status: 400,
      error: 'some kind of network error',
      pending: false
    });
  });
});
