const axios = require("axios");
const MY_TOKEN = "6898400838:AAGLukOBxvW-k2eGrwg9rrYnofvHkttWAGQ";

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;
function getAxiosInstance(){

    return{

        get(method, params){
            return axios.get(`/${method}`,{

                baseURL: BASE_URL,
                params,
                
            });
        },

        post(method,data){
            return axios({

                method: "post",
                baseURL: BASE_URL,
                url: `/${method}`,
                data,
                
            });
        }

    };

    };

    


module.exports = { axiosInstance: getAxiosInstance() };