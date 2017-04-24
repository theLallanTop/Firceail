/**
 * Created by ph-266 on 24/04/17.
 */


const environment = {
  development: {
    isProduction: false,
    apiUrl: 'localhost'
  },
  production: {
    isProduction: true,
    apiUrl: 'localhost'
  }
}[process.env.NODE_ENV || 'development'];

let AuthToken;

module.exports = Object.assign(
  {},
  environment
);
