import axios from 'axios';

const url = " https://e9f7bb138f8643b2b0911fa3d926e086.mobile.ocp.oraclecloud.com:443";
const aToken = "Basic Y2xvdWQuYWRtaW46bG9vc0VANkRPdUJMZQ==";
const backID = "627a3a2d-67df-4188-bfad-4a30273f2254";



export default async function register(data) {
      var regurl =  "https://e9f7bb138f8643b2b0911fa3d926e086.mobile.ocp.oraclecloud.com:443/mobile/platform/devices/register";
      var auth = {
        headers: {
            "Authorization": aToken,
            "Oracle-Mobile-Backend-ID": backID,
            'Content-Type': 'application/json'
          }
      }
      return axios.post(regurl, data, auth)
        .then(function (response) {
          console.log(response);
          return true;
      })
        .catch(function (error) {
          console.log(error);
          return false;
        });
    }