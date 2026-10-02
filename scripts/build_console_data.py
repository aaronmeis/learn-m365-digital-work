"""Emit js/data.js for the digital-work study console from the vault pack."""
import json
import re
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent
PACK = Path(r"C:\obsidian\personal_research_2026\Learning\tech-deep-dive\m365-digital-work-platform")
CUT = json.loads((PACK / "video" / "cut-script.json").read_text(encoding="utf-8"))


def js(obj):
    return json.dumps(obj, ensure_ascii=False, indent=2)


def sources():
    text = (PACK / "reference" / "source-ledger.md").read_text(encoding="utf-8")
    rows = []
    for m in re.finditer(
        r"^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*(https?://\S+?)\s*\|\s*([^|]*)\|\s*([^|]*)\|\s*([^|]*)\|\s*([^|]*)\|",
        text, re.M):
        rows.append({
            "n": int(m.group(1)),
            "g": m.group(6).strip() or "Microsoft Learn",
            "t": m.group(2).strip(),
            "u": m.group(3).strip(),
            "type": (m.group(4).strip() or "docs"),
            "trust": m.group(5).strip() or "high",
            "b": m.group(7).strip(),
            "ledger": m.group(1),
        })
    return rows


def glossary():
    text = (PACK / "GLOSSARY.md").read_text(encoding="utf-8")
    items = []
    for line in text.splitlines():
        if not line.startswith("|") or line.startswith("| Term") or line.startswith("|---") or line.startswith("|------"):
            continue
        cells = [c.strip() for c in line.strip("|").split("|")]
        if len(cells) < 2 or cells[0] in ("Term",):
            continue
        if len(cells) < 8:
            continue
        term, definition, cat, rung, essential, related, where, source = cells[:8]
        items.append({
            "category": cat,
            "term": term,
            "rung": int(rung),
            "essential": essential.lower() == "yes",
            "definition": definition,
            "see_also": related,
            "where": where,
            "source": source,
        })
    return items


SRCS = sources()
# Console [S#] matches the vault ledger number. Rows 1-14 keep the old appearance order.
# Rows 15-25 were added 2026-10-02 for glossary citations.

WEEKS = [
    {"n": 1, "title": "Context and scope", "time": "45 min", "rungs": "100", "lib": "block-01-context-and-scope",
     "opener": "Two platforms, one governed boundary. Microsoft 365 Copilot and GitHub Copilot are separately licensed. They meet at an Integration Enablement Layer, not by Copilot calling systems of record on its own.",
     "obj": "Write the boundary: what is in (Graph, connectors, MCP catalog, identity, policy, audit) and what stays outside (ITSM, CRM, HR, and GitHub as systems of record).",
     "deliv": "Boundary statement written; neighbor list has both platforms and at least three external systems.",
     "mods": [
         {"t": "Two products, one strategy [S10] [S12]", "rl": "scope · 100",
          "action": "State in one line why GitHub Copilot is not 'part of' Microsoft 365 Copilot.",
          "whyMatters": "A design that treats them as one license or one orchestrator invents a product Microsoft does not sell."},
         {"t": "The boundary is the Integration Enablement Layer", "rl": "scope · 100",
          "action": "Write IN vs OUT. IN: APIs, events, connectors, MCP catalog, Entra, policy, audit. OUT: the systems of record themselves.",
          "whyMatters": "Ungoverned sprawl is Copilot opening its own holes to ITSM, CRM, and HR."},
     ], "vids": [{"s": 10}, {"s": 12}, {"s": 8}]},
    {"n": 2, "title": "Conceptual view", "time": "60 min", "rungs": "100-200", "lib": "view-01-conceptual",
     "opener": "Conceptual means what and why. Each platform keeps its native AI layer. Third-party data and actions cross only through governed APIs, MCP, and federated identity.",
     "obj": "Name the knowledge plane, the transaction plane, and the control plane, and the rule that Copilot is a consumer, not a bypass.",
     "deliv": "Conceptual picture drawn with no duplicated system of record.",
     "mods": [
         {"t": "Three planes", "rl": "conceptual · 100",
          "action": "Place knowledge (Microsoft 365), transaction (GitHub and line-of-business writes), and control (identity, policy, secrets, audit) on one page.",
          "lookLike": "<b>Conceptual diagram</b><img class=\"diagram\" src=\"assets/diagrams/01-conceptual-1.png\" alt=\"Conceptual view\">",
          "whyMatters": "Sponsors fund the control plane. The Copilot experiences sit on top of it."},
         {"t": "Never duplicate a system of record to make it 'AI accessible'", "rl": "conceptual · 200",
          "action": "Write the rule and one example: Office files stay in SharePoint; source code stays in GitHub.",
          "whyMatters": "A second copy becomes a second authority the moment the first one changes."},
     ], "vids": [{"s": 11}, {"s": 9}]},
    {"n": 3, "title": "Logical view", "time": "60 min", "rungs": "200", "lib": "view-02-logical",
     "opener": "Logical means which parts talk, and which payload moves. The fork is synced Graph items versus live MCP fetch.",
     "obj": "Trace synced indexing (extract, label, ACL map, index) and federated fetch (no Graph copy).",
     "deliv": "Both flows drawn, with the ACL-mapping step marked as the one that cannot be sloppy.",
     "mods": [
         {"t": "Synced connector pipeline", "rl": "logical · 200",
          "action": "Order the four steps and circle ACL mapping.",
          "lookLike": "<b>Logical model</b><img class=\"diagram\" src=\"assets/diagrams/02-logical-1.png\" alt=\"Logical view\">",
          "whyMatters": "A correct index with a wide ACL makes restricted source data searchable across the tenant."},
         {"t": "Federated fetch persists nothing", "rl": "logical · 200",
          "action": "Walk a live ServiceNow question: approved MCP tool, gateway policy, live citation, zero Graph write.",
          "lookLike": "<b>Flows</b><img class=\"diagram\" src=\"assets/diagrams/02-logical-2.png\" alt=\"Logical flows\">",
          "whyMatters": "Volatile or sensitive facts belong on the live path, not in the semantic index."},
     ], "vids": [{"s": 3}, {"s": 4}, {"s": 2}]},
    {"n": 4, "title": "Physical view", "time": "60 min", "rungs": "200-300", "lib": "view-03-physical",
     "opener": "Physical means named services and where they run: Microsoft Graph, Copilot Studio, GitHub Apps, Entra, and the gateway you operate.",
     "obj": "Place each logical component on a host, and record the licensing split and the gov-cloud check.",
     "deliv": "Every logical component maps to a service or is marked as a tenant-verification gap.",
     "mods": [
         {"t": "Where each piece runs", "rl": "physical · 200",
          "action": "Fill Microsoft 365 tenant, GitHub, Entra, and the customer-operated gateway.",
          "lookLike": "<b>Physical topology</b><img class=\"diagram\" src=\"assets/diagrams/03-physical-1.png\" alt=\"Physical view\">",
          "whyMatters": "A missing admin-consent app registration or an unwatched Graph quota shows up as 429s, not as a diagram error."},
         {"t": "Do not assume cloud parity", "rl": "physical · 300",
          "action": "List one connector feature you will verify in the target tenant before you commit the design.",
          "whyMatters": "The failure catalog calls out federated MCP as a capability you must confirm per cloud, not assume."},
     ], "vids": [{"s": 1}, {"s": 5}]},
    {"n": 5, "title": "Integration and AI elements", "time": "60 min", "rungs": "200-300", "lib": "view-04-integration-ai",
     "opener": "One row per external system, plus the AI data path: identity, tool choice, grounding, Purview and Entra checks, then audit.",
     "obj": "Inventory mechanisms and name the control that stops grounding on data the caller cannot open.",
     "deliv": "Inventory complete; AI path drawn.",
     "mods": [
         {"t": "External systems and MCP as the shared standard", "rl": "integration · 200",
          "action": "For each system, record synced vs federated vs API action, and whose identity is used.",
          "lookLike": "<b>Context</b><img class=\"diagram\" src=\"assets/diagrams/04-integration-ai-1.png\" alt=\"Integration context\">",
          "whyMatters": "Graph and GitHub REST are each platform-specific. MCP is the extensibility both sides share [S6] [S7]."},
         {"t": "The query-time gate", "rl": "AI · 300",
          "action": "Trace prompt, Entra identity, grounding, sensitivity labels, permission trimming, DLP, response, audit.",
          "lookLike": "<b>AI path</b><img class=\"diagram\" src=\"assets/diagrams/04-integration-ai-2.png\" alt=\"AI data path\">",
          "whyMatters": "Copilot must not retrieve what the user cannot open. Labels and ACLs have to be right before grounding."},
     ], "vids": [{"s": 4}, {"s": 6}, {"s": 8}]},
    {"n": 6, "title": "Hands-on lab", "time": "60 min", "rungs": "200", "lib": "block-06-hands-on-lab",
     "opener": "Predict one flow, then trace it. Candidate: a synced connector item with an ACL, or a federated MCP call that writes nothing to Graph.",
     "obj": "One flow traced with evidence. No tenant secrets in notes.",
     "deliv": "Prediction, evidence, and a diff log.",
     "mods": [
         {"t": "Write the prediction first", "rl": "lab · 200",
          "action": "Name the flow, the expected ACL or 'no persist' outcome, and where you will look.",
          "whyMatters": "A prediction written first is what turns a click-through into evidence."},
     ], "vids": [{"s": 2}, {"s": 5}]},
    {"n": 7, "title": "Failure modes and security", "time": "45 min", "rungs": "300", "lib": "block-07-failure-modes-and-security",
     "opener": "The tells that matter: point-to-point Copilot calls, a sloppy ACL map, prompt-owned pull-request state, and a write tool with no approval.",
     "obj": "Failure-mode table covers conceptual, logical, physical, and the AI path.",
     "deliv": "Each mode has a tell and a mitigation from the pack.",
     "mods": [
         {"t": "Work the failure-mode list", "rl": "security · 300",
          "action": "Open Failure modes and mark each one you can explain out loud.",
          "whyMatters": "The first failure in this pack is treating Copilot as the integration layer."},
     ], "vids": [{"s": 9}]},
    {"n": 8, "title": "Design review and teach-back", "time": "30 min", "rungs": "300", "lib": "block-08-design-review",
     "opener": "Defend the three views and the decision framework: system of record, synced vs federated vs API action, and whose permissions apply.",
     "obj": "Ten-minute teach-back and the quiz without notes.",
     "deliv": "Teach-back delivered.",
     "mods": [
         {"t": "Three decisions you would defend", "rl": "review · 300",
          "action": "Defend the enablement layer, GitHub Apps over PATs, and 'no second system of record.' Name one gap you would not defend (unverified gov-cloud connector parity).",
          "whyMatters": "Naming the decision you would not defend shows where the evidence stops."},
     ], "vids": [{"s": 8}]},
]

CHECKLIST = [
    {"title": "Copilot used as the integration layer", "view": "Conceptual", "src": "S9",
     "good": "Route every external call through the Copilot Integration Enablement Layer: APIs, events, connectors, identity, and audit.",
     "bad": "Tell: point-to-point connections from Copilot into ITSM, CRM, or HR, with no shared policy."},
    {"title": "A second copy becomes the system of record", "view": "Conceptual", "src": "S5",
     "good": "Keep Office files in SharePoint and source code in GitHub. Index or fetch; do not fork the authority.",
     "bad": "Tell: Teams or SharePoint and GitHub or ITSM disagree about the same record."},
    {"title": "Sensitive or fast-changing data synced into Graph", "view": "Logical", "src": "S4",
     "good": "Use a federated MCP connector for live, sensitive, or regulated facts. Do not persist that payload.",
     "bad": "Tell: stale citations, or sensitive source records now sitting in the semantic index."},
    {"title": "Static knowledge fetched live on every question", "view": "Logical", "src": "S3",
     "good": "Sync durable knowledge (docs, approved procedures) so search and Copilot can retrieve it.",
     "bad": "Tell: slow answers and source APIs rate-limiting broad lookups."},
    {"title": "ACL mapping skipped or widened", "view": "Logical", "src": "S2",
     "good": "Map source entitlements onto the Graph externalItem ACL before indexing. Audit the map.",
     "bad": "Tell: people find restricted external records in Copilot or Search."},
    {"title": "The model owns a state change", "view": "Logical", "src": "S12",
     "good": "Keep merges, change tickets, and release gates on webhooks, the Checks API, and branch protection. AI accelerates; it does not own the lifecycle.",
     "bad": "Tell: an unintended merge or a release that never produced a check."},
    {"title": "Gov-cloud feature assumed from commercial docs", "view": "Physical", "src": "S9",
     "good": "Verify the connector, including federated MCP, in the target tenant before you commit the design.",
     "bad": "Tell: the feature is missing the day you deploy into GCC, GCC High, or DoD."},
    {"title": "Graph throttling treated as a mystery outage", "view": "Physical", "src": "S1",
     "good": "Pre-register the Entra app, grant admin consent, and watch ingestion quotas and retries.",
     "bad": "Tell: HTTP 429 and a stalled connector with an empty index."},
    {"title": "Oversharing through grounding", "view": "Integration / AI", "src": "S11",
     "good": "Labels, Conditional Access, DLP, and exact externalItem ACL trimming happen before grounding.",
     "bad": "Tell: Copilot surfaces an executive file or a repo the caller should not read."},
    {"title": "Retrieved text trusted as instructions", "view": "Integration / AI", "src": "S6",
     "good": "Separate untrusted content from the system prompt. Allowlist tools. Keep policy outside the model.",
     "bad": "Tell: a ticket or a markdown file causes an unapproved tool call."},
    {"title": "Write-capable MCP tool with no approval", "view": "Integration / AI", "src": "S7",
     "good": "Split read and write tools. Consequential actions need a verified identity and a workflow approval, not a sentence in the prompt.",
     "bad": "Tell: a record deleted, a ticket opened, or a deploy fired from chat."},
    {"title": "PAT or broad OAuth app for a service", "view": "Integration / AI", "src": "S12",
     "good": "Use a GitHub App and short-lived installation tokens. Reserve OAuth for a real user delegation.",
     "bad": "Tell: one token can see every repo the user can see."},
    {"title": "Deletes and holds never reach the index", "view": "Integration / AI", "src": "S3",
     "good": "Process delta deletes and legal-hold signals. Track self-serve connector disconnects.",
     "bad": "Tell: Copilot still cites an item that was deleted, or a disconnect quietly purges content."},
]

CHEAT = [
    {"h": "Scope", "r": [
        "When someone asks whether GitHub Copilot is part of Microsoft 365 Copilot, say no. They are separately licensed. They share Entra and, where you choose it, the GitHub Cloud Knowledge connector [S12] [S5].",
        "When the task is an Office artifact, use Microsoft 365 Copilot. When it is code, tests, or pull requests, use GitHub Copilot. When it is a low-code business agent, use Copilot Studio [S10] [S12].",
        "Copilot is a governed consumer of integration, identity, and control. It is not the integration layer [S9].",
    ]},
    {"h": "Connectors", "r": [
        "Durable, broadly searched knowledge goes through a <b>synced</b> connector into Graph [S3] [S2].",
        "Volatile, sensitive, large, or regulated facts go through a <b>federated MCP</b> connector. Nothing is persisted [S4].",
        "A state change goes through an <b>API or workflow</b>, not through the prompt [S1] [S7].",
        "The step that cannot be sloppy on a sync is <b>ACL mapping</b> into the caller's Entra context.",
    ]},
    {"h": "Identity and GitHub", "r": [
        "Server-to-server GitHub work uses a <b>GitHub App</b> and a short-lived installation token [S12].",
        "OAuth is for a user-delegated flow. A personal access token is not a durable enterprise integration.",
        "GitHub Copilot Extensions are the older model. MCP servers are the shared extensibility standard [S6] [S7].",
    ]},
    {"h": "AI data path", "r": [
        "What stops oversharing is the check between grounding and the response: Conditional Access, sensitivity labels, permission trimming, and DLP [S11].",
        "A consequential action binds to a verified identity and a workflow approval, not to the wording of the prompt.",
        "Office documents stay in SharePoint. Source code stays in GitHub. Do not cross the systems of record.",
    ]},
]

QUIZ = [
    {"week": 1, "rung": 100, "pillar": "Conceptual", "type": "open",
     "question": "What is the difference between ungoverned AI sprawl and governed orchestration?",
     "answer": "Sprawl is Copilot calling ITSM, CRM, and HR directly. Governance sends those same calls through one Integration Enablement Layer of APIs, events, identity, and connectors.",
     "explanation": "Cut card 1 and the conceptual view."},
    {"week": 1, "rung": 200, "pillar": "Logical", "type": "open",
     "question": "Which logical component realizes capability C1 (know the data), and what physical service realizes it?",
     "answer": "A synced connector writing a Graph externalItem (content, metadata, ACL, semantic labels), realized on Microsoft Graph in the Microsoft 365 tenant. Live facts use a federated MCP connector instead of a copy.",
     "explanation": "Vault quiz bank item 1, study guide, connectors overview [S3]."},
    {"week": 1, "rung": 200, "pillar": "Integration", "type": "open",
     "question": "Name three external systems and the mechanism each uses.",
     "answer": "GitHub docs: GitHub Cloud Knowledge connector (synced) into Graph. A live ITSM ticket: federated MCP, nothing persisted. A pull-request state change: webhook plus Checks API, not the model.",
     "explanation": "Vault quiz bank item 2."},
    {"week": 4, "rung": 200, "pillar": "AI", "type": "mc",
     "question": "Which control stops an AI feature from grounding on data the user cannot open?",
     "options": ["A nightly index rebuild", "Query-time permission trimming, sensitivity labels, Conditional Access, and DLP", "Putting a copy of the file in SharePoint", "A longer system prompt"],
     "answer": "Query-time permission trimming, sensitivity labels, Conditional Access, and DLP",
     "explanation": "Vault quiz bank item 3 and the AI data path."},
    {"week": 1, "rung": 100, "pillar": "Conceptual", "type": "mc",
     "question": "GitHub Copilot and Microsoft 365 Copilot are…",
     "options": ["One product with two entry points", "Separately licensed products that can share Entra identity and selected connectors", "The same license, different portals", "Interchangeable for code and for Office files"],
     "answer": "Separately licensed products that can share Entra identity and selected connectors",
     "explanation": "Cheatsheet and the M365 vs GitHub Copilot note [S10] [S12]."},
    {"week": 3, "rung": 200, "pillar": "Integration", "type": "mc",
     "question": "When should you sync, and when should you fetch live?",
     "options": ["Always sync; federation is only for prototypes", "Sync durable knowledge; fetch live when data is volatile, sensitive, or must not be copied", "Always fetch live so nothing is indexed", "Sync code into SharePoint and files into GitHub"],
     "answer": "Sync durable knowledge; fetch live when data is volatile, sensitive, or must not be copied",
     "explanation": "Connectors overview and federated connectors [S3] [S4]."},
    {"week": 3, "rung": 300, "pillar": "Logical", "type": "open",
     "question": "What is the one step in a synced connector that cannot be sloppy?",
     "answer": "ACL mapping: source entitlements translated into the Microsoft 365 user context on the externalItem before indexing.",
     "explanation": "Cut card on synced connectors."},
    {"week": 2, "rung": 200, "pillar": "Physical", "type": "mc",
     "question": "What should a service use to call GitHub?",
     "options": ["A personal access token checked into the agent", "A GitHub App with a short-lived installation token", "A user OAuth token stored for the service", "Copilot Extensions, which remain the current standard"],
     "answer": "A GitHub App with a short-lived installation token",
     "explanation": "GitHub identity guidance in the cut and the integration view [S12] [S6]."},
    {"week": 5, "rung": 300, "pillar": "Framework", "type": "open",
     "question": "State the decision framework in four questions.",
     "answer": "What is the system of record, and will you avoid copying it? If the data needs durable search, sync it. If it is dynamic or sensitive, federate it. If the integration changes state, use an API or workflow. Then ask whose permissions apply.",
     "explanation": "Slide narration, decision framework."},
]

DRILLS = {
    "where": {
        "title": "Where does it live?",
        "ask": "Which place holds this?",
        "options": ["Microsoft 365 tenant (Graph and Copilot)", "GitHub (code and delivery)", "Entra ID (identity)", "The system of record you must not copy"],
        "items": [
            {"p": "A synced externalItem and the semantic index", "a": 0, "why": "Synced connector output is a Graph object in the Microsoft 365 tenant.", "src": "S3"},
            {"p": "Microsoft 365 Copilot orchestration over mail, files, and meetings", "a": 0, "why": "That Copilot sits on the Microsoft 365 knowledge plane.", "src": "S11"},
            {"p": "Pull requests, branch protection, and the Checks API", "a": 1, "why": "Delivery state stays in GitHub.", "src": "S12"},
            {"p": "GitHub Copilot in the IDE and the coding agent", "a": 1, "why": "GitHub Copilot is the coding product, licensed separately.", "src": "S12"},
            {"p": "Conditional Access and the user or app identity on a Copilot call", "a": 2, "why": "Copilot APIs sit on Graph and inherit Entra policy.", "src": "S1"},
            {"p": "A GitHub App installation token", "a": 1, "why": "The app and the token are GitHub's, even when Entra federates the user.", "src": "S12"},
            {"p": "The ServiceNow incident a federated connector just read", "a": 3, "why": "Live fetch must not create a second copy in Graph.", "src": "S4"},
            {"p": "The approved deployment procedure the architect searched for", "a": 0, "why": "Durable procedures are synced knowledge, retrieved from Microsoft 365.", "src": "S3"},
        ],
    },
    "auth": {
        "title": "How does it authenticate?",
        "ask": "Which mechanism fits this call?",
        "options": ["Entra ID user or app (Graph)", "GitHub App installation token", "OAuth app, user-delegated only", "Personal access token (avoid for services)"],
        "items": [
            {"p": "An app invoking Microsoft 365 Copilot through Copilot APIs", "a": 0, "why": "Copilot APIs use the same auth model as other Graph APIs.", "src": "S1"},
            {"p": "A server posting a check onto a pull request", "a": 1, "why": "Server-to-server GitHub work uses a GitHub App.", "src": "S12"},
            {"p": "A user connecting their own GitHub account for a delegated action", "a": 2, "why": "OAuth is reserved for a real user delegation.", "src": "S12"},
            {"p": "A long-lived token pasted into an agent so it can see every repo", "a": 3, "why": "That is the pattern the pack tells you to retire.", "src": "S12"},
        ],
    },
    "altitude": {
        "title": "Which view is this?",
        "ask": "Which architecture view does this belong in?",
        "options": ["Conceptual", "Logical", "Physical", "Integration and AI"],
        "items": [
            {"p": "Knowledge plane, transaction plane, and control plane, with Copilot as a consumer", "a": 0, "why": "Planes and the boundary are conceptual.", "src": "S9"},
            {"p": "Do not duplicate a system of record just to make it AI-accessible", "a": 0, "why": "That is a governing principle, not a hostname.", "src": "S5"},
            {"p": "Extract, normalize, map the ACL, then index", "a": 1, "why": "A payload and a sequence of components are logical.", "src": "S2"},
            {"p": "A federated call that returns a citation and writes nothing to Graph", "a": 1, "why": "The flow and its payload are logical.", "src": "S4"},
            {"p": "Graph throttling, admin consent, and a tenant where a connector is missing", "a": 2, "why": "Quotas, apps, and cloud variants are physical.", "src": "S1"},
            {"p": "GitHub App versus PAT as the deployed identity", "a": 2, "why": "Named credential types and where they run are physical.", "src": "S12"},
            {"p": "One row per external system: synced, federated, or API action", "a": 3, "why": "The inventory is the integration view.", "src": "S3"},
            {"p": "Prompt, grounding, label and DLP check, response, audit", "a": 3, "why": "The AI data path is the integration and AI view.", "src": "S11"},
        ],
    },
}

VIEWS = {
    "conceptual": {"lib": "view-01-conceptual", "img": ["01-conceptual-1.png"],
                   "rule": "Conceptual means what and why. Copilot consumes a governed integration layer. It does not replace it.",
                   "tables": [{"h": "Planes", "cols": ["Plane", "What it holds", "Must not become"], "rows": [
                       ["Knowledge", "Microsoft 365 content and synced external knowledge", "A second copy of GitHub or ITSM"],
                       ["Transaction", "GitHub delivery and approved API or workflow actions", "A prompt that merges or deploys on its own"],
                       ["Control", "Entra, policy, secrets, connector catalog, audit", "An unaudited point-to-point Copilot call"],
                   ]}]},
    "logical": {"lib": "view-02-logical", "img": ["02-logical-1.png", "02-logical-2.png"],
                "rule": "Logical means components and payloads. No tenant names.",
                "tables": [
                    {"h": "Two connector patterns", "cols": ["Pattern", "Use when", "Persists to Graph?", "Source"], "rows": [
                        ["Synced", "Durable knowledge people will search again", "Yes, as externalItem with ACL and labels", "[S3] [S2]"],
                        ["Federated MCP", "Live, sensitive, large, or write-back to the source", "No", "[S4] [S6]"],
                        ["API or workflow action", "The integration changes state", "No content copy; the system of record changes", "[S1] [S7]"],
                    ]},
                    {"h": "Synced pipeline", "cols": ["Step", "Failure if skipped"], "rows": [
                        ["Extract", "Nothing to retrieve"],
                        ["Normalize and semantic labels", "Weak Copilot grounding"],
                        ["Map source ACLs into the Entra user context", "Oversharing at tenant scale"],
                        ["Index into Graph", "Knowledge never becomes searchable"],
                    ]},
                ]},
    "physical": {"lib": "view-03-physical", "img": ["03-physical-1.png"],
                 "rule": "Physical means the named service and the cloud you must verify.",
                 "tables": [{"h": "Where it runs", "cols": ["Piece", "Where", "Source"], "rows": [
                     ["Microsoft 365 Copilot and Graph externalItems", "Microsoft 365 tenant", "[S11] [S3]"],
                     ["Copilot APIs", "Microsoft Graph, same auth as other Graph APIs", "[S1]"],
                     ["GitHub Copilot, Apps, Checks, webhooks", "GitHub", "[S12]"],
                     ["Conditional Access", "Entra ID", "[S1]"],
                     ["MCP catalog and gateway you mandate", "The enablement layer you operate", "[S6] [S9]"],
                 ]}]},
    "integration": {"lib": "view-04-integration-ai", "img": ["04-integration-ai-1.png", "04-integration-ai-2.png"],
                    "rule": "One row per system outside the boundary, then the AI path.",
                    "tables": [
                        {"h": "Decision", "cols": ["Question", "Route"], "rows": [
                            ["What is the system of record?", "Do not duplicate it"],
                            ["Do people need durable search?", "Synced connector"],
                            ["Is it dynamic or sensitive?", "Federated MCP"],
                            ["Does it change state?", "API or workflow, with approval if the action is consequential"],
                            ["Whose permissions apply?", "User-delegated or service (GitHub App), never a shared PAT"],
                        ]},
                        {"h": "AI path", "cols": ["Step", "Control"], "rows": [
                            ["Prompt carries identity", "Entra ID"],
                            ["Orchestrator picks a tool", "Approved MCP or connector catalog"],
                            ["Grounding data is fetched", "ACL and label already on the item"],
                            ["Before the response", "Conditional Access, sensitivity labels, permission trimming, DLP"],
                            ["After the call", "Audit, whether the tool succeeded or not"],
                        ]},
                    ]},
    "govcloud": {"lib": "view-03-physical", "img": [],
                 "rule": "Commercial docs are not a promise about GCC, GCC High, or DoD. Verify the connector in the tenant.",
                 "tables": [{"h": "Check before you commit", "cols": ["Item", "What to verify"], "rows": [
                     ["Federated MCP connectors", "Feature exists in that cloud. Do not assume parity."],
                     ["Synced connectors and Graph quotas", "App registration, admin consent, and throttle behavior"],
                     ["Purview controls on the path", "Labels, DLP, and audit available for the Copilot surface you named"],
                     ["GitHub identity", "Whether the tenant's GitHub cloud can use the App and Entra federation you designed"],
                 ]}]},
}

EA = {
    "togaf": [
        {"phase": "Phase A · Architecture Vision", "t": "Boundary", "items": ["Two platforms, one enablement layer.", "Copilot is a consumer, not a bypass."]},
        {"phase": "Phase B · Business Architecture", "t": "Planes", "items": ["Knowledge, transaction, and control have different owners.", "Office files and source code stay in their own systems of record."]},
        {"phase": "Phase C · Information Systems", "t": "Logical", "items": ["Synced externalItem versus federated MCP versus API action.", "ACL mapping is a required step, not a cleanup."]},
        {"phase": "Phase D · Technology", "t": "Physical", "items": ["Graph, Entra, GitHub Apps, and the gateway you run.", "Verify gov-cloud connector availability in the tenant."]},
    ],
    "dodaf": [
        {"view": "Conceptual", "t": "OV-1, CV-2", "items": ["What the platform is and where the boundary sits.", "Knowledge, transaction, and control as the capability split."]},
        {"view": "Logical", "t": "OV-2, OV-5b, DIV-2", "items": ["Synced, federated, and API-action flows.", "externalItem as the logical object for a sync."]},
        {"view": "Physical", "t": "SV-1, SV-2, StdV-1", "items": ["Graph, Entra, GitHub Apps, Checks, MCP.", "Verify the feature in the target cloud."]},
        {"view": "Integration and AI", "t": "SV-6, OV-3", "items": ["One row per external system.", "The AI path ends in audit."]},
    ],
    "altitudes": [
        {"name": "Conceptual", "q": "What and why?", "allowed": "Planes, actors, the boundary", "forbidden": "API names and SKUs", "lib": "view-01-conceptual"},
        {"name": "Logical", "q": "Which parts, what payload?", "allowed": "Flows and the connector fork", "forbidden": "Regions and license SKUs", "lib": "view-02-logical"},
        {"name": "Physical", "q": "What is deployed, where?", "allowed": "Graph, Entra, GitHub, quotas", "forbidden": "A new capability with no service", "lib": "view-03-physical"},
        {"name": "Integration and AI", "q": "What crosses the boundary?", "allowed": "External systems and the AI path", "forbidden": "A Copilot call with no mechanism", "lib": "view-04-integration-ai"},
    ],
    "table": [
        ["Integration Enablement Layer", "Phase A, B", "OV-1", "Boundary"],
        ["Synced connector / externalItem", "Phase C", "DIV-2, OV-5b", "Know the data"],
        ["Federated MCP", "Phase C, D", "SV-1, SV-6", "Live facts"],
        ["GitHub App and Checks API", "Phase D", "SV-4", "State changes"],
        ["Query-time label and ACL check", "Phase C, governance", "OV-3", "Stop oversharing"],
    ],
}

LADDER = [
    {"key": "governance", "img": "governance", "name": "Knowledge and connectors",
     "r": [
         {"n": 100, "t": "Synced connectors put durable knowledge in Graph as externalItems with metadata and semantic labels."},
         {"n": 200, "t": "ACL mapping is mandatory. Federated MCP is for live or sensitive facts and persists nothing."},
         {"n": 300, "t": "Deletes, legal holds, and self-serve disconnects have to reach the index or you ground on stale data."},
     ]},
    {"key": "security", "img": "security", "name": "Permission fidelity",
     "r": [
         {"n": 100, "t": "Copilot must not retrieve what the caller cannot open."},
         {"n": 200, "t": "Labels, Conditional Access, DLP, and the externalItem ACL are the gate, not a longer prompt."},
         {"n": 300, "t": "A widened ACL on a sync amplifies an existing exposure across search and Copilot."},
     ]},
    {"key": "compliance", "img": "compliance", "name": "Identity and audit",
     "r": [
         {"n": 100, "t": "Graph calls inherit Entra, including Conditional Access."},
         {"n": 200, "t": "GitHub services use Apps and short-lived installation tokens. PATs are not a design."},
         {"n": 300, "t": "Every tool call is audited, including failures. Consequential writes need a workflow approval."},
     ]},
    {"key": "ai", "img": "ai", "name": "AI path",
     "r": [
         {"n": 100, "t": "Each platform keeps its own Copilot. They share MCP as the extensibility standard."},
         {"n": 200, "t": "Prompt, tool choice, grounding, Purview and Entra checks, response, audit."},
         {"n": 300, "t": "Untrusted retrieved text is data, not instructions. Write tools are not plugins."},
     ]},
    {"key": "ea", "img": "hero", "name": "Architecture altitudes",
     "r": [
         {"n": 100, "t": "Conceptual is planes and the boundary. Logical is flows. Physical is named services."},
         {"n": 200, "t": "Place the views in TOGAF phases and DoDAF viewpoints from the hub."},
         {"n": 300, "t": "Defend the decision framework and name the gov-cloud check you have not verified."},
     ]},
]

PROMPTS = [
    {"cat": "Briefing at an altitude", "model": "any LLM", "desc": "One area of the digital-work platform, at one altitude.",
     "items": ["Conceptual briefing", "Connector fork", "Physical placement"],
     "flagship": "You are briefing an enterprise architect on Microsoft's digital-work platform (Microsoft 365 Copilot, GitHub Copilot, connectors, and MCP).\nTopic: <e.g. synced vs federated connectors>\nAltitude: <conceptual | logical | physical>\n\nRules:\n- Prefer Microsoft Learn and GitHub Docs. Cite the page.\n- Stay at the requested altitude.\n- End with what changes one altitude down, and one thing the sources do not say.\n- If you are not sure, say UNVERIFIED."},
    {"cat": "Socratic examiner (design review)", "model": "any LLM", "desc": "A skeptical architect, one question at a time.",
     "items": ["Boundary challenge", "ACL challenge", "GitHub identity challenge"],
     "flagship": "Act as a skeptical principal architect reviewing my design for Microsoft's digital-work platform.\nAsk ONE question at a time. After each answer, grade it (solid / shaky / wrong), name the doc that settles it, and ask a harder follow-up.\nProbe: the boundary, synced versus federated, ACL mapping, GitHub Apps versus PATs, and what stops grounding on data the user cannot open.\nStop after 8 questions and name the assumption most likely to fail."},
    {"cat": "Failure-mode spotter", "model": "any LLM", "desc": "A synthetic design in, a failure table out.",
     "items": ["Connector mismatch", "Oversharing", "Write tools"],
     "flagship": "Here is a synthetic design (no real tenant names or secrets):\n<paste>\n\nTable: failure | view | first tell | root cause | mitigation | source.\nInclude ACL mapping, synced-versus-federated mismatch, prompt-owned state changes, PAT usage, and gov-cloud assumptions.\nMark anything you cannot source as UNVERIFIED."},
]

MINI = [
    {"name": "Microsoft Graph", "t": "API and data plane for the Microsoft 365 side, including Copilot APIs and externalItem [S1] [S3]."},
    {"name": "Entra ID", "t": "Users and apps authenticate here. Conditional Access applies to Graph calls. GitHub can federate to the same directory."},
    {"name": "GitHub", "t": "System of record for code and delivery. Apps, Checks, and webhooks stay here [S12]."},
    {"name": "Copilot Studio", "t": "Low-code business agents. Separate from GitHub Copilot [S10]."},
    {"name": "Microsoft Purview", "t": "On the AI path for labels and DLP. It is a control on grounding, not the integration layer."},
]

GLOSS = glossary()

CUT_OUT = {
    "labels": CUT["labels"],
    "slides": CUT["slides"],
    "cards": CUT["cards"],
    "open": CUT["open"],
    "recap": CUT["recap"],
}

parts = []
parts.append("/* Source ledger. `n` is the vault row number. */\n")
parts.append("const SOURCES = " + js(SRCS) + ";\n\n")
parts.append("const DATA = " + js({
    "weeks": WEEKS,
    "ladder": LADDER,
    "miniModules": MINI,
    "prompts": PROMPTS,
    "checklist": CHECKLIST,
    "cheat": CHEAT,
    "falsifier": "Copilot is not an integration bus. If a sentence says Copilot 'reaches' ITSM, CRM, or HR on its own, rewrite it as a call through the Integration Enablement Layer.",
    "quizSections": {"1": "Conceptual / logical", "2": "Physical / deployment", "3": "Integration and third-party", "4": "AI elements", "5": "Framework / synthesis"},
    "quiz": QUIZ,
    "views": VIEWS,
    "eaFrameworks": EA,
    "deckFlags": {},
}) + ";\n\n")
parts.append("DATA.glossary = " + js(GLOSS) + ";\n\n")
parts.append("DATA.cut = " + js(CUT_OUT) + ";\n\n")
parts.append("DATA.drills = " + js(DRILLS) + ";\n\n")
def nblm_decks():
    path = Path(r"C:\output\obsidian\notebooklm\tdd-m365-digital-work-platform\glossary-gap-2026-10-02\glossary-gap-flashcards.json")
    if not path.is_file():
        return {}
    raw = json.loads(path.read_text(encoding="utf-8"))
    cards = []
    for card in raw.get("cards", []):
        def side(block):
            return " ".join(
                part.get("content", "")
                for part in block.get("flashcardContentBlock", [])
                if part.get("type") == "text"
            ).strip()
        front, back = side(card.get("front", {})), side(card.get("back", {}))
        if front and back and "NOT IN SOURCES" not in back:
            cards.append({"front": front, "back": back})
    return {"gap": {"title": "Gap pass 2026-10-02", "cards": cards}}


parts.append("DATA.nblmDecks = " + js(nblm_decks()) + ";\n")
(SITE / "js" / "data.js").write_text("".join(parts), encoding="utf-8")
print("sources", len(SRCS), "glossary", len(GLOSS), "cards", len(CUT_OUT["cards"]))
