(function(e){function t(t){for(var s,l,a=t[0],r=t[1],c=t[2],u=0,h=[];u<a.length;u++)l=a[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&h.push(o[l][0]),o[l]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],s=!0,a=1;a<i.length;a++){var r=i[a];0!==o[r]&&(s=!1)}s&&(n.splice(t--,1),e=l(l.s=i[0]))}return e}var s={},o={app:0},n=[];function l(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=s,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(i,s,function(t){return e[t]}.bind(null,s));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/1DanGame/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=r;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0c38":function(e,t,i){"use strict";i("720a")},"0e56":function(e,t,i){"use strict";i("3b20")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"3b20":function(e,t,i){},"3eff":function(e,t,i){"use strict";i("b33f")},"56d7":function(e,t,i){"use strict";i.r(t);var s=i("7a23");const o={id:"app"},n={key:0,id:"logout-container"},l=["innerHTML"];function a(e,t,i,a,r,c){const d=Object(s["k"])("Login"),u=Object(s["k"])("Users"),h=Object(s["k"])("Collectibles");return Object(s["i"])(),Object(s["e"])("div",o,[t[2]||(t[2]=Object(s["f"])("h1",{id:"title"},"1Dan Nightmares Game",-1)),t[3]||(t[3]=Object(s["f"])("div",{id:"version",class:"version"},"Version 1.3.3",-1)),Object(s["o"])(Object(s["h"])(d,{ref:"login",onLoginSuccess:c.handleLoginSuccess,onUserCreated:c.handleUserCreated,resetFeedback:r.resetFeedback,id:"login-component"},null,8,["onLoginSuccess","onUserCreated","resetFeedback"]),[[s["n"],!r.isLoggedIn]]),r.isLoggedIn?(Object(s["i"])(),Object(s["e"])("div",n,[Object(s["f"])("button",{onClick:t[0]||(t[0]=(...e)=>c.handleLogout&&c.handleLogout(...e))},"Logout")])):Object(s["d"])("",!0),r.isLoggedIn&&"admin"===r.userRole?(Object(s["i"])(),Object(s["c"])(u,{key:1,ref:"users",onViewCollectibles:c.viewCollectiblesForUser,id:"users-component"},null,8,["onViewCollectibles"])):Object(s["d"])("",!0),r.isLoggedIn&&("gamer"===r.userRole||r.viewingCollectibles)?(Object(s["i"])(),Object(s["c"])(h,{key:2,viewing:r.viewingCollectibles,userId:r.viewingCollectibles?r.viewingUserId:r.userId,userName:r.viewingCollectibles?r.viewingUserName:r.userName,userAddress:r.viewingCollectibles?r.viewingUserAddress:r.userAddress,userLevel:r.viewingCollectibles?r.viewingUserLevel:r.userLevel,userWax:r.viewingCollectibles?r.viewingUserWax:r.userWax,user1Dan:r.viewingCollectibles?r.viewingUser1Dan:r.user1Dan,onLogout:c.handleLogout,onFetchUsers:c.fetchUsers,onFetchUserDetails:c.fetchUserDetails,onFetchViewingUserDetails:c.fetchViewingUserDetails,id:"collectibles-component"},null,8,["viewing","userId","userName","userAddress","userLevel","userWax","user1Dan","onLogout","onFetchUsers","onFetchUserDetails","onFetchViewingUserDetails"])):Object(s["d"])("",!0),Object(s["f"])("button",{onClick:t[1]||(t[1]=(...e)=>c.toggleHelp&&c.toggleHelp(...e)),id:"toggle-help-button"},Object(s["l"])(r.showHelp?"Hide Help":"Show Help"),1),Object(s["o"])(Object(s["f"])("div",{id:"help-section",class:"markdown-content",innerHTML:c.renderedMarkdown},null,8,l),[[s["n"],r.showHelp]])])}const r={network:{blockchain:"eos",host:"wax.greymass.com",port:443,protocol:"https",chainId:"1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",rpcEndpoints:[{protocol:"https",host:"wax.greymass.com",port:443}]},apiUrl:"https://feyn2w56gf.execute-api.eu-north-1.amazonaws.com/prod",apiKey:Object({VUE_APP_API_URL:"https://feyn2w56gf.execute-api.eu-north-1.amazonaws.com/prod",NODE_ENV:"production",BASE_URL:"/1DanGame/"}).BE_API_KEY||"Default API connection Secret of secrets ... that is",dummyVar:Object({VUE_APP_API_URL:"https://feyn2w56gf.execute-api.eu-north-1.amazonaws.com/prod",NODE_ENV:"production",BASE_URL:"/1DanGame/"}).BE_BB||"bla bla bla"};var c=r,d=i("4cf4"),u="### Game Purpose\n\nThe purpose of the **1Dan Nightmares Game** is to:\n- have **FUN** with your **1Dan Nightmares** collectibles\n- earn **1Dan** tokens\n- investigate AI capabilities creating non-trivial code logic\n\n**1Dan** tokens can be won every day based on the value of your collectibles in the game.\nThe value of your collectibles in the game determines also your level. \nThe level decides how many collectibles you are allowed to have in the game.\n\nAI is used to develop the game and manage as many aspects of it as possible.\nThe game project is therefore an AI experiment, even if it remains a relatively simplistic nightmare for now.\nThis approach aligns with the strategy of using AI to create the nightmare images in the collection.\nHopefully, the game's features and complexity will evolve alongside advances in AI capabilities.\n\n---\n---\n\n#### -- Entering the Game\n\nYou can log in with:\n* **Cloud Wallet**\n* **Anchor Wallet**\n\nThe first time you log in, you can select your alias in the game.\nFor now, you can use just one WAX network address per alias.\n\nThe wallet is used to sign a transfer of a tiny amount of 0.00000001 WAX.\nThis transfer is used to verify the user address on the WAX blockchain.\n\nSome notes about **Cloud Wallet**\n* Do not hide the WAX address in the wallet UI. It's needed when the login action is done.\n* For some reason the wallet window might close before the verification transaction is performed. Just try again. Or use the **Anchor Wallet** that does not have this problem.\n\n---\n\n#### -- Collectibles\n\nYou can add collectibles to the game.\nYou can remove collectibles from the game.\n\nOnly collectibles from the **1Dan Nightmares** collection (WAX name: ainightmares), that you own, can be used.\n\nThe collectibles used in the game might already be staked elsewhere on the WAX network. \nAlso it's OK to stake collectibles that you have in the game.\n\nA collectible\\'s **TEMPLATE_ID** (without the 'hash' character) is used to find it on the WAX blockchain. \nYou can see this ID in the collectible's metadata on **Uncut.Network** and **AtomicHub**.\n\n---\n\n#### -- Levels\n\nYou start at Level 0. You will be at this level when your in-game collectibles have a total WAX value between 0 and 99.\nLevel 1 requires collectibles with a total WAX value between 100 and 199. \nLevel 2 requires collectibles with a total WAX value between 200 and 299, and so on. \nThere is no level limit.\n\nA collectible's WAX value is the WAX price that you paid to buy the collectible.\nA collectible bought with ArtX is always valued at 0.1 WAX.\nIf a collectible is sold (after being added to the game) it's price will be set to 0 in the game. \nYou can remove it then from the game and free a slot for another collectible.\n\nAt each level:\n- 0, 1, 2: up to 20 collectibles are possible\n- 3: up to 30 collectibles are possible\n- 4: up to 40 collectibles are possible\n- and so on...\n\nYou can go up in levels as you add collectibles and their total value increases.\nHowever, you can also go down in levels when you remove or sell collectibles.\n\nIn other words, adding more valuable collectibles enables you to progress in levels.\nThe level determines how many collectibles you can add to the game.\n\n---\n\n#### -- Earning **1Dan** Tokens\n\nYou will earn **1Dan** tokens every day based on the total value of your collectibles in the game.\n\nEarning formula: (Collectibles WAX Value / 100) **1Dan** tokens per day\n\nExample:\n- On a specific day: Level 2, collectibles with a WAX value of 250: 2.5 **1Dan** tokens earned that day.\n\nIt will be possible to exchange **1Dan** tokens for **1Dan Nightmares** collectibles. \nCurrently, the exchange mechanism has not been decided yet.\n\nFor now, **1Dan** is just a token within this game. \nIn the future, it is possible to introduce the token on the WAX blockchain. \nWhen that happens, your **1Dan** game holdings can be exchanged for the WAX blockchain **1Dan** token.\n\n---\n---\n\n### Game Roadmap\n\n- Get as many players as possible\n- Introduce an exchange mechanism to exchange **1Dan Nightmares** collectibles for **1Dan** tokens\n- Mint the **1Dan** token on the WAX blockchain\n- Introduce other game features like collectible battles, etc.\n\n### Disclaimer: Application Functionality and Purpose\n\nThe application and its features are provided on an \"as is\" basis without any warranties or guarantees of any kind, express or implied. While every effort is made to ensure accuracy and reliability, 1Dan and its development team make no representations regarding the completeness, accuracy, or fitness for any particular purpose of the application. Users acknowledge that the application may contain bugs, errors, or interruptions and accept full responsibility for any use of, or reliance on, the application's functionality. Neither 1Dan nor its team shall be liable for any direct, indirect, incidental, or consequential damages arising from the use of this application. Use of the application is entirely at your own risk.\n\nThe functionality provided in this application is also intended strictly for recreational and informational purposes and should not be interpreted as financial, investment, or professional advice of any kind. Engaging with cryptocurrencies and digital assets involves inherent risks, and we strongly encourage users to conduct their own thorough research and seek professional advice before making any crypto financial or investment decisions. Neither 1Dan nor its development team assumes any responsibility for losses, damages, or adverse outcomes that may result from the use of this application or reliance on the information provided herein.\n\n\n\n";const h={class:"login",id:"login-container"},b={class:"wallet-container",id:"wallet-options"},m={key:0,class:"feedback",id:"feedback-message"};function g(e,t,i,o,n,l){const a=Object(s["k"])("PromptDialog");return Object(s["i"])(),Object(s["e"])("div",h,[Object(s["f"])("div",b,[t[2]||(t[2]=Object(s["f"])("h2",{id:"connect-wallet-title"},"Login with:",-1)),Object(s["f"])("button",{id:"cloud-wallet-button",onClick:t[0]||(t[0]=(...e)=>l.loginWithCloudWallet&&l.loginWithCloudWallet(...e))},"Cloud Wallet"),Object(s["f"])("button",{id:"anchor-wallet-button",onClick:t[1]||(t[1]=(...e)=>l.loginWithAnchorWallet&&l.loginWithAnchorWallet(...e))},"Anchor Wallet")]),n.feedback?(Object(s["i"])(),Object(s["e"])("p",m,Object(s["l"])(n.feedback),1)):Object(s["d"])("",!0),n.isPromptVisible?(Object(s["i"])(),Object(s["c"])(a,{key:1,id:"username-prompt-dialog",isVisible:n.isPromptVisible,title:"New user, enter alias",placeholder:"Your alias",onSubmit:l.handlePromptSubmit,onClose:l.handlePromptClose},null,8,["isVisible","onSubmit","onClose"])):Object(s["d"])("",!0)])}var f=i("1985"),p=i("a062"),w=i("86cd");const y={key:0,class:"prompt-dialog-overlay"},v={class:"prompt-dialog"},k=["placeholder"],j={class:"actions"};function O(e,t,i,o,n,l){return i.isVisible?(Object(s["i"])(),Object(s["e"])("div",y,[Object(s["f"])("div",v,[Object(s["f"])("h3",null,Object(s["l"])(i.title),1),Object(s["o"])(Object(s["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.inputValue=e),placeholder:i.placeholder,onKeydown:t[1]||(t[1]=Object(s["p"])((...e)=>l.submit&&l.submit(...e),["enter"]))},null,40,k),[[s["m"],n.inputValue]]),Object(s["f"])("div",j,[Object(s["f"])("button",{onClick:t[2]||(t[2]=(...e)=>l.submit&&l.submit(...e))},"Submit"),Object(s["f"])("button",{onClick:t[3]||(t[3]=t=>e.$emit("close"))},"Cancel")])])])):Object(s["d"])("",!0)}var A={name:"PromptDialog",props:{isVisible:{type:Boolean,required:!0},title:{type:String,default:"Prompt"},placeholder:{type:String,default:""}},data(){return{inputValue:""}},methods:{submit(){this.inputValue.trim()&&this.$emit("submit",this.inputValue.trim())}}},C=(i("df44"),i("6b0d")),U=i.n(C);const I=U()(A,[["render",O],["__scopeId","data-v-61aa6a42"]]);var W=I;function D(e){return new Promise(t=>setTimeout(t,e))}var P={name:"Login",components:{PromptDialog:W},props:{resetFeedback:{type:Boolean,default:!1}},data(){return{feedback:"",ualAnchor:null,isPromptVisible:!1,pendingWalletAddress:""}},watch:{resetFeedback(e){e&&(this.feedback="")}},methods:{async loginWithCloudWallet(){try{this.wax=new f["WaxJS"]({rpcEndpoint:"https://wax.greymass.com",tryAutoLogin:!1});const t=await this.wax.login();this.feedback="Login with: "+t;let i=await fetch(`${c.apiUrl}/users/${t}`,{method:"GET",headers:{"X-API-Key":""+c.apiKey}});i.ok||(this.feedback="Creating user: "+t,await this.createUser(t)),this.feedback="Authenticating with "+t,i=await fetch(`${c.apiUrl}/auth/challenge?address=${t}`,{method:"GET",headers:{"X-API-Key":""+c.apiKey}});const{challenge:s}=await i.json();console.log("Received challenge: "+s),this.feedback="Received login challenge: "+s;const o=3;let n=0,l=!1,a="eahq4.c.wam"==t?"jwiq2.c.wam":"eahq4.c.wam";while(n<o&&!l)try{n+=1,console.log(`Transaction attempt ${n} for user ${t}`),this.feedback=`Attempt ${n} to verify ownership...`,await this.wax.api.transact({actions:[{account:"eosio.token",name:"transfer",authorization:[{actor:t,permission:"active"}],data:{from:t,to:a,quantity:"0.00000001 WAX",memo:s}}]},{blocksBehind:3,expireSeconds:30}),l=!0,this.feedback="Transaction completed successfully!",console.log("Transaction sent with memo:",s)}catch(e){this.feedback="Wallet transaction failed. Retrying...",await D(1e3)}if(!l)throw new Error("Transaction failed after multiple attempts.");this.feedback="It takes a moment to check authentication for "+t;const r=await fetch(c.apiUrl+"/auth/login",{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":""+c.apiKey},body:JSON.stringify({address:t,memo:s})});if(r.ok){const{token:e}=await r.json();localStorage.setItem("authToken",e),this.$emit("login-success",t),this.feedback="Logged in as "+t,console.log("Login successful!")}else console.error("Login failed"),this.feedback="Login failed. Please try again."}catch(e){console.error("An error occurred during Cloud Wallet login:",e),this.feedback="An error occurred during Cloud Wallet login, just try again: "+(e.message||e)}},async loginWithAnchorWallet(){try{console.log("Network Configuration:",c.network);const t=new w["a"],i=new p["h"]({transport:t,chains:[{chainId:c.network.chainId,nodeUrl:"https://wax.greymass.com"}]}),s=await i.login("1DanNightmaresGame"),o=String(s.session.auth.actor),n=s.session;let l=await fetch(`${c.apiUrl}/users/${o}`,{method:"GET",headers:{"X-API-Key":""+c.apiKey}});l.ok||await this.createUser(o),l=await fetch(`${c.apiUrl}/auth/challenge?address=${o}`,{method:"GET",headers:{"X-API-Key":""+c.apiKey}});const{challenge:a}=await l.json();console.log("Received memo from server: "+a),this.feedback="Received login challenge: "+a;try{await n.transact({actions:[{account:"eosio.token",name:"transfer",authorization:[{actor:o,permission:"active"}],data:{from:o,to:"eahq4.c.wam"==o?"jwiq2.c.wam":"eahq4.c.wam",quantity:"0.00000001 WAX",memo:a}}]},{blocksBehind:3,expireSeconds:30}),console.log("Transaction sent with memo:",a)}catch(e){console.warn("Resource provider response error, but transaction was likely successful:",e)}this.feedback="Signed login challenge. Veryfying user ...";const r=await fetch(c.apiUrl+"/auth/login",{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":""+c.apiKey},body:JSON.stringify({address:o,memo:a})});if(r.ok){const{token:e}=await r.json();localStorage.setItem("authToken",e),this.$emit("login-success",o),this.feedback="Logged in as "+o,console.log("Login successful!")}else console.error("Login failed"),this.feedback="Login failed. Please try again."}catch(e){console.error("Anchor Wallet Login Error:",e),this.feedback="Error during Anchor Wallet login. Please try again."}},async handlePromptSubmit(e){if(!e||e.length>20||!/^[a-zA-Z0-9 ]+$/.test(e))this.feedback="Invalid name. Only use up to 20 characters with letters, numbers, and spaces.";else try{const t=await fetch(c.apiUrl+"/users",{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":""+c.apiKey},body:JSON.stringify({name:e,url:this.pendingWalletAddress,role:"gamer"})});if(!t.ok)throw new Error("Failed to create user");{const e=await t.json();await this.createWallet(e.user_id,this.pendingWalletAddress),this.isPromptVisible=!1,this._resolveUserCreation(e)}}catch(t){this.feedback="Error creating user. Please try again.",console.error("Error creating user:",t.message),this._rejectUserCreation(t)}},handlePromptClose(){this.isPromptVisible=!1},async createUser(e){return this.pendingWalletAddress=e,this.isPromptVisible=!0,new Promise((e,t)=>{this._resolveUserCreation=e,this._rejectUserCreation=t})},async createWallet(e,t){try{const i=await fetch(c.apiUrl+"/wallets",{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":""+c.apiKey},body:JSON.stringify({owner_id:e,address:t})});if(!i.ok)throw new Error("Failed to create wallet")}catch(i){console.error("Error creating wallet:",i),this.feedback="Error creating wallet. Please try again."}},mounted(){console.log("PromptDialog mounted, isVisible:",this.isVisible)}}};i("0c38");const T=U()(P,[["render",g],["__scopeId","data-v-6d3803d0"]]);var L=T;const x={id:"collectibles-container"},E={id:"user-info",class:"user-info"},S={id:"user-name"},V={id:"user-details",class:"user-details"},_={key:0,id:"feedback-message",class:"feedback"},N={id:"commands"},X={id:"scrollable-collectibles",class:"scrollable-collectibles"},$={key:0,id:"collectibles-list"},F=["id"],K=["id"],R=["id","onClick"],G=["href","id"],q={key:1,id:"no-collectibles"};function B(e,t,i,o,n,l){const a=Object(s["k"])("PromptDialog"),r=Object(s["k"])("ConfirmDialog");return Object(s["i"])(),Object(s["e"])("div",x,[Object(s["f"])("h2",E,[Object(s["f"])("span",S,Object(s["l"])(i.userName)+" ("+Object(s["l"])(i.userAddress)+")",1),t[1]||(t[1]=Object(s["f"])("span",{id:"spacer",class:"spacer"},null,-1)),Object(s["f"])("span",V," Level: "+Object(s["l"])(i.userLevel)+" | WAX: "+Object(s["l"])(i.userWax)+" | 1Dan: "+Object(s["l"])(i.user1Dan),1)]),n.feedback?(Object(s["i"])(),Object(s["e"])("p",_,Object(s["l"])(n.feedback),1)):Object(s["d"])("",!0),n.isPromptVisible?(Object(s["i"])(),Object(s["c"])(a,{key:1,isVisible:n.isPromptVisible,title:"Collectible TEMPLATE_ID",placeholder:"number, no leading '#'",onSubmit:l.handlePromptSubmit,onClose:l.handlePromptClose,id:"prompt-dialog"},null,8,["isVisible","onSubmit","onClose"])):Object(s["d"])("",!0),n.isConfirmVisible?(Object(s["i"])(),Object(s["c"])(r,{key:2,isVisible:n.isConfirmVisible,title:"Remove Collectible",message:"Are you sure you want to remove this collectible?",onConfirm:l.handleConfirmRemove,onCancel:l.handleCancelRemove,id:"confirm-dialog"},null,8,["isVisible","onConfirm","onCancel"])):Object(s["d"])("",!0),Object(s["f"])("div",N,[Object(s["f"])("button",{id:"add-collectible-btn",onClick:t[0]||(t[0]=(...e)=>l.addCollectible&&l.addCollectible(...e))},"Add Collectible")]),Object(s["f"])("div",X,[n.collectibles.length>0?(Object(s["i"])(),Object(s["e"])("div",$,[(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["j"])(n.collectibles,(e,t)=>(Object(s["i"])(),Object(s["e"])("div",{key:e.collectible_id,class:"collectible",id:"collectible-"+e.collectible_id},[Object(s["f"])("span",{class:"collectible-index",id:"collectible-index-"+t},Object(s["l"])(l.formatIndex(t+1)),9,K),Object(s["f"])("button",{id:"remove-collectible-btn-"+e.collectible_id,onClick:t=>l.removeCollectible(e.collectible_id)}," Remove ",8,R),Object(s["g"])(" "+Object(s["l"])(e.name)+" | "+Object(s["l"])(e.collectible_id)+" | ",1),Object(s["f"])("a",{href:e.url,target:"_blank",id:"collectible-url-"+e.collectible_id},Object(s["l"])(e.url.replace(/^https?:\/\//,"")),9,G),Object(s["g"])(" | "+Object(s["l"])(e.price)+" WAX ",1)],8,F))),128))])):(Object(s["i"])(),Object(s["e"])("p",q,"No collectibles in game."))])])}const H={key:0,class:"confirm-dialog-overlay"},M={class:"confirm-dialog"};function Y(e,t,i,o,n,l){return i.isVisible?(Object(s["i"])(),Object(s["e"])("div",H,[Object(s["f"])("div",M,[Object(s["f"])("h3",null,Object(s["l"])(i.title),1),Object(s["f"])("p",null,Object(s["l"])(i.message),1),Object(s["f"])("button",{onClick:t[0]||(t[0]=(...e)=>l.confirm&&l.confirm(...e)),class:"confirm-button"},"Yes"),Object(s["f"])("button",{onClick:t[1]||(t[1]=(...e)=>l.cancel&&l.cancel(...e)),class:"cancel-button"},"No")])])):Object(s["d"])("",!0)}var z={name:"ConfirmDialog",props:{isVisible:{type:Boolean,default:!1},title:{type:String,default:"Confirm"},message:{type:String,default:"Are you sure?"}},methods:{confirm(){this.$emit("confirm")},cancel(){this.$emit("cancel")}}};i("3eff");const J=U()(z,[["render",Y],["__scopeId","data-v-11da97a4"]]);var Z=J,Q={name:"Collectibles",components:{PromptDialog:W,ConfirmDialog:Z},props:{userId:{type:[String,Number,null],required:!0},userName:{type:String,required:!1,default:""},userAddress:{type:String,required:!1,default:""},userLevel:{type:[String,Number],required:!1,default:0},userWax:{type:Number,required:!1,default:0},user1Dan:{type:Number,required:!1,default:0},viewing:{type:Boolean,default:!1},resetFeedback:{type:Boolean,default:!1}},data(){return{feedback:"",collectibles:[],wax:null,dialogTitle:"",dialogMessage:"",isDialogVisible:!1,isPromptVisible:!1,isConfirmVisible:!1,supportedCollection:{name:"1Dan Nightmares",address:"ainightmares",standard:"atomicassets"}}},watch:{userId(e,t){console.log("oldUserId / newUserId:",t,e),e!==t&&this.fetchCollectibles()},userAddress(e){console.log("Updated Level:",e)},userLevel(e){console.log("Updated Level:",e)},userWax(e){console.log("Updated WAX:",e)},user1Dan(e){console.log("Updated 1Dan:",e)}},mounted(){console.log("Collectibles mounted, userId:",this.userId,"userName:",this.userName,"userAddress:",this.userAddress),this.userId&&this.fetchCollectibles()},methods:{async fetchCollectibles(){this.feedback="";try{const e=localStorage.getItem("authToken");if(!e)throw new Error("User is not authenticated. Token is missing.");const t=await fetch(`${c.apiUrl}/collectibles/search?owner_id=${this.userId}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e,"X-API-Key":""+c.apiKey}}),i=await t.json();this.collectibles=Array.isArray(i)?i:[]}catch(e){console.error("Error fetching collectibles:",e),this.feedback="Error fetching collectibles: "+e.message}},addCollectible(){console.log("Add Collectible button clicked, showing prompt dialog"),this.isPromptVisible=!0},async handlePromptSubmit(e){if(/^\d{1,10}$/.test(e)){this.feedback="",this.isPromptVisible=!1;try{await this.addCollectibleWithTemplateId(e)}catch(t){console.error("Error adding collectible with template ID:",t)}}else this.feedback="Template ID must be a number with just digits."},handlePromptClose(){this.isPromptVisible=!1},async addCollectibleWithTemplateId(e){this.feedback="Adding collectible with Template id: "+e;try{await this.addCollectibleToBackend({userAddress:this.userAddress,collectibleId:e}),this.viewing?(this.$emit("fetch-users"),this.$emit("fetch-viewing-user-details",this.userAddress)):this.$emit("fetch-user-details",this.userAddress),this.fetchCollectibles()}catch(t){console.error("Error adding collectible:",t),this.feedback=`Error adding collectible with temlate id '${e}': ${t.message}`}},async addCollectibleToBackend(e){const t=localStorage.getItem("authToken");if(!t)throw new Error("User is not authenticated. Token is missing.");const i=await fetch(c.apiUrl+"/collectibles",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t,"X-API-Key":""+c.apiKey},body:JSON.stringify({user_address:e.userAddress,collectible_id:e.collectibleId})});if(!i.ok){const e=await i.json();throw console.error("Failed to add collectible:",e.detail),new Error(e.detail)}console.log("Collectible added successfully")},async removeCollectible(e){this.collectibleToRemove=e,this.isConfirmVisible=!0},async handleConfirmRemove(){this.isConfirmVisible=!1;try{const e=localStorage.getItem("authToken");if(!e)throw new Error("User is not authenticated. Token is missing.");const t=await fetch(`${c.apiUrl}/collectibles/${this.collectibleToRemove}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e,"X-API-Key":""+c.apiKey}});if(!t.ok)throw new Error("Failed to remove collectible.");this.viewing?(this.$emit("fetch-users"),this.$emit("fetch-viewing-user-details",this.userAddress)):this.$emit("fetch-user-details",this.userAddress),this.fetchCollectibles(),this.feedback=""}catch(e){console.error("Error removing collectible:",e),this.feedback="Error removing collectible: "+e.message}finally{this.collectibleToRemove=null}},handleCancelRemove(){this.isConfirmVisible=!1,this.collectibleToRemove=null},formatIndex(e){return String(e).padStart(4," ")},logout(){try{this.wax.logout()}catch(e){console.error("Error during WAX Cloud Wallet logout:",e)}this.$emit("logout")}}};i("0e56");const ee=U()(Q,[["render",B],["__scopeId","data-v-0c8c4da1"]]);var te=ee;const ie={id:"users-component"},se={key:0,id:"feedback-message",class:"feedback"},oe={id:"users-list",class:"user-scrollable-list"},ne=["onClick"],le={class:"user-index"};function ae(e,t,i,o,n,l){return Object(s["i"])(),Object(s["e"])("div",ie,[t[0]||(t[0]=Object(s["f"])("h2",null,"Gamers",-1)),n.feedback?(Object(s["i"])(),Object(s["e"])("p",se,Object(s["l"])(n.feedback),1)):Object(s["d"])("",!0),Object(s["f"])("div",oe,[(Object(s["i"])(!0),Object(s["e"])(s["a"],null,Object(s["j"])(n.users,(e,t)=>(Object(s["i"])(),Object(s["e"])("div",{key:e.id,class:"user-item",onClick:t=>l.viewCollectibles(e)},[Object(s["f"])("span",le,Object(s["l"])(l.formatIndex(t+1)),1),Object(s["g"])(" "+Object(s["l"])(e.name)+" ("+Object(s["l"])(e.url)+") | Level: "+Object(s["l"])(e.level)+" | WAX: "+Object(s["l"])(e.wax.toFixed(2))+" | 1Dan: "+Object(s["l"])(e.onedan.toFixed(2)),1)],8,ne))),128))])])}var re={name:"Users",data(){return{feedback:"",users:[]}},mounted(){this.fetchUsers()},methods:{async fetchUsers(){this.feedback="Fetching users";try{const e=await fetch(c.apiUrl+"/users",{method:"GET",headers:{"X-API-Key":""+c.apiKey}});e.ok?this.users=await e.json():(this.feedback="Failed to fetch users",console.error("Failed to fetch users"))}catch(e){this.feedback="Failed to fetch users: "+e,console.error("Error fetching users:",e)}console.log("Fetched user details"),this.feedback=""},viewCollectibles(e){this.feedback="",this.$emit("view-collectibles",e)},formatIndex(e){return e.toString().padStart(4," ")}}};i("cb8e");const ce=U()(re,[["render",ae],["__scopeId","data-v-1e6f9fec"]]);var de=ce,ue={name:"App",components:{Login:L,Collectibles:te,Users:de},data(){return{isLoggedIn:!1,userId:null,userName:null,userAddress:null,userRole:null,userLevel:null,userWax:null,user1Dan:null,resetFeedback:!1,showHelp:!1,markdownText:u,viewingCollectibles:!1,viewingUserId:null,viewingUserName:null,viewingUserAddress:null,viewingUserLevel:null,viewingUserWax:null,viewingUser1Dan:null}},computed:{renderedMarkdown(){const e=new d["a"];return e.render(this.markdownText)}},mounted(){const e=localStorage.getItem("userAddress");e&&(this.userAddress=e,this.fetchUserDetails(this.userAddress).then(e=>{e?this.isLoggedIn=!0:(console.error("Failed to log in automatically due to missing or invalid user data."),this.handleLogout())}).catch(e=>{console.error("Failed to fetch user details on mount:",e),this.handleLogout()}))},methods:{async handleLoginSuccess(e){try{this.userAddress=e,localStorage.setItem("userAddress",this.userAddress);const t=await fetch(`${c.apiUrl}/users/${e}`,{method:"GET",headers:{"X-API-Key":""+c.apiKey}});if(t.ok){const e=await t.json();this.userId=e.id,this.userName=e.name,this.userAddress=e.url,this.userRole=e.role,this.userLevel=e.level,this.userWax=e.wax,this.user1Dan=e.onedan,this.isLoggedIn=!0}else console.error("Failed to fetch user data"),this.userName="Unknown User",this.userAddress=""}catch(t){console.error("Error fetching user data:",t),this.userName="Unknown User",this.userAddress=""}},async fetchUserDetails(e){try{const t=await fetch(`${c.apiUrl}/users/${e}`,{method:"GET",headers:{"X-API-Key":""+c.apiKey}});if(t.ok){const e=await t.json();return this.userId=e.id,this.userName=e.name,this.userAddress=e.url,this.userRole=e.role,this.userLevel=e.level,this.userWax=e.wax,this.user1Dan=e.onedan,console.log("User details fetched successfully:",e),!0}return console.error("Failed to fetch user details"),!1}catch(t){return console.error("Error fetching user details:",t),!1}},async fetchViewingUserDetails(e){try{const t=await fetch(`${c.apiUrl}/users/${e}`,{method:"GET",headers:{"X-API-Key":""+c.apiKey}});if(t.ok){const e=await t.json();return this.viewingUserId=e.id,this.viewingUserName=e.name,this.viewingUserAddress=e.url,this.viewingUserRole=e.role,this.viewingUserLevel=e.level,this.viewingUserWax=e.wax,this.viewingUser1Dan=e.onedan,console.log("Viewing User details fetched successfully:",e),!0}return console.error("Failed to fetch Viewing user details"),!1}catch(t){return console.error("Error fetching Viewing user details:",t),!1}},fetchUsers(){this.$refs.users.fetchUsers()},handleUserCreated(e){this.fetchUserDetails(this.userAddress),this.isLoggedIn=!0,console.log("User created successfully:",e)},viewCollectiblesForUser(e){this.viewingUserId=e.id,this.viewingUserName=e.name,this.viewingUserAddress=e.url,this.viewingUserLevel=e.level,this.viewingUserWax=e.wax,this.viewingUser1Dan=e.onedan,this.viewingCollectibles=!0},handleLogout(){try{this.wax&&"function"===typeof this.wax.logout&&this.wax.logout()}catch(e){console.error("Error during WAX Cloud Wallet logout:",e)}this.isLoggedIn=!1,this.viewingCollectibles=!1,this.userId=null,this.userName=null,this.userAddress=null,this.userRole=null,this.userLevel=null,this.userWax=null,this.user1Dan=null,this.viewingUserId=null,this.viewingUserName=null,this.viewingUserAddress=null,this.viewingUserLevel=null,this.viewingUserWax=null,this.viewingUser1Dan=null,this.resetFeedback=!0,localStorage.removeItem("userAddress"),setTimeout(()=>{this.resetFeedback=!1},0),console.log("User has been logged out")},toggleHelp(){this.showHelp=!this.showHelp}}};i("c95b");const he=U()(ue,[["render",a],["__scopeId","data-v-2161a876"]]);var be=he;i("a347");Object(s["b"])(be).mount("#app")},"720a":function(e,t,i){},8122:function(e,t,i){},a347:function(e,t,i){},b33f:function(e,t,i){},c595:function(e,t,i){},c95b:function(e,t,i){"use strict";i("c595")},cb8e:function(e,t,i){"use strict";i("f3d4")},df44:function(e,t,i){"use strict";i("8122")},f3d4:function(e,t,i){}});
//# sourceMappingURL=app.ec5525921478e3243ef1.js.map