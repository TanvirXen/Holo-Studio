import { Container,Row,Col } from "react-bootstrap"
export default function Footer(){
    return(
        <div style={{backgroundColor:'#000000',minHeight:'550px',marginTop:'80px'}}>
            <div className="customContainer">
                <Row >
                    <Col lg={6} style={{marginTop:'80px'}} xs={12}>
                        <p className="title2" style={{color:'#ffffff'}}>
                        We help you solve your problems
                        </p>
                        <div className="SbuttonBlack" style={{marginTop:'30px',width:'152px',height:'52px'}}><p className='link2 ' style={{color:'#ffffff'}}>Contact</p></div>
                    </Col>
                    <Col lg={6} className='foot' xs={12}>
                        <div style={{padding:'0px 80px 0px 0px'}}>
                            <p className="overline" style={{color:'#ffffff'}}>Social</p>
                            <p className='link1'  style={{color:'#fff'}}>Linkedin</p>
                            <p className='link1' style={{color:'#fff'}}>Facebook</p>
                            <p className='link1' style={{color:'#fff'}}>Instagram</p>
                            <p className='link1' style={{color:'#fff'}}>Twitter</p>
                        
                        </div>
                        <div style={{paddingRight:'10px'}}>
                            <p className="overline" style={{color:'#ffffff'}}>Around</p>
                            <p className='link1'  style={{color:'#fff'}}>Home</p>
                            <p className='link1' style={{color:'#fff'}}>Work</p>
                            <p className='link1' style={{color:'#fff'}}>Services</p>
                            <p className='link1' style={{color:'#fff'}}>Careers</p>
                            <p className='link1' style={{color:'#fff'}}>R&D</p>
                            <p className='link1' style={{color:'#fff'}}>About</p>
                        
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="bar"></div>
                </Row>
                <Row>
                    <Col lg={6}>
                    <p className='link1 padding1'  style={{color:'#fff'}}>© Copyright 2021 - HOLO </p>
                    </Col>
                    <Col lg={6} style={{display:'flex',justifyContent:'flex-end'}}>
                    <p className='link1 padding1' style={{color:'#fff'}}>Cookie Policy</p>
                    <p className='link1 padding1' style={{color:'#fff'}}>Privacy Policy</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}