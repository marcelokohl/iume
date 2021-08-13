import React, { useState, useEffect } from 'react';
import { Button, Link, Icon, Container, Modal, Field, validateEmail, gtag as callGtag } from "../"

const Front = ({title, label, className, apiFeedback, userEmail, gtag, type, ...props}) => {
	const [modal, setModal] = useState()
	const [message, setMessage] = useState('')
	const [email, setEmail] = useState(userEmail)

	useEffect(() => {
		if(apiFeedback.form.status === 'success') {setModal('success')}
	}, [apiFeedback])

	const c = 'PageFooter'+
		(className?' '+className:'')
	return (
		<footer className={c}>
			{type != 'home' &&
				<Container center className="text-center mb-4">
					<p className="text-center mb-1">{title?title:'Sentiu falta de alguma coisa?'}</p>
					<a onClick={() => {setModal('suggestion'); callGtag(gtag)}}>{label?label:'Deixe sua sugestão'}</a>
				</Container>
			}

      <Modal show={modal}>
        <Modal.content
          show={modal==='suggestion'}
          className="size-1"
          onClose={setModal}
          header={'Sugestão'}
          footer={
						<Button
							loading={apiFeedback.form.status === 'loading'?'Enviando...':false}
							disabled={message.length < 6 || !validateEmail(email)}
							gtag={`${gtag}-enviar`}
							onClick={() => {
								// setModal('success');
								props.sendSuggestion(email + '\n' + message);
								setMessage('');
							}}
							className="primary full"
						>Enviar</Button>}
         >
					<Field
						type="email"
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					>Email</Field>
         <Field
				 	error={apiFeedback.suggestion && apiFeedback.suggestion.status === 'error' && apiFeedback.suggestion.message}
				 	type="textarea"
					rows={4}
					value={message}
					onChange={e => setMessage(e.target.value)}
					required
				>Mensagem</Field>
        </Modal.content>

        <Modal.content
          show={modal==='success'}
          className="size-1"
          onClose={setModal}
          header={<span className="text-success"><Icon name="check-circled" /> Sucesso!</span>}
          footer={<Button onClick={() => setModal(null)} className="full">Fechar</Button>}
         >
					<p className="text-bold text-center mt-0">Obrigado!</p>
					<p className="text-muted text-center">Sua opinião é muito importante para melhorarmos o iume!</p>
					<p className="text-muted text-center">Tentaremos dar um retorno o mais breve possível.</p>
        </Modal.content>
      </Modal>
		</footer>
	)
};

export default Front
