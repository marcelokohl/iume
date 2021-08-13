import React from 'react';
import { Page, Container, Field, Button, Grid, Icon, Logo, ButtonBack, Image } from '../../components';
import history from '../../services/history'
import imageEnter from '../../assets/images/enter.svg'

const LoginPage = props => {

  return (
    <Page className="LoginPage">
      <Container center>
        <Grid className="full-y">
          <Grid.cell className="start-3_sm end-10_sm start-4_md end-9_md start-2_lg end-5_lg start-y-1 flex-center">

            <Grid className="full-y relative">
              <Grid.cell>
                <Logo className="mr-auto mb-6 inline-block_lg hide mt-3" />
              </Grid.cell>
              <Grid.cell>
                {props.buttonBack ?
                  props.buttonBack
                  :
                  <ButtonBack className="mb-3" />
                }
                <div className="card-login mb-6">
    				      <h1 className="h3 text-center">{props.title}</h1>
                  {props.children}
                </div>
              </Grid.cell>
            </Grid>
          </Grid.cell>
          <Grid.cell className="col-right start-5_lg end-12_lg start-y-1">
            <div className="bg-primary full-y flex-right">
              <Image src={imageEnter} />
            </div>
          </Grid.cell>
        </Grid>
      </Container>
    </Page>
  );
}

export { LoginPage };
