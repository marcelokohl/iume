import React, {useState, useEffect} from 'react';
import { Field, Button, Grid, Icon } from '../../../components';

const Front = ({apiFeedback, data, updateForm, onFieldChange, pageRef, ...props}) => {
  const [modal, setModal] = useState()
  const [phones, setPhones] = useState([...data])

  useEffect(() => {
    console.log(apiFeedback);
    if (apiFeedback.form.status === 'success') {
      pageRef.current.alert({type:'success', message:<span><Icon name="check-circled" /> Dados alterados com sucesso!</span>, delay:5000})
    }
  }, [apiFeedback])

  const checkFeedbackError = (api, field) => {
    return api[field] && api[field].status==='error' && api[field].message
  }

  const updatePhone = (v,i) => {
    console.log('updatePhone: ', v);
    let a = phones
    a[i].number = v
    setPhones([...a])
  }
  const removePhone = (i) => {
    let a = phones
    a.splice(i,1)
    setPhones([...a])
  }
  const addPhone = () => {
    let a = phones
    a.push({number:''})
    setPhones([...a])
  }

  return (
    <div>
      <div>
        <h4 className="mt-0">Telefone</h4>
        {phones.map((item, index) => (
          <div key={index}>
            <Field
              error={checkFeedbackError(apiFeedback, 'phone-'+index)}
              required
              type="phone"
              value={item.number}
              onChange={e=>updatePhone(e.target.value, index)}
            >Telefone {index+1}</Field>
            <a onClick={() => removePhone(index)}>Remover</a>
          </div>
        ))}
        <div className="mt-3">
          <a onClick={() => addPhone()}>Adicionar outro número</a>
        </div>

        <Button
          gtag="perfil-salvar-telefone"
          loading={(apiFeedback.form&&apiFeedback.form.status=='loading')?'Salvando...':false}
          className="primary full mt-3"
          onClick={() => updateForm([...phones])}
        >Salvar</Button>
      </div>

    </div>
  );
}

export default Front;
