import React, {useState} from 'react';
import {RatingValueType} from '../Rating/Rating';

type RatingPropsType = {
	defaultValue?:  RatingValueType
	onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {
	console.log("Rating rendering")

	const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

	return (
		<ul>
			<li>
				<Star selected={ value > 0 } setValue={() => {setValue(1); props.onChange(1)}}/>
			</li>
			<li>
				<Star selected={ value > 1 } setValue={() => {setValue(2); props.onChange(2)}}/>
			</li>
            <li>
				<Star selected={ value > 2 } setValue={() => {setValue(3); props.onChange(3)}}/>
			</li>
			<li>
				<Star selected={ value > 3 } setValue={() => {setValue(4); props.onChange(4)}}/>
			</li>
			<li>
				<Star selected={ value > 4 } setValue={() => {setValue(5); props.onChange(5)}}/>
			</li>
        </ul>
	)
}

type StarPropsType = {
	selected: boolean
	setValue: () => void
}

function StarSecret(props: StarPropsType) {
	console.log("Star rendering")

	return <span onClick={() => props.setValue()}> {props.selected ? <b>Star</b> : "star"} </span>
}

const Star = React.memo(StarSecret)