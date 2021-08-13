import React, {useState, useEffect, useRef} from 'react';
import { Field, Button, Grid, Icon, Modal, Divider } from '../../../components';

const Front = ({apiFeedback, data, submit, onFieldChange, pageRef, ...props}) => {
  const [modal, setModal] = useState()
  const [cepLoading, setCepLoading] = useState(true)

  useEffect(() => {
    // console.log(apiFeedback.cep.status);
    if (apiFeedback.form.status === 'success') {
      pageRef.current.alert({type:'success', message:<span><Icon name="check-circled" /> Dados alterados com sucesso!</span>, delay:5000})
    }
    if (apiFeedback.cep && apiFeedback.cep.status==='loading') {
      setCepLoading(true)
    } else {
      setCepLoading(false)
    }
  }, [apiFeedback])

  const checkFeedbackError = (api, field) => {
    return api[field] && api[field].status==='error' && api[field].message
  }
  // const refCep = useRef()
  // const cepLoading = () => {
  //   if (true) {
  //
  //   }
  //   return true
  //   //
  // }

  return (
    <div>
        <h4 className="mt-0">Endereço</h4>
        {/* <Button
          className="full"
          gtag="perfil-usar-minha-localizacao"
        >Usar minha localização</Button>
        <Divider className="my-2">ou</Divider> */}
        <Field
          error={checkFeedbackError(apiFeedback, 'cep')}
          required
          type="cep"
          // mask="99999-999"
          value={data.cep}
          loading={cepLoading}
          className="mb-1"
          onChange={e => onFieldChange('cep', e.target.value)}
        >CEP</Field>
        <div className="mb-2">
          <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/" target="_blank">Não sei o meu CEP</a>
        </div>
        <Field
          error={checkFeedbackError(apiFeedback, 'street')}
          required
          disabled={cepLoading}
          value={data.street}
          onChange={e=>onFieldChange('street', e.target.value)}
        >Endereço</Field>
        <Field
          error={checkFeedbackError(apiFeedback, 'number')}
          disabled={cepLoading}
          type="text"
          value={data.number}
          onChange={e=>onFieldChange('number', e.target.value)}
        >Número</Field>
        <Field
          error={checkFeedbackError(apiFeedback, 'complement')}
          disabled={cepLoading}
          value={data.complement}
          onChange={e=>onFieldChange('complement', e.target.value)}
        >Complemento</Field>
        <Field
          error={checkFeedbackError(apiFeedback, 'neighborhood')}
          required
          disabled={data.disableNeighborhood || cepLoading}
          value={data.neighborhood}
          onChange={e=>onFieldChange('neighborhood', e.target.value)}
        >Bairro</Field>
        <Field
          error={checkFeedbackError(apiFeedback, 'city')}
          required
          disabled
          value={data.city}
          onChange={e=>onFieldChange('city', e.target.value)}
        >Cidade</Field>
        <Field
          error={checkFeedbackError(apiFeedback, 'state')}
          required
          disabled
          value={data.state}
          onChange={e=>onFieldChange('state', e.target.value)}
        >Estado</Field>

        <Button
          gtag="perfil-salvar"
          disabled={apiFeedback.cep && apiFeedback.cep.status=='loading' || !data.cep || data.cep && data.cep.length < 9}
          loading={(apiFeedback.form&&apiFeedback.form.status=='loading')?'Salvando...':false}
          className="primary full mt-3"
          onClick={submit}
        >Salvar</Button>


      <Modal show={modal}>

      </Modal>

    </div>
  );
}

export default Front;
