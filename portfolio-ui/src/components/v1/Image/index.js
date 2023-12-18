import { React } from 'react';
import { PropTypes } from 'prop-types';

const Image = (props) => {
    const {
        height,
        width,
        url,
        fit,
        ...restProps
    } = {...props};

    return (
        <img src={url} height={height} width={width} {...restProps} />
    )
}

Image.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    url: PropTypes.string,
    fit: PropTypes.string,
    restProps: PropTypes.shape
}

Image.defaultProps = {
    height: 40,
    width: 40,
    url: '',
    fit: 'center',
    restProps: {}
}

export default Image;

