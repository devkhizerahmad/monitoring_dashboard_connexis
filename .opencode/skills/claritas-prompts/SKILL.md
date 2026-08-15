---
name: claritas-prompts
description: Leaked system prompts from ChatGPT, Claude, Gemini, Cursor, Windsurf, Devin, Replit, and 25+ AI tools. Use when building AI agents, optimizing system prompts, or understanding how major AI tools work. Trigger on: system prompt, agent config, AI behavior, prompt engineering, leaked prompts, ai-prompts.
---

# CL4R1T4S Prompts - Project Skill

## Quick Reference

| AI Tool | Folder | Use Case |
|---------|--------|----------|
| Claude | `ANTHROPIC/` | Helpful, harmless, honest AI |
| ChatGPT | `OPENAI/` | General assistant patterns |
| Gemini | `GOOGLE/` | Multi-modal capabilities |
| Cursor | `CURSOR/` | AI code editor |
| Windsurf | `WINDSURF/` | Codeium's AI editor |
| Devin | `DEVIN/` | Autonomous coding agent |
| Replit | `REPLIT/` | Collaborative coding |
| Lovable | `LOVABLE/` | App generation |
| Manus | `MANUS/` | AI agent framework |
| Grok | `XAI/` | xAI's assistant |
| Perplexity | `PERPLEXITY/` | Search-augmented AI |
| Bolt | `BOLT/` | Full-stack generation |

## How to Use

### 1. Access Global Skills
```
@ai-prompts CURSOR/README.md
@ai-prompts ANTHROPIC/README.md
@ai-prompts DEVIN/README.md
```

### 2. Build Better Agents
Combine patterns from multiple tools:
- **Cursor**: Context-aware coding with file tree
- **Devin**: Plan → Execute → Test → Iterate loop
- **Claude**: Thoughtful reasoning before actions
- **Replit**: Live feedback and error handling

### 3. Optimize System Prompts
Study how each tool structures its prompts:
- Role definition
- Context inclusion
- Instruction hierarchy
- Output formatting

## Key Patterns

### From Cursor
- File tree context
- Git status awareness
- Project-specific conventions

### From Devin
- Planning phase
- Self-verification
- Iterative refinement

### From Claude
- Constitutional AI principles
- Helpful, harmless, honest framework
- Measured, thoughtful responses

### From ChatGPT
- Plugin/tool integration
- Multi-modal task handling
- General-purpose patterns

### From Replit
- Live error handling
- Collaborative coding
- Runtime context

## Example: Creating an Agent

```markdown
# Use patterns from AI tools

1. **Structure** (from Cursor):
   - Include project context
   - Reference file structure

2. **Process** (from Devin):
   - Plan first
   - Execute with code
   - Test your output
   - Iterate if needed

3. **Reasoning** (from Claude):
   - Explain approach
   - Consider edge cases
   - Write clean code
```

## Location

Global skills: `C:\Users\Administrator\.config\opencode\skills\`
Project skills: `.opencode/skills/`