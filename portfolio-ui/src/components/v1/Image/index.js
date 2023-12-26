import { React } from 'react';
import { PropTypes } from 'prop-types';

const Image = (props) => {
    const {
        height,
        width,
        src,
        alt,
        ...restProps
    } = {...props};

    return (
        <img src={src} height={height} width={width} alt={alt} {...restProps} />
    )
}

Image.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    restProps: PropTypes.shape
}

Image.defaultProps = {
    height: 40,
    width: 40,
    src: '',
    alt: 'Not Found',
    restProps: {}
}

export default Image;

