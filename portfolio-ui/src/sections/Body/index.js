import { React } from 'react';
import "./body.scss";
import Image from '../../components/v1/Image/index';
import Label from '../../components/v1/Label';

const Body = (props) => {

    return (
        <div className="body-container">
            <div className="image-container">
                <Image 
                    height={'100%'}
                    width={'100%'}
                    url={"https://images.unsplash.com/photo-1548544149-4835e62ee5b3?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
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