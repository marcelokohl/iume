import React, {useEffect} from 'react';
import { Page, Container, Image, Button, Grid, PageFooter, Logo, Link, HomeNav, PrivacyPolicy } from '../../components';

const Front = ({data, ...props}) => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <Page name="terms">
      <HomeNav />
        <Container center>
        <Grid>
          <Grid.cell className="start-2_sm end-11_sm">
            <PrivacyPolicy />
          </Grid.cell>
        </Grid>
        </Container>
    </Page>
  );
}

export default Front;
