# Playwright API Automation

This project is a Playwright-based API testing repository focused on validating the JSONPlaceholder posts endpoints. It demonstrates a simple and organized structure for automating REST API checks, with separation between request logic, test data, and test specs.

## Overview

The suite is designed to verify common API behaviors for the posts resource, including:

- retrieving the full list of posts
- retrieving a single post by ID
- creating a new post
- creating multiple posts in one request

The project uses the public JSONPlaceholder service as its test API, making it suitable for learning and demonstration purposes.

## Tech Stack

- Node.js
- TypeScript
- Playwright Test
- JSONPlaceholder REST API

## Project Structure

The repository is organized as follows:

- api/ — contains the API helper layer used to call the posts endpoints
- test-data/ — contains reusable payload objects used in the tests
- tests/ — contains the actual automated API test cases
- playwright.config.ts — Playwright configuration for the project
- package.json — project scripts and dependencies
- playwright-report/ — generated HTML test report output
- test-results/ — Playwright execution artifacts
- README.md — project documentation

## Prerequisites

Before running the project, ensure that Node.js and npm are installed on your machine.

## Installation

Clone the repository and install dependencies using the package manager.

## Configuration

The project is configured to use the JSONPlaceholder base URL and HTML reporting. The configuration includes the test directory, report mode, and API request settings appropriate for this repository.

## Available Scripts

The project includes standard Playwright commands for running tests, debugging, and viewing the HTML report.

## API Layer Design

The API logic is wrapped in a dedicated helper class so the tests remain readable and maintainable. This structure keeps request-specific logic separate from validation logic and reduces duplication across test files.

## Test Data

The payloads used in the tests are centralized in a dedicated data module. This makes the tests easier to manage and helps keep request examples consistent across scenarios.

## Test Coverage

The test suite covers the main posts operations for this API:

- Get all posts
- Get a single post by ID
- Create a new post
- Create multiple posts in a single payload

These checks validate that the endpoints respond successfully and that the service is available for the expected operations.

## How the Tests Work

Each test uses Playwright's request context to send an HTTP request to the JSONPlaceholder API. The response is then checked to confirm whether the expected status code was returned.

The project follows a simple pattern:

1. Create the API helper instance
2. Trigger the relevant request method
3. Validate the response status or response behavior
4. Report pass or fail through Playwright assertions

## Running Tests

Use the project scripts to execute the suite. The repository includes commands for running the automated tests and opening the generated HTML report.

## Reporting

The project is configured to generate an HTML report so test results can be reviewed in a browser after execution.

## Notes

- This repository is intentionally lightweight and beginner-friendly.
- The API used is a public mock service created for testing and demonstration purposes.
- The project is best suited for learning Playwright API testing patterns and basic REST validation.

## Potential Improvements

This project could be expanded with additional scenarios such as:

- validating response bodies in detail
- testing negative and error cases
- adding reusable assertion helpers
- introducing environment-based configuration
- integrating with CI for automated execution

## Summary

This repository is a simple but effective example of API test automation with Playwright. It demonstrates clean separation of concerns, structured test data, reusable API methods, and status-based validation for a REST endpoint.
