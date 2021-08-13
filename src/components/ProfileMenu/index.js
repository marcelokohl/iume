import React, { useState } from 'react';
import { Icon } from '../';

const ProfileMenu = ({data, onClick, active, ...props}) => {

	return (
		<ul className="profile-menu" {...props}>
			{data.map((item, index) => (
				<li className={active === item.value?'active':''} key={index} onClick={() => onClick?onClick(item.value):() => {}}>
					{item.icon &&
						<Icon name={item.icon} />
					}
					<span>
						<h4 className="h6_lg">{item.title}</h4>
						{item.description &&
							<p>{item.description}</p>
						}
					</span>
					<Icon name="arrow-right" />
				</li>
			))}
		</ul>
	)
};

export { ProfileMenu }
