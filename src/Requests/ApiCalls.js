import Axios from "axios"

export const GetAxios = async (url) => {
    console.log(url)
    const res = await Axios.get(url);

    return res
}

export const PostAxios = async (url, body) => {
    const data = {
        ...body,

    };
    const config = {
        method: "post",
        url: url,
        headers: {
            accept: "*/*",
        },
        data: data,
    };
    const res = await Axios(config);

    return res

}