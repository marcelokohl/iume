import React from 'react';
import { Card, Button, Icon, Ellipsis, Image, Field } from "blackflag"

const CardCarteTitle = props => {
	return (
		<Card className="card-carte card-carte-title" footer={<><Button className="circle"><Icon name="edit"/></Button><Field.switch/></>}>
      <h5>Entradas</h5>
      <Button className="circle"><Icon name="plus"/></Button>
		</Card>
	)
};

export { CardCarteTitle }
