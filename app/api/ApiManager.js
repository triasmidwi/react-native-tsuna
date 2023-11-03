import axios from "axios";

const ApiManager = axios.create({
    baseURL: "https://tsuna-398103-backend-mcfyd5agqq-uc.a.run.app",
    responseType: "json",
    // withCredentials: true
})

export default ApiManager