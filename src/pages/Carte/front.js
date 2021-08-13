import React, {useState, useEffect, useRef} from 'react';
import { Page, Container, Button, Icon, Spinner,  Tabs, CardCarte, Menu, Modal, Grid, Field, ButtonAction, utils, decimalToCurrency, currencyToDecimal, gtag } from '../../components';
import { Link } from "react-router-dom";
import Resizer from 'react-image-file-resizer';
import history from "../../services/history.js";

const Front = ({data, company, apiFeedback, apiLoaded, maxProducts, ...props}) => {
  const [firstSection, setFirstSection] = useState(false)
  useEffect(() => {
    if (data.length === 1 && data[0].items.length === 0) {
      setFirstSection(true)
    }
    if (apiLoaded && data.length === 0) {
      history.push('/admin/menu/start')
    }
    if (apiLoaded && data.length > 0) {
      setCurrentSection(data[0].id)
      // history.push('/menu/start')
    }
    //console.log('data', data);
  }, [apiLoaded])

  const pageRef = useRef()
  useEffect(() => {
    if (pageRef && apiLoaded) {
      if (maxProducts) {
        pageRef.current.alert({
          type:'error',
          message:<div>
          <Icon name="warning-circled" />
          <div>
          <b>Você atingiu o limite de produtos</b>
          <p className="mt-0 mb-0">Remova algum produto para poder adicionar um novo.</p>
          </div>
          </div>,
          delay:0}
        )
      } else {
        pageRef.current.alert(null)
      }
    }
  }, [maxProducts, apiLoaded])

  const [loading, setLoading] = useState(false)
  const [apiErrors, setApiErrors] = useState(false)

  const [currentTab, setCurrentTab] = useState(0)
  useEffect(() => {
    if (data.length) {
      // const s = data[currentTab].id
      setCurrentSection(data[currentTab].id)
    }
  },[currentTab])

  const [currentSection, setCurrentSection] = useState(0)
  const [sections, setSection] = useState(0)
  useEffect(() => {
    let s = []
    data.forEach((item, i) => {
      s[i] = {label:item.name, value:item.id}
    });
    setSection(s)

  }, [data])
  const [currentItemData, setCurrentItemData] = useState()
  const [currentSectionId, setCurrentSectionId] = useState()

  const [modal, setModal] = useState(null)

  const fieldItemName = useRef()
  const fieldItemText = useRef()
  const fieldItemPrice = useRef()
  const [fieldItemImage, setFieldItemImage] = useState()
  const [currentSectionData, setCurrentSectionData] = useState({name:''})

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

  // DATA
  const setItemEnabled = (v, id, sid) => {
    const arr = [...data]
    props.updateItem({
      active: v,
      id: id,
      sectionId: sid
    })
  };
  const setItemImage = image => {
    //modal==='updateItem'?f=>updateModalItemData(f, 'image'):setFieldItemImage
    if (image) {
      gtag('editar-produto-enviar-foto')
    }
    // console.log('setItemImage', image);
    if (image && typeof image === 'object') {
      Resizer.imageFileResizer(
        image,
        640,
        640,
        'JPEG',
        80,
        0,
        uri => {
          if (modal==='updateItem') {
            updateModalItemData(uri, 'image')
          } else {
            setFieldItemImage(uri)
          }
        },
        'base64'
      );
    } else if (typeof image === 'string') {
      updateModalItemData(image, 'image')
    } else {
      updateModalItemData(null, 'image')
    }
  };
  const updateItem = () => {

    props.updateItem(
      {
        currentSectionId: currentSectionId,
        ...currentItemData
      }
    )
    setApiErrors(null);
    setLoading(true)
  };
  const removeItem = () => {
    props.removeItem(currentItemData)
    setApiErrors(null);
    setLoading(true)
  };
  const newItem = () => {
    console.log(currentSection);
    props.newItem({
      sectionId:currentSection,
      active:true,
      ...currentItemData,
      name: fieldItemName.current.value,
      description: fieldItemText.current.value,
      image: fieldItemImage,
    })
    setFieldItemImage(null)
    setApiErrors(null);
    setLoading(true)
    if (data.length === 1 && data[0].items.length === 0) {
      setFirstSection(false)
    }
  }
  // modal
  const updateModalItemData = (v, o) => {
    const arr = {...currentItemData};
    arr[o] = v;
    setCurrentItemData(arr)
  };
  const showEditModal = (d, i) => {
    setCurrentSectionId(d.sectionId)
    // console.log('d.sectionId:', d.sectionId);
    setModal('updateItem')
    setCurrentItemData(d)
  }

  // BEHAVIOR
  const scrollToSection = (t) => {
    gtag('menu-navegar-secao')
    utils.scrollToId('section-'+t, (window.innerWidth<994?240:200))
    setCurrentTab(t)
  }

  let currentTarget
  let target
  var timer = null;

  utils.onWindowScroll((x, y) => {
    for (var i = 0; i < 100; i++) {
      let e = document.getElementById('section-'+i)
      if (!e) break
      let t = e.getBoundingClientRect().top
      if ((t < 300 ) && target != i) {
        target = i
      }
    }
    if(timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
      if (target != currentTarget) {
        currentTarget = target
        setCurrentTab(target)
      }
    }, 150);

  })

  const newSection = () => {
    props.newSection(currentSectionData)
    setApiErrors(null);
    setLoading(true)
  };
  const updateModalSectionData = (v, o) => {
    const arr = {...currentSectionData};
    arr[o] = v;
    setCurrentSectionData(arr)
  };

  if (!apiLoaded) {
    return (
      <Page ref={pageRef} name="view" className="flex-center" main={false}>
        <Spinner className="spinner-page" />
      </Page>
    )
  }

  return (
    <Page ref={pageRef} className="Carte carte-home" main={false}>

      {/*MENU*/}
      {!firstSection &&
        <Menu menuHighlighter="menu" />
      }

      {!firstSection &&
        <div className="carte-actions-bar hide_lg">
          <Container center>
            <CarteActions maxProducts={maxProducts} company={company} className="" setCurrentItemData={setCurrentItemData} setModal={setModal} />
          </Container>
        </div>
      }
      {/*HEADER*/}
      <header className="carte-header">
        <Container center className="tabs-container">
          <Grid>
            <Grid.cell className="start-2_lg end-11_lg">
              <h4 className="m-0 mt-1 hide block_lg">{company.name}</h4>
              <Tabs onChange={scrollToSection} active={currentTab}>
              {
                data.filter(s => {return s.active}).map((item, i) => (
                  <Tabs.tab key={i}>{item.name}</Tabs.tab>
                ))
              }
              </Tabs>
            </Grid.cell>
          </Grid>
        </Container>
      </header>

      {/*MAIN*/}
      <main className="carte-main">
        <Container center className='full-height'>

        {firstSection &&
          <div className="flex-center">
            <h2 className="h5 mb-2 text-center">Seção criada com sucesso!</h2>
            <p className="text-muted mt-0 mb-4 text-center">Agora adicione um produto a sua seção.</p>
            <ButtonAction onClick={() => setModal('newItem')} icon="plus">Adicionar produto</ButtonAction>
          </div>
        }
        {!firstSection &&
        <Grid>
          <Grid.cell className="start-1_lg end-1_lg hide block_lg">
            <CarteActions maxProducts={maxProducts} company={company} className="carte-actions-aside" setCurrentItemData={setCurrentItemData} setModal={setModal} />
          </Grid.cell>
          <Grid.cell className="start-2_lg end-11_lg">

            <h4 className="mt-2 mb-3 hide_lg">{company.name}</h4>
          {
            data.filter(s => {return s.active}).map((section, sectionIndex) =>  (
              <div key={sectionIndex}>
                <h5 id={'section-'+sectionIndex}>
                  {section.name}
                </h5>
                <div className="cards-carte">
                  <Grid>
                  { (section.items && section.items.length) > 0 &&
                    section.items.map((item, i) => (
                      <Grid.cell className="cell-4_lg" key={i}>
                        <CardCarte
                          switchLabel="produto"
                          gtagPrefix="produtos"
                          data={{sectionId:section.id, ...item}}
                          onEditClick={d => showEditModal(d, i)}
                          onEnableChange={v => setItemEnabled(v, item.id, section.id)}
                        />
                      </Grid.cell>
                    ))
                  }
                  </Grid>
                </div>
              </div>
            ))
          }
          </Grid.cell>
        </Grid>
        }

        </Container>
      </main>

      {/*MODAL*/}
      <Modal show={modal}>
        <Modal.content
          show={modal==='newItem' || modal==='updateItem'}
          className="size-4"
          disabled={loading}
          onClose={setModal}
          header={
            <>
              {modal==='updateItem' ?
                'Atualizar produto'
                :
                'Adicionar produto'
              }
            </>
          }
          footer={
            <>
              {modal==='updateItem' ?
                <div className="flex-row_md flex-column-reverse">
                  <Button gtag="editar-produto-deletar" disabled={loading} className="full normal_md ml-auto mr-2 width-auto_md mt-2 mt-0_md" onClick={() => setModal('confirmRemove')}>Deletar</Button>
                  <Button loading={loading} className="primary full normal_md width-auto_md" onClick={updateItem}>Atualizar</Button>
                </div>
                :
                <div className="flex">
                  <Button loading={loading?'Salvando...':''} className="primary ml-auto full width-auto_md" onClick={newItem}>Salvar</Button>
                </div>
              }
            </>
          }
         >
         <form onSubmit={e => {
           e.preventDefault();(
             modal==='updateItem'?
             updateItem()
             :
             newItem()
           )}}>
           <Grid>
             <Grid.cell className="cell-6_md">

              <Field
                type="select"
                options={sections}
                value={currentItemData?currentItemData.sectionId:currentSection}
                onChange={e => updateModalItemData(e.target.value, 'sectionId')}
                required
                disabled={loading}
              >Seção</Field>

              <Field
                ref={fieldItemName}
                value={currentItemData?currentItemData.name:''}
                onChange={e => updateModalItemData(e.target.value, 'name')}
                required
                disabled={loading}
                error={apiErrors&&apiErrors.name}
              >Nome</Field>

              <Field
                ref={fieldItemText}
                value={currentItemData?currentItemData.description:''}
                onChange={e => updateModalItemData(e.target.value, 'description')}
                type="textarea"
                maxLength={1000}
                disabled={loading}
                error={apiErrors&&apiErrors.description}
              >Descrição</Field>

              <Field
                ref={fieldItemPrice}
                value={currentItemData?decimalToCurrency(currentItemData.price):''}
                onValueChange={e => updateModalItemData(currencyToDecimal(e.formattedValue), 'price')}
                required
                type="currency"
                placeholder="R$"
                disabled={loading}
                error={apiErrors&&apiErrors.price}
              >Preço</Field>

             </Grid.cell>
             <Grid.cell className="cell-6_md">
               <Field
                type="image"
                value={(currentItemData&&currentItemData.image)?currentItemData.image.original:null}
                onChange={setItemImage}
                disabled={loading}
                error={apiErrors&&apiErrors.image}
              >Envie a foto do seu produto</Field>
             </Grid.cell>
           </Grid>
         </form>
        </Modal.content>

        <Modal.content
          disabled={loading}
          show={modal==='confirmRemove'}
          className="size-1"
          onClose={setModal}
          header={<span>Deletar produto</span>}

          footer={
            <Grid>
              <Grid.cell className="cell-6">
                <Button gtag="editar-produto-deletar-confirmar" loading={loading} className="error full min-width-auto" onClick={removeItem}>Sim</Button>
              </Grid.cell>
              <Grid.cell className="cell-6">
                <Button gtag="editar-produto-deletar-cancelar" disabled={loading} className="full min-width-auto" onClick={() => setModal(null)} >Cancelar</Button>
              </Grid.cell>
            </Grid>
          }
         >
          <p className="text-bold text-center">Tem certeza que deseja deletar esse produto?</p>
          <p className="text-muted text-center">Todos os produtos vinculados a ela serão apagados.</p>
        </Modal.content>

      </Modal>
    </Page>
  );
}


const CarteActions = props => {
  return (
    <div className={"carte-actions" + (props.className?' '+props.className:'')}>
      <ButtonAction disabled={props.maxProducts} gtag="menu-novo-produto" className="circled primary" onClick={() => {props.setCurrentItemData(null); props.setModal('newItem')}} icon="plus">Novo produto</ButtonAction>
      <ButtonAction gtag="menu-secoes" link={Link} to="/admin/menu/sections" className="primary circled" icon="edit-section">Seções</ButtonAction>
      <ButtonAction gtag="menu-organizar" link={Link} to="/admin/menu/sort" className="primary circled" icon="sort">Organizar</ButtonAction>
      <ButtonAction gtag="menu-ver" href={process.env.REACT_APP_SITE_URL+'/'+props.company.slug} target="_blank" className="primary circled" icon="eye">Ver menu</ButtonAction>
    </div>
  )
}

export default Front;
