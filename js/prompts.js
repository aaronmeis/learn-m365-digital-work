/* AI prompts for Microsoft 365 and Microsoft Copilot.
   Role / Context / Task / Output, with [placeholders] to fill in.
   Each prompt lists the sources it relies on (S# from the source ledger).
   The redaction warning is added to every copy. */
window.SOURCE_NOTES={
  1:"Copilot APIs call Microsoft Graph with the caller's permissions. The API does not widen what that identity can already open.",
  2:"How to build a synced Copilot connector. Synced availability is listed for Global, GCC, GCC High, and DoD. Federated availability varies by connector. That list is not a service description for one named connector.",
  3:"Connectors overview: a synced connector copies content into Microsoft Graph. A federated connector reads live and does not index that content into Microsoft 365.",
  4:"Federated connectors run as the signed-in user over MCP. Write, update, and delete use a confirmation card. Researcher does not support those writes. The source stays the system of record.",
  5:"The GitHub Cloud Knowledge connector brings GitHub knowledge into Microsoft Graph for search and Microsoft Copilot.",
  10:"Microsoft Copilot is the work assistant in Microsoft 365 apps. This page's model menu is Auto, Quick response, and Think deeper. A Microsoft Copilot license does not include GitHub Copilot.",
  11:"The app receives the prompt, Copilot grounds it in Microsoft Graph in the user's tenant, the grounded prompt goes to the model, and the response returns to the app. Conditional Access and MFA still apply.",
  12:"GitHub Copilot is the coding assistant in GitHub and the IDE. Separate product and license from Microsoft Copilot.",
  15:"A synced item is an externalItem: content plus an ACL mapped from the source system.",
  16:"A GitHub App is the server-to-server identity. It uses a short-lived installation token.",
  18:"Microsoft Entra ID is the cloud directory and token service for users, groups, and applications.",
  19:"Conditional Access evaluates user, app, device, location, and risk, then grants, requires MFA, or blocks.",
  22:"Copilot Studio is where makers build agents. It is separate from GitHub Copilot and from the Chat surface.",
  27:"Office 365 US Government service description for GCC, GCC High, and DoD. A commercial Copilot article is not this page.",
  29:"Sensitivity labels carry usage rights. Copilot honors rights on labeled or IRM-protected content.",
  32:"Three processor types: models Microsoft hosts, AI subprocessors under the DPA, and AI independent processors on their own terms. This page does not name the Chat model SKUs.",
  33:"Prompts, responses, and data accessed through Microsoft Graph are not used to train foundation LLMs. Organizational grounding stays inside what the signed-in user can open.",
  34:"Anthropic is on by default for most commercial-cloud customers and off by default in the EU Data Boundary and the UK. The Copilot UI shows when a Claude model is in use. Federal GCC, GCC High, and DoD are excluded.",
  35:"When OpenAI operates the model, OpenAI is a subprocessor. Azure OpenAI is Microsoft-operated. Admins set both under AI providers.",
  36:"The application card names grounding, inferencing, and post-processing. Model names on the card are examples.",
  38:"A declarative agent uses Copilot's orchestrator. A custom engine brings its own orchestrator and model.",
  41:"Enterprise Data Protection is the DPA and Product Terms commitment for Copilot and Copilot Chat prompts and responses. Optional web search is a separate Bing query with user and tenant identifiers removed.",
  46:"SharePoint Advanced Management is the cleanup layer so overshared sites are not in the grounding set.",
  47:"The Cowork models page defaults to Auto and lists that product's menu. An admin can turn the Anthropic family off for the tenant. Those names are Cowork, not the Chat selector.",
  55:"Restricted SharePoint Search is an admin allow list, off by default. It is not a security boundary and it does not change SharePoint permissions.",
  56:"The semantic index helps retrieval of content the user can already open. It does not change permissions.",
  57:"Release notes, read 15 Oct 2026. 23 Dec 2025: GPT-5 powers Copilot Chat by default, with fast and reasoning routing. Later notes add selector choices. Through 6 Oct 2026 that December note is the one that sets the default."
};
window.PROMPT_WARN="Redact first. Do not paste tenant names, user names, real prompts, file contents, mail, secrets, tokens, or customer data into a public AI tool. Replace them with placeholders such as [tenant], [site], and [system]. Use an AI tool your organization has approved for this design work.";
window.PROMPT_RULE="Rules: Use the name Microsoft Copilot (formerly Microsoft 365 Copilot) in new writing. Cite Microsoft Learn or GitHub Docs for every factual claim. If the page does not say it, mark it UNVERIFIED. Do not invent model names. A commercial page is not a government service description. Copilot is not the integration bus.";
window.PROMPT_CATS=["Products","Data path","Models and identity","Clouds and writes"];
window.PROMPTS=[
{c:0,t:"Split Microsoft Copilot from GitHub Copilot",s:[10,12,16,5],p:`Role: You are an enterprise architect briefing a design review.
Context: Synthetic org [org]. The request is [one sentence, e.g. summarize a contract in Word / explain a pull request / search GitHub docs from Microsoft 365]. No real tenant.
Task: Say which product owns the request: Microsoft Copilot in the Microsoft 365 apps, or GitHub Copilot in GitHub and the IDE. State that the licenses are separate [S10] [S12]. If the work is server-to-server on GitHub, name a GitHub App and a short-lived installation token [S16]. If the work is GitHub knowledge inside Microsoft 365 search, name the GitHub Cloud Knowledge connector [S5].
Output: A three-row table (request, product, license or identity) and one sentence on what would be the wrong product.`},
{c:0,t:"Copilot Studio versus Copilot Chat",s:[10,22,38,34],p:`Role: You are an architect choosing a Copilot surface.
Context: The job is [chat in the Microsoft 365 apps / a repeatable business agent for [process]]. Makers available: [yes/no]. No real tenant.
Task: Separate Microsoft Copilot Chat from Copilot Studio [S10] [S22]. For an agent, say whether it should stay a declarative agent on Copilot's orchestrator or become a custom engine with its own orchestrator and model [S38]. Say that a Studio maker selects the model when creating the agent, inside the admin's provider settings [S34]. Copilot Studio is not the integration bus.
Output: A recommendation, the host (Chat or Studio), declarative or custom engine, and two questions the maker still has to answer.`},
{c:1,t:"Walk one prompt through the data path",s:[11,36,41,33],p:`Role: You are briefing an enterprise architect. No tenant names or secrets.
Context: Synthetic prompt: [one prompt, e.g. summarize the Q3 brief in [site]]. App: [Word / Excel / Outlook / Teams / Copilot Chat]. Web search: [on/off].
Task: Walk user, app, grounding, model, post-processing, and response [S11] [S36]. Say what grounding may include from Microsoft Graph in the user's tenant. If web grounding is on, say it is a separate Bing query with user and tenant identifiers removed [S41]. Quote the training line only as the privacy page states it: prompts, responses, and data accessed through Microsoft Graph are not used to train foundation LLMs [S33].
Output: Six numbered steps. Each step names an input, an output, and a source. End with what would change if the request created a record in another system.`},
{c:1,t:"Choose synced or federated",s:[3,4,5,15],p:`Role: You are an integration architect.
Context: External system [system]. The fact is [durable knowledge people will search again / a live ticket / a secret / a record that changes every few minutes]. Direction: [read / write]. No real tenant.
Task: Choose a synced connector or a federated connector [S3]. Synced copies content into a Graph external item with an ACL from the source [S15]. Federated reads live as the user and does not index that content into Microsoft 365 [S4]. GitHub docs that should be searchable in Microsoft 365 use the GitHub Cloud Knowledge connector [S5]. If the design writes, stop and use the write-back prompt.
Output: One recommendation, why the other fork fails this fact, and the auth the connector uses.`},
{c:1,t:"Check ACLs and oversharing",s:[15,33,56,29,46,55],p:`Role: You are a data-protection architect.
Context: Synthetic store [SharePoint site / external system]. Who should open the item: [role]. Who can open it today: [role]. No file contents, no user names.
Task: Say where the ACL lives. For a synced item, the ACL is on the externalItem and must match the source [S15]. Copilot grounding stays inside what the signed-in user can already open [S33]. The semantic index does not change that permission [S56]. Labels and IRM usage rights still apply [S29]. SharePoint Advanced Management is the cleanup so overshared sites are not in the grounding set [S46]. Restricted SharePoint Search is an allow list, not a security boundary, and it does not change SharePoint permissions [S55].
Output: A table (control, what it narrows, what it does not change) and the first tell that the ACL is wider than the source rights.`},
{c:2,t:"Entra identity and permissions",s:[18,19,11,1,33],p:`Role: You are an identity architect.
Context: Caller is [a signed-in user / an app]. The action is [read a file the user can open / call a Copilot API / run unattended]. Tenant: [synthetic]. No UPNs, no object IDs, no tokens.
Task: Name the Entra identity [S18]. Say how Conditional Access and MFA still apply on the Copilot path [S19] [S11]. For a Copilot API, say the call uses Microsoft Graph under that identity's permissions and does not widen them [S1] [S33]. If the caller is an app, say what must be consented and what must stay user-delegated.
Output: Identity, token audience in words, permissions, Conditional Access signals to check, and anything the sources leave UNVERIFIED.`},
{c:2,t:"Models and processor types as of October 2026",s:[57,32,34,35,47,10],p:`Role: You are documenting model choice for a commercial tenant. Date the answer as of October 2026. Do not invent model names.
Context: Surface: [Copilot Chat / a declarative agent / Cowork]. Cloud: [commercial / EU or UK / other].
Task: From the release notes, state the Copilot Chat default and the selector separately [S57]. Default: the 23 Dec 2025 note says GPT-5 powers Copilot Chat by default, with a fast model for basic tasks and a reasoning model for multi-step requests. Through 6 Oct 2026 that is the note that sets the default. Selector: 27 Jan 2026 adds GPT-5.2 (Quick Response or Think Deeper). 19 May 2026 adds OpenAI's GPT-5.5 Instant and GPT 5.5 Thinking. 16 Jun 2026 lets users select Claude where Anthropic is enabled. The UI shows when a Claude model is in use [S34]. Then name the three processor types on the models overview, which does not list these SKUs [S32] [S35]. Keep Cowork's Auto menu on the Cowork page [S47]. Keep the overview menu (Auto, Quick response, Think deeper) on the overview [S10].
Output: Two headed sections, Default and Selector, then a processor table (type, who operates it, admin control).`},
{c:3,t:"Government-cloud parity check",s:[27,34,2],p:`Role: You are an architect who refuses to copy a commercial diagram into a government tenant.
Context: Target cloud: [GCC / GCC High / DoD / commercial]. Feature to check: [Microsoft Copilot / a named connector / Copilot Studio / Anthropic]. No tenant data.
Task: Open the government service description before you claim the feature exists there [S27]. A commercial Learn page is not that description. For Anthropic, use only the Anthropic page: unavailable for federal customers in GCC and for GCC High and DoD; a 22 July 2026 setting lets non-federal GCC customers opt in [S34]. For connectors, the build overview lists synced clouds and says federated availability varies by connector. That is not a service description for the named connector [S2]. Every other cell is UNVERIFIED until the government service description names it.
Output: A table (feature, cloud, what the cited page actually says, UNVERIFIED). No guessed parity.`},
{c:3,t:"Design a write-back",s:[4,11,16],p:`Role: You are an integration architect. The model does not own the record.
Context: Synthetic system [system]. The change is [create / update / delete] of [record type]. Actor: [signed-in user]. No real tickets or IDs.
Task: Prefer a workflow or API for the state change. If the design uses a federated connector, describe the confirmation card: Allow once, Allow for conversation, Always allow, or Cancel. Nothing is sent until the user answers. Read tools do not ask. Researcher does not support these writes. The same page both starts the write rollout in early October 2026 and still heads that section Coming soon. Keep both sentences [S4]. Add this pack's second gate: a workflow approval bound to a verified identity, outside the wording of the prompt. Microsoft does not document that second gate as a default [S11]. On GitHub, server-to-server writes use a GitHub App, not a personal access token [S16].
Output: Mechanism, who confirms, what is stored, and what stays in the source system.`}
];
