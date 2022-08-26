# Pastellify

[![npm](https://img.shields.io/badge/npm-pastellify-brightgreen.svg?style=flat-square)](https://www.npmjs.com/package/pastellify)
[![npm version](https://img.shields.io/npm/v/pastellify.svg?style=flat-square)](https://www.npmjs.com/package/pastellify)
[![npm downloads](https://img.shields.io/npm/dm/pastellify.svg?style=flat-square)](https://www.npmjs.com/package/pastellify)
[![sponsors](https://img.shields.io/github/sponsors/diragb)](https://github.com/sponsors/diragb)

Deterministically turn any string into a soft pastel color. 🟣

- 🪶 **Extremely lightweight**: Source code is only *4 lines long*.
- ⚡ **Blazingly fast**: Does not rely on any other package. Just gets the job done.

<br />

# Installation
```bash
npm install pastellify --save
yarn add pastellify ## or in yarn
```

# Usage
```ts
import pastellify from 'pastellify'

pastellify('Hello!') // [330, 78, 73]
pastellify('Hello!', { saturation: 68, lightness: 65 }) // [330, 68, 65]
pastellify('Hello!', { toCSS: true }) // 'hsl(330, 78%, 73%)'
```

# Inspiration
I've often found myself using generic profile picture icons for users and thought that was very boring.

<div style="display: flex; flex-direction: column;">
  <img
    src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'
    style="width: 80px; border-radius: 5px;"
  />
  <span style="margin-top: 10px; font-style: italic;">"i am not vibing with this icon" ~me all the time fr</span>
</div>

<br />
Pastellify allows me to create deterministic and unique profile picture experiences for users based on their usernames. But you can use this for anything, really.

<br />

# License
MIT
