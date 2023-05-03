export default (flag) => {
    const enviroment = {
        'www.zjtoutiao.net': 'http://m.zhangtongshe.com/zts-web/zts/',
        'zjtoutiao.net': 'https://www.zhangtongshe.com/zts-web/zts/',
    } [flag]
    return enviroment ? enviroment : 'https://www.zhangtongshe.com/zts-web/zts/'
}