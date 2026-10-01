import { createNarrativeRoute } from "@/lib/create-narrative-route";
import { pages } from "@/lib/site-copy";

const { metadata, Page } = createNarrativeRoute(pages.spineworkspace);
export { metadata };
export default Page;
