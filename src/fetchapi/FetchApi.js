import axios from 'axios';
import Constants from '../assets/constants';
import { user } from '../images';
import { decode, encode } from 'base-64'
export default function FetchApiData(url, method, token = false, dataObj = {}, isfile = false) {
    const base64 = require('base-64');
    if (!global.btoa) {
        global.btoa = encode;
    }
    // const tokenV =  asyncManager.getDataValue('token').then((token) => {
    //     console.log("token >>>", token)
    //     return token
    // })
    // console.log("tokenV >>>", tokenV)
    const baseUrl = 'http://54.175.172.99:8787/';
    let API = baseUrl + url;
    console.log("API--->>>" + API);

    // if(token == true ){
    //   //  headerObj.authtoken = tokenV
    //   } else {
    username = 'user@parx.com';
    password = 'Mvv9sc4J24ZHHNP0yHamvurYyYtz8i0ZqL5Amj';
    var credentials = btoa(username + ':' + password);
    var basicAuth = 'Basic ' + credentials;

    let headers = {
        Accept: "*/*",
        timezone: "19800",
        "Authorization": basicAuth,
        'Accept': 'application/json',
        'platform': 'android',
        'Content-Type': isfile == true ? 'multipart/form-data' : 'application/json',

    };
    let apiDataObj = {
        method: method,
        headers: headers
    };

    if (Object.entries(dataObj).length > 0) {
        apiDataObj.body = (isfile) == true ? dataObj : JSON.parse(JSON.stringify(dataObj));
    }

    console.log("apiDataObj >>>>", apiDataObj)

    let apiResponse = axios({
        withCredentials: true,
        url: `${baseUrl}${url}`,
        method: method,
        data:dataObj,
        auth: {
            username: 'user@parx.com',
            password: 'Mvv9sc4J24ZHHNP0yHamvurYyYtz8i0ZqL5Amj',
        },
    }, {
        headers: headers
    }).then(function(response)  {
        console.log("Success   " + JSON.stringify(response.data));
    }).catch((error) => {
        console.log("error " + error)
    })
    console.log("Success 6666  " + JSON.stringify(apiResponse));
    return apiResponse;

};

