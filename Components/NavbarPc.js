import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import Link from "next/link";
export default function NavbarPC() {
	return (
		<div>
		<div className="customContainer">
				<Row style={{ height: "10vh" }}>
					<Col xl={6} lg={4} md={4}>
						<div className="pdinT-20">
							<img
								src="/images/logo.svg"
								alt="Logo"
								width={100}
								height={25}
							/>
						</div>
					</Col>
					<Col
						xl={6}
						lg={8}
						md={8}
						style={{ display: "flex", justifyContent: "flex-end" }}
					>
						<Link href="/">
							<p className="link1 padding1">Home</p>
						</Link>
						<Link href="/work">
							<p className="link1 padding1">Work</p>
						</Link>
						<Link href="/services">
							<p className="link1 padding1">Services</p>
						</Link>
						<Link href="/careers">
							<p className="link1 padding1">Careers</p>
						</Link>
						<Link href="/research">
							<p className="link1 padding1">R&D</p>
						</Link>
						<Link href="/about">
							<p className="link1 padding1">About</p>
						</Link>
						<div className="Sbutton margin1">
							<p className="link1 " style={{padding:'0px'}}>Contact</p>
						</div>
					</Col>
				</Row>
				</div>
		</div>
	);
}
