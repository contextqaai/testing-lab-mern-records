# ContextQA lab — MERN · React + Express + MongoDB

Educational source fork of [mongodb-developer/mern-stack-example](https://github.com/mongodb-developer/mern-stack-example). Original history, notices and license are retained. This is not an endorsed integration or a customer production app.

**Status: source and exercises available. Public deployment, platform import and ContextQA run results are not verified.**

Starting source commit: `6a5e9397b197cbb8edb34c787af7e6c8977b0152`.

## Setup and scope

Use mern/client and mern/server with a dedicated synthetic MongoDB database. Configure ATLAS_URI privately. The source has no backend request-body validation or shared-user isolation; do not expose a mutable shared deployment without addressing those gaps. These missing safeguards can be explicitly disclosed failure lessons.

Follow the [original setup instructions](../README.md#upstream-project-documentation). See [stack/platform guidance](https://github.com/contextqaai/testing-lab/blob/main/PLATFORMS.md) for deployment boundaries.

## Exercises

| Scenario | Explicit assertion |
|---|---|
| Create record | The synthetic name, position and level appear after saving. |
| Read after reload | The saved record remains visible after a fresh page load. |
| Update record | Editing the selected record changes only that record. |
| Delete fixture | Deleting a disposable synthetic record removes it from the list. |
| Invalid API input | Desired contract: invalid input is rejected without a write. Upstream documents this validation as missing; this is a known-gap exercise, not a passing baseline. |

These are acceptance exercises, not claims that upstream currently satisfies each desired requirement. Inspect the implemented workflow and fixtures before generating executable steps. Missing validation/auth may deliberately demonstrate a failure and must be disclosed.

## End-to-end lesson

Start an owned/authorized copy with synthetic fixtures. State the assertion, create/review a test in your authenticated ContextQA workspace, execute, and inspect the actual verdict. Introduce one disclosed regression in a separate variant, rerun the same assertion, fix the app and rerun. Confirm mutations against disposable data. Keep credentials and private reports out of this repository.

Record app commit/build, fixture/scenario version, browser/runner version, environment and timestamp with every real report. A cached report is recorded evidence, not a new run. No ContextQA report has been generated for this fork yet.

[ContextQA setup](https://contextqa.com/tutorials/getting-started-with-contextqa-test-automation/) · [Central catalog](https://github.com/contextqaai/testing-lab)
