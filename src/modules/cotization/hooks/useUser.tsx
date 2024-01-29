import { useEffect, useState } from "react";
import { rimacApi } from "../../../api/rimacApi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

function useUser() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            const result = await axios.get(`https://rimac-front-end-challenge.netlify.app/api/user.json`);
            setUser(result.data);
           
        }

        getUser()
    },[]);

    return {user};
}

export default useUser;