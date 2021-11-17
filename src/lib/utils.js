module.exports = {
    formatContact(value) {
        value = value.replace(/\D/g, "" )
        return value
    }
}