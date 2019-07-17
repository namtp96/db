const _ = require('lodash'),
    readline = require('readline'),
    fs = require('fs'),
    Parse = require('./parse'),
    uuid = require('uuidv4')

let conf = undefined

const setConf = () => {
    let result
    if (fs.existsSync('.conf')) {
        result = fs.readFileSync('.conf')
        result = result.toString().split('\n')
        result = result.map(element => {

            try {
                element = element.split(/[\=\|]/)
            } catch (error) {
                throw error
            }

            if (element.length > 1) return element
            throw new Error('Err in .conf')
        })
    } else {
        fs.writeFile('.conf', `plz write conf in here!`, err => {
            throw new Error(`cannot write file .conf\n${err}`)
        })
    }
    return result
}

const filter = (data) => {
    // create conf if is undefined
    if (_.isUndefined(conf)) {
        conf = setConf()
    }

    let result = {}

    conf.map(element => {
        if (!(_.isUndefined(data[element[1]]) || _.isNull(data[element[1]]))) {
            return result[element[0]] = data[element[1]]
        }

        throw new Error(`${element[0]} in data is undefined`)
    })

    return result
}

const removeExistsData = async (path) => {
    if (!fs.existsSync(path)) throw new Error(`${__dirname} files not exists!`)

    let result = []
    const output = fs.createWriteStream(path)
    let rl = readline.createInterface({ input: fs.createReadStream(path) })

    rl.on('line', line => {
        line = JSON.stringify(Parse.validatingJSON(line))
        if (line) {
            let flag = result.findIndex(element => {
                return element == line
            })

            if (flag === -1) result.push(line)
        }
    })

    await rl.once('close', () => {
        console.log(result)
        fs.writeFileSync(path, result.join('\n'))
    })
}

module.exports = {
    filter,
    removeExistsData
}