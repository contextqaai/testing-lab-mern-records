# Node.js / Express API track

Use `mern/server` in this repository without the React client to practice the REST API. The original data-model guide is [EDD.md](../EDD.md). Dedicated synthetic MongoDB state and private connection settings are required.

Five exercises: create a record; read it by returned identity; update only that record; delete that disposable record; submit invalid input and inspect both HTTP response and database side effects. Expected status codes must be defined from the intended contract and observed implementation before asserting them.

The upstream model documents missing backend request-body validation. The invalid-input exercise is a known-gap/failing-contract lesson until validation is implemented. No authentication or per-user access isolation is supplied by this example; do not describe either as working. This is source/lesson material, not a live API or ContextQA run receipt.
