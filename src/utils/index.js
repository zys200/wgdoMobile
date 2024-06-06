//获取指定格式日期
export const getTimer = function (dateStr) {
    const date = new Date(dateStr)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const formattedDate = `${year}年${month}月${day}日`
    return formattedDate
}

export const getTimerTwo = function (dateString) {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return {
        yue: `${month}/${day}`,
        years: `${year}`
    }
}