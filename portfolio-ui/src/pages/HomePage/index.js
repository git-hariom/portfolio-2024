import { useState } from "react";
import Header from "../../sections/Header"
import "./homePage.scss";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const HomePage = (props) => {
    const [isShowHeader, setShowHeader] = useState(false);
    const onHembergerClick = () => {
        setShowHeader((prev)=>!prev)
    }

    return (
        <div className="homepage-wrapper">
            <div className="header">
                <div className="hemberger-icon" onClick={onHembergerClick}>
                    { !isShowHeader && <MenuRoundedIcon /> }
                    { isShowHeader && <CloseRoundedIcon /> }
                </div>
                <Header isVisible={isShowHeader} />
            </div>
        </div>
    )
}

export default HomePage;