import React, {useState, useEffect, useRef} from 'react';
import { Page, Container, Button, Menu, Icon, Modal, Field, CardCarte, Grid, ButtonBack } from '../../../components';
import { Link } from "react-router-dom";
import history from "../../../services/history.js";

const Front = ({data, company, apiFeedback, apiLoaded, maxSections, ...props}) => {
  useEffect(() => {
    if (apiLoaded && data.length === 0) {
      history.push('/admin/menu/start')
    }
  }, [apiLoaded])

  const fieldSectionName = useRef()

  const [modal, setModal] = useState()
  const [loading, setLoading] = useState(false)
  const [apiErrors, setApiErrors] = useState(false)
  const [currentSectionData, setCurrentSectionData] = useState({name:''})

  const updateModalSectionData = (v, o) => {
    const arr = {...currentSectionData};
    arr[o] = v;
    // console.log(arr);
    setCurrentSectionData(arr)
  };

  const newSection = () => {
    props.newSection(currentSectionData)
    // console.log(currentSectionData);
    setApiErrors(null);
    setLoading(true)
    setCurrentSectionData({name:''})
  };
  const updateSection = () => {
    props.updateSection(currentSectionData)
    // console.log(currentSectionData);
    setApiErrors(null);
    setLoading(true)
  };
  const removeSection = () => {
    props.removeSection(currentSectionData)
    // console.log(currentSectionData);
    setApiErrors(null);
    setLoading(true)
  };
  const setSectionEnabled = (v, id) => {
    // console.log(v, id);
    const arr = [...data]
    props.updateSection({
      active: v,
      id: id
    })
  };

  const showEditModal = (d, i) => {
    setModal('updateSection')
    setCurrentSectionData(d)
  }

  useEffect(() => {
    if (apiFeedback === 'success') {
      setModal(null)
      setLoading(false)
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


  const pageRef = useRef()
  useEffect(() => {
    if (pageRef) {
      if (maxSections) {
        pageRef.current.alert({
          type:'error',
          message:<div>
          <Icon name="warning-circled" />
          <div>
          <b>Você atingiu o limite de seções</b>
          <p className="mt-0 mb-0">Remova alguma seção para poder adicionar uma nova.</p>
          </div>
          </div>,
          delay:0}
        )
      } else {
        pageRef.current.alert(null)
      }
    }
  }, [maxSections])

  return (
    <Page ref={pageRef} className="Carte carte-sections" main={false}>

      {/*HEADER*/}
      <header className="carte-header">
        <Container center className="py-2">
          <Grid>
            <Grid.cell className="start-1_lg end-1_lg hide block_lg">
              <ButtonBack />
            </Grid.cell>
            <Grid.cell className="start-2_lg end-11_lg">
              <h4 className="mt-0 mb-2 hide block_lg">{company.name}</h4>
              <div className="flex-space-between">
                <ButtonBack className="hide_lg" />

                <Button disabled={maxSections} gtag="menu-secoes-nova-secao" onClick={() => setModal('newSection')} className="primary m-0">Nova seção</Button>
              </div>
            </Grid.cell>
          </Grid>
        </Container>
      </header>

      {/*MAIN*/}
      <main className="carte-main">
        <Container center className='full-height pt-2'>
          <Grid>
            <Grid.cell className="start-2_lg end-11_lg">
              <Grid>
              {
                data.map((section, i) =>  (

                  <Grid.cell className="cell-6_lg" key={i}>
                    <CardCarte
                      gtagPrefix="secoes"
                      className="mb-0"
                      switchLabel="seção"
                      key={i}
                      data={section}
                      onEditClick={d => showEditModal(d, i)}
                      onEnableChange={v => setSectionEnabled(v, section.id)}
                    />
                  </Grid.cell>
                ))
              }
              </Grid>
            </Grid.cell>
          </Grid>
        </Container>
      </main>

      {/*FOOTER*/}
      <footer>
        <Menu menuHighlighter="menu" />
      </footer>

      {/*MODAL*/}
      <Modal show={modal}>
        <Modal.content
          disabled={loading}
          show={modal==='newSection' || modal==='updateSection'}
          className="size-1"
          onClose={setModal}
          header={
            <>
              {modal==='updateSection' ?
                'Atualizar seção'
                :
                'Criar seção'
              }
            </>
          }

          footer={
            <>
              {modal==='updateSection' ?
                <Grid>
                  <Grid.cell className="cell-6">
                    <Button gtag="editar-secao-deletar" loading={loading} className="full min-width-auto" onClick={() => setModal('confirmRemove')} >Deletar</Button>
                  </Grid.cell>
                  <Grid.cell className="cell-6">
                    <Button loading={loading} className="primary full min-width-auto" onClick={updateSection}>Atualizar</Button>
                  </Grid.cell>
                </Grid>
                :
                <Button loading={loading} className="primary full" type="submit" onClick={e => {newSection(); e.preventDefault();}}>Salvar</Button>
              }
            </>
          }
         >
          <form onSubmit={e => {newSection(); e.preventDefault();}}>

            <Field
              value={currentSectionData?currentSectionData.name:''}
              onChange={e => updateModalSectionData(e.target.value, 'name')}
              required
              disabled={loading}
              error={apiErrors&&apiErrors.name}
            >Nome</Field>
            <Field
              value={currentSectionData?currentSectionData.description:''}
              onChange={e => updateModalSectionData(e.target.value, 'description')}
              disabled={loading}
              error={apiErrors&&apiErrors.description}
              type="textarea"
              rows={6}
            >Descrição</Field>

          </form>
        </Modal.content>

        <Modal.content
          disabled={loading}
          show={modal==='confirmRemove'}
          className="size-1"
          onClose={setModal}
          header={<span className="text-error"><Icon name="warning-circled" /> Deletar seção</span>}

          footer={
            <Grid>
              <Grid.cell className="cell-6">
                <Button gtag="editar-secao-deletar-confirmar" loading={loading} className="error full min-width-auto" onClick={removeSection}>Sim</Button>
              </Grid.cell>
              <Grid.cell className="cell-6">
                <Button gtag="editar-secao-deletar-cancelars" loading={loading} className="full min-width-auto" onClick={() => setModal(null)} >Cancelar</Button>
              </Grid.cell>
            </Grid>
          }
         >
          <p className="text-bold text-center">Tem certeza que deseja deletar essa seção?</p>
          <p className="text-muted text-center">Todos os produtos vinculados a ela serão apagados.</p>
        </Modal.content>
      </Modal>
    </Page>
  );
}

export default Front;
