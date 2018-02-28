const token = require('./env');
const axios = require('axios');
const qs = require('querystring');

/**
 * @returns {PromiseLike}
 * @param {string} token: slack team (oAuth) token
 */
const getUsers = async (token) => {
  const url = 'https://slack.com/api/users.list';
  const response = await axios.post(url, qs.stringify({ token })).catch(console.error);
  if (!response.data.ok) throw new Error(JSON.stringify(response.data));
  return { token, members: response.members };
};

const remindUser = async (token, user, text, time) => {

};

const remindUsers = async ({token, members}) => {
  await Promise.all(
    members.map(({ id }) => remindUser(token, id, text, time)),
  ).catch(console.error);

  return "Complete";
}

module.exports = getUsers;

