import React, {useState, useEffect, useRef} from 'react';
import { Page, Container, Button, Icon, Tabs, CardCarte, Menu, Modal, Grid, Field, ButtonAction, utils } from '../../../components';
import { Link } from "react-router-dom";
import history from "../../../services/history.js";

const CreateCarte = ({data, company, apiFeedback, ...props}) => {

  const [loading, setLoading] = useState(false)
  const [apiErrors, setApiErrors] = useState(false)
  const [modal, setModal] = useState(null)
  const [currentSectionData, setCurrentSectionData] = useState({name:''})

  useEffect(() => {
    if (apiFeedback === 'success') {
      // setModal(null)
      // setLoading(false)

      history.push('/admin/menu')
    } else if (typeof apiFeedback === 'object'){
      setApiErrors(apiFeedback);
      setLoading(false)
    }
  }, [apiFeedback])

  useEffect(() => {
    if (apiFeedback != null && modal === null) {
      setApiErrors(null);
    }
  }, [modal])


  const newSection = () => {
    // console.log(currentSectionData);
    props.newSection(currentSectionData)
    setApiErrors(null);
    setLoading(true)
  };
  const updateModalSectionData = (v, o) => {
    const arr = {...currentSectionData};
    arr[o] = v;
    // console.log(arr);
    setCurrentSectionData(arr)
  };

  return (
    <Page className="CreateCarte flex-center" main={false}>
      <Container center>
        <div className="flex-center">
          <h4 className="m-0">{company.name}</h4>
          <p className="text-center text-muted text-bold mt-2">Para começar, crie uma seção para o seu menu.</p>
          <p className="text-center text-muted mt-1">Exemplos de seções:</p>
          <Grid className="size-5 mb-4 text-muted">
            <Grid.cell className="cell-4_md text-center">Entradas</Grid.cell>
            <Grid.cell className="cell-4_md text-center">Prato principal</Grid.cell>
            <Grid.cell className="cell-4_md text-center">Bebidas</Grid.cell>
          </Grid>
          <ButtonAction onClick={() => setModal('newSection')} icon="create-section">Criar seção</ButtonAction>
        </div>
      </Container>

      {/*MODAL*/}
      <Modal show={modal}>
        <Modal.content
          disabled={loading}
          show={modal==='newSection'}
          className="size-1"
          onClose={setModal}
          header="Criar seção"
          footer={<Button loading={loading} className="primary full" onClick={newSection}>Salvar</Button>}
         >
          <form onSubmit={e => {newSection(); e.preventDefault();}}>
            <p className="mt-0 text-center text-muted">Crie um nome para sua seção.<br/>Ex: Entradas</p>
            <Field
              onChange={e => updateModalSectionData(e.target.value, 'name')}
              required
              disabled={loading}
              error={apiErrors&&apiErrors.name}
            >Nome</Field>

          </form>
        </Modal.content>
      </Modal>
    </Page>
  )
}

export default CreateCarte;
