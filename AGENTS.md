# Agent Advisory

These rules define the workflow policy for this repository.

## Deployment

- The project deploys to Cloudflare when changes are merged into `main`.

## Branching model

- Development work should be merged into a release branch named `release/x.x.x`.
- Release branches are the default integration path before merging to `main`.
- Version meaning for `release/x.x.x`:
- The first `x` is for a major change.
- The second `x` is for a small feature change.
- The third `x` is only for posting a new article.

## Release process

- Releases must be performed by opening a pull request from `release/x.x.x` → `main`.

## Main branch protection

- Do not merge directly into `main`.
- The only allowed path to `main` is via a GitHub pull request from `release/x.x.x`.
- The user must review and approve the pull request before merging.
