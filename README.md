# 📦 natural-date-parser

[![npm version](https://img.shields.io/npm/v/natural-date-parser.svg)](https://www.npmjs.com/package/natural-date-parser)
[![npm downloads](https://img.shields.io/npm/dm/natural-date-parser.svg)](https://www.npmjs.com/package/natural-date-parser)
[![license](https://img.shields.io/npm/l/natural-date-parser.svg)](./LICENSE)

A lightweight JavaScript library that converts natural language date expressions — like `"tomorrow"`, `"next friday"`, or `"2 days ago"` — into a structured, timezone-aware date result.

```js
parseDate("next friday at 9am", "US");
// → { success: true, date: '2026-06-26 09:00:00', timezone: 'America/Adak', ... }
```

---

## 📑 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Return Object](#-return-object)
- [Example Expressions](#-example-expressions)
- [Compatibility](#️-compatibility)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🕒 Parses natural language date expressions
- 🌍 Returns country & timezone metadata alongside the parsed date
- 🌎 Accepts both country names and ISO country codes
- ⚡ Lightweight and fast, no heavy dependencies
- 📦 Works in both Node.js and the browser
- 🔌 Simple, single-function
- 🧩 Supports relative expressions (`"in 5 days"`, `"2 days ago"`, etc.)

---

## 📥 Installation

```bash
npm install natural-date-parser
```

Using yarn:

```bash
yarn add natural-date-parser
```

Using pnpm:

```bash
pnpm add natural-date-parser
```

---

## 🚀 Quick Start

```js
import parseDate from "natural-date-parser";

// Using a country name
const result1 = parseDate("next friday at 9am", "Germany");

// Using a country code
const result2 = parseDate("next friday at 9am", "DE");

console.log(result1);
console.log(result2);
```

**Output:**

```js
{
  success: true,
  input: 'next Friday at 9am',
  country: 'Germany',
  code: 'DE',
  timezone: 'Europe/Berlin',
  date: '2026-07-03 18:00:00'
}
```

---

## 📤 Return Object

`parseDate()` returns a plain JavaScript object — **not** a raw `Date` instance — with the following fields:

| Field      | Type      | Description                                                      |
|------------|-----------|--------------------------------------------------------------------|
| `success`  | `boolean` | `true` if the input was successfully parsed, `false` otherwise    |
| `input`    | `string`  | The original string you passed in, echoed back for reference      |
| `country`  | `string`  | Detected country name used to resolve the timezone                |
| `code`     | `string`  | ISO 3166-1 alpha-2 country code (e.g. `PK`)                       |
| `timezone` | `string`  | IANA timezone identifier (e.g. `Asia/Karachi`)                    |
| `date`     | `string`  | Parsed date/time, formatted as `YYYY-MM-DD HH:mm:ss`              |

---

## 🧠 Example Expressions

```js
parseDate("today", "PK");
parseDate("tomorrow", "Pakistan");

parseDate("yesterday", "DE");
parseDate("next week", "Germany");

parseDate("in 5 days", "US");
parseDate("next friday", "United States");

parseDate("next friday at 9am", "BE");
parseDate("2 days ago", "Belgium");
```

| Input               | Resolves to              |
|----------------------|---------------------------|
| `"today"`            | Current date              |
| `"tomorrow"`          | +1 day                    |
| `"yesterday"`         | −1 day                    |
| `"next week"`         | +7 days                   |
| `"in 5 days"`         | +5 days                   |
| `"next friday"`       | Upcoming Friday           |
| `"next friday at 9am"`| Upcoming Friday, 9:00 AM  |
| `"2 days ago"`        | −2 days                   |

---

## 🌍 Timezone & Country Detection

````md
## 🌍 Timezone & Country Detection

The parser determines the timezone from the country provided as the second argument.

Both country names and ISO country codes are supported.

```js
parseDate("tomorrow", "Pakistan");
parseDate("tomorrow", "PK");
```

Both produce:

```js
{
  country: "Pakistan",
  code: "PK",
  timezone: "Asia/Karachi"
}
```

Country name matching is case-insensitive:

```js
parseDate("tomorrow", "Pakistan");
parseDate("tomorrow", "pakistan");
parseDate("tomorrow", "PAKISTAN");
```

---

## 🖥️ Compatibility

- Node.js: <!-- TODO: minimum supported version, e.g. >=14 -->
- Browsers: modern browsers with ES Modules support

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.
Feel free to check the [issues page](<!-- TODO: your GitHub issues link -->).

```bash
git clone https://github.com/Saadjamshaid64/natural-date-parser.git
cd natural-date-parser
npm install
```

---

## 📄 License

Licensed under the [Apache License 2.0](./LICENSE).
