import produce from 'immer';

import { Types as ProfileTypes } from './actions';
import { Types as AuthTypes } from '../auth/actions';
import { Types as EmailTypes } from '../emails/actions';
import { Types as CompanyTypes } from '../company/actions';
import { Types as CompanyProfileSettings } from '../companyProfile/settings/actions';
import { Types as OwnerTypes } from '../owner/actions';

const initialState = {
  email: '',
  loginCount: null,
  companies: [],
  accessDenied: false
}

export default function profile(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ProfileTypes.REMOVE_INFOS_FROM_STORAGE: {
        draft.accessDenied = false

        draft.email = ''
        
        draft.companies = []
        break;
      }
      case EmailTypes.EMAIL_NOT_REGISTERED: {
        draft.email = action.payload.email
        break;
      }
      case EmailTypes.CHECK_EMAIL_SUCCESS: {
        draft.email = action.payload.email
        break;
      }
      case CompanyTypes.LOAD_OWNER_COMPANIES_SUCCESS: {
        draft.companies = action.payload.companies
        break;
      }
      case CompanyTypes.UPDATE_MENU_ACTIVE_SUCCESS: {
        const { companyId, active } = action.payload

        const companyIndex = draft.companies.findIndex(company => company.id === companyId)

        draft.companies[companyIndex].attributes.active = active
        break;
      }
      case CompanyProfileSettings.UPDATE_SLUG_SUCCESS: {
        const { company } = action.payload
        
        draft.companies[0]= company
        break;
      }
      case AuthTypes.LOGOUT_SUCCESS: {
        draft.email = ''

        draft.companies = []
        break;
      }
      case AuthTypes.ACCESS_DENIED: {
        draft.accessDenied = true
        break;
      }
      case OwnerTypes.GET_CURRENT_OWNER_SUCCESS: {
        const { email, login_count } = action.payload.owner.attributes

        draft.email = email
        
        draft.loginCount = login_count
        break;
      }
      default:
    }
  });
}
