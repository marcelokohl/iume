import { call, put } from 'redux-saga/effects';
import { login, logout } from './sagas';

import { Auth } from '../../../services/api/auth';
import { Company } from '../../../services/api/company';

import * as authMocks from '../../mocks/auth';

import { Actions as CompanyActions } from '../company/actions';
import { Actions as AuthActions } from './actions';

describe('Authentication', () => {

  it('Shoult login the user, set default token and load his companies', () => {
    const gen = login(authMocks.requestLoginPayload)

    expect(gen.next().value)
      .toEqual(call(Auth.login, authMocks.requestLoginPayloadNormalized))
    
    expect(gen.next(authMocks.loginResponse).value)
      .toEqual(put(AuthActions.loginSuccess(authMocks.token)))

    expect(gen.next(authMocks.loginResponse).value)
      .toEqual(put(AuthActions.setTokenOnRequests(authMocks.token)))

    expect(gen.next().value)
      .toEqual(call(Company.all))
    
    expect(gen.next(authMocks.companiesResponse).value)
      .toEqual(put(CompanyActions.loadOwnerCompaniesSuccess(authMocks.companiesResponse.data.data)))
  });

  it('Should dispatch loginFailed action when login failed', () => {
    const gen = login(authMocks.requestLoginPayload)
    
    gen.next();
    
    expect(gen.throw('error').value)
      .toEqual(put(AuthActions.loginFailed('error')))
  });

  it('Should logout the user', () => {
    const gen = logout()
    expect(gen.next().value)
      .toEqual(call(Auth.logout))
  });
});