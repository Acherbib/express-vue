const environment = process.env.NODE_ENV || 'local';
const port = process.env.PORT || '1234';



const globalConfig = {
  port,
  environment
};



const environmentSpecificConfig = {
  local: {},
  production: {}
};



const config = Object.assign({}, globalConfig, environmentSpecificConfig[environment]);



export default config;
