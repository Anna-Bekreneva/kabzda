import React, {useState} from 'react';

type OnOffPropsType = {
	on: boolean
	onChange: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

	console.log('OnOff rendering')

	const onStyle = {
		border: "1px solid #000",
		padding: "10px 20px",
		marginRight: "5px",
		backgroundColor: props.on ? "green" : "white",
		transition: "background-color 0.3s",
		cursor: "pointer",
	};

	const offStyle = {
		border: "1px solid #000",
		padding: "10px 20px",
		marginRight: "10px",
		backgroundColor: props.on ? "white" : "red",
		transition: "background-color 0.3s",
		cursor: "pointer",
	};

	const indicatorStyle = {
		width: "12px",
		height: "12px",
		borderRadius: "100%",
		border: "1px solid #000",
		display: "inline-block",
		backgroundColor: props.on ? "green" : "red",
	}

	return (
		<div>
			<button	type="button" onClick={() => props.onChange(true)} style={onStyle}>On</button>
			<button	type="button" onClick={() => props.onChange(false)} style={offStyle}>Off</button>
			<span style={indicatorStyle}></span>
		</div>
	)
}