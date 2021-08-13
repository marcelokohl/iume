import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {gtag} from '../components'

import { Actions as ProfileActions } from '../store/modules/profile/actions';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  isPublicToAll = false,
  redirectIfEmailNotStored = false,
  ...rest
}) {
  const { logged } = store.getState().auth
  const { companies, accessDenied, email } = store.getState().profile
  const currentPath = window.location.pathname

  if(currentPath === '/admin/login' && accessDenied) {
    store.dispatch(ProfileActions.removeInfosFromStorage())
  }

  // console.log(currentPath);
  // gtag('event', 'page_view', {
  //   // page_title: '<Page Title>',
  //   // page_location: '<Page Location>',
  //   page_path: currentPath
  //   // send_to: '<GA_MEASUREMENT_ID>'
  // })

  if(isPublicToAll) return <Route {...rest} component={Component} />

  if(logged && companies.length && currentPath === '/admin/company') return toMenu()

  if(logged && !companies.length && currentPath !== '/admin/company') return toCompany()

  if((!logged && isPrivate) || (redirectIfEmailNotStored && !email.length)) return toLogin()

  if(logged && !isPrivate) return toMenu()

  return <Route {...rest} component={Component} />
}

const toMenu = () => <Route render={ () => <Redirect to="/admin/menu" /> } />
const toLogin = () => <Route render={ () => <Redirect to="/admin/login" /> } />
const toCompany = () => <Route render={ () => <Redirect to="/admin/company" /> } />
