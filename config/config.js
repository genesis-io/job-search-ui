import development from './development.config';
import production from './production.config';

const environment = 'development';

const config = {
  development,
  production,
};

export default config[environment];
