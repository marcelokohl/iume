import React, {useState} from 'react';
import { Button, LoginPage, EnterPassword } from '../../../components';
import { Link } from "react-router-dom";

const Front = ({apiFeedback, ...props}) => {
  const [pass, setPass] = useState()
  return (
    <LoginPage title="Parece que você é novo aqui!">
      <form onSubmit={e => {props.createOwner(pass, pass); e.preventDefault()}}>
        <p className="text-muted text-center mt-0 mb-4">Crie sua senha de acesso.</p>
        <EnterPassword focus onChange={setPass} />
        <Button gtag="criar-senha-continuar" disabled={!pass} loading={apiFeedback === 'loading' ? 'Criando conta...' :false} link={Link} type="submit" className="primary full mt-2">Continuar</Button>
      </form>
    </LoginPage>
  );
}

export default Front;
