import { React } from 'react';
import Image from '../../Image';
import "../index.scss";

const ImageExamples = () => {

    return (
       <div className='examples-v1-wrapper'>
            <Image />
            <Image 
                url='https://fastly.picsum.photos/id/294/200/300.jpg?hmac=37ZMLugCxZOqrLbLvaJ_09fT_uPfl3zlMkICmkVxobg'
            />
            <Image 
                url='https://fastly.picsum.photos/id/294/200/300.jpg?hmac=37ZMLugCxZOqrLbLvaJ_09fT_uPfl3zlMkICmkVxobg'
                height={100}
                width={100}
            />
             <Image 
                url='https://fastly.picsum.photos/id/294/200/300.jpg?hmac=37ZMLugCxZOqrLbLvaJ_09fT_uPfl3zlMkICmkVxobg'
                height={100}
                width={100}
                style={{
                    borderRadius: '50%',
                    objectFit: 'center',
                }}
            />
       </div>
    )
}

export default ImageExamples;