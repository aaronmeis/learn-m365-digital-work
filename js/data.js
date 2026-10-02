/* Source ledger, renumbered in appearance order. The vault table repeats 1-7; `ledger` is the printed number. */
const SOURCES = [
  {
    "n": 1,
    "g": "Microsoft and GitHub primary docs",
    "t": "Copilot APIs overview (Microsoft Learn)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/copilot-apis-overview",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "1"
  },
  {
    "n": 2,
    "g": "Microsoft and GitHub primary docs",
    "t": "Overview: build a Copilot connector (Microsoft Learn)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-copilot-connector",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "2"
  },
  {
    "n": 3,
    "g": "Microsoft and GitHub primary docs",
    "t": "Microsoft 365 Copilot connectors overview (Microsoft Learn)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/overview",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "3"
  },
  {
    "n": 4,
    "g": "Microsoft and GitHub primary docs",
    "t": "Federated connectors overview (Microsoft Learn)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/federated-connectors-overview",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "4"
  },
  {
    "n": 5,
    "g": "Microsoft and GitHub primary docs",
    "t": "GitHub Cloud Knowledge connector overview (Microsoft Learn)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/github-cloud-knowledge-overview",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "5"
  },
  {
    "n": 6,
    "g": "Microsoft and GitHub primary docs",
    "t": "About Model Context Protocol (MCP) (GitHub Docs)",
    "u": "https://docs.github.com/en/copilot/concepts/context/mcp",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "6"
  },
  {
    "n": 7,
    "g": "Microsoft and GitHub primary docs",
    "t": "Extending Copilot Chat with MCP (GitHub Docs)",
    "u": "https://docs.github.com/copilot/customizing-copilot/using-model-context-protocol/extending-copilot-chat-with-mcp",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "7"
  },
  {
    "n": 8,
    "g": "Microsoft and GitHub primary docs",
    "t": "Microsoft Ignite 2025 PBRK394: M365 Copilot Agents - Powering Retail & Consumer Goods Partner Success (named talk, Copilot Connectors + MCP)",
    "u": "https://www.youtube.com/watch?v=P8iBjDh7OZg",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "1"
  },
  {
    "n": 9,
    "g": "Microsoft and GitHub primary docs",
    "t": "Microsoft 365 Copilot extensibility overview (synced vs federated connectors, Work IQ API, MCP)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "2"
  },
  {
    "n": 10,
    "g": "Microsoft and GitHub primary docs",
    "t": "Microsoft 365 Copilot overview",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "3"
  },
  {
    "n": 11,
    "g": "Microsoft and GitHub primary docs",
    "t": "Microsoft 365 Copilot architecture",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "4"
  },
  {
    "n": 12,
    "g": "Microsoft and GitHub primary docs",
    "t": "GitHub Copilot documentation (GitHub Docs)",
    "u": "https://docs.github.com/copilot",
    "type": "docs",
    "trust": "high",
    "b": "",
    "ledger": "5"
  },
  {
    "n": 13,
    "g": "Microsoft and GitHub primary docs",
    "t": "GitHub Copilot on Azure (editions)",
    "u": "https://azure.microsoft.com/en-us/products/github/copilot",
    "type": "docs",
    "trust": "medium",
    "b": "",
    "ledger": "6"
  },
  {
    "n": 14,
    "g": "Microsoft and GitHub primary docs",
    "t": "GitHub Copilot Business features",
    "u": "https://github.com/features/copilot/copilot-business",
    "type": "docs",
    "trust": "medium",
    "b": "",
    "ledger": "7"
  }
];

const DATA = {
  "weeks": [
    {
      "n": 1,
      "title": "Context and scope",
      "time": "45 min",
      "rungs": "100",
      "lib": "block-01-context-and-scope",
      "opener": "Two platforms, one governed boundary. Microsoft 365 Copilot and GitHub Copilot are separately licensed. They meet at an Integration Enablement Layer, not by Copilot calling systems of record on its own.",
      "obj": "Write the boundary: what is in (Graph, connectors, MCP catalog, identity, policy, audit) and what stays outside (ITSM, CRM, HR, and GitHub as systems of record).",
      "deliv": "Boundary statement written; neighbor list has both platforms and at least three external systems.",
      "mods": [
        {
          "t": "Two products, one strategy [S10] [S12]",
          "rl": "scope · 100",
          "action": "State in one line why GitHub Copilot is not 'part of' Microsoft 365 Copilot.",
          "whyMatters": "A design that treats them as one license or one orchestrator invents a product Microsoft does not sell."
        },
        {
          "t": "The boundary is the Integration Enablement Layer",
          "rl": "scope · 100",
          "action": "Write IN vs OUT. IN: APIs, events, connectors, MCP catalog, Entra, policy, audit. OUT: the systems of record themselves.",
          "whyMatters": "Ungoverned sprawl is Copilot opening its own holes to ITSM, CRM, and HR."
        }
      ],
      "vids": [
        {
          "s": 10
        },
        {
          "s": 12
        },
        {
          "s": 8
        }
      ]
    },
    {
      "n": 2,
      "title": "Conceptual view",
      "time": "60 min",
      "rungs": "100-200",
      "lib": "view-01-conceptual",
      "opener": "Conceptual means what and why. Each platform keeps its native AI layer. Third-party data and actions cross only through governed APIs, MCP, and federated identity.",
      "obj": "Name the knowledge plane, the transaction plane, and the control plane, and the rule that Copilot is a consumer, not a bypass.",
      "deliv": "Conceptual picture drawn with no duplicated system of record.",
      "mods": [
        {
          "t": "Three planes",
          "rl": "conceptual · 100",
          "action": "Place knowledge (Microsoft 365), transaction (GitHub and line-of-business writes), and control (identity, policy, secrets, audit) on one page.",
          "lookLike": "<b>Conceptual diagram</b><img class=\"diagram\" src=\"assets/diagrams/01-conceptual-1.png\" alt=\"Conceptual view\">",
          "whyMatters": "Sponsors fund the control plane. The Copilot experiences sit on top of it."
        },
        {
          "t": "Never duplicate a system of record to make it 'AI accessible'",
          "rl": "conceptual · 200",
          "action": "Write the rule and one example: Office files stay in SharePoint; source code stays in GitHub.",
          "whyMatters": "A second copy becomes a second authority the moment the first one changes."
        }
      ],
      "vids": [
        {
          "s": 11
        },
        {
          "s": 9
        }
      ]
    },
    {
      "n": 3,
      "title": "Logical view",
      "time": "60 min",
      "rungs": "200",
      "lib": "view-02-logical",
      "opener": "Logical means which parts talk, and which payload moves. The fork is synced Graph items versus live MCP fetch.",
      "obj": "Trace synced indexing (extract, label, ACL map, index) and federated fetch (no Graph copy).",
      "deliv": "Both flows drawn, with the ACL-mapping step marked as the one that cannot be sloppy.",
      "mods": [
        {
          "t": "Synced connector pipeline",
          "rl": "logical · 200",
          "action": "Order the four steps and circle ACL mapping.",
          "lookLike": "<b>Logical model</b><img class=\"diagram\" src=\"assets/diagrams/02-logical-1.png\" alt=\"Logical view\">",
          "whyMatters": "A correct index with a wide ACL makes restricted source data searchable across the tenant."
        },
        {
          "t": "Federated fetch persists nothing",
          "rl": "logical · 200",
          "action": "Walk a live ServiceNow question: approved MCP tool, gateway policy, live citation, zero Graph write.",
          "lookLike": "<b>Flows</b><img class=\"diagram\" src=\"assets/diagrams/02-logical-2.png\" alt=\"Logical flows\">",
          "whyMatters": "Volatile or sensitive facts belong on the live path, not in the semantic index."
        }
      ],
      "vids": [
        {
          "s": 3
        },
        {
          "s": 4
        },
        {
          "s": 2
        }
      ]
    },
    {
      "n": 4,
      "title": "Physical view",
      "time": "60 min",
      "rungs": "200-300",
      "lib": "view-03-physical",
      "opener": "Physical means named services and where they run: Microsoft Graph, Copilot Studio, GitHub Apps, Entra, and the gateway you operate.",
      "obj": "Place each logical component on a host, and record the licensing split and the gov-cloud check.",
      "deliv": "Every logical component maps to a service or is marked as a tenant-verification gap.",
      "mods": [
        {
          "t": "Where each piece runs",
          "rl": "physical · 200",
          "action": "Fill Microsoft 365 tenant, GitHub, Entra, and the customer-operated gateway.",
          "lookLike": "<b>Physical topology</b><img class=\"diagram\" src=\"assets/diagrams/03-physical-1.png\" alt=\"Physical view\">",
          "whyMatters": "A missing admin-consent app registration or an unwatched Graph quota shows up as 429s, not as a diagram error."
        },
        {
          "t": "Do not assume cloud parity",
          "rl": "physical · 300",
          "action": "List one connector feature you will verify in the target tenant before you commit the design.",
          "whyMatters": "The failure catalog calls out federated MCP as a capability you must confirm per cloud, not assume."
        }
      ],
      "vids": [
        {
          "s": 1
        },
        {
          "s": 5
        }
      ]
    },
    {
      "n": 5,
      "title": "Integration and AI elements",
      "time": "60 min",
      "rungs": "200-300",
      "lib": "view-04-integration-ai",
      "opener": "One row per external system, plus the AI data path: identity, tool choice, grounding, Purview and Entra checks, then audit.",
      "obj": "Inventory mechanisms and name the control that stops grounding on data the caller cannot open.",
      "deliv": "Inventory complete; AI path drawn.",
      "mods": [
        {
          "t": "External systems and MCP as the shared standard",
          "rl": "integration · 200",
          "action": "For each system, record synced vs federated vs API action, and whose identity is used.",
          "lookLike": "<b>Context</b><img class=\"diagram\" src=\"assets/diagrams/04-integration-ai-1.png\" alt=\"Integration context\">",
          "whyMatters": "Graph and GitHub REST are each platform-specific. MCP is the extensibility both sides share [S6] [S7]."
        },
        {
          "t": "The query-time gate",
          "rl": "AI · 300",
          "action": "Trace prompt, Entra identity, grounding, sensitivity labels, permission trimming, DLP, response, audit.",
          "lookLike": "<b>AI path</b><img class=\"diagram\" src=\"assets/diagrams/04-integration-ai-2.png\" alt=\"AI data path\">",
          "whyMatters": "Copilot must not retrieve what the user cannot open. Labels and ACLs have to be right before grounding."
        }
      ],
      "vids": [
        {
          "s": 4
        },
        {
          "s": 6
        },
        {
          "s": 8
        }
      ]
    },
    {
      "n": 6,
      "title": "Hands-on lab",
      "time": "60 min",
      "rungs": "200",
      "lib": "block-06-hands-on-lab",
      "opener": "Predict one flow, then trace it. Candidate: a synced connector item with an ACL, or a federated MCP call that writes nothing to Graph.",
      "obj": "One flow traced with evidence. No tenant secrets in notes.",
      "deliv": "Prediction, evidence, and a diff log.",
      "mods": [
        {
          "t": "Write the prediction first",
          "rl": "lab · 200",
          "action": "Name the flow, the expected ACL or 'no persist' outcome, and where you will look.",
          "whyMatters": "A prediction written first is what turns a click-through into evidence."
        }
      ],
      "vids": [
        {
          "s": 2
        },
        {
          "s": 5
        }
      ]
    },
    {
      "n": 7,
      "title": "Failure modes and security",
      "time": "45 min",
      "rungs": "300",
      "lib": "block-07-failure-modes-and-security",
      "opener": "The tells that matter: point-to-point Copilot calls, a sloppy ACL map, prompt-owned pull-request state, and a write tool with no approval.",
      "obj": "Failure-mode table covers conceptual, logical, physical, and the AI path.",
      "deliv": "Each mode has a tell and a mitigation from the pack.",
      "mods": [
        {
          "t": "Work the failure-mode list",
          "rl": "security · 300",
          "action": "Open Failure modes and mark each one you can explain out loud.",
          "whyMatters": "The first failure in this pack is treating Copilot as the integration layer."
        }
      ],
      "vids": [
        {
          "s": 9
        }
      ]
    },
    {
      "n": 8,
      "title": "Design review and teach-back",
      "time": "30 min",
      "rungs": "300",
      "lib": "block-08-design-review",
      "opener": "Defend the three views and the decision framework: system of record, synced vs federated vs API action, and whose permissions apply.",
      "obj": "Ten-minute teach-back and the quiz without notes.",
      "deliv": "Teach-back delivered.",
      "mods": [
        {
          "t": "Three decisions you would defend",
          "rl": "review · 300",
          "action": "Defend the enablement layer, GitHub Apps over PATs, and 'no second system of record.' Name one gap you would not defend (unverified gov-cloud connector parity).",
          "whyMatters": "Naming the decision you would not defend shows where the evidence stops."
        }
      ],
      "vids": [
        {
          "s": 8
        }
      ]
    }
  ],
  "ladder": [
    {
      "key": "governance",
      "img": "governance",
      "name": "Knowledge and connectors",
      "r": [
        {
          "n": 100,
          "t": "Synced connectors put durable knowledge in Graph as externalItems with metadata and semantic labels."
        },
        {
          "n": 200,
          "t": "ACL mapping is mandatory. Federated MCP is for live or sensitive facts and persists nothing."
        },
        {
          "n": 300,
          "t": "Deletes, legal holds, and self-serve disconnects have to reach the index or you ground on stale data."
        }
      ]
    },
    {
      "key": "security",
      "img": "security",
      "name": "Permission fidelity",
      "r": [
        {
          "n": 100,
          "t": "Copilot must not retrieve what the caller cannot open."
        },
        {
          "n": 200,
          "t": "Labels, Conditional Access, DLP, and the externalItem ACL are the gate, not a longer prompt."
        },
        {
          "n": 300,
          "t": "A widened ACL on a sync amplifies an existing exposure across search and Copilot."
        }
      ]
    },
    {
      "key": "compliance",
      "img": "compliance",
      "name": "Identity and audit",
      "r": [
        {
          "n": 100,
          "t": "Graph calls inherit Entra, including Conditional Access."
        },
        {
          "n": 200,
          "t": "GitHub services use Apps and short-lived installation tokens. PATs are not a design."
        },
        {
          "n": 300,
          "t": "Every tool call is audited, including failures. Consequential writes need a workflow approval."
        }
      ]
    },
    {
      "key": "ai",
      "img": "ai",
      "name": "AI path",
      "r": [
        {
          "n": 100,
          "t": "Each platform keeps its own Copilot. They share MCP as the extensibility standard."
        },
        {
          "n": 200,
          "t": "Prompt, tool choice, grounding, Purview and Entra checks, response, audit."
        },
        {
          "n": 300,
          "t": "Untrusted retrieved text is data, not instructions. Write tools are not plugins."
        }
      ]
    },
    {
      "key": "ea",
      "img": "hero",
      "name": "Architecture altitudes",
      "r": [
        {
          "n": 100,
          "t": "Conceptual is planes and the boundary. Logical is flows. Physical is named services."
        },
        {
          "n": 200,
          "t": "Place the views in TOGAF phases and DoDAF viewpoints from the hub."
        },
        {
          "n": 300,
          "t": "Defend the decision framework and name the gov-cloud check you have not verified."
        }
      ]
    }
  ],
  "miniModules": [
    {
      "name": "Microsoft Graph",
      "t": "API and data plane for the Microsoft 365 side, including Copilot APIs and externalItem [S1] [S3]."
    },
    {
      "name": "Entra ID",
      "t": "Users and apps authenticate here. Conditional Access applies to Graph calls. GitHub can federate to the same directory."
    },
    {
      "name": "GitHub",
      "t": "System of record for code and delivery. Apps, Checks, and webhooks stay here [S12]."
    },
    {
      "name": "Copilot Studio",
      "t": "Low-code business agents. Separate from GitHub Copilot [S10]."
    },
    {
      "name": "Microsoft Purview",
      "t": "On the AI path for labels and DLP. It is a control on grounding, not the integration layer."
    }
  ],
  "prompts": [
    {
      "cat": "Briefing at an altitude",
      "model": "any LLM",
      "desc": "One area of the digital-work platform, at one altitude.",
      "items": [
        "Conceptual briefing",
        "Connector fork",
        "Physical placement"
      ],
      "flagship": "You are briefing an enterprise architect on Microsoft's digital-work platform (Microsoft 365 Copilot, GitHub Copilot, connectors, and MCP).\nTopic: <e.g. synced vs federated connectors>\nAltitude: <conceptual | logical | physical>\n\nRules:\n- Prefer Microsoft Learn and GitHub Docs. Cite the page.\n- Stay at the requested altitude.\n- End with what changes one altitude down, and one thing the sources do not say.\n- If you are not sure, say UNVERIFIED."
    },
    {
      "cat": "Socratic examiner (design review)",
      "model": "any LLM",
      "desc": "A skeptical architect, one question at a time.",
      "items": [
        "Boundary challenge",
        "ACL challenge",
        "GitHub identity challenge"
      ],
      "flagship": "Act as a skeptical principal architect reviewing my design for Microsoft's digital-work platform.\nAsk ONE question at a time. After each answer, grade it (solid / shaky / wrong), name the doc that settles it, and ask a harder follow-up.\nProbe: the boundary, synced versus federated, ACL mapping, GitHub Apps versus PATs, and what stops grounding on data the user cannot open.\nStop after 8 questions and name the assumption most likely to fail."
    },
    {
      "cat": "Failure-mode spotter",
      "model": "any LLM",
      "desc": "A synthetic design in, a failure table out.",
      "items": [
        "Connector mismatch",
        "Oversharing",
        "Write tools"
      ],
      "flagship": "Here is a synthetic design (no real tenant names or secrets):\n<paste>\n\nTable: failure | view | first tell | root cause | mitigation | source.\nInclude ACL mapping, synced-versus-federated mismatch, prompt-owned state changes, PAT usage, and gov-cloud assumptions.\nMark anything you cannot source as UNVERIFIED."
    }
  ],
  "checklist": [
    {
      "title": "Copilot used as the integration layer",
      "view": "Conceptual",
      "src": "S9",
      "good": "Route every external call through the Copilot Integration Enablement Layer: APIs, events, connectors, identity, and audit.",
      "bad": "Tell: point-to-point connections from Copilot into ITSM, CRM, or HR, with no shared policy."
    },
    {
      "title": "A second copy becomes the system of record",
      "view": "Conceptual",
      "src": "S5",
      "good": "Keep Office files in SharePoint and source code in GitHub. Index or fetch; do not fork the authority.",
      "bad": "Tell: Teams or SharePoint and GitHub or ITSM disagree about the same record."
    },
    {
      "title": "Sensitive or fast-changing data synced into Graph",
      "view": "Logical",
      "src": "S4",
      "good": "Use a federated MCP connector for live, sensitive, or regulated facts. Do not persist that payload.",
      "bad": "Tell: stale citations, or sensitive source records now sitting in the semantic index."
    },
    {
      "title": "Static knowledge fetched live on every question",
      "view": "Logical",
      "src": "S3",
      "good": "Sync durable knowledge (docs, approved procedures) so search and Copilot can retrieve it.",
      "bad": "Tell: slow answers and source APIs rate-limiting broad lookups."
    },
    {
      "title": "ACL mapping skipped or widened",
      "view": "Logical",
      "src": "S2",
      "good": "Map source entitlements onto the Graph externalItem ACL before indexing. Audit the map.",
      "bad": "Tell: people find restricted external records in Copilot or Search."
    },
    {
      "title": "The model owns a state change",
      "view": "Logical",
      "src": "S12",
      "good": "Keep merges, change tickets, and release gates on webhooks, the Checks API, and branch protection. AI accelerates; it does not own the lifecycle.",
      "bad": "Tell: an unintended merge or a release that never produced a check."
    },
    {
      "title": "Gov-cloud feature assumed from commercial docs",
      "view": "Physical",
      "src": "S9",
      "good": "Verify the connector, including federated MCP, in the target tenant before you commit the design.",
      "bad": "Tell: the feature is missing the day you deploy into GCC, GCC High, or DoD."
    },
    {
      "title": "Graph throttling treated as a mystery outage",
      "view": "Physical",
      "src": "S1",
      "good": "Pre-register the Entra app, grant admin consent, and watch ingestion quotas and retries.",
      "bad": "Tell: HTTP 429 and a stalled connector with an empty index."
    },
    {
      "title": "Oversharing through grounding",
      "view": "Integration / AI",
      "src": "S11",
      "good": "Labels, Conditional Access, DLP, and exact externalItem ACL trimming happen before grounding.",
      "bad": "Tell: Copilot surfaces an executive file or a repo the caller should not read."
    },
    {
      "title": "Retrieved text trusted as instructions",
      "view": "Integration / AI",
      "src": "S6",
      "good": "Separate untrusted content from the system prompt. Allowlist tools. Keep policy outside the model.",
      "bad": "Tell: a ticket or a markdown file causes an unapproved tool call."
    },
    {
      "title": "Write-capable MCP tool with no approval",
      "view": "Integration / AI",
      "src": "S7",
      "good": "Split read and write tools. Consequential actions need a verified identity and a workflow approval, not a sentence in the prompt.",
      "bad": "Tell: a record deleted, a ticket opened, or a deploy fired from chat."
    },
    {
      "title": "PAT or broad OAuth app for a service",
      "view": "Integration / AI",
      "src": "S12",
      "good": "Use a GitHub App and short-lived installation tokens. Reserve OAuth for a real user delegation.",
      "bad": "Tell: one token can see every repo the user can see."
    },
    {
      "title": "Deletes and holds never reach the index",
      "view": "Integration / AI",
      "src": "S3",
      "good": "Process delta deletes and legal-hold signals. Track self-serve connector disconnects.",
      "bad": "Tell: Copilot still cites an item that was deleted, or a disconnect quietly purges content."
    }
  ],
  "cheat": [
    {
      "h": "Scope",
      "r": [
        "When someone asks whether GitHub Copilot is part of Microsoft 365 Copilot, say no. They are separately licensed. They share Entra and, where you choose it, the GitHub Cloud Knowledge connector [S12] [S5].",
        "When the task is an Office artifact, use Microsoft 365 Copilot. When it is code, tests, or pull requests, use GitHub Copilot. When it is a low-code business agent, use Copilot Studio [S10] [S12].",
        "Copilot is a governed consumer of integration, identity, and control. It is not the integration layer [S9]."
      ]
    },
    {
      "h": "Connectors",
      "r": [
        "Durable, broadly searched knowledge goes through a <b>synced</b> connector into Graph [S3] [S2].",
        "Volatile, sensitive, large, or regulated facts go through a <b>federated MCP</b> connector. Nothing is persisted [S4].",
        "A state change goes through an <b>API or workflow</b>, not through the prompt [S1] [S7].",
        "The step that cannot be sloppy on a sync is <b>ACL mapping</b> into the caller's Entra context."
      ]
    },
    {
      "h": "Identity and GitHub",
      "r": [
        "Server-to-server GitHub work uses a <b>GitHub App</b> and a short-lived installation token [S12].",
        "OAuth is for a user-delegated flow. A personal access token is not a durable enterprise integration.",
        "GitHub Copilot Extensions are the older model. MCP servers are the shared extensibility standard [S6] [S7]."
      ]
    },
    {
      "h": "AI data path",
      "r": [
        "What stops oversharing is the check between grounding and the response: Conditional Access, sensitivity labels, permission trimming, and DLP [S11].",
        "A consequential action binds to a verified identity and a workflow approval, not to the wording of the prompt.",
        "Office documents stay in SharePoint. Source code stays in GitHub. Do not cross the systems of record."
      ]
    }
  ],
  "falsifier": "Copilot is not an integration bus. If a sentence says Copilot 'reaches' ITSM, CRM, or HR on its own, rewrite it as a call through the Integration Enablement Layer.",
  "quizSections": {
    "1": "Conceptual / logical",
    "2": "Physical / deployment",
    "3": "Integration and third-party",
    "4": "AI elements",
    "5": "Framework / synthesis"
  },
  "quiz": [
    {
      "week": 1,
      "rung": 100,
      "pillar": "Conceptual",
      "type": "open",
      "question": "What is the difference between ungoverned AI sprawl and governed orchestration?",
      "answer": "Sprawl is Copilot calling ITSM, CRM, and HR directly. Governance sends those same calls through one Integration Enablement Layer of APIs, events, identity, and connectors.",
      "explanation": "Cut card 1 and the conceptual view."
    },
    {
      "week": 1,
      "rung": 200,
      "pillar": "Logical",
      "type": "open",
      "question": "Which logical component realizes capability C1 (know the data), and what physical service realizes it?",
      "answer": "A synced connector writing a Graph externalItem (content, metadata, ACL, semantic labels), realized on Microsoft Graph in the Microsoft 365 tenant. Live facts use a federated MCP connector instead of a copy.",
      "explanation": "Vault quiz bank item 1, study guide, connectors overview [S3]."
    },
    {
      "week": 1,
      "rung": 200,
      "pillar": "Integration",
      "type": "open",
      "question": "Name three external systems and the mechanism each uses.",
      "answer": "GitHub docs: GitHub Cloud Knowledge connector (synced) into Graph. A live ITSM ticket: federated MCP, nothing persisted. A pull-request state change: webhook plus Checks API, not the model.",
      "explanation": "Vault quiz bank item 2."
    },
    {
      "week": 4,
      "rung": 200,
      "pillar": "AI",
      "type": "mc",
      "question": "Which control stops an AI feature from grounding on data the user cannot open?",
      "options": [
        "A nightly index rebuild",
        "Query-time permission trimming, sensitivity labels, Conditional Access, and DLP",
        "Putting a copy of the file in SharePoint",
        "A longer system prompt"
      ],
      "answer": "Query-time permission trimming, sensitivity labels, Conditional Access, and DLP",
      "explanation": "Vault quiz bank item 3 and the AI data path."
    },
    {
      "week": 1,
      "rung": 100,
      "pillar": "Conceptual",
      "type": "mc",
      "question": "GitHub Copilot and Microsoft 365 Copilot are…",
      "options": [
        "One product with two entry points",
        "Separately licensed products that can share Entra identity and selected connectors",
        "The same license, different portals",
        "Interchangeable for code and for Office files"
      ],
      "answer": "Separately licensed products that can share Entra identity and selected connectors",
      "explanation": "Cheatsheet and the M365 vs GitHub Copilot note [S10] [S12]."
    },
    {
      "week": 3,
      "rung": 200,
      "pillar": "Integration",
      "type": "mc",
      "question": "When should you sync, and when should you fetch live?",
      "options": [
        "Always sync; federation is only for prototypes",
        "Sync durable knowledge; fetch live when data is volatile, sensitive, or must not be copied",
        "Always fetch live so nothing is indexed",
        "Sync code into SharePoint and files into GitHub"
      ],
      "answer": "Sync durable knowledge; fetch live when data is volatile, sensitive, or must not be copied",
      "explanation": "Connectors overview and federated connectors [S3] [S4]."
    },
    {
      "week": 3,
      "rung": 300,
      "pillar": "Logical",
      "type": "open",
      "question": "What is the one step in a synced connector that cannot be sloppy?",
      "answer": "ACL mapping: source entitlements translated into the Microsoft 365 user context on the externalItem before indexing.",
      "explanation": "Cut card on synced connectors."
    },
    {
      "week": 2,
      "rung": 200,
      "pillar": "Physical",
      "type": "mc",
      "question": "What should a service use to call GitHub?",
      "options": [
        "A personal access token checked into the agent",
        "A GitHub App with a short-lived installation token",
        "A user OAuth token stored for the service",
        "Copilot Extensions, which remain the current standard"
      ],
      "answer": "A GitHub App with a short-lived installation token",
      "explanation": "GitHub identity guidance in the cut and the integration view [S12] [S6]."
    },
    {
      "week": 5,
      "rung": 300,
      "pillar": "Framework",
      "type": "open",
      "question": "State the decision framework in four questions.",
      "answer": "What is the system of record, and will you avoid copying it? If the data needs durable search, sync it. If it is dynamic or sensitive, federate it. If the integration changes state, use an API or workflow. Then ask whose permissions apply.",
      "explanation": "Slide narration, decision framework."
    }
  ],
  "views": {
    "conceptual": {
      "lib": "view-01-conceptual",
      "img": [
        "01-conceptual-1.png"
      ],
      "rule": "Conceptual means what and why. Copilot consumes a governed integration layer. It does not replace it.",
      "tables": [
        {
          "h": "Planes",
          "cols": [
            "Plane",
            "What it holds",
            "Must not become"
          ],
          "rows": [
            [
              "Knowledge",
              "Microsoft 365 content and synced external knowledge",
              "A second copy of GitHub or ITSM"
            ],
            [
              "Transaction",
              "GitHub delivery and approved API or workflow actions",
              "A prompt that merges or deploys on its own"
            ],
            [
              "Control",
              "Entra, policy, secrets, connector catalog, audit",
              "An unaudited point-to-point Copilot call"
            ]
          ]
        }
      ]
    },
    "logical": {
      "lib": "view-02-logical",
      "img": [
        "02-logical-1.png",
        "02-logical-2.png"
      ],
      "rule": "Logical means components and payloads. No tenant names.",
      "tables": [
        {
          "h": "Two connector patterns",
          "cols": [
            "Pattern",
            "Use when",
            "Persists to Graph?",
            "Source"
          ],
          "rows": [
            [
              "Synced",
              "Durable knowledge people will search again",
              "Yes, as externalItem with ACL and labels",
              "[S3] [S2]"
            ],
            [
              "Federated MCP",
              "Live, sensitive, large, or write-back to the source",
              "No",
              "[S4] [S6]"
            ],
            [
              "API or workflow action",
              "The integration changes state",
              "No content copy; the system of record changes",
              "[S1] [S7]"
            ]
          ]
        },
        {
          "h": "Synced pipeline",
          "cols": [
            "Step",
            "Failure if skipped"
          ],
          "rows": [
            [
              "Extract",
              "Nothing to retrieve"
            ],
            [
              "Normalize and semantic labels",
              "Weak Copilot grounding"
            ],
            [
              "Map source ACLs into the Entra user context",
              "Oversharing at tenant scale"
            ],
            [
              "Index into Graph",
              "Knowledge never becomes searchable"
            ]
          ]
        }
      ]
    },
    "physical": {
      "lib": "view-03-physical",
      "img": [
        "03-physical-1.png"
      ],
      "rule": "Physical means the named service and the cloud you must verify.",
      "tables": [
        {
          "h": "Where it runs",
          "cols": [
            "Piece",
            "Where",
            "Source"
          ],
          "rows": [
            [
              "Microsoft 365 Copilot and Graph externalItems",
              "Microsoft 365 tenant",
              "[S11] [S3]"
            ],
            [
              "Copilot APIs",
              "Microsoft Graph, same auth as other Graph APIs",
              "[S1]"
            ],
            [
              "GitHub Copilot, Apps, Checks, webhooks",
              "GitHub",
              "[S12]"
            ],
            [
              "Conditional Access",
              "Entra ID",
              "[S1]"
            ],
            [
              "MCP catalog and gateway you mandate",
              "The enablement layer you operate",
              "[S6] [S9]"
            ]
          ]
        }
      ]
    },
    "integration": {
      "lib": "view-04-integration-ai",
      "img": [
        "04-integration-ai-1.png",
        "04-integration-ai-2.png"
      ],
      "rule": "One row per system outside the boundary, then the AI path.",
      "tables": [
        {
          "h": "Decision",
          "cols": [
            "Question",
            "Route"
          ],
          "rows": [
            [
              "What is the system of record?",
              "Do not duplicate it"
            ],
            [
              "Do people need durable search?",
              "Synced connector"
            ],
            [
              "Is it dynamic or sensitive?",
              "Federated MCP"
            ],
            [
              "Does it change state?",
              "API or workflow, with approval if the action is consequential"
            ],
            [
              "Whose permissions apply?",
              "User-delegated or service (GitHub App), never a shared PAT"
            ]
          ]
        },
        {
          "h": "AI path",
          "cols": [
            "Step",
            "Control"
          ],
          "rows": [
            [
              "Prompt carries identity",
              "Entra ID"
            ],
            [
              "Orchestrator picks a tool",
              "Approved MCP or connector catalog"
            ],
            [
              "Grounding data is fetched",
              "ACL and label already on the item"
            ],
            [
              "Before the response",
              "Conditional Access, sensitivity labels, permission trimming, DLP"
            ],
            [
              "After the call",
              "Audit, whether the tool succeeded or not"
            ]
          ]
        }
      ]
    },
    "govcloud": {
      "lib": "view-03-physical",
      "img": [],
      "rule": "Commercial docs are not a promise about GCC, GCC High, or DoD. Verify the connector in the tenant.",
      "tables": [
        {
          "h": "Check before you commit",
          "cols": [
            "Item",
            "What to verify"
          ],
          "rows": [
            [
              "Federated MCP connectors",
              "Feature exists in that cloud. Do not assume parity."
            ],
            [
              "Synced connectors and Graph quotas",
              "App registration, admin consent, and throttle behavior"
            ],
            [
              "Purview controls on the path",
              "Labels, DLP, and audit available for the Copilot surface you named"
            ],
            [
              "GitHub identity",
              "Whether the tenant's GitHub cloud can use the App and Entra federation you designed"
            ]
          ]
        }
      ]
    }
  },
  "eaFrameworks": {
    "togaf": [
      {
        "phase": "Phase A · Architecture Vision",
        "t": "Boundary",
        "items": [
          "Two platforms, one enablement layer.",
          "Copilot is a consumer, not a bypass."
        ]
      },
      {
        "phase": "Phase B · Business Architecture",
        "t": "Planes",
        "items": [
          "Knowledge, transaction, and control have different owners.",
          "Office files and source code stay in their own systems of record."
        ]
      },
      {
        "phase": "Phase C · Information Systems",
        "t": "Logical",
        "items": [
          "Synced externalItem versus federated MCP versus API action.",
          "ACL mapping is a required step, not a cleanup."
        ]
      },
      {
        "phase": "Phase D · Technology",
        "t": "Physical",
        "items": [
          "Graph, Entra, GitHub Apps, and the gateway you run.",
          "Verify gov-cloud connector availability in the tenant."
        ]
      }
    ],
    "dodaf": [
      {
        "view": "Conceptual",
        "t": "OV-1, CV-2",
        "items": [
          "What the platform is and where the boundary sits.",
          "Knowledge, transaction, and control as the capability split."
        ]
      },
      {
        "view": "Logical",
        "t": "OV-2, OV-5b, DIV-2",
        "items": [
          "Synced, federated, and API-action flows.",
          "externalItem as the logical object for a sync."
        ]
      },
      {
        "view": "Physical",
        "t": "SV-1, SV-2, StdV-1",
        "items": [
          "Graph, Entra, GitHub Apps, Checks, MCP.",
          "Verify the feature in the target cloud."
        ]
      },
      {
        "view": "Integration and AI",
        "t": "SV-6, OV-3",
        "items": [
          "One row per external system.",
          "The AI path ends in audit."
        ]
      }
    ],
    "altitudes": [
      {
        "name": "Conceptual",
        "q": "What and why?",
        "allowed": "Planes, actors, the boundary",
        "forbidden": "API names and SKUs",
        "lib": "view-01-conceptual"
      },
      {
        "name": "Logical",
        "q": "Which parts, what payload?",
        "allowed": "Flows and the connector fork",
        "forbidden": "Regions and license SKUs",
        "lib": "view-02-logical"
      },
      {
        "name": "Physical",
        "q": "What is deployed, where?",
        "allowed": "Graph, Entra, GitHub, quotas",
        "forbidden": "A new capability with no service",
        "lib": "view-03-physical"
      },
      {
        "name": "Integration and AI",
        "q": "What crosses the boundary?",
        "allowed": "External systems and the AI path",
        "forbidden": "A Copilot call with no mechanism",
        "lib": "view-04-integration-ai"
      }
    ],
    "table": [
      [
        "Integration Enablement Layer",
        "Phase A, B",
        "OV-1",
        "Boundary"
      ],
      [
        "Synced connector / externalItem",
        "Phase C",
        "DIV-2, OV-5b",
        "Know the data"
      ],
      [
        "Federated MCP",
        "Phase C, D",
        "SV-1, SV-6",
        "Live facts"
      ],
      [
        "GitHub App and Checks API",
        "Phase D",
        "SV-4",
        "State changes"
      ],
      [
        "Query-time label and ACL check",
        "Phase C, governance",
        "OV-3",
        "Stop oversharing"
      ]
    ]
  },
  "deckFlags": {}
};

DATA.glossary = [
  {
    "category": "Logical",
    "term": "ACL",
    "rung": 200,
    "essential": true,
    "definition": "Access control list on a Microsoft Graph item. A synced connector must map source-system permissions onto this list or Copilot can overshare.",
    "see_also": "Integration view, study guide"
  },
  {
    "category": "Logical",
    "term": "Agent / tool integration",
    "rung": 200,
    "essential": false,
    "definition": "An agent calls a governed action or workflow (create a ticket, ask for approval, update a record). State changes stay in the system of record, not in the prompt.",
    "see_also": "Mind map, logical view"
  },
  {
    "category": "Integration & AI",
    "term": "API consumption",
    "rung": 200,
    "essential": false,
    "definition": "The app calls a third-party API at request time for a transactional read or write. No copy of the record is kept as a second system of record.",
    "see_also": "Mind map"
  },
  {
    "category": "Logical",
    "term": "Checks API",
    "rung": 200,
    "essential": false,
    "definition": "GitHub API that posts pass/fail and evidence onto a pull request. Used for tests, security findings, and release gates.",
    "see_also": "Logical view, integration risks"
  },
  {
    "category": "Integration & AI",
    "term": "Conditional Access",
    "rung": 200,
    "essential": false,
    "definition": "Entra policy that can block or step up a sign-in. Copilot APIs inherit it because they sit on Microsoft Graph.",
    "see_also": "Mind map, Copilot APIs docs"
  },
  {
    "category": "Conceptual",
    "term": "Control plane",
    "rung": 200,
    "essential": false,
    "definition": "Identity, policy, secrets, catalogs, and audit. One of the three planes in the Copilot Integration Enablement Layer.",
    "see_also": "Conceptual view, study guide"
  },
  {
    "category": "Integration & AI",
    "term": "Copilot (role)",
    "rung": 200,
    "essential": true,
    "definition": "The user-facing intelligence layer. It is not the integration layer. Durable assets are APIs, events, identity, connectors, schemas, and policy underneath it.",
    "see_also": "Mind map, all views"
  },
  {
    "category": "Integration & AI",
    "term": "Copilot APIs",
    "rung": 200,
    "essential": true,
    "definition": "REST endpoints under Microsoft Graph that let an app invoke Microsoft 365 Copilot. Same auth model as other Graph APIs.",
    "see_also": "Block sources, mind map"
  },
  {
    "category": "Integration & AI",
    "term": "Copilot connector",
    "rung": 200,
    "essential": true,
    "definition": "Brings external knowledge into Microsoft 365 Copilot and Search. Two kinds: synced (indexed) and federated (live MCP).",
    "see_also": "Blocks, integration view"
  },
  {
    "category": "Conceptual",
    "term": "Copilot Integration Enablement Layer",
    "rung": 200,
    "essential": true,
    "definition": "The target control point: an MCP/API catalog, gateway, policy, and audit so teams do not build one-off AI connections.",
    "see_also": "Conceptual view, mind map"
  },
  {
    "category": "Integration & AI",
    "term": "Copilot Studio",
    "rung": 200,
    "essential": true,
    "definition": "Low-code place to build task-specific business agents that call APIs, Dataverse, and approved MCP tools. Separate from GitHub Copilot.",
    "see_also": "Mind map, cheatsheet"
  },
  {
    "category": "Integration & AI",
    "term": "Dataverse",
    "rung": 200,
    "essential": false,
    "definition": "Power Platform data store behind low-code apps and some Copilot Studio agents.",
    "see_also": "Mind map"
  },
  {
    "category": "Conceptual",
    "term": "Digital-work platform",
    "rung": 200,
    "essential": true,
    "definition": "The Microsoft 365 side: mail, files, chat, meetings, and business process. Microsoft Graph is its API and data plane.",
    "see_also": "Conceptual view"
  },
  {
    "category": "Physical",
    "term": "Entra ID",
    "rung": 200,
    "essential": true,
    "definition": "Microsoft's identity service for this pack. Users and apps authenticate here; GitHub can federate to the same directory.",
    "see_also": "Physical view, cheatsheet"
  },
  {
    "category": "Logical",
    "term": "Event-driven integration",
    "rung": 200,
    "essential": false,
    "definition": "A source publishes a webhook or event; a consumer reacts. Used when systems must respond to a change instead of polling.",
    "see_also": "Mind map, logical view"
  },
  {
    "category": "Logical",
    "term": "externalItem",
    "rung": 200,
    "essential": true,
    "definition": "The Graph object a synced connector writes. Study guide: it must carry content, metadata, an ACL, and semantic labels.",
    "see_also": "Study guide, physical view"
  },
  {
    "category": "Logical",
    "term": "Federated connector",
    "rung": 200,
    "essential": true,
    "definition": "Live fetch at question time through MCP. Content is not copied into Microsoft Graph. Use it when data is volatile, sensitive, large, or when a write must hit the source.",
    "see_also": "Blocks, logical view"
  },
  {
    "category": "Integration & AI",
    "term": "GitHub App",
    "rung": 200,
    "essential": true,
    "definition": "Server-to-server GitHub integration with fine-grained permissions and short-lived installation tokens. Preferred over a broad OAuth app.",
    "see_also": "Mind map, integration risks"
  },
  {
    "category": "Logical",
    "term": "GitHub Cloud Knowledge connector",
    "rung": 200,
    "essential": false,
    "definition": "Microsoft connector that indexes selected GitHub Markdown and docs into Graph so Microsoft 365 Copilot can ground on them.",
    "see_also": "Source ledger, logical view"
  },
  {
    "category": "Integration & AI",
    "term": "GitHub Copilot",
    "rung": 200,
    "essential": true,
    "definition": "The coding assistant (IDE, CLI, chat, coding agent). Licensed separately from Microsoft 365 Copilot.",
    "see_also": "Cheatsheet, mind map"
  },
  {
    "category": "Logical",
    "term": "GitHub Copilot Extensions",
    "rung": 200,
    "essential": false,
    "definition": "Older GitHub App model for extending Copilot. GitHub has deprecated it in favor of MCP servers.",
    "see_also": "Mind map, study guide"
  },
  {
    "category": "Integration & AI",
    "term": "Graph change notifications",
    "rung": 200,
    "essential": false,
    "definition": "Webhooks from Microsoft Graph when a resource changes. The subscriber then reads the authorized delta.",
    "see_also": "Mind map"
  },
  {
    "category": "Integration & AI",
    "term": "Graph Data Connect",
    "rung": 200,
    "essential": false,
    "definition": "Bulk, governed export of Microsoft 365 data into an Azure analytics store. Not the same as a Copilot connector.",
    "see_also": "Mind map"
  },
  {
    "category": "Logical",
    "term": "Indexed knowledge connector",
    "rung": 200,
    "essential": false,
    "definition": "Same idea as a synced connector: copy external content into a Graph external connection so Search and Copilot can retrieve it.",
    "see_also": "Mind map, study guide"
  },
  {
    "category": "Conceptual",
    "term": "Knowledge plane",
    "rung": 200,
    "essential": false,
    "definition": "Curated information made searchable (synced connectors and the Graph index).",
    "see_also": "Conceptual view"
  },
  {
    "category": "Platform",
    "term": "MCP",
    "rung": 200,
    "essential": false,
    "definition": "Model Context Protocol. A way for a host (Copilot) to call tools and read context from an external server. GitHub's primary Copilot extensibility path, and the wire for federated connectors.",
    "see_also": "Blocks, all views"
  },
  {
    "category": "Conceptual",
    "term": "MCP server",
    "rung": 200,
    "essential": false,
    "definition": "A process that exposes tools to Copilot. Catalog it. Split read-only tools from write tools.",
    "see_also": "Conceptual view, integration risks"
  },
  {
    "category": "Platform",
    "term": "Microsoft 365 Copilot",
    "rung": 200,
    "essential": true,
    "definition": "The work assistant over mail, files, meetings, and Graph. Not the same product as GitHub Copilot.",
    "see_also": "Cheatsheet, source ledger"
  },
  {
    "category": "Conceptual",
    "term": "Microsoft Graph",
    "rung": 200,
    "essential": false,
    "definition": "The permission-aware API and data plane for Microsoft 365 content and for Copilot APIs.",
    "see_also": "Mind map, conceptual view"
  },
  {
    "category": "Physical",
    "term": "OAuth 2.0",
    "rung": 200,
    "essential": false,
    "definition": "Delegated or app authorization. Graph and GitHub both use it. Broad scopes are a risk on GitHub; prefer a GitHub App for service-to-service.",
    "see_also": "Physical view"
  },
  {
    "category": "Physical",
    "term": "OIDC",
    "rung": 200,
    "essential": false,
    "definition": "OpenID Connect. Identity layer on OAuth, used for sign-in into Entra.",
    "see_also": "Physical view"
  },
  {
    "category": "Logical",
    "term": "PAT",
    "rung": 200,
    "essential": false,
    "definition": "Personal access token. Avoid it for production integrations; it is a long-lived user secret.",
    "see_also": "Study guide"
  },
  {
    "category": "Integration & AI",
    "term": "Permission fidelity",
    "rung": 200,
    "essential": false,
    "definition": "Source-system rights must survive the trip into Graph ACLs. If the mapping is wrong, Copilot retrieval spreads the mistake.",
    "see_also": "Integration view"
  },
  {
    "category": "Integration & AI",
    "term": "Power Platform connector",
    "rung": 200,
    "essential": false,
    "definition": "Low-code connector used by Power Automate and Power Apps. Different surface from a Copilot connector.",
    "see_also": "Mind map"
  },
  {
    "category": "Integration & AI",
    "term": "Prompt injection",
    "rung": 200,
    "essential": false,
    "definition": "Hostile text inside retrieved content that tries to override the model's instructions. Treat retrieved text as data; gate actions outside the model.",
    "see_also": "Integration view"
  },
  {
    "category": "Physical",
    "term": "SAML",
    "rung": 200,
    "essential": false,
    "definition": "Older SSO federation option into Entra, alternative to OIDC.",
    "see_also": "Physical view"
  },
  {
    "category": "Logical",
    "term": "SCIM",
    "rung": 200,
    "essential": false,
    "definition": "Protocol for automated joiner, mover, and leaver provisioning.",
    "see_also": "Physical view, study guide"
  },
  {
    "category": "Logical",
    "term": "Semantic index",
    "rung": 200,
    "essential": false,
    "definition": "Microsoft's index that Copilot uses for grounding. Synced connector items land where this retrieval can see them.",
    "see_also": "Study guide (grounding path)"
  },
  {
    "category": "Conceptual",
    "term": "Software-delivery platform",
    "rung": 200,
    "essential": false,
    "definition": "The GitHub side: repos, review, Actions, packages, release.",
    "see_also": "Conceptual view"
  },
  {
    "category": "Logical",
    "term": "Synced connector",
    "rung": 200,
    "essential": false,
    "definition": "Pulls external content on a schedule into a Graph external connection (content, metadata, ACL, semantic labels). Good for search; bad for secrets and fast-changing records.",
    "see_also": "Blocks, logical view"
  },
  {
    "category": "Conceptual",
    "term": "System of record",
    "rung": 200,
    "essential": false,
    "definition": "The one authoritative store for a fact. Copilot must not become a second one.",
    "see_also": "Conceptual view"
  },
  {
    "category": "Conceptual",
    "term": "Transaction plane",
    "rung": 200,
    "essential": false,
    "definition": "APIs and workflows that change state. Distinct from the knowledge plane.",
    "see_also": "Conceptual view"
  },
  {
    "category": "Logical",
    "term": "Work IQ API",
    "rung": 200,
    "essential": false,
    "definition": "Microsoft extensibility API called out in the study guide as part of how Copilot reasons over work context. Treat product detail as Microsoft Learn, not as invented here.",
    "see_also": "Study guide, source ledger"
  },
  {
    "category": "Logical",
    "term": "Workload identity",
    "rung": 200,
    "essential": false,
    "definition": "An app or service principal, not a person. Server-to-server calls should use this (or a GitHub App), not a shared user account.",
    "see_also": "Study guide"
  }
];

DATA.cut = {
  "labels": [
    "Intro",
    "Governed consumer, not a bypass",
    "Two platforms, one strategy",
    "The AI data path",
    "Mapping the surfaces",
    "Synced vs. federated",
    "Building synced connectors",
    "Federated live fetch",
    "GitHub identity and tools",
    "APIs govern, AI accelerates",
    "Bridging the domains",
    "Trust boundaries",
    "The decision framework",
    "The target state",
    "The strategic ask"
  ],
  "slides": [
    "Microsoft's Digital-Work Platform is really two platforms wired through one governed AI orchestration boundary: the M365 digital-work side and the GitHub software-delivery side, meeting at a Governed AI Integration Gateway that enforces zero-trust policy, audit trail, and a secure tunnel between them.",
    "The core architectural rule sits right here. Ungoverned sprawl lets Copilot punch its own holes straight to ITSM, CRM, and HR systems, breaking permission fidelity and creating shadow AI data paths. Governed orchestration routes every one of those same calls through a shared Integration Enablement Layer of APIs, event streams, identity controls, and connectors instead.",
    "At the conceptual level, each platform keeps its own native AI orchestration layer — M365 Copilot over the knowledge plane, GitHub Copilot over the transaction plane — but third-party data, identity, and actions can only cross that platform boundary through governed APIs, Model Context Protocol, and federated identity.",
    "This is the pack's core subject: the AI data path doubles as the governance chokepoint. A user prompt carries identity via Entra ID, the Copilot orchestrator plans tool selection, grounding data is fetched, and Microsoft Purview and Entra evaluation applies conditional access, sensitivity labels, permission trimming, and DLP before any response is generated — with every tool call streamed to audit logs regardless of outcome.",
    "Zooming out, the two platforms expose parallel integration surfaces — Graph API and Copilot Studio on the M365 side, REST, GraphQL, webhooks, and GitHub Apps on the GitHub side — but Model Context Protocol servers are the shared standard that bridges both: the primary extensibility mechanism for Copilot across either domain.",
    "Within that shared standard there's a hard architectural fork. Synced connectors extract, ACL-map, and copy data into the Graph semantic index for broad, durable, read-only search. Federated MCP connectors fetch live at query time with nothing persisted, built for real-time facts, sensitive data, and strict regulatory boundaries — and federation is what preserves the authoritative source.",
    "Building a synced connector is a four-step pipeline: extract from the third-party source, normalize the schema and apply semantic labels, map the source system's entitlements precisely into the Entra ID user context, and only then index into Graph. If that ACL mapping step is imperfect, the connector doesn't just index bad data — it amplifies an existing exposure risk.",
    "Federated fetch looks different end to end. A user asks about a live ServiceNow incident, Copilot selects the approved MCP connector, the MCP gateway evaluates tool policy and authenticates the caller, fetches live data, and returns an answer with a live citation — with the explicit guarantee that zero data is persisted to Graph during that flow.",
    "On the GitHub side, identity choice is the control: GitHub Apps with fine-grained, short-lived tokens are the default for server-to-server work, OAuth apps are reserved strictly for user-delegated flows, and personal access tokens are flagged to avoid for durable enterprise integrations — with GitHub Copilot Extensions deprecated in favor of MCP servers as the single standard.",
    "State transitions draw the clearest line in the whole pack. The fragile way lets Copilot itself try to coordinate PR state through approval and merge — high failure rate, poor auditability. The durable way keeps a GitHub webhook triggering an event bus, a SAST scan, a change-management record, and a Checks API decision as the unyielding system of record, with AI accelerating but never owning that lifecycle.",
    "Cross-platform patterns run in both directions with one design principle underneath: a knowledge bridge lets a PM query GitHub engineering specs from M365 Search, a delivery bridge lets an M365 webhook mirror a control step back to GitHub Checks — but Office documents stay in SharePoint and source code stays in GitHub, because the two systems of record must never cross-contaminate.",
    "Security architecture rests on three pillars: identity and authorization federated through Entra ID with SCIM lifecycle and short-lived tokens, data and content controls that classify before indexing and propagate legal holds, and agent and MCP controls that treat MCP servers as production endpoints, not plugins, strictly separating read-only from write-capable tools — all gated by one governance checkpoint: consequential actions must bind to verified identity and workflow approval, never a natural-language request alone.",
    "All of this collapses into one decision framework. Ask what the system of record is and never duplicate it; if data needs durable search, route to a synced connector; if it's dynamic or sensitive, route to a federated MCP connector; if the integration changes state, route to API or workflow actions; and always resolve whose permissions apply — user-delegated or service-delegated identity.",
    "The target state stacks cleanly: AI and Copilot experiences on top, the Copilot Integration Enablement Layer underneath as MCP gateway, API gateway, catalog, policy enforcement, audit, and schema registry, feeding a knowledge plane and a transaction plane that both terminate in the actual enterprise systems of record — centralizing governance while decentralizing AI productivity.",
    "The strategic imperative is to mandate that centralized Integration Enablement Layer across both platforms, on one golden rule: never duplicate a system of record just to make it AI accessible — because doing nothing here doesn't stay neutral, it shatters permission fidelity and invites ungoverned shadow AI sprawl."
  ],
  "cards": [
    {
      "question": "What's the actual difference between ungoverned AI sprawl and governed orchestration?",
      "detail": "Sprawl is Copilot calling ITSM, CRM, and HR systems directly; governance routes those same calls through one shared Integration Enablement Layer of APIs, event streams, identity, and connectors.",
      "why": "This is the single architectural choice the whole pack is built around — everything else is a consequence of getting this one right.",
      "example": "The same three downstream systems appear in both diagrams; only the path Copilot takes to reach them changes."
    },
    {
      "question": "Why does each platform keep its own AI orchestration layer instead of sharing one?",
      "detail": "M365 Copilot and GitHub Copilot each sit natively over their own platform, but third-party data and actions must cross the boundary through governed APIs, MCP, and federated identity.",
      "why": "Keeping orchestration native to each platform avoids building a third, ungoverned layer just to bridge them.",
      "example": "A GitHub Copilot agent doesn't call Salesforce directly — it goes through the same governed boundary an M365 Copilot call would."
    },
    {
      "question": "What actually stops the AI data path from oversharing?",
      "detail": "Microsoft Purview and Entra evaluation — conditional access, sensitivity labels, permission trimming, and DLP — sits directly in the path between grounding data fetch and response generation.",
      "why": "This is the specific, named control the conceptual view's 'permission fidelity' principle cashes out to in practice.",
      "example": "Copilot cannot retrieve what the user cannot natively access — the access check happens in the data path itself, not as an afterthought."
    },
    {
      "question": "Why does MCP matter more than either platform's native APIs?",
      "detail": "Graph API and GitHub's REST/GraphQL/webhooks are each platform-specific; MCP servers are the one extensibility mechanism shared across both.",
      "why": "A shared standard is what makes a single governance layer possible instead of two disconnected ones.",
      "example": "The same MCP catalog entry pattern governs a Datadog tool call from GitHub Copilot and a ServiceNow tool call from M365 Copilot."
    },
    {
      "question": "When should you sync data versus fetch it live?",
      "detail": "Synced connectors index durable, broadly-searchable knowledge; federated MCP connectors fetch dynamic, sensitive, or too-large-to-duplicate data live, with nothing persisted.",
      "why": "This is the architectural decision the mind-map intake called 'often simple' — but getting it backwards either stales sensitive data or fails to make static knowledge searchable.",
      "example": "A knowledge-base article syncs; a live incident ticket number does not."
    },
    {
      "question": "What's the one step in building a synced connector that can't be sloppy?",
      "detail": "ACL mapping — translating source-system entitlements precisely into the M365 Entra ID user context, before indexing.",
      "why": "A connector that indexes content correctly but maps permissions imprecisely doesn't just misfile data — it amplifies an existing exposure risk.",
      "example": "If a source system's 'restricted' folder maps to a broader M365 group than intended, that mistake is now searchable enterprise-wide."
    },
    {
      "question": "What visibly proves a federated fetch didn't leave a copy behind?",
      "detail": "The MCP gateway evaluates policy, authenticates, fetches live data, and returns it with a citation — with an explicit zero-persistence guarantee to Graph.",
      "why": "This is the mechanism, not just the claim, behind why federation is the right choice for regulated or fast-changing data.",
      "example": "Asking Copilot for a live incident status returns an answer with a citation, but nothing about that incident becomes newly searchable in Graph afterward."
    },
    {
      "question": "Why does GitHub App identity beat a personal access token for server integrations?",
      "detail": "GitHub Apps use fine-grained, short-lived tokens by default; PATs are flagged to avoid for durable enterprise integrations.",
      "why": "This is a concrete, checkable control rather than a general best-practice platitude — and it's dated by GitHub Copilot Extensions' deprecation in favor of MCP.",
      "example": "A long-lived PAT baked into a CI pipeline is exactly the kind of durable server-to-server case GitHub Apps exist to replace."
    },
    {
      "question": "Why shouldn't an LLM coordinate a PR's lifecycle state directly?",
      "detail": "The fragile way has Copilot try to coordinate scan, approval, and merge itself; the durable way keeps webhooks, SAST, change management, and the Checks API as the system of record.",
      "why": "This is the clearest concrete instance of the pack's broader rule: AI accelerates, event/API integrations govern state.",
      "example": "A merge gated by the Checks API is auditable after the fact in a way a merge Copilot 'decided' to make is not."
    },
    {
      "question": "How do the two platforms share knowledge without merging their systems of record?",
      "detail": "A knowledge bridge lets M365 Search surface GitHub engineering docs; a delivery bridge lets M365 webhooks mirror controls back to GitHub Checks — but SharePoint and GitHub each keep their own authoritative content.",
      "why": "Bridging visibility across platforms is not the same as merging their systems of record, and conflating the two is a design mistake this pack explicitly warns against.",
      "example": "A PM can find an ADR written in GitHub through M365 Search without that ADR's authoritative copy ever moving to SharePoint."
    },
    {
      "question": "What's the one rule that governs every consequential AI action?",
      "detail": "Deploy, delete, and transmit actions must bind to verified identity and require workflow approval — never be triggered by a natural-language request alone.",
      "why": "This is the governance checkpoint that ties identity, data, and MCP controls together into a single enforceable rule.",
      "example": "Copilot drafting a delete request is fine; Copilot executing that delete on a natural-language 'yes, go ahead' without a bound approval step is exactly what this rule blocks."
    },
    {
      "question": "How do you decide where a new integration should actually route?",
      "detail": "First ask what the system of record is and refuse to duplicate it, then check durability of search need, data dynamism/sensitivity, and whether the integration changes state.",
      "why": "This decision framework is the pack's practical synthesis of every view before it — conceptual, logical, and physical distinctions collapse into four sequential questions.",
      "example": "A request to 'make Jira sprint state searchable in Copilot' should route to a federated MCP connector, not a synced one, because sprint state is highly dynamic."
    },
    {
      "question": "What does the fully governed target state actually look like end to end?",
      "detail": "AI/Copilot experiences sit on top of one Integration Enablement Layer (MCP gateway, API gateway, catalog, policy, audit, schema registry), which feeds a knowledge plane and a transaction plane that both terminate in real enterprise systems of record.",
      "why": "This is the architecture every other slide has been building toward — the point where governance is centralized without AI productivity being blocked.",
      "example": "The same enablement layer that gates a Copilot Studio agent's ITSM ticket creation also gates a GitHub Copilot agent's PR-triggered ServiceNow update."
    },
    {
      "question": "What's the single golden rule underneath the whole strategic ask?",
      "detail": "Never duplicate a system of record just to make it AI accessible — govern access to it instead.",
      "why": "Every failure mode in this pack, from oversharing to shadow AI sprawl, traces back to violating this one rule.",
      "example": "Copying a CRM's records into a new AI-searchable store to 'make Copilot smarter' is precisely the shortcut this rule forbids."
    }
  ],
  "open": "This is a technical deep dive on Microsoft's Digital-Work Platform. Conceptual, logical, physical, then the integrations and the AI path.",
  "recap": "Copilot on either platform is a governed consumer of existing integration, identity, and control architecture — never a bypass around it — and the single shared chokepoint that keeps it that way is the Integration Enablement Layer."
};

DATA.drills = {
  "where": {
    "title": "Where does it live?",
    "ask": "Which place holds this?",
    "options": [
      "Microsoft 365 tenant (Graph and Copilot)",
      "GitHub (code and delivery)",
      "Entra ID (identity)",
      "The system of record you must not copy"
    ],
    "items": [
      {
        "p": "A synced externalItem and the semantic index",
        "a": 0,
        "why": "Synced connector output is a Graph object in the Microsoft 365 tenant.",
        "src": "S3"
      },
      {
        "p": "Microsoft 365 Copilot orchestration over mail, files, and meetings",
        "a": 0,
        "why": "That Copilot sits on the Microsoft 365 knowledge plane.",
        "src": "S11"
      },
      {
        "p": "Pull requests, branch protection, and the Checks API",
        "a": 1,
        "why": "Delivery state stays in GitHub.",
        "src": "S12"
      },
      {
        "p": "GitHub Copilot in the IDE and the coding agent",
        "a": 1,
        "why": "GitHub Copilot is the coding product, licensed separately.",
        "src": "S12"
      },
      {
        "p": "Conditional Access and the user or app identity on a Copilot call",
        "a": 2,
        "why": "Copilot APIs sit on Graph and inherit Entra policy.",
        "src": "S1"
      },
      {
        "p": "A GitHub App installation token",
        "a": 1,
        "why": "The app and the token are GitHub's, even when Entra federates the user.",
        "src": "S12"
      },
      {
        "p": "The ServiceNow incident a federated connector just read",
        "a": 3,
        "why": "Live fetch must not create a second copy in Graph.",
        "src": "S4"
      },
      {
        "p": "The approved deployment procedure the architect searched for",
        "a": 0,
        "why": "Durable procedures are synced knowledge, retrieved from Microsoft 365.",
        "src": "S3"
      }
    ]
  },
  "auth": {
    "title": "How does it authenticate?",
    "ask": "Which mechanism fits this call?",
    "options": [
      "Entra ID user or app (Graph)",
      "GitHub App installation token",
      "OAuth app, user-delegated only",
      "Personal access token (avoid for services)"
    ],
    "items": [
      {
        "p": "An app invoking Microsoft 365 Copilot through Copilot APIs",
        "a": 0,
        "why": "Copilot APIs use the same auth model as other Graph APIs.",
        "src": "S1"
      },
      {
        "p": "A server posting a check onto a pull request",
        "a": 1,
        "why": "Server-to-server GitHub work uses a GitHub App.",
        "src": "S12"
      },
      {
        "p": "A user connecting their own GitHub account for a delegated action",
        "a": 2,
        "why": "OAuth is reserved for a real user delegation.",
        "src": "S12"
      },
      {
        "p": "A long-lived token pasted into an agent so it can see every repo",
        "a": 3,
        "why": "That is the pattern the pack tells you to retire.",
        "src": "S12"
      }
    ]
  },
  "altitude": {
    "title": "Which view is this?",
    "ask": "Which architecture view does this belong in?",
    "options": [
      "Conceptual",
      "Logical",
      "Physical",
      "Integration and AI"
    ],
    "items": [
      {
        "p": "Knowledge plane, transaction plane, and control plane, with Copilot as a consumer",
        "a": 0,
        "why": "Planes and the boundary are conceptual.",
        "src": "S9"
      },
      {
        "p": "Do not duplicate a system of record just to make it AI-accessible",
        "a": 0,
        "why": "That is a governing principle, not a hostname.",
        "src": "S5"
      },
      {
        "p": "Extract, normalize, map the ACL, then index",
        "a": 1,
        "why": "A payload and a sequence of components are logical.",
        "src": "S2"
      },
      {
        "p": "A federated call that returns a citation and writes nothing to Graph",
        "a": 1,
        "why": "The flow and its payload are logical.",
        "src": "S4"
      },
      {
        "p": "Graph throttling, admin consent, and a tenant where a connector is missing",
        "a": 2,
        "why": "Quotas, apps, and cloud variants are physical.",
        "src": "S1"
      },
      {
        "p": "GitHub App versus PAT as the deployed identity",
        "a": 2,
        "why": "Named credential types and where they run are physical.",
        "src": "S12"
      },
      {
        "p": "One row per external system: synced, federated, or API action",
        "a": 3,
        "why": "The inventory is the integration view.",
        "src": "S3"
      },
      {
        "p": "Prompt, grounding, label and DLP check, response, audit",
        "a": 3,
        "why": "The AI data path is the integration and AI view.",
        "src": "S11"
      }
    ]
  }
};

DATA.nblmDecks = {};
