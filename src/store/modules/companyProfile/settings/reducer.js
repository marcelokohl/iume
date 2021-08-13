import produce from 'immer';
import { Types } from './actions';
import { Types as TypesProfile } from '../actions';
import { createObj, resetObj } from '../../../../utils/handleApiFeedback';

const initialState = {
  slug: '',
  apiFeedback: createObj(['form','slug'])
}

export default function settings(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TypesProfile.LOAD_COMPANY_PROFILE_SUCCESS: {
        const { data } = action.payload.result.data

        const { slug } = data.attributes

        draft.slug = slug
        break;
      }
      case Types.SET_INPUT_VALUE: {
        const { key, value } = action.payload

        draft[key] = value
        break;
      }
      case Types.CHECK_SLUG_AVAILABILITY_REQUEST: {
        draft.apiFeedback = resetObj(draft.apiFeedback)

        draft.apiFeedback.slug.status = 'loading'
        break;
      }
      case Types.CHECK_SLUG_AVAILABILITY_SUCCESS: {
        draft.apiFeedback.slug.status = 'success'
        break;
      }
      case Types.CHECK_SLUG_AVAILABILITY_FAILED: {
        draft.apiFeedback.slug.status = 'error'
        break;
      }
      case Types.RESET_SLUG_CHECK_STATUS: {
        draft.apiFeedback.slug.status = null
        break;
      }
      case Types.UPDATE_SLUG_REQUEST: {
        draft.apiFeedback.form.status = 'loading'
        break;
      }
      case Types.UPDATE_SLUG_SUCCESS: {
        draft.apiFeedback.form.status = 'success'

        draft.apiFeedback.slug.status = null
        break;
      }
      case Types.UPDATE_SLUG_FAILED: {
        const { data } = action.payload.err.response

        draft.apiFeedback.form.status = 'error'

        if(data.slug) draft.apiFeedback.slug.status = 'error'
        break;
      }
      default:
    }
  })
}
