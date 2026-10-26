# API reproduction and triage lab

This branch contains a real HTTP reproduction with Express and an injected synthetic database adapter. It does not connect to Atlas and is not a ContextQA execution report.

From `mern/server`, install locked dependencies with `npm ci --ignore-scripts`, then run `node --test test/record-response.test.js`. Before the response-order fix, the missing-record assertion fails: actual HTTP 200, expected 404. The existing-record assertion passes.

`node test/observe-invalid-input.js` independently observes that an empty POST reaches the insert adapter. That validation issue is separate from the response-status fix and remains open.

The router factory keeps actual route behavior available to the HTTP test without importing the real database connection. The deployed application still wires its original database through `routes/record.js`. Fixtures are synthetic; no customer data or credentials are used.

Scope: reproduce → classify HTTP contract defect → change response ordering → rerun missing/existing assertions → review the linked PR. A real database integration test and hosted ContextQA workflow remain additional gates before deployment.

## Issue links and outcome

[Missing-resource defect #1](https://github.com/contextqaai/testing-lab-mern-records/issues/1): before fix, missing-resource response was HTTP 200; after changing response ordering, both missing/existing-record HTTP tests pass. Use `npm test` from `mern/server`. See the before/after receipts in `lab/triage/`.

[Validation defect #2](https://github.com/contextqaai/testing-lab-mern-records/issues/2) remains open; this change does not add validation or authentication. Installation reported dependency advisories in the pinned server packages; dependency remediation and real database/hosted checks remain deployment work.
