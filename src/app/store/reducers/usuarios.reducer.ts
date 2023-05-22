import { Action, createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersError } from '../actions';
import { Usuario } from 'src/app/models/usuario.model';


export interface UsuariosState {
  usuarioCollection: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
};

export const usuariosInitialState: UsuariosState = {
  usuarioCollection: [],
  loaded: false,
  loading: false,
  error: null
};

const _usuariosReducer = createReducer(usuariosInitialState,

  on(loadUsers, state => ({ ...state, loading: true})),
  on(loadUsersSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    usuarioCollection: [...usuarios]
  })),
  on(loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }))
);

export const usuariosReducer = (state = usuariosInitialState, action: Action) => _usuariosReducer(state, action);
