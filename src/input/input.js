import React from 'react';

export const Input = ({ onChange, label, ...props }) => {
	return <input aria-label={label} onChange={onChange} placeholder={label} {...props}/>
}