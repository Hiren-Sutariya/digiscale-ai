import React from 'react';

// 100% Authentic Official Brand Vector SVG & High-Res Logos
export const OFFICIAL_TOOL_LOGOS = {
  shopify: 'https://cdn.simpleicons.org/shopify/96BF48',
  whatsapp: 'https://cdn.simpleicons.org/whatsapp/25D366',
  gmail: 'https://cdn.simpleicons.org/gmail/EA4335',
  googlecalendar: 'https://cdn.simpleicons.org/googlecalendar/4285F4',
  googledrive: 'https://cdn.simpleicons.org/googledrive/4285F4',
  googlesheets: 'https://cdn.simpleicons.org/googlesheets/0F9D58',
  zapier: 'https://cdn.simpleicons.org/zapier/FF4F00',
  n8n: 'https://cdn.simpleicons.org/n8n/FF6D5A',
  make: 'https://cdn.simpleicons.org/make/6D00F6',
  openai: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
  claude: 'https://cdn.simpleicons.org/anthropic/D97757',
  hubspot: 'https://cdn.simpleicons.org/hubspot/FF7A59',
  salesforce: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
  slack: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
  notion: 'https://cdn.simpleicons.org/notion/000000',
  airtable: 'https://cdn.simpleicons.org/airtable/18BFFF',
  zendesk: 'https://cdn.simpleicons.org/zendesk/03363D',
  klaviyo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/klaviyo.svg',
  stripe: 'https://cdn.simpleicons.org/stripe/635BFF',
  quickbooks: 'https://cdn.simpleicons.org/quickbooks/2CA01C',
  trello: 'https://cdn.simpleicons.org/trello/0052CC',
  asana: 'https://cdn.simpleicons.org/asana/F95738',
  meta: 'https://cdn.simpleicons.org/meta/0081FB',
  linkedin: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg',
};

export const ZapierIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.zapier} alt="Zapier" className={`${className} object-contain`} />
);

export const N8nIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.n8n} alt="n8n" className={`${className} object-contain`} />
);

export const MakeIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.make} alt="Make" className={`${className} object-contain`} />
);

export const OpenAIIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.openai} alt="OpenAI" className={`${className} object-contain`} />
);

export const HubSpotIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.hubspot} alt="HubSpot" className={`${className} object-contain`} />
);

export const SlackIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.slack} alt="Slack" className={`${className} object-contain`} />
);

export const GoogleSheetsIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.googlesheets} alt="Google Sheets" className={`${className} object-contain`} />
);

export const SalesforceIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.salesforce} alt="Salesforce" className={`${className} object-contain scale-110`} />
);

export const ClaudeIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.claude} alt="Claude AI" className={`${className} object-contain`} />
);

export const NotionIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.notion} alt="Notion" className={`${className} object-contain`} />
);

export const ShopifyIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.shopify} alt="Shopify" className={`${className} object-contain`} />
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <img src={OFFICIAL_TOOL_LOGOS.whatsapp} alt="WhatsApp" className={`${className} object-contain`} />
);
