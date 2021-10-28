# interview

> 面试题记录

---

#### 用 `reduce` 方法，把 input 的结构改成 output。（如果不知道 reduct，就降级成用任意方法）

```js
const input = [
  { name: 'zhao', age: 20 },
  { name: 'qian', age: 20 }
];

const output = {
  zhao: { name: 'zhao', age: 20 },
  qian: { name: 'qian', age: 20 }
};
```

[参考答案](./src/reduct.html)

---

#### 实现一个方法 `getBreadcumb`，能够根据下面的路由 map 生成面包屑导航

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

输出：`'首页/产品/产品详情'`

[参考答案](./src/getBreadcumb.html)
