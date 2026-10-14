# Host connection and cross-host continuity: marketing evidence boundary

Reviewed against the 504-line attachment `Pasted text(20261014-102741).txt`
provided with “Implement Workbench Views.” These are required evidence contracts,
not proof that the corresponding runtime journey is deployed.

| Stage | Evidence required before a verified status |
| --- | --- |
| Host identity | Independently authenticated host binding, principal, tenant, workspace and permitted scopes |
| Capability discovered | Authoritative host manifest or supported exposed tool, capability ID and discovery time |
| Capability authorized | Current binding, consent, scope and tenant/workspace policy decision |
| Capability invoked | Safe authorized invocation, outcome, provider reference and trace |
| Execution reconciled | Source receipt, timestamp and correlation; canonical destination and lineage when ingestion is requested |

Discovery is not authority. OAuth does not prove data ingestion. An accepted queue
acknowledgement does not prove materialization. Authorized retrieval must resolve
the expected canonical entity/version with source lineage and a retrieval receipt.

Provider capabilities may be host-exposed, separately bound to Spine, or unavailable.
A connected host does not automatically expose its private connectors.

Cross-host continuity carries canonical entity identity, context/version, work item,
checkpoint and authorized source references. Each destination resolves independent
identity, membership and capability policy, and produces a new retrieval/resume trace.
Private host memory, credentials and privileges do not transfer. Cross-tenant requests
and unauthorized capabilities must be denied. Tenant-private data does not become
cross-customer network content.

The marketing diagrams explain the proposed relationships. Their fictional account
scenario is identified in surrounding prose, outside the visual chrome. Workbench
screenshots and recordings have separate capture provenance; neither fixture records
nor visible host badges establish live customer telemetry or verified provider execution.
