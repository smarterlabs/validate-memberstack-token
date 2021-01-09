const jwt = require(`jsonwebtoken`)
const axios = require(`axios`)

// https://help.memberstack.com/en/articles/4454690-verifying-memberstack-tokens
const publicKeysUrl = `https://api.memberstack.io/metadata/v1/public-keys`
async function validateMemberstackToken(token){
	try{
		const { header } = jwt.decode(token, { complete: true })
		const publicKeys = await axios(publicKeysUrl)
		const publicKey = publicKeys.data[header.kid]
		const verification = jwt.verify(token, publicKey)
		if(Date.now() >= verification.exp * 1000){
			return false
		}
		return verification
	}
	catch(err){
		throw err
	}
}

module.exports = validateMemberstackToken