import { createUseCaseRoute } from "@/lib/create-use-case-route";
import { useCasePages } from "@/lib/site-copy";

const { metadata, Page } = createUseCaseRoute(useCasePages.sales);
export { metadata };
export default Page;
