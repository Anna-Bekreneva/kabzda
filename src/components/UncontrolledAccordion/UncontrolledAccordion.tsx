import React, {useState} from 'react';

type AccordionPropsType = {
	titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
	console.log('Accordion rendering');

	let [collapsed, setCollapsed] = useState(true)

	return (
		<>
			<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
			{!collapsed && <AccordionBody/>}
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