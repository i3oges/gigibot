import { Sequelize, INTEGER } from 'sequelize';

const sequelize = new Sequelize('s74047_gigibase', process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

sequelize.define('lewdCounter', {
  count: {
    type: INTEGER,
  },
  id: {
    type: INTEGER,
    primaryKey: true,
  },
});
sequelize.sync();

export async function checkLewd() {
  await sequelize.authenticate();
  return sequelize.models.lewdCounter.findOne();
}

export async function addLewd() {
  await sequelize.authenticate();
  const LewdCounter = await checkLewd();
  if (LewdCounter) {
    return LewdCounter.increment({ count: 1 });
  }
  return init();
}

export async function resetLewd() {
  await sequelize.authenticate();
  try {
    const LewdCounter = await checkLewd();
    if (LewdCounter) {
      return LewdCounter.update({ count: 0 });
    }
  } catch {
    return init();
  }
}

function init() {
  sequelize.models.lewdCounter.truncate();
  return sequelize.models.lewdCounter.create({ count: 0, id: 1 });
}
