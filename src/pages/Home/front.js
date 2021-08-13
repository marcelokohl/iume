import React from 'react';
import { Page, Container, Image, Button, Grid, PageFooter, Logo, Link, HomeNav } from '../../components';
import image1 from '../../assets/images/home1.svg'
import imageb1 from '../../assets/images/homeb1.svg'
import imageb2 from '../../assets/images/homeb2.svg'
import imageb3 from '../../assets/images/homeb3.svg'
import imaged1 from '../../assets/images/homed1.svg'

import image_bright from '../../assets/images/home-icons/bright.svg'
import image_clock from '../../assets/images/home-icons/clock.svg'
import image_edit from '../../assets/images/home-icons/edit.svg'
import image_leaf from '../../assets/images/home-icons/leaf.svg'
import image_money from '../../assets/images/home-icons/money.svg'
import image_print from '../../assets/images/home-icons/print.svg'
import image_save from '../../assets/images/home-icons/save.svg'
import image_virus from '../../assets/images/home-icons/virus.svg'

const imagesb = [imageb1, imageb2, imageb3]
const images_icons = [
  image_virus,
  image_print,
  image_leaf,
  image_clock,
  image_bright,
  image_save,
  image_edit,
  image_money,
]
const Front = ({data, ...props}) => {

  return (
    <Page name="home">
      <HomeNav />
      <Container center>
        <Grid>
          <Grid.cell className="start-5_md end-11_md start-y-1_md flex-center">
            <Image src={image1} className="full" />
          </Grid.cell>
          <Grid.cell className="start-2_md end-5_md start-y-1_md flex-center">
            <h1 className="text-center text-left_md mb-2">{data.cover.title}</h1>
            <h6 className="text-center text-left_md text-muted m-0 full mb-2">Cardápio online para o seu restaurante</h6>
            <Button link={Link} className="primary size-4 flex mx-auto ml-0_md" to='/admin/login' gtag="home-criar">Criar</Button>
          </Grid.cell>
        </Grid>

        <Grid className="mt-6">
          <Grid.cell className="start-2_md end-11_md">
            <h2 className="text-center mt-0">{data.how.title}</h2>
            <Grid className="how">
              {
                data.how.items.map((item, i) => {
                  return (
                    <Grid.cell key={i} className="size-4_md">
                      <Image className="home-thumb flex-center" src={imagesb[i]} />
                      <h3 className="text-center">{item.title}</h3>
                      <p className="text-center text-muted mb-0">{item.text}</p>
                    </Grid.cell>
                  )
                })
              }
            </Grid>
          </Grid.cell>
        </Grid>


        <Grid className=" mt-6">
          <Grid.cell className="start-3_lg end-10_lg">
            <h2 className="mt-0">{data.benefits.title}</h2>
          </Grid.cell>
          {
            data.benefits.items.map((item, i) => {
              let c = 'cell-6 start-3_lg end-4_lg'
              if (i % 3 === 1) {
                c = 'cell-6 start-6_lg end-7_lg'
              }
              else if (i % 3 === 2) {
                c = 'cell-6 start-9_lg end-10_lg'
              }
              return (
                <Grid.cell key={i} className={c}>
                  <Image src={images_icons[i]} />
                  <h3 className="h6 mt-1">{item.title}</h3>
                  <p className="text-muted">{item.text}</p>
                </Grid.cell>
              )
            })
          }
        </Grid>

        <Grid className="mt-6">
          <Grid.cell className="start-4_md end-5_md">
            <Image className="full size-1-5 size-2_md mx-auto" src={imaged1} />
          </Grid.cell>
          <Grid.cell className="start-7_md end-9_md">
            <h2 className="mt-0 text-center text-left_md">Confira como pode ficar o seu menu</h2>
            <Button className="primary size-4 mx-auto flex" href={'https://iume.com.br/cantina-da-nonna'} gtag="home-ver-mais">Ver +</Button>
          </Grid.cell>
        </Grid>

        <Grid className="mt-6">
          <Grid.cell className="start-3_md end-10_md">
            <h2 className="text-center mt-0">Como criar seu menu virtual</h2>

            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/Ga4j7YuU4DA?rel=0&controls=0"
                frameborder="0"
                allowfullscreen >
              </iframe>
            </div>
            <Button link={Link} className="primary size-4 mx-auto flex" to='/admin/login' gtag="home-criar-bottom">Criar</Button>
          </Grid.cell>
        </Grid>


      </Container>
      <PageFooter type="home" className="mb-2 mt-6" title="Contato" label="Enviar mensagem" />
      <p className='home-actions mb-0'>
        {/*
          */}
        <Link gtag="home-termos-e-condicoes" to="/terms">Termos e Condições</Link>
        <Link gtag="home-politica-de-privacidade" to="/privacy-policy">Política de Privacidade</Link>
      </p>
    </Page>
  );
}

export default Front;
