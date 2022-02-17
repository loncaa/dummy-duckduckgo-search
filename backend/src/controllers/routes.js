const searchController = require('./search.controller')
const historyController = require('./history.controller')

function exposeApplicationRoutes(pathPrefix, app){

  app.use(pathPrefix, searchController)
  app.use(pathPrefix, historyController)
}

module.exports = {
  exposeApplicationRoutes
}