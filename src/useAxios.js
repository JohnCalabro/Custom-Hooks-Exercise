import { useEffect, useState } from "react";
import uuid from "uuid";
import axios from "axios";

const UseAxios = (url) => {
    const [res, setRes] = useState([])
    const [err, setErr] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url);
                setRes(data => [...data, {...response.data, id: uuid()}])
            } catch (e) {
                setErr(e)
            }
            getData()
        }
    }, url)
    return {res, err}
}

export default UseAxios;