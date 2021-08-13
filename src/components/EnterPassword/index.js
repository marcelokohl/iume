import React, {useState, useEffect} from 'react';
import { Button, Field, Icon } from "blackflag"
import { Link } from "react-router-dom";

const EnterPassword = props => {
	const [pass1, setPass1] = useState('')
  const [pass2, setPass2] = useState('')
  const [checkLength, setCheckLength] = useState(false)
  const [checkSame, setCheckSame] = useState(false)

  useEffect(() => {
    setCheckLength(pass1.length >= 8 && pass2.length >= 8)
    setCheckSame(pass1===pass2)

  }, [pass1, pass2])

  useEffect(() => {
		if(props.onChange) {
			props.onChange((checkLength && checkSame)?pass1:false)
		}
  }, [checkLength, checkSame])

	return (
		<>
			<Field focus={props.focus}  required onChange={e => setPass1(e.target.value)} type="password">{props.passLabel?props.passLabel:'Senha'}</Field>
			<Field required onChange={e => setPass2(e.target.value)}  type="password">{props.confirmPassLabel?props.confirmPassLabel:'Confirmar senha'}</Field>
			<small className="text-muted mt-3 block">Sua senha deve conter:</small>
			<ul className="enter-password-check small">
				<li className={checkLength?'text-success':''}><Icon name="check-circled" /> 8 digitos</li>
				<li className={(checkSame && checkLength)?'text-success':''}><Icon name="check-circled" /> Senha e confirmar senha devem ser iguais</li>
			</ul>
		</>
	)
};

export { EnterPassword }
