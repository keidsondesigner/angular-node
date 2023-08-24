import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

export const stateStorageKey = 'state';

export const hydrationMetaReducer = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem(stateStorageKey);
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem(stateStorageKey);
        }
      }
    }
    const storageStateValue = JSON.parse(localStorage.getItem(stateStorageKey) || '{}');
    const nextState = reducer({ ...storageStateValue, ...state }, action);
    localStorage.setItem(stateStorageKey, JSON.stringify(nextState));
    return nextState;
  };
};
