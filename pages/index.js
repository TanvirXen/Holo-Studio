import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import dummy from "../public/images/dummy.png";
import Card from "../Components/Card";
import sanity from "../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
const workQuery = `*[_type=="work"]{...,
    team[]->}`;

const Start = ({ works }) => {
	return (
		<div>
			<Head>
				<title>Holo -Home</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className="customContainer height500">
					<Row>
						<Col xl={7}>
							<p className="t1t2 pdinT-100 animate__animated animate__bounceInDown animate__faster">
								We empower solving problems
							</p>
							<p className="body animate__animated animate__bounceInDown animate__faster">
								{" "}
								We exist to design a better world together. We try to understand
								the problems around us while we solve them one at a time.
							</p>
							<p className="overline">Scroll to see Featured work</p>
						</Col>
						<Col xs={5}></Col>
					</Row>
				</div>
				<div
					className="customContainer pdinT-80M"
					style={{ minHeight: "600px" }}
				>
					<Row>
						{works.map((e) => {
							return (
								<Card
									image={e.card}
									title={e.title}
									description={e.description}
									key={e.title}
									id={e._id}
								/>
							);
						})}
					</Row>
				</div>
			</main>
		</div>
	);
};
export const getStaticProps = async () => {
	const works = await sanity.fetch(workQuery);

	return {
		props: { works },
	};
};
export default Start;
