import{j as p,r as l,A as b,R as v,a as y}from"./vendor.53ce0755.js";const g=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}};g();const x={debugItems:[{name:"GPS RTK status",state:"Fixed"},{name:"TRACK status",state:"On"}]},_="_table_176v2_1";var k={table:_};const n=p.exports.jsx,f=p.exports.jsxs;class w extends l.exports.Component{render(){return n("table",{style:{gridTemplateColumns:`repeat(${this.props.columns}, 1fr)`},className:k.table,children:this.props.children})}}const T="_header_1rzw6_1";var C={header:T};class R extends l.exports.Component{render(){return n("thead",{children:this.props.headers.map((e,a)=>n("th",{className:C.header,children:e},a))})}}class N extends l.exports.Component{render(){return n("tbody",{children:this.props.children})}}const A="_row_d10ys_1";var O={row:A};class $ extends l.exports.Component{render(){return n("tr",{className:O.row,children:this.props.children})}}var m={"data-cell":"_data-cell_2wvbm_1","data-cell-name":"_data-cell-name_2wvbm_8","data-cell-unknown":"_data-cell-unknown_2wvbm_11","data-cell-critical":"_data-cell-critical_2wvbm_25","data-cell-good":"_data-cell-good_2wvbm_39","data-cell-bad":"_data-cell-bad_2wvbm_53"};class h extends l.exports.Component{render(){return n("td",{className:`${m["data-cell"]} ${m[`data-cell-${this.props.type}`]}`,children:this.props.content})}}const K=(r,e)=>r==="GPS RTK status"&&(e==null?void 0:e.rtkStatus)===void 0?["-","unknown"]:r==="GPS RTK status"&&(e==null?void 0:e.rtkStatus)===!0?["Fixed","good"]:r==="GPS RTK status"&&(e==null?void 0:e.rtkStatus)===!1?["Disable","bad"]:r==="TRACK status"&&(e==null?void 0:e.trackStatus)===void 0?["-","unknown"]:r==="TRACK status"&&(e==null?void 0:e.trackStatus)===!0?["On","good"]:r==="TRACK status"&&(e==null?void 0:e.trackStatus)===!1?["Off","bad"]:["-","unknown"],j=({tableHeaders:r,topicStats:e})=>f(w,{columns:r.length,children:[n(R,{headers:r}),n(N,{children:x.debugItems.map((a,d)=>{const t=K(a.name,e);return f($,{children:[n(h,{content:a.name}),n(h,{content:t[0].toString(),type:t[1]})]},d)})})]}),L=()=>{const[r,e]=l.exports.useState(),[a,d]=l.exports.useState(),t=(o,u,i)=>o+i*1e3<u;l.exports.useLayoutEffect(()=>{b.addModuleDataListener(s)},[]);const s=async o=>{const u=o.streams;if(Object.keys(u).length===0)throw new Error("No streams.");Object.keys(u).forEach(i=>{const c=P(u,i);if(typeof c[1]!="string"&&c[1]!==void 0){if(u[i].data[0].name==="rtk.status"){if(t(c[0],o.time,10)){e(void 0);return}e(c[1].values[0])}if(u[i].data[0].name==="track.status"){if(t(c[0],o.time,10)){d(void 0);return}d(c[1].values[0])}}})};return n(j,{topicStats:{rtkStatus:r,trackStatus:a},tableHeaders:["Item","Status"]})},P=(r,e)=>{if(r[e]===void 0)return"No stream.";if(r[e].loading)return;if(r[e].tooMuchData)return"Too much data.";if(r[e].data.length===0)return"No data.";const a=r[e].data[0].points.at(-1);return a||"No datapoints."};function M(){return n("div",{className:"App",children:n(L,{})})}v.render(n(y.StrictMode,{children:n(M,{})}),document.getElementById("root"));
