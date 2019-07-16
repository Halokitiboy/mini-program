/*
 * @Author: xiazhengchun
 * @since: 2019-06-19 15:35:46
 * @lastTime: 2019-06-27 15:15:12
 */

/**
 * @description:  可以使小程序api的调用用上promise
 * @param {type} 
 * @return: 
 */ 
module.exports = { 
 wxPromise:api => {  
    return function (obj = {},...param) { 
      return new Promise((resolve, reject) => {      
        const extras = {
          success: resolve,
          fail: reject
        }
        api({...obj,...extras},...param);    
      })  
    }
  }
}