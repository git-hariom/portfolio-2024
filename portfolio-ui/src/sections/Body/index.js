import { React } from 'react';
import "./body.scss";
import Image from '../../components/v1/Image/index';
import Label from '../../components/v1/Label';
import ProfileImage from "../../assets/images/profile.png";

const Body = (props) => {

    return (
        <div className="body-container">
            <div className="image-container">
                <Image 
                    height={'100%'}
                    width={'100%'}
                    src={ProfileImage}
                    style={{
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className="name-container">
                <Label label={"Hariom Sinha"} />
            </div>
            <div className="title-container">
                <Label label={"UI Developer | Technical Blogger | Designer"} />
            </div>
            <div className="desc-container">
                <Label label={"I DESIGN AND DEVELOP APPS THAT MAKES PEOPLE LIFES SIMPLER !"} bold/>
            </div>
        </div>
    )
}

export default Body;