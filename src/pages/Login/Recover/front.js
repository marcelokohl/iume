import React, {useState} from 'react';
import { Button, LoginPage } from '../../../components';

const Front = ({apiFeedback, sendRecover, ...props}) => {
  return (
    <LoginPage title="Recuperar senha">
      <p className="text-muted text-center mt-1">Fique tranquilo!<br/>Isso acontece com todo mundo.</p>
      <p className="text-bold text-center mt-5">Um email com as instruções foi enviado para:</p>
      <p className="text-bold text-center text-primary my-5">{props.email}</p>
      <Button gtag="recuperar-senha-reenviar-email" onClick={sendRecover} loading={apiFeedback.form && apiFeedback.form.status === 'loading'?'Enviando...':false} className="primary full">Reenviar email</Button>
      { apiFeedback.form && apiFeedback.form.status === 'ok' &&
        <p className="text-success text-center">{apiFeedback.form.message}</p>
      }
    </LoginPage>
  );
}

export default Front;
