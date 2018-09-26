import { Action } from '@ngrx/store';

export enum UserActionTypes {
  MaskUserName = '[User] MaskUserName'
}

export class MaskUserNameAction implements Action {
  readonly type = UserActionTypes.MaskUserName;

  constructor(public payload: boolean) {}
}

export type UserActions = MaskUserNameAction;
