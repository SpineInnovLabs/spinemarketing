import { createNarrativeRoute } from "@/lib/create-narrative-route";
import { pages } from "@/lib/site-copy";

const { metadata, Page } = createNarrativeRoute(pages.proof, { showProofCards: true });
export { metadata };
export default Page;
