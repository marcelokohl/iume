import React, {useEffect} from 'react';
import { Page, Container, Image, utils } from '../../../../components';
import { Link } from "react-router-dom";
import history from "../../../../services/history.js";
import uhulImage from '../../../../assets/images/uhul.svg'
import Lottie from 'react-lottie';
import animationData from '../../../../assets/lotties/account.json';

const Front = props => {
  useEffect(() => {
    utils.timeout(() => {
      history.push('/admin/menu/start')
    }, 4000)
  },[])
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Page className="flex-center">
      <Container center>
        <Lottie
          options={defaultOptions}
          height={170}
          width={170}
        />
        <h1 className="h3 text-center">Uhul!</h1>
        <p className="text-muted text-center">Seu restaurante foi criado.</p>
      </Container>
    </Page>
  );
}

export default Front;
