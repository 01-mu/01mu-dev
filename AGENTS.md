# Agent Advisory

These rules define the workflow policy for this repository.

## Deployment

- The project deploys to Cloudflare when changes are merged into `main`.

## Branching model

- Development work should be merged into `dev`.
- `dev` is the default integration branch.

## Release process

- Releases must be performed by opening a pull request from `dev` → `main`.

## Main branch protection

- Do not merge directly into `main`.
- The only allowed path to `main` is via a GitHub pull request from `dev`.
- The user must review and approve the pull request before merging.