"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67471,43874,70760],{43874:function(n,e,t){t.r(e),t.d(e,{OffsetLogoOverlay:function(){return l}});var o=t(47842),i=t(52322),a=t(59312),r=t(26544),s=t(75),c=t(59877),u=(0,t(8740).ZL)()(function(n,e){var t,i=n.tokens,a=i.font,r=i.spacing,s=i.zIndex,c=e.positionY;return{offsetContainer:{display:"flex",cursor:"pointer",zIndex:s["3"]},customPosition:(t={position:"absolute",left:0},(0,o.Z)(t,void 0===c?"":c,0),(0,o.Z)(t,"margin",r.s),t),tooltip:{padding:r.s,fontSize:a.size.xs}}}),l=function(n){var e=n.positionY,t=n.isCustomPositionNeeded,l=u({positionY:void 0===e?"bottom":e}),d=l.classes,f=l.cx,v=(0,c.$G)(s.tuJ),h=v.t,g=v.ready?h("ent:premium_content_by_shutterstock"):"";return(0,i.jsx)("div",{className:f((0,o.Z)({},d.customPosition,void 0===t||t)),children:(0,i.jsx)(a.l,{placement:"right",title:g,tooltipClassName:d.tooltip,children:(0,i.jsx)("div",{className:d.offsetContainer,children:(0,i.jsx)(r.N,{})})})})}},95284:function(n,e,t){t.d(e,{D:function(){return c}});var o=t(87394),i=t(52322),a=t(38162),r=t(2784),s=(0,t(8740).ZL)()(function(n,e){var t=n.tokens,o=e.height,i=e.color;return{root:{height:null!=o?o:"1px"},bar:{background:null!=i?i:t.color.red.tomato}}}),c=function(n){var e=n.expectedDuration,t=void 0===e?3e3:e,c=s({height:n.height,color:n.color}).classes,u=(0,o.Z)((0,r.useState)(0),2),l=u[0],d=u[1],f=(0,o.Z)((0,r.useState)("determinate"),2),v=f[0],h=f[1];return(0,r.useEffect)(function(){var n=setInterval(function(){d(function(n){return 100===n?(h("indeterminate"),0):Math.min(n+Math.random()*(100/(t/500)),100)})},500);return"indeterminate"===v&&clearInterval(n),function(){clearInterval(n)}},[t,v]),(0,i.jsx)(a.Z,{classes:{root:c.root,bar:c.bar},color:"inherit",value:l,variant:v})}},26544:function(n,e,t){t.d(e,{N:function(){return g}});var o=t(52322),i=t(47746),a=t(91609),r=t(45837),s=t(24865),c=t(75),u=t(59877),l=t(8740),d="35px",f="32px",v=(0,l.ZL)()(function(n){var e=n.tokens,t=e.lineHeight,o=e.spacing;return{channelIcon:{height:d,width:d},overlayIcon:{backgroundImage:"url(".concat("/assets/images/offset_logo_black_background.png",")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:f,width:f},root:{alignItems:"center",display:"inline-flex",justifyContent:"flex-start",lineHeight:t.l},channel:{marginLeft:0,marginRight:o.s},overlay:{height:f,margin:0,minHeight:f,minWidth:f,padding:0}}}),h=function(n){var e=n.logoColor,t=v().classes;return(0,i.Z)().palette.mode===a.oc.DARK&&"black"!==e||"white"===e?(0,o.jsx)(r.G,{className:t.channelIcon}):(0,o.jsx)(s.y,{className:t.channelIcon})},g=function(n){var e=n.className,t=n.isChannelBannerLogo,i=void 0!==t&&t,a=n.logoColor,r=v(),s=r.classes,l=r.cx,d=(0,u.$G)(c.hgN).t,f=i?s.channel:s.overlay;return(0,o.jsx)("span",{className:l(s.root,f,void 0===e?"":e),"aria-label":d("ent:offset_by_shutterstock"),children:i?(0,o.jsx)(h,{logoColor:a}):(0,o.jsx)("span",{className:s.overlayIcon})})}},70528:function(n,e,t){t.d(e,{Q:function(){return k}});var o=t(47842),i=t(87394),a=t(52322),r=t(12819),s=t(67550),c=t(62197),u=t(95284),l=t(47999),d=t(70865),f=t(26297),v=t(52309),h=t(25237),g=t.n(h)()(function(){return t.e(67760).then(t.bind(t,67760)).then(function(n){return n.Licensing3dObjectModal})},{loadableGenerated:{webpack:function(){return[67760]}},ssr:!1}),p=function(n){var e=n.isOpen,t=(0,f.Z)(n,["isOpen"]);return(0,v.B)(e)&&(0,a.jsx)(g,(0,d.Z)({isOpen:e},t))},m=t(54112),b=t(36888),y=t(75),x=t(2784),C=t(8740),w=t(88351),L=(0,C.ZL)()(function(n,e){var t,i=n.palette,a=n.breakpoints,r=n.tokens,s=r.spacing,c=r.fontSize,u=r.border,l=r.font,d=e.resolution,f=e.showAssetQuickViewStyles,v=e.isMobile,h=e.positionOfLoadingBar;return{canvasContainer:{width:"100%",position:"relative",outline:0,borderColor:i.border1Color,overflow:"hidden",padding:s.l,backgroundColor:i.common.white,borderRadius:s.base},canvas:{width:"100%",height:"100%",maxWidth:d},container:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative"},caption3dContainer:{display:"flex",position:"absolute",top:s.base},incrementalLoadingBar:(t={zIndex:1,position:"absolute"},(0,o.Z)(t,h,0),(0,o.Z)(t,"height","15%"),(0,o.Z)(t,"width",v?"80%":"50%"),(0,o.Z)(t,"padding",s.m),(0,o.Z)(t,"justifyContent","center"),(0,o.Z)(t,"alignItems","center"),t),label:(0,o.Z)({margin:"".concat(s.xxs," 0 0 ").concat(s.s)},a.down("sm"),{fontSize:c.s}),informationContainer:{display:"flex",position:"absolute",justifyContent:"center",bottom:0,backgroundColor:"".concat(f?i.common.white:i.common.black),padding:s.base,width:"100%",borderRadius:"0 0 ".concat(u.radius.xl," ").concat(u.radius.xl)},informationLabel:{color:"".concat(f?i.common.black:i.common.white)},learnMore:{color:i.common.white,marginLeft:s.base,textDecoration:"underline",lineHeight:l.lineHeight.m},loadingAngleLabel:{display:"flex",justifyContent:"center"}}}),k=function(n){var e=n.asset,t=n.showAssetQuickViewStyles,o=void 0!==t&&t,d=n.setAdditionalAssetData,f=n.isMobile,v=L({resolution:600,showAssetQuickViewStyles:o,isMobile:f,positionOfLoadingBar:f?"top":"bottom"}),h=v.classes,g=v.cx,C=(0,b.bo)().classes,k=(0,m.D)({namespace:y.Cgc,translationKeys:{clickAndDrag:"image:click_and_drag_3d_object",informationLabel:"image:3d_rotate_info",learnMore:"image:learn_more",loadingAnglesLabel:"image:loading_camera_angles"}}).labels,I=(0,x.useRef)(null),Z=(0,w.k)({asset:e,canvasRef:I}),S=Z.loading,_=Z.angle,j=Z.initialAngle;(0,x.useEffect)(function(){d({angle:_||j})},[_,j,d]);var B=(0,i.Z)((0,x.useState)(!1),2),E=B[0],D=B[1],T=function(){return D(!E)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(s.Z,{className:h.container,children:[(0,a.jsx)(s.Z,{className:h.canvasContainer,children:(0,a.jsx)("canvas",{id:"object",className:h.canvas,ref:I,width:600,height:600})}),100===S&&(0,a.jsxs)(s.Z,{className:h.caption3dContainer,children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)(c.Z,{className:h.label,variant:"body2",children:k.clickAndDrag})]}),S<100&&(0,a.jsxs)(s.Z,{className:h.incrementalLoadingBar,children:[(0,a.jsx)(u.D,{expectedDuration:100,height:"3px"}),(0,a.jsx)("div",{"data-automation":"pixelsquid_object_loading",children:(0,a.jsx)(c.Z,{className:h.loadingAngleLabel,variant:"body2",children:k.loadingAnglesLabel})})]}),o?(0,a.jsx)(s.Z,{className:h.informationContainer,children:(0,a.jsx)(c.Z,{className:h.informationLabel,variant:"body2",children:k.informationLabel})}):(0,a.jsxs)(s.Z,{className:h.informationContainer,children:[(0,a.jsx)(c.Z,{className:h.informationLabel,variant:"body2",children:k.informationLabel}),(0,a.jsx)(l.z,{"aria-label":"image:learn_more",className:g(C.buttonAnchor,h.learnMore),onClick:T,children:k.learnMore}),(0,a.jsx)(p,{isOpen:E,onClose:T})]})]})})};k.defaultProps={isMobile:!1}},88351:function(n,e,t){t.d(e,{k:function(){return p}});var o=t(87394),i=t(2784),a=t(98788),r=t(5163),s=["B","C","D","E","F","G","H","I","J","K","L","M","N","O"],c=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"],u=["B","C","D","E","F","G","H","I"],l=function(n){var e=n.imageIndex,t=n.canvasRef,o=n.onLoad,i=n.imagePath,a=t.current,r=a.getContext("2d"),s="".concat(i).concat(e,".jpg"),c=new Image;c.src=s,c.onload=function(){o(e),r.drawImage(c,0,0,a.width,a.height)}},d=function(n){var e,t=n.imageIndexes,o=n.setLoading,i=n.imagePath,s=0;t.forEach((e=(0,a.Z)(function(n){var e;return(0,r.__generator)(this,function(a){return(e=new Image).src="".concat(i).concat(n,".jpg"),e.onload=function(){o(Math.round(100*(s+=1)/t.length))},[2]})}),function(n){return e.apply(this,arguments)}))},f=function(n){var e=n.latitudes,t=n.longitudes,o=[];return e.forEach(function(n){t.forEach(function(e){o.push(n+e)})}),{imageIndexes:o}},v=function(n){var e=n.latitudes,t=n.longitudes,o=n.currentImageIndex,i=n.vertical,a=n.horizontal,r=o.substring(0,1),s=o.substring(1),c=e.indexOf(r),u=t.indexOf(s);return c-=i,u-=a,c<0?c=0:c>=e.length&&(c=e.length-1),u<0?u+=t.length:u>=t.length&&(u-=t.length),e[c]+t[u]},h=function(n){var e=n.asset,t=e.validLatitudes,o=e.cameraType;return t||("top_half"===o||"half_spinner"===o?u:s)},g=function(n){var e,t,o=n.imageSrc;return(null==o?void 0:o.split("jpeg-600/").length)>1?(null===(e=null==o?void 0:o.split("jpeg-600/")[1])||void 0===e?void 0:e.split(".jpg")[0])||"H01":(null===(t=null==o?void 0:o.split("previews/")[1])||void 0===t?void 0:t.split("-")[0])||"H01"},p=function(n){var e=n.asset,t=n.canvasRef,a=n.autoRotate,r=(0,i.useMemo)(function(){return h({asset:e})},[e]),s=e.validLongitudes||c,u=(0,o.Z)((0,i.useState)(0),2),p=u[0],m=u[1],b=(0,o.Z)((0,i.useState)(),2),y=b[0],x=b[1],C=e.displays["600W"].src,w=null==C?void 0:C.substring(0,C.lastIndexOf("/")+1),L=g({imageSrc:C}),k=(0,i.useRef)(),I=(0,i.useRef)();(0,i.useEffect)(function(){k.current=null,I.current=null},[e]);var Z=(0,i.useMemo)(function(){return f({latitudes:r,longitudes:s})},[r,s]).imageIndexes,S=(0,i.useCallback)(function(n){var e=n.horizontal,o=n.vertical,i=k.current,a=null==I?void 0:I.current;if(!a||i===a){var c=v({latitudes:r,longitudes:s,currentImageIndex:i,horizontal:e,vertical:o});i!==c&&(I.current=c,l({imageIndex:c,canvasRef:t,imagePath:w,onLoad:function(){k.current=c}}))}},[t,w,r,s]),_=function(n){var e=n.currentPosition,t=n.previousPosition;return e>t?1:e<t?-1:0};return(0,i.useEffect)(function(){l({imageIndex:L,canvasRef:t,imagePath:w,onLoad:function(){k.current=L}});var n=t.current;if(a){var e,o=function(){S({horizontal:1,vertical:0})};n.addEventListener("mouseover",function(){d({imageIndexes:Z,setLoading:m,imagePath:w}),e=setInterval(o,100)}),n.addEventListener("mouseout",function(){clearInterval(e),l({imageIndex:L,canvasRef:t,imagePath:w,onLoad:function(){k.current=L,I.current=null}})})}else{d({imageIndexes:Z,setLoading:m,imagePath:w});var i=!1,r={x:null,y:null},s=function(n){var e=n.e,t=n.x,o=n.y;x(k.current),e.preventDefault(),i=!0,r={x:t,y:o}},c=function(n){var e=n.e,t=n.x,o=n.y;if(e.preventDefault(),i){var a=_({currentPosition:t,previousPosition:r.x});S({vertical:_({currentPosition:o,previousPosition:r.y}),horizontal:a}),r={x:t,y:o}}},u=function(n){x(k.current),n.preventDefault(),i=!1},f=function(n){return s({e:n,x:n.clientX,y:n.clientY})},v=function(n){return c({e:n,x:n.clientX,y:n.clientY})};return n.addEventListener("mousedown",f),n.addEventListener("mousemove",v),n.addEventListener("mouseup",u),n.addEventListener("touchstart",function(n){var e=n.touches[0];s({e:n,x:e.clientX,y:e.clientY})}),n.addEventListener("touchmove",function(n){var e=n.touches[0];c({e:n,x:e.clientX,y:e.clientY})}),n.addEventListener("touchend",u),function(){n.removeEventListener("mousedown",f),n.removeEventListener("mousemove",v),n.removeEventListener("mouseup",u)}}return function(){}},[Z,t,S,w,L,a,m]),{loading:p,angle:y,initialAngle:L}}},49644:function(n,e,t){t.d(e,{V:function(){return P}});var o=t(98788),i=t(70865),a=t(96670),r=t(87394),s=t(5163),c=t(52322),u=t(44417),l=t(44699),d=t(66358),f=t(73572),v=t(11164),h=t(29292),g=t(44297),p=t(48433),m=t(89522),b=t(67855),y=t(11849),x=t(65257),C=t(53007),w=t(776),L=t(75),k=t(34273),I=t.n(k),Z=t(70314),S=t.n(Z),_=t(25237),j=t.n(_),B=t(59877),E=t(2784),D=S()().publicRuntimeConfig.shutterstockBaseUrl,T=j()(function(){return Promise.all([t.e(27310),t.e(81503),t.e(88629),t.e(72108)]).then(t.bind(t,51935)).then(function(n){return n.DynamicMenuDropdownContent})},{loadableGenerated:{webpack:function(){return[51935]}},ssr:!1}),R="action-menu",A=function(n){var e=n.asset,t=n.labels,i=n.onCloseHandler,a=n.productSharedAnalyticsEvent,r=n.shareLink,c=n.shouldTrackAnalytics,u=n.twitterCopy,d=n.setCopyLinkStatus,v=n.pageSection;return[{label:f.vq,Icon:b.s,href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(r)),isLink:!0,hasDivider:!1,onClick:function(){c&&a({asset:e,shareVia:f.vq,pageSection:v}),i()}},{label:f.Ib,Icon:y.t,href:"https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(r),"&text=").concat(void 0===u?"":u),isLink:!0,hasDivider:!1,onClick:function(){c&&a({asset:e,shareVia:f.Ib,pageSection:v}),i()}},{label:t.copy,Icon:x.Copy,isLink:!1,onClick:(0,o.Z)(function(){var n;return(0,s.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),[4,I()(r)];case 1:return t.sent(),c&&a({asset:e,shareVia:"copyLink",pageSection:v}),d({status:l.MR,error:void 0}),[3,4];case 2:return n=t.sent(),d({status:l.pn,error:n}),[3,4];case 3:return i(),[7];case 4:return[2]}})}),hasDivider:!0}]},N=function(n){var e=n.t;return{share:e("common:actions_share"),email:e("account:profile_email"),copy:e("common:actions_copy"),copyToClipBoardSuccess:e("developers:apps_copied_to_clipboard"),copyToClipBoardWarning:e("notifications:label_generic_failure")}},P=function(n){var e=n.asset,t=n.ButtonComponent,o=n.IconComponent,s=n.classes,f=n.hasTooltip,b=n.iconContainerClassName,y=n.shouldTrackAnalytics,x=n.clickAnalyticsLabel,C=n.size,k=(0,w.yh)().analytics,I=(0,v.m)().insightType,Z=x.pageSection,S=x.eventLabel,_=N({t:(0,B.$G)(L.VQ6).t}),j=e.description,P=(0,r.Z)((0,m.KC)({asset:e}),1)[0],M=(0,r.Z)((0,E.useState)(null),2),z=M[0],V=M[1],O=(0,r.Z)((0,E.useState)(!1),2),H=O[0],F=O[1],G=(0,r.Z)((0,E.useState)({status:"",error:void 0}),2),W=G[0],Y=G[1],Q=(0,p.W)(),K=(0,g.PD)(e),q=function(){H||F(!0)},U=function(n){q(),V(n)},X=function(){return U(null)},J=A({asset:e,labels:_,onCloseHandler:X,productSharedAnalyticsEvent:Q,setCopyLinkStatus:Y,shareLink:"".concat(D).concat(P),shouldTrackAnalytics:y,twitterCopy:j,pageSection:d.df}),$=(0,a.Z)((0,i.Z)({size:C,"aria-label":_.share},H&&z&&{"aria-controls":R}),{"aria-haspopup":"true",className:s.button,onClick:function(n){y&&k.click((0,a.Z)((0,i.Z)({pageSection:Z||d.hTM,eventLabel:S||d.$cX},K&&{brand:(0,h.f_)(e),product_line:(0,h.Rz)(e)}),{eventValue:{insightType:I}})),U(n.currentTarget)},onMouseEnter:q});return(0,c.jsxs)("div",{className:b,children:[(0,c.jsx)(t,{buttonProps:$,IconComponent:o,labels:_,hasTooltip:f}),H&&(0,c.jsx)(T,{id:R,anchorEl:z,menuOptions:J,onCloseHandler:X}),(0,c.jsx)(u.Y,{alertSeverity:W.status,error:W.error,handleSnackbarClose:function(){return Y({status:""})},isOpen:!!W.status,message:W.status===l.MR?_.copyToClipBoardSuccess:_.copyToClipBoardWarning})]})};P.defaultProps={classes:{},clickAnalyticsLabel:{},hasTooltip:!1,shouldTrackAnalytics:!1,IconComponent:C.Share,size:"small"}},73572:function(n,e,t){t.d(e,{Er:function(){return a},Ib:function(){return i},QD:function(){return u},VU:function(){return s},fW:function(){return r},iC:function(){return c},rg:function(){return l},uc:function(){return d},vq:function(){return o}});var o="Facebook",i="Twitter",a="Instagram",r="LinkedIn",s="YouTube",c="Vimeo",u="#4267B2",l="#FD1D1D",d="#E60023"},26051:function(n,e,t){t.d(e,{G:function(){return o}});var o=function(n){var e=n.asset,t=void 0===e?{}:e,o=t.descriptionLanguageMap,i=void 0===o?{}:o,a=t.description;return i[n.language]||i.en||a}},84866:function(n,e,t){t.d(e,{bI:function(){return r},n_:function(){return s}});var o=t(70314),i=t.n(o),a=function(n){var e=n.name,t=i()().publicRuntimeConfig.campaign;return(null==t?void 0:t[e])||null},r=function(n){var e=i()().publicRuntimeConfig.assets.cdnHostURL;if(e&&n.id)return"".concat(e,"/").concat("dream/photos","/").concat(n.id,".jpg")},s=function(n){var e,t=n.contributorId,o=null===(e=a({name:"dream"}))||void 0===e?void 0:e.contributorId;return!!o&&(Array.isArray(o)||(o=[o]),!!t&&o.includes(Number(t)))}},97184:function(n,e,t){t.d(e,{L:function(){return i}});var o=t(776),i=function(){var n,e,t,i,a,r,s=(0,o.yh)().analytics;return{pageType:null==s?void 0:null===(n=s._analyticsData)||void 0===n?void 0:null===(e=n._data)||void 0===e?void 0:null===(t=e.page)||void 0===t?void 0:t.pageType,subpageType:null==s?void 0:null===(i=s._analyticsData)||void 0===i?void 0:null===(a=i._data)||void 0===a?void 0:null===(r=a.page)||void 0===r?void 0:r.subPage}}},48433:function(n,e,t){t.d(e,{W:function(){return u}});var o=t(70865),i=t(29292),a=t(44297),r=t(776),s=t(2784),c=t(68533),u=function(){var n=(0,r.yh)().analytics,e=(0,c.Y)().getSearchContext;return(0,s.useCallback)(function(t){var r=t.asset,s=t.shareVia,c=t.pageSection,u=(0,i.qI)(r),l=(0,a.PD)(r);n.productShared((0,o.Z)({asset_type:(0,a.ZZ)(r),category:(0,i.CP)(r),name:(0,i.LJ)(r),product_id:u,search_context:e(r),share_via:s,sku:u,page_section:c},l&&{brand:(0,i.f_)(r),product_line:(0,i.Rz)(r)}))},[n,e])}},33967:function(n,e,t){t.d(e,{a:function(){return l}});var o=t(33301),i=t(84866),a=t(43110),r=t(92405),s=t(2784),c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.isLoading,t=n.withinCampaign,o=void 0!==t&&t;return{isLoading:void 0!==e&&e,isAssetFreeToDownload:o,canPreview:!o,canShare:!o,canEdit:!o,canTry:!o,canSaveToCollection:!o,canSeeDetailsModal:!o}},u=function(){var n=(0,r.p)(o.NV);return{data:{isDreamCampaignEnabled:n},isValidating:void 0===n}},l=function(n){var e=(n||{}).contributor,t=u(),o=t.data,r=t.isValidating,l=(0,a.B)(),d=null==e?void 0:e.id;return(0,s.useMemo)(function(){var n=l&&r;return!n&&o.isDreamCampaignEnabled&&l&&(0,i.n_)({contributorId:null!=d?d:""})?c({withinCampaign:!0}):c({isLoading:n})},[r,o,d,l])}},19767:function(n,e,t){t.d(e,{f:function(){return c}});var o=t(70865),i=t(96670),a=t(39232),r=t(38204),s=t(97184),c=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.k4,c=(0,s.L)(),u=c.pageType,l=c.subpageType,d=(0,i.Z)((0,o.Z)({},e),{pageType:u,subpageType:l});return(0,r.b1)(n,d,t)}},65094:function(n,e,t){t.d(e,{E:function(){return f}});var o=t(33301),i=t(29858),a=t(44297),r=t(33967),s=t(9823),c=t(5632),u=t(10728),l=t(92405),d=function(n){var e=(n||{}).contributor,t=(0,r.a)({contributor:e}),o=t.isLoading;return{showDownloadForFreeButton:t.isAssetFreeToDownload,isEditRestrictedByCampaign:!t.canEdit||o,isShareRestrictedByCampaign:!t.canShare||o,isTryRestrictedByCampaign:!t.canTry||o,isCollectionSaveRestrictedByCampaign:!t.canSaveToCollection||o}},f=function(n){var e=n.asset,t=n.isCatalog,r=void 0!==t&&t,f=n.withGoToPageAction,v=n.isExternalToOrg,h=void 0!==v&&v,g=n.showPreviewIcon,p=n.onAssetModalHandler,m=(0,s.D)(),b=m.isBrandSstk,y=m.isBrandEnterprise,x=(0,c.useRouter)().asPath,C=d(e),w=C.showDownloadForFreeButton,L=C.isEditRestrictedByCampaign,k=C.isShareRestrictedByCampaign,I=C.isTryRestrictedByCampaign,Z=C.isCollectionSaveRestrictedByCampaign,S=(0,a.EK)(e),_=(0,a.zz)(e),j=(0,a.w5)(e),B=(0,a.PD)(e),E=(0,a.ML)(e),D=(0,a.vh)(e.type),T=(0,a.yw)({asset:e}),R=(0,a.aT)(e),A=(0,a.EK)(e),N=(0,a.fn)(e),P=(null==x?void 0:x.includes(i.H5))&&(null==x?void 0:x.includes("clip-".concat(e.id))),M=(0,a.Am)(e),z=(0,a.f8)(e),V=M&&S,O=(0,l.p)(o.cR,!1),H=(0,u.d)(),F=(0,l.p)(o.Jo),G=(0,l.p)(o.iH),W=R&&!A&&!T,Y=!(r||_||D||E||Z);return{showEditButtonOnAQV:(R||N||M&&H&&G)&&!S&&(b||O&&y)&&!B&&!(N&&h)&&!j&&!(z&&r),showSimilarButtonOnAQV:!A&&!(b&&B)&&!r&&!D&&!T,showOpenInSameButton:void 0!==f&&f&&!r,showEditDesignButton:E&&!S&&!h,showEditTemplateButton:D&&!S,showShareButton:!(V||_||N||E||k||T),showEditButton:(R||D||(N||E)&&!h||M&&H&&F)&&!(S||b&&B||L||z),showTryButton:b&&!(V||_||D||E||I||T||z),showSaveButton:Y,showSimilarButton:!(A||b&&B||_||P||z||T),showDownloadForFreeButton:w,showCreateButton:!B&&(R&&!D||!A),showGenerateMoreButton:T,showPreviewButton:void 0!==g&&g&&p&&W&&!j&&!z,showSaveButtonOverlay:Y&&(!(W||B)||z)}}},48726:function(n,e,t){t.d(e,{E:function(){return a}});var o=t(38419),i=t(5632),a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(0,i.useRouter)();return(0,o.DW)({language:e.locale,relativePath:n})}},10728:function(n,e,t){t.d(e,{d:function(){return r}});var o=t(33301),i=t(9823),a=t(92405);function r(){var n=(0,a.p)(),e=(0,i.D)().isBrandEnterprise;if(!n)return!1;var t=n[o.Cl],r=n[o.lm];return e?r:t}},24865:function(n,e,t){t.d(e,{y:function(){return i}});var o=t(25237),i=t.n(o)()(function(){return t.e(5653).then(t.bind(t,5653)).then(function(n){return n.OffsetBlackLogo})},{loadableGenerated:{webpack:function(){return[5653]}},ssr:!1})},45837:function(n,e,t){t.d(e,{G:function(){return i}});var o=t(25237),i=t.n(o)()(function(){return t.e(74078).then(t.bind(t,74078)).then(function(n){return n.OffsetWhiteLogo})},{loadableGenerated:{webpack:function(){return[74078]}},ssr:!1})},67855:function(n,e,t){t.d(e,{s:function(){return r}});var o=t(70865),i=t(52322),a=(0,t(6620).Z)((0,i.jsx)("path",{d:"M27.333 4H4.666c-.8 0-1.333.667-1.333 1.333v22.533c0 .8.667 1.333 1.333 1.333h12.133v-9.867h-3.333v-3.867h3.333v-2.533c0-3.333 2-5.067 4.933-5.067 1.333 0 2.533.133 2.933.133v3.333h-2c-1.6 0-1.867.8-1.867 1.867v2.4h3.733l-.533 3.867h-3.333v9.867h6.4c.8 0 1.333-.667 1.333-1.333V5.332c.267-.667-.4-1.333-1.067-1.333z"}),"Facebook.svg"),r=function(n){return(0,i.jsx)(a,(0,o.Z)({viewBox:"0 0 32 32"},n))}},53007:function(n,e,t){t.r(e),t.d(e,{Share:function(){return r}});var o=t(70865),i=t(52322),a=(0,t(6620).Z)((0,i.jsx)("path",{d:"M14.667 8.4v16.267h2.667V8.534l4.267 4.133 1.867-1.867-7.467-7.467L8.534 10.8l2 1.867zM20 15.333V18h4v9.333H8V18h4v-2.667H5.333V30h21.333V15.333z"}),"Share.svg"),r=function(n){return(0,i.jsx)(a,(0,o.Z)({viewBox:"0 0 32 32"},n))}},11849:function(n,e,t){t.d(e,{t:function(){return r}});var o=t(70865),i=t(52322),a=(0,t(6620).Z)((0,i.jsx)("path",{d:"M11.067 27.333C20.934 27.333 26.4 19.066 26.4 12v-.667c1.067-.8 2-1.733 2.667-2.8-.933.4-2 .667-3.067.8 1.2-.667 2-1.733 2.4-2.933-1.067.667-2.133 1.067-3.467 1.333C24 6.666 22.533 6 21.066 6c-2.933 0-5.333 2.4-5.333 5.333 0 .4 0 .8.133 1.2-4.533-.133-8.533-2.267-11.2-5.6-.4.8-.667 1.733-.667 2.8 0 1.867.933 3.467 2.4 4.533-.933 0-1.733-.267-2.4-.667v.133c0 2.667 1.867 4.8 4.267 5.333-.4.133-.933.133-1.467.133-.4 0-.667 0-1.067-.133.667 2.133 2.667 3.733 5.067 3.733-1.867 1.467-4.133 2.267-6.667 2.267-.4 0-.8 0-1.333-.133 2.4 1.467 5.333 2.4 8.267 2.4z"}),"Twitter.svg"),r=function(n){return(0,i.jsx)(a,(0,o.Z)({viewBox:"0 0 32 32"},n))}}}]);
//# sourceMappingURL=67471-0ee5e257d1d9a529.js.map