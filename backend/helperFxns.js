
const checkDate = (dateStr) => {
    if(!dateStr) { return false }
    const params = dateStr.split(/[\.\-\/]/)
    const yyyy = parseInt(params[2],10)
    const mm = parseInt(params[0],10)
    const dd = parseInt(params[1],10)
    const date = new Date(yyyy, mm-1, dd, 0, 0, 0, 0)
    return (mm === (date.getMonth()+1) && dd === date.getDate() && yyyy === date.getFullYear())
}

module.exports.checkDate = checkDate