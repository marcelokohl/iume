import { call, put } from 'redux-saga/effects';
import { createCompany, loadOwnerCompanies } from './sagas';

import { Company } from '../../../services/api/company';

import * as mocks from '../../mocks/company';

import { Actions as CompanyActions } from '../company/actions';

describe('Company', () => {

  it('Should create company', () => {
    const gen = createCompany(mocks.requestCreateCompanyPayload)
    const gen2 = loadOwnerCompanies()

    expect(gen.next().value)
      .toEqual(call(Company.create, mocks.newCompanyData))
    
    expect(gen.next().value)
      .toEqual(put(CompanyActions.createCompanySuccess()))

    expect(gen2.next().value)
      .toEqual(call(Company.all))
    
    expect(gen2.next(mocks.ownerCompaniesResponse).value)
      .toEqual(put(CompanyActions.loadOwnerCompaniesSuccess(mocks.ownerCompaniesResponse.data.data)))
  });

});