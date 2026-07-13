"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=s(function(k,n){
var y=require('@stdlib/stats-strided-dsempn/dist').ndarray;function f(e,r,a,i,p){return y(e,r,a,i,p)}n.exports=f
});var d=s(function(w,v){
var x=require('@stdlib/strided-base-stride2offset/dist'),j=t();function l(e,r,a,i){return j(e,r,a,i,x(e,i))}v.exports=l
});var m=s(function(z,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=t();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=m(),u,c=O(E(__dirname,"./native.js"));b(c)?u=g:u=c;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
