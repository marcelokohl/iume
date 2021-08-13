import React, { useState } from 'react';
import QR  from 'qrcode.react';

const QRCode = props => {
	const {className} = props
	return (
		<div className="QRCode">
			<QR size={768} value={props.value} />
		</div>
	)
};

export { QRCode }
