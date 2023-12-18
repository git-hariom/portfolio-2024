import { React } from 'react';
import { PropTypes } from 'prop-types';

const Image = (props) => {
    const {
        height,
        width,
        url,
        alt,
        ...restProps
    } = {...props};

    return (
        <img src={url} height={height} width={width} alt={alt} {...restProps} />
    )
}

Image.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    url: PropTypes.string,
    alt: PropTypes.string,
    restProps: PropTypes.shape
}

Image.defaultProps = {
    height: 40,
    width: 40,
    url: '',
    alt: 'Not Found',
    restProps: {}
}

export default Image;

