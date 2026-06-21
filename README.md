# 📦 natural-date-parser

[![npm version](https://img.shields.io/npm/v/natural-date-parser.svg)](https://www.npmjs.com/package/natural-date-parser)
[![npm downloads](https://img.shields.io/npm/dm/natural-date-parser.svg)](https://www.npmjs.com/package/natural-date-parser)
[![license](https://img.shields.io/npm/l/natural-date-parser.svg)](./LICENSE)

A lightweight JavaScript library that converts natural language date expressions — like `"tomorrow"`, `"next friday"`, or `"2 days ago"` — into a structured, timezone-aware date result.

```js
parseDate("next friday at 9am");
// → { success: true, date: '2026-06-26 09:00:00', timezone: 'Asia/Karachi', ... }
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

const result = parseDate("next friday at 9am");
console.log(result);
```

**Output:**

```js
{
  success: true,
  input: 'next friday at 9am',
  country: 'Pakistan',
  code: 'PK',
  timezone: 'Asia/Karachi',
  date: '2026-06-26 09:00:00'
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
parseDate("today");
parseDate("tomorrow");
parseDate("yesterday");
parseDate("next week");
parseDate("in 5 days");
parseDate("next friday");
parseDate("next friday at 9am");
parseDate("2 days ago");
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

<!-- TODO: explain here whether this is auto-detected from the system/browser locale,
     or whether it can be overridden by passing options, e.g.:
     parseDate("tomorrow", { country: "PK" }) -->

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
