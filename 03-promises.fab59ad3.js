var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:n,amount:o}}=e.currentTarget;let r=Number(t.value);for(let u=1;u<=o.value;u+=1){function l(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),r)}))}l(u,r).then((({position:e,delay:t})=>{i.Notify.success(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`Rejected promise ${e} in ${t}ms`)})),r+=Number(n.value)}}));
//# sourceMappingURL=03-promises.fab59ad3.js.map
