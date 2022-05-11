import { Sequelize, NUMBER } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './bot-data.sqlite',
});

sequelize.define('lewdCounter', {
  count: {
    type: NUMBER,
  },
  id: {
    type: NUMBER,
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
