# Copilot Instructions for This Codebase

## Overview
This project consists of a set of JavaScript exercises and a simple HTML page for interactive demos. The codebase is educational, focusing on problem-solving patterns (notably Project Euler problems) and basic DOM manipulation for user input/output.

## Key Files
- `ex2.js`, `ex3.js`, `ex4.js`: Contain functions for solving mathematical problems, especially around multiples and factors. Functions are often named after the Project Euler problem they address.
- `index.html`: Main entry point for browser-based interaction. Includes scripts and provides UI for user input (e.g., baggage weight check, mathematical input parsing).

## Patterns & Conventions
- **Function Naming**: Functions are named after the problem or their purpose (e.g., `euler1`, `eulerCustom`, `listEuler1`, `readAString`).
- **Input/Output**: Most functions use `alert()` for output and expect input via function arguments or HTML input fields.
- **Keep Code DRY**: Avoid code duplication, especially when parsing or processing lists of numbers.
- **Hardcoded Examples**: Some functions use hardcoded values for demonstration but are intended to be generalized (see comments in `ex3.js`).
- **String Parsing**: `ex4.js` expects input in the form `factors : multiples` (space-separated lists), and outputs results in a similar format.

## Developer Workflows
- **No build step**: All code is plain JavaScript and HTML, runnable directly in the browser.
- **Testing**: Manual, via browser alerts and console logs. No automated test suite.
- **Debugging**: Use `console.log` and browser dev tools. Alerts are used for user-facing feedback.

## Integration Points
- All JS files are loaded in `index.html` via `<script>` tags. Ensure new scripts are added here for browser access.
- DOM elements (e.g., `weight`, `removed`) are referenced by ID in JS for user interaction.

## Examples
- To add a new mathematical function, follow the pattern in `ex2.js` or `ex3.js` and expose it via a button/input in `index.html`.
- For string parsing and output, see the `readAString` function in `ex4.js`.

## Recommendations for AI Agents
- When adding new features, keep user interaction simple (alerts, prompt, or updating DOM elements by ID).
- Maintain the educational, example-driven style—functions should be easy to read and modify for learning purposes.
- Reference and reuse parsing/processing logic where possible to avoid duplication.

---
If any conventions or workflows are unclear, please request clarification or examples from the user.
