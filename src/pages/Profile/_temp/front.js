import React, {useState, useEffect, useRef} from 'react';
import { Page, Container, Link, Field, Button, Grid,
   Icon, Image, Ellipsis, Card, CardCarte, Tabs, EnterPassword,  Menu, PageFooter, Modal, utils, gtag } from '../../../components';
// import { Link } from "react-router-dom";
import history from "../../../services/history.js";

let tt
const Front = ({apiFeedback, apiPasswordFeedback, actived, setActived, logoutFeedback, removeAccountFeedback, data, updateProfile, onFieldChange, updatePassword, ...props}) => {
  const [editPass, setEditPass] = useState(false)
  const [modal, setModal] = useState()
  const [loading, setLoading] = useState(false)

  const [pass, setPass] = useState({})
  const onPasswordChange = (l, v) => {
    const p = {...pass}
    setPass({...pass, [l]:v})
  }

  const pageRef = useRef()

  const checkFeedbackError = (api, field) => {
    return api[field] && api[field].status==='error' && api[field].message
  }

  const checkFeedbackLoading = (api, field) => {
    if (tt) {
      return api[field] && api[field].status==='loading'
    } else if (api[field] && api[field].status==='loading') {
      tt = true
    }
    return null
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

  useEffect(() => {
    console.log(apiPasswordFeedback);
    if (apiFeedback.form.status === 'success' || apiPasswordFeedback.form.status === 'success') {
      pageRef.current.alert({type:'success', message:<span><Icon name="check-circled" /> Dados alterados com sucesso!</span>, delay:5000})
    }
  }, [apiFeedback, apiPasswordFeedback])

  const slugify = text => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
  }

  return (
    <Page ref={pageRef} className="Profile">
      <Container center>
        <Grid>
          <Grid.cell className="start-3_sm end-10_sm start-4_md end-9_md start-5_lg end-8_lg">
            <Card
              className="mt-3 mt-6 mt-8_lg card-page"
            >
              <div>
                <h2 className="mt-0">Perfil</h2>
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

                <Field
                  checked={actived}
                  type="switch"
                  onClick={() => {activeMenu()}}
                  className=""
                >Ativar menu</Field>
                <Field
                  error={checkFeedbackError(apiFeedback, 'slug')}
                  onChange={e=>onFieldChange('slug', slugify(e.target.value))}
                  required
                  value={slugify(data.slug)}
                  maxLength={32}
                  loading={checkFeedbackLoading(apiFeedback, 'slug')}
                >Link do menu</Field>
                <div className="profile-slug-feedback">
                  {(apiFeedback.slug && apiFeedback.slug.status ==='success') &&
                    <div className="text-success"><Icon name="check-circled" /> Esse link está disponível!</div>
                  }
                  {(apiFeedback.slug && apiFeedback.slug.status ==='error') &&
                    <div className="text-error"><Icon name="warning-circled" /> Esse link não está disponível!</div>
                  }
                </div >
                <div  className={"profile-slug-info" + (apiFeedback.slug && apiFeedback.slug.status ==='error'?' error':'')}>
                  <p className="text-muted mb-1 mt-0">Seus clientes poderão ver seu menu por esse link:</p>
                  <a target="_blank" href={`${process.env.REACT_APP_SITE_URL}/${slugify(data.slug)}`}>{process.env.REACT_APP_SITE_URL}/{slugify(data.slug)}</a>
                </div>

                <Button
                  gtag="perfil-salvar"
                  disabled={apiFeedback.slug && apiFeedback.slug.status ==='error'}
                  loading={(apiFeedback.form&&apiFeedback.form.status=='loading')?'Salvando...':false}
                  className="primary full mt-3"
                  onClick={updateProfile}
                >Salvar</Button>
                <hr className="my-3"/>
                <h3 className="h4">Segurança</h3>
                {editPass &&
                  <>
                    <a className="mb-2 inline-block" onClick={() => setEditPass(false)}>Cancelar</a>

                    <Field
                      error={checkFeedbackError(apiPasswordFeedback, 'currentPassword')}
                      type="password"
                      required
                      onChange={e=>onPasswordChange('currentPassword', e.target.value)}
                    >Senha atual</Field>
                    <EnterPassword
                      error={checkFeedbackError(apiPasswordFeedback, 'newPassword')}
                      passLabel="Nova senha"
                      confirmPassLabel="Confirmar nova senha"
                      onChange={v=>onPasswordChange('newPassword', v)}
                    />
                    <Button
                      gtag="perfil-atualizar-senha"
                      loading={(apiPasswordFeedback.form&&apiPasswordFeedback.form.status=='loading')?'Salvando...':false}
                      className="primary full mt-3"
                      disabled={!pass.newPassword}
                      onClick={() => updatePassword(pass)}
                    >Atualizar</Button>
                  </>
                }
                {!editPass &&
                  <>
                    <a onClick={() => {setEditPass(true); gtag('perfil-alterar-senha')}}>Alterar senha</a>
                  </>
                }
                <hr className="my-3"/>
                <Button gtag="perfil-sair" loading={logoutFeedback.status === 'loading'?'Saindo...':false} className="full" onClick={() => props.logout()} >Sair</Button>
                <Button
                  gtag="perfil-remover-conta"
                  className="full"
                  onClick={() => setModal('confirmRemove')}
                >Deletar conta</Button>
              </div>
            </Card>

            <PageFooter gtag="perfil-sugestao" />
          </Grid.cell>
        </Grid>

      </Container>

      <Menu menuHighlighter="profile" />

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

    </Page>
  );
}

export default Front;
