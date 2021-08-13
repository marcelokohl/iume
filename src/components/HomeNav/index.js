import React, { useState } from 'react';
import {Container, Logo, Link} from '../'

const HomeNav = props => {
	const {className} = props
	return (
		<nav className="HomeNav mt-3 mb-5">
			<Container center className="flex-space-between">
				<Link to="/">
					<Logo />
				</Link>
				<Link to='/admin/login' gtag="home-entrar">Entrar</Link>
			</Container>
		</nav>
	)
};

export { HomeNav }
