const axios = require('axios');

const configuredAxios = (incomingConfig) => {
  const defaults = {
    ...incomingConfig,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return defaults;
};

const fetch = async ({ url, payload }) => {
  const options = configuredAxios({ url, data: payload });
  const response = await axios(options);
  const responseOK = response && response.status === 200 && response.data;

  if (responseOK) return response.data.result;
  else return false;
};

module.exports = {
  fetch,
};
