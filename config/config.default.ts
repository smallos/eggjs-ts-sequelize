import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578910831747_2420';

  // add your egg config in here
  config.middleware = [];

  config.sequelize = {
    datasources: [
      {
        delegate: 'appOneModel',
        baseDir: 'model/app_one',
        dialect: 'mysql',
        database: 'app_one',
        host: 'host',
        port: 3306,
        timezone: '+08:00',
        pool: {
          max: 20,
          min: 0,
          idle: 10000,
        },
      },
      {
        delegate: 'appTwoModel',
        baseDir: 'model/app_two',
        dialect: 'mysql',
        database: 'app_two',
        host: 'host',
        port: 3306,
        timezone: '+08:00',
        pool: {
          max: 20,
          min: 0,
          idle: 10000,
        },
      }
    ]
  }
  
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
