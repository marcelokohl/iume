import React, {useState} from 'react';
import { Button, Field, LoginPage, Link, gtag } from '../../../components';

const Front = ({apiFeedback, ...props}) => {
  const [pass, setPass] = useState()
  return (
    <LoginPage title="Bem-vindo de volta!">

      <form onSubmit={e => {props.submit(pass); e.preventDefault()}}>
        <Field type="email" disabled value={props.email}>Login</Field>
        <Field
          focus
          type="password"
          onChange={e => setPass(e.target.value)}
          error={apiFeedback&&apiFeedback.password}
        >Senha</Field>
        <Button gtag="bem-vindo-continuar" type="submit" loading={apiFeedback === 'loading' ? 'Entrando...' :false} className="primary full mt-2">Continuar</Button>
      </form>
      <a className="mt-4 block text-center" onClick={() => {props.sendLink(); gtag('bem-vindo-esqueci-minha-senha');}}>Esqueci minha senha</a>
    </LoginPage>
  );
}

export default Front;
