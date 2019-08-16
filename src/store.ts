import { createStore, applyMiddleware, DeepPartial } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { User } from './reducers/usersReducer';


export interface InitialState extends DeepPartial<InitialState> {
  api?: object,
  users?: Array<User> 
}

const initialState = {}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
