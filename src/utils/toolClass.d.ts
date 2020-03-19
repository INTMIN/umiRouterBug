/**
 * @description  判断是否数组
 * @export
 * @param {*} arr
 * @returns {boolean}
 */
export declare function isArray(arr: any): boolean;
/**
 * @description 将Json转换过来的带T的字符串格式的时间转换成正常时间，并通过指定格式输出
 * @param strDate 传入的json格式化转换而来的时间
 * @param fmt 要传出的时间格式
 * @return
 */
export declare function Myformat(strDate: String, fmt: String): String;
export declare function getRegion(privacyData: any): void;
/**
 * @description  判断字符串是否为数字和字母组合
 * @export
 * @param {string} nubmer
 * @returns {boolean}
 */
export declare function checkNum(nubmer: string): boolean;
/**
 * @description 校验字符串为字母和汉字
 * @export
 * @param {string} str
 * @returns {boolean}
 */
export declare function checkEC(str: string): boolean;
/**
 * @description 校验字符串为字母和汉字还有数字
 * @export
 * @param {string} str
 * @returns {boolean}
 */
export declare function checkChinese(str: string): boolean;
/**
 * @description 获取localStorage
 * @export
 * @returns
 */
export declare function getLocalStorage(): string;
/**
 * @description w单位格式化
 * @export
 * @returns
 */
export declare function Wformate(value: string | Number): string | Number;
export interface pieData {
    key?: Array<[]>;
    value?: Array<[]>;
}
/**
 * @description pie数据格式化
 * @export
 * @returns
 */
export declare function pieDataFormat(data: pieData): any[];
