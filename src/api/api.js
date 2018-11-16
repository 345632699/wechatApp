import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://wx.cy1993.cn/cy1993_app'
// const apiMall = 'https://test.cy1993.cn/cy1993_app'
// const apiMall = 'http://localhost:8080/'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");
const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");

//測試連接
const getOpenId = (params) => wxRequest(params, apiMall + "/login/");
const getusermainpage = (params) => wxRequest(params, apiMall + "/getusermainpage/");
const getuserinfo = (params) => wxRequest(params, apiMall + "/getuserinfo/");
const sendverifycode = (params) => wxRequest(params, apiMall + "/sendverifycode/");
const checkverifycode = (params) => wxRequest(params, apiMall + "/checkverifycode/");
const binduserinfo = (params) => wxRequest(params, apiMall + "/binduserinfo/");
const getavailabledate = (params) => wxRequest(params, apiMall + "/getavailabledate/");
const getavailabletime = (params) => wxRequest(params, apiMall + "/getavailabletime/");
const getavailableproduct = (params) => wxRequest(params, apiMall + "/getavailableproduct/");
const getproductdetails = (params) => wxRequest(params, apiMall + "/getproductdetails/");
const getorderinfo = (params) => wxRequest(params, apiMall + "/getorderinfo/");
const getbranchinfo = (params) => wxRequest(params, apiMall + "/getbranchinfo/");
const getnotices = (params) => wxRequest(params, apiMall + "/getnotices/");
const getshowimages = (params) => wxRequest(params, apiMall + "/getshowimages/");
const getrecentavailabledatetime = (params) => wxRequest(params, apiMall + "/getrecentavailabledatetime/");
const wxdepositpayment = (params) => wxRequest(params, apiMall + "/wxdepositpayment/");
const Order = (params) => wxRequest(params, apiMall + "/order/");
const cancelorder = (params) => wxRequest(params, apiMall + "/cancelorder/");
const PostDepositPayment = (params) => wxRequest(params, apiMall + "/PostDepositPayment/");
const decrypt = (params) => wxRequest(params, apiMall + "/api/v1/sample/decrypt");
//余额支付
const balancedepositpayment = (params) => wxRequest(params, apiMall + "/balancedepositpayment/");
//余额支付尾款
const balancetotalpayment = (params) => wxRequest(params, apiMall + "/balancetotalpayment/");
//微信支付尾款
const wxtotalpayment = (params) => wxRequest(params, apiMall + "/wxtotalpayment/");
//更新评价
const updatecomment = (params) => wxRequest(params, apiMall + "/updatecomment/");
//获取预约列表
const getmyavaorder = (params) => wxRequest(params, apiMall + "/getmyavaorder/");
//获取历史订单
const gethistoryorder = (params) => wxRequest(params, apiMall + "/gethistoryorder/");

const getavailabledateandtime = (params) => wxRequest(params, apiMall + "/getavailabledateandtime/");


module.exports = {
  getDiscoverList,
  wxJsCode2Session,
  user2session,
  getOpenId,
  getuserinfo,
  getusermainpage,
  sendverifycode,
  checkverifycode,
  binduserinfo,
  getavailabledate,
  getavailabletime,
  getavailableproduct,
  getproductdetails,
  getorderinfo,
  getnotices,
  getshowimages,
  getrecentavailabledatetime,
  wxdepositpayment,
  Order,
  cancelorder,
  balancedepositpayment,
  balancetotalpayment,
  wxtotalpayment,
  updatecomment,
  PostDepositPayment,
  getavailabledateandtime,
  decrypt,
  getmyavaorder,
  gethistoryorder
}
