# Changelog

This file records meaningful releases for the blog.

It should summarize actual notable changes included in a release.

## 1.1.0

- Translated the published site copy and metadata from Japanese to English.
- Clarified the branch workflow in `AGENTS.md` to require working branches before merging into `release/x.x.x` and promoting to `main`.

## 1.0.0

- Added the first `CHANGELOG.md` for notable release tracking.
- Defined that changelog entries should follow the release versioning policy in `AGENTS.md`.
- Added a Nix-based local development shell with `flake.nix`, `flake.lock`, and `.envrc`.
- Updated local development documentation to use Nix and `direnv`.
- Removed the old `mise.toml` workflow.
- Replaced the earlier agent policy with release-branch-based workflow rules in `AGENTS.md`.
