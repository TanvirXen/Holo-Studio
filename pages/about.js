import { Container, Row, Col } from "react-bootstrap";
import Member from "../Components/Member";
import sanity from "../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
const workQuery = `*[_type=="author"]`;

function About({works}) {
    console.log(works)
	return (
		<div>
			<div className="customContainer" style={{ minHeight: "200px" }}>
				<Row>
					<Col md={8}>
						<h1 className="title1 pdinT-80 pdinB-80">
						We empower solving problems
						</h1>
					</Col>
					<Col md={4}></Col>
				</Row>
			</div>
			<div
				className="Container"
				style={{ minHeight: "500px", backgroundColor: "#C5c5c5" }}
			>
				<div className="customContainer">
				</div>
			</div>
			<div className="customContainer  pdinB-80" 	style={{ minHeight: "450px"}}>
				<Row>
					<Col md={6}>
						<h1
							className="title1 pdinT-100M"
							style={{ color: "#131313"}}
						>
We believe in solving problems for everyone
						</h1>
					</Col>
                    <Col>
                    <p className="body pdinT-100M">
                    We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world. We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world.

We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world.

We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world. We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world.

We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world.
                    </p>
                    </Col>
				</Row>
			</div>
            <div
				className="Container"
				style={{ minHeight: "500px", backgroundColor: "#000000" }}
			>
				<div className="customContainer  pdinB-80">
					<p className="title2 pdinT-80 pdinB-80" style={{ color: "#ffffff" }}>
                    The minds behind creating the change
					</p>
					<Row>
                    {works.map((e)=>{
  return (<Member image={e.image} title={e.author} description={e.description} key={e.author}/>)
})}
					</Row>
				</div>
			</div>
            <div className="customContainer " 	style={{ minHeight: "450px"}}>
				<Row>
					<Col md={6}>
						<h1
							className="title1 pdinT-100M"
							style={{ color: "#131313"}}
						>
Why do we exist and how did we start?
						</h1>
					</Col>
                    <Col>
                    <p className="body pdinT-100M">
                    We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world. We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world.

We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world.

We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world. We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world.

We identify opportunities you can uniquely own by analysing your business, your market, and cultural shifts in the world.
                    </p>
                    </Col>
				</Row>
			</div>
		</div>
	);
}
export const getStaticProps = async () => {
    const works = await sanity.fetch(workQuery);
  
    return {
      props: { works } 
  };
  }
export default About