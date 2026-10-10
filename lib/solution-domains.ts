export type SolutionDomain = {
  name: string;
  summary: string;
  sources: readonly string[];
  features: readonly (readonly [string, string])[];
  workflow: readonly [string, string, string];
};

function domain(name: string, summary: string, sources: string[], features: [string, string][], workflow: [string, string, string]): SolutionDomain {
  return { name, summary, sources, features, workflow };
}

/** Domain feature patterns, grounded in the existing solution catalogue.
 * Provider support and authorized execution are confirmed for each deployment.
 */
export const SOLUTION_DOMAINS = {
  sales: domain("Sales", "Carry the customer commitment from discovery through the deal and handoff.", ["CRM opportunities", "Customer conversations", "Proposals and contracts", "Delivery commitments"], [
    ["Deal preparation", "Bring the opportunity stage, stakeholders, recent conversations and open questions into a meeting brief."],
    ["Commitment tracking", "Relate promises made during the sale to the proposal, owner and delivery dependency."],
    ["Pipeline exceptions", "Review stalled opportunities, missing next steps and changes in commercial assumptions with their evidence."],
    ["Sales-to-delivery handoff", "Carry the agreed scope, customer priorities and unresolved risks into onboarding."],
  ], ["An opportunity is ready to close, but a requested delivery date conflicts with the current plan.", "Twin assembles the proposal, customer conversation and delivery dependency into options for the account team.", "The sales owner reviews the commitment with delivery before approving a revised proposal."]),
  marketing: domain("Marketing", "Connect campaign planning and performance to audiences, customer signals and business goals.", ["Campaign briefs", "Audience and CRM context", "Channel performance", "Approved messaging"], [
    ["Campaign context", "Keep the objective, audience, channel plan, budget assumptions and owners together for a campaign."],
    ["Customer signal briefs", "Relate permitted sales and support feedback to the audience problem and positioning decision."],
    ["Launch coordination", "Trace dependencies between content, product milestones, review and publishing responsibilities."],
    ["Performance investigation", "Compare channel signals with the campaign goal and changed assumptions before proposing adjustments."],
  ], ["A launch campaign is receiving attention but generating fewer qualified conversations than expected.", "Twin compares the brief, audience feedback and channel evidence, then prepares messaging and distribution options.", "The campaign owner approves the revised plan and any changes to spend or publishing."]),
  content: domain("Content", "Carry the audience, brief, source evidence and approvals through the content lifecycle.", ["Editorial briefs", "Research and source documents", "Asset versions", "Review comments"], [
    ["Brief preparation", "Gather the audience need, campaign objective, key questions and approved references before writing."],
    ["Evidence-linked drafting", "Keep factual claims connected to their sources and flag unsupported or conflicting material for review."],
    ["Editorial handoffs", "Carry version history, reviewer comments and open questions between writers, designers and approvers."],
    ["Reuse and refresh", "Find relevant earlier material and identify which evidence, messaging or product details need updating."],
  ], ["A writer needs to refresh an article after product messaging changes.", "Twin gathers the existing article, revised brief, approved product references and unresolved reviewer comments.", "The editor verifies the claims and approves the revised asset before publication."]),
  "customer-support": domain("Customer Support", "Resolve a case with its customer history, evidence, commitments and escalation context.", ["Support cases", "Account history", "Product documentation", "Customer commitments"], [
    ["Case preparation", "Assemble the reported issue, earlier interactions, account context and available diagnostic evidence."],
    ["Knowledge-assisted responses", "Prepare a response from permitted documentation with references and missing information visible."],
    ["Escalation continuity", "Carry attempted fixes, affected work and the responsible teams into an escalation brief."],
    ["Case follow-through", "Relate the proposed resolution to the customer commitment and observed response before closing the loop."],
  ], ["A customer reports an issue that has already crossed support and engineering.", "Twin brings together the case history, attempted fixes, related issue and promised follow-up.", "The support owner reviews the response and authorizes the customer communication or escalation."]),
  "product-engineering": domain("Product & Engineering", "Connect product priorities and delivery decisions to customer impact and technical work.", ["Product roadmap", "Engineering issues", "Customer feedback", "Release evidence"], [
    ["Prioritization context", "Relate a feature request to the customer need, strategic goal and evidence behind its priority."],
    ["Dependency investigation", "Bring linked issues, owners, design decisions and delivery dependencies into a blocker review."],
    ["Release preparation", "Assemble readiness evidence, unresolved risks and customer commitments for a release decision."],
    ["Decision continuity", "Carry the reasoning and accepted tradeoffs into later implementation, incidents and roadmap reviews."],
  ], ["A release has an unresolved issue affecting a customer commitment.", "Twin connects the release goal, issue history, technical dependency and customer impact into delivery options.", "The product and engineering owners decide the release scope and authorize the next action."]),
  "human-resources": domain("Human Resources", "Coordinate people work with clear responsibilities and access to permitted employee information.", ["Hiring plans", "Onboarding tasks", "Approved people policies", "Permitted employee records"], [
    ["Hiring coordination", "Relate an approved role, interview responsibilities and decision evidence while respecting candidate-data access."],
    ["Employee onboarding", "Keep people, equipment, access and manager tasks connected to the onboarding plan."],
    ["Policy preparation", "Find the approved policy and prepare a referenced answer without exposing restricted employee context."],
    ["People-program reviews", "Bring goals, responsibilities and permitted evidence into a program review or management handoff."],
  ], ["A new employee starts next week and several onboarding dependencies remain open.", "Twin prepares the approved onboarding plan, responsible teams and outstanding tasks from permitted information.", "HR and the relevant owners review the plan; access changes follow their authorization process."]),
  legal: domain("Legal", "Relate contracts and obligations to the transaction, source evidence and authorized decision.", ["Contract versions", "Review comments", "Business commitments", "Approved legal policies"], [
    ["Contract review preparation", "Gather the transaction context, version history and open review questions for the legal reviewer."],
    ["Obligation tracking", "Connect a contractual obligation to its owner, relevant date and supporting business record."],
    ["Exception context", "Compare a proposed commercial exception with the approved terms and earlier decisions."],
    ["Matter continuity", "Keep the evidence, correspondence and decision history available through a permitted legal handoff."],
  ], ["A customer requests a contract exception before signing.", "Twin assembles the proposed change, approved terms, business reason and earlier review comments.", "The authorized legal and commercial reviewers decide the exception; AI preparation does not replace legal advice."]),
  memoryandknowledge: domain("Memory & Knowledge", "Keep organizational knowledge connected to its sources, ownership and decision history.", ["Knowledge documents", "Decision records", "Project history", "Source ownership"], [
    ["Evidence-linked discovery", "Find permitted knowledge with its source, owner and relevance to the current question."],
    ["Decision history", "Connect a current proposal to the reasoning, alternatives and commitments from earlier decisions."],
    ["Knowledge freshness", "Surface conflicting or outdated references and identify the owner who can reconcile them."],
    ["Handoff continuity", "Carry the business story across projects and sessions while personal and restricted context stay scoped."],
  ], ["A new team owner needs to understand why a project changed direction.", "Twin gathers the permitted decision record, source evidence, previous tradeoffs and unresolved questions.", "The owner checks the references and confirms which conclusions remain valid before proceeding."]),
  "customer-success": domain("Account Success", "Carry the customer story through onboarding, adoption, service, growth and commercial reviews.", ["Account records", "Adoption signals", "Support history", "Customer commitments"], [
    ["Onboarding plans", "Relate the customer goal, agreed scope, milestones and owners to outstanding onboarding work."],
    ["Adoption reviews", "Bring available usage evidence, customer feedback and support patterns into an adoption conversation."],
    ["Account coordination", "Keep customer commitments and open actions connected across sales, success, support and delivery."],
    ["Growth and renewal preparation", "Prepare an account review from value evidence, relationship history, unresolved risks and commercial context."],
  ], ["A customer reaches an onboarding milestone with a delivery dependency still unresolved.", "Twin prepares the agreed goal, adoption evidence, support history and responsible teams for the account review.", "The account owner agrees the next step with the customer and approves any consequential communication."]),
  finance: domain("Finance", "Connect receivables, payables, cash and reconciliation to the evidence behind the financial decision.", ["Invoice and payment records", "Contracts and purchase orders", "Delivery evidence", "Financial review notes"], [
    ["Receivables context", "Relate an outstanding invoice to payment history, customer commitments and any delivery dispute."],
    ["Spend and payable review", "Bring a supplier invoice together with the purchase approval, contractual terms and receipt evidence."],
    ["Reconciliation exceptions", "Compare related billing, payment and delivery records with mismatches visible for investigation."],
    ["Cash and close preparation", "Assemble cash assumptions, unresolved exceptions and supporting evidence for a finance review."],
  ], ["A supplier invoice differs from the approved purchase and delivery record.", "Twin compares the invoice, purchase order, terms and receipt evidence, then prepares the unresolved questions.", "The finance owner decides the exception and authorizes any payment or source-record correction."]),
  "finance-leaders": domain("Finance Leadership", "Prepare financial decisions with assumptions, operational drivers and an evidence trail.", ["Financial reports", "Cash assumptions", "Operating plans", "Management decisions"], [
    ["Management brief preparation", "Bring material financial changes together with their business drivers and unresolved assumptions."],
    ["Liquidity scenarios", "Compare cash commitments and collection assumptions to prepare scenarios for management review."],
    ["Resource allocation", "Connect spend proposals to business priorities, capacity and the evidence supporting the tradeoff."],
    ["Board and audit context", "Carry the reviewed figures, source references and decision history into an executive or audit discussion."],
  ], ["Leadership needs to review a hiring proposal against a revised cash outlook.", "Twin assembles the operating plan, cash assumptions, cost commitments and alternative allocation options.", "The finance leader reviews the assumptions and the authorized executives decide the budget commitment."]),
  founders: domain("Founders & CXOs", "See business goals, operating signals and decisions with the responsibilities behind them.", ["Business goals", "Operating reports", "Customer commitments", "Decision history"], [
    ["Executive operating briefs", "Connect material changes across revenue, delivery, finance and people to business priorities."],
    ["Cross-functional risks", "Relate a blocked goal to its dependencies, owners and customer or financial consequences."],
    ["Decision preparation", "Assemble options, assumptions and supporting evidence before committing resources."],
    ["Follow-through", "Carry an approved decision into responsible teams and review the observed results against the goal."],
  ], ["A growth target conflicts with current delivery capacity and budget.", "Twin prepares the revenue assumptions, capacity constraints, resource options and earlier decisions.", "The leadership team chooses the tradeoff and authorizes the resulting commitments."]),
  individual: domain("Personal Work", "Carry priorities and task context across tools while keeping personal information separate.", ["Personal tasks", "Permitted calendars", "Working notes", "Relevant files"], [
    ["Priority preparation", "Bring deadlines, commitments and current tasks into a personal planning view."],
    ["Meeting context", "Prepare relevant notes, previous commitments and open questions before a conversation."],
    ["Task continuity", "Resume a piece of work with its files, decisions and next steps across sessions."],
    ["Personal boundaries", "Keep personal notes and context separate from organizational knowledge and shared work."],
  ], ["You return to a project after several meetings and a tool change.", "Twin prepares your permitted notes, files, outstanding commitments and the previous checkpoint.", "You choose the next priority and approve any message or consequential update."]),
  operations: domain("Operations", "Coordinate handoffs, dependencies and exceptions across the teams responsible for delivery.", ["Delivery plans", "Work queues", "Customer commitments", "Escalation history"], [
    ["Handoff preparation", "Carry the goal, current status, responsible owners and acceptance criteria into the next team."],
    ["Dependency tracking", "Relate a blocked task to the upstream commitment and the work affected downstream."],
    ["Exception investigation", "Prepare the records, communications and earlier decisions behind a delivery deviation."],
    ["Operating reviews", "Bring open risks, ownership and observed progress together for an operational review."],
  ], ["A delivery handoff is blocked by an unresolved dependency in another team.", "Twin gathers the commitment, task history, affected work and responsible owners into escalation options.", "The operations owner approves the revised handoff and coordinates the agreed actions."]),
  revops: domain("Revenue Operations", "Connect pipeline, commercial commitments, billing and revenue handoffs with traceable context.", ["CRM pipeline", "Commercial terms", "Billing records", "Account handoffs"], [
    ["Pipeline hygiene", "Review missing owners, stale stages and inconsistent next steps with the underlying deal history."],
    ["Quote-to-cash context", "Relate the approved commercial agreement to billing, delivery and customer commitments."],
    ["Forecast preparation", "Compare pipeline assumptions with recent activity, changed terms and unresolved deal risks."],
    ["Revenue handoffs", "Carry the account story between sales, finance and success with scope and ownership intact."],
  ], ["A signed deal has a billing discrepancy and an unclear onboarding owner.", "Twin relates the CRM record, approved terms, invoice and handoff history to prepare the discrepancies.", "Revenue operations coordinates the authorized owners before a billing correction or customer update."]),
  saas: domain("SaaS", "Connect subscription context, adoption, service and product feedback across the customer lifecycle.", ["Subscription records", "Product usage evidence", "Support cases", "Customer feedback"], [
    ["Adoption investigation", "Compare available usage evidence with the onboarding goal and customer feedback."],
    ["Subscription context", "Keep entitlement, commercial terms and account changes connected to customer work."],
    ["Product feedback loops", "Relate customer problems and support patterns to product priorities and delivery decisions."],
    ["Lifecycle preparation", "Prepare onboarding, value reviews, expansion or renewal discussions from the account story."],
  ], ["A customer reports low adoption alongside a recurring product issue.", "Twin prepares the available usage evidence, support pattern, subscription context and product dependency.", "The account and product owners agree the response and authorize the customer-facing next step."]),
  services: domain("Service Delivery", "Connect client commitments, delivery work and commercial scope for service teams.", ["Client statements of work", "Delivery tasks", "Scope changes", "Client communications"], [
    ["Engagement context", "Keep the agreed deliverables, milestones, acceptance criteria and owners together."],
    ["Scope-change preparation", "Relate a client request to the agreement, delivery effort and commercial implications."],
    ["Delivery coordination", "Carry dependencies, blockers and customer expectations across the delivery team."],
    ["Commercial follow-through", "Connect completed work and acceptance evidence to the billing or project review."],
  ], ["A client requests additional work while a delivery milestone is at risk.", "Twin prepares the agreed scope, new request, affected dependencies and options for delivery.", "The engagement owner approves the scope or schedule change with the client."]),
  "professional-services": domain("Professional Services", "Relate expertise, time, client scope and delivery evidence across an engagement.", ["Engagement agreements", "Time and work records", "Project deliverables", "Client approvals"], [
    ["Engagement preparation", "Bring the client objective, professional responsibilities and agreed scope into the working brief."],
    ["Billable-work context", "Relate time and work records to the engagement scope and supporting deliverables."],
    ["Utilization reviews", "Compare commitments, availability and delivery dependencies for resource planning."],
    ["Client-review preparation", "Assemble progress, deliverables, acceptance evidence and open decisions for the client conversation."],
  ], ["An engagement review finds work recorded outside the agreed billable scope.", "Twin compares the engagement terms, time records, delivered work and client approval history.", "The engagement and finance owners review the evidence before approving a billing adjustment."]),
  manufacturing: domain("Manufacturing", "Connect production exceptions to quality, suppliers and delivery commitments.", ["Production records", "Quality inspections", "Supplier information", "Delivery commitments"], [
    ["Production exception context", "Relate a production deviation to the affected work order, material and delivery dependency."],
    ["Quality investigation", "Bring inspection evidence, batch history and related issues together for a quality review."],
    ["Supplier coordination", "Carry material requirements, supplier commitments and unresolved exceptions into a follow-up."],
    ["Delivery-impact preparation", "Compare the affected production work with customer commitments and recovery options."],
  ], ["A quality exception affects a batch needed for a committed delivery.", "Twin assembles the inspection evidence, batch history, supplier context and affected orders.", "The quality and operations owners decide the disposition and authorize the revised delivery plan."]),
  retail: domain("Retail & Ecommerce", "Connect inventory, orders, returns and service to the customer and product story.", ["Order records", "Inventory information", "Returns evidence", "Customer support history"], [
    ["Order-service context", "Bring the order, delivery status and earlier customer interactions into the support case."],
    ["Inventory exception review", "Relate stock constraints to demand evidence, open orders and replenishment commitments."],
    ["Returns investigation", "Compare return reasons with product, batch and supplier information when those sources are available."],
    ["Customer recovery preparation", "Prepare replacement, refund or outreach options with their evidence and authorization requirements."],
  ], ["Several returns involve the same product while replacement stock is constrained.", "Twin compares return reasons, product context, available inventory and affected customer cases.", "The retail owner reviews the evidence and approves any replenishment, refund or customer outreach."]),
} as const;

export type SolutionSlug = keyof typeof SOLUTION_DOMAINS;

export function getSolutionDomain(slug: string): SolutionDomain {
  if (!Object.prototype.hasOwnProperty.call(SOLUTION_DOMAINS, slug)) throw new Error(`Missing domain features for solution: ${slug}`);
  return SOLUTION_DOMAINS[slug as SolutionSlug];
}
