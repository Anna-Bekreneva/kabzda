import React from "react";

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    /**
     * options color on header text
     * */
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
        return (
            <>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>
            { !props.collapsed && <AccordionBody/>}
        </>
        )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={(e) => props.onChange()} style={{color: props.color ? props.color : "black"}}>---{props.title}---</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}