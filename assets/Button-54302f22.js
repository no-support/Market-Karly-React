import{j as _}from"./index-6696b3c6.js";const n="_normal_mbato_148",w="_popup_mbato_160",m="_footer_mbato_174",b="_white_mbato_183",c="_gray_mbato_189",p="_primary_mbato_196",u="_disabled_mbato_203",l="_grayborder_mbato_207",g="_width143_mbato_214",y="_width333_mbato_218",f="_width340_mbato_222",$="_width424_mbato_226",N="_width155_mbato_230",x="_width244_mbato_234",j="_width284_mbato_238",P="_width174_mbato_242",B="_height44_mbato_246",C="_height54_mbato_250",t={normal:n,popup:w,footer:m,white:b,gray:c,primary:p,disabled:u,grayborder:l,width143:g,width333:y,width340:f,width424:$,width155:N,width244:x,width284:j,width174:P,height44:B,height54:C};function E(h){const{children:i,color:s=!1,width:o,height:a,borderType:e=!1,...r}=h,d=`${t.normal} ${s?t.white:""} ${o==="143"?t.width143:o==="333"?t.width333:o==="340"?t.width340:o==="424"?t.width424:o==="155"?t.width155:o==="244"?t.width244:o==="284"?t.width284:o==="174"?t.width174:""} ${a==="54"?t.height54:t.height44} ${e?t.grayborder:""}`;return _.jsx("button",{type:"button",className:d,...r,children:i})}function R({children:h,color:i,isValid:s=!0,...o}){const a=`${t.popup} ${i?t[`${i}`]:""} ${s?"":t.disabled}`;return _.jsx("button",{className:a,disabled:!s,...o,children:h})}function T(h){const{children:i,...s}=h;return _.jsx("button",{type:"button",className:t.footer,children:i})}export{T as F,E as N,R as P};