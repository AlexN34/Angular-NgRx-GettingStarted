import { UserActions, UserActionTypes } from '../actions/user.action';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface UserState {
  maskUserName: boolean;
}

export const initialState: UserState = {
  maskUserName: false
};

export function reducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case UserActionTypes.MaskUserName:
      return {
        ...state,
        maskUserName: action.payload
      };
    default:
      return state;
  }
}

export const getUserFeatureState = createFeatureSelector<UserState>('user');
export const getMaskUserNameState = createSelector(
  getUserFeatureState,
  (state: UserState) => state.maskUserName);
