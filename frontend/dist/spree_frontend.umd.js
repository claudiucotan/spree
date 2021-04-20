!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("stimulus"),require("@spree/storefront-api-v2-sdk"),require("@spree/storefront-api-v2-sdk/dist/client")):"function"==typeof define&&define.amd?define(["stimulus","@spree/storefront-api-v2-sdk","@spree/storefront-api-v2-sdk/dist/client"],r):(e||self).frontend=r(e.stimulus,e.SpreeSDK)}(this,function(e,r){function t(e,r){return(t=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}var o=function(e){var o,n;function s(){return e.apply(this,arguments)||this}n=e,(o=s).prototype=Object.create(n.prototype),o.prototype.constructor=o,t(o,n);var i,a=s.prototype;return a.initialize=function(){this.apiClient=r.makeClient({host:window.SpreeAPI.storefrontHost})},a.apply=function(){try{var e=this;if(!e.code)return Promise.resolve();var r=window.SpreeAPI.orderToken;return Promise.resolve(e.apiClient.cart.applyCouponCode({orderToken:r},{coupon_code:e.code})).then(function(r){e.handleResponse(r)})}catch(e){return Promise.reject(e)}},a.remove=function(){try{var e=this;if(!e.code)return Promise.resolve();var r=window.SpreeAPI.orderToken;return Promise.resolve(e.apiClient.cart.removeCouponCode({orderToken:r},e.code)).then(function(r){e.handleResponse(r)})}catch(e){return Promise.reject(e)}},a.handleResponse=function(e){e.isFail()?this.handleError(e.fail().serverResponse.data.error):this.handleSuccess()},a.handleError=function(e){this.code=null,this.element.classList.add("error"),this.resultTextTarget.classList.add("alert-error"),this.resultTextTarget.innerHTML=e,this.resultIconTarget.src=Spree.translations.coupon_code_error_icon},a.handleSuccess=function(){this.code=null,this.element.classList.remove("error"),this.resultTextTarget.classList.remove("alert-error"),this.resultIconTarget.remove(),this.resultTextTarget.classList.add("alert-success"),this.resultTextTarget.innerHTML=Spree.translations.coupon_code_applied,window.location.reload()},(i=[{key:"code",get:function(){return this.codeTarget.value.trim()},set:function(e){this.codeTarget.value=e}}])&&function(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(s.prototype,i),s}(e.Controller);return o.targets=["code","resultText","resultIcon"],e.Application.start().register("coupon-code",o),{start:function(){console.log("Spree Frontend initialized")}}});
//# sourceMappingURL=spree_frontend.umd.js.map
