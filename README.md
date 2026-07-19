# Awesome Automation 3.0

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![License: CC0 1.0](https://img.shields.io/badge/license-CC0--1.0-blue.svg)](LICENSE)

A curated list of open-source building blocks for **Automation 3.0**: describe the outcome, then let agents plan, use tools, respond to events, remember context, and verify the result.

Automation 3.0 moves the primary interface from drawing workflows to expressing intent. It complements deterministic automation rather than replacing it: agents handle ambiguity while schedulers, policies, and durable runtimes keep execution reliable.

> **Prompt it. Trigger it. Let the agent operate it.**

Explore the concept at [automation-3.apipoj.chatgpt.site](https://automation-3.apipoj.chatgpt.site/).

## What is Automation 3.0?

| Generation | Primary interface | Execution model |
| --- | --- | --- |
| Automation 1.0 | Code, scripts, rules, cron | Deterministic instructions |
| Automation 2.0 | Visual nodes and connectors | Predefined workflow graphs |
| Automation 3.0 | Prompts, goals, policies, context | Agents plan, act, observe, and adapt |

A practical Automation 3.0 system usually combines five layers:

1. **Intent** — a prompt, goal, or policy describes the desired outcome.
2. **Trigger** — time, webhook, event, message, or human request starts the work.
3. **Agent** — a model plans and chooses the next action.
4. **Tools and memory** — APIs, MCP servers, browsers, code, and context connect the agent to the world.
5. **Control** — durable execution, observability, evaluation, approvals, and guardrails make the automation dependable.

## Contents

- [Start here](#start-here)
- [Agent runtimes and assistants](#agent-runtimes-and-assistants)
- [Prompt-native platforms](#prompt-native-platforms)
- [Agent frameworks and orchestration](#agent-frameworks-and-orchestration)
- [Schedules, triggers, and durable execution](#schedules-triggers-and-durable-execution)
- [Workflow automation bridges](#workflow-automation-bridges)
- [Tools, MCP, and sandboxes](#tools-mcp-and-sandboxes)
- [Browser and computer use](#browser-and-computer-use)
- [Memory and context](#memory-and-context)
- [Observability and evaluation](#observability-and-evaluation)
- [Safety and human approval](#safety-and-human-approval)
- [Concepts and guides](#concepts-and-guides)
- [Contributing](#contributing)

## Start here

If you want to assemble a first Automation 3.0 stack:

- **Run a personal agent:** [OpenClaw](https://github.com/openclaw/openclaw) or [Hermes Agent](https://github.com/NousResearch/hermes-agent).
- **Build a typed agent:** [Pydantic AI](https://github.com/pydantic/pydantic-ai), [Google ADK](https://github.com/google/adk-python), or [LangGraph](https://github.com/langchain-ai/langgraph).
- **Add triggers and reliability:** [n8n](https://github.com/n8n-io/n8n), [Trigger.dev](https://github.com/triggerdotdev/trigger.dev), or [Temporal](https://github.com/temporalio/temporal).
- **Connect tools:** [MCP Servers](https://github.com/modelcontextprotocol/servers), [FastMCP](https://github.com/jlowin/fastmcp), or [Composio](https://github.com/ComposioHQ/composio).
- **Observe the agent:** [Langfuse](https://github.com/langfuse/langfuse), [Phoenix](https://github.com/Arize-ai/phoenix), or [Opik](https://github.com/comet-ml/opik).

## Agent runtimes and assistants

- [Aider](https://github.com/Aider-AI/aider) - Terminal-based AI pair programming that can edit a local codebase and work with Git.
- [Codex](https://github.com/openai/codex) - Open-source coding agent designed to read, modify, and run code in a local environment.
- [Hermes Agent](https://github.com/NousResearch/hermes-agent) - Self-improving agent runtime with persistent memory, reusable skills, and messaging integrations.
- [Letta](https://github.com/letta-ai/letta) - Stateful agent platform centered on long-running memory and context management.
- [OpenClaw](https://github.com/openclaw/openclaw) - Personal AI assistant that runs across operating systems, messaging channels, tools, and skills.
- [OpenCode](https://github.com/anomalyco/opencode) - Open-source coding agent with terminal and desktop interfaces.
- [OpenHands](https://github.com/All-Hands-AI/OpenHands) - Platform for agents that perform software-development tasks through code, terminals, and browsers.
- [Plandex](https://github.com/plandex-ai/plandex) - Terminal coding agent for planning and executing larger, multi-file development tasks.

## Prompt-native platforms

- [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) - Platform for creating, deploying, and managing continuous AI agents.
- [Dify](https://github.com/langgenius/dify) `†` - Self-hostable platform for building agentic applications, retrieval pipelines, and prompt workflows.
- [Flowise](https://github.com/FlowiseAI/Flowise) - Visual platform for composing LLM and agent applications, useful as a bridge from node workflows to agent execution.
- [Langflow](https://github.com/langflow-ai/langflow) - Low-code platform for building and serving agentic applications and tool-connected flows.

## Agent frameworks and orchestration

- [Agno](https://github.com/agno-agi/agno) - Python framework and runtime for multimodal agents, teams, tools, memory, and knowledge.
- [AutoGen](https://github.com/microsoft/autogen) - Microsoft framework for event-driven, multi-agent applications.
- [CrewAI](https://github.com/crewAIInc/crewAI) - Framework for coordinating role-based agents, crews, and event-driven flows.
- [Google Agent Development Kit](https://github.com/google/adk-python) - Code-first Python toolkit for building, evaluating, and deploying agents.
- [LangChain](https://github.com/langchain-ai/langchain) - Component framework and integration ecosystem for building LLM and agent applications.
- [LangGraph](https://github.com/langchain-ai/langgraph) - Stateful orchestration framework for long-running agents, graphs, persistence, and human-in-the-loop control.
- [LlamaIndex](https://github.com/run-llama/llama_index) - Data and agent framework for context-augmented applications, tools, and workflows.
- [Mastra](https://github.com/mastra-ai/mastra) - TypeScript framework for agents, workflows, retrieval, memory, evaluation, and observability.
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) - Lightweight Python SDK for agents, handoffs, guardrails, sessions, and tracing.
- [Pydantic AI](https://github.com/pydantic/pydantic-ai) - Typed Python agent framework with structured outputs, tools, graphs, evaluation, and MCP support.
- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) - Microsoft SDK for integrating models, plugins, memory, processes, and multi-agent patterns.
- [smolagents](https://github.com/huggingface/smolagents) - Minimal Hugging Face library for tool-using and code-executing agents.

## Schedules, triggers, and durable execution

- [Dagster](https://github.com/dagster-io/dagster) - Data orchestrator with asset-aware scheduling, sensors, observability, and testing.
- [Hatchet](https://github.com/hatchet-dev/hatchet) - Durable task orchestration platform for event-driven workers and agent workflows.
- [Inngest](https://github.com/inngest/inngest) `†` - Event-driven durable execution for background jobs, functions, and step-based AI workflows.
- [Prefect](https://github.com/PrefectHQ/prefect) - Python orchestration engine for scheduled, observable, retryable workflows.
- [Temporal](https://github.com/temporalio/temporal) - Durable execution platform for workflows that must survive failures and resume safely.
- [Trigger.dev](https://github.com/triggerdotdev/trigger.dev) - TypeScript platform for long-running jobs, schedules, webhooks, retries, and AI tasks.

## Workflow automation bridges

- [Activepieces](https://github.com/activepieces/activepieces) - Self-hostable automation platform with visual flows, integrations, and AI pieces.
- [Kestra](https://github.com/kestra-io/kestra) - Event-driven orchestration platform for declarative workflows, schedules, and operational automation.
- [n8n](https://github.com/n8n-io/n8n) `†` - Fair-code workflow automation platform with integrations, triggers, code steps, and AI-agent nodes.
- [Node-RED](https://github.com/node-red/node-red) - Flow-based programming tool for wiring devices, APIs, events, and services.
- [Windmill](https://github.com/windmill-labs/windmill) - Developer platform for scripts, workflows, schedules, webhooks, apps, and AI agents.

## Tools, MCP, and sandboxes

- [Composio](https://github.com/ComposioHQ/composio) - Tool and authentication layer that connects agents to external applications and APIs.
- [E2B](https://github.com/e2b-dev/E2B) - Secure cloud sandboxes for agents that need to execute code and operate tools.
- [FastMCP](https://github.com/jlowin/fastmcp) - Python framework for building and consuming Model Context Protocol servers and clients.
- [MCP Servers](https://github.com/modelcontextprotocol/servers) - Reference Model Context Protocol servers and examples for exposing tools and data to agents.

## Browser and computer use

- [browser-use](https://github.com/browser-use/browser-use) - Python library that lets agents navigate and operate websites through a browser.
- [Skyvern](https://github.com/Skyvern-AI/skyvern) - Browser automation platform that combines vision, language models, and deterministic controls.
- [Stagehand](https://github.com/browserbase/stagehand) - Browser automation framework mixing natural-language actions with Playwright-style control.

## Memory and context

- [Graphiti](https://github.com/getzep/graphiti) - Temporal knowledge-graph framework for agent memory that changes over time.
- [Mem0](https://github.com/mem0ai/mem0) - Memory layer for agents and assistants across sessions and applications.

## Observability and evaluation

- [AgentOps](https://github.com/AgentOps-AI/agentops) - Monitoring, tracing, cost tracking, and evaluation for agent runs.
- [Langfuse](https://github.com/langfuse/langfuse) - Open-source LLM engineering platform for traces, prompts, evaluations, and metrics.
- [Opik](https://github.com/comet-ml/opik) - Evaluation and observability platform for LLM applications and agent workflows.
- [Phoenix](https://github.com/Arize-ai/phoenix) - Open-source AI observability and evaluation platform with tracing and experiments.

## Safety and human approval

- [HumanLayer](https://github.com/humanlayer/humanlayer) - Human-in-the-loop approval and communication layer for high-impact agent actions.
- [Invariant](https://github.com/invariantlabs-ai/invariant) - Guardrails, policy monitoring, testing, and security tooling for agentic systems.

## Concepts and guides

- [Automation 3.0](https://automation-3.apipoj.chatgpt.site/) - The concept site for prompt-native automation in the agent-first era.
- [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) - Practical patterns for prompt chains, routing, parallelization, orchestrator-workers, and evaluator-optimizer loops.
- [Model Context Protocol](https://modelcontextprotocol.io/) - Open protocol for connecting AI applications to tools and data sources.
- [Software 3.0](https://www.software-3.com/) - The Software 3.0 concept that motivates prompt-native software and agent execution.

## License note

Most entries are open source. Projects marked `†` use a fair-code, source-available, or otherwise non-OSI license for some or all of the listed repository. Always review the current license and commercial-use terms before adopting a project.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. The standard is curation, not completeness: a project should make prompt-native automation meaningfully easier, safer, or more reliable.

This list is released under [CC0 1.0](LICENSE). Project names and descriptions belong to their respective maintainers.
