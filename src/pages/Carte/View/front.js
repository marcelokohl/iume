import React, { useState, useEffect } from 'react';
import {
  Page, Container, Tabs, Grid, Icon, Logo,
  Card, Ellipsis, PageFooter, CardCarte,
  Button, Modal, Image, Spinner, utils, decimalToCurrency, gtag
} from '../../../components';

import { Link } from "react-router-dom";

const Front = ({apiFeedback, company, apiLoaded, data, enabled, notFound, ...props}) => {
  const [modal, setModal] = useState(null)
  const [currentTab, setCurrentTab] = useState(0)
  const [productData, setProductData] = useState([])

  let currentTarget
  let target
  var timer = null;

  const scrollToSection = (t) => {
    utils.scrollToId('section-'+t, (window.innerWidth<994?240:200))
    setCurrentTab(t)
  }

  useEffect(() => {
    if (company.name) {
      document.title = 'iume | ' + company.name
    }
  }, [company])

  utils.onWindowScroll((x, y) => {
    for (var i = 0; i < 100; i++) {
      let e = document.getElementById('section-'+i)
      // console.log(i);
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
        // console.log(target);
      }
    }, 150);

  })
  if (!apiLoaded) {
    return (
      <Page name="view" className="flex-center" main={false}>
        <Spinner className="spinner-page" />
      </Page>
    )
  }
  if (!enabled || notFound) {
    return (
      <Page name="view" className="Carte" main={false}>
        <Container center>
          <Link to="/">
            <Logo className="mt-3 size-1-2" />
          </Link>
        </Container>
        <Container center>
          <h1 className="text-center mt-7">Ops!</h1>
          <p className="text-center text-muted">Parece que esse menu não está ativo.</p>
        </Container>
      </Page>
    )
  }
  return (
    <Page name="view" className="Carte" main={false}>
      <div className="bottom-fixed pb-3">
        <Container center>
          <Button gtag="menu-usuario-topo" onClick={() => scrollToSection(0)} className="circled"><Icon name="arrow-top" /></Button>
        </Container>
      </div>
      <header className="carte-header">
        <Container center>
          <h4 className="m-0 pt-3">{company.name}</h4>
        </Container>
        <Container center className="tabs-container">
          <Tabs onChange={v => {gtag('menu-usuario-navegar-secao');scrollToSection(v)}} active={currentTab}>
          {
            data.map((item, i) => (
              <Tabs.tab key={i}>{item.name}</Tabs.tab>
            ))
          }
          </Tabs>
        </Container>
      </header>

      {/*MAIN*/}
      <main className="carte-main">
        <Container center className='full-height'>
          {
            data.map((section, sectionIndex) =>  (
              <div key={sectionIndex}>
                <h5 className=" mb-1" id={'section-'+sectionIndex}>
                  {section.name}
                </h5>
                <p className="text-muted my-1">{section.description}</p>
                <div className="cards-carte">
                  <Grid>
                  { (section.items && section.items.length) > 0 &&
                    section.items.map((item, i) => (
                      <Grid.cell className="cell-4_md cell-3_lg" key={i}>
                        <CardCarte onClick={() => {setModal('product'); gtag('menu-usuario-produto-'+'idDoRestaurante-'+item.id); setProductData({section:section.name, ...item})}} view data={{sectionId:section.id, ...item}} />
                      </Grid.cell>
                    ))
                  }

                  </Grid>
                </div>
              </div>
            ))
          }
        </Container>
      </main>

      <footer className="PageFooter">
        <Container center className="text-center">
          <p className="text-center mb-1">Quer um Menu igual a esse para o seu restaurante?<br/>Acesse:</p>
          <a onClick={() => gtag("menu-usuario-link-iume")} href={process.env.REACT_APP_SITE_URL}>iume.com.br</a>
        </Container>
      </footer>


        {/*MODAL*/}
        <Modal show={modal}>

          <Modal.content
            show={modal==='product'}
            className="size-3 modal-product"
            onClose={setModal}
          >
            {productData.image &&
              <Image src={productData.image.original} />
            }
            <div className="px-3 pt-4 pb-3">
              <h5 className="h6 text-muted mb-0">{productData.section}</h5>
              <h3 className="h4 mt-0 mb-2">{productData.name}</h3>
              <p className="mt-0 mb-4 text-break-spaces">{productData.description}</p>
              <p className="text-primary text-bold">{decimalToCurrency(productData.price)}</p>
              <Button className="mx-auto mt-3 block size-4" onClick={() => setModal(false)}>Voltar</Button>
            </div>
          </Modal.content>

        </Modal>
    </Page>
  );
}

export default Front;
