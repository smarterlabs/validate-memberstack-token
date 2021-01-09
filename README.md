# validate-memberstack-token

## Usage

```js
const validateToken = require(`validate-memberstack-token`)

...

try{
	const contents = await validateToken(token)
	console.log(`Token valid:`, contents)
}
catch(err){
	console.log(`Token not valid`)
	console.error(err)
}
```