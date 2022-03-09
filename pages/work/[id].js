import sanity from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { Container, Row, Col } from "react-bootstrap";
import imageUrlFor from "../../utils/imageUrlFor";
const workQuery = `*[_type=="work"]{...,
    team[]->}`;

const singleworkQuery = `*[_type=="work" &&_id == $id]{...,
    team[]->}
`;

function Work({ works }) {
	const data = works[0];
	return (
		<div>
			<div className="customContainer pdinB-80" style={{ minHeight: "200px" }}>
				<Row>
					<Col md={6}>
						<h1 className="title2 pdinT-80 pdinB-80">
							Designing for engineers
						</h1>
						<p className="body" style={{ fontweight: "200" }}>
							Gyre is an engineering company that specializes in CAD design,
							product and concept renditions, mechanical assembly designs, 3D
							designs, and product prototypes. They aim to provide curated
							solutions to industries in order to boost their overall
							productivity. We were assigned to work on the Brand Identity for
							the company. The initial briefing included understanding the
							market, users, and the stakeholders. We tried to follow a Human
							Centred approach to understand and empathize with the problem
							space, define the attributes, sketch possible solutions and
							finally design the whole brand.
						</p>
					</Col>
					<Col md={6} style={{ display: "flex", justifyContent: "flex-end" }}>
						<div style={{ padding: "10px 20px 10px 0px" }}>
							{" "}
							<p className="heading2 pdinT-80">The Team</p>
							{data.team?.map((e) => {
								return (
									<p className="body" key={e.author}>
										{" "}
										{e.author}
									</p>
								);
							})}
						</div>
						<div style={{ padding: "10px 20px 10px 0px" }}>
							{" "}
							<p className="heading2 pdinT-80">Scope</p>
							{data.scope?.map((e) => {
								return (
									<p className="body" key={e}>
										{" "}
										{e}
									</p>
								);
							})}
						</div>
					</Col>
				</Row>
			</div>
			<div className="customContainer pdinB-80" style={{ minHeight: "200px" }}>
				<Row>
					{data.images?.map((e) => {
						return (
							<Col md={12} key={e.key}>
								<img  src={imageUrlFor(e)} alt=""  className="wImg"/>
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
}

export const getStaticPaths = async () => {
	// Get the paths we want to pre-render based on persons
	const work = await sanity.fetch(workQuery);
	const paths = work.map((person) => ({
		params: { id: person._id },
	}));
	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
};

// This function gets called at build time on server-side.
export const getStaticProps = async ({ params }) => {
	const works = await sanity.fetch(singleworkQuery, { id: params.id });
	return { props: { works } };
};

export default Work;
