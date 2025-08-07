# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

Please report (suspected) security vulnerabilities to our security team. You will receive a response from us within 48 hours.

## Security Reports

### Latest Security Scan Results

We regularly run security scans using various tools:

1. Snyk vulnerability scanning
2. Container scanning using Azure Container Scan
3. Trivy filesystem scanning
4. npm audit for dependencies

The results of these scans are available in our GitHub Actions:
- Security Scan Results: Navigate to Actions > Security Scan
- npm audit results: Navigate to Actions > CI/CD > Artifacts > security-audit-results

### CVE Monitoring

We monitor our dependencies for known CVEs using:
- GitHub's Dependabot
- Snyk vulnerability monitoring
- Regular npm audit checks

### Security Measures

1. All dependencies are regularly updated
2. Automated security scanning on every push
3. Daily scheduled security scans
4. Container vulnerability scanning
5. Dependency audit logging

## Latest Test Results

Our test results are automatically published and available in GitHub Actions:

1. Navigate to Actions > CI/CD
2. Check the latest workflow run
3. Download artifacts:
   - test-results: Contains JSON reports of all test runs
   - coverage-reports: Contains detailed coverage information

Test coverage badges are automatically updated and displayed in our README.md

## Security Best Practices

This project follows these security best practices:

1. Regular dependency updates
2. Input validation and sanitization
3. Error handling without information disclosure
4. Secure headers configuration
5. Rate limiting
6. CORS configuration
7. Security headers
8. No sensitive information in logs

## Audit Log

All security audits and their results are logged and available in our GitHub Actions artifacts. Historical data can be accessed through previous workflow runs.