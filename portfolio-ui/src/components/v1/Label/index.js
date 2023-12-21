import { React } from 'react';
import "./label.scss";
import { LABEL_VARIANTS } from "./label.constants";
import PropTypes from 'prop-types';

const Label = (props) => {
    const {
        variant,
        bold,
        label,
        ...restProps
    } = { ...props };

    return (
        <span className={`${LABEL_VARIANTS[variant]} ${bold ? 'label-bold' : ''}`} {...restProps}>{label}</span>
    )
}

Label.propTypes = {
    variant: PropTypes.string,
    bold: PropTypes.bool,
    label: PropTypes.string,
    restProps: PropTypes.shape
}

Label.defaultProps = {
    variant: '',
    bold: false,
    label: '',
    restProps: {}
}

export default Label;