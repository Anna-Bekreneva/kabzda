import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
	titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
	console.log('Accordion rendering');

	const [state, dispatch] = useReducer(reducer, {collapsed: false})

	return (
		<>
			<AccordionTitle title={props.titleValue} onClick={() => {dispatch({type: TOGGLE_COLLAPSED})}}/>
			{!state.collapsed && <AccordionBody/>}
		</>
	);
}

type AccordionTitlePropsType = {
	title: string
	onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
	return <h3 onClick={() => props.onClick()}>---{props.title}---</h3>;
}

function AccordionBody() {
	console.log('AccordionBody rendering');

	return (
		<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
	);
}