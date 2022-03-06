import { Container,Row,Col } from "react-bootstrap"
import dummy from '../public/images/dummy.png'
import Image from 'next/image'

export default function Card(){
    return(
        <Col xl={6} lg={6} md={6}>
        <div className='card1'>
         <div><Image src={dummy} height={482} width={850} alt="Card Image"/></div>
         <div>
           <h2>Daktar Bondhu - Reimagining a healthcare brand</h2>
           <p className="body">Bringing the idea of a boutique tea shop to life with visual brand identity and packaging.</p>
         </div>
        </div>
      </Col>
    )
}