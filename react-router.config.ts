import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode (no runtime server) with build-time prerendering of all static
  // routes. Each route emits a real HTML file at build time so AI crawlers
  // (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, AppleBot — none of which
  // execute JavaScript) and social-card scrapers (Slack, Discord, LinkedIn,
  // iMessage) see populated <head> and content.
  ssr: false,
  prerender: true,
  appDirectory: "src",
} satisfies Config;
