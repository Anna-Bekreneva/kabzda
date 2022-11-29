import React from "react";

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick: (value: any) => void
    /**
     * options color on header text
     * */
    color?: string
}

type ItemType = {
    title: string
    value: any
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
        return (
            <>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </>
        )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    return <h3 onClick={(e) => props.onChange()} style={{color: props.color ? props.color : "black"}}>---{props.title}---</h3>
}

const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionBodySecret(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")

    return (
        <ul>
            { props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>) }
        </ul>
    )
}

const AccordionBody = React.memo(AccordionBodySecret)