import{j as e,L as r,r as n,R as _,a as L,u as q,N as g,O as U}from"./index-c4faf7a6.js";import{c as H,b as N,i as w,r as P}from"./bubbleState-9a50de45.js";import{c as b}from"./fbase-b339bbaa.js";import{F as C}from"./Button-ba9d9565.js";const Z="_userMenuList_1i8ai_139",W={userMenuList:Z};function D(){const t=[{key:"register",to:"/Register",text:"회원가입"},{key:"login",to:"/Login",text:"로그인"},{key:"customerService",to:"/",text:"고객센터"}];return e.jsx("ul",{className:W.userMenuList,children:t.map(s=>e.jsx("li",{children:e.jsx(r,{to:s.to,children:s.text})},s.key))})}const A=t=>n.createElement("svg",{width:82,height:42,viewBox:"0 0 82 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("g",{clipPath:"url(#clip0_42_1137)"},n.createElement("path",{d:"M62.5002 0.964993C63.5262 0.407993 64.9662 0.246993 65.8562 1.07199C66.7462 1.89699 66.5322 3.11999 65.8562 5.04499C65.8562 5.04499 64.3512 9.11099 62.8012 13.307L62.4032 14.387C60.9892 18.217 59.6412 21.874 59.4762 22.35C57.9782 26.595 61.4432 26.472 63.5002 22.198C64.6592 19.804 66.1442 15.841 66.1442 15.841C66.6682 14.278 66.8262 13.337 66.5032 13.013C66.3962 12.9 66.5482 12.761 66.6832 12.69C68.9522 11.541 71.3132 12.618 70.0192 16L69.9652 16.138C69.5782 17.116 67.2852 22.871 67.2852 22.871C66.6092 24.531 66.6902 26.107 67.7032 26.107C68.3892 26.103 69.1632 25.722 70.0072 25.019C71.8252 23.515 73.2292 20.707 73.7342 19.565C73.9642 19.057 74.8212 17.145 75.5002 15.204C75.7362 14.539 75.8692 13.844 75.8952 13.139C75.8778 13.0519 75.887 12.9615 75.9216 12.8796C75.9562 12.7978 76.0146 12.7282 76.0892 12.68C76.6034 12.4061 77.1767 12.262 77.7592 12.26C78.0416 12.2547 78.3212 12.3158 78.5756 12.4382C78.83 12.5607 79.0522 12.7411 79.2242 12.965C79.6672 13.563 79.7902 14.544 79.3272 15.773C79.2072 16.093 75.5522 25.731 75.5522 25.731V25.757C77.5932 24.534 79.4222 24.444 80.5052 24.903L80.5022 24.89C81.9972 25.537 82.4922 27.33 81.4402 28.449C81.3372 28.559 81.0782 28.533 81.0782 28.359C80.9842 27.106 78.5612 24.864 74.9692 27.284L74.8242 27.669L73.7562 30.477C71.1362 37.495 68.3532 42.613 64.3412 41.477C61.6532 40.717 61.9642 36.87 64.8562 33.687C66.8588 31.5511 69.0291 29.5788 71.3462 27.789C71.4142 27.601 71.4762 27.439 71.5342 27.278C71.8122 26.498 72.0252 25.844 72.3262 25.013L72.4852 24.495C72.3072 24.695 71.9872 25.068 71.7732 25.307C71.0612 26.107 69.2792 28.064 66.4442 27.514L66.2102 27.462C64.1602 26.954 63.6022 25.476 63.5552 24.185C61.4132 26.841 59.2042 27.611 57.7482 27.575C55.8002 27.527 54.3702 26.061 55.3212 23.285C56.3792 20.179 60.8212 7.95299 62.1162 4.28499C62.6012 2.70499 62.7822 1.70499 62.3002 1.31099C62.1772 1.20799 62.3522 1.04599 62.5002 0.964993ZM70.8642 29.743C69.7612 30.623 65.3382 34.273 64.1122 37.184C63.6072 38.381 63.7362 39.333 64.6002 39.417C66.5602 39.611 68.6122 35.599 70.8282 29.905L70.8642 29.743ZM16.0282 5.35199C15.9412 5.68399 14.7092 9.21199 13.3272 13.101L13.1182 13.687L12.9082 14.276L12.6932 14.88C17.3842 13.757 25.7572 8.30999 26.7282 4.79499C26.8482 4.63399 27.0182 4.57499 27.2942 4.75999C27.7892 5.08999 27.9802 5.91499 27.7892 6.67799C27.0252 9.71599 21.3732 14.019 16.4102 16.232C17.0222 17.869 19.0922 22.499 20.6162 25.343C22.2792 28.462 24.0362 29.918 26.7632 30.08C28.2232 30.165 29.7772 29.633 30.6562 28.86L30.8042 28.72L30.7912 28.75C30.9852 28.546 31.3022 28.827 31.1572 29.073C30.6012 29.9021 29.8616 30.5921 28.9959 31.0893C28.1302 31.5865 27.1616 31.8776 26.1652 31.94C19.8202 32.367 17.3912 28.07 12.8612 17.446C12.4952 17.572 12.0522 17.734 11.6062 17.896C11.5312 18.083 9.53624 23.538 9.47624 23.719C8.53224 26.589 8.47124 28.161 9.11824 28.614C9.26324 28.704 9.19224 28.947 8.94024 29.028C6.41324 29.824 4.08724 28.332 5.38124 24.586C6.54224 21.27 11.0712 8.40599 12.2952 4.95999C12.7222 3.66599 12.4922 2.83499 11.8032 2.65399C8.50624 1.77999 0.877239 8.74899 1.97124 15.184C2.16124 16.304 2.95124 16.931 3.34924 16.847C3.37092 16.8427 3.39335 16.8438 3.41448 16.8503C3.43562 16.8568 3.4548 16.8685 3.47028 16.8843C3.48577 16.9 3.49708 16.9194 3.50318 16.9407C3.50929 16.962 3.50999 16.9844 3.50524 17.006C3.39441 17.3855 3.13894 17.7064 2.79385 17.8994C2.44876 18.0924 2.04166 18.1422 1.66024 18.038C0.490239 17.782 0.107239 16.527 0.0432389 15.88C-0.600761 9.21999 6.14824 1.22999 12.3892 0.579993C14.7672 0.329993 16.9982 1.53999 16.0282 5.35199ZM40.0682 15.265L40.0082 15.472L37.1782 23.632C36.8742 24.482 37.0782 25.369 37.6792 25.534C39.4362 26.016 41.7072 23.389 42.8102 20.801C43.3405 19.5445 43.8327 18.2722 44.2862 16.986C44.8682 15.343 45.3922 13.803 45.0692 13.078C44.9942 12.91 45.1142 12.822 45.2922 12.728C45.7972 12.473 47.5182 11.903 48.4332 12.796C49.1282 13.47 49.0422 14.567 48.4032 16.233L48.3072 16.475L48.5272 16.202C51.2302 12.902 53.3192 11.91 55.0902 12.605L55.2372 12.667C57.6182 13.741 56.3832 17.882 53.1212 18.147C52.9212 18.164 52.7652 18.021 52.9632 17.74C53.3582 17.135 53.3192 15.831 52.1672 15.718C51.0152 15.605 49.3372 16.925 48.1292 18.562C47.0452 20.012 45.9292 22.473 44.8072 25.835C44.5352 26.653 44.6642 26.847 44.6972 26.902C44.7049 26.9165 44.709 26.9326 44.709 26.949C44.709 26.9654 44.7049 26.9815 44.6972 26.996C44.5542 27.268 43.7322 27.592 42.9372 27.592C41.3122 27.585 40.6462 26.647 40.9702 25.155C39.1222 26.919 37.2592 27.769 35.6152 27.621C35.2535 27.5896 34.9029 27.4805 34.5872 27.3012C34.2715 27.1219 33.9982 26.8766 33.7859 26.582C33.5737 26.2875 33.4275 25.9506 33.3573 25.5944C33.2871 25.2382 33.2946 24.871 33.3792 24.518C31.9532 26.327 29.8372 27.786 27.6822 27.585C25.5272 27.385 24.1822 25.919 24.8802 22.797C25.4702 20.199 28.2197 13.687 31.5002 11.5C33.0002 10.5 34.6659 10.678 35.0002 10.5C36.5002 11 36.7234 11.4523 36.2072 12.9468C34.0002 13 32.5002 14.5 31.1572 16.202C29.2559 18.1878 28.1561 21.5192 28.0002 22C27.2632 24.287 28.3652 25.709 29.4102 25.766C30.4552 25.826 31.8402 24.806 32.8302 23.263C34.5902 20.739 35.4112 17.578 36.2072 15.381C36.4112 14.821 37.0002 13.5 36.2072 12.9468C35.9902 13.0425 34.7922 10.614 35.0002 10.5C37.0002 9.99998 40.9512 12.017 40.0682 15.265Z",fill:"#5F0080"})),n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_42_1137"},n.createElement("rect",{width:82,height:42,fill:"white"})))),Y=t=>n.createElement("svg",{width:22,height:26,viewBox:"0 0 22 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.0062 25C11.0062 25 1.7002 17.544 1.7002 10.306C1.7002 7.8379 2.68065 5.47088 4.42586 3.72566C6.17107 1.98045 8.53809 1 11.0062 1C13.4743 1 15.8413 1.98045 17.5865 3.72566C19.3317 5.47088 20.3122 7.8379 20.3122 10.306C20.3122 17.544 11.0062 25 11.0062 25Z",stroke:"#333333",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M10.9124 12.907C12.45 12.907 13.6964 11.6606 13.6964 10.123C13.6964 8.58544 12.45 7.339 10.9124 7.339C9.37486 7.339 8.12842 8.58544 8.12842 10.123C8.12842 11.6606 9.37486 12.907 10.9124 12.907Z",stroke:"#333333",strokeWidth:1.7,strokeLinecap:"square",strokeLinejoin:"round"})),O=t=>n.createElement("svg",{width:28,height:24,viewBox:"0 0 28 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.9269 2.89299C24.3269 2.29265 23.6146 1.81641 22.8305 1.49148C22.0465 1.16656 21.2061 0.999313 20.3574 0.999313C19.5086 0.999313 18.6682 1.16656 17.8842 1.49148C17.1001 1.81641 16.3878 2.29265 15.7879 2.89299L13.9589 4.72099L12.1319 2.89299C10.9201 1.68095 9.27646 0.999933 7.56257 0.999745C5.84867 0.999558 4.2049 1.68022 2.99286 2.89199C1.78082 4.10377 1.0998 5.74739 1.09961 7.46129C1.09942 9.17518 1.78008 10.819 2.99186 12.031L4.81986 13.86L13.2519 22.294C13.4394 22.4815 13.6937 22.5868 13.9589 22.5868C14.224 22.5868 14.4783 22.4815 14.6659 22.294L23.0989 13.86L24.9269 12.032C25.5271 11.4321 26.0032 10.7198 26.328 9.93584C26.6528 9.15188 26.82 8.31159 26.82 7.46299C26.82 6.6144 26.6528 5.77411 26.328 4.99015C26.0032 4.20618 25.5271 3.4939 24.9269 2.89399V2.89299Z",stroke:"#333333",strokeWidth:1.7,strokeLinecap:"round"})),G=t=>n.createElement("svg",{width:28,height:26,viewBox:"0 0 28 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.8442 5.207L24.1242 16.777H8.53422L5.82422 5.207H26.8442Z",stroke:"#333333",strokeWidth:1.7,strokeLinecap:"square",strokeLinejoin:"round"}),n.createElement("path",{d:"M21.6839 24.467C22.8658 24.467 23.8239 23.5089 23.8239 22.327C23.8239 21.1451 22.8658 20.187 21.6839 20.187C20.5021 20.187 19.5439 21.1451 19.5439 22.327C19.5439 23.5089 20.5021 24.467 21.6839 24.467Z",stroke:"#333333",strokeWidth:1.7,strokeLinecap:"square",strokeLinejoin:"round"}),n.createElement("path",{d:"M10.974 24.467C12.1559 24.467 13.114 23.5089 13.114 22.327C13.114 21.1451 12.1559 20.187 10.974 20.187C9.7921 20.187 8.83398 21.1451 8.83398 22.327C8.83398 23.5089 9.7921 24.467 10.974 24.467Z",stroke:"#333333",strokeWidth:1.7,strokeLinecap:"square",strokeLinejoin:"round"}),n.createElement("path",{d:"M1.16406 1.547H4.96406L6.72406 9.047",stroke:"#333333",strokeWidth:1.7,strokeLinecap:"square",strokeLinejoin:"round"})),K=t=>n.createElement("svg",{width:7,height:7,viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("g",{clipPath:"url(#clip0_42_1146)"},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.1079 7V6.993L1.9109 2.577V7H0.0458984V0H1.9129L5.1089 4.419V0H6.9759V7H5.1079Z",fill:"#FA622F"})),n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_42_1146"},n.createElement("rect",{width:7,height:7,fill:"white"})))),z=t=>n.createElement("svg",{width:19,height:19,viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M18.0811 18.081L13.9611 13.961M8.4671 15.334C9.36888 15.334 10.2618 15.1564 11.095 14.8113C11.9281 14.4662 12.6851 13.9604 13.3228 13.3227C13.9605 12.685 14.4663 11.928 14.8114 11.0949C15.1565 10.2617 15.3341 9.36879 15.3341 8.467C15.3341 7.56522 15.1565 6.67226 14.8114 5.83912C14.4663 5.00598 13.9605 4.24896 13.3228 3.6113C12.6851 2.97364 11.9281 2.46782 11.095 2.12272C10.2618 1.77763 9.36888 1.60001 8.4671 1.60001C6.64585 1.60001 4.89921 2.32349 3.61139 3.6113C2.32358 4.89912 1.6001 6.64576 1.6001 8.467C1.6001 10.2882 2.32358 12.0349 3.61139 13.3227C4.89921 14.6105 6.64585 15.334 8.4671 15.334V15.334Z",stroke:"#5F0080",strokeWidth:1.7,strokeLinecap:"round"})),J="_searchBar_1p0eg_139",Q="_headerLogo_1p0eg_148",X="_newTag_1p0eg_178",e2="_searchForm_1p0eg_185",s2="_utilityButtonList_1p0eg_216",t2="_cartNum_1p0eg_234",d={searchBar:J,headerLogo:Q,newTag:X,searchForm:e2,utilityButtonList:s2,cartNum:t2};function n2(){return e.jsxs("div",{className:d.searchBar,children:[e.jsxs("h1",{className:d.headerLogo,children:[e.jsx(r,{to:"/",children:e.jsx(A,{})}),e.jsx(r,{to:"/",children:"마켓 칼리"}),e.jsxs(r,{to:"/",children:["뷰티 칼리",e.jsx(K,{className:d.newTag})]})]}),e.jsx(S,{className:d.searchForm}),e.jsx(R,{className:d.utilityButtonList})]})}function S({...t}){return e.jsxs("form",{...t,children:[e.jsx("input",{type:"text",placeholder:"검색어를 입력해주세요"}),e.jsx("button",{type:"submit",children:e.jsx(z,{})})]})}function R({...t}){let s=_(H);return e.jsx(e.Fragment,{children:e.jsxs("span",{...t,children:[e.jsx("button",{type:"button",children:e.jsx(Y,{})}),e.jsx("button",{type:"button",children:e.jsx(O,{})}),e.jsxs("button",{type:"button",children:[e.jsx("div",{style:s===0?{display:"none"}:{display:"block"},className:d.cartNum,children:s}),e.jsxs(r,{to:"/Cart",children:[" ",e.jsx(G,{})]})]})]})})}const i2=t=>n.createElement("svg",{width:16,height:14,viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0H16V1.7H0V0ZM0 6.15H16V7.85H0V6.15ZM0 12.3H16V14H0V12.3Z",fill:"#333333"}));function a2({...t}){const s=[{key:"1",title:"선물하기"},{key:"2",title:"채소"},{key:"3",title:"과일 · 견과 · 쌀"},{key:"4",title:"수산 · 해산 · 건어물"},{key:"5",title:"정육 · 계란"},{key:"6",title:"국 · 반찬 · 메인요리"},{key:"7",title:"샐러드 · 간편식"},{key:"8",title:"면 · 양념 · 오일"},{key:"9",title:"생수 · 음료 · 우유 · 커피"},{key:"10",title:"간식 · 과자 · 떡"},{key:"11",title:"베이커리 · 치즈 · 델리"},{key:"12",title:"건강식품"},{key:"13",title:"와인"},{key:"14",title:"전통주"},{key:"15",title:"생활용품 · 리빙 · 캠핑"},{key:"16",title:"스킨케어 · 메이크업"},{key:"17",title:"헤어 · 바디 · 구강"},{key:"18",title:"주방용품"},{key:"19",title:"가전제품"},{key:"20",title:"반려동물"},{key:"21",title:"베이비 · 키즈 · 완구"},{key:"22",title:"여행 · 티켓"}];return e.jsx("ul",{...t,children:s.map(a=>o2(a))})}function o2({key:t,title:s}){return e.jsx("li",{children:e.jsxs(r,{to:"/",children:[e.jsx("div",{style:{backgroundPositionY:-(t-1)*24}}),s]})},t)}const r2="_navigation_5ge1j_139",c2="_nomalNavigation_5ge1j_160",l2="_fixedNavigation_5ge1j_170",d2="_balloon_5ge1j_182",m2="_utilityButtonList_5ge1j_185",h2="_categoryButton_5ge1j_202",u2="_navList_5ge1j_254",g2="_active_5ge1j_283",x2="_dawnShippingInfo_5ge1j_287",p2="_searchForm_5ge1j_308",_2="_fadein_5ge1j_1",j2="_productImg_5ge1j_350",C2="_messageWrapper_5ge1j_357",y2="_productName_5ge1j_363",v2="_message_5ge1j_357",f2="_isVisible_5ge1j_405",i={navigation:r2,nomalNavigation:c2,fixedNavigation:l2,balloon:d2,utilityButtonList:m2,categoryButton:h2,navList:u2,active:g2,dawnShippingInfo:x2,searchForm:p2,fadein:_2,productImg:j2,messageWrapper:C2,productName:y2,message:v2,isVisible:f2},k2=""+new URL("img-bubble-wide-ffa9c6bb.svg",import.meta.url).href,L2=""+new URL("img-bubble-2617dee4.svg",import.meta.url).href;function N2(t){const s=L(N),a=_(N),m=_(w),l=L(w),$=q(),[j,F]=n.useState(!1),o=_(P($.id));n.useLayoutEffect(()=>{F(a)},[a]),n.useEffect(()=>{let k;return j&&(k=setTimeout(()=>{s(),l()},3e3)),()=>{clearTimeout(k)}},[j]);const T={backgroundImage:`url(${k2})`,width:300,height:114},V={backgroundImage:`url(${L2})`,width:254,height:114};return e.jsx("nav",{className:`${t.scroll_state?i.fixedNavigation:i.nomalNavigation} `,children:e.jsxs("div",{className:i.navigation,children:[e.jsxs("button",{type:"button",className:i.categoryButton,children:[e.jsxs("span",{children:[e.jsx(i2,{}),"카테고리"]}),e.jsx(a2,{style:{zIndex:"20000"}})]}),e.jsx(w2,{className:i.navList}),t.scroll_state?e.jsxs(e.Fragment,{children:[e.jsx(S,{className:i.searchForm}),e.jsx(R,{className:i.utilityButtonList})]}):e.jsxs("button",{type:"button",className:i.dawnShippingInfo,children:[e.jsx("span",{children:"샛별・낮"}),e.jsx("span",{children:"배송안내"})]}),e.jsxs("div",{className:b(i.balloon,j?i.isVisible:null),style:(t.scroll_state,m?T:V),children:[e.jsx("img",{src:o==null?void 0:o.image.thumbnail,alt:o==null?void 0:o.image.alt,className:i.productImg}),e.jsxs("div",{className:b(i.messageWrapper),children:[e.jsx("p",{className:i.productName,children:o==null?void 0:o.productName}),e.jsx("p",{className:i.message,children:"장바구니에 상품을 담았습니다."}),e.jsx("p",{className:i.message,style:m?{display:"inline"}:{display:"none"},children:"이미 담은 상품의 수량을 추가했습니다."})]})]})]})})}function w2({...t}){return e.jsxs("li",{...t,children:[e.jsx("ul",{children:e.jsx(g,{children:e.jsx("span",{children:"신상품"})})}),e.jsx("ul",{children:e.jsx(g,{to:"/list",className:({isActive:s})=>s?i.active:"",children:e.jsx("span",{children:"베스트"})})}),e.jsx("ul",{children:e.jsx(g,{children:e.jsx("span",{children:"알뜰쇼핑"})})}),e.jsx("ul",{children:e.jsx(g,{children:e.jsx("span",{children:"특가/혜택"})})})]})}const b2="_headerComp_112t4_139",B2="_gapDiv_112t4_148",B={headerComp:b2,gapDiv:B2};function I2(){const[t,s]=n.useState(!1),a=()=>{window.scrollY>=105?s(!0):s(!1)};return n.useEffect(()=>(window.addEventListener("scroll",a),()=>{window.addEventListener("scroll",a)}),[]),e.jsxs("header",{className:B.headerComp,children:[e.jsx(D,{}),e.jsx(n2,{}),e.jsx("div",{className:B.gapDiv,style:t?{display:"block"}:{display:"none"}}),e.jsx(N2,{scroll_state:t})]})}const E2="_footer_tkqoh_139",S2="_inner_tkqoh_148",R2="_innerTop_tkqoh_156",M2="_innerBot_tkqoh_164",$2="_bot_tkqoh_173",h={footer:E2,inner:S2,innerTop:R2,innerBot:M2,bot:$2},F2="_customerService_1i3g5_139",T2="_title_1i3g5_148",V2="_mail_1i3g5_156",y={customerService:F2,title:T2,mail:V2},q2="_inquirys_xfntr_139",U2="_inquiry_xfntr_139",x={inquirys:q2,inquiry:U2};function H2(){return e.jsxs("div",{className:x.inquirys,children:[e.jsxs("div",{className:x.inquiry,children:[e.jsx(C,{children:"카카오톡 문의"}),e.jsxs("div",{children:[e.jsx("span",{children:"월~토요일 | 오전 7시 - 오후 6시"}),e.jsx("span",{children:"일/공휴일 | 오전 7시 - 오후 1시"})]})]}),e.jsxs("div",{className:x.inquiry,children:[e.jsx(C,{children:"1:1 문의"}),e.jsxs("div",{children:[e.jsx("span",{children:"365일"}),e.jsx("span",{children:"고객센터 운영시간에 순차적으로 답변드리겠습니다."})]})]}),e.jsxs("div",{className:x.inquiry,children:[e.jsx(C,{children:"대량주문 문의"}),e.jsxs("div",{children:[e.jsx("span",{children:"월~금요일 | 오전 9시 - 오후 1시"}),e.jsx("span",{children:"점심시간 | 오후 12시 - 오후 1시"})]})]})]})}const P2="_callNumber_1x8w5_139",Z2={callNumber:P2};function W2(t){const{tel:s,openDay:a}=t;return e.jsxs("div",{className:Z2.callNumber,children:[e.jsx("span",{children:s}),e.jsx("span",{children:a})]})}const D2="_frame_1pefb_139",A2="_text_1pefb_146",I={frame:D2,text:A2},Y2=""+new URL("Arrow-74f37ea8.svg",import.meta.url).href,O2="_mailto_c6ood_139",G2="_text_c6ood_147",K2="_more_c6ood_154",v={mailto:O2,text:G2,more:K2};function M({mailto:t}){return e.jsxs(r,{className:v.mailto,to:"#",onClick:s=>{window.location.href=`mailto:${t}`,s.preventDefault()},children:[e.jsx("span",{className:v.text,children:t}),e.jsx("img",{src:Y2,alt:"더보기",className:v.more})]})}function E(t){const{children:s,mailto:a,...m}=t;return e.jsxs("div",{className:I.frame,children:[e.jsxs("span",{className:I.text,children:[s," "]}),e.jsx(M,{mailto:a,children:a})]})}function z2(){return e.jsxs("div",{className:y.customerService,children:[e.jsx("span",{className:y.title,children:"고객행복센터"}),e.jsx(W2,{tel:"1644-1107",openDay:"월~토요일 오전 7시 - 오후 6시"}),e.jsx(H2,{}),e.jsxs("div",{className:y.mail,children:[e.jsx(E,{mailto:"help@karlycorp.com",children:"비회원 문의 :"}),e.jsx(E,{mailto:"help@karlycorp.com",children:"비회원 대량주문 문의 :"})]})]})}const J2="_about_ksipc_139",Q2={about:J2},X2="_footerNavList_is5me_139",ee={footerNavList:X2};function se(){return e.jsx("nav",{className:"footerNav",children:e.jsx(te,{})})}function te(){const t=[{key:"intro",to:"/",text:"칼리소개"},{key:"video",to:"/",text:"칼리소개영상"},{key:"employ",to:"/",text:"인재채용"},{key:"terms",to:"/",text:"이용약관"},{key:"policy",to:"/",text:"개인정보처리방침"},{key:"info",to:"/",text:"이용안내"}];return e.jsx("ul",{className:ee.footerNavList,children:t.map(s=>e.jsx("li",{children:e.jsx(r,{to:s.to,children:s.text})},s.key))})}const ne="_area_7yml7_139",ie="_text_7yml7_145",ae="_paragraph_7yml7_152",oe="_bar_7yml7_160",c={area:ne,text:ie,paragraph:ae,bar:oe};function re(){const t=[{key:1,first:"법인명 (상호) : 주식회사 컬리",second:"사업자등록번호 : 261-81-23567",link:"사업자정보 확인"},{key:2,first:"통신판매업 : 제 2018-서울강남-01646 호",second:"개인정보보호책임자 : 이원준"},{key:3,first:"주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)",second:"대표이사 : 김슬아"},{key:4,first:"입점문의 : 입점문의하기",title:"제휴문의 :",link:"business@karlycorp.com"},{key:5,title:"채용문의 :",link:"recruit@karlycorp.com"},{key:6,first:"팩스 : 070 - 7500 - 6098"}];return e.jsx("div",{className:c.area,children:t.map(s=>e.jsxs("div",{className:c.paragraph,children:[s.first?e.jsx("span",{className:c.text,children:s.first}):"",s.second?e.jsx("div",{className:c.bar}):"",s.second?e.jsx("span",{className:c.text,children:s.second}):"",s.link&&s.first?e.jsx("div",{className:c.bar}):"",s.title?e.jsx("span",{className:c.text,children:s.title}):"",s.link?e.jsx(M,{mailto:s.link,children:s.link}):""]},s.key))})}const ce="_social_1gfjy_139",le="_socialUl_1gfjy_143",de="_socialLi_1gfjy_150",me="_socialLink_1gfjy_154",he="_socialImg_1gfjy_158",u={social:ce,socialUl:le,socialLi:de,socialLink:me,socialImg:he},ue=""+new URL("Blog-06d2980b.svg",import.meta.url).href,ge=""+new URL("Facebook-05f5e8cb.svg",import.meta.url).href,xe=""+new URL("Instagram-a3fe63b3.svg",import.meta.url).href,pe=""+new URL("NaverPost-2988ba39.svg",import.meta.url).href,_e=""+new URL("Youtube-4f1b632a.svg",import.meta.url).href;function je(){return e.jsx("nav",{className:u.social,children:e.jsx(Ce,{})})}function Ce({link:t,src:s,alt:a}){const m=[{key:1,name:"네이버 블로그",logo:ue,link:"https://section.blog.naver.com"},{key:2,name:"페이스북",logo:ge,link:"https://www.facebook.com"},{key:3,name:"인스타그램",logo:xe,link:"https://www.instagram.com"},{key:4,name:"네이버 포스트",logo:pe,link:"https://post.naver.com"},{key:5,name:"유튜브",logo:_e,link:"https://www.youtube.com/"}];return e.jsx("ul",{className:u.socialUl,children:m.map(l=>e.jsx("li",{className:u.socialLi,children:e.jsx(r,{className:u.socialLink,to:l.link,children:e.jsx("img",{className:u.socialImg,src:l.logo,alt:l.name})})},l.key))})}function ye(){return e.jsxs("div",{className:Q2.about,children:[e.jsx(se,{}),e.jsx(re,{}),e.jsx(je,{})]})}const ve="_guarantee_yiy6i_139",fe="_guaranteeLi_yiy6i_148",ke="_guaranteeLogo_yiy6i_156",Le="_guaranteeText_yiy6i_160",p={guarantee:ve,guaranteeLi:fe,guaranteeLogo:ke,guaranteeText:Le},Ne=""+new URL("logo_isms-4eb9a700.svg",import.meta.url).href,we=""+new URL("logo_privacy-3e8c9de9.svg",import.meta.url).href,be=""+new URL("logo_tosspayments-25110ef4.svg",import.meta.url).href,Be=""+new URL("logo_wooriBank-05c82a26.svg",import.meta.url).href;function Ie(){const t=[{key:1,name:"isms",src:Ne,first:"[인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영",second:"(심사받지 않은 물리적 인프라 제외)",third:"[유효기간] 2022.01.19 ~ 2025.01.18"},{key:2,name:"privacy",src:we,first:"개인정보보호 우수 웹사이트",second:"개인정보처리시스템 인증 (ePRIVACY PLUS)"},{key:3,name:"tossPayments",src:be,first:"토스페이먼츠 구매안전(에스크로) 서비스",second:"를 이용하실 수 있습니다."},{key:4,name:"wooriBank",src:Be,first:"고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보",second:"증 계약을 체결하여 안전거래를 보장하고 있습니다."}];return e.jsx("ul",{className:p.guarantee,children:t.map(s=>e.jsxs("li",{className:p.guaranteeLi,children:[e.jsx("img",{src:s.src,alt:s.name,className:p.guaranteeLogo}),e.jsxs("div",{className:p.guaranteeText,children:[e.jsx("p",{children:s.first}),e.jsx("p",{children:s.second}),e.jsx("p",{children:s.third})]})]},s.key))})}const Ee="_copyright_srhhg_139",Se="_copyrightText_srhhg_148",f={copyright:Ee,copyrightText:Se};function Re(){return e.jsxs("div",{className:f.copyright,children:[e.jsxs("p",{className:f.copyrightText,children:["마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.",e.jsx("br",{}),"마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다."]}),e.jsx("p",{className:f.copyrightText,children:"© KURLY CORP. ALL RIGHTS RESERVED"})]})}const Me=()=>e.jsx(e.Fragment,{children:e.jsxs("footer",{className:h.footer,children:[e.jsxs("div",{className:h.inner,children:[e.jsxs("div",{className:h.innerTop,children:[e.jsx(z2,{}),e.jsx(ye,{})]}),e.jsx("div",{className:h.innerBot,children:e.jsx(Ie,{})})]}),e.jsx("div",{className:h.bot,children:e.jsx(Re,{})})]})}),$e=Me;function Ue({children:t}){return e.jsxs(e.Fragment,{children:[e.jsx(I2,{}),e.jsx("main",{children:e.jsx(U,{})}),e.jsx($e,{})]})}export{Ue as default};