const keys = require('../config/keys');
const MessageDaoFile = require('./messages/MessageDaoFile')

class DaoFactory {

  static getMessage() {
    switch (keys.driverClassName) {
      case 'file':
        return new MessageDaoFile();
    }
  }

}

module.exports = DaoFactory