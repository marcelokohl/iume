import React, {useState, useEffect} from 'react';
import { Field, Button, Grid, Icon, Modal, gtag } from '../../../components';

let tt
const Front = ({apiFeedback, data, submit, onFieldChange, pageRef, actived, setActived, ...props}) => {
  const [modal, setModal] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(apiFeedback);
    if (apiFeedback.form.status === 'success') {
      pageRef.current.alert({type:'success', message:<span><Icon name="check-circled" /> Dados alterados com sucesso!</span>, delay:5000})
    }
  }, [apiFeedback])

  const checkFeedbackError = (api, field) => {
    return api[field] && api[field].status==='error' && api[field].message
  }

  const activeMenu = () => {
    if (actived) {
      gtag('perfil-desativar-menu')
      setModal('active')
    } else {
      gtag('perfil-ativar-menu')
      setActived(true)
    }
  }

  const checkFeedbackLoading = (api, field) => {
    if (tt) {
      return api[field] && api[field].status==='loading'
    } else if (api[field] && api[field].status==='loading') {
      tt = true
    }
    return null
  }

  return (
    <div>
      <div>
        <h4 className="mt-0">Configurações</h4>
        <Field
          checked={actived}
          type="switch"
          onClick={() => {activeMenu()}}
          className=""
        >Ativar menu</Field>
        <Field
          error={checkFeedbackError(apiFeedback, 'slug')}
          onChange={e=>onFieldChange('slug', e.target.value)}
          required
          type="slug"
          value={data.slug}
          maxLength={32}
          className="mb-0"
          loading={checkFeedbackLoading(apiFeedback, 'slug')}
        >Link do menu</Field>
        <div className="profile-slug-feedback mt--2">
          {(apiFeedback.slug && apiFeedback.slug.status ==='success') &&
            <div className="text-success"><Icon name="check-circled" /> Esse link está disponível!</div>
          }
          {(apiFeedback.slug && apiFeedback.slug.status ==='error') &&
            <div className="text-error"><Icon name="warning-circled" /> Esse link não está disponível!</div>
          }
        </div >
        <div  className={"mt-2 profile-slug-info" + (apiFeedback.slug && apiFeedback.slug.status ==='error'?' error':'')}>
          <p className="text-muted mb-1 mt-0">Seus clientes poderão ver seu menu por esse link:</p>
          <a target="_blank" href={`${process.env.REACT_APP_SITE_URL}/${data.slug}`}>{process.env.REACT_APP_SITE_URL}/{data.slug}</a>
        </div>

        <Button
          gtag="perfil-salvar"
          disabled={apiFeedback.slug && apiFeedback.slug.status ==='error' || data.slug.length < 3}
          loading={(apiFeedback.form&&apiFeedback.form.status=='loading')?'Salvando...':false}
          className="primary full mt-3"
          onClick={submit}
        >Salvar</Button>
      </div>

      <Modal show={modal}>
        <Modal.content
          show={modal==='active'}
          className="size-1"
          onClose={setModal}
          header={'Desativar menu'}
          footer={
            <Grid>
              <Grid.cell className="cell-6">
                <Button gtag="qrcode-desativar-menu-confirmar" loading={loading} className="full min-width-auto" onClick={() => {setActived(false); setModal(null)}}>Sim</Button>
              </Grid.cell>
              <Grid.cell className="cell-6">
                <Button gtag="qrcode-desativar-menu-cancelar" loading={loading} className="primary full min-width-auto" onClick={() => setModal(null)} >Não</Button>
              </Grid.cell>
            </Grid>
          }
        >
          <p className="text-center text-bold mt-0">Tem certeza que deseja desativar o seu menu?</p>
          <p className="text-center text-muted mt-0">Seus clientes não poderão mais vê-lo.</p>
        </Modal.content>
      </Modal>

    </div>
  );
}

export default Front;
