import React, {useState} from 'react';
import Front from './front';

function Page(props) {
  const [data, setData] = useState({
    cover: {
      title:'Crie seu menu digital grátis.',
      text:'Ajude a manter o distanciamento social no seu restaurante.',
    },
    how: {
      title:'Como funciona',
      items: [
        {image:'http://dummyimage.com/80',title:'Crie seu menu',text:'Cadastre seus produtos e crie seu cadapio. É super fácil!'},
        {image:'http://dummyimage.com/80',title:'Gere o Qr-code',text:'Imprima o qr-code exclusivo para o seu restaurante.'},
        {image:'http://dummyimage.com/80',title:'Deixe disponível para seus clientes',text:'Os clientes podem acessar o menu utilizando a camera do seu celular. Não é necessário baixar app.'},
      ]
    },
    benefits:{
      title:'Vantagens',
      items:[
        {image:'http://dummyimage.com/80',title:'Prevenção ao Covid',text:'Sem toques, os Clientes acessam o menu do próprio celular.'},
        {image:'http://dummyimage.com/80',title:'Acessível',text:'Imprima seu Menu direto do app para clientes que não usam celular.'},
        {image:'http://dummyimage.com/80',title:'Ecologiamente correto',text:'Diminui o uso de papel'},
        {image:'http://dummyimage.com/80',title:'Menos espera',text:'Seus clientes não precisam aguardar por um Menu, elas acessam do próprio celular.'},
        {image:'http://dummyimage.com/80',title:'Fácil',text:'Crie seu cardápio e torne-o disponível agora mesmo.'},
        {image:'http://dummyimage.com/80',title:'Economico',text:'Você mesmo cria seu cardápio sem necessidade de um profissional.'},
        {image:'http://dummyimage.com/80',title:'Você no controle',text:'Faça alterações a qualquer momento.'},
        {image:'http://dummyimage.com/80',title:'Grátis',text:'Não fazemos nenhum tipo de cobrança.'},
      ]
    }
  })
  return (
    <Front data={data} />
  );
}

export default Page;
