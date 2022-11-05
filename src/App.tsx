import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';

function App(props: any) {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <>
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}

            <Accordion collapsed={accordionCollapsed} titleValue={"Users"} onChange={() => (setAccordionCollapsed(!accordionCollapsed))}></Accordion>

            {/*<UncontrolledRating/>*/}

            <Rating value={ratingValue} onClick={setRatingValue}></Rating>

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/*<OnOff on={switchOn} onChange={(on) => {setSwitchOn(on)}}></OnOff>*/}
        </>
    );
}

export default App;
