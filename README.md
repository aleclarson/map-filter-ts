# map-filter-ts

[![npm](https://img.shields.io/npm/v/map-filter-ts.svg)](https://www.npmjs.com/package/map-filter-ts)
[![Bundle size](https://badgen.net/bundlephobia/min/map-filter-ts)](https://bundlephobia.com/result?p=map-filter-ts)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/alecdotbiz)

> Map an array, filter out undefined values

&nbsp;

### Usage

```ts
import { mapFilter } from 'map-filter-ts'

// Works with arrays, sets, maps, and other iterables.
const results = mapFilter([0, 1, 2], value =>
  value > 0 ? value + 1 : undefined
)
// => [2, 3]
```
