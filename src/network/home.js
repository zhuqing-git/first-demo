import {
    request
} from 'network/request'

// 获取轮播图
export function getHomeMultidata() {
    return request({
        url: '/home/swiperdata'
    })
}

//tabBar内容
export function getHomeGoods(type, page) {
    return request({
        url: 'goods/search',
        params: {
            query: type,
            pagenum: page
        }
    })

}