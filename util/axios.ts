import { API_URL } from '@/constant/api-route';
import axios from 'axios';

/**
 * 
 * @param route 
 * @param callbackResult 
 * @param params 
 */
export const getRequest = (route: any, callbackResult: any, params = {}) => {
  console.log(`${API_URL}${route}`);
  Promise.all([
    axios.get(`${API_URL}${route}`, {
      params: params,
      headers: {
        'Access-Control-Allow-Origin': true
      }
    })
  ]).then(objResult => {
    callbackResult(objResult[0].data);
  }).catch((err) => {
    console.log(err);
    // showErrorToast('Something Went Wrong');
  });
};
  
export const postRequest = (route:any, body:any, callbackResult:any, params={}) => {
  Promise.all([
    axios.post(`${API_URL}${route}`, body, {
      params: params,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  ]).then(objResult => {
    callbackResult(objResult[0].data);
  }).catch((err) => {
    console.log(err);
    // showErrorToast('Something Went Wrong');
  });
}
  
export const putRequest = (route:any, body:any, callbackResult:any) => {
  Promise.all([
    axios.put(`${API_URL}${route}`, JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  ]).then(objResult => {
    callbackResult(objResult[0].data);
  }).catch((err) => {
    console.log(err);
    // showErrorToast('Something Went Wrong');
  });
}