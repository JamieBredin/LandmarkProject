export const environment = {
  production: true,
  apiUri : 'http://localhost:3000',//change this to api gateway
  //apiUri: ' https://x0wafkcyt7.execute-api.eu-west-1.amazonaws.com/dev',
  auth0:
  {
    domain:'dev-giq6rr8zna5v1l02.us.auth0.com',
    clientId: 'DlKM3GBevLLWO8yWMijKoc1Hit6xxizq',
    callback_URL: 'localhost:4200/callback',
    audience: 'landmarks'
  }
};
