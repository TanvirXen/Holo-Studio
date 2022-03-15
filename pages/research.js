import { Container, Row, Col } from "react-bootstrap";
export default function Research() {
	return (
		<div>
			<div className="customContainer" style={{ minHeight: "200px" }}>
				<Row>
					<Col md={8}>
						<h1 className="title1 pt-10 pdinB-80">
							We help organisations transform their impact
						</h1>
					</Col>
					<Col md={4}></Col>
				</Row>
			</div>
			<div
				className="Container"
				style={{ minHeight: "500px", backgroundColor: "#000000" }}
			>
				<div className="customContainer">
					<p className="title2 pdinT-80" style={{ color: "#ffffff" }}>
						Upon primary research, we have figured out that
					</p>
					<Row>
						<Col md={4} className="pt-5">
							<p className="heading1 " style={{ color: "#ffffff" }}>
								Most people have trouble doing x in self learning
							</p>
							<p
								className="body pt-2"
								style={{ color: "#ffffff", fontWeight: "200" }}
							>
								We identify opportunities you can uniquely own by analysing your
								business, your market, and cultural shifts in the world.
							</p>
						</Col>
						<Col md={4} className="pt-5">
							<p className="heading1 " style={{ color: "#ffffff" }}>
								Most people have trouble doing x in self learning
							</p>
							<p
								className="body pt-2"
								style={{ color: "#ffffff", fontWeight: "200" }}
							>
								We identify opportunities you can uniquely own by analysing your
								business, your market, and cultural shifts in the world.
							</p>
						</Col>
						<Col md={4} className="pt-5">
							<p className="heading1 " style={{ color: "#ffffff" }}>
								Most people have trouble doing x in self learning
							</p>
							<p
								className="body pt-2 pdinB-80"
								style={{ color: "#ffffff", fontWeight: "200" }}
							>
								We identify opportunities you can uniquely own by analysing your
								business, your market, and cultural shifts in the world.
							</p>
						</Col>
					</Row>
				</div>
			</div>
			<div className="customContainer" style={{ minHeight: "450px" }}>
				<Row>
					<Col md={6}>
						<h1 className="title1 pdinT-100M" style={{ color: "#131313" }}>
							We believe in solving problems for everyone
						</h1>
					</Col>
					<Col>
						<p className="body pdinT-100M">
							We identify opportunities you can uniquely own by analysing your
							business, your market, and cultural shifts in the world. We
							identify opportunities you can uniquely own by analysing your
							business, your market, and cultural shifts in the world. We
							identify opportunities you can uniquely own by analysing your
							business, your market, and cultural shifts in the world. We
							identify opportunities you can uniquely own by analysing your
							business, your market, and cultural shifts in the world. We
							identify opportunities you can uniquely own by analysing your
							business, your market, and cultural shifts in the world. We
							identify opportunities you can uniquely own by analysing your
							business, your market, and cultural shifts in the world.
						</p>
					</Col>
				</Row>
			</div>
		</div>
	);
}
