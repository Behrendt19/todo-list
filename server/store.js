function LoggingFilter() {
  this.handle = (requestOptions, next) => {
    console.log(requestOptions);
    next(requestOptions, (returnObject, finalCallback, next) => {
      console.log(returnObject);
    })
  }
}

const storage = require('azure-storage')
const again = new storage.LinearRetryPolicyFilter();
const loggingOp = new LoggingFilter();
const service = storage.createTableService().withFilter(again).withFilter(loggingOp);
const table = 'tasks'

const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init
} 