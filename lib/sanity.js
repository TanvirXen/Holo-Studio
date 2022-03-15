
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.NEXT_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_SANITY_DATASET,
  apiVersion: process.env.NEXT_API,
  useCdn: true

});