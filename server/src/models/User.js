const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(user) {
  const SALT_PASSWORD = 8;
  if (!user.changed('password')) {
    return false;
  }
  return bcrypt.genSaltAsync(SALT_PASSWORD)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then((hash) => {
      user.setDataValue('password', hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  }, {
    hooks: {
      // Leaving beforeCreate and beforeUpdate hooks makes the hash twice.
      // Solution: leave just the beforeSave hook.
      // beforeCreate: hashPassword,
      // beforeUpdate: hashPassword,
      beforeSave: hashPassword,
    },
  });
  User.prototype.comparePassword = function comparePassword(password) {
    return bcrypt.compareAsync(password, this.password);
  };
  return User;
};
