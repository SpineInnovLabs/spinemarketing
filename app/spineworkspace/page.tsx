import { redirect } from "next/navigation";

import { SPINE_WORKSPACE_APEX } from "@/lib/site-urls";

/** Spine Workspace marketing lives on the product apex, not the parent host. */
export default function SpineWorkspaceProductRedirect() {
  redirect(SPINE_WORKSPACE_APEX);
}
