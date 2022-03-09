import { Container,Row,Col } from "react-bootstrap"
import dummy from '../public/images/dummy.png'
import Image from 'next/image'
import imageUrlFor from "../utils/imageUrlFor";
export default function Card({image,title,description}){
    return(
        <Col xl={6} lg={6} md={6}>
        <div className='card1'>
         <div><img src={imageUrlFor(image)
                        .ignoreImageParams()
                        } className='cardimg' alt="Card Image"/></div>
         <div>
           <h2>{title}</h2>
           <p className="body text">{description}</p>
         </div>
        </div>
      </Col>
    )
}