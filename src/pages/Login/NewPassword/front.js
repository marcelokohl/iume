import React, {useState} from 'react';
import { Button, LoginPage, EnterPassword } from '../../../components';
import { Link } from "react-router-dom";

const Front = ({ apiFeedback, ...props }) => {
  const [pass, setPass] = useState()
  return (
    <LoginPage title="Atualizar senha">
      <EnterPassword focus onChange={setPass} />
      <Button 
        disabled={!pass} 
        link={Link}
        loading={apiFeedback.form && apiFeedback.form.status === 'loading'?'Atualizando...':false} 
        onClick={() => props.updatePassword(pass, pass)} type="submit" className="primary full">Continuar
      </Button>
    </LoginPage>
  );
}

export default Front;
