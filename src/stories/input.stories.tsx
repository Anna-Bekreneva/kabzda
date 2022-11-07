import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import UncontrolledOnOff from '../components/UncontrolledOnOff/UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
	title: 'input'
};

export const UncontrolledInput = () => {
	return <input type="text"/>;
};

export const TrackValueOfUncontrolledInput = () => {
	const [value, setValue] = useState('');

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const actualValue = event.currentTarget.value;
		setValue(actualValue);
	}

	return (
		<div>
			<input onChange={onChange} type="text"/>
			{value}
		</div>
	)
}

export const GetValueOfUncontrolledInputByButtonPreses = () => {
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const save = () => {
		const el = inputRef.current as HTMLInputElement
		setValue(el.value)
	}

	return (
		<div>
			<input type="text" ref={inputRef}/>
			<button onClick={save}>save</button> -actual value: {value}
		</div>
	)
}

export const controlledInput = () => {
	const [parentValue, setParentValue] = useState("");
	const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

	return <input type="text" value={parentValue} onChange={onChange}/>
}

export const controlledCheckbox = () => {
	const [parentValue, setParentValue] = useState(true);
	const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

	return <input type="checkbox" onChange={onChange} checked={parentValue}/>
}

export const controlledSelect = () => {
	const [parentValue, setParentValue] = useState<string | undefined>("2");

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

	return <select value={parentValue} onChange={onChange}>
		<option value="1">Minsk</option>
		<option value="2">Moscow</option>
		<option value="3">Kiev</option>
	</select>
}

export const ControlledInputWithFixedValue = () => <input type="text" value={'it-incubator.by'}/>
