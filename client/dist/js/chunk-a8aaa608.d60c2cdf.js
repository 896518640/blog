(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8aaa608"],{"117f":function(e,t,r){"use strict";r("a6fa")},1511:function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n=function(e){return Object(a["N"])("data-v-e3142528"),e=e(),Object(a["L"])(),e},s={id:"User"},u=n((function(){return Object(a["n"])("h2",null,"修改用户名",-1)})),c=n((function(){return Object(a["n"])("h2",null,"修改密码",-1)})),o=n((function(){return Object(a["n"])("h2",null,"上传头像",-1)}));function l(e,t,r,n,l,i){var b=Object(a["T"])("UpdateName"),d=Object(a["T"])("UpdatePass"),p=Object(a["T"])("UpdatePhoto");return Object(a["K"])(),Object(a["m"])("div",s,[Object(a["n"])("article",null,[u,Object(a["r"])(b)]),Object(a["n"])("article",null,[c,Object(a["r"])(d)]),Object(a["n"])("article",null,[o,Object(a["r"])(p)])])}var i=r("5530"),b=(r("ac1f"),r("5319"),{class:"UpdateName"}),d={class:"code"},p=Object(a["q"])("确认修改");function f(e,t,r,n,s,u){var c=Object(a["T"])("el-form-item"),o=Object(a["T"])("el-input"),l=Object(a["T"])("el-button"),i=Object(a["T"])("el-form");return Object(a["K"])(),Object(a["m"])("div",b,[Object(a["r"])(i,{ref:"userForm",model:s.userForm,rules:s.rules,"status-icon":"","label-width":"120px"},{default:Object(a["ib"])((function(){return[Object(a["r"])(c,{label:"当前用户名："},{default:Object(a["ib"])((function(){return[Object(a["n"])("span",d,Object(a["X"])(e.userInfo.user),1)]})),_:1}),Object(a["r"])(c,{label:"新用户名：",prop:"user"},{default:Object(a["ib"])((function(){return[Object(a["r"])(o,{modelValue:s.userForm.user,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.userForm.user=e})},null,8,["modelValue"])]})),_:1}),Object(a["r"])(c,null,{default:Object(a["ib"])((function(){return[Object(a["r"])(l,{type:"primary",onClick:t[1]||(t[1]=function(e){return u.submit("userForm")}),plain:""},{default:Object(a["ib"])((function(){return[p]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])])}var m=r("1da1"),O=(r("96cf"),r("00b4"),r("5502")),j={data:function(){var e=this;return{userForm:{user:""},rules:{user:[{validator:function(t,r,a){(r.length<2||r.length>8)&&a(new Error("请输入2~8位的用户名")),/^[\w\u4e00-\u9fa5\u0800-\u4e00\uac00-\ud7ff]+$/.test(r)||a(new Error("只允许字母、数字、_、中/日/韩文")),r===e.userInfo.user&&a(new Error("用户名没有变化😒")),a()}}]}}},computed:Object(i["a"])({},Object(O["c"])(["userInfo"])),methods:Object(i["a"])(Object(i["a"])({},Object(O["b"])(["loginSuccess"])),{},{submit:function(){var e=this;this.$refs["userForm"].validate(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=12;break}return t.next=3,e.$axios({method:"POST",url:"/personal/user",data:{user:e.userForm.user}});case 3:if(a=t.sent,n=a.data,!n.code){t.next=7;break}return t.abrupt("return",e.$message.error(n.msg));case 7:e.$message.success("用户名修改成功"),e.loginSuccess(n.data),e.$refs["userForm"].resetFields(),t.next=13;break;case 12:return t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}})},h=(r("38ad"),r("6b0d")),v=r.n(h);const g=v()(j,[["render",f],["__scopeId","data-v-63a38535"]]);var w=g,F={class:"UpdatePass"},U=Object(a["q"])("确认修改");function $(e,t,r,n,s,u){var c=Object(a["T"])("el-input"),o=Object(a["T"])("el-form-item"),l=Object(a["T"])("el-button"),i=Object(a["T"])("el-form");return Object(a["K"])(),Object(a["m"])("div",F,[Object(a["r"])(i,{ref:"passForm",model:s.passForm,rules:s.rules,"status-icon":"","label-width":"120px"},{default:Object(a["ib"])((function(){return[Object(a["r"])(o,{label:"原密码：",prop:"pass"},{default:Object(a["ib"])((function(){return[Object(a["r"])(c,{type:"password",modelValue:s.passForm.oldPass,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.passForm.oldPass=e})},null,8,["modelValue"])]})),_:1}),Object(a["r"])(o,{label:"新密码：",prop:"pass"},{default:Object(a["ib"])((function(){return[Object(a["r"])(c,{type:"password",modelValue:s.passForm.pass,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.passForm.pass=e})},null,8,["modelValue"])]})),_:1}),Object(a["r"])(o,{label:"确认新密码：",prop:"pass2"},{default:Object(a["ib"])((function(){return[Object(a["r"])(c,{type:"password",modelValue:s.passForm.pass2,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.passForm.pass2=e})},null,8,["modelValue"])]})),_:1}),Object(a["r"])(o,null,{default:Object(a["ib"])((function(){return[Object(a["r"])(l,{type:"primary",onClick:t[3]||(t[3]=function(e){return u.submit("passForm")}),plain:""},{default:Object(a["ib"])((function(){return[U]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])])}var _={data:function(){var e=this;return{passForm:{oldPass:"",pass:"",pass2:""},rules:{pass:[{validator:function(e,t,r){(t.length<6||t.length>18)&&r(new Error("请输入6~18位的密码")),/^[\w!\[\]{}\/\\:"|?>·`<@#$%^&*\(\)_+=~\-]+$/.test(t)||r(new Error("请输入合法的英文字符")),r()}}],pass2:[{validator:function(t,r,a){e.passForm.pass!==r&&a(new Error("两次输入密码不一致")),a()}}]}}},methods:Object(i["a"])(Object(i["a"])({},Object(O["b"])(["loginOut"])),{},{submit:function(){var e=this;this.$refs.passForm.validate(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=13;break}return t.next=3,e.$axios({method:"POST",url:"/personal/pass",data:{oldPass:e.passForm.oldPass,pass:e.passForm.pass}});case 3:if(a=t.sent,n=a.data,!n.code){t.next=7;break}return t.abrupt("return",e.$message.error(n.msg));case 7:e.$message.success("密码修改成功,请重新登录"),e.$refs["passForm"].resetFields(),e.loginOut(),e.$router.push("/"),t.next=14;break;case 13:return t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}})};const k=v()(_,[["render",$]]);var P=k,T={id:"UpdatePhoto"},x=["src"],y={key:1,class:"el-icon-plus avatar-uploader-icon"};function V(e,t,r,n,s,u){var c=Object(a["T"])("el-alert"),o=Object(a["T"])("el-upload");return Object(a["K"])(),Object(a["m"])("div",T,[Object(a["r"])(c,{title:"上传头像",description:"点击下方 + 号 即可更新头像",type:"warning",closable:!1,"show-icon":""}),Object(a["r"])(o,{class:"avatar-uploader","with-credentials":!0,action:e.baseURL+"/personal/photo","show-file-list":!1,"on-success":u.handleAvatarSuccess,"before-upload":u.beforeAvatarUpload},{default:Object(a["ib"])((function(){return[s.imageUrl?(Object(a["K"])(),Object(a["m"])("img",{key:0,src:s.imageUrl,class:"avatar"},null,8,x)):(Object(a["K"])(),Object(a["m"])("i",y))]})),_:1},8,["action","on-success","before-upload"])])}r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861");var I={data:function(){return{imageUrl:""}},methods:Object(i["a"])(Object(i["a"])({},Object(O["b"])(["loginSuccess"])),{},{handleAvatarSuccess:function(e,t){if(e.code)return this.$message.error("上传失败，请稍后再试");this.imageUrl=URL.createObjectURL(t.raw),this.loginSuccess(e.data)},beforeAvatarUpload:function(e){console.log(e);var t=/^image\/(jpeg|png)$/.test(e.type),r=e.size/1024/1024<.5;return t||this.$message.error("上传头像图片只能为JPG|PNG格式!"),r||this.$message.error("上传头像图片大小不能超过 500KB!"),t&&r}})};r("117f");const R=v()(I,[["render",V],["__scopeId","data-v-66571419"]]);var S=R,E={components:{UpdateName:w,UpdatePass:P,UpdatePhoto:S},computed:Object(i["a"])({},Object(O["c"])(["userInfo"])),watch:{userInfo:function(){this.backHome()}},methods:{backHome:function(){this.userInfo.user||(this.$message.error("当前未登录，无法修改个人信息,已自动返回首页"),this.$router.replace("/"))}},beforeRouteEnter:function(e,t,r){r((function(e){e.backHome()}))}};r("9881");const K=v()(E,[["render",l],["__scopeId","data-v-e3142528"]]);t["default"]=K},"38ad":function(e,t,r){"use strict";r("64a6")},"64a6":function(e,t,r){},9881:function(e,t,r){"use strict";r("dad2")},a6fa:function(e,t,r){},dad2:function(e,t,r){}}]);
//# sourceMappingURL=chunk-a8aaa608.d60c2cdf.js.map