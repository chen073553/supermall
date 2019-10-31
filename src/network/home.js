import {request} from './request';

// 请求轮播图数据
// export function getHomeMultidata(){
//     return request({
//         url:'/api/v1/home/data?type=sell&page=1'
//     });
// }


//请求首页商品列表数据
export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    });
}

