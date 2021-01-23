const {
  https,
  logger
} = require('firebase-functions')
const {
  default: next
} = require('next')

const nextjsDistDir = require('../next.config.js').distDir

const nextjsServer = next({
  dev: false,
  conf: {
    distDir: nextjsDistDir,
  },
})
const nextjsHandle = nextjsServer.getRequestHandler()

//Note: The `nextApp` here will be the Firebase Cloud Functions name
exports.nextApp = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => {
    logger.info(req.path, req.query)
    return nextjsHandle(req, res)
  })
})
