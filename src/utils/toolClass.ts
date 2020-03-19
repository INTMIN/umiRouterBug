/**
 * @description  判断是否数组
 * @export
 * @param {*} arr
 * @returns {boolean}
 */
export function isArray(arr: any) {
  if (Array.isArray) {
    return Array.isArray(arr);
  } else {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }
}
/**
 * @description 将Json转换过来的带T的字符串格式的时间转换成正常时间，并通过指定格式输出
 * @param strDate 传入的json格式化转换而来的时间
 * @param fmt 要传出的时间格式
 * @return
 */
export function Myformat(strDate: String, fmt: String) {
  let str: String = '';
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
  } catch {
    return strDate;
  }
}

export function getRegion(privacyData: any) {
  const changeData = [...privacyData];
  if (privacyData.length > 0) {
    for (let i = 0; i < privacyData.length; i += 1) {
      if (privacyData[i].children.length > 0) {
        for (let j = 0; j < privacyData[i].children.length; j += 1) {
          privacyData[i].children[j].label = privacyData[i].children[j].value;
          const alength = privacyData[i].children[j].area.length;
          changeData[i].children[j].children = [];
          if (alength > 0) {
            for (let k = 0; k < alength; k += 1) {
              changeData[i].children[j].children[k] = [];
              privacyData[i].children[j].children[k] = {
                value: privacyData[i].children[j].area[k],
                label: privacyData[i].children[j].area[k],
              };
            }
          }
        }
      }
    }
  }
}

/**
 * @description  判断字符串是否为数字和字母组合
 * @export
 * @param {string} nubmer
 * @returns {boolean}
 */
export function checkNum(nubmer: string) {
  const re = /^[0-9a-zA-Z]*$/g;
  if (!re.test(nubmer)) {
    return false;
  } else {
    return true;
  }
}

/**
 * @description 校验字符串为字母和汉字
 * @export
 * @param {string} str
 * @returns {boolean}
 */
export function checkEC(str: string) {
  const regex = /^[\u4E00-\u9FA5A-Za-z\s]+$/;
  if (!regex.test(str)) {
    return false;
  } else {
    return true;
  }
}

/**
 * @description 校验字符串为字母和汉字还有数字
 * @export
 * @param {string} str
 * @returns {boolean}
 */
export function checkChinese(str: string) {
  const regex = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
  if (!regex.test(str)) {
    return false;
  } else {
    return true;
  }
}

/**
 * @description 获取localStorage
 * @export
 * @returns
 */
export function getLocalStorage() {
  return localStorage.getItem('token');
}

/**
 * @description w单位格式化
 * @export
 * @returns
 */
export function Wformate(value: string | Number) {
  return Number(value) > 10000 ? (Number(value) / 10000).toFixed(2) + 'w' : value;
}

export interface pieData {
  key?: Array<[]>;
  value?: Array<[]>;
}
/**
 * @description pie数据格式化
 * @export
 * @returns
 */
export function pieDataFormat(data: pieData) {
  let newData: any[];
  newData = [];
  try {
    const keys = data.key;
    const values = data.value;
    keys!.forEach((_, i) => {
      newData.push({ name: keys![i], value: values![i] });
    });
  } catch (error) {
    console.log(error);
  }
  return newData;
}
