import { useEffect, useState } from 'react';
import { GetAxios, PostAxios } from '../Requests/ApiCalls'
import endpoints from './../Requests/endpoints'
import styles from './styles.module.css'
import {

    Link,
} from "react-router-dom";
function Home() {
    const [blockchain, setBlockchain] = useState([])
    const [isAddBlockChain, setIsAddBlockChain] = useState(true)
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [error, setError] = useState("")


    useEffect(() => {
        getBlockChains()

    }, [])

    async function getBlockChains() {
        let response = await GetAxios(endpoints.getBlockChains)
        setBlockchain(response.data.data)
        console.log("Hello", response.data.data)
    }

    useEffect(() => {
        console.log("Hello13", blockchain)

    }, [blockchain])

    async function addBlockChain(isShow) {
        // alert(isShow)
        if (isShow == 1) {
            let data =
            {
                name,
                inchId: id,
                url: "N/A"
            }
            let res = await PostAxios(endpoints.addBlockChains, data)
            console.log(res);
            if (res.status === 200) setIsAddBlockChain(!isShow)
            else {
                alert("23d3")
                setError("You can't add same BlockChain")
            }
            getBlockChains()
            return false
        }
        else
            setIsAddBlockChain(!isShow)


    }

    function onchangeLove(e, field) {
        console.log(e.target.value, field);
        if (field == "name") setName(e.target.value)
        if (field == "id") setId(e.target.value)

    }

    function icon(params) {
        return

    }

    return (
        <div>
            <div>

                <h1>
                    Blockchains
                </h1>
                <p onClick={() => addBlockChain(0)} >
                    Add New Blockchain
                </p>
            </div>
            {isAddBlockChain && <div>
                <input type="" placeholder='Name of Blockchain' value={name} onChange={(e) => { onchangeLove(e, "name") }} />
                &nbsp;
                <input type="" placeholder='Id of BlockChain' value={id} onChange={(e) => { onchangeLove(e, "id") }} />
                &nbsp;
                <input type="button" value={"Add "} onClick={() => addBlockChain(1)} />
                <br />
                <p className={styles.error}>
                    {error}
                </p>
            </div>}

            <div>
                <table>
                    <thead>
                        <tr>
                            <td> Name</td>
                            <td> Id</td>

                        </tr>
                    </thead>
                    <tbody>
                        {blockchain && blockchain.map((edx) => {
                            return <tr>
                                <td>{edx.name}</td>
                                <td>{edx.inchId}</td>
                                <td>

                                    <Link to={`${edx.inchId}`}>See Token</Link>

                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default Home;