import { Application } from 'egg';

export default(app: Application) => {
  const { INTEGER, DATE } = app.Sequelize;

  const one = app.appOneModel.define('one', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true},
    created_at: DATE,
    updated_at: DATE,
  }, {
    freezeTableName: true,
  });

  return one;
};
