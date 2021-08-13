import React from 'react';
import { Button, Icon, Container, Link } from "../"
import {Logo} from '../Logo'

const Menu = props => {
	const {data} = props
	const onEnableChange = v => {
		if (props.onEnableChange) {
			props.onEnableChange(v)
		}
	}
	let items = [
		{label:"Menu", name:'menu', icon:'carte'},
		{label:"QR-Code", name:'qrcode', icon:'qrcode'},
		{label:"Perfil", name:'profile', icon:'user-circled'},
	]
	return (
		<nav className="Menu">
			<Container center>
				<Link to="/" className="p-0">
					<Logo />
				</Link>
				{items.map(function(item, i) {
					return (
						<Link
							key={i}
							gtag={'menu-usuario-'+item.name}
							to={'/admin/'+item.name}
							className={props.menuHighlighter == item.name?" active":""}
						>
							<Icon name={item.icon}/>
							<span>
								{item.label}
							</span>
						</Link>
					)
				})}

			</Container>
		</nav>
	)
};

export { Menu }
