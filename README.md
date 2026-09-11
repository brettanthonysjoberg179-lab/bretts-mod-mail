# Brett's Mod Mail

Mod mail reader and responder — triage, template replies, and auto-respond.

## Features

- Read and respond to mod mail messages
- Template-based quick replies
- Auto-respond rules for common queries
- Message triage and status tracking

## Installation

1. Go to [Reddit's Developer Platform](https://developers.reddit.com/)
2. Create a new app and upload this package
3. Install on your subreddit

## Development

```bash
npm install
npm run dev
```

## Architecture

```
bretts-mod-mail/
├── devvit.json          # App config, triggers, permissions
├── package.json         # Dependencies (@devvit/* ^0.14.3)
├── server/
│   └── index.js         # Triggers: onAppInstall, onModMail
└── client/
    └── App.jsx          # React mail viewer and responder
```

## Triggers

| Trigger | Description |
|---------|-------------|
| `onAppInstall` | Fires when app is installed |
| `onModMail` | Fires when a new mod mail message arrives |

## Permissions

- `read` — Read subreddit content
- `submit` — Submit posts and comments
- `modposts` — Moderate posts and comments

## License

MIT
