# 🎭 Playwright Testing Project

This project uses [Playwright](https://playwright.dev/) for API testing with environment configuration support via `.env` files using `dotenv-defaults`.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install 
```bash
npm install
```

### 3. Run test
####macos
```bash
envName=dev npx playwright test --project=chromium tests/api/booking.spec.ts
```
####window
```cmd
set envName=dev && npx playwright test --project=chromium tests/api/booking.spec.ts
```