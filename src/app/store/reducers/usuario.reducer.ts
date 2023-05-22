import { Action, createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserError } from '../actions';
import { Usuario } from 'src/app/models/usuario.model';


export interface UsuarioState {
  id: string;
  usuario: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
};

export const usuarioInitialState: UsuarioState = {
  id: null,
  usuario: null,
  loaded: false,
  loading: false,
  error: null
};

const _usuarioReducer = createReducer(usuarioInitialState,

  on(loadUser, state => ({ ...state, loading: true})),
  on(loadUserSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    usuario
  })),
  on(loadUserError, (state, { payload }) => ({
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

export const usuarioReducer = (state = usuarioInitialState, action: Action) => _usuarioReducer(state, action);
