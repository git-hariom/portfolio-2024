import { React } from 'react';
import "./label.scss";
import { LABEL_VARIANTS } from "./label.constants";

const Label = (props) => {
    const {
        variant,
        bold,
        customStyle,
        label
    } = { ...props };

    return (
        <span className={`label-default ${LABEL_VARIANTS[variant]} ${bold ? 'label-bold' : ''}`} style={{...customStyle}}>{label}</span>
    )
}

export default Label;