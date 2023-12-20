import { React } from 'react';
import "./header.scss";
import { PropTypes } from 'prop-types';
import HeaderConfig from './config';
import Label from '../../components/v1/Label/index';

const Header = (props) => {
    
    const {
        isVisible,
    } = {...props};

    return (
        <div className={`header-container ${!isVisible ? 'hide' : ''}`}>
            {
                HeaderConfig?.navs?.map((nav) => (
                    <div className="nav-items">
                        <Label key={nav?.id} variant={'small-1'} label={nav?.label} />
                    </div>
                ))
            }
        </div>
    )
}

Header.propTypes = {
    isVisible: PropTypes.bool
}

Header.defaultProps = {
    isVisible: true
}

export default Header;