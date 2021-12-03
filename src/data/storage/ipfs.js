import {create} from 'ipfs-http-client';
import {parsePaymentType} from '../../utils';

export default (url, options) => {
  const {username=null, password=null} = options || {};
  const client = create({
    url,
    ...((username && password)?{
      headers: {
        authorization: 'Basic ' + Buffer.from(username + ':' + password).toString('base64'),
      }
    }:{})
  });

  return {
    client,
    PaymentRequest: {
      add: async data => {
        const payload = parsePaymentType(data, true);
        return client.add(
          JSON.stringify(payload)
        );
      },
    },
  };
};
