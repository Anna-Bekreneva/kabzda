import React from "react";

export type SelectPropsType = {
	value: any
	onClick: (value: any) => void
	items: Array<ItemType>
	//onClick: (value: any) => void
}

type ItemType = {
	title: string
	value: any
}

export function Select(props: SelectPropsType) {


	return (
		<div>
            <div>{}</div>
			{props.items.map((i => <div>{i.title}</div>))}
        </div>
	)
}
