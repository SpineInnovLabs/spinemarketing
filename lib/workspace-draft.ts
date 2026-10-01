export type ConnectionState = "not_connected" | "waiting" | "unavailable";

export type WorkspaceDraft = {
  email: string;
  organization: string;
  solutionSlug: string;
  objective: string;
  collaborationAcknowledged: boolean;
  connection: ConnectionState;
  launched: boolean;
  updatedAt: string;
};

export const DRAFT_STORAGE_KEY = "spineworkspace.local-setup-draft";

export const EMPTY_DRAFT: WorkspaceDraft = {
  email: "",
  organization: "",
  solutionSlug: "",
  objective: "",
  collaborationAcknowledged: false,
  connection: "unavailable",
  launched: false,
  updatedAt: "",
};

export function readiness(draft: WorkspaceDraft) {
  return {
    identity: Boolean(draft.email.trim()),
    scope: Boolean(draft.solutionSlug && draft.organization.trim()),
    objective: Boolean(draft.objective.trim()),
    collaboration: draft.collaborationAcknowledged,
    source: draft.connection === "waiting" || draft.connection === "not_connected",
    provisioning: false,
  };
}

export function canLaunch(draft: WorkspaceDraft) {
  const state = readiness(draft);
  return state.identity && state.scope && state.objective && state.collaboration;
}
