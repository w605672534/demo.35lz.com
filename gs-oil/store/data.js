export default {

  products: [],
  postItem: [],
  addressList: [],
  couponList: [
    {
      id: 1,
      value: '100',
      type: 'vip',
      title: '立减券',
      detail: '满1000元减100元',
      deadline: '2019-09-12',
      status: '未领取'
    },
    {
      id: 2,
      value: '100',
      type: 'vip',
      title: '立减券',
      detail: '满1000元减100元',
      deadline: '2019-09-12',
      status: '未领取'
    },
    {
      id: 3,
      value: '100',
      type: 'normal',
      title: '运费券',
      detail: '满1000元减100元',
      deadline: '2019-09-22',
      status: '未领取'
    },
    {
      id: 4,
      value: '100',
      type: 'normal',
      title: '运费券',
      detail: '满1000元减100元',
      deadline: '2019-09-12',
      status: '未领取'
    },
    {
      id: 5,
      value: '100',
      type: 'normal',
      title: '立减券',
      detail: '满1000元减100元',
      deadline: '2019-09-12',
      status: '未领取'
    },
    {
      id: 6,
      value: '2',
      type: 'normal',
      title: '无门槛优惠券',
      detail: '满20元减2元',
      deadline: '2019-09-18',
      status: '未使用'
    },
    {
      id: 7,
      value: '100',
      type: 'normal',
      title: '无门槛优惠券',
      detail: '满20元减2元',
      deadline: '2019-09-12',
      status: '未使用'
    },
    {
      id: 8,
      value: '2',
      type: 'normal',
      title: '无门槛优惠券',
      detail: '满20元减2元',
      deadline: '2019-09-12',
      status: '已使用'
    },
    {
      id: 8,
      value: '2',
      type: 'vip',
      title: '无门槛优惠券',
      detail: '满20元减2元',
      deadline: '2019-09-12',
      status: '未领取'
    },
  ],
  orderList: [],
  userData: [],
  index: {
    prefectureList: [
      { title: '限时秒杀', prefecture_title: '9.9 元起', prefecture_descripte: '9.9 元起',imageUrl: 'https://yanxuan-item.nosdn.127.net/ab8a380039996773aeeea52c0aaff480.jpg?imageView&thumbnail=430x430&quality=95'},
      { title: '优惠入口', prefecture_title: '全场满 99 返 20', prefecture_descripte: '9.9 元起',imageUrl:'https://yanxuan-item.nosdn.127.net/5c14b2dcd715873d391c56831fc3c6f9.jpg?imageView&thumbnail=430x430&quality=95'}
    ],
    sectionList: [
      { title: '红烧肉', des: '个大不油腻',imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565438898217&di=5f47bd32612b2913a3d44e32b372e537&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20141103%2Fyutouniu_3385893.jpg'},
      { title: '干锅鸡', des: '香辣美味',imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565439208146&di=f1c3c9ff9b290dcd5a76812413b257bc&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170808%2F58ba86a3efbf43fb81f6498560b891d5_th.png'},
      { title: '三文鱼', des: '好吃不贵',imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565439310406&di=6ff4b3b481cad47e6ccbcb4b8000d528&imgtype=0&src=http%3A%2F%2Fimg18.3lian.com%2Fd%2Ffile%2F201711%2F03%2F33658744127579fb2b7252146dd79a36.png'}
    ],
    cardList: [
      {title: '花牛苹果', des: '脆甜多汁', sale_price: '38.99', market_price: '50.00',imageUrl:'https://yanxuan-item.nosdn.127.net/e84d328ee9a0b7beba2b763819673aca.jpg?imageView&thumbnail=430x430&quality=95'},
      {title: '草莓干', des: '酸甜可口', sale_price: '18.99', market_price: '30.00',imageUrl:'https://yanxuan-item.nosdn.127.net/6714fe5bdd7aa64681d93d4a73e52305.jpg?imageView&thumbnail=430x430&quality=95'}
    ],
    productList: [
      { image: 'http://p0.meituan.net/bbia/2ea30f2d5ec39c9a7db76b6857d2603b2417717.png@130w_130h_1e_1c', title: '毛肚', price : '30'},
      { image: 'http://p1.meituan.net/bbia/0e2738e5ec947345beb23a8b97b7ae472503093.png@130w_130h_1e_1c', title: '招牌虾滑', price : '64'},
      { image: 'http://p0.meituan.net/wmproductwm/f36862a8e2c7b820ed9dcba9841d2b3a93738.jpeg@130w_130h_1e_1c', title: '精品肥牛', price : '88'}
    ],
    moveList: [
      { image: 'http://p1.meituan.net/movie/bb9f75599bfbb2c4cf77ad9abae1b95c1376927.jpg@214w_297h_1e_1c', title: '银河补习班', score : '9.5分'},
      { image: 'http://p0.meituan.net/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg@214w_297h_1e_1c', title: '狮子王', score : '8.9分'},
      { image: 'http://p1.meituan.net/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg@214w_297h_1e_1c', title: '扫毒', score : '9.0分'}
    ],
    sideNaveList: [
      {icon: 'iconsaoyisao', title: '扫一扫'},
      {icon: 'iconfukuanma', title: '付款码'},
      {icon: 'iconkaifapiao', title: '开发票'}
    ]
  },
  find:[
    {content:'123',iconzLikeNum: 3,isLight:false},
    {content: '456',iconzLikeNum: 2,isLight:false}
  ],
  cartList: []
}
