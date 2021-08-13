import React, {useState, useEffect} from 'react';
import { Field, Button, Grid, Icon, Modal } from '../../../components';

const Front = ({apiFeedback, removeAccountFeedback, data, updateProfile, onFieldChange, pageRef, ...props}) => {
  const [modal, setModal] = useState()

  useEffect(() => {
    console.log(apiFeedback);
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
        <h4 className="mt-0">Dados pessoais</h4>
        <Field
          error={checkFeedbackError(apiFeedback, 'email')}
          required
          disabled
          value={data.email}
        >Email</Field>
        <Field
          error={checkFeedbackError(apiFeedback, 'name')}
          value={data.name}
          onChange={e=>onFieldChange('name', e.target.value)}
          required
        >Nome do estabelecimento</Field>

        <Button
          gtag="perfil-salvar"
          disabled={data.name.length < 3}
          loading={(apiFeedback.form&&apiFeedback.form.status=='loading')?'Salvando...':false}
          className="primary full mt-3"
          onClick={updateProfile}
        >Salvar</Button>

        <hr className="my-3"/>
        <Button
          gtag="perfil-remover-conta"
          className="full"
          onClick={() => setModal('confirmRemove')}
        >Deletar conta</Button>
      </div>

      <Modal show={modal}>
        <Modal.content
          disabled={removeAccountFeedback.status === 'loading'}
          show={modal==='confirmRemove'}
          className="size-1"
          onClose={setModal}
          header={<span className="text-error"><Icon name="warning-circled"/> Deletar conta</span>}

          footer={
            <Grid>
              <Grid.cell className="cell-6">
                <Button gtag="editar-produto-deletar-confirmar" loading={removeAccountFeedback.status === 'loading'} className="error full min-width-auto" onClick={() => props.removeAccount()}>Sim</Button>
              </Grid.cell>
              <Grid.cell className="cell-6">
                <Button gtag="editar-produto-deletar-cancelar" disabled={removeAccountFeedback.status === 'loading'} className="full min-width-auto" onClick={() => setModal(null)} >Cancelar</Button>
              </Grid.cell>
            </Grid>
          }
         >
          <p className="text-bold text-center">Tem certeza que deseja deletar sua conta?</p>
          <p className="text-muted text-center">Todos os dados vinculados a ela serão apagados.</p>
        </Modal.content>
      </Modal>

    </div>
  );
}

export default Front;
