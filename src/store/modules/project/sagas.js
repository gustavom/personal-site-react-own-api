import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProjectSuccess, updateProjectFailure } from './actions';

export function* updateProject({ payload }) {
  try {
    const { id, data, bannerId } = payload;

    let response;

    if (bannerId) {
      response = yield all([
        call(api.put, `/projects/${id}`, data),
        call(api.delete, `/files/${bannerId}`),
      ]);
    } else {
      response = yield call(api.put, `/projects/${id}`, data);
    }
    yield put(updateProjectSuccess(response.data));

    toast.success('Meetup successfully updated');
    history.push('/dashboard');
  } catch (err) {
    toast.error(`${err}Erro ao atualizar projeto`);
    yield put(updateProjectFailure());
  }
}

export default all([
  takeLatest('@project/UPDATE_PROJECT_REQUEST', updateProject),
]);
