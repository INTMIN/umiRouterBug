"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/**
 * @description  判断是否数组
 * @export
 * @param {*} arr
 * @returns {boolean}
 */
function isArray(arr) {
    if (Array.isArray) {
        return Array.isArray(arr);
    }
    else {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }
}
exports.isArray = isArray;
/**
 * @description 将Json转换过来的带T的字符串格式的时间转换成正常时间，并通过指定格式输出
 * @param strDate 传入的json格式化转换而来的时间
 * @param fmt 要传出的时间格式
 * @return
 */
function Myformat(strDate, fmt) {
    var str = '';
    try {
        if (fmt == null || fmt.length === 0) {
            fmt = 'yyyy-MM-dd HH:mm:ss';
        }
        strDate = strDate.replace('T', ' ');
        str = strDate
            .toLocaleString()
            .replace(/[年月]/g, '-')
            .replace(/[日上下午]/g, '');
        return str;
    }
    catch (_a) {
        return strDate;
    }
}
exports.Myformat = Myformat;
function getRegion(privacyData) {
    var changeData = __spreadArrays(privacyData);
    if (privacyData.length > 0) {
        for (var i = 0; i < privacyData.length; i += 1) {
            if (privacyData[i].children.length > 0) {
                for (var j = 0; j < privacyData[i].children.length; j += 1) {
                    privacyData[i].children[j].label = privacyData[i].children[j].value;
                    var alength = privacyData[i].children[j].area.length;
                    changeData[i].children[j].children = [];
                    if (alength > 0) {
                        for (var k = 0; k < alength; k += 1) {
                            changeData[i].children[j].children[k] = [];
                            privacyData[i].children[j].children[k] = {
                                value: privacyData[i].children[j].area[k],
                                label: privacyData[i].children[j].area[k]
                            };
                        }
                    }
                }
            }
        }
    }
}
exports.getRegion = getRegion;
/**
 * @description  判断字符串是否为数字和字母组合
 * @export
 * @param {string} nubmer
 * @returns {boolean}
 */
function checkNum(nubmer) {
    var re = /^[0-9a-zA-Z]*$/g;
    if (!re.test(nubmer)) {
        return false;
    }
    else {
        return true;
    }
}
exports.checkNum = checkNum;
/**
 * @description 校验字符串为字母和汉字
 * @export
 * @param {string} str
 * @returns {boolean}
 */
function checkEC(str) {
    var regex = /^[\u4E00-\u9FA5A-Za-z\s]+$/;
    if (!regex.test(str)) {
        return false;
    }
    else {
        return true;
    }
}
exports.checkEC = checkEC;
/**
 * @description 校验字符串为字母和汉字还有数字
 * @export
 * @param {string} str
 * @returns {boolean}
 */
function checkChinese(str) {
    var regex = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
    if (!regex.test(str)) {
        return false;
    }
    else {
        return true;
    }
}
exports.checkChinese = checkChinese;
/**
 * @description 获取localStorage
 * @export
 * @returns
 */
function getLocalStorage() {
    return localStorage.getItem('token');
}
exports.getLocalStorage = getLocalStorage;
/**
 * @description w单位格式化
 * @export
 * @returns
 */
function Wformate(value) {
    return Number(value) > 10000 ? (Number(value) / 10000).toFixed(2) + 'w' : value;
}
exports.Wformate = Wformate;
/**
 * @description pie数据格式化
 * @export
 * @returns
 */
function pieDataFormat(data) {
    var newData;
    newData = [];
    try {
        var keys_1 = data.key;
        var values_1 = data.value;
        keys_1.forEach(function (_, i) {
            newData.push({ name: keys_1[i], value: values_1[i] });
        });
    }
    catch (error) {
        console.log(error);
    }
    return newData;
}
exports.pieDataFormat = pieDataFormat;
