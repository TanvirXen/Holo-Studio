import React, { useState } from "react";
import {Container, Row, Col, Button } from "react-bootstrap";
// import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
function NavbarM() {

    const [menu, setMenu] = useState(false)
    // const menuOptions = [{  
    //     name: "Home",  
    //     link: "/services"  
    // }, {  
    //     name: "Work",  
    //     link: "/customsoftware"  
    // }, {  
    //     name: "Services",  
    //     link: "/mobileapps"  
    // }, {  
    //     name: "Careers",  
    //     link: "/websites"  
    // }, 
    // {  
    //     name: "R&D",  
    //     link: "/websites"  
    // }, 
    // {  
    //     name: "About",  
    //     link: "/websites"  
    // },  ];
    function handleMenu(){
        setMenu(true)
    }
    return(
        <header>
            <Container>
                <Row  style={{display:"flex",justifyContent:"space-between"}}>
                    <Col  xs={3} className="logo">
                            <Link href="/">
                            <div style={{ marginTop: "20px !important" }}>
							<Image
								src="/images/logo.svg"
								alt="Logo"
								width={100}
								height={25}
							/>
						</div>
                            </Link>
                    </Col>
                    <Col  xs={3} className="logo" style={{display:"flex",justifyContent:"end"}}>
                            <Link href="/">
                          <MenuIcon style={{color:"#0066CB",fontSize:"40px"}} onClick={handleMenu}/>
                          {/* <MenuOpenIcon style={{color:"#0066CB",fontSize:"40px"}}/> */}
                                {/* <Avatar alt="Remy Sharp" /> */}
                            </Link>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default NavbarM;