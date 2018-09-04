function dateFormat(date, format) {

    if (!date) {
        return ''
    }

    if (!(date instanceof Date)) {
        date = new Date(date)
        if (date.toString() === 'Invalid Date') {
            return '无效时间戳'
        }
    }
    format = format || 'yyyy-M-d hh:mm:ss'
    const o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (const k in o)
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    return format;
}

function dateFormatRange(sTime, eTime) {
    return {
        startTime: new Date(sTime), endTime: new Date(eTime)
    }
}

export {dateFormat, dateFormatRange}