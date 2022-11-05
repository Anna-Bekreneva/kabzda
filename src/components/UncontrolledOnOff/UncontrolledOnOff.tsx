import React, {useState} from 'react';

type PropsType = {
	onChange: (on: boolean) => void
	defaultOn?: boolean
}

function UncontrolledOnOff(props: PropsType) {

	console.log('OnOff rendering')

	const [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false)

	console.log("on: " + on )

	const onStyle = {
		border: "1px solid #000",
		padding: "10px 20px",
		marginRight: "5px",
		backgroundColor: on ? "green" : "white",
		transition: "background-color 0.3s",
		cursor: "pointer",
	};

	const offStyle = {
		border: "1px solid #000",
		padding: "10px 20px",
		marginRight: "10px",
		backgroundColor: on ? "white" : "red",
		transition: "background-color 0.3s",
		cursor: "pointer",
	};

	const indicatorStyle = {
		width: "12px",
		height: "12px",
		borderRadius: "100%",
		border: "1px solid #000",
		display: "inline-block",
		backgroundColor: on ? "green" : "red",
	}

	const onClicked = () => {setOn(true); props.onChange(true)}
	const offClicked = () => {setOn(false); props.onChange(false)}

	return (
		<div>
			<button	type="button" onClick={onClicked} style={onStyle}>On</button>
			<button	type="button" onClick={offClicked} style={offStyle}>Off</button>
			<span style={indicatorStyle}></span>
		</div>
	)
}

export default UncontrolledOnOff;