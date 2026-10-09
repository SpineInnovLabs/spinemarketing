import { redirect } from "next/navigation";

/** Retain the old product entry point as an alias for the local details page. */
export default function SpineWorkspaceProductRedirect() {
  redirect("/product");
}
