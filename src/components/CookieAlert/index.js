import React, { useState } from 'react';
import { Button, Grid, Container, Link, gtag, utils  } from '../';

const CookieAlert = ({...props}) => {
	const [ok, setOk] = useState()
	const acceptCookies = v => {
		if (v) {
			localStorage.setItem('cookies_enabled', 'true');
			utils.timeout(() => {
				gtag('cookie_aceito')
			}, 300)
		} else {
			localStorage.setItem('cookies_enabled', 'false');
		}
		setOk(true)
	}
	return (
		<div className={"CookieAlert" + (ok?' ok':'')}>
			<Container center>
				<div class="CookieAlert-inner">
					<Grid>

						<Grid.cell className="cell-8_lg pr-4_lg">
							<p className="text-bold m-0 mb-1">
								Nosso site usa cookies para melhorar a navegação.
							</p>
							<p className="text- m-0">
								Saiba mais em <Link to="/privacy-policy">política de privacidade.</Link>
							</p>
						</Grid.cell>
						<Grid.cell className="cell-6 cell-2_lg flex-center">
							<Button className="full m-0" onClick={() => acceptCookies(false)}>Não aceito</Button>
						</Grid.cell>
						<Grid.cell className="cell-6 cell-2_lg flex-center">
							<Button className="primary full m-0" onClick={() => acceptCookies(true)}>Aceito</Button>
						</Grid.cell>
					</Grid>
				</div>
			</Container>
		</div>
	)
};

export { CookieAlert }
