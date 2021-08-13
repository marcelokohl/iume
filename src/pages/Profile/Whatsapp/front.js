import React, {useRef, useState, useEffect} from 'react';
import { Field, Button, Grid, Icon, utils } from '../../../components';

const Front = ({apiFeedback, data, submit, hasAddress, hasPhone, onFieldChange, pageRef, gotoTab, ...props}) => {
  const [modal, setModal] = useState()
  const phone = useRef()
  // const [phones, setPhones] = useState([...data])

  useEffect(() => {
    if (apiFeedback.form.status === 'success') {
      pageRef.current.alert({type:'success', message:<span><Icon name="check-circled" /> Dados alterados com sucesso!</span>, delay:5000})
    }
  }, [apiFeedback])

  useEffect(() => {
    console.log("hasAddress", hasAddress);
    if (hasAddress === false) {
      utils.timeout(() => {
        pageRef.current.alert({
          type:'error',
          message:<span><Icon name="warning-circled" /> Você precisar cadastrar um endereço para ativar essa ferramenta.</span>,
          delay:0
        })
      },10)
    } else {
      if (hasPhone === false) {
        utils.timeout(() => {
          pageRef.current.alert({
            type:'error',
            message:<span><Icon name="warning-circled" /> Você precisar cadastrar um número de telefone para ativar essa ferramenta.</span>,
            delay:0
          })
        },10)
      }
    }
  }, [hasAddress, hasPhone])

  const checkFeedbackError = (api, field) => {
    return api[field] && api[field].status==='error' && api[field].message
  }
  console.log(data.phone.length)
  return (
    <div>
      <h4 className="mt-0">Pedido Whatsapp</h4>
      {hasAddress &&
        <div>
          <Field
            error={checkFeedbackError(apiFeedback, 'whatsapp')}
            type="switch"
            checked={data.active}
            onChange={e=>onFieldChange('whatsapp', e.target.checked)}
          >Ativar</Field>
          <Field
            error={checkFeedbackError(apiFeedback, 'phone')}
            required
            type="phone"
            value={data.phone}
            ref={phone}
            onChange={e=>onFieldChange('phone', e.target.value)}
          >Whatsapp</Field>


          <Button
            gtag="perfil-salvar-telefone"
            loading={(apiFeedback.form&&apiFeedback.form.status=='loading')?'Salvando...':false}
            className="primary full mt-3"
            onClick={submit}
            disabled={phone.current && phone.current.value.length < 14 }
          >Salvar</Button>
        </div>
      }
      {!hasAddress &&
        <div>
          <p className="text-muted">Você precisar cadastrar um endereço para ativar essa ferramenta.</p>
          <Button
            gtag="perfil-telefone-cadastrar-endereco"
            className="primary full"
            onClick={() => gotoTab('address')}
          >Salvar</Button>
        </div>
      }

    </div>
  );
}

export default Front;
