const storage = require('azure-storage')
const again = new storage.LinearRetryPolicyFilter();
const service = storage.createTableService().withFilter(again);
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