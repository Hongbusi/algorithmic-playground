# interview

面试题记录

### 实现一个方法 `getBreadcumb`，能够根据下面的路由 map 生成面包屑导航

``` js
const routes = [
  {
    route: '/home',
    name: '首页'
  },
  {
    route: '/home/products',
    name: '产品',
    parent: '/home'
  },
  {
    route: '/home/product/detail',
    name: '产品详情',
    parent: '/home/products'
  },
  {
    route: '/home/about',
    name: '关于',
    parent: '/home'
  }
];
```

示例：`getBreadcumb(/home/product/detail)`
输出：'首页/产品/产品详情'

[参考答案](./src/getBreadcumb.html)
