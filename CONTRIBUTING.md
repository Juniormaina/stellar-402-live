# Contributing to Stellar 402 Live

Thank you for helping build payment-enabled agents on Stellar. This guide explains how we work and how to contribute through the Stellar Wave Program on Drips.

## Ground Rules

- Use Stellar **testnet** only. Never commit secret keys, `.env` files, or wallet seeds.
- Keep pull requests focused on one issue.
- Add or update tests alongside behavior changes.
- Update documentation when behavior changes.
- Label simulations explicitly and distinguish demonstrated behavior from broader guarantees.

## Development Setup

Requirements: Node.js 24 or later, npm, and Git.

```sh
git clone https://github.com/dunia-hub/stellar-402-live.git
cd stellar-402-live
npm ci
npm run check
npm test
npm run demo
```

The local demo requires no wallets, funds, or network access. For the live testnet flow, follow [Testnet Payments](docs/testnet-payments.md) and run `npm run preflight` before spending testnet funds.

## Before Opening a Pull Request

Run the same checks as CI:

```sh
npm run check
npm test
npm run demo
git diff --check
```

## Commit Style

We use conventional prefixes:

- `feat:` new behavior
- `fix:` bug fixes
- `test:` tests only
- `docs:` documentation only
- `chore:` tooling, dependencies, and maintenance

Example: `feat: bind budget reservations to payment context`

## Contributing Through Stellar Wave

This repository participates in the [Stellar Wave Program](https://www.drips.network/wave/stellar) on Drips. Contributors earn points for resolved issues during each Wave.

1. Browse issues labeled `Stellar Wave` in this repository or on Drips.
2. Apply to the issue through the Drips Wave app. Briefly describe your approach.
3. **Wait to be assigned before starting work.** Pull requests for unassigned issues will not be reviewed for points.
4. Fork the repository and create a branch, for example `feat/123-reservation-context`.
5. Open a pull request that includes `Closes #<issue-number>` and fills in the template.
6. Keep your branch up to date with `main` and respond to review feedback.

### Complexity Levels

| Complexity | Points | Typical scope |
| --- | --- | --- |
| Trivial | 100 | Small, clearly bounded change with obvious acceptance criteria |
| Medium | 150 | Standard feature or fix touching several parts of the codebase |
| High | 200 | Integration, failure-handling, or architectural work |

### Expectations

- Post an update on the issue if you are blocked or cannot finish. Silent assignments may be reassigned.
- Meet every acceptance criterion listed in the issue.
- Include terminal output, test results, or testnet transaction hashes where the issue asks for evidence.
- AI-assisted contributions are welcome, but you are responsible for understanding and testing every line you submit.

## Reporting Security Issues

Do not open public issues for vulnerabilities affecting payment authorization, budgets, or settlement verification. Contact the maintainers privately at fatuma@duniahub.xyz.

## Questions

Ask on the relevant issue so the discussion stays visible to other contributors.

The Dunia Hub team