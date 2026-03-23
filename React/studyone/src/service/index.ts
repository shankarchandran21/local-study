import axios from "axios";


const Api = axios.create({
    baseURL:'https://www.course-api.com'
})


Api.interceptors.request.use(
    (request)=>{

        request.headers["Authorization"] = ""

        return request
},

(err)=>{
    return err
})


Api.interceptors.response.use(
    (response)=>{
        return response
    },
    (err)=>{
        return err
    }
)

export default Api