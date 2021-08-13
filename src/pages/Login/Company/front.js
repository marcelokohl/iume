import React, {useState, useEffect} from 'react';
import { Button, Field, LoginPage, gtag } from '../../../components';
import { Link } from "react-router-dom";

const Front = props => {
  const [companyName, setCompanyName] = useState('')

  useEffect(() => {
    gtag('conversion', {'send_to': 'AW-579814620/edZ3CL3ux-ABENyJvZQC'});
  },[])
  return (
    <LoginPage title="Quase lá!">
      <Field focus type="text" onChange={e => setCompanyName(e.target.value)} required>Nome do seu restaurante</Field>
      <Button
        gtag="criar-restaurante-continuar"
        disabled={companyName.length < 4}
        link={Link}
        onClick={() => props.submit(companyName)}
        type="submit"
        className="primary full mt-2"
        loading={props.apiFeedback === 'loading' ? 'Criando...' :false}
      >Continuar</Button>
    </LoginPage>
  );
}

export default Front;
