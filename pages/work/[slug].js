import sanity from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
const workQuery = `*[_type=="work"]{...,
    team[]->}`;

const singleworkQuery = `*[_type=="work" &&title == $title]{...,
    team[]->}
`;

function Work({work}){
console.log(work)
}

export const getStaticPaths = async () => {
    // Get the paths we want to pre-render based on persons
    const work = await sanity.fetch(workQuery);
    const paths = work.map(work => ({
      params: { id: work.title }
    }));
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  };
  
  // This function gets called at build time on server-side.
  export const getStaticProps = async ({ params }) => {
    const work = await sanity.fetch(singleworkQuery, { id: params.id });
    return { props: { work} };
  };

  export default Work