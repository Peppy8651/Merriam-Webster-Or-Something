# Merriam-Webster-Or-Something
A little wrapper for the Merriam Webster API.

```js
const merriam = require('merriam-webster-or-something');
// Make sure to keep your token private.
const Dictionary = new merriam('token-goes-here');
Dictionary.get('Absolute').then(results => console.log(results.items[0].meta));
```
