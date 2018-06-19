import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://dj.mqphp.com/cy1993_app'
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
const sendverifycode = (params) => wxRequest(params, apiMall + "/sendverifycode/");
const checkverifycode = (params) => wxRequest(params, apiMall + "/checkverifycode/");
const binduserinfo = (params) => wxRequest(params, apiMall + "/binduserinfo/");
const getavailabledate = (params) => wxRequest(params, apiMall + "/getavailabledate/");
const getavailabletime = (params) => wxRequest(params, apiMall + "/getavailabletime/");
const getavailableproduct = (params) => wxRequest(params, apiMall + "/getavailableproduct/");
const getproductdetails = (params) => wxRequest(params, apiMall + "/getproductdetails/");
const getorderinfo = (params) => wxRequest(params, apiMall + "/getorderinfo/");
const decrypt = (params) => wxRequest(params, apiMall + "/api/v1/sample/decrypt");


module.exports = {
  getDiscoverList,
  wxJsCode2Session,
  user2session,
  getOpenId,
  sendverifycode,
  checkverifycode,
  binduserinfo,
  getavailabledate,
  getavailabletime,
  getavailableproduct,
  getproductdetails,
  getorderinfo,
  decrypt,
}
