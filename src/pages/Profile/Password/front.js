import React, {useState, useEffect} from 'react';
import { Field, Button, Grid, Icon, Modal, EnterPassword } from '../../../components';

const Front = ({apiFeedback, data, updateForm, onFieldChange, pageRef, ...props}) => {
  const [modal, setModal] = useState()
  const [pass, setPass] = useState('')
  const [oldPass, setOldPass] = useState('')

  useEffect(() => {
    onFieldChange('currentPassword', oldPass)
    // console.log(oldPass);
  },[oldPass])

  useEffect(() => {
    onFieldChange('newPassword', pass)
  },[pass])

  useEffect(() => {
    if (apiFeedback.form.status === 'success') {
      pageRef.current.alert({type:'success', message:<span><Icon name="check-circled" /> Dados alterados com sucesso!</span>, delay:5000})
    }
  }, [apiFeedback])

  const checkFeedbackError = (api, field) => {
    return api[field] && api[field].status==='error' && api[field].message
  }

  return (
    <div>
      <div>
        <h4 className="mt-0">Senha</h4>

        <Field
          error={checkFeedbackError(apiFeedback, 'currentPassword')}
          type="password"
          required
          onChange={e=>setOldPass(e.target.value)}
        >Senha atual</Field>
        <EnterPassword
          error={checkFeedbackError(apiFeedback, 'newPassword')}
          passLabel="Nova senha"
          confirmPassLabel="Confirmar nova senha"
          onChange={setPass}
        />

        <Button
          gtag="perfil-salvar-senha"
          loading={(apiFeedback.form&&apiFeedback.form.status=='loading')?'Salvando...':false}
          disabled={!pass || oldPass.length < 8}
          className="primary full mt-3"
          onClick={updateForm}
        >Salvar</Button>
      </div>

      <Modal show={modal}>

      </Modal>

    </div>
  );
}

export default Front;
