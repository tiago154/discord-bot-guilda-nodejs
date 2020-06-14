require('dotenv').config()

const fs = require('fs')
const path = require('path')

const domainsPaths = path.join(process.cwd(), 'src', 'domains')

const domains = fs.readdirSync(domainsPaths)

for (const domain of domains) {
  require(path.join(process.cwd(), 'src', 'domains', domain))
}
