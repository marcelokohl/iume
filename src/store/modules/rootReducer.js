import { combineReducers } from 'redux';

import emails from './emails/reducer';
import { auth, logout } from './auth/reducer';
import owner from './owner/reducer';
import company from './company/reducer';
import profile from './profile/reducer';
import sections from './sections/reducer';
import productSections from './productSections/reducer';
import menuPreview from './menuPreview/reducer';

import companyProfilePersonalData from './companyProfile/personal/reducer';
import companyProfilePassword from './companyProfile/password/reducer';
import companyProfileAddress from './companyProfile/address/reducer';
import companyProfileSettings from './companyProfile/settings/reducer';
import companyProfileWhatsapp from './companyProfile/whatsapp/reducer'
import viewMenu from './view/menu/reducer';
import viewSuggestion from './view/suggestion/reducer';

import { Types as AuthTypes } from './auth/actions';
import { Types as OwnerTypes } from './owner/actions';

const appReducer = combineReducers({
  emails,
  auth,
  logout,
  owner,
  company,
  profile,
  sections,
  productSections,
  menuPreview,
  
  companyProfilePersonalData,
  companyProfilePassword,
  companyProfileAddress,
  companyProfileSettings,
  companyProfileWhatsapp,

  viewMenu,
  viewSuggestion
});

const rootReducer = (state, action) => {

  if(action.type === AuthTypes.LOGOUT_SUCCESS || action.type === OwnerTypes.DESTROY_OWNER_ACCOUNT_SUCCESS) {

    localStorage.removeItem('persist:iume')

    state = undefined
  }
  
  return appReducer(state, action)
}

export default rootReducer;