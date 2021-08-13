import React, { useState } from 'react';
import { Field, Button, LoginPage, ButtonBack, validateEmail } from '../../components';
import { Link } from "react-router-dom";

const Front = ({apiFeedback, ...props}) => {
  const [email, setEmail] = useState()

  return (
    <LoginPage title="Entrar" buttonBack={<ButtonBack onClick={() => {window.location.href = process.env.REACT_APP_SITE_URL}} className="mb-3" />}>
      <form onSubmit={e => {props.submit(email); e.preventDefault()}}>
        <Field
          focus
          type="email"
          onChange={e => setEmail(validateEmail(e.target.value))}
          error={apiFeedback&&apiFeedback.email}
        >Email</Field>
        <Button gtag="entrar-continuar" disabled={!email} loading={apiFeedback === 'loading' ? 'Entrando...' :false} type="submit" className="primary full mt-2">Continuar</Button>
      </form>
    </LoginPage>
  );
}

export default Front;
