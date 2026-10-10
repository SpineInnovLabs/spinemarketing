import { workspaceEntryLinks } from "@/lib/workspace-entry";

export function WorkspaceAuthActions({ pathname = "" }: { pathname?: string }) {
  const links = workspaceEntryLinks(pathname);
  return (
    <div data-workspace-auth="true" className="my-6 flex flex-wrap items-center gap-3">
      <a href={links.signup} className="innovtech-button">Sign up</a>
      <a href={links.login} className="innovtech-button innovtech-button-secondary">Sign in</a>
    </div>
  );
}
