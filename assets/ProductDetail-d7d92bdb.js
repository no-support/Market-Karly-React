import{j as e,r as n,d as K,R as C,c as N,u as z,e as L}from"./index-982df2c1.js";import{C as J,S as Q}from"./img-cancel-3970b042.js";import{p as y,d as b,e as q,f as B,a as Y,g as G,h as U,i as X,j as I,B as F,I as ee}from"./InputCheckbox-4beb3321.js";import{c as te,b as P,i as ne,r as re}from"./bubbleState-fbdc5ed0.js";import{c as S}from"./fbase-b339bbaa.js";import{P as M,N as ie}from"./Button-88f451c1.js";const se="_productCard_py556_139",ce="_productImgContainer_py556_145",T={productCard:se,productImgContainer:ce},le="_mainInfo_1chin_139",oe="_productName_1chin_147",ae="_price_1chin_154",de="_description_1chin_176",E={mainInfo:le,productName:oe,price:ae,description:de};function he({productName:t,description:r,price:i,dawnShipping:c=!0,...o}){return e.jsxs("div",{className:E.mainInfo,children:[e.jsx("span",{style:{display:c?"block":"none"},children:"샛별 배송"}),e.jsx("h2",{className:E.productName,children:t}),e.jsx("p",{className:E.description,children:r}),e.jsxs("div",{className:E.price,children:[e.jsx("span",{children:i}),e.jsx("span",{children:"원"})]}),e.jsx("p",{children:"로그인 후, 적립 혜택이 제공됩니다."})]})}const pe="_infoList_12m6c_139",ue="_infoListItem_12m6c_143",me="_title_12m6c_151",xe="_subtitle_12m6c_162",je="_productCounter_12m6c_176",_e="_productPrice_12m6c_196",we="_priceAndPointWrapper_12m6c_200",fe="_totalPrice_12m6c_205",ve="_pointInfo_12m6c_222",ge="_pointBadge_12m6c_235",Ce="_buttonList_12m6c_247",ke="_cartButton_12m6c_263",j={infoList:pe,infoListItem:ue,title:me,subtitle:xe,productCounter:je,productPrice:_e,priceAndPointWrapper:we,totalPrice:fe,pointInfo:ve,pointBadge:ge,buttonList:Ce,cartButton:ke},Ne=t=>n.createElement("svg",{width:28,height:24,viewBox:"0 0 28 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.9269 2.89295C24.3269 2.29261 23.6146 1.81636 22.8305 1.49144C22.0465 1.16651 21.2061 0.999268 20.3574 0.999268C19.5086 0.999268 18.6682 1.16651 17.8842 1.49144C17.1001 1.81636 16.3878 2.29261 15.7879 2.89295L13.9589 4.72095L12.1319 2.89295C10.9201 1.68091 9.27646 0.999887 7.56257 0.9997C5.84867 0.999512 4.2049 1.68017 2.99286 2.89195C1.78082 4.10372 1.0998 5.74735 1.09961 7.46124C1.09942 9.17514 1.78008 10.8189 2.99186 12.0309L4.81986 13.8599L13.2519 22.2939C13.4394 22.4814 13.6937 22.5867 13.9589 22.5867C14.224 22.5867 14.4783 22.4814 14.6659 22.2939L23.0989 13.8599L24.9269 12.0319C25.5271 11.432 26.0032 10.7198 26.328 9.9358C26.6528 9.15183 26.82 8.31155 26.82 7.46295C26.82 6.61435 26.6528 5.77407 26.328 4.9901C26.0032 4.20614 25.5271 3.49386 24.9269 2.89395V2.89295Z",stroke:"#5F0080",strokeWidth:1.7,strokeLinecap:"round"})),Le=t=>n.createElement("svg",{width:22,height:24,viewBox:"0 0 22 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M7.66602 19C7.66602 19.884 8.01717 20.7317 8.64223 21.3568C9.26729 21.9818 10.115 22.333 10.999 22.333C11.883 22.333 12.7307 21.9818 13.3558 21.3568C13.9809 20.7317 14.332 19.884 14.332 19",stroke:"#333333",strokeWidth:1.6}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.998 18.738H1L1.013 18.708C1.089 18.573 1.484 18.004 2.199 16.999L2.949 15.949V9.314C2.949 4.829 6.387 1.174 10.69 1.006L11 1C15.446 1 19.05 4.722 19.05 9.314V15.948L20.757 18.359C20.93 18.612 21.011 18.739 20.999 18.739L20.998 18.738Z",stroke:"#333333",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"})),Ee=t=>n.createElement("svg",{width:26,height:27,viewBox:"0 0 26 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M9.24902 21.875C9.24902 22.8695 9.64407 23.8232 10.3473 24.5264C11.0505 25.2296 12.0042 25.6246 12.9986 25.6246C13.9931 25.6246 14.9468 25.2296 15.65 24.5264C16.3532 23.8232 16.7483 22.8695 16.7483 21.875",stroke:"#E1E1E1",strokeWidth:1.6}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.2477 21.5803H1.75L1.76463 21.5465C1.85013 21.3946 2.2945 20.7545 3.09887 19.6239L3.94262 18.4426V10.9783C3.94262 5.93262 7.81037 1.82075 12.6512 1.63175L13 1.625C18.0018 1.625 22.0562 5.81225 22.0562 10.9783V18.4415L23.9766 21.1539C24.1712 21.4385 24.2624 21.5814 24.2489 21.5814L24.2477 21.5803Z",stroke:"#E1E1E1",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"})),Ie=K({key:"totalPriceSelector",get:({get:t})=>{const r=t(y),i=t(b);return r*i}});function ye(){const t=C(q),r=C(b),i=N(y);return e.jsxs("ul",{className:j.infoList,children:[e.jsxs(f,{title:"배송",children:[e.jsx("span",{children:"샛별배송"}),e.jsx("p",{children:"23시 전 주문 시 내일 아침 7시 전 도착"}),e.jsx("p",{children:"(대구 부산 울산 샛별배송 운영시간 별도 확인)"})]}),e.jsx(f,{title:"판매자",children:e.jsx("span",{children:"칼리"})}),e.jsxs(f,{title:"포장타입",children:[e.jsx("span",{children:"상온 (종이포장)"}),e.jsx("p",{children:"택배배송은 에코 포장이 스티로폼으로 대체됩니다."})]}),e.jsx(f,{title:"판매단위",children:e.jsx("span",{children:"1봉"})}),e.jsx(f,{title:"중량/용량",children:e.jsx("span",{children:"123g*4봉"})}),e.jsx(f,{title:"원산지",children:e.jsx("span",{children:"상세페이지 별도표기"})}),e.jsxs(f,{title:"알레르기정보",children:[e.jsx("p",{children:"-대두, 밀, 쇠고기 함유"}),e.jsx("p",{children:"-계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우, 복숭아, 토마토, 아황산류, 호두, 잣, 닭고기, 오징어, 조개류(굴, 전복, 홍합 포함)를 사용한 제품과 같은 제조시설에서 제조"})]}),e.jsx(f,{title:"상품선택",children:e.jsxs("div",{className:j.productCounter,children:[e.jsx("p",{children:t}),e.jsx(J,{className:j.count,setParentState:i}),e.jsxs("span",{className:j.productPrice,children:[r.toLocaleString("ko-KR"),"원"]})]})}),e.jsx(Se,{}),e.jsx(be,{className:j.buttonList})]})}function be({className:t}){const[r,i]=n.useState(!0),c=C(B),o=C(y),l=N(te),a=N(P),p=C(P),m=N(ne),s=()=>{const u=JSON.parse(sessionStorage.getItem("cart"));u==null||u.map(x=>{x.productId===c&&m(!0)}),Y(c,o),o!==0&&sessionStorage.getItem("cart")&&!p&&(l(JSON.parse(sessionStorage.getItem("cart")).length),a(!0))};return e.jsxs("div",{className:t,children:[e.jsx("button",{type:"button","aria-label":"상품 찜 버튼",children:e.jsx(Ne,{})}),e.jsx("button",{type:"button","aria-label":"상품 찜 버튼",disabled:r,children:r?e.jsx(Ee,{}):e.jsx(Le,{})}),e.jsx("button",{className:j.cartButton,onClick:s,children:"장바구니 담기"})]})}function f({title:t,children:r}){return e.jsxs("li",{className:j.infoListItem,children:[e.jsx("span",{className:j.title,children:t}),e.jsx("div",{className:j.subtitle,children:r})]})}function Se(){const t=C(Ie);return e.jsxs("div",{className:j.priceAndPointWrapper,children:[e.jsxs("p",{className:j.totalPrice,children:["총 상품 금액:",e.jsx("span",{children:t.toLocaleString("ko-KR")}),"원"]}),e.jsxs("div",{className:j.pointInfo,children:[e.jsx("div",{className:j.pointBadge,children:"적립"}),e.jsx("p",{children:"로그인 후 적립 혜택 제공"})]})]})}function De(){const t=z(),r=C(re(t.id));r||(alert("올바르지 않은 주소입니다."),window.location.replace("/"));const i=N(B),[c,o]=L(q),[l,a]=L(G),[p,m]=L(b),[s,u]=L(U);return n.useLayoutEffect(()=>{i(t.id),o(r.productName),a(r.desc),m(r.price),u(r.image)},[]),e.jsxs("section",{className:T.productCard,children:[e.jsxs("figure",{className:T.productImgContainer,children:[e.jsx("img",{src:s.thumbnail,alt:s.alt}),e.jsx("figcaption",{className:X.srOnly,children:"탱탱 쫄면 제품 사진"})]}),e.jsxs("div",{children:[e.jsx(he,{productName:c,description:l,price:p.toLocaleString("ko-KR")}),e.jsx(ye,{})]})]})}const Fe="_productNav_2jv4h_143",Pe={productNav:Fe};function Me({activeAnchor:t,className:r=null,...i}){const c={backgroundColor:"white",borderBottom:"none",color:"#5f0080"};return e.jsxs("ul",{className:S(r,Pe.productNav),children:[e.jsx("li",{children:e.jsx("a",{"data-index":1,style:t===1?c:null,href:"#description",children:e.jsx("span",{children:"상품설명"})})}),e.jsx("li",{children:e.jsx("a",{style:t===2?c:null,"data-index":2,href:"#detailInformation",children:e.jsx("span",{children:"상세정보"})})}),e.jsx("li",{children:e.jsx("a",{style:t===3?c:null,"data-index":3,href:"#review",children:e.jsx("span",{children:"후기 (1,000)"})})}),e.jsx("li",{children:e.jsx("a",{style:t===4?c:null,"data-index":4,href:"#inquiry",children:e.jsx("span",{children:"문의"})})})]})}const Te="/assets/img-zzol-7efff0a8.png",He="/assets/img-check-point-5540bb7d.png",Re="_productDescription_1049f_139",qe="_descriptionArticle_1049f_144",Be="_subTitle_1049f_152",Ve="_title_1049f_159",$e="_detailDescription_1049f_168",Ae="_checkPoint_1049f_177",We="_checkPointTitle_1049f_183",v={productDescription:Re,descriptionArticle:qe,subTitle:Be,title:Ve,detailDescription:$e,checkPoint:Ae,checkPointTitle:We},Ze=n.forwardRef(({className:t,id:r,...i},c)=>e.jsxs("section",{id:r,className:S(t,v.productDescription),ref:c,children:[e.jsx("h3",{className:I,children:"상품 설명"}),e.jsxs("article",{className:v.descriptionArticle,children:[e.jsxs("figure",{children:[e.jsx("img",{src:Te,alt:"풀무원 탱탱쫄면 제품 정면 사진"}),e.jsxs("figcaption",{children:[e.jsx("h4",{className:I,children:"튀기지 않아 부담 없는 매콤함 풀무원 탱탱쫄면"}),e.jsx("p",{className:v.subTitle,children:"튀기지 않아 부담 없는 매콤함"}),e.jsx("p",{className:v.title,children:"[풀무원] 탱탱쫄면"})]})]}),e.jsx("p",{className:v.detailDescription,children:"쫄면의 진가는 매콤새콤한 양념과 탱탱한 면발에서 찾을 수 있지요. 풀무원은 이 맛을 더 부담 없이 즐길 수 있도록 튀기지 않고 만든 탱탱쫄면을 선보입니다. 밀가루와 감자 전분을 적절히 배합해 탄력이 좋고, 입에 넣었을 때는 찰지게 씹히죠. 고추장을 넣어 숙성한 비빔장은 자연스럽고 깊은 맛을 냅니다. 간단하게 조리해 마지막 한 가닥까지 탱탱한 식감을 즐겨보세요. 취향에 따라 다양한 고명을 올려 드셔도 좋아요."})]}),e.jsxs("article",{className:v.checkPoint,children:[e.jsx("h4",{className:v.checkPointTitle,children:"Karly's Check Point"}),e.jsx("img",{src:He,alt:"생산 유통과정 튀기지 않은 건면, 활용법 4개입 포장, 간편 조리 쫄면, 브랜드와 생산자 바른먹거리 전문기업, 풀무원"})]})]})),Oe="/assets/img-zzol-nutrition-facts-134296c7.png",Ke=t=>n.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z",fill:"#5F0080"}),n.createElement("path",{d:"M27.8002 9.6001H12.2002C11.6479 9.6001 11.2002 10.0478 11.2002 10.6001V29.4001C11.2002 29.9524 11.6479 30.4001 12.2002 30.4001H27.8002C28.3525 30.4001 28.8002 29.9524 28.8002 29.4001V10.6001C28.8002 10.0478 28.3525 9.6001 27.8002 9.6001Z",stroke:"white"}),n.createElement("path",{d:"M14.4004 14.5308L15.6305 16.0001L17.6004 13.6001",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M20 14.8H25.6",stroke:"white",strokeLinecap:"round"}),n.createElement("path",{d:"M14.4004 19.7307L15.6305 21.2L17.6004 18.8",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M20 20H25.6",stroke:"white",strokeLinecap:"round"}),n.createElement("path",{d:"M14.4004 24.9307L15.6305 26.4L17.6004 24",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M20 25.2H25.6",stroke:"white",strokeLinecap:"round"})),ze=t=>n.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z",fill:"#5F0080"}),n.createElement("path",{d:"M29.3996 11.2H10.5996C10.0473 11.2 9.59961 11.6477 9.59961 12.2V13.4C9.59961 13.9522 10.0473 14.4 10.5996 14.4H29.3996C29.9519 14.4 30.3996 13.9522 30.3996 13.4V12.2C30.3996 11.6477 29.9519 11.2 29.3996 11.2Z",stroke:"white",strokeLinejoin:"round"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.4004 14.3999H29.6004V27.9999C29.6004 28.4417 29.2422 28.7999 28.8004 28.7999H11.2004C10.7586 28.7999 10.4004 28.4417 10.4004 27.9999V14.3999Z",stroke:"white",strokeLinejoin:"round"}),n.createElement("path",{d:"M18 18.3999V24.3999",stroke:"white",strokeLinecap:"round"}),n.createElement("path",{d:"M19.2998 21.0398L22.2998 24.2398",stroke:"white",strokeLinecap:"round"}),n.createElement("path",{d:"M22 18.6399L18 21.7512",stroke:"white",strokeLinecap:"round"})),Je=t=>n.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z",fill:"#5F0080"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.0002 12H24.0002C24.442 12 24.8002 12.3582 24.8002 12.8V25.6H8.0002C7.55837 25.6 7.2002 25.2418 7.2002 24.8V12.8C7.2002 12.3582 7.55837 12 8.0002 12Z",stroke:"white",strokeLinejoin:"round"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.7998 18.3999H34.3998V24.7999C34.3998 25.2417 34.0416 25.5999 33.5998 25.5999H24.7998V18.3999Z",stroke:"white",strokeLinejoin:"round"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.7998 15.2H31.4025C31.6425 15.2 31.8697 15.3077 32.0217 15.4934L34.3998 18.4H24.7998V15.2Z",stroke:"white",strokeLinejoin:"round"}),n.createElement("path",{d:"M11.9996 28.8C13.3251 28.8 14.3996 27.7255 14.3996 26.4C14.3996 25.0745 13.3251 24 11.9996 24C10.6741 24 9.59961 25.0745 9.59961 26.4C9.59961 27.7255 10.6741 28.8 11.9996 28.8Z",fill:"#5F0080",stroke:"white"}),n.createElement("path",{d:"M29.6002 28.8C30.9257 28.8 32.0002 27.7255 32.0002 26.4C32.0002 25.0745 30.9257 24 29.6002 24C28.2747 24 27.2002 25.0745 27.2002 26.4C27.2002 27.7255 28.2747 28.8 29.6002 28.8Z",fill:"#5F0080",stroke:"white"})),Qe=t=>n.createElement("svg",{width:41,height:40,viewBox:"0 0 41 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M20.5 40C31.5457 40 40.5 31.0457 40.5 20C40.5 8.9543 31.5457 0 20.5 0C9.4543 0 0.5 8.9543 0.5 20C0.5 31.0457 9.4543 40 20.5 40Z",fill:"#5F0080"}),n.createElement("path",{d:"M19.6998 28.8C25.4436 28.8 30.0998 24.1438 30.0998 18.4C30.0998 12.6562 25.4436 8 19.6998 8C13.956 8 9.2998 12.6562 9.2998 18.4C9.2998 24.1438 13.956 28.8 19.6998 28.8Z",fill:"#5F0080",stroke:"white"}),n.createElement("path",{d:"M14.8994 15.2L17.2994 22.4L19.6994 15.2L22.0994 22.4L24.4994 15.2",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M15.1998 17.5999H13.7998C13.5237 17.5999 13.2998 17.8237 13.2998 18.0999C13.2998 18.376 13.5237 18.5999 13.7998 18.5999H15.1998C15.4759 18.5999 15.6998 18.376 15.6998 18.0999C15.6998 17.8237 15.4759 17.5999 15.1998 17.5999Z",fill:"white"}),n.createElement("path",{d:"M25.6002 17.5999H24.2002C23.9241 17.5999 23.7002 17.8237 23.7002 18.0999C23.7002 18.376 23.9241 18.5999 24.2002 18.5999H25.6002C25.8763 18.5999 26.1002 18.376 26.1002 18.0999C26.1002 17.8237 25.8763 17.5999 25.6002 17.5999Z",fill:"white"}),n.createElement("path",{d:"M26.9971 25.3657L31.6254 29.9941C31.881 30.2497 31.9616 30.5835 31.8054 30.7397L31.2397 31.3054C31.0835 31.4616 30.7497 31.381 30.494 31.1254L25.8657 26.4971",stroke:"white",strokeLinejoin:"round"})),Ye=t=>n.createElement("svg",{width:41,height:40,viewBox:"0 0 41 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("g",{clipPath:"url(#clip0_46_1249)"},n.createElement("path",{d:"M20.5 40C31.5457 40 40.5 31.0457 40.5 20C40.5 8.9543 31.5457 0 20.5 0C9.4543 0 0.5 8.9543 0.5 20C0.5 31.0457 9.4543 40 20.5 40Z",fill:"#5F0080"}),n.createElement("path",{d:"M20.4996 22.4001C21.8251 22.4001 22.8996 21.3256 22.8996 20.0001C22.8996 18.6746 21.8251 17.6001 20.4996 17.6001C19.1741 17.6001 18.0996 18.6746 18.0996 20.0001C18.0996 21.3256 19.1741 22.4001 20.4996 22.4001Z",stroke:"white"}),n.createElement("path",{d:"M14.167 16.4951L18.463 9.0551C19.583 7.1151 21.4158 7.1151 22.535 9.0551L25.5206 14.2255",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M25.6014 11.1284V12.746V14.3636L24.2006 13.5548L22.7998 12.746",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M20.0053 28.3185H11.4141C9.17413 28.3185 8.25733 26.7313 9.37733 24.7913L12.3629 19.6208",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M9.64062 21.1L11.0414 20.2912L12.4422 19.4824V21.1V22.7176",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M27.3263 17.3533L31.6223 24.7941C32.7423 26.7341 31.8255 28.3205 29.5855 28.3205H23.6143",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M26.2567 29.9388L24.8559 29.13L23.4551 28.3212L24.8559 27.5124L26.2567 26.7036",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})),n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_46_1249"},n.createElement("rect",{width:40,height:40,fill:"white",transform:"translate(0.5)"})))),Ge="_detailDescriptionSection_c7bvf_139",Ue="_whyCarly_c7bvf_144",Xe="_cardWrapper_c7bvf_158",et="_title_c7bvf_168",tt="_content_c7bvf_176",nt="_cardsSection1_c7bvf_187",rt="_cardsSection2_c7bvf_206",g={detailDescriptionSection:Ge,whyCarly:Ue,cardWrapper:Xe,title:et,content:tt,cardsSection1:nt,cardsSection2:rt},it=n.forwardRef(({className:t,id:r,...i},c)=>{const o=[{icon:e.jsx(Ke,{}),title:"깐깐한 상품위원회",content:"나와 내 가족이 먹고 쓸 상품을 고르는 마음으로 매주 상품을 직접 먹어보고, 경험해보고 성분, 맛 안정성 등 다각도의 기준을 통과한 상품만을 판매합니다."},{icon:e.jsx(ze,{}),title:"차별화된 Karly Only 상품",content:"전국 각지와 해외의 훌륭한 생산자가 믿고 선택하는 파트너, 마켓칼리. 3천여 개가 넘는 칼리 단독 브랜드, 스펙의 Karly Only 상품을 믿고 만나보세요."},,{icon:e.jsx(Je,{}),title:"신선한 풀콜드체인 배송",content:"온라인 업계 최초로 산지에서 문 앞까지 상온, 냉장, 냉동 상품을 분리 포장 후 최적의 온도를 유지하는 냉장 배송 시스템, 풀콜드체인으로 상품을 신선하게 전해드립니다."},,{icon:e.jsx(Qe,{}),title:"고객, 생산자를 위한 최선의 가격",content:"매주 대형 마트와 주요 온라인 마트의 가격 변동 상황을 확인해 신선식품은 품질을 타협하지 않는 선에서 최선의 가격으로, 가공식품은 언제나 합리적인 가격으로 정기 조정합니다."},,{icon:e.jsx(Ye,{}),title:"환경을 생각하는 지속 가능한 유통",content:"친환경 포장재부터 생산자가 상품에만 집중할 수 있는 직매입 유통구조까지, 지속 가능한 유통을 고민하며 컬리를 있게 하는 모든 환경(생산자,커뮤니티,직원)이 더 나아질 수 있도록 노력합니다."}];return e.jsxs("section",{className:S(t,g.detailDescriptionSection),ref:c,id:r,children:[e.jsx("h3",{className:I,children:"상세 정보"}),e.jsxs("figure",{children:[e.jsx("figcaption",{children:e.jsx("h4",{className:I,children:"상품 외관 정보, 영양정보"})}),e.jsx("img",{src:Oe,alt:"탱탱 쫄면 크기 500미리 맥주캔보다 큽니다. 영양 정보 1봉 당 435키로칼로리 알레르기 유발 재료 대두, 밀, 쇠고기 함유"})]}),e.jsxs("section",{className:g.whyCarly,children:[e.jsx("h4",{children:"WHY KARLY"}),e.jsx("div",{className:g.cardsSection1,children:o.map((l,a)=>a<=3?e.jsx(H,{icon:l.icon,title:l.title,content:l.content},"card-"+a):null)}),e.jsx("div",{className:g.cardsSection2,children:o.map((l,a)=>a>3?e.jsx(H,{icon:l.icon,title:l.title,content:l.content},"card-"+a):null)})]})]})});function H({icon:t,title:r,content:i,className:c=null,...o}){return e.jsxs("div",{"aria-label":"칼리를 사용해야 하는 이유",className:g.cardWrapper,children:[t,e.jsx("p",{className:g.title,children:r}),e.jsx("p",{className:g.content,children:i})]})}const st="_productDetailView_df9wc_140",ct="_reviewInquiryHeader_df9wc_148",lt="_reviewInquiryHeaderFrame_df9wc_157",ot="_review_df9wc_148",at="_reviewTotal_df9wc_187",dt="_reviewTotalFrame75_df9wc_202",ht="_active_df9wc_215",pt="_reviewTable_df9wc_241",ut="_reviewTableEmpty_df9wc_299",mt="_reviewItem_df9wc_318",xt="_reviewItemFrame76_df9wc_326",jt="_reviewItemFrame78_df9wc_369",_t="_inquiry_df9wc_397",wt="_noticeHead_df9wc_433",ft="_finished_df9wc_450",vt="_lock_df9wc_453",gt="_hover_df9wc_459",Ct="_answer_df9wc_462",kt="_hidden_df9wc_465",Nt="_tableAnswer_df9wc_470",Lt="_hiddenNotice_df9wc_513",Et="_activeNotice_df9wc_518",d={productDetailView:st,reviewInquiryHeader:ct,reviewInquiryHeaderFrame:lt,review:ot,reviewTotal:at,reviewTotalFrame75:dt,active:ht,reviewTable:pt,reviewTableEmpty:ut,reviewItem:mt,reviewItemFrame76:xt,reviewItemFrame78:jt,inquiry:_t,noticeHead:wt,finished:ft,lock:vt,hover:gt,answer:Ct,hidden:kt,tableAnswer:Nt,hiddenNotice:Lt,activeNotice:Et},V=t=>n.createElement("svg",{width:56,height:56,viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M32 36L24 28L32 20",stroke:"#E1E1E1",strokeWidth:1.2}),n.createElement("rect",{x:.5,y:.5,width:55,height:55,rx:3.5,stroke:"#E1E1E1"})),$=t=>n.createElement("svg",{width:56,height:56,viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M24 20L32 28L24 36",stroke:"#5F0080",strokeWidth:1.2}),n.createElement("rect",{x:.5,y:.5,width:55,height:55,rx:3.5,stroke:"#E1E1E1"}));function It({inquiries:t}){const r=i=>{if(i.length>2){var c=i.split("");c.forEach(function(a,p){p===0||p===c.length-1||(c[p]="*")});var o=c.join();return o.replace(/,/g,"")}else{var l=/.$/;return i.replace(l,"*")}};return e.jsxs("div",{className:d.inquiry,children:[e.jsxs("table",{children:[e.jsx("caption",{children:"상품문의 목록"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"제목"}),e.jsx("th",{children:"작성자"}),e.jsx("th",{children:"작성일"}),e.jsx("th",{children:"답변상태"})]})}),e.jsx("tbody",{children:t.map(i=>n.createElement(yt,{...i,key:i.id,userName:r(i.userName),inquiryDate:new Date(parseInt(i.inquiryDate,10)).toLocaleDateString("ko-KR"),answerDate:new Date(parseInt(i.answerDate,10)).toLocaleDateString("ko-KR")}))})]}),(t==null?void 0:t.length)<=5?null:e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(V,{}),e.jsx($,{})]})]})}function yt({id:t,userName:r,productName:i,inquiryTitle:c,inquiryContent:o,isSecret:l,inquiryDate:a,answer:p,answerDate:m,isFinished:s}){const u=s?"답변완료":"답변대기",x=n.useRef();return e.jsx(e.Fragment,{children:l?e.jsxs("tr",{className:`${d.noticeHead} ${d.lock}`,children:[e.jsx("td",{children:"비밀글입니다."}),e.jsx("td",{children:r}),e.jsx("td",{children:a}),e.jsx("td",{className:s?`${d.finished}`:"",children:u})]}):e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:`${d.noticeHead} ${d.hover}`,onClick:_=>{x.current.classList.toggle(`${d.hidden}`)},children:[e.jsx("td",{children:c}),e.jsx("td",{children:r}),e.jsx("td",{children:a}),e.jsx("td",{className:s?`${d.finished}`:"",children:u})]}),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:`${d.tableAnswer}`,children:e.jsxs("div",{className:`${d.hidden} ${d.answer}`,ref:x,children:[e.jsx("p",{children:o}),e.jsx("p",{children:p}),e.jsx("p",{children:m})]})})})]})})}const bt=t=>n.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("g",{clipPath:"url(#clip0_61_3806)"},n.createElement("path",{d:"M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z",stroke:"#E2E2E2",strokeWidth:2}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 13C25.1046 13 26 13.8954 26 15V26C26 27.1046 25.1046 28 24 28C22.8954 28 22 27.1046 22 26V15C22 13.8954 22.8954 13 24 13ZM24 31C25.1046 31 26 31.8954 26 33C26 34.1046 25.1046 35 24 35C22.8954 35 22 34.1046 22 33C22 31.8954 22.8954 31 24 31Z",fill:"#E2E2E2"})),n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_61_3806"},n.createElement("rect",{width:48,height:48,fill:"white"}))));function St({reviews:t}){const r=[{id:"notice1",handle:"금주의 베스트 후기 안내",panel:`
          <p>■ 베스트 후기 당첨자 안내</p>
          <p></p>
          <p>고객님 안녕하세요, 컬리입니다.</p>
          <p></p>
          <p>[ 2023년 03월 06일 ~ 2023년 03월 12일 ]의 베스트 후기 당첨자 공지드립니다.</p>
          <p></p>
          <p>컬리는 상품에 대한 고객 여러분의 생생한 의견을 듣고 더 나은 상품을 준비하기 위해 상품 후기 게시판을 운영하고 있습니다.</p>
          <p></p>
          <p>실제로 상품의 후기가 구매 결정에 있어 큰 도움이 된 베스트 후기를 아래로 공유드립니다.</p>
          <p></p>
          <p>정성껏 후기를 작성해주신 모든 고객님께 감사드립니다.</p>
          <p>컬리 드림.</p>
        `},{id:"notice2",handle:"상품 후기 적립금 정책 안내",panel:`
          <p>[ 금주의 Best 후기 및 상품 후기 적립금 정책 변경 안내 ] </p>
          <p>고객님 안녕하세요. 컬리 입니다. 적립금 지급 정책을 안내드리니 컬리 이용에 참고 부탁드립니다. </p>
          <p>■ 적립금 지급 정책 ■</p>
          <p> 1. 일반 후기 -글 후기 50원/건 </p>
          <p>-사진 후기 100원/건 </p>
          <p>*퍼플/더퍼플 러버스 고객님께는 더블 후기 적립금이 지급됩니다. </p>
          <p>*지급에 영업일 기준 1~2일 소요됩니다. </p>
          <p>→ 금~일 작성 시, 월요일 지급 </p>
          <p>2. 베스트 후기 </p>
          <p>1) 선정 건 수 : 일주일 최대 100건 </p>
          <p>2) 혜택 : 선정 시 적립금 5,000원 </p>
          <p>3) 지급 일시 : 매주 수요일 (지급일이 공휴일의 경우 전 영업일) </p>
          <p>*당첨 ID 및 그 주의 Best 후기는 후기 게시판에서 확인하실 수 있습니다. </p>
          <p>3. 상품 후기 게시판(Product review) 적립금 지급 유의 사항 </p>
          <p>컬리는 믿을 수 있는 후기문화를 함께 만들어가고자 합니다. 따라서 후기 내용이 아래에 해당하는 경우에는 검토 후 삭제 및 적립금 회수 조치될 수 있습니다. </p>
          <p>1. 욕설, 폭력성, 음란성, 상업성 등 업체나 타인에게 불쾌한 내용을 작성한 경우 </p>
          <p>2. 구매한 상품과 무관한 내용이나 동일 문자/단순 초성의 반복 등 부적합한 내용을 작성한 경우 </p>
          <p>3. 상품의 기능이나 효과 등에 오해의 소지가 있는 내용을 작성한 경우 </p>
          <p>4. 저작권, 초상권 등 타인의 권리를 침해하는 이미지, 동영상을 사용한 경우 </p>
          <p>5. 구매한 상품이 아닌 캡쳐 사진, 포장 박스 사진 등 상품과 관련 없는 이미지, 동영상을 사용한 경우 </p>
          <p>또한, 비정상적인 방법을 통해 후기를 작성하고 적립금을 취득한 경우 작성자에 법적 책임의 소지가 있음을 알려드립니다. </p>
        `}],i=s=>{if(s.length>2){var u=s.split("");u.forEach(function(D,k){k===0||k===u.length-1||(u[k]="*")});var x=u.join();return x.replace(/,/g,"")}else{var _=/.$/;return s.replace(_,"*")}},[c,o]=n.useState(null),[l,a]=n.useState(0),p=s=>{o(c===s?null:s)},m=s=>{const u=[...t];if(s===0)return u.sort((x,_)=>_.recommend-x.recommend);if(s===1)return u.sort((x,_)=>_.reviewDate-x.reviewDate)};return e.jsxs("div",{className:d.review,children:[e.jsxs("div",{className:d.reviewTotal,children:[e.jsxs("span",{children:["총 ",t==null?void 0:t.length,"개"]}),e.jsxs("div",{className:d.reviewTotalFrame75,children:[e.jsx("span",{className:l===0?d.active:"",onClick:()=>a(0),children:"추천순"}),e.jsx("span",{"aria-hidden":"true"}),e.jsx("span",{className:l===1?d.active:"",onClick:()=>a(1),children:"최근 등록순"})]})]}),e.jsxs("div",{className:d.reviewTable,children:[e.jsx("div",{children:r.map(s=>e.jsxs("article",{"aria-labelledby":`accordion-header-${s.id}`,"data-component":"AccordionItem",children:[e.jsx("div",{"data-component":"AccordionHandle",children:e.jsx("button",{type:"button",id:`${s.id}-handle`,"aria-expanded":c===s.id,"aria-controls":s.id,onClick:()=>p(s.id),children:s.handle})}),e.jsx("div",{role:"region","aria-labelledby":`${s.id}-handle`,"data-component":"AccordionPanel",className:c===s.id?d.activeNotice:d.hiddenNotice,dangerouslySetInnerHTML:{__html:s.panel}})]},s.id))}),(t==null?void 0:t.length)===0?e.jsxs("div",{className:d.reviewTableEmpty,children:[e.jsx(bt,{}),e.jsx("span",{children:"따끈한 첫 후기를 기다리고 있어요."})]}):e.jsx("ul",{children:m(l).map(s=>e.jsx(Dt,{userName:i(s.userName),productName:s.productName,reviewTitle:s.reviewTitle,reviewContent:s.reviewContent,reviewDate:new Date(parseInt(s.reviewDate,10)).toLocaleDateString("ko-KR"),recommend:s.recommend},s.id))})]}),(t==null?void 0:t.length)<=5?null:e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(V,{}),e.jsx($,{})]})]})}function Dt({id:t,userName:r,productName:i,reviewTitle:c,reviewContent:o,reviewDate:l,recommend:a}){return e.jsxs("li",{className:d.reviewItem,"data-id":t,"data-recommend":a,children:[e.jsxs("div",{className:d.reviewItemFrame76,children:[e.jsx(F,{badgeName:"베스트"}),e.jsx(F,{badgeName:"퍼플"}),e.jsx("span",{children:r})]}),e.jsxs("div",{className:d.reviewItemFrame78,children:[e.jsx("span",{children:i}),e.jsx("p",{children:c}),e.jsxs("p",{children:[o," (추천 ",a,")"]}),e.jsx("span",{children:l})]})]})}const Ft="_modalForm_i799g_139",Pt="_modalFormTitle_i799g_150",Mt="_modalFormTitleContent_i799g_157",Tt="_cancel_i799g_163",Ht="_modalFormProduct_i799g_167",Rt="_modalFormDetail_i799g_182",qt="_inner_i799g_190",Bt="_titleWrapper_i799g_199",Vt="_title_i799g_199",$t="_inputText_i799g_219",At="_descWrapper_i799g_238",Wt="_textArea_i799g_259",Zt="_wordCount_i799g_278",Ot="_buttonWrapper_i799g_286",Kt="_placeholder_i799g_294",zt="_infoError_i799g_326",Jt="_hidden_i799g_331",h={modalForm:Ft,modalFormTitle:Pt,modalFormTitleContent:Mt,cancel:Tt,modalFormProduct:Ht,modalFormDetail:Rt,inner:qt,titleWrapper:Bt,title:Vt,inputText:$t,descWrapper:At,textArea:Wt,wordCount:Zt,buttonWrapper:Ot,placeholder:Kt,infoError:zt,hidden:Jt};function Qt({title:t,modal:r,...i}){const c=()=>{r.current.close()};return e.jsxs("div",{className:h.modalFormTitle,children:[e.jsx("h4",{className:h.modalFormTitleContent,children:t}),e.jsx(Q,{className:h.cancel,onClick:c,...i})]})}function Yt({src:t="http://via.placeholder.com/72x72",productName:r="[풀무원] 탱탱쫄면 (4개입)"}){return e.jsxs("div",{className:h.modalFormProduct,children:[e.jsx("img",{src:t,alt:"상품 이미지"}),e.jsx("p",{children:r})]})}const Gt=({type:t,contentValue:r,onContentValueChangeHandler:i,...c},o)=>{const l=n.useRef(),a=()=>{o.current.classList.toggle(`${h.hidden}`),l.current.focus()},p=()=>{l.current.value===""&&o.current.classList.toggle(`${h.hidden}`)};return e.jsxs("div",{className:h.textArea,children:[e.jsx("textarea",{name:"content",id:"content",ref:l,onBlur:p,value:r,onChange:i,onFocus:()=>{o.current.classList.add(`${h.hidden}`)}}),t==="review"?e.jsxs("ul",{className:`${h.placeholder}`,ref:o,onClick:a,children:[e.jsx("li",{children:e.jsx("span",{children:"컬리는 믿을 수 있는 후기문화를 함께 만들어가고자 합니다. 식품 등의 표시광고에 대한 법률을 준수하고자 다음과 같은 부당한 상품평에 대해서는 별도 고지 없이 임시 대처, 비공개 전환, 삭제, 적립금 회수 등의 필요한 조치가 취해 질 수 있습니다."})}),e.jsxs("li",{children:[e.jsx("p",{children:"후기 작성 시 유의 사항"}),e.jsxs("ul",{children:[e.jsx("li",{children:"개인의 주관적인 의견으로 인해 상품의 기능 및 효과에 대하여 오해의 소지가 있는 내용"}),e.jsx("li",{children:"식품/건강기능식품과 관련하여 질병의 예방 및 치료, 체중감량(다이어트)에 효능효과가 있다는 내용"}),e.jsx("li",{children:"일반 화장품을 기능성화장품의 효능효과가 있다는 내용을 통한 오인 표현"}),e.jsx("li",{children:"의약외품을 의약품으로 오인하게 하는 표현"}),e.jsx("li",{children:"생활화학제품을 본래 용도와 다르게 사용하는 내용 및 효능효과를 과장하는 내용"}),e.jsx("li",{children:"욕설, 폭력성, 음란성, 상업성 등의 게시물 또는 구매 상품과 무관하거나 반복되는 동일 단어나 문장을 사용하여 판매자나 다른 이용자의 후기 이용을 방해한다고 판단되는 경우"}),e.jsx("li",{children:"구매한 상품이 아닌 캡쳐 사진, 타인 사진 도용, 포장 박스, 퍼플박스, 구매 상품을 구분할 수 없는 전체 사진 등 상품과 관련 없는 이미지, 동영상을 사용한 경우"}),e.jsx("li",{children:"본인 또는 타인의 주민등록번호, (휴대)전화번호, 이메일 등 개인정보가 포함된 경우"}),e.jsx("li",{children:"그 밖에 상품평으로 인해 다른 회원 또는 제3자에게 피해가 가해질 내용"}),e.jsx("li",{children:"작성된 글과 첨부된 멀티미디어 파일 등으로 이루어진 각 상품평은 개인의 의견을 반영하므로, 게시된 내용에 대한 모든 책임은 작성자에게 있습니다. 또한 비정상적인 방법을 통해 후기를 작성하고 적립금을 취득한 경우 작성자에 법적 책임의 소지가 있음을 알려드립니다."}),e.jsx("li",{className:h.infoError,children:"※ 작성된 글과 첨부된 멀티미디어 파일 등으로 이루어진 각 상품평은 개인의 의견을 반영하므로, 게시된 내용에 대한 모든 책임은 작성자에게 있습니다. 또한 비정상적인 방법을 통해 후기를 작성하고 적립금을 취득한 경우 작성자에 법적 책임의 소지가 있음을 알려드립니다."})]})]})]}):t==="inquiry"?e.jsxs("ul",{className:h.placeholder,ref:o,onClick:a,children:[e.jsxs("li",{children:[e.jsx("p",{children:"상품문의 작성 전 확인해 주세요"}),e.jsxs("ul",{children:[e.jsx("li",{children:"답변은 영업일 기준 2~3일 소요됩니다."}),e.jsx("li",{children:"해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다."}),e.jsx("li",{children:"배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이칼리 내 1:1 문의에 남겨주세요."})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:"제품"}),e.jsxs("ul",{children:[e.jsx("li",{children:"입고일 : 품절 상품 입고 일이 확정된 경우, 섬네일에 기재되어 있습니다. (종 모양을 클릭하여, 재입고 알림 설정 가능)"}),e.jsx("li",{children:"제품 상세정보 : 영양성분 및 함량, 용량, 보관 및 취급 방법 등 제품 정보는 상세이미지 또는 상세정보에서 확인 가능합니다."})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:"주문취소"}),e.jsxs("ul",{children:[e.jsx("li",{children:"배송 단계별로 주문취소 방법이 상이합니다."}),e.jsx("li",{children:"[입금확인] 단계 : [마이칼리 > 주문내역 상세페이지] 에서 직접 취소 가능"}),e.jsx("li",{children:"[입금확인] 이후 단계 : 고객센터로 문의"}),e.jsx("li",{children:"생산이 시작된 [상품 준비중] 이후에는 취소가 제한되는 점 고객님의 양해 부탁드립니다."}),e.jsx("li",{children:"비회원은 모바일 App 또는 모바일 웹사이트에서 [마이칼리 > 비회원 주문 조회 페이지] 에서 취소가 가능합니다."}),e.jsx("li",{children:"일부 예약상품은 배송 3~4일 전에만 취소 가능합니다."}),e.jsx("li",{className:h.infoError,children:"※ 주문상품의 부분 취소는 불가능합니다. 전체 주문 취소 후 재구매 해주세요."})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:"배송"}),e.jsxs("ul",{children:[e.jsx("li",{children:"주문 완료 후 배송 방법(샛별/택배)은 변경이 불가능합니다."}),e.jsx("li",{children:"배송일 배송시간 지정은 불가능합니다. (예약배송 포함)"}),e.jsx("li",{className:h.infoError,children:"※ 전화번호, 이메일, 주소, 계좌번호 등의 상세 개인정보가 문의 내용에 저장되지 않도록 주의해 주시기 바랍니다."})]})]})]}):null,e.jsx("div",{className:h.wordCount,children:e.jsxs("span",{children:["( ",r.length," / 10 )"]})})]})},Ut=n.forwardRef(Gt),Xt=({type:t,titleValue:r,onTitleValueChangeHandler:i,contentValue:c,onContentValueChangeHandler:o,isSecret:l,onSecretChangeHandler:a,...p},m)=>e.jsx("div",{className:h.modalFormDetail,children:e.jsxs("div",{className:h.inner,children:[e.jsxs("div",{className:h.titleWrapper,children:[e.jsx("div",{className:h.title,children:e.jsx("label",{htmlFor:"title",children:"제목"})}),e.jsx("div",{className:h.inputText,children:e.jsx("input",{id:"title",type:"text",placeholder:"제목을 입력해주세요.",value:r,onChange:i})})]}),e.jsxs("div",{className:h.descWrapper,children:[e.jsx("div",{className:h.title,children:e.jsx("label",{htmlFor:"content",children:"내용"})}),e.jsx(Ut,{type:t,contentValue:c,onContentValueChangeHandler:o,ref:m})]}),t==="inquiry"&&e.jsx(ee,{label:"비밀글로 문의하기",style:{paddingLeft:"100px"},checked:l,onChange:a})]})}),en=n.forwardRef(Xt);function tn({isValid:t=!1,onSubmitHandler:r,...i}){return e.jsxs("form",{method:"dialog",className:h.buttonWrapper,children:[e.jsx(M,{type:"submit",value:"close",children:e.jsx("span",{children:"취소"})}),e.jsx(M,{type:"submit",value:"confirm",color:t?"primary":"gray",isValid:t,onClick:r,children:e.jsx("span",{children:"등록"})})]})}const nn=({productName:t="[풀무원] 탱탱쫄면 (4개입)",type:r="review",state:i,setState:c,...o},l)=>{const a=r==="review"?"후기 작성":r==="inquiry"?"상품 문의하기":"모달 등록 폼",[p,m]=n.useState(""),[s,u]=n.useState(""),[x,_]=n.useState(!1),D=p.length>0&&s.length>0,k=n.useRef(),A=w=>{m(w.target.value)},W=w=>{u(w.target.value.length>10?w.target.value.substring(0,10):w.target.value)},Z=w=>{_(w.target.checked)},O=w=>{r==="review"?c([...i,{id:i.length+1,userName:"홍길동",productName:"[풀무원] 탱탱쫄면 (4개입)",reviewTitle:p,reviewContent:s,reviewDate:Date.now(),recommend:Math.floor(Math.random()*5)+1}]):r==="inquiry"&&c([...i,{id:i.length+1,userName:"홍길동",productName:"[풀무원] 탱탱쫄면 (4개입)",inquiryTitle:p,inquiryContent:s,isSecret:x,inquiryDate:Date.now(),answer:null,answerDate:null,isFinished:!1}])};return e.jsxs("dialog",{ref:l,className:h.modalForm,onClose:w=>{m(""),u(""),k.current.classList.remove(`${h.hidden}`),r==="inquiry"&&_(!1)},children:[e.jsx(Qt,{title:a,modal:l}),e.jsx(Yt,{src:"http://via.placeholder.com/72x72",productName:"[풀무원] 탱탱쫄면 (4개입)"}),e.jsx(en,{type:r,titleValue:p,onTitleValueChangeHandler:A,contentValue:s,onContentValueChangeHandler:W,isSecret:x,onSecretChangeHandler:Z,ref:k}),e.jsx(tn,{isValid:D,onSubmitHandler:O})]})},rn=n.forwardRef(nn);function sn({type:t,state:r,setState:i}){const c=n.useRef();return e.jsxs("div",{className:d.reviewInquiryHeader,children:[e.jsx(cn,{type:t}),e.jsx(ie,{width:"155",height:"44",onClick:()=>{c.current.showModal()},children:e.jsx("span",{children:t==="review"?"후기 작성하기":"문의하기"})}),e.jsx(rn,{ref:c,type:t,state:r,setState:i})]})}function cn({type:t}){return t==="review"?e.jsxs("div",{className:d.reviewInquiryHeaderFrame,children:[e.jsx("h3",{children:"상품후기"}),e.jsx("p",{children:"글후기 50원 적립금 혜택이 있어요."}),e.jsxs("ul",{children:[e.jsx("li",{children:"퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시 5,000원 추가 적립"}),e.jsx("li",{children:"후기 작성은 배송완료일로부터 30일 이내 가능합니다."}),e.jsx("li",{children:"작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균 1~2일 소요)"})]})]}):t==="inquiry"?e.jsxs("div",{className:d.reviewInquiryHeaderFrame,children:[e.jsx("h3",{children:"상품문의"}),e.jsxs("ul",{children:[e.jsx("li",{children:"상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다."}),e.jsx("li",{children:"배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1 문의에 남겨주세요."})]})]}):null}const ln=({type:t="review",id:r},i)=>{const c=t==="review"?[]:t==="inquiry"?[{id:1,userName:"김정식",productName:"[풀무원] 탱탱쫄면 (4개입)",inquiryTitle:"팩이 터져서 왔어요",inquiryContent:`스티로폼 박스도 손상되어 있어 포장이 터져 엉망이네요.
환불 요청합니다.`,isSecret:!1,inquiryDate:"1676500073528",answer:`안녕하세요. 칼리입니다.
믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다.
더불어, 해당 게시판은 실시간으로 상담이 어려워 순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여 대단히 죄송합니다.
다행히도 고객님의 불편하셨던 사항은 고객행복센터를 통해 안내 받으신 점 확인하였습니다.
불편을 드려 정말 죄송할 따름이며, 고객님께 늘 신선하고 최상의 상품을 불편 없이 전달드리기 위해 최선을 다하는 칼리가 되겠습니다.
칼리 드림.`,answerDate:"1676900073528",isFinished:!1},{id:2,userName:"김선진",productName:"[풀무원] 탱탱쫄면 (4개입)",inquiryTitle:"김선진의 비밀글",inquiryContent:"유통기한이 언제까지인가요?",isSecret:!0,inquiryDate:"1676500073528",answer:"구매하신 날짜로부터 6개월 이내입니다.",answerDate:"1676900073528",isFinished:!1},{id:3,userName:"김선범",productName:"[풀무원] 탱탱쫄면 (4개입)",inquiryTitle:"김선범의 비밀글",inquiryContent:"고객 센터 운영 시간이 언제부터 언제까지인가요?",isSecret:!0,inquiryDate:"1676500073528",answer:"평일 오전 9시부터 오후 6시까지입니다.",answerDate:"1676900073528",isFinished:!0},{id:4,userName:"심선범",productName:"[풀무원] 탱탱쫄면 (4개입)",inquiryTitle:"심선범의 비밀글",inquiryContent:"배송지 변경 문의",isSecret:!0,inquiryDate:"1676500073528",answer:"확인 결과 이미 발송이 되어 배송지 변경은 불가합니다.",answerDate:"1676900073528",isFinished:!0},{id:5,userName:"야무",productName:"[풀무원] 탱탱쫄면 (4개입)",inquiryTitle:"야무의 비밀글",inquiryContent:"단순 변심 사유로 환불 요청합니다.",isSecret:!0,inquiryDate:"1676500073528",answer:"환불 처리해드렸습니다. 감사합니다.",answerDate:"1676900073528",isFinished:!0},{id:6,userName:"김데레사",productName:"[풀무원] 탱탱쫄면 (4개입)",inquiryTitle:"김데레사의 비밀글",inquiryContent:"배송일이 언제인가요?",isSecret:!0,inquiryDate:"1676500073528",answer:"당일 배송입니다.",answerDate:"1676900073528",isFinished:!0}]:[],[o,l]=n.useState(c);return e.jsxs("section",{id:r,ref:i,className:d.productDetailView,children:[e.jsx(sn,{type:t,state:o,setState:l}),t==="review"?e.jsx(St,{reviews:o}):t==="inquiry"?e.jsx(It,{inquiries:o}):null]})},R=n.forwardRef(ln),mn=()=>{const[t,r]=n.useState(1),i=n.useRef(),c=n.useRef(),o=n.useRef(),l=n.useRef(),a=[i,c,o,l],p=m=>{m.length!=0&&m.forEach(s=>{if(s.isIntersecting)switch(s.target){case i.current:r(1);break;case c.current:r(2);break;case o.current:r(3);break;case l.current:r(4);break}})};return n.useEffect(()=>{const m=new IntersectionObserver(p,{root:null,rootMargin:"-10% 0px",threshold:.2});return a.map(s=>{m.observe(s.current)}),()=>{m.disconnect()}},[]),e.jsxs("div",{children:[e.jsx(De,{}),e.jsx(Me,{activeAnchor:t}),e.jsx(Ze,{ref:i,id:"description"}),e.jsx(it,{ref:c,id:"detailInformation"}),e.jsx(R,{type:"review",ref:o,id:"review"}),e.jsx(R,{type:"inquiry",ref:l,id:"inquiry"})]})};export{mn as default};
