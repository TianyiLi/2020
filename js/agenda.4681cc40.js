(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["agenda"],{"47b7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"page-container",attrs:{id:"agenda"}},[n("AgendaNavbar",{model:{value:e.dayIndex,callback:function(t){e.dayIndex=t},expression:"dayIndex"}}),e._l(e.daysData,(function(t,a){return[null!==t?n("AgendaTable",{directives:[{name:"show",rawName:"v-show",value:e.dayIndex===a&&e.breakpointService.smAndUp,expression:"dayIndex === index && breakpointService.smAndUp"}],key:"table-"+t.day.join(""),attrs:{table:t.table}}):e._e(),null!==t?n("AgendaList",{directives:[{name:"show",rawName:"v-show",value:e.dayIndex===a&&e.breakpointService.xsOnly,expression:"dayIndex === index && breakpointService.xsOnly"}],key:"list-"+t.day.join(""),attrs:{list:t.list}}):e._e()]}))],2)},r=[],s=(n("4160"),n("d81d"),n("a434"),n("b0c0"),n("c1f9"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),c=n("5530"),o=n("8055"),i=n.n(o),u=n("bc3a"),l=n.n(u),d=n("e4fd"),p=n("afbc"),b=n("11a5"),m=n("680e"),f=n("b536"),v=n("ab44"),g=n("2aff"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"agenda-navbar"},[n("div",{staticClass:"tabs"},e._l(e.days,(function(t,a){return n("div",{key:"day-option-"+a,staticClass:"tab",class:{active:e.selectedDay.join("")===t.join("")},on:{click:function(t){return e.onTabClick(a)}}},[n("span",{staticClass:"day-text"},[e._v(e._s("Day "+(a+1)))]),n("span",{staticClass:"date"},[e._v(e._s(t.join(" / ")))])])})),0)])},O=[],y=(n("a9e3"),Object(d["defineComponent"])({name:"AgendaNavbar",props:{value:{type:Number,required:!0}},setup:function(e,t){var n=Object(m["a"])(),a=Object(d["computed"])((function(){return n.days})),r=Object(d["computed"])((function(){return a.value[e.value]})),s=function(e){t.emit("input",e)};return{days:a,selectedDay:r,onTabClick:s}}})),h=y,_=n("2877"),T=Object(_["a"])(h,j,O,!1,null,"8fb8248a",null),C=T.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"agenda-table",style:e.tableStyle},[n("thead",{staticClass:"room-list"},[n("tr",e._l(e.table.rooms,(function(e,t){return n("th",{key:"table-room-"+t},[n("div",{staticClass:"cell-content"},[n("AgendaTableRoomCell",{attrs:{"room-id":e}})],1)])})),0)]),n("div",{staticStyle:{height:"0.5rem"}}),n("tbody",{staticClass:"table-body"},e._l(e.table.rows,(function(t,a){return n("tr",{key:"table-row-"+a},e._l(t,(function(t,r){return n("td",{key:"table-row-"+a+"-cell-"+r,attrs:{rowspan:t.rowSpan}},[n("div",{staticClass:"cell-content",class:{blank:t.type===e.TableCellType.Blank}},[t.type!==e.TableCellType.Blank?n("AgendaSessionItem",{attrs:{"session-id":t.sessionId}}):e._e()],1)])})),0)})),0)])},x=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"agenda-session-item",attrs:{to:e.location}},[n("section",{staticClass:"content-section"},[n("h4",{staticClass:"track"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.breakpointService.xsOnly,expression:"breakpointService.xsOnly"}],staticClass:"room",class:{full:e.isFull}},[n("span",{staticClass:"status"},[e._v(e._s(e.statusText))]),n("span",{staticClass:"name"},[e._v(e._s(e.room))])]),n("span",[e._v(e._s(e.track))])]),n("h4",{staticClass:"period"},[e._v(e._s(e.period))]),n("h2",{staticClass:"title"},[e._v(e._s(e.title))]),n("h3",{staticClass:"speaker-list"},[n("span",[e._v("by")]),e._l(e.speakers,(function(t,a){return n("span",{key:"session-"+e.session.id+"-speaker-"+a,staticClass:"speaker"},[e._v(" "+e._s(t)+" ")])}))],2),n("div",{staticClass:"tag-list"},[n("span",[e._v(" "+e._s(e.language)+" ")]),e._l(e.tags,(function(t,a){return n("span",{key:"tag-"+e.session.id+"-tag-"+a,staticClass:"tag"},[e._v(" "+e._s(t)+" ")])}))],2)])])},I=[],R=(n("99af"),n("1276"),Object(d["defineComponent"])({name:"AgendaSessionItem",props:{sessionId:{type:String,required:!0}},setup:function(e){var t=Object(p["c"])(),n=Object(m["a"])(),a=Object(m["c"])(),r=Object(d["inject"])("languageType")||{value:"zh"},s=Object(d["inject"])("roomsStatus")||{value:{}},o=Object(m["e"])(),i=Object(d["computed"])((function(){var t=n.getSessionById(e.sessionId);if(null===t)throw new Error("Invalid Session");return t})),u=Object(d["computed"])((function(){return{name:"AgendaDetail",params:Object(c["a"])(Object(c["a"])({},t.currentRoute.params),{},{sessionId:e.sessionId})}})),l=Object(d["computed"])((function(){return i.value.type[r.value].name})),f=Object(d["computed"])((function(){return"".concat(Object(b["c"])(i.value.start,"：")," ~ ").concat(Object(b["c"])(i.value.end,"："))})),v=Object(d["computed"])((function(){return i.value[r.value].title})),g=Object(d["computed"])((function(){return i.value.speakers.map((function(e){return e[r.value].name}))})),j=Object(d["computed"])((function(){return i.value.tags.map((function(e){return e[r.value].name}))})),O=Object(d["computed"])((function(){return i.value.language})),y=Object(d["computed"])((function(){return i.value.room[r.value].name.split(" / ")[0]})),h=Object(d["computed"])((function(){return!!s.value[i.value.room.id]})),_=Object(d["computed"])((function(){return o.languagePack.agenda["room-status"][h.value?"full":"vacancy"]}));return{breakpointService:a,session:i,location:u,track:l,period:f,title:v,speakers:g,tags:j,language:O,room:y,isFull:h,statusText:_}}})),A=R,S=Object(_["a"])(A,w,I,!1,null,null,null),N=S.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"agenda-table-room-cell"},[n("div",{staticClass:"status"},[n("span",{staticClass:"bubble",class:{full:e.isFull}}),n("span",{staticClass:"text"},[e._v(e._s(e.statusText))])]),n("span",[e._v("Room")]),n("span",[e._v(e._s(e.roomName))])])},D=[],F=Object(d["defineComponent"])({name:"AgendaTableRoomCell",props:{roomId:{type:String,required:!0}},setup:function(e){var t=Object(d["inject"])("languageType")||{value:"zh"},n=Object(d["inject"])("roomsStatus")||{value:{}},a=Object(m["e"])(),r=Object(m["a"])(),s=Object(d["computed"])((function(){var t=r.getRoomById(e.roomId);if(null===t)throw new Error("Invalid Room");return t})),c=Object(d["computed"])((function(){return s.value[t.value].name.split(" / ")[0]})),o=Object(d["computed"])((function(){return!!n.value[e.roomId]})),i=Object(d["computed"])((function(){return a.languagePack.agenda["room-status"][o.value?"full":"vacancy"]}));return{roomName:c,isFull:o,statusText:i}}}),M=F,L=Object(_["a"])(M,E,D,!1,null,null,null),q=L.exports,B=Object(d["defineComponent"])({name:"AgendaTable",components:{AgendaTableRoomCell:q,AgendaSessionItem:N},props:{table:{type:Object,required:!0}},setup:function(e){var t=Object(p["c"])(),n=Object(d["inject"])("languageType")||"zh",a=Object(d["computed"])((function(){return{"--table-column":e.table.rooms.length}})),r=function(e){return{name:"AgendaDetail",params:Object(c["a"])(Object(c["a"])({},t.currentRoute.params),{},{sessionId:e})}};return{TableCellType:b["a"],languageType:n,tableStyle:a,getSessionLocation:r}}}),P=B,U=Object(_["a"])(P,k,x,!1,null,null,null),$=U.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"agenda-list"},e._l(e.list.sections,(function(t,a){return n("section",{key:"agenda-list-section-"+a,staticClass:"section"},[n("li",{staticClass:"time"},[e._v(" "+e._s(e.formatTimeString(t.start,"："))+" ")]),e._l(t.sessions,(function(e){return n("li",{key:"agenda-list-section-"+a+"-session-"+e,staticClass:"session-item-container"},[n("AgendaSessionItem",{attrs:{"session-id":e}})],1)}))],2)})),0)},G=[],V=Object(d["defineComponent"])({name:"AgendaList",components:{AgendaSessionItem:N},props:{list:{type:Object,required:!0}},setup:function(){return{formatTimeString:b["c"]}}}),J=V,X=Object(_["a"])(J,z,G,!1,null,null,null),Y=X.exports,W=(n("c868"),Object(d["defineComponent"])({name:"Agenda",components:{AgendaNavbar:C,AgendaTable:$,AgendaList:Y},setup:function(){var e=Object(v["c"])(),t=Object(p["c"])(),n=Object(m["e"])(),a=Object(m["f"])(),r=Object(m["c"])(),o=Object(d["reactive"])(Object(b["b"])(["RB105","AU","TR209","TR211","TR212","TR213","TR214","TR309","TR311","TR313","TR409-2","TR410","TR411","TR412-1","TR412-2","TR413-1","TR413-2"])),u=Object(d["computed"])((function(){return"zh-TW"===n.languageType?"zh":n.languageType})),j=Object(d["ref"])([]),O=Object(d["computed"])((function(){return Object.fromEntries(j.value.map((function(e){return[e.id,e.isFull]})))})),y=null,h=Object(d["ref"])(0),_=Object(d["ref"])(o.days.map((function(){return null}))),T=function(){if("AgendaDetail"===t.currentRoute.name){var e="room"===t.currentRoute.query.from;t.push(Object(c["a"])(Object(c["a"])({},t.currentRoute),{},{name:e?"Room":"Agenda",query:Object(c["a"])(Object(c["a"])({},t.currentRoute.query),{},{from:void 0})}))}},C=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:"","template"!==t){e.next=5;break}e.t0={popupId:"session-template",metaOptions:{title:"Template"},containerData:{type:f["a"].Default},contentData:{type:f["b"].General,html:'<article id="session-detail" class="session-detail"><h1>Session Popup Template</h1></article>'}},e.next=8;break;case 5:return e.next=7,o.getSessionPopupData(t,u.value);case 7:e.t0=e.sent;case 8:n=e.t0,a.popup(Object(c["a"])(Object(c["a"])({},n),{},{onClose:T}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("AgendaDetail"!==n.name){e.next=12;break}return e.prev=1,e.next=4,C(n.params.sessionId);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e["catch"](1),e.next=10,t.replace(Object(c["a"])(Object(c["a"])({},t.currentRoute),{},{name:"Agenda"}));case 10:e.next=13;break;case 12:"Agenda"===n.name&&a.close();case 13:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e="https://coscup2020-room.deviltea.me",t=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("".concat(e,"/api/rooms_status"));case 2:n=t.sent,a=n.data,j.value=a.roomsStatus;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{y=i()(e),y.on("connect",t),y.on("update",t)}catch(n){console.error(n)}},w=function(){y&&y.connected&&(y.disconnect(),y=null)};return Object(d["watch"])((function(){return h.value}),(function(e){var t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),n=Object(g["a"])({to:{x:0,y:0},duration:t?10:void 0}),a=n.cancel,r=["wheel","mousewheel","DOMMouseScroll"],s=function e(){r.forEach((function(t){return window.removeEventListener(t,e)})),a()};r.forEach((function(e){return window.addEventListener(e,s)})),null===_.value[e]&&_.value.splice(e,1,o.getDayData(e))})),Object(d["watch"])((function(){return t.currentRoute}),k),Object(d["onMounted"])(Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return _.value.splice(h.value,1,o.getDayData(h.value)),n.next=3,k(t.currentRoute);case 3:return e(),n.next=6,Object(d["nextTick"])();case 6:x();case 7:case"end":return n.stop()}}),n)})))),Object(d["onBeforeUnmount"])((function(){w()})),Object(d["provide"])("agendaService",o),Object(d["provide"])("languageType",u),Object(d["provide"])("roomsStatus",O),{breakpointService:r,dayIndex:h,daysData:_,roomsStatus:O}}})),H=W,K=Object(_["a"])(H,a,r,!1,null,null,null);t["default"]=K.exports},a434:function(e,t,n){"use strict";var a=n("23e7"),r=n("23cb"),s=n("a691"),c=n("50c4"),o=n("7b0b"),i=n("65f0"),u=n("8418"),l=n("1dde"),d=n("ae40"),p=l("splice"),b=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,f=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!b},{splice:function(e,t){var n,a,l,d,p,b,j=o(this),O=c(j.length),y=r(e,O),h=arguments.length;if(0===h?n=a=0:1===h?(n=0,a=O-y):(n=h-2,a=f(m(s(t),0),O-y)),O+n-a>v)throw TypeError(g);for(l=i(j,a),d=0;d<a;d++)p=y+d,p in j&&u(l,d,j[p]);if(l.length=a,n<a){for(d=y;d<O-a;d++)p=d+a,b=d+n,p in j?j[b]=j[p]:delete j[b];for(d=O;d>O-a+n;d--)delete j[d-1]}else if(n>a)for(d=O-a;d>y;d--)p=d+a-1,b=d+n-1,p in j?j[b]=j[p]:delete j[b];for(d=0;d<n;d++)j[d+y]=arguments[d+2];return j.length=O-a+n,l}})},a9e3:function(e,t,n){"use strict";var a=n("83ab"),r=n("da84"),s=n("94ca"),c=n("6eeb"),o=n("5135"),i=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),p=n("7c73"),b=n("241c").f,m=n("06cf").f,f=n("9bf2").f,v=n("58a8").trim,g="Number",j=r[g],O=j.prototype,y=i(p(O))==g,h=function(e){var t,n,a,r,s,c,o,i,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(s=u.slice(2),c=s.length,o=0;o<c;o++)if(i=s.charCodeAt(o),i<48||i>r)return NaN;return parseInt(s,a)}return+u};if(s(g,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var _,T=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof T&&(y?d((function(){O.valueOf.call(n)})):i(n)!=g)?u(new j(h(t)),n,T):h(t)},C=a?b(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;C.length>k;k++)o(j,_=C[k])&&!o(T,_)&&f(T,_,m(j,_));T.prototype=O,O.constructor=T,c(r,g,T)}},c868:function(e,t,n){}}]);
//# sourceMappingURL=agenda.4681cc40.js.map