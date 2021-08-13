import React, {useState, useRef, useEffect} from 'react';
import { Page, Container, Grid, Card, Menu, PageFooter, ProfileMenu, Button, ButtonBack, PrivacyPolicy, Terms, utils } from '../../components';
import history from "../../services/history.js";

import About from './About'
import Password from './Password'
import Settings from './Settings'
import Whatsapp from './Whatsapp'
import Address from './Address'
// import PrivacyPolicy from '../PrivacyPolicy'

const Front = ({logoutFeedback, ...props}) => {
  const [current, setCurrent] = useState('')
  const pageRef = useRef()
  useEffect(() => {
    if (window.innerWidth > 993 && current === '') {
       setCurrent('about')
    }
  }, [])
  useEffect(() => {
    console.log(current);
    pageRef.current.alert(false)
  }, [current])
  // console.log('current: ',current);
  // utils.onWindowResize(() => {
  //   // console.log('current: ',current);
  //   if (window.innerWidth > 993 && current === '') {
  //      setCurrent('about')
  //   }
  // })
  return (
    <Page ref={pageRef} className="Profile">
      <Container center>
        <Grid className="mt-7 mt-8_lg">
          <Grid.cell className={"start-1 end-12 start-1_lg end-4_lg profile-menu-container" + (current?' profile-menu-container-open':'')}>
            <h2 className="mt-0">Perfil</h2>

            <h3 className="h6 text-muted mt-3 mb-2">Conta</h3>
            <ProfileMenu active={current} onClick={setCurrent} data={[
              {title:'Dados', description:'Email, nome', icon:'user', value:'about'},
              {title:'Senha', icon:'key', value:'password'}
            ]} />

            <h3 className="h6 text-muted mt-5 mb-2">Informações do restaurante</h3>
            <ProfileMenu active={current} onClick={setCurrent} data={[{title:'Endereço', icon:'location', value:'address'}]} />

            <h3 className="h6 text-muted mt-5 mb-2">Menu</h3>
            <ProfileMenu active={current} onClick={setCurrent} data={[{title:'Configurações', icon:'cog', description:'Ativar, desativar, link', value:'settings'}]} />
            {/*
              <h3 className="h6 text-muted mt-5 mb-2">Ferramentas</h3>
              <ProfileMenu active={current} onClick={setCurrent} data={[{title:'Whatsapp', icon:'whatsapp', value:'whatsapp', description:'Finalizar pedido no whatsapp'}]} />
            */}


            <h3 className="h6 text-muted mt-5 mb-2">Jurídico</h3>
            <ProfileMenu active={current} onClick={setCurrent} data={[{title:'Termos e condições', value:'terms'}, {title:'Políticas de privacidade', value:'policy'}]} />

            <Button gtag="perfil-sair" loading={logoutFeedback.status === 'loading'?'Saindo...':false} className="full mt-3" onClick={() => props.logout()} >Sair</Button>

            <PageFooter gtag="perfil-sugestao" />
          </Grid.cell>

          <Grid.cell className="start-5 end-5 profile-page-divider-container">
            <div className="profile-page-divider"></div>
          </Grid.cell>

          <Grid.cell className={`start-1 end-12 start-6_lg end-${current == 'terms' || current == 'policy'?12:10}_lg`}>

            {current != '' &&
              <ButtonBack className="mb-3 hide_lg" onClick={() => setCurrent('')} />
            }
            {current == 'about' &&
              <About pageRef={pageRef} />
            }
            {current == 'password' &&
              <Password pageRef={pageRef} />
            }
            {current == 'settings' &&
              <Settings pageRef={pageRef} />
            }
            {current == 'whatsapp' &&
              <Whatsapp gotoTab={setCurrent} pageRef={pageRef} />
            }
            {current == 'policy' &&
              <PrivacyPolicy pageRef={pageRef} />
            }
            {current == 'terms' &&
              <Terms pageRef={pageRef} />
            }
            {current == 'address' &&
              <Address pageRef={pageRef} />
            }
          </Grid.cell>

        </Grid>


      </Container>

      <Menu menuHighlighter="profile" />
    </Page>
  );
}

export default Front;
