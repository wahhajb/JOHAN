const _0x2a94d5=_0x2ec9;(function(_0x3dc965,_0x4c1f3f){const _0x2e70b5=_0x2ec9,_0x20b2c8=_0x3dc965();while(!![]){try{const _0x3f1cab=parseInt(_0x2e70b5(0x110))/0x1*(parseInt(_0x2e70b5(0x10a))/0x2)+-parseInt(_0x2e70b5(0x100))/0x3*(-parseInt(_0x2e70b5(0x10e))/0x4)+parseInt(_0x2e70b5(0x115))/0x5*(parseInt(_0x2e70b5(0x113))/0x6)+parseInt(_0x2e70b5(0x10b))/0x7*(parseInt(_0x2e70b5(0x108))/0x8)+-parseInt(_0x2e70b5(0x114))/0x9*(-parseInt(_0x2e70b5(0xfd))/0xa)+parseInt(_0x2e70b5(0x101))/0xb*(parseInt(_0x2e70b5(0x105))/0xc)+-parseInt(_0x2e70b5(0x10f))/0xd;if(_0x3f1cab===_0x4c1f3f)break;else _0x20b2c8['push'](_0x20b2c8['shift']());}catch(_0x3436e0){_0x20b2c8['push'](_0x20b2c8['shift']());}}}(_0x1113,0x3160e));function _0x1113(){const _0x139ecf=['1339446ugBVfP','9BSGzvq','5XTKgTV','tags','text','reply','حدث\x20خطأ','POST','Error\x20fetching\x20data:','stringify','quoted','1286770KtzySy','https://chatbot-ji1z.onrender.com/chatbot-ji1z','content','18dSwACS','22txZfxa','error','help','system','1383348YZmJfN','message','ji1z','1384Oztnos','join','2MOTxBr','15659EztxGo','أنت\x20مساعد\x20AI\x20جاهز\x20لمساعدة\x20في\x20أي\x20شيء.','command','230464xwWfWS','17814329grIKWy','257414iWCfTe','application/json','json'];_0x1113=function(){return _0x139ecf;};return _0x1113();}import _0x54a681 from'node-fetch';let handler=async(_0x137ea1,{conn:_0x4527b3,args:_0x156df1,usedPrefix:_0x5af9f4,command:_0x6173c})=>{const _0x293c16=_0x2ec9;let _0x4f51ba;if(_0x156df1['length']>=0x1)_0x4f51ba=_0x156df1['slice'](0x0)[_0x293c16(0x109)]('\x20');else{if(_0x137ea1[_0x293c16(0xfc)]&&_0x137ea1[_0x293c16(0xfc)]['text'])_0x4f51ba=_0x137ea1[_0x293c16(0xfc)][_0x293c16(0x117)];else throw'مرحبا\x20كيف\x20يمكنني.مساعدتك.اليوم؟';}await _0x137ea1[_0x293c16(0x118)](waitt);const _0x1e3c6e=[{'role':_0x293c16(0x104),'content':_0x293c16(0x10c)},{'role':'user','content':_0x4f51ba}];try{let _0x33d267=await chatWithGPT(_0x1e3c6e);await _0x137ea1['reply'](_0x33d267['choices'][0x0][_0x293c16(0x106)][_0x293c16(0xff)]);}catch(_0x111404){await _0x137ea1[_0x293c16(0x118)](_0x293c16(0xf8));}};handler[_0x2a94d5(0x103)]=[_0x2a94d5(0x107)],handler[_0x2a94d5(0x116)]=['ai'],handler[_0x2a94d5(0x10d)]=/^(بوت)$/i;export default handler;function _0x2ec9(_0x15ae8a,_0x33565d){const _0x11138e=_0x1113();return _0x2ec9=function(_0x2ec9ac,_0x58727a){_0x2ec9ac=_0x2ec9ac-0xf8;let _0x325d7c=_0x11138e[_0x2ec9ac];return _0x325d7c;},_0x2ec9(_0x15ae8a,_0x33565d);}async function chatWithGPT(_0x1c3430){const _0x2695df=_0x2a94d5;try{const _0x13962f=await _0x54a681(_0x2695df(0xfe),{'method':_0x2695df(0xf9),'headers':{'Content-Type':_0x2695df(0x111)},'body':JSON[_0x2695df(0xfb)]({'messages':_0x1c3430})}),_0x3ff6e8=await _0x13962f[_0x2695df(0x112)]();return _0x3ff6e8;}catch(_0x234899){console[_0x2695df(0x102)](_0x2695df(0xfa),_0x234899);throw _0x234899;}}
