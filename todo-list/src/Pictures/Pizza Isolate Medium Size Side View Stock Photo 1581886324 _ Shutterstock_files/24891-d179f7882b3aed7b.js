"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24891],{86292:function(e,t,n){n.d(t,{J:function(){return P}});var i=n(70865),s=n(96670),r=n(87394),a=n(52322),o=n(9390),l=n(79436),u=n(96225),c=n(66358),d=n(33301),h=n(23490),f=n(44297),p=n(42005),m=n(57048),g=n(89522),v=n(92405),w=n(776),x=n(96109),I=n(2784),k=(0,n(8740).ZL)()(function(e){var t=e.palette,n=e.tokens.spacing;return{link:{position:"absolute",overflow:"hidden",display:"block",top:0,left:0,height:"100%",width:"100%",zIndex:2,"&:focus-visible":{border:"".concat(n.xs," solid ").concat(t.primary.main),outline:0}},button:{all:"unset",position:"absolute",overflow:"hidden",display:"block",top:0,left:0,height:"100%",width:"100%",zIndex:2,cursor:"pointer"}}}),b=function(e){var t,n=e.hasExpansionRows,x=e.withLink,I=e.inView,b=e.asset,P=e.gridItems,Z=e.getRoutePathProps,y=e.itemIndex,C=e.openGridItemInNewTab,j=e.withProductClickTracking,L=e.withProductClickWhereYouLeftOffTracking,O=e.gridItemLinkClassName,A=e.rowIndex,_=e.handleClick,G=k(),S=G.classes,N=G.cx,T=(0,r.Z)((0,g.KC)({asset:b,gridItems:P,getRoutePathProps:Z,itemIndex:y}),2),E=T[0],R=T[1],z=(0,p.w)(),F=(0,m.D)(),B=(0,h.N)().isBot,M=(0,w.wU)(),W=I&&E?o.r:l.n,q=(0,v.p)(d.Y$,!1,!1,!0),D=(0,f.f8)(b)&&q&&(null===(t=b.displays["600W"])||void 0===t?void 0:t.src);return x?(0,a.jsx)(W,(0,s.Z)((0,i.Z)({className:N(S.link,O),href:E,target:C?"_blank":void 0,"data-automation":"AssetGrids_GridItemClickableArea_link"},W!==l.n&&{linkAs:R}),{onClick:B?null:function(e){n&&e.preventDefault(),j&&z((0,s.Z)((0,i.Z)({asset:b,gridItems:P,eventLabel:c.D7F},L?{listId:c.YQz}:{}),{pageSection:M})),L&&F({eventLabel:c.LRD}),_({asset:b,rowIndex:A})},"aria-label":b.title||b.description,tabIndex:0,children:D&&(0,a.jsx)(u.E,{asset:b})})):null};b.defaultProps={openGridItemInNewTab:!1,withLink:!0,withProductClickTracking:!0,withProductClickWhereYouLeftOffTracking:!1,hasExpansionRows:!1,rowIndex:null,gridItemLinkClassName:null,handleClick:function(){},getRoutePathProps:x.r};var P=(0,I.memo)(b)},34354:function(e,t,n){n.d(t,{e:function(){return j}});var i=n(47842),s=n(70865),r=n(96670),a=n(26297),o=n(87394),l=n(52322),u=n(21647),c=n(68043),d=n(86292),h=n(39232),f=n(63256),p=n(25204),m=n(33967),g=n(75298),v=n(11800),w=n(96109),x=n(68138),I=n(2784),k=n(8740),b=n(39860),P=function(e){return"string"==typeof e?e:Math.floor((e-1e-5)*1e3)/1e3},Z=(0,k.ZL)()(function(e){var t=e.palette,n=e.tokens,i=n.color,s=n.spacing;return{item:{display:"block",overflow:"hidden",position:"relative"},link:{position:"absolute",overflow:"hidden",display:"block",top:0,left:0,height:"100%",width:"100%",zIndex:2,"&:focus-visible":{border:"".concat(s.xs," solid ").concat(t.primary.main),outline:0}},background:{backgroundColor:i.black},withAspectRatioSizing:{position:"absolute",width:"100%",height:"100%"},assetItemContainer:{width:"100%",height:"100%"},blankTemplateWrapper:{display:"flex",height:"100%"},assetItemSkeleton:{height:"100%"}}}),y=function(e,t){var n,i=(0,m.a)({contributor:{id:e.contributorId}}),s=i.isLoading,r=i.isAssetFreeToDownload;return!s&&((null==t?void 0:null===(n=t.restrictions)||void 0===n?void 0:n.isOverlayRestricted)||r)},C=function(e){var t,n,m,w=e.asset,k=e.AssetItem,C=e.assetItemProps,j=e.AssetOverlay,L=e.assetOverlayProps,O=e.getRoutePathProps,A=e.gridItemClassName,_=e.gridItemLinkClassName,G=e.gridItems,S=e.height,N=e.isInfiniteGrid,T=e.isPopperOpen,E=e.itemIndex,R=e.rowIndex,z=e.licensingAssetId,F=e.listId,B=e.openGridItemInNewTab,M=e.spacing,W=e.width,q=e.withFixedDimensions,D=e.withSsr,H=e.withItemBackground,Y=e.withLink,J=e.withProductClickTracking,V=e.eagerAssetOverlayCount,U=e.useCssGrid,K=e.hasExpansionRows,Q=e.handleClick,X=e.skeletonOnly,$=(0,a.Z)(e,["asset","AssetItem","assetItemProps","AssetOverlay","assetOverlayProps","getRoutePathProps","gridItemClassName","gridItemLinkClassName","gridItems","height","isInfiniteGrid","isPopperOpen","itemIndex","rowIndex","licensingAssetId","listId","openGridItemInNewTab","spacing","width","withFixedDimensions","withSsr","withItemBackground","withLink","withProductClickTracking","eagerAssetOverlayCount","useCssGrid","hasExpansionRows","handleClick","skeletonOnly"]),ee=Z({width:W,height:S}),et=ee.classes,en=ee.cx,ei=(0,p.u)(),es=(0,b.T)({asset:w}),er=es.isHovered,ea=es.setIsHovered,eo=es.onMouseEnter,el=es.onMouseLeave,eu=(0,o.Z)((0,I.useState)(!0),2),ec=eu[0],ed=eu[1],eh=(0,o.Z)((0,g.I)({triggerOnce:U||!N,defaultIsVisible:E<V}),2),ef=eh[0],ep=eh[1],em=(0,b.t)({withSsr:D}),eg=em.isAssetLoaded,ev=em.setIsAssetLoaded,ew=(0,o.Z)((0,I.useState)({height:P(S),width:P(W)}),2),ex=ew[0],eI=ew[1];(0,v.L)(function(){q&&!U&&eI({height:S,width:W}),ef&&F&&ei({listId:F,position:E,asset:w}),!U&&N&&ed(ef)},[S,W,q,U,X,ei,ef,E,F,w,N]);var ek=(0,f.r8)(w,!0),eb=c.hq.SIZE+c.hq.STEP;if(ek.height!==eb){var eP=(ek.height-eb)/ek.height;ek.height=eb,ek.width-=ek.width*eP}var eZ=(0,x.cK)(ek).classes,ey=y(w,L);return(0,l.jsx)("div",{role:"img","aria-label":"Asset ".concat(null!==(n=w.description)&&void 0!==n?n:"").trim(),"data-automation":"AssetGrids_GridItemContainer_div",onMouseEnter:eo,onMouseLeave:el,ref:ep,style:(0,r.Z)((0,s.Z)({},q&&!U&&ex,M&&{margin:"".concat(M,"px")}),{"--itemFlexBasis":(0,x.OM)(0,ek),"--itemFlexBasisLg":(0,x.OM)(c.hq.STEP,ek),"--itemFlexBasisMd":(0,x.OM)(2*c.hq.STEP,ek),"--itemFlexBasisSm":(0,x.OM)(4*c.hq.STEP,ek),"--itemFlexGrow":(0,x.kw)(ek)}),className:en(et.item,A,U&&eZ.item,H&&eg&&et.background),children:ec&&(0,l.jsxs)(l.Fragment,{children:[!X&&(0,l.jsx)(d.J,{asset:w,inView:ef,withLink:Y,rowIndex:R,itemIndex:E,gridItems:G,handleClick:Q,hasExpansionRows:K,getRoutePathProps:O,gridItemLinkClassName:_,openGridItemInNewTab:B,withProductClickTracking:J,withProductClickWhereYouLeftOffTracking:L.withProductClickWhereYouLeftOffTracking}),(ef||E<V)&&!ey&&!!j&&!X&&(0,l.jsx)(j,(0,s.Z)({listId:F,asset:w,gridItems:G,isHovered:er,setIsHovered:ea,isAssetLoaded:eg,itemIndex:E,licensingAssetId:z,width:W},L,$)),k&&(0,l.jsxs)(l.Fragment,{children:[!X&&(0,l.jsx)("div",{style:{"--assetItemContainerDisplay":(0,x.wj)(ek)?"flex":null,"--assetItemContainerAlignItems":(0,x.wj)(ek)?"center":null},className:en(et.assetItemContainer,U&&eZ.assetItemContainer,(0,i.Z)({},et.withAspectRatioSizing,!q)),children:(null==C?void 0:null===(t=C.holding)||void 0===t?void 0:t.isLoading)?(0,l.jsx)(u.Z,{variant:"rounded",className:et.assetItemSkeleton}):(0,l.jsx)("div",{style:{"--letterboxingWrapperPadding":U&&(0,x.wj)(ek)?"".concat((0,x.Px)(ek),"%"):null},className:en((m={},(0,i.Z)(m,eZ.letterboxingWrapper,U&&!(0,x.wj)(ek)),(0,i.Z)(m,eZ.letterboxingWrapperWithPseudo,U&&(0,x.wj)(ek)),(0,i.Z)(m,et.blankTemplateWrapper,(null==w?void 0:w.type)===h.C_),m)),children:(0,l.jsx)(k,(0,s.Z)({asset:w,gridItems:G,isHovered:T||er,onLoadHandler:ev,withSsr:D,itemIndex:E},C,$))})}),!q&&(0,l.jsx)("div",{style:{paddingBottom:W&&S&&"".concat(S/W*100,"%")}}),U&&(0,l.jsx)("div",{style:{paddingBottom:"".concat((ek.height/(0,x.hq)(ek)*100).toFixed(3),"%")}})]})]})})};C.defaultProps={AssetOverlay:null,assetItemProps:{},assetOverlayProps:{},eagerAssetOverlayCount:0,getRoutePathProps:w.r,gridItemClassName:null,gridItemLinkClassName:null,isInfiniteGrid:!1,isPopperOpen:!1,licensingAssetId:"",listId:"",openGridItemInNewTab:!1,spacing:0,withFixedDimensions:!0,withItemBackground:!1,withLink:!0,withProductClickTracking:!0,withSsr:!1,hasExpansionRows:!1,rowIndex:null,handleClick:function(){}};var j=(0,I.memo)(C)},39860:function(e,t,n){n.d(t,{T:function(){return l},t:function(){return u}});var i=n(87394),s=n(44297),r=n(54073),a=n.n(r),o=n(2784),l=function(e){var t=e.asset,n=(0,i.Z)((0,o.useState)(!1),2),r=n[0],l=n[1],u=(0,s.Am)(t),c=function(){return l(!0)},d=a()(c,200);return{isHovered:r,setIsHovered:l,onMouseEnter:u?d:c,onMouseLeave:function(){u&&d.cancel(),l(!1)}}},u=function(e){var t=e.withSsr,n=(0,i.Z)((0,o.useState)(t),2);return{isAssetLoaded:n[0],setIsAssetLoaded:n[1]}}},62234:function(e,t,n){n.d(t,{J:function(){return r}});var i=n(47842),s=n(68043),r=(0,n(8740).ZL)()(function(e){var t=e.breakpoints,n=e.palette,r=e.tokens,a=r.radius,o=r.zIndex,l=r.animation;return{root:{display:"flex",flexWrap:"wrap",transition:"opacity ".concat(l.duration.fast," ").concat(l.easing.default," .05s")},mobileScrollWrapper:(0,i.Z)({width:"100%"},t.down(s.x_),{display:"flex",width:"100%",overflowX:"auto",overflowY:"hidden",transform:"translateZ(0)"}),mobileScrollContent:(0,i.Z)({},t.down(s.x_),{"&&":{width:"auto"},flexWrap:"nowrap",display:"inline-flex","&:after":{content:'""',background:"\n          linear-gradient(\n            to left,\n            ".concat(n.background.default," 0,\n            transparent 100%\n          )"),position:"sticky",width:s.an,marginLeft:-s.an,top:0,bottom:0,right:0,pointerEvents:"none",zIndex:o["2"]}}),sstkGridItem:{borderRadius:a.m}}})},29938:function(e,t,n){n.d(t,{K:function(){return l}});var i=n(87394),s=n(87420),r=n(2784),a=n(68043),o=n(83303),l=function(e){var t=e.containerEl,n=e.defaultRenderWidth,l=void 0===n?a.zU:n,u=e.gridSizingOptions,c=e.defaultHeight,d=e.spacing,h=e.useCssGrid,f=h?1:0,p=(0,i.Z)((0,r.useState)(f),2),m=p[0],g=p[1],v=(0,s.h)(t,250,f).width,w=v?Math.max(v-1,0):l;return!h&&Math.floor(Math.abs(w-m))>1&&g(w),{rowHeight:(0,r.useMemo)(function(){return f||(0,o.yl)({width:m,gridSizingOptions:u,defaultHeight:c,spacing:d})},[c,f,u,m,d]),rowWidth:m}}},91010:function(e,t,n){n.d(t,{B:function(){return k}});var i=n(70865),s=n(52322),r=n(25237),a=n.n(r),o=a()(function(){return Promise.all([n.e(59493),n.e(95689),n.e(62799),n.e(55053)]).then(n.bind(n,95689)).then(function(e){return e.ImageAssetItemOverlay})},{loadableGenerated:{webpack:function(){return[95689]}},ssr:!0}),l=n(87229),u=n(69639),c=n(39232),d=n(44297),h=n(9823),f=n(94909),p=n(43110),m=a()(function(){return Promise.all([n.e(59493),n.e(93302),n.e(62799),n.e(95489)]).then(n.bind(n,72690)).then(function(e){return e.AssetItemOverlay})},{loadableGenerated:{webpack:function(){return[72690]}},ssr:!0}),g=a()(function(){return Promise.all([n.e(59493),n.e(93302),n.e(73449)]).then(n.bind(n,64533)).then(function(e){return e.EnterpriseAssetItemOverlay})},{loadableGenerated:{webpack:function(){return[64533]}},ssr:!0}),v=a()(function(){return n.e(31421).then(n.bind(n,14770)).then(function(e){return e.TrackOverlay})},{loadableGenerated:{webpack:function(){return[14770]}},ssr:!0}),w=a()(function(){return Promise.all([n.e(59493),n.e(95689),n.e(49151)]).then(n.bind(n,25508)).then(function(e){return e.CreateTemplateOverlay})},{loadableGenerated:{webpack:function(){return[25508]}},ssr:!0}),x=a()(function(){return Promise.all([n.e(59493),n.e(95689),n.e(49151)]).then(n.bind(n,38709)).then(function(e){return e.ExperimentCVRT1052})},{loadableGenerated:{webpack:function(){return[38709]}},ssr:!0}),I=function(e){var t=e.asset,n=(0,d._L)(t),r=(0,f.d)(),a=(0,p.B)();switch(n){case c.tn:case c.xF:return(0,s.jsx)(v,(0,i.Z)({},e));case c.C_:case c.zo:return(0,s.jsx)(w,(0,i.Z)({},e));case c.k4:return r||a?(0,s.jsx)(o,(0,i.Z)({},e)):(0,s.jsx)(x,(0,i.Z)({},e));case c.hv:return(0,s.jsx)(l.Q,(0,i.Z)({},e));case c.Nk:return(0,s.jsx)(u.z,(0,i.Z)({},e));default:return(0,s.jsx)(m,(0,i.Z)({},e))}},k=function(e){var t=(0,h.D)().isBrandEnterprise,n=(0,p.B)(),r=e.asset;if(t){if(void 0===n)return null;if(n)return(0,d.t1)(r)?(0,s.jsx)(u.z,(0,i.Z)({},e)):r.type===c.zo?(0,s.jsx)(w,(0,i.Z)({},e)):(0,s.jsx)(g,(0,i.Z)({},e))}return(0,s.jsx)(I,(0,i.Z)({isUserLoggedIn:n},e))}},57999:function(e,t,n){n.d(t,{y:function(){return _}});var i,s=n(70865),r=n(26297),a=n(52322),o=n(39232),l=n(62021),u=n(91010),c=function(e){var t=e.initialProps;return(0,a.jsx)(u.B,(0,s.Z)({},t))},d=n(47842),h=n(88849),f=n(2784),p=n(87229),m=n(69639),g=n(44297),v=n(9823),w=n(43110),x=n(25237),I=n.n(x),k=I()(function(){return Promise.all([n.e(59493),n.e(95689),n.e(62799),n.e(55053)]).then(n.bind(n,44499)).then(function(e){return e.ImageAssetItemOverlay})},{loadableGenerated:{webpack:function(){return[44499]}},ssr:!0}),b=I()(function(){return Promise.all([n.e(59493),n.e(93302),n.e(62799),n.e(95489)]).then(n.bind(n,89340)).then(function(e){return e.AssetItemOverlay})},{loadableGenerated:{webpack:function(){return[89340]}},ssr:!0}),P=I()(function(){return Promise.all([n.e(59493),n.e(93302),n.e(73449)]).then(n.bind(n,64533)).then(function(e){return e.EnterpriseAssetItemOverlay})},{loadableGenerated:{webpack:function(){return[64533]}},ssr:!0}),Z=I()(function(){return n.e(31421).then(n.bind(n,14770)).then(function(e){return e.TrackOverlay})},{loadableGenerated:{webpack:function(){return[14770]}},ssr:!0}),y=I()(function(){return Promise.all([n.e(59493),n.e(95689),n.e(49151)]).then(n.bind(n,25508)).then(function(e){return e.CreateTemplateOverlay})},{loadableGenerated:{webpack:function(){return[25508]}},ssr:!0}),C=function(e){var t=e.asset;switch((0,g._L)(t)){case o.tn:case o.xF:return(0,a.jsx)(Z,(0,s.Z)({},e));case o.C_:case o.zo:return(0,a.jsx)(y,(0,s.Z)({},e));case o.k4:return(0,a.jsx)(k,(0,s.Z)({},e));case o.hv:return(0,a.jsx)(p.Q,(0,s.Z)({},e));case o.Nk:return(0,a.jsx)(m.z,(0,s.Z)({},e));default:return(0,a.jsx)(b,(0,s.Z)({},e))}},j=function(e){var t=(0,v.D)().isBrandEnterprise,n=(0,w.B)(),i=e.asset;if(t){if(void 0===n)return null;if(n)return(0,g.t1)(i)?(0,a.jsx)(m.z,(0,s.Z)({},e)):i.type===o.zo?(0,a.jsx)(y,(0,s.Z)({},e)):(0,a.jsx)(P,(0,s.Z)({},e))}return(0,a.jsx)(C,(0,s.Z)({isUserLoggedIn:n},e))},L={flagID:"serce-397-remove-preview-button-srp",id:"SERCE-397",name:"Remove preview button on SRP",treatments:(i={},(0,d.Z)(i,h.NM,function(e){var t=e.experiment,n=e.initialProps;return(0,f.useEffect)(function(){t.recordImpression()},[]),(0,a.jsx)(c,{initialProps:n})}),(0,d.Z)(i,h.vG,function(e){var t=e.experiment,n=e.initialProps;return(0,f.useEffect)(function(){t.recordImpression()},[]),(0,a.jsx)(j,(0,s.Z)({},n))}),i)},O=function(){return(0,a.jsx)(a.Fragment,{})},A=function(e){return(0,a.jsx)(l.K,{config:L,initialProps:e,Portal:c,SkeletonLoader:O})},_=function(e){var t=e.asset,n=e.isAssetLoaded,i=(0,r.Z)(e,["asset","isAssetLoaded"]),l=(0,g.Tp)(t);if(!n&&l!==o.xF)return null;switch(l){case o.zo:case o.hv:case o.k4:case o.xF:case o.tn:case o.nX:case o.A7:case o.Nk:case o.pX:return(0,a.jsx)(A,(0,s.Z)({asset:t},i));default:return null}}},69639:function(e,t,n){n.d(t,{z:function(){return s}});var i=n(25237),s=n.n(i)()(function(){return Promise.all([n.e(97993),n.e(50288),n.e(98318)]).then(n.bind(n,2814)).then(function(e){return e.GenerateAssetItemOverlay})},{loadableGenerated:{webpack:function(){return[2814]}},ssr:!0})},96225:function(e,t,n){n.d(t,{E:function(){return c}});var i=n(52322),s=n(67550),r=n(2784),a=n(8740),o=JSON.parse('{"productId":"2471210954516338071","name":"Guitar","signature_image":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/G03.jpg","initialImage":"G03","sprites_300":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-300/atlas-300.jpg","sprites_600":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/atlas-600.jpg","displays":{"600W":{"src":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/G03.jpg","width":600,"height":600}},"extensions":{"atlas":{"camera_type_code":"full_spinner"}},"atlas":{"camera_type_code":"full_spinner"}}'),l=n(88351),u=(0,a.ZL)()(function(e){return{canvasContainer:{width:"100%",position:"relative",outline:0,borderColor:e.palette.border1Color,overflow:"hidden",display:"flex",justifyContent:"center"},canvas:{width:"100%",height:"100%"}}}),c=function(e){var t=e.asset,n=e.className,a=u(),o=a.classes,c=a.cx,d=(0,r.useRef)(null);return(0,l.k)({asset:t,canvasRef:d,autoRotate:!0}),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{className:c(o.canvasContainer,n),children:(0,i.jsx)("canvas",{ref:d,className:o.canvas,width:600,height:600})})})};c.defaultProps={asset:o}},87229:function(e,t,n){n.d(t,{Q:function(){return s}});var i=n(25237),s=n.n(i)()(function(){return Promise.all([n.e(59493),n.e(93302),n.e(14315)]).then(n.bind(n,4407)).then(function(e){return e.TemplateAssetItemOverlay})},{loadableGenerated:{webpack:function(){return[4407]}},ssr:!0})},25204:function(e,t,n){n.d(t,{u:function(){return o}});var i=n(29292),s=n(776),r=n(2784),a=n(68533),o=function(){var e=(0,s.yh)().analytics,t=(0,a.Y)().getSearchContextFromAssets;return(0,r.useCallback)(function(n){var s=n.asset,r=n.listId,a=n.position,o=(0,i.qI)(s),l=(0,i.f_)(s),u=(0,i.Rz)(s);r&&e.assetViewed({list_id:r,position:a,search_context:t([s]),product_id:o,sku:o,brand:l||(0,i.jN)(s),product_line:u})},[e,t])}},80530:function(e,t,n){n.d(t,{l:function(){return u}});var i=n(70865),s=n(29292),r=n(44297),a=n(776),o=n(2784),l=n(68533),u=function(){var e=(0,a.yh)().analytics,t=(0,a.wU)(),n=(0,l.Y)().getSearchContextFromAssets;return(0,o.useCallback)(function(a){var o=a.assets,l=a.position,u=a.listId,c=a.eventLabel;(null==o?void 0:o.length)&&e.productListViewed((0,i.Z)({list_id:u,position:l,products:o.map(function(e){return{product_id:(0,s.qI)(e),asset_type:(0,r.ZZ)(e),sku:(0,s.qI)(e)}}),search_context:n(o)},t?{pageSection:t,eventLabel:void 0===c?"":c}:{}))},[e,n,t])}},87420:function(e,t,n){n.d(t,{h:function(){return u}});var i=n(26297),s=n(87394),r=n(13787),a=n(2784),o=n(11800),l={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0,toJSON:function(){return this.toJSON,(0,i.Z)(this,["toJSON"])}},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=(0,s.Z)((0,a.useState)(l),2),u=i[0],c=i[1];return(0,o.L)(function(){if(n)return function(){};var i=new window.ResizeObserver((0,r.P)(function(e){var t=e[0],n=null==t?void 0:t.contentRect;n&&c(n)},t));return i.observe(e.current),function(){i.disconnect(),i=null}},[t,c,e]),u}}}]);
//# sourceMappingURL=24891-d179f7882b3aed7b.js.map