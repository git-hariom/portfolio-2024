import { React } from 'react';
import "./notFound.scss";
import PropTypes from 'prop-types';
import "./notFound.scss";

const NotFound = (props) => {
    const {
        ...restProps
    } = { ...props };

    return (
        <div className="not-found-container">
            <img src={require("../../../assets/gifs/404.gif")} alt="this slowpoke moves"  width="100" {...restProps} />
        </div>
    )
}

NotFound.propTypes = {
    restProps: PropTypes.shape
}

NotFound.defaultProps = {
    restProps: {}
}

export default NotFound;