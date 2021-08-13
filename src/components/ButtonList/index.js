import React, { useState, useEffect } from 'react';

const ButtonList = ({className, data, onClick, ...props}) => {
	const [selected, setSelected] = useState()

	useEffect(() => {
		if (data[0].value) {
			setSelected(data[0].value)
		}
	}, [])


  let c = (
    'ButtonList'+
    (className?' '+className:'')
  )

  return (
		<span className={c}>
			{
				data.map((item, i) => {
					return (
						<button className={selected === item.value?'active':''} onClick={()=>{onClick(item.value); setSelected(item.value);}} key={i}>{item.label}</button>
					)
				})
			}
		</span>
  );
};

export { ButtonList };
