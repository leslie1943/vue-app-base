const os = require('os')
module.exports = {
  getIp() {
    const ifaces = os.networkInterfaces()
    let ip = ''
    for (const face in ifaces) {
      ifaces[face].forEach((details) => {
        if (ip === '' && details.family === 'IPv4' && !details.internal) {
          ip = details.address
        }
      })
    }
    return ip || '127.0.0.1'
  }
}
