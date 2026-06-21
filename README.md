# 📦 Natural Date Parser

A lightweight JavaScript library to convert natural language dates into JavaScript `Date` objects.

Examples:
- "tomorrow" → Date object  
- "next friday" → Date object  
- "2 days ago" → Date object  

---

## 🚀 Features

- 🕒 Parse natural language dates
- ⚡ Lightweight and fast
- 📦 Works in Node.js and browsers
- 🔌 Simple API
- 🌍 Supports relative date expressions

---

## 📥 Installation

```bash
npm install natural-date-parser
```

## 📌 Usage
ES Modules

```bash
import parseDate from "natural-date-parser";

console.log(parseDate("tomorrow"));
console.log(parseDate("next monday"));
```

## 🧠 Examples
```bash
parseDate("today");        // current date
parseDate("tomorrow");     // tomorrow
parseDate("yesterday");    // yesterday
parseDate("next week");    // +7 days
parseDate("in 5 days");    // +5 days
parseDate("next friday");  // upcoming friday
```


