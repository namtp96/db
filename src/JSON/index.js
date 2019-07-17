const fs = require('fs'),
    readline = require('readline'),
    _ = require('lodash'),
    filterData = require('./filterData'),
    Parse = require('./parse')

// read raw file and return multiple file with line quantity equals parameter or default 10000 lines
exports.toFiles = async (path, lineQuantity = 10000, callback = () => console.log(`${__dirname}.toFiles: Done!`)) => {

    try {
        const dir = './data'
        let tmpPath,
            extendPath,
            outPath,
            lQt = lineQuantity,
            num = 1

        if (_.isString(path)) {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir)
            }
        }

        tmpPath = path.split('/')
        tmpPath = tmpPath[tmpPath.length - 1]
        tmpPath = tmpPath.split('.')
        extendPath = tmpPath.pop()
        outPath = `${dir}/${tmpPath.join('.')}-${num}.${extendPath}`

        const rl = readline.createInterface({ input: fs.createReadStream(path) })
        let output = fs.createWriteStream(outPath)

        rl.on('line', line => {
            line = Parse.validatingJSON(line)

            if (line) {

                line = filterData.filter(line)
                line.biIsbn = line.biIsbn["$numberLong"]
                if(line.source.split('http').length > 1) line.source = `http${line.source.split('http')[2]}`
                
                lQt--
                
                if (lQt == 0) {
                    filterData.removeExistsData(outPath)

                    lQt = lineQuantity
                    num++

                    outPath = `${dir}/${tmpPath.join('.')}-${num}.${extendPath}`
                    output.close()
                    output = fs.createWriteStream(outPath)
                }

                output.write(`${JSON.stringify(line)}\n`)
            }
        })

        await rl.once('close', callback)
    } catch (error) {
        throw error
    }
}