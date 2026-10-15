/* Source ledger. `n` is the vault row number. */
const SOURCES = [
  {
    "n": 1,
    "g": "Microsoft Learn",
    "t": "Copilot APIs overview (Microsoft Learn)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/copilot-apis-overview",
    "type": "docs",
    "trust": "high",
    "b": "Copilot APIs, Graph auth",
    "ledger": "1"
  },
  {
    "n": 2,
    "g": "Microsoft Learn",
    "t": "Overview: build a Copilot connector (Microsoft Learn)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-copilot-connector",
    "type": "docs",
    "trust": "high",
    "b": "synced connector, schema",
    "ledger": "2"
  },
  {
    "n": 3,
    "g": "Microsoft Learn",
    "t": "Microsoft 365 Copilot connectors overview (Microsoft Learn)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/overview",
    "type": "docs",
    "trust": "high",
    "b": "synced vs federated, ACL",
    "ledger": "3"
  },
  {
    "n": 4,
    "g": "Microsoft Learn",
    "t": "Federated connectors overview (Microsoft Learn)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/federated-connectors-overview",
    "type": "docs",
    "trust": "high",
    "b": "federated connector, MCP",
    "ledger": "4"
  },
  {
    "n": 5,
    "g": "Microsoft Learn",
    "t": "GitHub Cloud Knowledge connector overview (Microsoft Learn)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/github-cloud-knowledge-overview",
    "type": "docs",
    "trust": "high",
    "b": "GitHub knowledge connector",
    "ledger": "5"
  },
  {
    "n": 6,
    "g": "GitHub Docs",
    "t": "About Model Context Protocol (MCP) (GitHub Docs)",
    "u": "https://docs.github.com/en/copilot/concepts/context/mcp",
    "type": "docs",
    "trust": "high",
    "b": "MCP",
    "ledger": "6"
  },
  {
    "n": 7,
    "g": "GitHub Docs",
    "t": "Extending Copilot Chat with MCP (GitHub Docs)",
    "u": "https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/extend-copilot-chat-with-mcp",
    "type": "docs",
    "trust": "high",
    "b": "MCP server, Copilot Chat",
    "ledger": "7"
  },
  {
    "n": 8,
    "g": "Talks",
    "t": "Microsoft Ignite 2025 PBRK394: M365 Copilot Agents",
    "u": "https://www.youtube.com/watch?v=P8iBjDh7OZg",
    "type": "talk",
    "trust": "high",
    "b": "connectors, MCP",
    "ledger": "8"
  },
  {
    "n": 9,
    "g": "Microsoft Learn",
    "t": "Microsoft 365 Copilot extensibility overview",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview",
    "type": "docs",
    "trust": "high",
    "b": "synced vs federated, Work IQ, MCP",
    "ledger": "9"
  },
  {
    "n": 10,
    "g": "Microsoft Learn",
    "t": "Microsoft 365 Copilot overview",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview",
    "type": "docs",
    "trust": "high",
    "b": "Microsoft 365 Copilot",
    "ledger": "10"
  },
  {
    "n": 11,
    "g": "Microsoft Learn",
    "t": "Microsoft 365 Copilot architecture",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture",
    "type": "docs",
    "trust": "high",
    "b": "grounding, semantic index",
    "ledger": "11"
  },
  {
    "n": 12,
    "g": "GitHub Docs",
    "t": "GitHub Copilot documentation (GitHub Docs)",
    "u": "https://docs.github.com/copilot",
    "type": "docs",
    "trust": "high",
    "b": "GitHub Copilot",
    "ledger": "12"
  },
  {
    "n": 13,
    "g": "Product pages",
    "t": "GitHub Copilot on Azure (editions)",
    "u": "https://azure.microsoft.com/en-us/products/github/copilot",
    "type": "product page",
    "trust": "medium",
    "b": "editions",
    "ledger": "13"
  },
  {
    "n": 14,
    "g": "Product pages",
    "t": "GitHub Copilot Business features",
    "u": "https://github.com/features/copilot/copilot-business",
    "type": "product page",
    "trust": "medium",
    "b": "Business edition",
    "ledger": "14"
  },
  {
    "n": 15,
    "g": "Microsoft Learn",
    "t": "Manage external items in a connection (Microsoft Graph)",
    "u": "https://learn.microsoft.com/en-us/graph/connecting-external-content-manage-items",
    "type": "docs",
    "trust": "high",
    "b": "externalItem, ACL, content",
    "ledger": "15"
  },
  {
    "n": 16,
    "g": "GitHub Docs",
    "t": "GitHub Apps overview (GitHub Docs)",
    "u": "https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps",
    "type": "docs",
    "trust": "high",
    "b": "GitHub App",
    "ledger": "16"
  },
  {
    "n": 17,
    "g": "GitHub Docs",
    "t": "REST API: check runs (GitHub Docs)",
    "u": "https://docs.github.com/en/rest/checks/runs",
    "type": "docs",
    "trust": "high",
    "b": "Checks API",
    "ledger": "17"
  },
  {
    "n": 18,
    "g": "Microsoft Learn",
    "t": "What is Microsoft Entra ID",
    "u": "https://learn.microsoft.com/en-us/entra/fundamentals/what-is-entra",
    "type": "docs",
    "trust": "high",
    "b": "Entra ID",
    "ledger": "18"
  },
  {
    "n": 19,
    "g": "Microsoft Learn",
    "t": "What is Conditional Access",
    "u": "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
    "type": "docs",
    "trust": "high",
    "b": "Conditional Access",
    "ledger": "19"
  },
  {
    "n": 20,
    "g": "Microsoft Learn",
    "t": "Microsoft Graph change notifications",
    "u": "https://learn.microsoft.com/en-us/graph/change-notifications-overview",
    "type": "docs",
    "trust": "high",
    "b": "webhooks",
    "ledger": "20"
  },
  {
    "n": 21,
    "g": "Microsoft Learn",
    "t": "Graph Data Connect overview",
    "u": "https://learn.microsoft.com/en-us/graph/data-connect-concept-overview",
    "type": "docs",
    "trust": "high",
    "b": "bulk export",
    "ledger": "21"
  },
  {
    "n": 22,
    "g": "Microsoft Learn",
    "t": "What is Copilot Studio",
    "u": "https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio",
    "type": "docs",
    "trust": "high",
    "b": "Copilot Studio",
    "ledger": "22"
  },
  {
    "n": 23,
    "g": "Microsoft Learn",
    "t": "What is app provisioning in Microsoft Entra ID",
    "u": "https://learn.microsoft.com/en-us/entra/identity/app-provisioning/user-provisioning",
    "type": "docs",
    "trust": "high",
    "b": "SCIM provisioning",
    "ledger": "23"
  },
  {
    "n": 24,
    "g": "GitHub Docs",
    "t": "Managing personal access tokens (GitHub Docs)",
    "u": "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens",
    "type": "docs",
    "trust": "high",
    "b": "PAT",
    "ledger": "24"
  },
  {
    "n": 25,
    "g": "Microsoft Learn",
    "t": "What is Microsoft Dataverse",
    "u": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro",
    "type": "docs",
    "trust": "high",
    "b": "Dataverse",
    "ledger": "25"
  },
  {
    "n": 26,
    "g": "GitHub Docs",
    "t": "GitHub GraphQL API",
    "u": "https://docs.github.com/en/graphql",
    "type": "docs",
    "trust": "high",
    "b": "GraphQL",
    "ledger": "26"
  },
  {
    "n": 27,
    "g": "Microsoft Learn",
    "t": "Office 365 US Government service description",
    "u": "https://learn.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/office-365-us-government/office-365-us-government",
    "type": "docs",
    "trust": "high",
    "b": "GCC, GCC High, DoD",
    "ledger": "27"
  },
  {
    "n": 28,
    "g": "Microsoft Learn",
    "t": "Learn about data loss prevention",
    "u": "https://learn.microsoft.com/en-us/purview/dlp-learn-about-dlp",
    "type": "docs",
    "trust": "high",
    "b": "DLP",
    "ledger": "28"
  },
  {
    "n": 29,
    "g": "Microsoft Learn",
    "t": "Learn about sensitivity labels",
    "u": "https://learn.microsoft.com/en-us/purview/sensitivity-labels",
    "type": "docs",
    "trust": "high",
    "b": "sensitivity labels",
    "ledger": "29"
  },
  {
    "n": 30,
    "g": "Microsoft Learn",
    "t": "Grant tenant-wide admin consent to an application",
    "u": "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent",
    "type": "docs",
    "trust": "high",
    "b": "admin consent",
    "ledger": "30"
  },
  {
    "n": 31,
    "g": "Microsoft Learn",
    "t": "Microsoft Graph throttling guidance",
    "u": "https://learn.microsoft.com/en-us/graph/throttling",
    "type": "docs",
    "trust": "high",
    "b": "throttling, HTTP 429",
    "ledger": "31"
  },
  {
    "n": 32,
    "g": "Microsoft Learn",
    "t": "Understanding AI functionality and models in Microsoft Online Services",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/ai-models-overview",
    "type": "docs",
    "trust": "high",
    "b": "rename, processor types, Message center",
    "ledger": "32"
  },
  {
    "n": 33,
    "g": "Microsoft Learn",
    "t": "Data, Privacy, and Security for Microsoft Copilot",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy",
    "type": "docs",
    "trust": "high",
    "b": "rename, no training, permissions",
    "ledger": "33"
  },
  {
    "n": 34,
    "g": "Microsoft Learn",
    "t": "Anthropic models in Microsoft Online Services",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor",
    "type": "docs",
    "trust": "high",
    "b": "Anthropic subprocessor, EUDB, gov exclusion",
    "ledger": "34"
  },
  {
    "n": 35,
    "g": "Microsoft Learn",
    "t": "OpenAI as a subprocessor in Microsoft Online Services",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/openai-subprocessor",
    "type": "docs",
    "trust": "high",
    "b": "OpenAI-operated models, admin toggle",
    "ledger": "35"
  },
  {
    "n": 36,
    "g": "Microsoft Learn",
    "t": "Application card: Microsoft Copilot (for organizations)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-application-card",
    "type": "docs",
    "trust": "high",
    "b": "grounding, post-processing, model examples",
    "ledger": "36"
  },
  {
    "n": 37,
    "g": "Microsoft Learn",
    "t": "Overview of AI subprocessors",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-subprocessor-overview",
    "type": "docs",
    "trust": "high",
    "b": "Researcher, Excel, Cowork model surfaces",
    "ledger": "37"
  },
  {
    "n": 38,
    "g": "Microsoft Learn",
    "t": "Compare declarative and custom engine agents",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agents-overview",
    "type": "docs",
    "trust": "high",
    "b": "declarative vs custom engine",
    "ledger": "38"
  },
  {
    "n": 39,
    "g": "Microsoft Learn",
    "t": "FAQ for Microsoft 365 Copilot extensibility",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/faq",
    "type": "docs",
    "trust": "high",
    "b": "plugins vs actions",
    "ledger": "39"
  },
  {
    "n": 40,
    "g": "Microsoft Learn",
    "t": "Agent management in the Microsoft 365 admin center",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-365-overview",
    "type": "docs",
    "trust": "high",
    "b": "Agent 365 admin surface",
    "ledger": "40"
  },
  {
    "n": 41,
    "g": "Microsoft Learn",
    "t": "Enterprise data protection in Microsoft Copilot and Microsoft Copilot Chat",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection",
    "type": "docs",
    "trust": "high",
    "b": "EDP, web queries",
    "ledger": "41"
  },
  {
    "n": 42,
    "g": "Microsoft Learn",
    "t": "Usage-based billing and Copilot Credits",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/usage-based-billing-overview-copilot-credits",
    "type": "docs",
    "trust": "high",
    "b": "Copilot Credits",
    "ledger": "42"
  },
  {
    "n": 43,
    "g": "Microsoft Learn",
    "t": "Work IQ overview",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/work-iq/",
    "type": "docs",
    "trust": "high",
    "b": "Work IQ, Work IQ API",
    "ledger": "43"
  },
  {
    "n": 44,
    "g": "Microsoft Learn",
    "t": "Learn about Data Security Posture Management for AI",
    "u": "https://learn.microsoft.com/en-us/purview/dspm-for-ai",
    "type": "docs",
    "trust": "high",
    "b": "DSPM for AI",
    "ledger": "44"
  },
  {
    "n": 45,
    "g": "Microsoft Learn",
    "t": "aiInteractionHistory: getAllEnterpriseInteractions",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/api/ai-services/interaction-export/aiinteractionhistory-getallenterpriseinteractions",
    "type": "docs",
    "trust": "high",
    "b": "Interaction Export API",
    "ledger": "45"
  },
  {
    "n": 46,
    "g": "Microsoft Learn",
    "t": "Get ready for Microsoft Copilot with SharePoint Advanced Management",
    "u": "https://learn.microsoft.com/en-us/sharepoint/get-ready-copilot-sharepoint-advanced-management",
    "type": "docs",
    "trust": "high",
    "b": "SharePoint Advanced Management",
    "ledger": "46"
  },
  {
    "n": 47,
    "g": "Microsoft Learn",
    "t": "Choose a model for Copilot Cowork",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-models",
    "type": "docs",
    "trust": "high",
    "b": "Cowork Auto",
    "ledger": "47"
  },
  {
    "n": 48,
    "g": "Microsoft Learn",
    "t": "Connect to Mistral AI models",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-mistral-ai-models",
    "type": "docs",
    "trust": "high",
    "b": "AI providers for other LLMs",
    "ledger": "48"
  },
  {
    "n": 49,
    "g": "Microsoft Learn",
    "t": "Privacy and protections for Microsoft Copilot Chat",
    "u": "https://learn.microsoft.com/en-us/copilot/privacy-and-protections",
    "type": "docs",
    "trust": "high",
    "b": "Chat flow, EDP shield",
    "ledger": "49"
  },
  {
    "n": 50,
    "g": "Microsoft Learn",
    "t": "Microsoft Security Copilot",
    "u": "https://learn.microsoft.com/en-us/copilot/security/microsoft-security-copilot",
    "type": "docs",
    "trust": "high",
    "b": "Security Copilot",
    "ledger": "50"
  },
  {
    "n": 51,
    "g": "Microsoft Learn",
    "t": "Considerations to manage Microsoft 365 Copilot for security and compliance",
    "u": "https://learn.microsoft.com/en-us/purview/ai-m365-copilot-considerations",
    "type": "docs",
    "trust": "high",
    "b": "older Copilot Chat names",
    "ledger": "51"
  },
  {
    "n": 52,
    "g": "Microsoft Learn",
    "t": "Application card: Copilot Code (Frontier)",
    "u": "https://learn.microsoft.com/en-us/copilot/code/responsible-ai/copilot-code-application-card",
    "type": "docs",
    "trust": "high",
    "b": "Copilot Code",
    "ledger": "52"
  },
  {
    "n": 53,
    "g": "Microsoft Learn",
    "t": "Copilot in Microsoft 365 apps with Anthropic models",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-anthropic-apps",
    "type": "docs",
    "trust": "high",
    "b": "Anthropic apps setting, IP decommission 1 May 2026",
    "ledger": "53"
  },
  {
    "n": 54,
    "g": "Microsoft Learn",
    "t": "Understanding the user subscription license (USL) and usage-based billing (UBB)",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/user-subscription-license-usage-based-billing",
    "type": "docs",
    "trust": "high",
    "b": "USL vs Copilot Credits",
    "ledger": "54"
  },
  {
    "n": 55,
    "g": "Microsoft Learn",
    "t": "Restricted SharePoint Search",
    "u": "https://learn.microsoft.com/en-us/sharepoint/restricted-sharepoint-search",
    "type": "docs",
    "trust": "high",
    "b": "RSS allow list, not a security boundary, retirement",
    "ledger": "55"
  },
  {
    "n": 56,
    "g": "Microsoft Learn",
    "t": "Semantic indexing for Microsoft Copilot",
    "u": "https://learn.microsoft.com/en-us/microsoftsearch/semantic-index-for-copilot",
    "type": "docs",
    "trust": "high",
    "b": "semantic index does not change permissions",
    "ledger": "56"
  },
  {
    "n": 57,
    "g": "Microsoft Learn",
    "t": "Microsoft 365 Copilot release notes",
    "u": "https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes",
    "type": "docs",
    "trust": "high",
    "b": "Chat and declarative-agent model notes, Dec 2025 through 6 Oct 2026",
    "ledger": "57"
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
      "t": "Labels and DLP sit on the path as controls. They are not the integration layer [S28] [S29]."
    },
    {
      "name": "ITSM / ServiceNow",
      "t": "Tickets stay in the ITSM system. Read a live incident through a federated connector instead of copying it into Graph [S4]."
    },
    {
      "name": "CRM",
      "t": "Customer records stay in the CRM. Durable knowledge can be synced. Live or regulated fields stay federated [S3] [S4]."
    },
    {
      "name": "HR system",
      "t": "Employee records are a system of record. Route them through a connector. Which HR product, and whether that connector exists in GCC, GCC High, or DoD, is UNVERIFIED [S4]."
    }
  ],
  "prompts": [
    {
      "cat": "Briefing at an altitude",
      "model": "Public docs only",
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
      "model": "Public docs only",
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
      "model": "Public docs only",
      "desc": "A synthetic design in, a failure table out.",
      "items": [
        "Connector mismatch",
        "Oversharing",
        "Write tools"
      ],
      "flagship": "Here is a synthetic design (no real tenant names or secrets):\n<paste>\n\nTable: failure | view | first tell | root cause | mitigation | source.\nInclude ACL mapping, synced-versus-federated mismatch, prompt-owned state changes, PAT usage, and gov-cloud assumptions.\nMark anything you cannot source as UNVERIFIED."
    },
    {
      "cat": "Conceptual view",
      "model": "Public docs only",
      "desc": "Capabilities and the boundary. No SKUs.",
      "items": ["Problem", "Actors", "What stays outside"],
      "flagship": "Using Microsoft Learn only, write the conceptual view of Microsoft's digital-work platform.\nCover the problem, the actors, and what stays outside the boundary (ITSM, CRM, HR, GitHub as systems of record).\nDo not invent a product named Governed AI Integration Gateway.\nEnd with a table: capability | source page | silence.\nIf a page does not say it, write UNVERIFIED."
    },
    {
      "cat": "Logical components",
      "model": "Public docs only",
      "desc": "Payload and flow, not the SKU.",
      "items": ["Prompt walk", "Connector fork", "Write versus read"],
      "flagship": "Using Microsoft Learn only, list the logical components of a Microsoft Copilot prompt:\nuser, app, grounding, model, post-processing, response.\nThen the connector fork: synced externalItem versus federated MCP.\nFor each component give input, output, and the page.\nStay off government-cloud claims. Mark silence as UNVERIFIED."
    },
    {
      "cat": "Physical placement",
      "model": "Public docs only",
      "desc": "Named services, and where the sources go quiet.",
      "items": ["Entra and Graph", "Purview", "Government clouds"],
      "flagship": "Using Microsoft Learn only, map the logical prompt walk onto named services:\nMicrosoft 365 apps, Microsoft Graph, the model host, Purview, and Entra Conditional Access.\nSeparate commercial guidance from GCC, GCC High, and DoD.\nA commercial page is not a government service description.\nTable: component | service | cloud the page actually names | UNVERIFIED."
    },
    {
      "cat": "Integration inventory",
      "model": "Public docs only",
      "desc": "One external system, one mechanism.",
      "items": ["GitHub knowledge", "Live ITSM", "State change"],
      "flagship": "Catalog external systems for a synthetic enterprise. No real tenant.\nFor each row: system | direction | mechanism | what moves | auth | source.\nAllowed mechanisms: synced Copilot connector, federated MCP connector, Graph or GitHub API, webhook.\nGitHub docs into Graph is the GitHub Cloud Knowledge connector.\nA live ticket is federated. A pull-request state change is a webhook plus the Checks API, not the model.\nMark any government-cloud cell UNVERIFIED unless the page names that cloud."
    },
    {
      "cat": "Models as of October 2026",
      "model": "Public docs only",
      "desc": "Dated names only. No invented SKUs.",
      "items": ["GPT-5 default", "Selector additions", "Claude when enabled"],
      "flagship": "Date the answer as of October 2026. Do not invent model names.\nFrom Microsoft Learn, for a commercial tenant:\n1. Copilot Chat default on the release notes: GPT-5 as of 23 Dec 2025, with fast versus reasoning routing. Say whether a later note on that page, through 6 Oct 2026, sets a different default.\n2. Selector additions: GPT-5.2 on 27 Jan 2026 (Quick Response or Think Deeper), OpenAI GPT-5.5 Instant and GPT 5.5 Thinking on 19 May 2026, and Switch Model on 6 Oct 2026.\n3. Claude: the 16 Jun 2026 note, the admin default by cloud, and the UI indicator when a Claude model is in use.\n4. Declarative agents: the latest note that names a model.\n5. Cowork menu on the Cowork models page, and who turns Anthropic off.\n6. Hosted model versus AI subprocessor versus AI independent processor.\nThe overview menu (Auto, Quick response, Think deeper) is a separate page. Keep it separate from the release-notes default."
    },
    {
      "cat": "Trust boundary",
      "model": "Public docs only",
      "desc": "What the controls cover, and what they do not.",
      "items": ["Permissions", "EDP", "Anthropic clouds"],
      "flagship": "List the trust boundary for Microsoft Copilot in a commercial tenant.\nInclude user permissions, sensitivity labels, SharePoint Advanced Management, Enterprise Data Protection, Purview DSPM for AI, and the Interaction Export API.\nSay what the Interaction Export national-cloud table covers.\nFor Anthropic, separate federal GCC, non-federal GCC, GCC High, and DoD.\nFor every other government-cloud feature, write UNVERIFIED.\nNo tenant data."
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
      "src": "S27",
      "good": "Treat GCC, GCC High, and DoD as separate environments. Confirm the connector in that environment before you commit the design. Parity with commercial is UNVERIFIED.",
      "bad": "Tell: the design cites a commercial Learn page as if GCC High or DoD already had the feature."
    },
    {
      "title": "Graph throttling treated as a mystery outage",
      "view": "Physical",
      "src": "S31",
      "good": "Expect HTTP 429 when a crawl exceeds Graph's request limits. Back off and retry. Watch the first full crawl, not only steady state.",
      "bad": "Tell: a connector that stalls on day one with 429s and an empty index."
    },
    {
      "title": "Admin consent never granted",
      "view": "Physical",
      "src": "S30",
      "good": "Have an administrator grant tenant-wide consent for the connector app before the crawl is scheduled.",
      "bad": "Tell: the app calls Graph and every user is prompted, or the call is denied."
    },
    {
      "title": "GitHub App permission wider than the job",
      "view": "Physical",
      "src": "S16",
      "good": "Grant the GitHub App only the repository and organization permissions that job needs.",
      "bad": "Tell: an app installed for checks can also administer every repository it is on."
    },
    {
      "title": "A PAT checked into CI",
      "view": "Integration / AI",
      "src": "S24",
      "good": "A workflow that calls GitHub uses a GitHub App installation token, not a personal access token in the repo or the pipeline variables.",
      "bad": "Tell: a long-lived user token in a workflow file or a shared secret."
    },
    {
      "title": "An MCP server the org did not choose",
      "view": "Integration / AI",
      "src": "S7",
      "good": "MCP extends Copilot Chat by adding a server. Name the server and what it may call. Do not let an IDE pick an unknown one.",
      "bad": "Tell: chat can call tools from a server nobody reviewed."
    },
    {
      "title": "A label used as if it were the ACL",
      "view": "Integration / AI",
      "src": "S29",
      "good": "A sensitivity label classifies the item and can turn on protection. The ACL still decides who may open it.",
      "bad": "Tell: the design drops ACL mapping because the file is labeled."
    },
    {
      "title": "Copilot Studio keeps a second copy of the ticket",
      "view": "Conceptual",
      "src": "S22",
      "good": "Copilot Studio is for the business agent. The ticket stays in the system of record. Dataverse holds the agent's own state [S25].",
      "bad": "Tell: the agent is the only place the incident now exists."
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
        "What stops oversharing is the check between grounding and the response: Conditional Access [S19], sensitivity labels [S29], permission trimming [S11], and DLP [S28].",
        "A consequential action binds to a verified identity and a workflow approval, not to the wording of the prompt.",
        "Office documents stay in SharePoint. Source code stays in GitHub. Do not cross the systems of record."
      ]
    },
    {
      "h": "Government cloud",
      "r": [
        "GCC, GCC High, and DoD are separate Office 365 environments. GCC High is not the Department of Defense tenant [S27].",
        "A commercial Microsoft Learn page is not evidence that the same connector or Copilot feature exists in GCC, GCC High, or DoD. That parity is UNVERIFIED."
      ]
    }
  ],
  "falsifier": "Copilot is not an integration bus. If a sentence says Copilot 'reaches' ITSM, CRM, or HR on its own, rewrite it as a call through the Integration Enablement Layer.",
  "quizSections": {
    "1": "Conceptual / logical",
    "2": "Physical / deployment",
    "3": "Integration and third-party",
    "4": "AI elements",
    "5": "Framework / synthesis",
    "6": "Copilot deep dive"
  },
  "quiz": [
    {
      "week": 1,
      "rung": 100,
      "pillar": "Conceptual",
      "type": "open",
      "question": "What is the difference between ungoverned AI sprawl and governed orchestration?",
      "answer": "Sprawl is Copilot calling ITSM, CRM, and HR directly. Governance sends those same calls through one Integration Enablement Layer of APIs, events, identity, and connectors.",
      "explanation": "Extensibility overview: Copilot consumes the integration layer [S9]."
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
      "explanation": "GitHub knowledge connector, federated connectors, and the Checks API [S5] [S4] [S17]."
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
      "explanation": "Permission trimming on the architecture page, labels, Conditional Access, and DLP [S11] [S29] [S19] [S28]."
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
      "explanation": "The externalItem ACL is the step that gates retrieval [S15]."
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
      "explanation": "Connectors overview and federated connectors [S3] [S4]."
    },
    {
      "week": 1,
      "rung": 200,
      "pillar": "Conceptual",
      "type": "mc",
      "question": "An HR system holds confidential records that change daily. An engineering wiki changes rarely and should be searchable. Which pattern fits?",
      "options": [
        "Sync both into Graph",
        "Federated connector for HR, synced connector for the wiki",
        "Federated connector for the wiki, and a bulk export for HR",
        "Copy both into Dataverse first"
      ],
      "answer": "Federated connector for HR, synced connector for the wiki",
      "explanation": "Synced connectors index durable knowledge. Federated connectors fetch live or regulated data and do not copy it [S3] [S4]."
    },
    {
      "week": 1,
      "rung": 100,
      "pillar": "Conceptual",
      "type": "mc",
      "question": "What is grounding?",
      "options": [
        "Copying a file into the prompt store",
        "Preparing the prompt with Graph data the user can already open",
        "Training the model on the tenant",
        "A GitHub App permission"
      ],
      "answer": "Preparing the prompt with Graph data the user can already open",
      "explanation": "Microsoft 365 Copilot architecture [S11]."
    },
    {
      "week": 2,
      "rung": 200,
      "pillar": "Physical",
      "type": "mc",
      "question": "Graph returns HTTP 429 during the first connector crawl. What does that mean?",
      "options": [
        "The ACL map is wrong",
        "The app exceeded Graph's request limit and must back off",
        "The tenant is GCC High",
        "The item was deleted"
      ],
      "answer": "The app exceeded Graph's request limit and must back off",
      "explanation": "Microsoft Graph throttling guidance [S31]."
    },
    {
      "week": 2,
      "rung": 200,
      "pillar": "Physical",
      "type": "mc",
      "question": "Who grants a connector app permission for the whole tenant?",
      "options": [
        "Each user, every session",
        "An administrator, as tenant-wide admin consent",
        "The GitHub App installation",
        "The LLM"
      ],
      "answer": "An administrator, as tenant-wide admin consent",
      "explanation": "Grant tenant-wide admin consent [S30]."
    },
    {
      "week": 2,
      "rung": 100,
      "pillar": "Physical",
      "type": "mc",
      "question": "GCC High and the DoD environment are…",
      "options": [
        "Two names for one tenant",
        "Separate Office 365 government environments",
        "A commercial tenant with a label",
        "GitHub Enterprise Cloud regions"
      ],
      "answer": "Separate Office 365 government environments",
      "explanation": "Office 365 US Government service description [S27]."
    },
    {
      "week": 2,
      "rung": 200,
      "pillar": "Physical",
      "type": "open",
      "question": "A commercial Learn page documents a federated connector. What may you claim about GCC High?",
      "answer": "Nothing about availability. GCC High is a separate environment. Connector parity is UNVERIFIED until you confirm it there.",
      "explanation": "The government service description separates the environments and does not list Copilot connectors [S27]."
    },
    {
      "week": 2,
      "rung": 200,
      "pillar": "Physical",
      "type": "mc",
      "question": "A service posts check runs to pull requests. Which credential fits?",
      "options": [
        "A personal access token",
        "A GitHub App installation token",
        "An Entra user password",
        "Admin consent on Graph"
      ],
      "answer": "A GitHub App installation token",
      "explanation": "GitHub Apps and the Checks REST API [S16] [S17]."
    },
    {
      "week": 3,
      "rung": 200,
      "pillar": "Integration",
      "type": "mc",
      "question": "A webhook from Microsoft Graph tells you…",
      "options": [
        "The full new body of the item, with no further call",
        "That a resource changed, so the subscriber can read it",
        "That admin consent was granted",
        "That the model finished a response"
      ],
      "answer": "That a resource changed, so the subscriber can read it",
      "explanation": "Microsoft Graph change notifications [S20]."
    },
    {
      "week": 3,
      "rung": 200,
      "pillar": "Integration",
      "type": "open",
      "question": "Why is a synced ACL that is wider than the source system a failure?",
      "answer": "Copilot and Search can return the externalItem to someone who could not open it in the source system.",
      "explanation": "externalItem carries the ACL that gates retrieval [S15] [S3]."
    },
    {
      "week": 3,
      "rung": 300,
      "pillar": "Integration",
      "type": "mc",
      "question": "A sensitivity label is applied to a file. What does that not replace?",
      "options": [
        "The file name",
        "The ACL that decides who can open the item",
        "The tenant name",
        "The slide title"
      ],
      "answer": "The ACL that decides who can open the item",
      "explanation": "Sensitivity labels classify and can protect the item. The connector ACL is a separate control [S29] [S15]."
    },
    {
      "week": 3,
      "rung": 200,
      "pillar": "Integration",
      "type": "mc",
      "question": "Where do Copilot APIs live?",
      "options": [
        "A separate REST host with its own login",
        "On Microsoft Graph, with the same auth model as other Graph APIs",
        "Only inside GitHub",
        "Only in Copilot Studio"
      ],
      "answer": "On Microsoft Graph, with the same auth model as other Graph APIs",
      "explanation": "Copilot APIs overview [S1]."
    },
    {
      "week": 3,
      "rung": 100,
      "pillar": "Integration",
      "type": "open",
      "question": "Name the system of record for a ServiceNow incident the architect wants Copilot to read.",
      "answer": "ServiceNow. A federated connector may read it live. Graph should not become a second copy of the incident.",
      "explanation": "Federated connectors do not persist the payload [S4]. The ServiceNow product page is not in the ledger."
    },
    {
      "week": 3,
      "rung": 200,
      "pillar": "Integration",
      "type": "mc",
      "question": "GitHub's API for asking for a repository and its pull requests in one query is…",
      "options": [
        "Copilot APIs",
        "GraphQL",
        "SCIM",
        "A sensitivity label"
      ],
      "answer": "GraphQL",
      "explanation": "GitHub GraphQL API [S26]."
    },
    {
      "week": 4,
      "rung": 200,
      "pillar": "AI",
      "type": "mc",
      "question": "DLP in this pack is…",
      "options": [
        "The integration bus",
        "A control that detects sensitive information and can block it leaving",
        "A GitHub App permission",
        "A DoDAF viewpoint"
      ],
      "answer": "A control that detects sensitive information and can block it leaving",
      "explanation": "Learn about data loss prevention [S28]."
    },
    {
      "week": 4,
      "rung": 200,
      "pillar": "AI",
      "type": "open",
      "question": "What is the LLM's job on the Microsoft 365 Copilot path?",
      "answer": "It writes the response from the grounded prompt. It does not store the tenant's mail or files.",
      "explanation": "Microsoft 365 Copilot architecture [S11]."
    },
    {
      "week": 4,
      "rung": 300,
      "pillar": "AI",
      "type": "mc",
      "question": "An MCP tool can delete a record. What has to sit outside the prompt?",
      "options": [
        "A longer system prompt",
        "A verified identity and a workflow approval",
        "A second copy of the record in SharePoint",
        "A personal access token"
      ],
      "answer": "A verified identity and a workflow approval",
      "explanation": "MCP is how Copilot Chat calls tools. The approval gate is the pack's rule on top of that [S7]."
    },
    {
      "week": 4,
      "rung": 200,
      "pillar": "AI",
      "type": "mc",
      "question": "SharePoint's role for Microsoft 365 Copilot is…",
      "options": [
        "The coding system of record",
        "A file store Copilot reaches through Graph, for files the user can open",
        "The government-cloud boundary",
        "The GitHub App host"
      ],
      "answer": "A file store Copilot reaches through Graph, for files the user can open",
      "explanation": "Microsoft 365 Copilot architecture, including Restricted SharePoint Search [S11]."
    },
    {
      "week": 4,
      "rung": 200,
      "pillar": "AI",
      "type": "open",
      "question": "Why does a personal access token not belong in a service that calls GitHub?",
      "answer": "A PAT is a user secret. A service should use a GitHub App and a short-lived installation token.",
      "explanation": "Managing personal access tokens and GitHub Apps [S24] [S16]."
    },
    {
      "week": 4,
      "rung": 100,
      "pillar": "AI",
      "type": "mc",
      "question": "Copilot Studio is…",
      "options": [
        "Another name for GitHub Copilot",
        "A low-code place to build business agents, separate from GitHub Copilot",
        "The Graph throttling service",
        "The DoD tenant"
      ],
      "answer": "A low-code place to build business agents, separate from GitHub Copilot",
      "explanation": "What is Copilot Studio [S22]."
    },
    {
      "week": 5,
      "rung": 200,
      "pillar": "Framework",
      "type": "mc",
      "question": "Which pair is a product fact, and which is a name this pack uses?",
      "options": [
        "Microsoft Graph is a product; 'knowledge plane' is this pack's name",
        "Both are Microsoft product names",
        "Both are only pack names",
        "Knowledge plane is a SKU"
      ],
      "answer": "Microsoft Graph is a product; 'knowledge plane' is this pack's name",
      "explanation": "Graph is documented [S1]. The plane names are marked UNVERIFIED in the glossary."
    },
    {
      "week": 5,
      "rung": 300,
      "pillar": "Framework",
      "type": "open",
      "question": "You are reviewing a design that syncs HR records 'so Copilot can see them.' What do you ask?",
      "answer": "Whether those records are durable knowledge or live regulated facts. Live or regulated facts use a federated connector and stay in the HR system.",
      "explanation": "Synced versus federated connectors [S3] [S4]."
    },
    {
      "week": 5,
      "rung": 200,
      "pillar": "Framework",
      "type": "mc",
      "question": "SCIM, in this pack, is how…",
      "options": [
        "Copilot writes the response",
        "Entra provisioning creates and disables accounts in a target app",
        "Graph throttles a crawl",
        "GitHub stores a PAT"
      ],
      "answer": "Entra provisioning creates and disables accounts in a target app",
      "explanation": "App provisioning in Microsoft Entra ID [S23]."
    },
    {
      "week": 5,
      "rung": 300,
      "pillar": "Framework",
      "type": "open",
      "question": "Name one claim on this console you must not treat as verified.",
      "answer": "That a connector or Copilot feature documented for commercial Microsoft 365 exists in GCC, GCC High, or DoD.",
      "explanation": "The government service description does not establish that parity [S27]."
    },
    {
      "week": 5,
      "rung": 100,
      "pillar": "Framework",
      "type": "mc",
      "question": "Dataverse is…",
      "options": [
        "The GitHub system of record",
        "The Power Platform data store behind some Copilot Studio agents",
        "A government cloud",
        "The Graph ACL"
      ],
      "answer": "The Power Platform data store behind some Copilot Studio agents",
      "explanation": "What is Microsoft Dataverse [S25]."
    },
    {
      "week": 1,
      "rung": 200,
      "pillar": "Conceptual",
      "type": "open",
      "question": "Why must a synced connector write an ACL onto the externalItem?",
      "answer": "The ACL is how Microsoft 365 decides who may see that item in Search and Copilot. A missing or wide ACL overshares.",
      "explanation": "Managing external items [S15]."
    },
    {
      "week": 1,
      "rung": 100,
      "pillar": "Conceptual",
      "type": "mc",
      "question": "Microsoft 365 Copilot and GitHub Copilot share…",
      "options": [
        "One license",
        "Nothing by default, and Entra only where you connect them",
        "A single prompt log",
        "The DoD tenant"
      ],
      "answer": "Nothing by default, and Entra only where you connect them",
      "explanation": "They are separate products [S10] [S12]. Entra is the shared identity service [S18]."
    },
    {
      "week": 2,
      "rung": 300,
      "pillar": "Physical",
      "type": "open",
      "question": "A GitHub App is installed on every repository and granted administration. What is wrong?",
      "answer": "The app has more permission than a check or a read needs. Grant only the permissions the job uses.",
      "explanation": "GitHub Apps take the permissions you grant at install [S16]."
    },
    {
      "week": 3,
      "rung": 200,
      "pillar": "Integration",
      "type": "mc",
      "question": "Work IQ is named in which document?",
      "options": [
        "The GitHub GraphQL guide",
        "The Microsoft 365 Copilot extensibility overview",
        "The Office 365 DoD service description",
        "The PAT guide"
      ],
      "answer": "The Microsoft 365 Copilot extensibility overview",
      "explanation": "Extensibility overview [S9]."
    },
    {
      "week": 4,
      "rung": 200,
      "pillar": "AI",
      "type": "mc",
      "question": "Conditional Access applies to Copilot because…",
      "options": [
        "Copilot has its own password policy",
        "Copilot APIs sit on Graph and inherit Entra policy",
        "GitHub Apps enforce it",
        "DLP replaces it"
      ],
      "answer": "Copilot APIs sit on Graph and inherit Entra policy",
      "explanation": "Copilot APIs use Graph auth [S1]. Conditional Access is the Entra policy [S19]."
    },
    {
      "week": 5,
      "rung": 200,
      "pillar": "Framework",
      "type": "open",
      "question": "Give one durable-search case and one live-fetch case.",
      "answer": "An approved procedure people search again is a synced connector. A ticket that changes today and must not be copied is a federated connector.",
      "explanation": "Connector models [S3] [S4]."
    },
    {
      "week": 2,
      "rung": 100,
      "pillar": "Physical",
      "type": "mc",
      "question": "Graph Data Connect is for…",
      "options": [
        "Live Copilot answers",
        "Bulk export of Microsoft 365 data into an analytics store",
        "GitHub check runs",
        "Admin consent"
      ],
      "answer": "Bulk export of Microsoft 365 data into an analytics store",
      "explanation": "Graph Data Connect overview [S21]."
    },
    {
      "week": 6,
      "rung": 100,
      "pillar": "Copilot",
      "type": "mc",
      "question": "A design says Copilot is the bus that writes the HR record. What is the accurate rewrite?",
      "options": [
        "Copilot stores the HR record and syncs it back later",
        "HR stays the system of record. A connector or API changes it, and a write waits for approval",
        "Copilot trains on the HR database overnight",
        "Microsoft Graph replaces the HR system"
      ],
      "answer": "HR stays the system of record. A connector or API changes it, and a write waits for approval",
      "explanation": "Federated writes run in the source system under the user's rights, and nothing is sent until the user answers the confirmation card [S4]. Copilot orchestrates; it is not the store [S11]."
    },
    {
      "week": 6,
      "rung": 200,
      "pillar": "Copilot",
      "type": "mc",
      "question": "Why is a prompt grounded before it reaches the model?",
      "options": [
        "So the foundation model can be fine-tuned on the tenant overnight",
        "So the request can include data the user is already allowed to open, without that data training the foundation model",
        "So Copilot can ignore sensitivity labels",
        "So the response can skip post-processing checks"
      ],
      "answer": "So the request can include data the user is already allowed to open, without that data training the foundation model",
      "explanation": "Grounding adds permitted input, such as Microsoft Graph data, before the LLM call [S11] [S36]. The privacy page says prompts, responses, and data accessed through Microsoft Graph aren't used to train foundation LLMs, including those used by Microsoft Copilot [S33]."
    },
    {
      "week": 6,
      "rung": 200,
      "pillar": "Copilot",
      "type": "mc",
      "question": "Who decides whether Anthropic or OpenAI-operated models are available in the tenant?",
      "options": [
        "Each user, with no admin control",
        "An AI Administrator or Global Administrator, under AI providers operating as Microsoft subprocessors",
        "The Copilot Studio maker only, with no tenant setting",
        "GitHub organization owners"
      ],
      "answer": "An AI Administrator or Global Administrator, under AI providers operating as Microsoft subprocessors",
      "explanation": "That Microsoft 365 admin center setting scopes Anthropic and OpenAI-operated models [S34] [S35]. Users choose only among what remains enabled [S10]."
    },
    {
      "week": 6,
      "rung": 200,
      "pillar": "Copilot",
      "type": "mc",
      "question": "A federated connector can create a ticket. What is true before any data is sent?",
      "options": [
        "The write runs immediately as the tenant admin",
        "Nothing is sent until the user responds on the confirmation card. Read tools do not use that card",
        "The item is indexed into Microsoft Graph first",
        "Researcher always performs the write"
      ],
      "answer": "Nothing is sent until the user responds on the confirmation card. Read tools do not use that card",
      "explanation": "Write, update, and delete tools default to needs approval. Nothing is sent while the card is waiting. Read tools do not require confirmation. Researcher stays read-only for these actions [S4]. The pack still wants a workflow gate for consequential actions on top of that card."
    },
    {
      "week": 6,
      "rung": 300,
      "pillar": "Copilot",
      "type": "mc",
      "question": "Which government-cloud statement matches the sources and this site's rule?",
      "options": [
        "A commercial Learn page proves the same feature exists in GCC High",
        "Anthropic models are documented as unavailable for federal GCC, GCC High, and DoD. Other Copilot feature parity is UNVERIFIED unless a government service description says otherwise",
        "DoD includes every commercial connector",
        "GCC High is the Department of Defense tenant"
      ],
      "answer": "Anthropic models are documented as unavailable for federal GCC, GCC High, and DoD. Other Copilot feature parity is UNVERIFIED unless a government service description says otherwise",
      "explanation": "The Anthropic page excludes federal GCC, GCC High, and DoD. Non-federal GCC has a separate opt-in as of 22 July 2026 [S34]. GCC High is not the DoD tenant [S27]. A commercial page is not gov-cloud evidence for every other feature."
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
      "rule": "Commercial docs are not a promise about GCC, GCC High, or DoD. A cell says UNVERIFIED when no ledger row covers that environment.",
      "tables": [
        {
          "h": "Environment matrix",
          "cols": [
            "Component",
            "Commercial",
            "GCC",
            "GCC High",
            "DoD"
          ],
          "rows": [
            [
              "Office 365 environment",
              "Separate from the government environments [S27]",
              "Content stored in the United States, logically separate from commercial [S27]",
              "For DoD security requirements, DFARS, and ITAR. Not the DoD tenant [S27]",
              "Department of Defense only [S27]"
            ],
            [
              "Microsoft 365 Copilot",
              "Documented for the Microsoft 365 tenant [S10] [S11]",
              "UNVERIFIED",
              "UNVERIFIED",
              "UNVERIFIED"
            ],
            [
              "Synced and federated connectors",
              "Synced indexes into Graph. Federated fetches live and does not index into Microsoft 365 [S3] [S4] [S2]",
              "Build overview lists synced availability as Global, GCC, GCC High, and DoD. Federated availability varies by connector. Confirm the connector you named [S2]",
              "Same statement as GCC. A named connector is still UNVERIFIED until that environment's service description says so [S2]",
              "Same statement as GCC. A named connector is still UNVERIFIED until that environment's service description says so [S2]"
            ],
            [
              "GitHub Copilot and GitHub Apps",
              "GitHub Docs [S12] [S16]",
              "UNVERIFIED",
              "UNVERIFIED",
              "UNVERIFIED"
            ],
            [
              "Sensitivity labels and DLP",
              "Purview documentation [S28] [S29]",
              "UNVERIFIED",
              "UNVERIFIED",
              "UNVERIFIED"
            ]
          ]
        }
      ]
    },
    "prompt-path": {
      "lib": "view-04-integration-ai",
      "altitude": "Logical",
      "diagram": "prompt",
      "img": [],
      "bus": true,
      "rule": "Logical means the payload, not the SKU. A prompt is grounded, sent to a model, and returned to the app. It does not become the path that owns another system's records.",
      "tables": [
        {
          "h": "Prompt walk",
          "cols": ["Step", "What moves", "What it is not"],
          "rows": [
            ["User in an app", "A person enters a prompt in a Microsoft 365 app such as Word or PowerPoint [S11]", "Not a direct call from Copilot into a line-of-business system"],
            ["Grounding", "Copilot preprocesses the prompt and accesses Microsoft Graph in the user's tenant. Grounding can include text from input files or other content Copilot discovers. Data used to generate the response is encrypted in transit [S11]", "Not a copy of the whole tenant"],
            ["Model", "Copilot sends the grounded prompt to the LLM. The LLM generates a response for the user's task [S11]", "Not the system of record"],
            ["After the model", "Post-processing runs more Graph grounding, plus responsible AI, security, compliance, and privacy checks [S36]", "Not a raw model call with the safety step skipped"],
            ["Response", "Copilot returns the response to the app and the user [S11]", "Not a write to an external system"]
          ]
        },
        {
          "h": "What stays off this path",
          "cols": ["Need", "Where it belongs", "Source"],
          "rows": [
            ["Durable external knowledge people will search again", "Synced connector. The item is indexed into Microsoft Graph with content, metadata, and an ACL", "[S3] [S15]"],
            ["Live, sensitive, or fast-changing facts", "Federated connector. The source system stays the system of record and nothing is indexed into Microsoft 365", "[S3] [S4]"],
            ["A create, update, or delete", "The source system. On a federated connector the write section is still headed Coming soon, and nothing is sent until the user answers the confirmation card", "[S4]"],
            ["Optional web grounding", "A separate Bing query with user and tenant identifiers removed. Not the same hop as Graph grounding", "[S41]"]
          ]
        }
      ]
    },
    "identity": {
      "lib": "view-03-physical",
      "altitude": "Physical",
      "diagram": "identity",
      "img": [],
      "bus": true,
      "rule": "Physical means the named control. Being inside the Microsoft 365 service boundary does not give Copilot the whole tenant. Access follows the signed-in user.",
      "tables": [
        {
          "h": "Boundary and permissions",
          "cols": ["Control", "What the page says", "Altitude"],
          "rows": [
            ["Service boundary", "The tenant sits inside the Microsoft 365 service boundary. Operating there does not grant tenant-wide visibility. Data access stays scoped to the signed-in user's permissions [S11]", "Conceptual"],
            ["User permissions", "Copilot only accesses data the signed-in user is authorized to access, for example through existing Microsoft 365 role-based access controls. It does not access data the user cannot open [S11]", "Logical"],
            ["Semantic index", "Indexing data does not change access permissions, and it does not change how users should share [S56]", "Logical"],
            ["Entra Conditional Access and MFA", "Copilot honors Conditional Access policies and multifactor authentication, including device compliance when you configure it. It uses the same MFA already set for the tenant [S11] [S19]", "Physical"],
            ["Restricted SharePoint Search", "A SharePoint admin allow list, 100 sites maximum, for organization-wide search and, as a temporary measure, Copilot chat and agentic experiences. Off by default. It is not a security boundary and does not change site permissions. Users can still use files they own or previously accessed. New enablement is blocked starting 31 July 2026 [S55]", "Physical"],
            ["SharePoint Advanced Management and Purview", "The architecture page names Restricted SharePoint Search, SharePoint Advanced Management, and Microsoft Purview as the services that help control access. The RSS page says to use SAM to remediate oversharing, then turn RSS off [S11] [S55] [S46]", "Physical"]
          ]
        },
        {
          "h": "Still open",
          "cols": ["Item", "Status"],
          "rows": [
            ["RSS or SAM in a named GCC, GCC High, or DoD tenant", "UNVERIFIED. These pages are commercial guidance, not a government service description [S55] [S27]"],
            ["Restricted Content Discovery as a replacement for RSS", "The RSS page points at it for content discoverability. This view does not restate RCD's rules beyond that pointer [S55]"]
          ]
        }
      ]
    },
    "connectors": {
      "lib": "view-02-logical",
      "altitude": "Logical",
      "diagram": "connectors",
      "img": [],
      "bus": true,
      "rule": "Logical fork. Synced copies into Microsoft Graph. Federated does not. Pick the fork from the data, not from the product name.",
      "tables": [
        {
          "h": "Three ways the connectors overview splits the work",
          "cols": ["", "Synced, tenant", "Synced, self-serve", "Federated"],
          "rows": [
            ["Data", "Indexed into Microsoft 365", "Indexed into Microsoft 365", "Fetched live [S3]"],
            ["Access", "Organization-level", "User-level", "User-level [S3]"],
            ["Setup", "Admin configures", "Admin enables, users authenticate", "Admin enables, users authenticate [S3]"],
            ["Use when", "Broad indexing", "Personally relevant content", "Sensitive, dynamic, or live sources [S3]"],
            ["Custom connector", "Yes", "No", "No, on this overview [S3]"]
          ]
        },
        {
          "h": "Where the bytes sit",
          "cols": ["Pattern", "Physical fact", "Source"],
          "rows": [
            ["Synced", "Content, metadata such as title and URL, and an ACL are ingested into Microsoft Graph. Search and Copilot show an item only to someone who can access it in the source. The index is kept in sync", "[S3] [S15]"],
            ["Synced schema", "The build overview says the synced schema is externalItem, semantic indexing is supported, and auth is a Microsoft Entra ID app registration", "[S2] [S18]"],
            ["Federated", "MCP fetch at query time. No indexing into Microsoft 365. The source enforces permissions. OAuth 2.0", "[S3] [S4] [S2]"],
            ["Write", "The federated write section is still headed Coming soon. Nothing is sent until the user picks Allow once, Allow for conversation, Always allow, or Cancel. Read tools do not ask. The connectors overview also still says federated connectors are read-only and that write actions start in early October 2026. Teach the card, and do not collapse those sentences", "[S4] [S3]"],
            ["Government clouds", "The build overview says Copilot connectors are available in commercial, GCC, GCC High, and DoD, lists synced availability as Global, GCC, GCCH, and DoD, and says federated availability varies by connector. Confirm the connector you named", "[S2]"]
          ]
        }
      ]
    },
    "agents": {
      "lib": "view-01-conceptual",
      "altitude": "Conceptual",
      "diagram": "agents",
      "img": [],
      "bus": true,
      "rule": "Conceptual placement against the Microsoft 365 boundary. A declarative agent stays on Copilot's orchestrator. A custom engine brings its own. Neither one is the integration bus.",
      "tables": [
        {
          "h": "Where the agent runs",
          "cols": ["", "Declarative agent", "Custom engine agent"],
          "rows": [
            ["Orchestrator and models", "Copilot's. No extra host. As of the 24 Feb 2026 release note, the named model is GPT-5.1 with auto selection. No later note through 6 Oct 2026 names a replacement [S38] [S57]", "Yours. You pick the model and the orchestration [S38]"],
            ["Hosting", "In Microsoft 365 [S38]", "In Microsoft 365 with Copilot Studio, or outside, typically Azure. You own compliance for that engine [S38]"],
            ["Channels", "Microsoft 365 apps such as Teams, Word, Excel, and Outlook [S38]", "Microsoft 365 and external apps [S38]"],
            ["Proactive triggers", "Not supported. The user starts the interaction [S38]", "Supported [S38]"],
            ["Knowledge and actions", "Instructions, Microsoft 365 knowledge, Copilot connectors, and API actions [S38] [S3]", "Your own integrations. The other system remains the system of record [S38] [S4]"]
          ]
        },
        {
          "h": "Copilot Studio",
          "cols": ["Placement", "What to say"],
          "rows": [
            ["Build tool", "The agents article names Copilot Studio as a way to build a declarative agent, and as one host for a custom engine alongside an external host such as Azure [S38]"],
            ["Not GitHub Copilot", "GitHub Copilot is documented as its own product. Do not treat a Microsoft Copilot architecture as a GitHub Copilot architecture [S12]"],
            ["Not the bus", "An action can call an API or a connector tool. The record changes in the source system, under that system's permissions, not because the prompt said so [S38] [S4]"]
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
    "definition": "Access control list on a Microsoft Graph external item. A synced connector must map source-system permissions onto this list or Copilot can overshare.",
    "see_also": "externalItem, Permission fidelity",
    "where": "Integration view, study guide",
    "source": "[S15] [S3]"
  },
  {
    "category": "Logical",
    "term": "Agent / tool integration",
    "rung": 200,
    "essential": false,
    "definition": "An agent calls a governed action or workflow. State changes stay in the system of record, not in the prompt.",
    "see_also": "MCP server, System of record",
    "where": "Mind map, logical view",
    "source": "[S6] [S7]"
  },
  {
    "category": "Logical",
    "term": "API consumption",
    "rung": 200,
    "essential": false,
    "definition": "The app calls a third-party API at request time for a transactional read or write. No copy of the record is kept as a second system of record.",
    "see_also": "System of record, Federated connector",
    "where": "Mind map",
    "source": "UNVERIFIED"
  },
  {
    "category": "Integration & AI",
    "term": "Checks API",
    "rung": 200,
    "essential": false,
    "definition": "GitHub API that posts pass/fail and evidence onto a pull request. Used for tests, security findings, and release gates.",
    "see_also": "GitHub App",
    "where": "Logical view, integration risks",
    "source": "[S17]"
  },
  {
    "category": "Physical",
    "term": "Conditional Access",
    "rung": 200,
    "essential": false,
    "definition": "Entra policy that can block or step up a sign-in. Copilot APIs inherit it when they sit on Microsoft Graph.",
    "see_also": "Entra ID, Copilot APIs",
    "where": "Mind map, Copilot APIs docs",
    "source": "[S19]"
  },
  {
    "category": "Conceptual",
    "term": "Control plane",
    "rung": 200,
    "essential": false,
    "definition": "Identity, policy, secrets, catalogs, and audit. One of the three planes in this pack's Copilot Integration Enablement Layer.",
    "see_also": "Knowledge plane, Transaction plane",
    "where": "Conceptual view, study guide",
    "source": "UNVERIFIED"
  },
  {
    "category": "Conceptual",
    "term": "Copilot (role)",
    "rung": 200,
    "essential": false,
    "definition": "The user-facing intelligence layer. It is not the integration layer. Durable assets are APIs, events, identity, connectors, schemas, and policy underneath it.",
    "see_also": "Copilot Integration Enablement Layer",
    "where": "Mind map, all views",
    "source": "UNVERIFIED"
  },
  {
    "category": "Platform",
    "term": "Copilot APIs",
    "rung": 200,
    "essential": false,
    "definition": "REST endpoints under Microsoft Graph that let an app invoke Microsoft 365 Copilot. Same auth model as other Graph APIs.",
    "see_also": "Microsoft Graph, Microsoft 365 Copilot",
    "where": "Block sources, mind map",
    "source": "[S1]"
  },
  {
    "category": "Integration & AI",
    "term": "Copilot connector",
    "rung": 100,
    "essential": true,
    "definition": "Brings external knowledge into Microsoft 365 Copilot and Search. Two kinds: synced (indexed) and federated (live MCP).",
    "see_also": "Synced connector, Federated connector",
    "where": "Blocks, integration view",
    "source": "[S3]"
  },
  {
    "category": "Integration & AI",
    "term": "Copilot Integration Enablement Layer",
    "rung": 300,
    "essential": true,
    "definition": "The target control point: an MCP/API catalog, gateway, policy, and audit so teams do not build one-off AI connections.",
    "see_also": "MCP, Control plane",
    "where": "Conceptual view, mind map",
    "source": "UNVERIFIED"
  },
  {
    "category": "Platform",
    "term": "Copilot Studio",
    "rung": 100,
    "essential": false,
    "definition": "Low-code place to build task-specific business agents that call APIs, Dataverse, and approved MCP tools. Separate from GitHub Copilot.",
    "see_also": "Microsoft 365 Copilot, Dataverse",
    "where": "Mind map, cheatsheet",
    "source": "[S22]"
  },
  {
    "category": "Platform",
    "term": "Dataverse",
    "rung": 100,
    "essential": false,
    "definition": "Power Platform data store behind low-code apps and some Copilot Studio agents.",
    "see_also": "Copilot Studio, Power Platform connector",
    "where": "Mind map",
    "source": "[S25]"
  },
  {
    "category": "Conceptual",
    "term": "Digital-work platform",
    "rung": 100,
    "essential": false,
    "definition": "The Microsoft 365 side of this pack: mail, files, chat, meetings, and business process. Microsoft Graph is its API and data plane.",
    "see_also": "Microsoft Graph, Software-delivery platform",
    "where": "Conceptual view",
    "source": "[S10]"
  },
  {
    "category": "Physical",
    "term": "Entra ID",
    "rung": 100,
    "essential": true,
    "definition": "Microsoft's identity service for this pack. Users and apps authenticate here.",
    "see_also": "Conditional Access, Workload identity",
    "where": "Physical view, cheatsheet",
    "source": "[S18]"
  },
  {
    "category": "Logical",
    "term": "Event-driven integration",
    "rung": 200,
    "essential": false,
    "definition": "A source publishes a webhook or event; a consumer reacts. Used when systems must respond to a change instead of polling.",
    "see_also": "Graph change notifications",
    "where": "Mind map, logical view",
    "source": "[S20]"
  },
  {
    "category": "Logical",
    "term": "externalItem",
    "rung": 200,
    "essential": true,
    "definition": "The Graph object a synced connector writes. It carries content, properties, and an ACL.",
    "see_also": "ACL, Synced connector",
    "where": "Study guide, physical view",
    "source": "[S15]"
  },
  {
    "category": "Logical",
    "term": "Federated connector",
    "rung": 200,
    "essential": true,
    "definition": "Live fetch at question time through MCP. Content is not copied into Microsoft Graph. Use it when data is volatile, sensitive, large, or when a write must hit the source.",
    "see_also": "Synced connector, MCP",
    "where": "Blocks, logical view",
    "source": "[S4] [S3]"
  },
  {
    "category": "Physical",
    "term": "GitHub App",
    "rung": 200,
    "essential": true,
    "definition": "Server-to-server GitHub integration with fine-grained permissions and short-lived installation tokens. Preferred over a broad OAuth app or a PAT.",
    "see_also": "PAT, Checks API",
    "where": "Mind map, integration risks",
    "source": "[S16]"
  },
  {
    "category": "Integration & AI",
    "term": "GitHub Cloud Knowledge connector",
    "rung": 200,
    "essential": false,
    "definition": "Microsoft connector that indexes selected GitHub Markdown and docs into Graph so Microsoft 365 Copilot can ground on them.",
    "see_also": "Synced connector, GitHub Copilot",
    "where": "Source ledger, logical view",
    "source": "[S5]"
  },
  {
    "category": "Platform",
    "term": "GitHub Copilot",
    "rung": 100,
    "essential": true,
    "definition": "The coding assistant (IDE, CLI, chat, coding agent). Licensed separately from Microsoft 365 Copilot.",
    "see_also": "Microsoft 365 Copilot, MCP",
    "where": "Cheatsheet, mind map",
    "source": "[S12]"
  },
  {
    "category": "Integration & AI",
    "term": "GitHub Copilot Extensions",
    "rung": 200,
    "essential": false,
    "definition": "Older GitHub App model for extending Copilot. GitHub documents MCP as the current extensibility path.",
    "see_also": "MCP server, GitHub App",
    "where": "Mind map, study guide",
    "source": "[S7]"
  },
  {
    "category": "Physical",
    "term": "Graph change notifications",
    "rung": 200,
    "essential": false,
    "definition": "Webhooks from Microsoft Graph when a resource changes. The subscriber then reads the authorized change.",
    "see_also": "Event-driven integration, Microsoft Graph",
    "where": "Mind map",
    "source": "[S20]"
  },
  {
    "category": "Platform",
    "term": "Graph Data Connect",
    "rung": 200,
    "essential": false,
    "definition": "Bulk, governed export of Microsoft 365 data into an Azure analytics store. Not the same as a Copilot connector.",
    "see_also": "Microsoft Graph, Copilot connector",
    "where": "Mind map",
    "source": "[S21]"
  },
  {
    "category": "Logical",
    "term": "Indexed knowledge connector",
    "rung": 200,
    "essential": false,
    "definition": "Same idea as a synced connector: copy external content into a Graph external connection so Search and Copilot can retrieve it.",
    "see_also": "Synced connector, externalItem",
    "where": "Mind map, study guide",
    "source": "[S3] [S15]"
  },
  {
    "category": "Conceptual",
    "term": "Knowledge plane",
    "rung": 200,
    "essential": false,
    "definition": "Curated information made searchable through synced connectors and the Graph index. A name this pack uses, not a Microsoft product name.",
    "see_also": "Synced connector, Transaction plane",
    "where": "Conceptual view",
    "source": "UNVERIFIED"
  },
  {
    "category": "Integration & AI",
    "term": "MCP",
    "rung": 100,
    "essential": true,
    "definition": "Model Context Protocol. A way for a host (Copilot) to call tools and read context from an external server. GitHub's primary Copilot extensibility path, and the wire for federated connectors.",
    "see_also": "MCP server, Federated connector",
    "where": "Blocks, all views",
    "source": "[S6] [S4]"
  },
  {
    "category": "Integration & AI",
    "term": "MCP server",
    "rung": 200,
    "essential": false,
    "definition": "A process that exposes tools to Copilot. Catalog it. Split read-only tools from write tools.",
    "see_also": "MCP, Prompt injection",
    "where": "Conceptual view, integration risks",
    "source": "[S7]"
  },
  {
    "category": "Platform",
    "term": "Microsoft 365 Copilot",
    "rung": 100,
    "essential": true,
    "definition": "The work assistant over mail, files, meetings, and Graph. Not the same product as GitHub Copilot.",
    "see_also": "GitHub Copilot, Microsoft Graph",
    "where": "Cheatsheet, source ledger",
    "source": "[S10]"
  },
  {
    "category": "Platform",
    "term": "Microsoft Graph",
    "rung": 100,
    "essential": true,
    "definition": "The permission-aware API and data plane for Microsoft 365 content and for Copilot APIs.",
    "see_also": "Copilot APIs, externalItem",
    "where": "Mind map, conceptual view",
    "source": "[S1] [S15]"
  },
  {
    "category": "Physical",
    "term": "OAuth 2.0",
    "rung": 200,
    "essential": false,
    "definition": "Delegated or app authorization. Graph and GitHub both use it. Broad scopes are a risk on GitHub; prefer a GitHub App for service-to-service.",
    "see_also": "GitHub App, OIDC",
    "where": "Physical view",
    "source": "[S16]"
  },
  {
    "category": "Physical",
    "term": "OIDC",
    "rung": 200,
    "essential": false,
    "definition": "OpenID Connect. Identity layer on OAuth, used for sign-in. This pack does not yet cite an Entra protocol page for it.",
    "see_also": "OAuth 2.0, SAML",
    "where": "Physical view",
    "source": "UNVERIFIED"
  },
  {
    "category": "Physical",
    "term": "PAT",
    "rung": 300,
    "essential": true,
    "definition": "Personal access token. A user secret with a lifetime you set. Avoid it for a service; use a GitHub App installation token.",
    "see_also": "GitHub App",
    "where": "Study guide",
    "source": "[S24] [S16]"
  },
  {
    "category": "Integration & AI",
    "term": "Permission fidelity",
    "rung": 300,
    "essential": true,
    "definition": "Source-system rights must survive the trip into Graph ACLs. If the mapping is wrong, Copilot retrieval spreads the mistake.",
    "see_also": "ACL, externalItem",
    "where": "Integration view",
    "source": "[S15] [S3]"
  },
  {
    "category": "Platform",
    "term": "Power Platform connector",
    "rung": 200,
    "essential": false,
    "definition": "Low-code connector used by Power Automate and Power Apps. Different surface from a Copilot connector.",
    "see_also": "Copilot connector, Dataverse",
    "where": "Mind map",
    "source": "UNVERIFIED"
  },
  {
    "category": "Integration & AI",
    "term": "Prompt injection",
    "rung": 300,
    "essential": true,
    "definition": "Hostile text inside retrieved content that tries to override the model's instructions. Treat retrieved text as data; gate actions outside the model.",
    "see_also": "MCP server, Permission fidelity",
    "where": "Integration view",
    "source": "UNVERIFIED"
  },
  {
    "category": "Physical",
    "term": "SAML",
    "rung": 200,
    "essential": false,
    "definition": "Older SSO federation option, an alternative to OIDC. This pack does not yet cite an Entra SSO page for it.",
    "see_also": "OIDC, Entra ID",
    "where": "Physical view",
    "source": "UNVERIFIED"
  },
  {
    "category": "Physical",
    "term": "SCIM",
    "rung": 200,
    "essential": false,
    "definition": "Protocol Entra app provisioning uses to create, update, and disable accounts in a target app.",
    "see_also": "Entra ID, Workload identity",
    "where": "Physical view, study guide",
    "source": "[S23]"
  },
  {
    "category": "Logical",
    "term": "Semantic index",
    "rung": 200,
    "essential": true,
    "definition": "Microsoft's index that Copilot uses for grounding. Synced connector items land where this retrieval can see them.",
    "see_also": "Synced connector, Microsoft 365 Copilot",
    "where": "Study guide",
    "source": "[S11] [S3]"
  },
  {
    "category": "Conceptual",
    "term": "Software-delivery platform",
    "rung": 100,
    "essential": false,
    "definition": "The GitHub side of this pack: repos, review, Actions, packages, release.",
    "see_also": "GitHub Copilot, Digital-work platform",
    "where": "Conceptual view",
    "source": "[S12]"
  },
  {
    "category": "Logical",
    "term": "Synced connector",
    "rung": 200,
    "essential": true,
    "definition": "Pulls external content on a schedule into a Graph external connection, including content, properties, and an ACL. Good for search; a poor place for secrets and fast-changing records.",
    "see_also": "Federated connector, externalItem",
    "where": "Blocks, logical view",
    "source": "[S3] [S2]"
  },
  {
    "category": "Conceptual",
    "term": "System of record",
    "rung": 100,
    "essential": true,
    "definition": "The one authoritative store for a fact. Copilot must not become a second one.",
    "see_also": "Synced connector, API consumption",
    "where": "Conceptual view",
    "source": "UNVERIFIED"
  },
  {
    "category": "Conceptual",
    "term": "Transaction plane",
    "rung": 200,
    "essential": false,
    "definition": "APIs and workflows that change state. Distinct from the knowledge plane. A name this pack uses.",
    "see_also": "Knowledge plane, API consumption",
    "where": "Conceptual view",
    "source": "UNVERIFIED"
  },
  {
    "category": "Platform",
    "term": "Work IQ API",
    "rung": 200,
    "essential": false,
    "definition": "Usage-based API for custom apps and agents that reason over Microsoft 365 context. It is billed in Copilot Credits and is separate from Work IQ inside Microsoft Copilot experiences. Requests run as the signed-in user; application-only auth is not supported.",
    "see_also": "Work IQ, Copilot Credits, Microsoft Copilot",
    "where": "Copilot deep dive",
    "source": "[S43] [S42]"
  },
  {
    "category": "Physical",
    "term": "Workload identity",
    "rung": 300,
    "essential": true,
    "definition": "An app or service identity, not a person. Server-to-server calls should use this, or a GitHub App, not a shared user account.",
    "see_also": "Entra ID, GitHub App",
    "where": "Study guide",
    "source": "[S18] [S16]"
  },
  {
    "category": "Data protection",
    "term": "Grounding",
    "rung": 200,
    "essential": true,
    "definition": "Adding permitted input, such as Microsoft Graph data or optional web results, to a prompt before the model writes the answer. Grounding can make an answer more specific. It does not make the model the system of record, and it does not by itself prove the sentence is true.",
    "see_also": "Microsoft Copilot, Microsoft Graph, Hallucination",
    "where": "Copilot deep dive, integration view",
    "source": "[S11] [S36] [S33]"
  },
  {
    "category": "Data protection",
    "term": "Permission trimming",
    "rung": 200,
    "essential": true,
    "definition": "Copilot returns only what the signed-in user is allowed to open. It does not get tenant-wide visibility.",
    "see_also": "ACL, Grounding",
    "where": "Integration view",
    "source": "nblm-gap [S11]"
  },
  {
    "category": "Delivery",
    "term": "LLM",
    "rung": 100,
    "essential": false,
    "definition": "The model that writes the Copilot response from the grounded prompt. As of October 2026, the release notes name GPT-5 as the Copilot Chat default. The selector names are in the Copilot deep dive. The model is not the system of record for mail or files.",
    "see_also": "Grounding, Microsoft Copilot",
    "where": "Integration view, Copilot deep dive",
    "source": "[S11] [S10] [S57]"
  },
  {
    "category": "Delivery",
    "term": "Copilot Chat models",
    "rung": 200,
    "essential": true,
    "definition": "As of October 2026, the release notes say GPT-5 powers Copilot Chat by default, with fast versus reasoning routing (23 Dec 2025). The selector later adds GPT-5.2 (27 Jan 2026, Quick Response or Think Deeper), OpenAI's GPT-5.5 Instant and GPT 5.5 Thinking (19 May 2026), and Claude where Anthropic is enabled. UI indicators show when a Claude model is in use. Declarative agents use GPT-5.1 with auto selection as of the 24 Feb 2026 note.",
    "see_also": "LLM, Declarative agent",
    "where": "Copilot deep dive",
    "source": "[S57] [S34]"
  },
  {
    "category": "Neighbor system",
    "term": "SharePoint",
    "rung": 100,
    "essential": false,
    "definition": "A Microsoft 365 store for files. Copilot reaches the files the user can open. Restricted SharePoint Search can narrow that set further.",
    "see_also": "Microsoft Graph, Grounding",
    "where": "Integration view",
    "source": "nblm-gap [S11]"
  },
  {
    "category": "Data protection",
    "term": "Oversharing",
    "rung": 300,
    "essential": true,
    "definition": "Copilot retrieves an item the user could not open in the source system, usually because the synced ACL is wider than the source rights.",
    "see_also": "ACL, Permission fidelity",
    "where": "Integration view",
    "source": "nblm-gap [S15] [S3]"
  },
  {
    "category": "Integration",
    "term": "Webhook",
    "rung": 200,
    "essential": false,
    "definition": "A callback Microsoft Graph can send when a resource changes. The subscriber then reads the change instead of polling.",
    "see_also": "Graph change notifications",
    "where": "Logical view",
    "source": "nblm-gap [S20]"
  },
  {
    "category": "Integration",
    "term": "REST",
    "rung": 200,
    "essential": false,
    "definition": "The HTTP style of the Copilot APIs on Microsoft Graph.",
    "see_also": "Copilot APIs",
    "where": "Physical view",
    "source": "nblm-gap [S1]"
  },
  {
    "category": "Integration",
    "term": "GraphQL",
    "rung": 200,
    "essential": false,
    "definition": "GitHub's query API. One request can read a repository together with related objects such as pull requests.",
    "see_also": "GitHub Copilot",
    "where": "Physical view",
    "source": "nblm-gap [S26]"
  },
  {
    "category": "Government cloud",
    "term": "GCC",
    "rung": 200,
    "essential": false,
    "definition": "Office 365 Government Community Cloud. Customer content is stored in the United States and kept logically separate from commercial Office 365.",
    "see_also": "GCC High",
    "where": "Physical view",
    "source": "nblm-gap [S27]"
  },
  {
    "category": "Government cloud",
    "term": "GCC High",
    "rung": 200,
    "essential": true,
    "definition": "Office 365 government environment for DoD security requirements, DFARS, and ITAR. It is not the Department of Defense tenant.",
    "see_also": "GCC, DoD",
    "where": "Physical view",
    "source": "nblm-gap [S27]"
  },
  {
    "category": "Government cloud",
    "term": "DoD",
    "rung": 200,
    "essential": false,
    "definition": "The Office 365 environment for the United States Department of Defense only.",
    "see_also": "GCC High",
    "where": "Physical view",
    "source": "nblm-gap [S27]"
  },
  {
    "category": "Data protection",
    "term": "DLP",
    "rung": 200,
    "essential": true,
    "definition": "Data Loss Prevention. Policies that detect sensitive information and can block or protect it from leaving the tenant.",
    "see_also": "Sensitivity label, Oversharing",
    "where": "Integration view",
    "source": "[S28]"
  },
  {
    "category": "Data protection",
    "term": "Sensitivity label",
    "rung": 200,
    "essential": true,
    "definition": "A label on an item that states how sensitive it is and can trigger protection such as encryption. It is not the same control as the item's ACL.",
    "see_also": "DLP, ACL",
    "where": "Integration view",
    "source": "[S29]"
  },
  {
    "category": "Identity",
    "term": "Admin consent",
    "rung": 200,
    "essential": false,
    "definition": "An administrator grants an application permission for the whole tenant, so users do not each consent. A connector app that cannot get this stays unable to call Graph.",
    "see_also": "Entra ID, Microsoft Graph",
    "where": "Physical view",
    "source": "[S30]"
  },
  {
    "category": "Integration",
    "term": "Throttling",
    "rung": 200,
    "essential": false,
    "definition": "Microsoft Graph limits how fast an app may call it. Past the limit, Graph returns HTTP 429 and the caller has to back off.",
    "see_also": "Microsoft Graph, Synced connector",
    "where": "Physical view",
    "source": "[S31]"
  },
  {
    "category": "Platform",
    "term": "Microsoft Copilot",
    "rung": 100,
    "essential": true,
    "definition": "The current name. The models overview states that Microsoft 365 Copilot is now named Microsoft Copilot, and that there are no changes to security, compliance, and privacy for organizations. The privacy page adds that some experiences, licenses, and capabilities might still say Microsoft 365 Copilot during the transition.",
    "see_also": "Copilot Chat, Microsoft 365 Copilot",
    "where": "Copilot deep dive",
    "source": "[S32] [S33]"
  },
  {
    "category": "Platform",
    "term": "Copilot Chat",
    "rung": 100,
    "essential": true,
    "definition": "The chat experience now named Microsoft Copilot Chat. The models overview states the previous name, Microsoft 365 Copilot Chat, and that the rename does not change security, compliance, or privacy. Purview docs also record older names: Business Chat, Graph-grounded chat, and Microsoft 365 Chat.",
    "see_also": "Microsoft Copilot, Enterprise Data Protection",
    "where": "Copilot deep dive",
    "source": "[S32] [S33] [S51]"
  },
  {
    "category": "Platform",
    "term": "AI model hosted by Microsoft",
    "rung": 200,
    "essential": true,
    "definition": "A model Microsoft hosts and operates, such as Azure OpenAI or Black Forest Labs FLUX. Offered under the Microsoft DPA and Product Terms. The models overview says data does not leave Microsoft. Those names are examples on that page, not a menu to memorize.",
    "see_also": "AI subprocessor, AI independent processor",
    "where": "Copilot deep dive",
    "source": "[S32]"
  },
  {
    "category": "Platform",
    "term": "AI subprocessor",
    "rung": 200,
    "essential": true,
    "definition": "A third party that handles data on Microsoft's behalf under the Microsoft DPA and Product Terms. Anthropic and OpenAI-operated models are documented subprocessors. Admins scope them under AI providers operating as Microsoft subprocessors.",
    "see_also": "AI model hosted by Microsoft, AI independent processor",
    "where": "Copilot deep dive",
    "source": "[S32] [S34] [S35]"
  },
  {
    "category": "Platform",
    "term": "AI independent processor",
    "rung": 300,
    "essential": false,
    "definition": "A third-party provider that processes data under its own terms, outside the Microsoft DPA, Product Terms, and enterprise safeguards. Admins turn these models on or off in the Microsoft 365 admin center or the Power Platform admin center. If an admin does not enable one, Microsoft Online Services do not use that third-party AI. Anthropic models with Data Retention are an explicit case and stay off until an admin opts in. The older Anthropic independent-processor setting was decommissioned on 1 May 2026. Mistral is enabled under AI providers for other large language models; that page does not use the words AI independent processor.",
    "see_also": "AI subprocessor, AI model hosted by Microsoft",
    "where": "Copilot deep dive",
    "source": "[S32] [S34] [S53] [S48]"
  },
  {
    "category": "Platform",
    "term": "Declarative agent",
    "rung": 200,
    "essential": true,
    "definition": "An agent configured with instructions, knowledge, and actions that runs on Copilot's orchestrator and models. It inherits Microsoft 365 security, compliance, and responsible AI requirements. No extra model host is required.",
    "see_also": "Custom engine agent, Plugin",
    "where": "Copilot deep dive",
    "source": "[S38]"
  },
  {
    "category": "Platform",
    "term": "Custom engine agent",
    "rung": 200,
    "essential": false,
    "definition": "An agent that brings its own orchestrator and models. It needs hosting outside the Copilot orchestrator, often in Azure or Copilot Studio, and the builder owns compliance for that custom engine.",
    "see_also": "Declarative agent, Copilot Studio",
    "where": "Copilot deep dive",
    "source": "[S38]"
  },
  {
    "category": "Integration & AI",
    "term": "Plugin",
    "rung": 200,
    "essential": false,
    "definition": "A set of API functions an agent can call. One call inside that set is an action. API plugins travel in a Microsoft 365 app package with a declarative agent. Power Platform connectors are the related surface used from Copilot Studio.",
    "see_also": "Declarative agent, Copilot connector",
    "where": "Copilot deep dive",
    "source": "[S39]"
  },
  {
    "category": "Platform",
    "term": "Work IQ",
    "rung": 200,
    "essential": true,
    "definition": "The intelligence layer the Copilot overview describes for grounding Microsoft 365 Copilot (Premium) in organizational data. Admins can turn Work IQ on or off. When it is off, responses are not enriched with Graph work context. The Work IQ API is a separate usage-based offering.",
    "see_also": "Work IQ API, Grounding, Copilot Credits",
    "where": "Copilot deep dive",
    "source": "[S10] [S43]"
  },
  {
    "category": "Data protection",
    "term": "SharePoint Advanced Management",
    "rung": 200,
    "essential": false,
    "definition": "SharePoint controls the Copilot overview cites for reducing oversharing and cleaning inactive sites, so Copilot has a smaller, better-governed set of sources. Restricted content discovery can keep a site out of organization-wide search and Copilot while you review it.",
    "see_also": "Oversharing, Grounding, Restricted SharePoint Search",
    "where": "Copilot deep dive, Identity architecture view",
    "source": "[S10] [S46]"
  },
  {
    "category": "Data protection",
    "term": "Restricted SharePoint Search",
    "rung": 200,
    "essential": true,
    "definition": "A SharePoint admin allow list of at most 100 sites. It limits organization-wide search and, as a temporary measure, Copilot chat and agentic experiences. It is off by default. It is not a security boundary and does not change SharePoint permissions. Users can still open files they own or previously accessed. New enablement is blocked starting 31 July 2026. SharePoint Advanced Management is the cleanup path the same page points to.",
    "see_also": "SharePoint Advanced Management, Permission fidelity",
    "where": "Identity architecture view",
    "source": "[S55] [S11]"
  },
  {
    "category": "Data protection",
    "term": "Enterprise Data Protection",
    "rung": 200,
    "essential": true,
    "definition": "The contractual and technical commitments, under the Microsoft DPA and Product Terms, that apply to customer data for Microsoft Copilot and Microsoft Copilot Chat. Prompts and responses are covered by those commitments. Web search queries sent to Bing are handled separately from Graph queries.",
    "see_also": "Copilot Chat, Microsoft Copilot",
    "where": "Copilot deep dive",
    "source": "[S41]"
  },
  {
    "category": "Platform",
    "term": "Copilot Credits",
    "rung": 200,
    "essential": false,
    "definition": "The meter for usage-based billing. The credits article lists Cowork, advanced SharePoint and OneDrive work, the Work IQ API, Copilot Managed Runtime, Teams Phone Agent, and Code. Cowork and Code also require a Copilot license. The USL article says these experiences consume Copilot Credits and require a user subscription license. The overview says usage-based billing capabilities require Microsoft 365 Copilot (Premium). An admin must set a billing policy before a user can spend credits.",
    "see_also": "Work IQ API, Copilot Cowork",
    "where": "Copilot deep dive",
    "source": "[S42] [S54] [S10]"
  },
  {
    "category": "Platform",
    "term": "Copilot Cowork",
    "rung": 200,
    "essential": false,
    "definition": "A Copilot experience that carries out tasks across the Microsoft 365 environment. The overview places it on usage-based billing, which requires Microsoft 365 Copilot (Premium). The credits article also requires a Copilot license. The Model menu defaults to Auto. Named models on the Cowork models page change, so this note does not freeze SKUs.",
    "see_also": "Copilot Credits, AI subprocessor",
    "where": "Copilot deep dive",
    "source": "[S37] [S42] [S47]"
  },
  {
    "category": "Platform",
    "term": "Agent 365",
    "rung": 200,
    "essential": false,
    "definition": "Microsoft's control plane for agents. In the Microsoft 365 admin center the Agent workload is where admins inventory agents, see owners, and control availability. It is an admin surface, not a second copy of the tenant's files.",
    "see_also": "Declarative agent, Custom engine agent",
    "where": "Copilot deep dive",
    "source": "[S40]"
  },
  {
    "category": "Data protection",
    "term": "DSPM for AI",
    "rung": 200,
    "essential": false,
    "definition": "Microsoft Purview Data Security Posture Management for AI: a place to see AI activity, start data-protection policies, and assess oversharing. The Learn article read on 15 Oct 2026 describes the classic experience and points to a newer DSPM. Which portal a tenant uses is a tenant fact, not something this page can know.",
    "see_also": "Interaction Export API, Enterprise Data Protection",
    "where": "Copilot deep dive",
    "source": "[S44]"
  },
  {
    "category": "Data protection",
    "term": "Interaction Export API",
    "rung": 300,
    "essential": false,
    "definition": "Microsoft Graph aiInteractionHistory getAllEnterpriseInteractions. It exports Copilot prompts and responses for experiences that write to the interaction history service. It needs application permission AiEnterpriseInteraction.Read.All. The same page's national-cloud table includes global, US Government L4, and US Government L5 (DoD), and excludes the China cloud operated by 21Vianet. That table is about this API, not every Copilot feature.",
    "see_also": "DSPM for AI, Copilot APIs",
    "where": "Copilot deep dive",
    "source": "[S45]"
  },
  {
    "category": "Data protection",
    "term": "Hallucination",
    "rung": 200,
    "essential": false,
    "definition": "A response the model states that the retrieved sources do not support. Grounding and citations reduce how often that happens. They do not make the sentence true. UNVERIFIED: any claim that grounding removes hallucination.",
    "see_also": "Grounding, System of record",
    "where": "Copilot deep dive",
    "source": "[S36] [S11]"
  },
  {
    "category": "Study",
    "term": "AI prompts",
    "rung": 100,
    "essential": false,
    "definition": "Copyable architect prompts on this site for Microsoft 365 and Microsoft Copilot. Each prompt has blanks for org-specific values, a redaction reminder, and an S# chip that opens a short source summary and a link. Fill the blanks with synthetic values.",
    "see_also": "Microsoft Copilot, Source ledger",
    "where": "AI prompts",
    "source": "[S10] [S57]"
  }
];

DATA.copilot = {
  "asOf": "2026-10-15",
  "aliases": [
    {"now": "Microsoft Copilot", "was": "Microsoft 365 Copilot", "note": "The models overview states the rename and that there are no changes to security, compliance, and privacy for organizations. Some licenses and screens can still show the old name during the transition [S32] [S33]."},
    {"now": "Microsoft Copilot Chat", "was": "Microsoft 365 Copilot Chat", "note": "Same rename note. Purview docs also record older names: Business Chat, Graph-grounded chat, and Microsoft 365 Chat [S32] [S33] [S51]."}
  ],
  "blocks": [
    {
      "id": "start",
      "n": "0",
      "title": "Start here",
      "paras": [
        "Microsoft Copilot, for an organization, is the work assistant in Microsoft 365 apps and in chat. It coordinates a language model, content the signed-in user can already open in Microsoft Graph, and the app they are using [S10] [S33].",
        "It matters because the answer is only as good as the data the user can reach, and a write still lands in some other system of record. Copilot is a consumer of that integration layer. This pack's warning is: do not draw it as the bus that owns HR, ITSM, or GitHub [S11] [S4].",
        "Read the alias card above before the rest. The models overview, read 15 Oct 2026, states both renames in one sentence and says there are no changes to security, compliance, and privacy for organizations [S32]. The privacy page repeats that and adds that some experiences, licenses, and capabilities might still use the old names during the transition [S33]."
      ],
      "reveals": [
        {"q": "Why ground on Microsoft Graph?", "a": "The model does not hold your tenant. Grounding adds permitted context, such as mail, files, and meetings the user can already open, at request time. That context is not used to train the foundation model [S11] [S36] [S33]."},
        {"q": "Why is Copilot not the integration bus?", "a": "The architecture sends a grounded prompt to a model and returns a response to the app [S11]. Live facts and writes stay in the source system through connectors or APIs [S3] [S4]. Calling Copilot the bus is how designs skip that layer. The phrase is this pack's rule; Microsoft's pages describe the orchestration, not a bus product."},
        {"q": "Why is model choice Microsoft's, and the admin's?", "a": "Microsoft continuously evaluates and updates the models. A Message center post is used when the change needs admin action, touches contractual, compliance, security, privacy, or data-processing commitments, or is a significant service change. Other changes may show up only on the Copilot blog or in release notes [S32]. Admins decide which subprocessors and independent processors are on [S34] [S35] [S32]. A user or a Studio maker can pick only inside that boundary [S10] [S34]."}
      ]
    },
    {
      "id": "stack",
      "n": "1",
      "title": "How a prompt walks the stack",
      "paras": [
        "As of October 2026 the walk is six cards: the architecture article, then post-processing, then optional web grounding. Skip grounding and the model answers from training only. Skip the safety card and you have described a raw model call [S11] [S36] [S41]."
      ]
    },
    {
      "id": "models",
      "n": "2",
      "title": "Models behind Copilot",
      "paras": [
        "As of October 2026, the release notes name the Chat default and the selector. GPT-5 is that default. Later notes add models to the selector [S57]. The models overview names who hosts a model. It does not list these SKUs [S32].",
        "Microsoft tells customers in the Microsoft 365 Message center when a model change needs administrator action, affects contractual, compliance, security, privacy, or data-processing commitments, or is a significant service change. Other model changes may appear only on the Copilot blog or in the Copilot release notes [S32]. Model updates do not change the customer's security, privacy, or compliance settings [S33].",
        "Anthropic defaults, read 15 Oct 2026: Microsoft enables Anthropic models on by default for most commercial-cloud customers, excluding EU, EFTA, and UK. Customers in the EU Data Boundary and in the UK have Anthropic disabled by default; the admin setting is present and set to No users [S34]. A separate setting, Copilot in Microsoft 365 apps with Anthropic models, covers Word, Excel, and PowerPoint for EU, EFTA, and UK tenants. It is on by default for tenants created after 25 March 2026. Tenants that existed before that date check Message center for their default. That apps setting does not change the global subprocessor setting, and it is unavailable when the global setting is already All users or Specific users and groups. When those app experiences use Anthropic, processing is outside the EU Data Boundary [S53]. The Anthropic independent-processor setting was decommissioned on 1 May 2026. If Anthropic is not enabled as a Microsoft subprocessor, access to Anthropic models is no longer available [S53].",
        "The privacy page says models provided by Anthropic as a subprocessor are currently excluded from the EU Data Boundary [S33]. The Anthropic page says the same exclusion for Anthropic models in Copilot, Researcher, Copilot Studio, Power Platform, and Copilot in Microsoft 365 apps, and adds in-country processing commitments where those apply [S34]. The OpenAI subprocessor article says OpenAI-operated models are in the EU Data Boundary except where the EU Data Boundary docs say otherwise [S35]. Microsoft Copilot itself is documented as meeting the EU Data Boundary commitment [S33]. Do not collapse those sentences into one.",
        "Exact training line from the privacy page, read 15 Oct 2026: prompts, responses, and data accessed through Microsoft Graph aren't used to train foundation LLMs, including those used by Microsoft Copilot [S33]. That sentence is about training. It is not a promise that a prompt never leaves the tenant when a subprocessor or optional web search is in the path [S34] [S41]."
      ]
    },
    {
      "id": "grounding",
      "n": "3",
      "title": "Grounding, permissions, and write-back",
      "paras": [
        "Three decisions, then the write gate. The prompt walk itself is the section above."
      ],
      "cards": [
        {"k": "Grounding", "t": "Input related to the prompt, such as Microsoft Graph data or Bing results, so the answer can be more specific [S36]. The app receives the prompt, Copilot grounds it in the user's tenant, the grounded prompt goes to the model, and the response returns to the app [S11]. Optional web grounding is a separate Bing query with user and tenant identifiers removed [S41]."},
        {"k": "Still a draft", "t": "The application card calls the model step inferencing: it predicts a response. Post-processing then runs more Graph checks plus responsible AI, security, compliance, and privacy checks [S36]. UNVERIFIED: any claim that grounding removes hallucination."},
        {"k": "Synced", "t": "Use when people will search the same knowledge again. The connector copies external content into a Graph external item, with an ACL mapped from the source [S3] [S15]."},
        {"k": "Federated", "t": "Use for live, sensitive, or fast-changing facts. MCP runs as the user and does not index that content into Microsoft 365 [S4]."},
        {"k": "Labels are not the ACL", "t": "Copilot honors usage rights on Purview-labeled or IRM-protected content [S33] [S29]. SharePoint Advanced Management is the cleanup layer so overshared sites are not in the grounding set [S10] [S46]."},
        {"k": "Write gate", "t": "Federated write, update, and delete begin rolling out in early October 2026 [S4]. The same page still heads that section Coming soon. Nothing is sent until the user picks Allow once, Allow for conversation, Always allow, or Cancel. Read tools do not ask. Researcher does not support these writes. The action runs in the source system as the user."},
        {"k": "Pack rule", "t": "This pack adds a second gate for consequential actions: a workflow approval bound to a verified identity, outside the wording of the prompt. Always allow on the card is a user convenience. It is not a change-management approval. Microsoft does not document that second gate as a default."}
      ]
    },
    {
      "id": "family",
      "n": "4",
      "title": "Family map",
      "paras": [
        "These are related products, not one license. The overview, read 15 Oct 2026, still describes Copilot Chat (Basic), Microsoft 365 Copilot (Basic), and Microsoft 365 Copilot (Premium), then a fourth column for usage-based billing [S10] [S33]. Premium is the add-on that grounds in work data through Graph and Work IQ. Work IQ can be turned off. Cowork and Copilot Code sit on usage-based billing, which the overview says requires Microsoft 365 Copilot (Premium), and which consumes Copilot Credits [S10] [S42] [S54]. The USL article splits the same idea as everyday AI on a user subscription license, with Auto as the default router, versus advanced AI such as Cowork and Code on usage-based billing [S54]."
      ]
    },
    {
      "id": "agents",
      "n": "5",
      "title": "Agents and extensibility",
      "paras": [
        "Pick the host first. A declarative agent stays on Copilot's orchestrator. A custom engine brings its own. Neither one is the integration bus [S38] [S11]."
      ],
      "lanes": [
        {"k": "Declarative agent", "t": "Instructions, knowledge, and actions on Copilot's orchestrator and models. No extra host. It inherits Microsoft 365 compliance. As of the 24 Feb 2026 release note, the named model is GPT-5.1 with auto selection between a fast model and a reasoning model. No later note through 6 Oct 2026 names a replacement [S38] [S57]."},
        {"k": "Custom engine", "t": "Your orchestrator and your model. Host it in Microsoft 365 with Copilot Studio, or outside, typically Azure. You own compliance. Proactive triggers and channels outside Microsoft 365 are the reason to leave the declarative path [S38]."}
      ],
      "cards": [
        {"k": "Office artifact", "t": "Microsoft Copilot. Briefs, spreadsheets, and meeting summaries stay in the Microsoft 365 apps [S10]."},
        {"k": "Code or a pull request", "t": "GitHub Copilot. Separate license and product. A Microsoft Copilot license does not include it [S12] [S10]."},
        {"k": "Low-code business agent", "t": "Copilot Studio. It can build a declarative agent or host a custom engine. It is not GitHub Copilot [S22] [S38]."},
        {"k": "Durable knowledge", "t": "Synced connector. Copy into Graph with the source ACL when people will search it again [S3] [S15]."},
        {"k": "Live or sensitive fact", "t": "Federated MCP connector. Nothing is indexed into Microsoft 365. The source stays the system of record [S4]."},
        {"k": "A state change", "t": "An API or a workflow, plus the confirmation card. The model does not own the record [S4] [S11]. GitHub server-to-server work uses a GitHub App and a short-lived installation token [S12] [S16]."},
        {"k": "One call versus the bundle", "t": "A plugin is the bundle of API functions. An action is one call in that bundle [S39]. Agent 365, in the Microsoft 365 admin center, inventories agents and who can use them. It does not replace Entra, Purview, or the connector catalog [S40]."}
      ]
    },
    {
      "id": "trust",
      "n": "6",
      "title": "Trust boundary",
      "paras": [
        "Three boundaries. A commercial architecture page is not a government service description [S27]."
      ],
      "cards": [
        {"k": "Permissions", "t": "Organizational grounding stays inside what the signed-in user can already open. Semantic index retrieval does not widen that boundary [S33] [S11]. Enterprise Data Protection is the DPA and Product Terms commitment on Copilot and Copilot Chat prompts and responses [S41]."},
        {"k": "What gets logged", "t": "Purview DSPM for AI is the admin window onto AI activity, oversharing assessments, and starter policies. The article read 15 Oct 2026 is the classic experience and points at a newer DSPM. Confirm which one the tenant has [S44]. The Interaction Export API pulls prompts and responses that were written to the interaction history service. Its national-cloud table lists global service, US Government L4, and US Government L5 (DoD) as available, and China operated by 21Vianet as not. That row is this API only [S45]."},
        {"k": "Anthropic in government clouds", "t": "As of the page read 15 Oct 2026: unavailable for federal customers in GCC and for any customers in GCC High and DoD. A setting dated 22 July 2026 lets non-federal GCC customers opt in. Other sovereign clouds are excluded [S34]. UNVERIFIED: Microsoft Copilot, Copilot Chat, connectors, Cowork, and Copilot Studio feature parity in GCC, GCC High, and DoD beyond that statement and the Interaction Export API table."}
      ]
    },
    {
      "id": "checks",
      "n": "7",
      "title": "Quick checks and architect prompts",
      "paras": [
        "Before you leave: you can say the new names and the old aliases, name GPT-5 as the October 2026 Chat default from the release notes, name GPT-5.2, GPT-5.5 Instant, and GPT 5.5 Thinking as selector additions, name GPT-5.1 as the latest named declarative-agent model, walk the six cards, name who controls subprocessors, tell sync from federated, and describe both the confirmation card and this pack's workflow gate. Open questions are on the Backlog. The five questions from block 0 are in the Quiz under Copilot deep dive.",
        "Copy a prompt below into a model that has no tenant data. Each prompt tells the model to cite Microsoft Learn and to mark gaps UNVERIFIED."
      ]
    }
  ],
  "modelMap": {
    "cols": ["Surface", "What Learn names, as of October 2026", "Source"],
    "rows": [
      ["Copilot Chat default, as of October 2026", "Read 15 Oct 2026. The release notes still carry the 23 Dec 2025 note: GPT-5 powers Copilot Chat by default. All Copilot Chat experiences run on GPT-5 by default. Copilot routes prompts to a fast model for basic tasks and a reasoning model for multi-step requests. Through the 6 Oct 2026 section, that is the note that sets the Chat default.", "[S57]"],
      ["In the selector", "Copilot Chat is multi-model. 27 Jan 2026: the model selector includes GPT-5.2. Users pick Quick Response for immediate answers or Think Deeper for more thorough reasoning. 19 May 2026: OpenAI's GPT-5.5 Instant is available in Copilot Chat for quick responses, and OpenAI's GPT 5.5 Thinking is available for multistep reasoning. 6 Oct 2026: Regenerate offers Try Again or Switch Model, so a user can see an answer from a different AI model. The Switch Model note does not name the models in that list.", "[S57]"],
      ["Claude, when enabled", "16 Jun 2026: users can select Claude as a model option in Copilot Chat. Microsoft enables Anthropic models on by default for most commercial-cloud customers, excluding EU, EFTA, and UK. Customers in the EU Data Boundary and in the UK have Anthropic disabled by default. In Microsoft Copilot on web, desktop, and mobile, UI indicators show when a Claude model is in use. In Researcher and in Edit with Copilot, users can select Claude. In Copilot Studio, the maker selects the model when creating the agent.", "[S57] [S34]"],
      ["Overview menu", "The Copilot overview describes a real-time router. Its menu is Auto, Quick response, and Think deeper, and the page says those options update as new models become available. The SKU name for the Chat default is on the release notes. The USL article uses the same Auto wording for the everyday-AI router.", "[S10] [S54]"],
      ["Declarative agents", "13 Jan 2026: GPT-5. 24 Feb 2026: upgraded to GPT-5.1 with auto selection between a fast model and a reasoning model. Think deeper adds latency. No later note through 6 Oct 2026 names a replacement.", "[S57]"],
      ["Cowork", "Default is Auto. The models page lists GPT 5.5 (Frontier), hosted in Azure AI Foundry; GPT 5.6 Sol, GPT 5.6 Terra, and GPT 6 Astra, from OpenAI as a subprocessor; Opus 5, Claude Sonnet 5, and Claude Fable 5.1. An admin can turn the Anthropic family off for the whole tenant.", "[S47]"],
      ["Examples, not a menu", "Application card examples: Microsoft-hosted GPT models (Azure OpenAI), Claude Opus and Claude Sonnet, and OpenAI-operated GPT models. USL examples: fair use such as GPT 5.6 and Sonnet, limits such as Opus, and frontier examples Astra and Fable on usage-based billing.", "[S36] [S54]"]
    ]
  },
  "processors": [
    {"k": "Hosted by Microsoft", "t": "Azure OpenAI and Black Forest Labs FLUX are the examples on the models page. They stay under the Microsoft DPA and Product Terms. That page says data does not leave Microsoft [S32]."},
    {"k": "AI subprocessor", "t": "A third party that handles data on Microsoft's behalf under the same DPA. Anthropic is one. OpenAI, when OpenAI operates the model, is a different subprocessor from Azure OpenAI, which Microsoft operates. Admins set both under Copilot, Settings, AI providers operating as Microsoft subprocessors [S32] [S34] [S35]."},
    {"k": "AI independent processor", "t": "Own terms, outside the DPA. An admin turns these on in the Microsoft 365 admin center or the Power Platform admin center. If one is not enabled, Microsoft Online Services do not use that third-party AI. Anthropic models with Data Retention are the explicit case, off by default. The older Anthropic independent-processor setting was decommissioned on 1 May 2026 [S32] [S34] [S53]."},
    {"k": "Mistral is a different toggle", "t": "Enabled under AI providers for other large language models. The admin accepts Mistral's terms. That page does not call Mistral an AI independent processor [S48]."}
  ],
  "steps": [
    {"t": "User", "d": "A person types a prompt in a Microsoft 365 app or in Copilot Chat [S11] [S49]."},
    {"t": "App", "d": "The app hands that prompt to Copilot. The app is Word, Excel, PowerPoint, Outlook, Teams, or the Copilot chat surface, not the model itself [S11] [S10]."},
    {"t": "Grounding", "d": "Copilot preprocesses the prompt with data the user may already open in Microsoft Graph in their tenant. Connectors extend that set: synced items already in Graph, or a live federated read. If web grounding is on, a separate Bing query can run, with user and tenant identifiers removed [S11] [S3] [S4] [S41]."},
    {"t": "Model", "d": "Copilot sends the grounded prompt to a model [S11]. As of October 2026, the release notes say GPT-5 powers Copilot Chat by default and routes between a fast model and a reasoning model. The selector also offers GPT-5.2 (Quick Response or Think Deeper), OpenAI's GPT-5.5 Instant, GPT 5.5 Thinking, and Claude where Anthropic is enabled. UI indicators show when a Claude model is in use. Declarative agents: GPT-5.1 with auto selection, from the 24 Feb 2026 note [S57] [S34]."},
    {"t": "Safety", "d": "After the model replies, Copilot post-processes: more Graph grounding, responsible AI checks, and security, compliance, and privacy checks [S36]. Harmful content, protected material, and prompt-injection blocks are part of the documented protections [S33]."},
    {"t": "Response", "d": "The response returns to the app for the user to review [S11]. Prompts and responses can be logged for Purview, including DSPM for AI [S44] [S49]."}
  ],
  "family": {
    "cols": ["Product", "What it is", "How you pay or control it", "Source"],
    "rows": [
      ["Microsoft Copilot", "Work assistant in Microsoft 365 apps. Formerly Microsoft 365 Copilot.", "Overview still names Chat (Basic), Microsoft 365 Copilot (Basic), and Microsoft 365 Copilot (Premium). Premium adds work-data grounding through Graph and Work IQ.", "[S10] [S32] [S33]"],
      ["Microsoft Copilot Chat", "Chat surface. Formerly Microsoft 365 Copilot Chat.", "Enterprise Data Protection for Copilot Chat is documented at no extra cost. Work-data grounding is the Premium experience. Chat (Basic) on the overview is web data only.", "[S41] [S49] [S10]"],
      ["Copilot Studio", "Low-code and pro-code place to build agents.", "Makers select a model at creation time. Separate from GitHub Copilot.", "[S22] [S34]"],
      ["GitHub Copilot", "Coding assistant in the GitHub and IDE surfaces.", "Separate license and product from Microsoft Copilot.", "[S12]"],
      ["Security Copilot", "Security product for investigating threats in natural language.", "Its own Learn set. License and gov-cloud parity against Microsoft Copilot are UNVERIFIED here.", "[S50]"],
      ["Copilot Cowork", "Carries out tasks across the Microsoft 365 environment.", "Usage-based billing. Overview: requires Microsoft 365 Copilot (Premium). Credits article: Copilot license required. Model menu defaults to Auto. Named models as of 15 Oct 2026 are in the Models block.", "[S10] [S42] [S47] [S54]"],
      ["Copilot Code", "Frontier coding experience. Helps enterprise users build, understand, and automate code with natural language and organizational context. The application card describes a model choice; do not treat that card as a frozen SKU list.", "Usage-based billing, same Premium and Copilot-license pattern as Cowork. Whether this is the same product as GitHub Copilot is UNVERIFIED.", "[S10] [S52] [S42] [S54]"],
      ["Researcher", "Agent in Copilot that can use Claude. Federated write, update, and delete are not supported here.", "Available inside Copilot experiences. Not a separate integration bus.", "[S37] [S4]"]
    ]
  },
  "prompts": [
    {
      "title": "Walk one prompt",
      "text": "You are briefing an enterprise architect. No tenant names or secrets.\nTrace this request through Microsoft Copilot: <one synthetic prompt>.\nSteps: user, app, grounding (Graph, connectors, optional web), LLM, post-processing, response.\nFor each step cite a Microsoft Learn page. If the page does not say it, write UNVERIFIED.\nEnd with what would change if the request created or updated a record in another system.\nSources to prefer: Copilot architecture, the Copilot application card, enterprise data protection, federated connectors overview."
    },
    {
      "title": "Model and subprocessor review",
      "text": "Date your answer as of October 2026. Do not invent model names.\nFrom Microsoft Learn only, explain for a commercial tenant:\n1. Copilot Chat default on the release notes: GPT-5 as of 23 Dec 2025, with fast versus reasoning routing. Say whether a later note through 6 Oct 2026 sets a different default.\n2. Selector additions: GPT-5.2 (27 Jan 2026, Quick Response or Think Deeper), OpenAI's GPT-5.5 Instant and GPT 5.5 Thinking (19 May 2026), and Switch Model (6 Oct 2026).\n3. Claude: the 16 Jun 2026 note, where Anthropic is enabled, and the UI indicator when a Claude model is in use.\n4. Declarative agents: the latest release note that names a model.\n5. Cowork: Auto, and the models listed on the Cowork models page, including which are Anthropic and who can turn that family off.\n6. Models hosted by Microsoft vs AI subprocessors vs AI independent processors.\nKeep the overview menu (Auto, Quick response, Think deeper) on its own page. Cite the release notes, ai-models-overview, the Copilot overview, the Cowork models page, and connect-to-ai-subprocessor. Mark anything those pages do not say as UNVERIFIED."
    },
    {
      "title": "Write-back design",
      "text": "Synthetic system: a project tracker. No real tenant.\nDecide synced connector vs federated connector vs a workflow API.\nIf the design writes, describe the native Copilot confirmation card (Allow once, Allow for conversation, Always allow, Cancel) and a separate workflow approval owned outside the prompt.\nState that Researcher does not perform federated writes, if you are using that agent.\nCite the federated connectors overview. Mark government-cloud availability UNVERIFIED unless you have a government service description."
    },
    {
      "title": "Trust boundary",
      "text": "List the trust boundary for Microsoft Copilot in a commercial tenant:\ntenant Graph permissions, sensitivity labels, SharePoint Advanced Management, Enterprise Data Protection, Purview DSPM for AI, and the Interaction Export API.\nSay what the Interaction Export national-cloud table covers and what it does not.\nFor Anthropic, separate federal GCC, non-federal GCC, GCC High, and DoD using the Anthropic subprocessor page.\nFor every other GCC, GCC High, and DoD feature, write UNVERIFIED unless you cite a government service description.\nNo tenant data."
    }
  ],
  "open": []
};

DATA.backlog = [
  {"area": "Government clouds", "where": "#/copilot/trust", "t": "Feature parity for Microsoft Copilot, connectors, Cowork, and Copilot Studio in GCC, GCC High, and DoD, beyond the Anthropic page (federal GCC, GCC High, and DoD excluded; non-federal GCC opt-in as of 22 July 2026) and the Interaction Export API's own national-cloud table [S34] [S45] [S27]."},
  {"area": "Models", "where": "#/copilot/models", "t": "The release notes, through 6 Oct 2026, still say GPT-5 powers Copilot Chat by default. The Copilot overview menu is Auto, Quick response, and Think deeper, and that page leaves the SKU unnamed. Whether Auto on the overview is the same routing as the 23 Dec 2025 note is the open cross-page gap [S57] [S10]."},
  {"area": "Agents", "where": "#/copilot/agents", "t": "Whether a declarative-agent model newer than the 24 Feb 2026 GPT-5.1 note shipped without a release note. The models overview says some model changes appear only on the Copilot blog [S57] [S32]."},
  {"area": "Family", "where": "#/copilot/family", "t": "Whether Copilot Code (Frontier) is the same product as GitHub Copilot. The credits article lists Code separately from any GitHub SKU [S52] [S42]."},
  {"area": "Trust", "where": "#/copilot/trust", "t": "Which DSPM experience a tenant is on. The classic DSPM for AI article points at a newer DSPM [S44]."},
  {"area": "Connectors", "where": "#/views/connectors", "t": "A named connector in GCC, GCC High, or DoD. The build overview lists synced availability and says federated availability varies by connector. That is not a government service description for a named connector [S2] [S27]."},
  {"area": "Identity", "where": "#/views/identity", "t": "Restricted SharePoint Search or SharePoint Advanced Management parity in a named GCC, GCC High, or DoD tenant. Restricted Content Discovery rules beyond the pointer on the RSS page [S55] [S27]."},
  {"area": "Pack rule", "where": "#/views/conceptual", "t": "Governed AI Integration Gateway is a label on the study deck. The architecture article does not name that product. Do not teach it as a Microsoft service [S11]."}
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
      },
      {
        "p": "An administrator grants a connector app permission for every user",
        "a": 0,
        "why": "Tenant-wide admin consent is an Entra decision.",
        "src": "S30"
      },
      {
        "p": "A workflow variable holds a personal access token for the build",
        "a": 3,
        "why": "A PAT in CI is the credential to retire.",
        "src": "S24"
      },
      {
        "p": "Entra creates and disables accounts in a target app",
        "a": 0,
        "why": "That provisioning uses Entra, often over SCIM.",
        "src": "S23"
      },
      {
        "p": "A service posts a check run and should not use a user token",
        "a": 1,
        "why": "Check runs from a service use a GitHub App.",
        "src": "S17"
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

DATA.nblmDecks = {
  "gap": {
    "title": "Gap pass 2026-10-02",
    "cards": [
      {
        "front": "What is grounding in the context of Microsoft 365 Copilot?",
        "back": "Grounding is the process of referencing authoritative enterprise context, documents, and relationships (via Microsoft Graph or MCP) to inform LLM responses without exporting data."
      },
      {
        "front": "What is the primary function of Data Loss Prevention (DLP) within the enterprise control plane?",
        "back": "DLP enforces policy controls across Microsoft Purview to prevent sensitive data exposure, unauthorized transfer, or leakage during user and AI interactions."
      },
      {
        "front": "What causes oversharing in Copilot responses, and how is it mitigated?",
        "back": "Oversharing occurs when indexed content fails to correctly model source permissions. It is mitigated by enforcing strict permission fidelity in connector Access Control Lists (ACLs)."
      },
      {
        "front": "How do sensitivity labels govern AI data access?",
        "back": "Sensitivity labels classify enterprise content and are automatically inherited and respected by Microsoft Graph, Work IQ, and Copilot APIs to restrict unauthorized access."
      },
      {
        "front": "What is permission trimming in Microsoft Graph and Copilot APIs?",
        "back": "Permission trimming automatically filters out items from search and AI responses that the signed-in user does not have explicit permission to view in the underlying source system."
      },
      {
        "front": "What are semantic labels in a synced connector schema?",
        "back": "Semantic labels (such as title, url, or iconUrl) are schema annotations applied to external items to improve ranking, filtering, and Copilot retrieval quality."
      },
      {
        "front": "How must a legal hold be handled across AI retrieval layers?",
        "back": "Legal hold and retention requirements must propagate from the system of record directly into Graph indexes, caches, downstream stores, and AI retrieval layers."
      },
      {
        "front": "What is the purpose of an audit log in Copilot and agent governance?",
        "back": "Audit logs record prompts, responses, tool calls, parameters, user identities, and decision outcomes into SIEM/SOAR pipelines for security monitoring and compliance."
      },
      {
        "front": "What is the architectural role of an MCP gateway?",
        "back": "An MCP gateway centralizes tool discovery, enforces tool policies, authenticates requests, and audits tool execution between AI agents and external services."
      },
      {
        "front": "What is a webhook in the context of integration architecture?",
        "back": "A webhook is an HTTP callback mechanism that enables near-real-time event-driven notifications when resources change in platforms like GitHub or Microsoft Graph."
      },
      {
        "front": "Why is API throttling enforced by Microsoft Graph?",
        "back": "Throttling limits API request frequency per tenant to preserve platform stability, manage traffic spikes, and ensure predictable service performance."
      },
      {
        "front": "What is admin consent in Microsoft 365 Copilot connector setup?",
        "back": "Admin consent is explicit administrative authorization granted during app registration to allow custom connectors or APIs to access designated Microsoft Graph permissions."
      },
      {
        "front": "What is the integration role of SharePoint in the platform?",
        "back": "SharePoint serves as the primary system of record for governing, retaining, publishing, and retrieving office documents and broad enterprise knowledge."
      },
      {
        "front": "What is the recommended architectural role for an IT Service Management (ITSM) system?",
        "back": "An ITSM system serves as the system of record for controlling operational risk, authorization workflows, change records, and incident lifecycles."
      },
      {
        "front": "How does ServiceNow integrate with Microsoft 365 Copilot?",
        "back": "ServiceNow integrates via federated MCP connectors for live incident/ticket management, or via synced connectors to index knowledge base articles into Graph."
      },
      {
        "front": "What is the integration principle for a Customer Relationship Management (CRM) system?",
        "back": "A CRM platform must remain the authoritative system of record for accounts and cases, exposed to AI via governed APIs or connectors rather than duplicated stores."
      },
      {
        "front": "What is a coding agent within the GitHub Copilot ecosystem?",
        "back": "A coding agent is an AI entity (such as GitHub Copilot in Agent mode) that evaluates code context, calls approved tools via MCP, and automates multi-step development tasks."
      },
      {
        "front": "What is Government Community Cloud (GCC), and how does connector support apply?",
        "back": "GCC is a US government cloud deployment tier that supports synced connectors out of the box, though federated MCP connector availability varies per implementation."
      },
      {
        "front": "How does connector support in GCC High compare to standard commercial clouds?",
        "back": "GCC High supports synced connectors for indexing knowledge, but availability for federated (MCP-based) connectors varies and must be verified per connector."
      },
      {
        "front": "What is the status of Copilot connectors in Department of Defense (DoD) environments?",
        "back": "DoD environments support baseline synced Copilot connectors, while availability for individual federated connectors varies."
      },
      {
        "front": "What is the key functional difference between synced and federated connectors in Microsoft 365 Copilot?",
        "back": "Synced connectors crawl and index external content into Microsoft Graph, whereas federated connectors fetch live content at request time via MCP without storing data in Graph."
      },
      {
        "front": "Which architectural core requirement must every item indexed by a synced connector contain?",
        "back": "An Access Control List (ACL) that maps source-system entitlements directly to the Microsoft 365 user context to ensure permission fidelity."
      },
      {
        "front": "What open protocol forms the underlying framework for federated Copilot connectors?",
        "back": "Model Context Protocol (MCP)."
      },
      {
        "front": "What is the Model Context Protocol (MCP)?",
        "back": "MCP is an open standard that defines how application clients safely share context, prompts, resources, and tools with large language models."
      },
      {
        "front": "What role does Microsoft Graph play in Microsoft's Digital-Work Platform?",
        "back": "Microsoft Graph serves as the unified API and data plane for accessing Microsoft 365 resources, tenant indexes, and external synced items."
      },
      {
        "front": "What are the three operational planes of the recommended Copilot Integration Enablement Layer?",
        "back": "1. Knowledge plane (Search/Graph index & synced connectors)\n2. Transaction plane (APIs, workflows, & events)\n3. Control plane (Identity, access, secrets, policy, & audit)"
      },
      {
        "front": "Why should enterprise architectures avoid copying data into secondary indexes solely for AI access?",
        "back": "To prevent creating duplicate systems of record, which leads to stale data, permission drift, compliance risks, and audit failures."
      },
      {
        "front": "Why is a GitHub App preferred over a broad OAuth app for server-to-server third-party integrations?",
        "back": "GitHub Apps use fine-grained repository permissions, scoped installation access, and short-lived tokens rather than acting on user-delegated broad credentials."
      },
      {
        "front": "What is the primary function of the GitHub Cloud Knowledge connector?",
        "back": "It indexes Markdown (.md) and text (.txt) files from GitHub.com repositories into Microsoft Graph so productivity users can query engineering docs in Copilot."
      },
      {
        "front": "What is the purpose of the Microsoft Work IQ API?",
        "back": "It exposes the intelligence layer behind Microsoft 365 Copilot, allowing custom apps to securely reason over M365 work data while preserving permissions and compliance boundaries."
      },
      {
        "front": "Under which REST namespace are Microsoft 365 Copilot APIs hosted?",
        "back": "Under the Microsoft Graph namespace (graph.microsoft.com/v1.0/copilot and graph.microsoft.com/beta/copilot)."
      },
      {
        "front": "What is dynamic tooling in Microsoft 365 Copilot federated connectors?",
        "back": "It allows Copilot to dynamically select and execute tools exposed by an MCP server at runtime to fetch live facts or execute actions."
      },
      {
        "front": "What choices does a user have when prompted to confirm a write, update, or delete action in a federated connector?",
        "back": "Allow once, Allow for conversation, Always allow, or Cancel."
      },
      {
        "front": "In an event-driven GitHub-to-ITSM pattern, which component enforces branch protection gates?",
        "back": "GitHub Check Runs and status checks updated by API/event pipelines, not the LLM."
      },
      {
        "front": "How do the M365 platform and GitHub platform differ in architectural focus?",
        "back": "Microsoft 365 is a digital-work platform centered on Microsoft Graph, while GitHub is a software-delivery platform centered on code repositories, webhooks, and CI/CD."
      },
      {
        "front": "What is the key architectural correction regarding Copilot's place in integration design?",
        "back": "Copilot is a user-facing intelligence and orchestration layer, not the integration layer itself."
      },
      {
        "front": "When should an enterprise build a custom synced connector instead of using a prebuilt connector?",
        "back": "When the source system is proprietary, permission semantics are specialized, or unique domain metadata must be mapped precisely."
      },
      {
        "front": "How can the GitHub MCP server be accessed remotely in VS Code?",
        "back": "Through Copilot Chat in VS Code without local setup, granting access to remote-only GitHub toolsets."
      },
      {
        "front": "Why is toolset customization recommended for the GitHub MCP server?",
        "back": "Enabling only required toolsets improves tool selection accuracy, enhances security, and reduces token consumption in the context window."
      },
      {
        "front": "What mechanism protects public and GHAS-enabled private repositories against exposed keys during GitHub MCP server interactions?",
        "back": "Push protection, which scans and blocks secrets in AI-generated responses and agent actions."
      },
      {
        "front": "How should agent architecture defend against prompt injection from retrieved external content?",
        "back": "By separating retrieved content from system instructions, validating parameters, allowlisting tools, and enforcing policy outside the model."
      },
      {
        "front": "What is the function of the Microsoft 365 Copilot Interaction Export API?",
        "back": "It allows compliance solutions to capture and archive user interactions with Copilot across M365 applications for audit requirements."
      },
      {
        "front": "What data does the Meeting Insights API extract from Microsoft Teams meetings?",
        "back": "AI-generated meeting notes, action items, decisions, and discussion topics."
      },
      {
        "front": "What is wiqd (Work IQ Dev Tools) used for?",
        "back": "It is a command-line tool that automates the full lifecycle (scaffold, validate, provision, package, publish, monitor) of declarative agents."
      },
      {
        "front": "What is the main responsibility of the Knowledge Plane in enterprise integration?",
        "back": "To maintain curated, indexed information that is searchable and retrievable for humans and AI models."
      },
      {
        "front": "What is the main responsibility of the Transaction Plane in enterprise integration?",
        "back": "To provide controlled APIs, webhooks, event queues, and workflows that safely execute state-changing actions across systems of record."
      },
      {
        "front": "What is the main responsibility of the Control Plane in enterprise integration?",
        "back": "To govern identity, access policies, secrets, conditional access, audit telemetry, and API rate limits across platforms."
      },
      {
        "front": "Which protocols manage user identity and SSO in the Enterprise Identity Plane?",
        "back": "OAuth 2.0 / OpenID Connect (OIDC) and SAML SSO via Microsoft Entra ID."
      },
      {
        "front": "What role does System for Cross-domain Identity Management (SCIM) play in enterprise security?",
        "back": "It automates user lifecycle provisioning and deprovisioning (joiner-mover-leaver) across systems."
      },
      {
        "front": "Why should Personal Access Tokens (PATs) be avoided for durable service integration?",
        "back": "Because they are tied to individual human identities and lack automated rotation and granular app-level permissions."
      },
      {
        "front": "When should delegated user-context authorization be preferred over application-only credentials?",
        "back": "When retrieval must evaluate individual dynamic user entitlements so users only receive data they are personally authorized to see."
      },
      {
        "front": "What role do the GitHub Checks API and Deployment APIs play in release governance?",
        "back": "They post automated test results, security findings, quality gates, and deployment state directly into pull requests to enforce branch protection."
      },
      {
        "front": "Which four essential properties should an externalItem schema definition include for synced connectors?",
        "back": "1. Content / extracted text\n2. Metadata (title, URL, author, timestamps)\n3. Access Control List (ACL)\n4. Semantic labels"
      },
      {
        "front": "What is the scope of self-serve sync connectors in Microsoft 365 Copilot?",
        "back": "They synchronize recent external content scoped strictly to an individual user using that user's own credentials and consent."
      },
      {
        "front": "What is the primary use case for Microsoft Graph Data Connect?",
        "back": "Large-scale, governed batch extraction of Microsoft 365 datasets into Azure data platforms for analytics and data engineering."
      },
      {
        "front": "How do Microsoft Graph change notifications function?",
        "back": "They send webhook callbacks to registered listeners when monitored resources mutate, triggering authorized delta fetches."
      },
      {
        "front": "How does the GitHub Server Knowledge connector differ mechanically from the GitHub Cloud Knowledge connector?",
        "back": "The GitHub Server Knowledge connector uses an on-premises Microsoft Graph connector agent to run git clone operations against GitHub Enterprise Server instances."
      },
      {
        "front": "Where can a user review or reset write/delete tool approvals for federated connectors in Microsoft 365 Copilot?",
        "back": "In Copilot under Settings > Sources by selecting the connector and expanding the Tools section."
      },
      {
        "front": "What are the exit criteria for Block 8 (Design Review) in the 420-minute deep-dive schedule?",
        "back": "Deliver the teach-back presentation and answer the quiz bank without notes."
      }
    ]
  }
};
