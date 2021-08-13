import React from 'react';
import Route from './Route';

import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Home from'../pages/Home';
import Terms from'../pages/Terms';
import PrivacyPolicy from'../pages/PrivacyPolicy';

import Login from '../pages/Login';
import LoginSignin from'../pages/Login/Signin';
import LoginSignup from'../pages/Login/Signup';
import LoginRecover from'../pages/Login/Recover';
import Company from'../pages/Login/Company';
import CompanyOk from'../pages/Login/Company/Ok';
import NewPassword from'../pages/Login/NewPassword';
import HandleTokenRecoverPass from '../utils/handleTokenRecoverPass';

import CarteEdit from'../pages/Carte';
import CarteSections from'../pages/Carte/Sections';
import CarteSort from'../pages/Carte/Sort';
import CarteStart from'../pages/Carte/Start';

import CarteSiteView from'../pages/Carte/View/Site';
//import CarteAppView from'../pages/Carte/View/App';

import Qrcode from'../pages/Qrcode';
import Profile from'../pages/Profile';

export default function Routes() {
    return (
      <Switch>
        <Route exact path='/' component={Home} isPublicToAll />
        <Route exact path='/admin/login' component={Login} />
        <Route exact path='/admin/signin' component={LoginSignin} />
        <Route exact path='/admin/signup' component={LoginSignup} redirectIfEmailNotStored />

        <Route exact path='/admin/recover/:token' component={HandleTokenRecoverPass} isPublicToAll />
        <Route exact path='/admin/recover' component={LoginRecover} isPublicToAll />
        <Route exact path='/admin/new-password' component={NewPassword} isPublicToAll />

        {/* Private routes */}
        <Route exact path='/admin/menu' component={CarteEdit} isPrivate />
        <Route exact path='/admin/menu/sections' component={CarteSections}  isPrivate />
        <Route exact path='/admin/menu/sort' component={CarteSort}  isPrivate />
        <Route exact path='/admin/menu/start' component={CarteStart}  isPrivate />

        {/* new restaurant */}
        <Route exact path='/admin/company' component={Company} isPrivate />
        <Route exact path='/admin/company/ok' component={CompanyOk} isPrivate />

        <Route exact path='/admin/profile' component={Profile} isPrivate />
        <Route exact path='/admin/qrcode' component={Qrcode} isPrivate />

        {/* user */}
        <Route exact path='/terms' component={Terms} isPublicToAll />
        <Route exact path='/privacy-policy' component={PrivacyPolicy} isPublicToAll />

        <Route exact path='/qr/:companyId' component={CarteSiteView} isPublicToAll />
        <Route exact path='/:slug' component={CarteSiteView} isPublicToAll />

        <Route path="*" render={() => <Redirect to="/"/>} isPublicToAll />
      </Switch>
    );
}
