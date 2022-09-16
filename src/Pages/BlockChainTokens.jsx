import { useEffect, useState } from "react";
import { GetAxios, PostAxios } from '../Requests/ApiCalls'
import endpoints from "../Requests/endpoints";
import styles from './styles.module.css'
import { useParams } from 'react-router-dom'

function BlockChainTokens(params) {
    const [tokens, setTokens] = useState([])
    const { blockchainId } = useParams()
    useEffect(() => {
        getTokens();
        console.log(blockchainId, '-=--')
    }, [])

    async function getTokens(params) {
        let response = await GetAxios(endpoints.getInchTokens + blockchainId)

        if (response.status === 200) {
            makeDataSet(response.data.data)
        }

        // console.log(response.data.data, '23ewdw3ewds');
    }

    async function makeDataSet(data) {
        let dataSet = []
        for (const edx in data) {
            let i = {
                tokenId: edx,
                address: data[edx].address,
                decimals: data[edx].decimals,
                logoURI: data[edx].logoURI,
                name: data[edx].name,
                symbol: data[edx].symbol
            }
            dataSet.push(i)
            // console.log(edx);

        }

        setTokens(dataSet)


    }

    useEffect(() => {
        console.log(tokens, "90-3029402-");
    }, [tokens])


    console.log(params, "erd");
    return (
        <div>
            <h1>
                Tokens
            </h1>
            <div>
                <table>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Decimals</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tokens && tokens.map((edx) => {
                            return <tr >
                                <td>
                                    <img src={edx.logoURI} alt={edx.name} className={styles.NameImage} />
                                    {edx.name}
                                </td>
                                <td>{edx.symbol}</td>
                                <td>{edx.decimals}</td>
                                <td>{edx.address}</td>
                            </tr>
                        })}
                    </tbody>
                </table>

            </div>
        </div>


    )
}

export default BlockChainTokens