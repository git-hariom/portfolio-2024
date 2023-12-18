import { React } from 'react';
import Label from '../../Label';
import "../index.scss";

const LabelExamples = () => {

    return (
       <div className='examples-v1-wrapper'>
            <Label label="Label" />
            <Label label="Label" variant="small-1"/>
            <Label label="Label" variant="small-2"/>
            <Label label="Label" variant="small-3"/>
            <Label label="Label" variant="medium-1"/>
            <Label label="Label" variant="medium-2"/>
            <Label label="Label" variant="medium-3"/>
            <Label label="Label" variant="large-1"/>
            <Label label="Label" variant="large-2"/>
            <Label label="Label" variant="large-3"/>
            <Label label="Label" variant="extra-large-1"/>
            <Label label="Label" variant="extra-large-2"/>
            <Label label="Label" variant="extra-large-3"/>
            <Label label="Label" variant="small-1" bold/>
            <Label label="Label" variant="small-2"/>
            <Label label="Label" variant="small-3"/>
            <Label label="Label" style={{
                color: 'red',
                fontSize: '42px',
                fontWeight: 600
            }}/>
       </div>
    )
}

export default LabelExamples;