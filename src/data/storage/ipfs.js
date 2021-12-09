import axios from 'axios';
import FormData from 'form-data';

import {parsePaymentType} from '../../utils';

export default (url='http://localhost:5001/api/v0', options) => {
  const {username=null, password=null} = options || {};
  let headers = {};
  if(username && password) {
    headers.Authorization = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
  }

  const client = {
    add: data => {
      let formData = new FormData();
      formData.append('file', Buffer.from(JSON.stringify(data)));
      return axios.post(`${url}/add`, formData, {
        headers: {
          ...formData.getHeaders(),
          ...headers,
        }
      }).then(res => {
        if(res && res.data) {
          let result = {};
          for (const [dest, source] of [
            ['bytes', 'Bytes'],
            ['name', 'Name'],
            ['hash', 'Hash'],
            ['cid', 'Hash'],
            ['size', 'Size'],
          ]) {
            if(res.data[source]) {
              result[dest] = res.data[source];
            }
          }

          if(Object.keys(result).length) {
            return result;
          }
        }
        throw new Error('Empty response');
      });
    },
  };
  return {
    client,
    PaymentRequest: {
      add: async data => {
        return client.add(
          parsePaymentType(data, true)
        );
      },
    },
  };
};
