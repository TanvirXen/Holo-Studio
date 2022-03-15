import { Container, Row, Col } from "react-bootstrap";
export default function Services() {
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
				style={{ minHeight: "1000px", backgroundColor: "#000000" }}
			>
				<div className="customContainer">
					<p className="title2 pt-5" style={{ color: "#ffffff" }}>
						Strategy
					</p>
					<Row>
						<Col md={4} className="pt-5">
							<p className="heading1 " style={{ color: "#ffffff" }}>
								Immerse, empathise, understand
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
								Purpose, positioning, proposition
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
								Product and Services
							</p>
							<p
								className="body pt-2"
								style={{ color: "#ffffff", fontWeight: "200" }}
							>
								We identify opportunities you can uniquely own by analysing your
								business, your market, and cultural shifts in the world.
							</p>
						</Col>

						<p className="title2 pt-5" style={{ color: "#ffffff" }}>
							Design
						</p>
						<Col md={4} className="pt-5">
							<p className="heading1 " style={{ color: "#ffffff" }}>
								Brand and Identity
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
								Experience and Interface
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
								Messaging and Copywriting
							</p>
							<p
								className="body pt-2"
								style={{ color: "#ffffff", fontWeight: "200" }}
							>
								We identify opportunities you can uniquely own by analysing your
								business, your market, and cultural shifts in the world.
							</p>
						</Col>

						<p className="title2 pt-5" style={{ color: "#ffffff" }}>
							Impact
						</p>
						<Col md={4} className="pt-5">
							<p className="heading1 " style={{ color: "#ffffff" }}>
								Launch and activation
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
								Learning, organisation, engagement
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
								Toolkits, guidelines, metrics
							</p>
							<p
								className="body pt-2 pb-5"
								style={{ color: "#ffffff", fontWeight: "200" }}
							>
								We identify opportunities you can uniquely own by analysing your
								business, your market, and cultural shifts in the world.
							</p>
						</Col>
					</Row>
				</div>
			</div>
			<div className="customContainer">
				<Row>
					<Col md={12}>
						<h1 className="title1 pt-10 w80" style={{ color: "#131313" }}>
							“We want to understand the problems of self learning in the market
							and introduce a solution for it”
						</h1>

						<p className="heading1 pt-10" style={{ color: "#131313" }}>
							Tanvir Fahad
						</p>

						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<div>
								<p
									className="body pt-3"
									style={{ color: "#131313", fontWeight: "200" }}
								>
									Co-Founder, Gyre Engineering
								</p>
							</div>
							<div style={{ display: "flex", justifyContent: "flex-end" }}>
								<span>
									<img src="/left.svg" alt="" />
								</span>
								<span>
									<img src="/right.svg" alt="" />
								</span>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}
