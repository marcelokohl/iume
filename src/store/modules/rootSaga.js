import { all } from 'redux-saga/effects';

import emails from './emails/sagas';
import auth from './auth/sagas';
import owner from './owner/sagas';
import company from './company/sagas';
import sections from './sections/sagas';
import productSections from './productSections/sagas';
import menuPreview from './menuPreview/sagas';

import companyProfile from './companyProfile/sagas';
import companyProfilePersonalData from './companyProfile/personal/sagas';
import companyProfilePassword from './companyProfile/password/sagas';
import companyProfileAddress from './companyProfile/address/sagas';
import companyProfileSettings from './companyProfile/settings/sagas';
import companyProfileWhatsapp from './companyProfile/whatsapp/sagas';

import viewMenu from './view/menu/sagas';
import viewSuggestion from './view/suggestion/sagas';

export default function* rootSaga() {
  return yield all([
    emails,
    auth,
    owner,
    company,
    sections,
    productSections,
    menuPreview,

    companyProfile,
    companyProfilePersonalData,
    companyProfilePassword,
    companyProfileAddress,
    companyProfileSettings,
    companyProfileWhatsapp,
    
    viewMenu,
    viewSuggestion
  ]);
}