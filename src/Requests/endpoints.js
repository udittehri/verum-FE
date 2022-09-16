const origin = 'http://localhost:8080/api/'
const endpoints = {
    getBlockChains: `${origin}block`,
    addBlockChains: `${origin}block/create`,

    getInchTokens: `${origin}block/token?id=`


}

export default endpoints