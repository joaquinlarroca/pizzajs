Save data to localStorage
```js
import { localStorageGet, localStorageSet } from './source/Addons/localstorage.js';
```
## Set 
Saves one value with a specified name. Returns `value`

```javascript
localStorageSet(name,value)
```

| Parameters   | Type     | Description                           | Default Value |
|--------------|----------|---------------------------------------|---------------|
| name         | `string` | The name of the value                 | -             |
| value        | `all types` | The value to be saved              | -             |

## Get
Gets the value from the specified name. Returns `false` if it doesnt exist if it exists returns value

```javascript
localStorageGet(name)
```

| Parameters   | Type     | Description                           | Default Value |
|--------------|----------|---------------------------------------|---------------|
| name         | `string` | The name of the value                 | -             |
