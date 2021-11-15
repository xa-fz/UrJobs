/**
 * 
 * 工具类
 * fanzhe 2021.11.15
 */

// 判断身份后跳转
export function getRedirectPath ({type, avatar}) {
    console.log(type);
    let url = type === 'Boss' ? '/boss' : '/hunter';
    if (!avatar) {
        url += 'info'
    }
    return url
}