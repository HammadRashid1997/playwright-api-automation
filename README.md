# Playwright API Automation

This repository demonstrates how to automate REST API testing using Playwright and TypeScript. It focuses on the JSONPlaceholder posts API and provides a clean structure for testing common CRUD-style operations.

## Overview

The project is designed to validate that the JSONPlaceholder API responds correctly for the most common posts-related requests:

- Fetch all posts
- Fetch a single post by ID
- Create a new post
- Create multiple posts in one request

It is a simple, beginner-friendly setup that keeps API logic, test data, and assertions separated for easy maintenance.

## Features

- Reusable API helper class for endpoint calls
- Centralized test payloads in `test-data`
- Playwright Test-based API validation
- HTML reporting for results review
- Easy-to-read test cases for learning and demos

## Tech Stack

- Node.js
- TypeScript
- Playwright Test
- JSONPlaceholder REST API

## Project Structure

```text
playwright-api-automation/
├── api/
│   └── post.api.ts         # Helper methods for posts endpoints
├── test-data/
│   └── post.data.ts        # Sample post payloads
├── tests/
│   └── post.spec.ts         # Automated API tests
├── playwright.config.ts     # Playwright configuration
├── package.json             # Scripts and dependencies
├── README.md                # Project documentation
├── playwright-report/       # Generated HTML reports
├── test-results/           # Playwright execution artifacts
└── node_modules/            # Installed dependencies
```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running Tests

Run the full test suite:

```bash
npm test
```

Run tests in debug mode:

```bash
npm run test:debug
```

Open the HTML report:

```bash
npm run report
```

## Test Flow

Each test follows a simple pattern:

1. Create a `PostApi` instance
2. Send a request to the JSONPlaceholder API
3. Validate the HTTP status code
4. Report the result using Playwright assertions

## Notes

- This project uses the public JSONPlaceholder API, which is intended for testing and mock-style learning scenarios.
- The setup is intentionally lightweight and easy to understand for those learning API automation with Playwright.
- The structure can be extended with more endpoints, negative tests, response-body assertions, and CI integration.

## Summary

This repository is a practical example of using Playwright to test REST API endpoints in a clean, maintainable, and easy-to-follow structure.
