import React from 'react';
import { Card, Button, Icon, Ellipsis, Image, Field, decimalToCurrency, gtag } from "../"

const CardCarte = props => {
	const {data, className, gtagPrefix} = props
	const {name, description, price, image, active} = data

	const onEnableChange = v => {
		if (props.onEnableChange) {
			props.onEnableChange(v)
		}
	}
	const onEditClick = d => {
		if (props.onEditClick) {
			props.onEditClick(d)
		}
	}
	let c = (
		'card-carte'+
		(className?' '+className:'') +
		(active?'':' disabled')
	)
	return (
		<Card
			tag={props.tag}
			to={props.to}
			onClick={props.onClick}
			className={c}
			footer={ (props.footer && !props.view) &&
			<>
				<span className="flex flex-align-center">
					<Field type="switch" className="mr-1" checked={active} onChange={e => {onEnableChange(e.target.checked); gtag(e.target.checked?'menu-'+gtagPrefix+'-ativar':'menu-'+gtagPrefix+'-desativar')}}/>
					<small className={(active?'text-muted':'')}>
						{active?'Desativar':'Ativar'} {props.switchLabel}
					</small>
				</span>
				<Button className="circled" onClick={e => {onEditClick(data); gtag('menu-'+gtagPrefix+'-editar')}}><Icon name="edit"/></Button>
			</>
		}>
			<div className="card-info">
				{name && <Ellipsis tag="h6">{name}</Ellipsis>}
				{description && <Ellipsis tag="p" lines={2}>{description}</Ellipsis>}
				{price && <small className="text-primary text-bold">{decimalToCurrency(price)}</small>}
			</div>
			{image &&
				<Image className="card-image squared" src={image.original}/>
			}
		</Card>
	)
};

CardCarte.defaultProps = {
	footer: true
}

export { CardCarte }
