// handle JSON parse, if error not break and return undefined
exports.validatingJSON = (data) => {

    let result

    try {
        result = JSON.parse(data)
    } catch (error) {
        return undefined
    }

    return result
}