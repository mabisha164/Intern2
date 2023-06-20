"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11929,51576],{27064:function(e,n,t){t.d(n,{f:function(){return x}});var o=t(70865),i=t(96670),a=t(52322),r=t(67550),s=t(85801),l=t(62197),c=t(52309),d=t(94909),u=t(92128),p=t(75),h=t(25237),m=t.n(h),f=t(59877),v=t(83858),g=m()(function(){return Promise.all([t.e(27310),t.e(81503),t.e(30562)]).then(t.bind(t,41834))},{loadableGenerated:{webpack:function(){return[41834]}},ssr:!1}),b=function(e){var n=e.children,t=e.classes,h=e.containerClassName,m=e.containerPadding,v=e.onClose,b=e.onEscapeKeyDown,x=e.open,C=e.description,w=e.title,y=e.titleVariant,Z=e.width,L=e.height,k=e.maxWidth,j=e.fullScreen,B=e.scroll,I=e.disableStylingBox,P=e.fullWidth,S=(0,d.d)({breakpoint:"sm"}),N=(0,f.$G)(p.w8U).t,A=(0,c.B)(x),T=(0,a.jsxs)(a.Fragment,{children:[v&&(0,a.jsx)(r.Z,{position:"absolute",top:"0",right:"0",display:"flex",justifyContent:"flex-end",p:4,children:(0,a.jsx)(s.Z,{"aria-label":N("common:actions_close"),onClick:v,size:"large",children:(0,a.jsx)(u.x,{})})}),w&&(0,a.jsx)(l.Z,{variant:y,"data-automation":"DialogTitle",children:(0,a.jsx)(r.Z,{fontWeight:"fontWeightBold",children:w})}),n]});return(0,a.jsx)(a.Fragment,{children:A&&(0,a.jsx)(g,{classes:t,fullWidth:P,fullScreen:S||j,open:x,onClose:function(e,n){"escapeKeyDown"===n&&void 0!==b?b(e):void 0!==v&&v(e)},maxWidth:k,scroll:B,"aria-labelledby":w,"aria-describedby":C,children:I?T:(0,a.jsx)(r.Z,(0,i.Z)((0,o.Z)({className:h||"",p:m},!S&&{width:k?null:Z,minHeight:L}),{children:T}))})})};b.defaultProps={classes:{},containerClassName:void 0,containerPadding:7,height:0,onClose:void 0,onEscapeKeyDown:void 0,title:"",titleVariant:"h3",description:"",width:444,maxWidth:null,scroll:"paper",disableStylingBox:!1,fullWidth:!1};var x=(0,v.a)(b)},49744:function(e,n,t){t.d(n,{v:function(){return u}});var o=t(70865),i=t(96670),a=t(52322),r=t(9390),s=t(47999),l=t(21805),c=t(5632),d=(0,t(8740).ZL)()(function(e,n){var t=e.palette,i=e.tokens,a=i.spacing,r=i.fontSize,s=n.isTranslucentCard;return{ctaButton:(0,o.Z)({margin:"".concat(a.base," 0"),width:"100%",fontSize:r.m,paddingLeft:a.s,paddingRight:a.s,height:a.xl},s&&{color:t.common.white,borderColor:t.common.white,"&:hover":{borderColor:t.common.white}}),ctaButtonLabel:{whiteSpace:"pre-line"}}}),u=function(e){var n=e.analyticsLabel,t=e.ctaLabel,u=e.isBestValue,p=e.onCtaClick,h=e.ctaHref,m=d({isTranslucentCard:e.isTranslucentCard}).classes,f=(0,c.useRouter)().asPath;return(0,a.jsx)(s.z,(0,i.Z)((0,o.Z)({className:m.ctaButton,color:u?"secondary":"primary","data-automation":"PricingCard_ActionButton",onClick:function(){var e,n;l.Z.set("referer_page",f),null===(e=window.NREUM)||void 0===e||null===(n=e.addPageAction)||void 0===n||n.call(e,"P3 user clicked PricingCardCta",{ctaLabel:t,asPath:f,ctaHref:h}),h||p()},labelTrack:n,variant:u?"contained":"outlined"},h?{component:r.r,href:h}:{}),{children:(0,a.jsx)("span",{className:m.ctaButtonLabel,children:t})}))};u.defaultProps={analyticsLabel:void 0,isBestValue:!1,onCtaClick:function(){return null},ctaHref:void 0,isTranslucentCard:!1}},18665:function(e,n,t){t.d(n,{X:function(){return I}});var o=t(70865),i=t(96670),a=t(87394),r=t(52322),s=t(67550),l=t(62197),c=t(48289),d=t(72841),u=t(27064),p=t(36221),h=t(31905),m=t(59979),f=t(58898),v=t(99769),g=t(53007),b=t(65359),x=t(51576),C=t(75),w=t(5632),y=t(59877),Z=t(2784),L=t(8740),k=t(40233),j=(0,L.ZL)()(function(e){var n=e.tokens,t=n.font,o=n.spacing,i=n.zIndex,a=n.color;return{loaderContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:800,position:"absolute",top:0,left:0,zIndex:i["5"],backgroundColor:a.white},flexRoot:{display:"flex",alignItems:"stretch",height:"100%",width:h.Jv},flexChild:{flex:1,maxWidth:"50%",width:h.Jv/2,padding:o.s},divider:{height:"auto"},sectionHeading:{fontSize:t.size["3xl"],color:a.gray["onyx-87"],marginBottom:o.m,fontWeight:t.weight.bold,zIndex:i["2"],position:"relative",lineHeight:o.l},sectionSubHeading:{display:"flex",width:"100%",color:a.gray["onyx-60"],marginBottom:o.m,alignItems:"center"},iconContainer:{marginRight:o.m,display:"flex"}}}),B=[{icon:(0,r.jsx)(v.r,{}),text:"save_sort_collection"},{icon:(0,r.jsx)(g.Share,{}),text:"share_collections"},{icon:(0,r.jsx)(b.I,{}),text:"try_before_purchase"},{icon:(0,r.jsx)(x.Visibility,{}),text:"keep_track_history"}],I=function(e){var n,t,h,v,g=e.modalIsOpen,b=e.handleClose,x=(0,a.Z)((0,Z.useState)(!1),2),L=x[0],I=x[1],P=(0,k.d)(),S=(0,w.useRouter)(),N=S.locale,A=S.asPath,T=(0,y.$G)(C.kJP).t,M=j().classes,D=(0,m.cM)({landing_page:p._I,embedded:!0,preset:"cvrt837",hl:N});return(0,f.Q)()&&g&&(v=new URL(A,null==window?void 0:null===(n=window.location)||void 0===n?void 0:n.origin),P({actionName:"convert - signup from modal successful"}),null===(t=window.NREUM)||void 0===t||null===(h=t.addPageAction)||void 0===h||h.call(t,"UP3-1623 assign useTryButton url to href",(0,i.Z)((0,o.Z)({},window.location||{}),{locale:N,relativeURL:A})),window.location.href=v.toString(),b()),(0,r.jsxs)(u.f,{open:g,onClose:b,maxWidth:"lg",width:"lg",themeModeOverride:void 0,children:[(0,r.jsxs)("div",{className:M.flexRoot,children:[(0,r.jsxs)(s.Z,{className:M.flexChild,children:[(0,r.jsx)(l.Z,{className:M.sectionHeading,component:"h1",align:"left",children:T("access_exclusive_features")}),B.map(function(e){var n=e.icon,t=e.text;return(0,r.jsxs)(l.Z,{className:M.sectionSubHeading,component:"p",variant:"body1",align:"left",children:[(0,r.jsx)("span",{className:M.iconContainer,children:n}),T(t)]},t)})]}),(0,r.jsx)(c.Z,{className:M.divider,orientation:"vertical"}),(0,r.jsxs)(s.Z,{className:M.flexChild,children:[(0,r.jsx)(l.Z,{className:M.sectionHeading,component:"h1",align:"left",pl:4,children:T("site-header:sign_up")}),(0,r.jsx)("iframe",{onLoad:function(e){e.preventDefault(),I(!0)},style:{height:600,border:"none",width:"100%",overflow:"none"},title:"SignIn",src:D,loading:"eager"})]})]}),!L&&(0,r.jsx)(s.Z,{className:M.loaderContainer,children:(0,r.jsx)(d.Z,{color:"inherit",size:60,disableShrink:!0})})]})}},65372:function(e,n,t){t.d(n,{m:function(){return i}});var o=t(52322),i=function(){return(0,o.jsx)(o.Fragment,{})}},60628:function(e,n,t){t.d(n,{i:function(){return R}});var o=t(70865),i=t(96670),a=t(50930),r=t(52322),s=t(72841),l=t(93430),c=t(89045),d=t(52930),u=t(79866),p=t(11265),h=t(18665),m=t(65372),f=t(94656),v=t(85846),g=t(53239),b=t(29292),x=t(7197),C=t(44297),w=t(449),y=t(73110),Z=t(17604),L=t(59979),k=t(52309),j=t(43110),B=t(65094),I=t(8655),P=t(34116),S=t(65359),N=t(75855),A=t(57613),T=t(31037),M=t(5632),D=t(2784),_=t(32545),z=t(98202),R=function(e){var n=e.addToCollectionViewsHandler,t=e.asset,R=e.canOpenDrawerOnLoad,F=e.clickAnalyticsLabels,E=e.labels,O=e.redirectToCollectionDetailsPage,V=e.isTemplateAsset,H=(0,M.useRouter)().asPath,W=(0,Z.t)({asset:t,isTemplateAsset:V,labels:E}),U=W.editorButtonHref,G=W.editorButtonLabel,K=W.isCreate,J=W.onClick,Y=(0,L.cM)(),X=(0,j.B)(),Q=F.addToCollections,$=F.editButton,q=F.tryButton,ee=F.generateMoreButton,en=(0,w.i)({asset:t,clickAnalyticsLabels:F}),et=en.tryButtonClickHandler,eo=en.isActionInProgress,ei=en.isMusicPreviewModalOpen,ea=en.setIsMusicPreviewModalOpen,er=en.isSignUpModalOpen,es=en.setIsSignUpModalOpen,el=(0,y.D)(t).downloadUrl,ec=(0,k.B)(ei),ed=(0,B.E)({asset:t}),eu=ed.showSaveButton,ep=ed.showShareButton,eh=ed.showEditButton,em=ed.showTryButton,ef=ed.showDownloadForFreeButton,ev=ed.showGenerateMoreButton,eg=(0,I.g)({asset:t}),eb=(0,C.aT)(t)&&!(0,C.N3)(t),ex=(0,C.Am)(t)&&!(0,C.so)(t),eC=(0,C.PD)({channels:null==t?void 0:t.channels}),ew=(0,D.useMemo)(function(){return(0,a.Z)(eu?[(0,o.Z)({label:E.save,onClick:function(){X?n({assets:[t],gridItems:[],redirectToCollectionDetailsPage:O}):(0,x.JO)({assets:t,signUpPath:Y})},rel:"nofollow",Icon:(0,r.jsx)(P.Heart,{}),clickAnalyticsLabel:null==Q?void 0:Q.eventLabel},eC&&{brandCategory:(0,b.f_)(t),productLine:(0,b.Rz)(t)})]:[]).concat((0,a.Z)(em?[(0,o.Z)({label:E.try,onClick:function(){et()},rel:"nofollow",Icon:eo?(0,r.jsx)(s.Z,{size:20}):(0,r.jsx)(S.I,{}),clickAnalyticsLabel:null==q?void 0:q.eventLabel,"data-optimize":"download-watermark-cta"},eC&&{brandCategory:(0,b.f_)(t),productLine:(0,b.Rz)(t)})]:[]),(0,a.Z)(eh?[(0,i.Z)((0,o.Z)({label:G},K?{onClick:J}:{href:U}),{Icon:(0,r.jsx)(N.M,{}),clickAnalyticsLabel:null==$?void 0:$.eventLabel,rel:"nofollow",target:"_blank"})]:[]),(0,a.Z)(ev?[{label:E.generateMoreButton,href:(0,T.NJ)()[0],rel:"nofollow",Icon:(0,r.jsx)(A.C,{}),clickAnalyticsLabel:null==ee?void 0:ee.eventLabel}]:[]))},[eu,E.save,E.try,E.generateMoreButton,null==Q?void 0:Q.eventLabel,em,eo,eC,null==q?void 0:q.eventLabel,eh,G,K,J,U,null==$?void 0:$.eventLabel,ev,null==ee?void 0:ee.eventLabel,X,t,Y,n,O,et]),ey=(0,f.l)(v.T).variationId,eZ=(0,g.c)({asset:t}).showExperimentP31161,eL=(0,_.iP)(null==t?void 0:t.holding),ek=(0,z.A)({asset:t,clickAnalyticsLabels:F,labels:E,assetIsLicensed:eL,shouldFetchEligibility:!eL}).hasExistingLicense,ej=eC||eZ&&"variantA"===ey&&!ek;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.X,{modalIsOpen:er,handleClose:function(){es(!1)}}),ef?(0,r.jsx)(d.l,{showDescription:!0,assetDownloadUrl:el,canOpenDrawerOnLoad:R,clickAnalyticsLabels:F}):(0,r.jsx)(u.e,{actionButtons:ew,asset:t,clickAnalyticsLabels:F,ctaComponentProps:{asset:t,canOpenDrawerOnLoad:R,clickAnalyticsLabels:F,hideCtaComponent:ej},isCentered:!0,showShareButton:ep,hideCtaComponent:ej,isTemplateAsset:V,CtaComponent:eg?m.m:c.i}),(eb||ex)&&!V&&(0,r.jsx)(l.r,{actionButtons:ew,asset:t,clickAnalyticsLabels:F,disableChannelBanner:ef,CtaComponent:ef?d.l:c.i,ctaComponentProps:{asset:t,assetDownloadUrl:el,showDescription:!1,campaignAssetDownloadURL:el,clickAnalyticsLabels:F},showShareButton:ep},H),ec&&(0,r.jsx)(p.D,{setIsDialogActive:ea,isOpen:ei,track:t})]})};R.defaultProps={addToCollectionViewsHandler:null,asset:{},clickAnalyticsLabels:{},isTemplateAsset:!1}},93430:function(e,n,t){t.d(n,{r:function(){return ef}});var o=t(47842),i=t(52322),a=t(83415),r=t(41075),s=t(62197),l=t(65532),c=t(26051),d=t(44297),u=t(87394),p=t(2784),h=t(19819),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.threshold,t=void 0===n?1/0:n,o=e.skip,i=void 0!==o&&o,a=e.initialStateValue,r=(0,u.Z)((0,p.useState)(void 0!==a&&a),2),s=r[0],l=r[1];return(0,p.useEffect)(function(){if(!i){var e=(0,h.Zc)(function(){window.pageYOffset>=t?l(!0):l(!1)});return window.addEventListener("scroll",e,{passive:!0}),function(){return e&&window.removeEventListener("scroll",e)}}},[t,i]),s},f=t(43822),v=t(70865),g=t(58487),b=t(66180),x=t(94909),C=t(8740),w=t(96670),y=t(26297),Z=t(67550),L=t(72841),k=t(46730),j=t(47999),B=t(59481),I=t(66358),P=t(9823),S=t(776),N=(0,C.ZL)()(function(e){var n,t=e.breakpoints,i=e.palette,a=e.tokens,r=a.spacing,s=a.fontSize;return{root:(n={color:i.info.main,display:"flex",marginTop:r.s},(0,o.Z)(n,t.up("sm"),{marginTop:r.base}),(0,o.Z)(n,"& > *:not(:first-of-type)",(0,o.Z)({marginLeft:r.s},t.up("md"),{marginLeft:r.base})),n),buttonWrapper:{display:"flex"},buttonProgress:{position:"absolute"},actionLabel:(0,o.Z)({},t.down("md"),{display:"none"}),iconSizeMedium:{"& > *:first-of-type":(0,o.Z)({},t.down("md"),{fontSize:s.icon})},startIcon:(0,o.Z)({},t.down("md"),{margin:0})}}),A=function(e){var n=e.hasIcon,t=e.withActionLabel;return n&&t?"contained":t?"text":void 0},T=function(e){var n=e.Icon,t=e.withActionLabel,o=!!n;return{color:o?"primary":"inherit",variant:A({hasIcon:o,withActionLabel:t}),startIcon:t?n:void 0,size:t?"medium":"small"}},M=function(e){var n=e.classesProps,t=e.buttons,a=e.withActionLabel,r=e.color,s=N(),l=s.classes,c=s.cx,d=(0,k.G)({color:r}).classes,u=a?j.z:B.h,p=(0,P.D)().isBrandSstk;return(0,i.jsx)(S.Mp,{value:I.Bh8,children:(0,i.jsx)(Z.Z,{className:c(l.root,n.rootContainer),children:t.map(function(e){var t,r=e.label,s=e.href,h=e.onClick,m=e.isLoading,f=e.disabled,g=e.show,b=e.Icon,x=e.clickAnalyticsLabel,C=(0,y.Z)(e,["label","href","onClick","isLoading","disabled","show","Icon","clickAnalyticsLabel"]);return(void 0===g||g)&&(0,i.jsx)(Z.Z,{className:l.buttonWrapper,children:(0,i.jsx)(u,(0,w.Z)((0,v.Z)({classes:{root:n.buttonRoot,iconSizeMedium:l.iconSizeMedium,startIcon:d.startIcon},className:c((t={},(0,o.Z)(t,d.buttonAnchor,!b),(0,o.Z)(t,d.buttonVariantFilter,!!b),t)),onClick:h,href:s,disabled:m||f,"aria-label":r,labelTrack:p?x:r},T({Icon:b,withActionLabel:a}),C),{children:a?(0,i.jsxs)(i.Fragment,{children:[m&&(0,i.jsx)(L.Z,{color:"inherit",size:18,className:l.buttonProgress}),(0,i.jsx)("span",{className:l.actionLabel,children:r})]}):b}))},r)})})})};M.defaultProps={classesProps:{},withActionLabel:!0};var D=t(83249),_=t(85801),z=(0,C.ZL)()(function(e){var n=e.breakpoints,t=e.tokens,i=t.spacing,a=t.fontSize;return{actionRoot:(0,o.Z)({padding:i.s},n.up("md"),{padding:i.base,marginLeft:i.base}),actionLabel:(0,o.Z)({},n.down("md"),{display:"none"}),iconSizeMedium:{"& > *:first-of-type":(0,o.Z)({},n.down("md"),{fontSize:a.icon})},startIcon:(0,o.Z)({},n.down("md"),{margin:0})}}),R=function(e){var n=e.buttonProps,t=e.IconComponent,o=e.labels,a=e.color,r=(0,k.G)({color:a}).classes,s=z(),l=s.classes,c=s.cx;return(0,i.jsx)(D.Z,(0,w.Z)((0,v.Z)({},n),{classes:{root:r.actionVariantRoot,iconSizeMedium:l.iconSizeMedium,startIcon:r.startIcon},className:c(r.buttonVariantFilter,n.className),color:"primary",variant:"contained",startIcon:(0,i.jsx)(t,{}),children:(0,i.jsx)("span",{className:l.actionLabel,children:o.share})}))},F=function(e){var n=e.buttonProps,t=e.IconComponent,o=e.isVariant,a=(0,k.G)({isVariant:o}).classes,r=z(),s=r.classes,l=r.cx;return(0,i.jsx)(_.Z,(0,w.Z)((0,v.Z)({},n),{classes:{root:l(s.actionRoot,n.className)},className:a.buttonVariantFilter,color:"primary",size:"small",children:(0,i.jsx)(t,{})}))},E=t(98788),O=t(5163),V=t(44417),H=t(44699),W=t(73572),U=t(37546),G=t(48433),K=t(54112),J=t(78809),Y=t(67855),X=t(11849),Q=t(65257),$=t(53007),q=t(96109),ee=t(75),en=t(34273),et=t.n(en),eo=t(70314),ei=t.n(eo),ea=t(25237),er=t.n(ea),es=ei()().publicRuntimeConfig.shutterstockBaseUrl,el=er()(function(){return t.e(51935).then(t.bind(t,51935)).then(function(e){return e.DynamicMenuDropdownContent})},{loadableGenerated:{webpack:function(){return[51935]}},ssr:!1}),ec="action-menu",ed=function(e){var n=e.asset,t=e.labels,o=e.onCloseHandler,i=e.productSharedAnalyticsEvent,a=e.shareLink,r=e.shouldTrackAnalytics,s=e.twitterCopy,l=e.setCopyLinkStatus,c=e.pageSection;return[{label:W.vq,Icon:Y.s,href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(a)),isLink:!0,hasDivider:!1,onClick:function(){r&&i({asset:n,shareVia:W.vq,pageSection:c}),o()}},{label:W.Ib,Icon:X.t,href:"https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(a),"&text=").concat(void 0===s?"":s),isLink:!0,hasDivider:!1,onClick:function(){r&&i({asset:n,shareVia:W.Ib,pageSection:c}),o()}},{label:t.copy,Icon:Q.Copy,isLink:!1,onClick:(0,E.Z)(function(){var e;return(0,O.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),[4,et()(a)];case 1:return t.sent(),r&&i({asset:n,shareVia:"copyLink",pageSection:c}),l({status:H.MR,error:void 0}),[3,4];case 2:return e=t.sent(),l({status:H.pn,error:e}),[3,4];case 3:return o(),[7];case 4:return[2]}})}),hasDivider:!0}]},eu={share:"common:actions_share",email:"account:profile_email",copy:"common:actions_copy",copyToClipBoardSuccess:"developers:apps_copied_to_clipboard",copyToClipBoardWarning:"notifications:label_generic_failure"},ep=function(e){var n=e.asset,t=e.ButtonComponent,o=e.classes,a=e.IconComponent,r=e.hasTooltip,s=e.iconContainerClassName,l=e.shouldTrackAnalytics,c=e.clickAnalyticsLabel,d=e.size,h=e.color,m=(0,S.yh)().analytics,f=c.pageSection,g=c.eventLabel,b=(0,K.D)({namespace:ee.VQ6,translationKeys:eu}).labels,x=n.type,C=n.description,y=(0,J.M)(),Z=(0,U.Lr)(n),L=(0,u.Z)((0,q.r)((0,w.Z)((0,v.Z)({},Z),{assetType:x,slug:y({description:C})})),1)[0],k=(0,u.Z)((0,p.useState)(null),2),j=k[0],B=k[1],P=(0,u.Z)((0,p.useState)(!1),2),N=P[0],A=P[1],T=(0,u.Z)((0,p.useState)({status:"",error:void 0}),2),M=T[0],D=T[1],_=(0,G.W)(),z=function(){N||A(!0)},R=function(e){z(),B(e)},F=function(){return R(null)},E=ed({asset:n,labels:b,onCloseHandler:F,productSharedAnalyticsEvent:_,setCopyLinkStatus:D,shareLink:"".concat(es).concat(L),shouldTrackAnalytics:l,twitterCopy:C,pageSection:I.df}),O=(0,w.Z)((0,v.Z)({size:d,"aria-label":b.share},N&&j&&{"aria-controls":ec}),{"aria-haspopup":"true",className:o.button,onClick:function(e){l&&m.click({pageSection:f||I.hTM,eventLabel:g||I.$cX}),R(e.currentTarget)},onMouseEnter:z});return(0,i.jsxs)("div",{className:s,children:[(0,i.jsx)(t,{IconComponent:a,buttonProps:O,labels:b,color:h,hasTooltip:r}),N&&(0,i.jsx)(el,{id:ec,anchorEl:j,menuOptions:E,onCloseHandler:F}),(0,i.jsx)(V.Y,{alertSeverity:M.status,error:M.error,handleSnackbarClose:function(){return D({status:""})},isOpen:!!M.status,message:M.status===H.MR?b.copyToClipBoardSuccess:b.copyToClipBoardWarning})]})};ep.defaultProps={classes:{},clickAnalyticsLabel:{},hasTooltip:!1,shouldTrackAnalytics:!1,IconComponent:$.Share,size:"small"};var eh=(0,C.ZL)()(function(e,n){var t,i,a=e.breakpoints,r=e.tokens,s=r.size,l=r.spacing,c=n.flexBreakpoint,d=n.isCentered;return{root:(0,v.Z)({display:"flex",flexDirection:"column",justifyContent:"center",marginTop:l.base,minHeight:s.density.high},"md"===c?(0,o.Z)({},a.up("md"),{marginTop:0,flexDirection:"row"}):(t={},(0,o.Z)(t,a.up("md"),{marginTop:0,marginBottom:l.base}),(0,o.Z)(t,a.up(c),{flexDirection:"row"}),t)),container:(0,v.Z)({width:"100%"},d&&(0,o.Z)({},a.up("md"),{width:"auto"})),ctas:(0,v.Z)({color:"#FFFFFF",alignItems:"center"},"md"===c?(0,o.Z)({},a.up("md"),{marginLeft:l.base,display:"flex",justifyContent:"flex-end"}):(i={},(0,o.Z)(i,a.up(c),{marginLeft:l.s,display:"flex",justifyContent:"flex-end"}),(0,o.Z)(i,a.up("md"),{marginLeft:l.base}),i)),channelBanner:{marginRight:l.s},actionButtonRoot:(0,o.Z)({padding:l.s,marginBottom:0},a.up("md"),{padding:l.base}),actionIcons:{display:"flex",width:"auto"},actionRootContainer:{marginTop:0,alignItems:"center",display:"flex"},shareButtonContainer:(0,o.Z)({display:"flex",alignItems:"center"},a.down("md"),{marginLeft:l.s}),banner:(0,o.Z)({width:"100%",display:"flex",justifyContent:"space-between",marginBottom:l.s},a.up("sm"),{marginBottom:0})}}),em=function(e){var n=e.asset,t=e.flexBreakpoint,o=e.clickAnalyticsLabels,a=e.CtaComponent,r=e.actionButtons,s=e.showShareButton,l=e.ctaComponentProps,c=e.isCentered,d=e.color,u=e.disableChannelBanner,p=eh({flexBreakpoint:t,isCentered:c}),h=p.classes,m=p.cx,f=!(0,x.d)({breakpoint:"sm"}),C=(null==r?void 0:r.length)||s;return(0,i.jsxs)("div",{className:m(h.root,h.container),children:[(!u||C)&&(0,i.jsxs)("div",{className:h.banner,children:[!u&&(0,i.jsx)(g.h,{classes:{root:h.channelBanner},asset:n,withLabel:!1}),C&&(0,i.jsxs)("div",{className:h.actionIcons,children:[r&&(0,i.jsx)(M,{classesProps:{rootContainer:h.actionRootContainer},buttons:r,withActionLabel:f,color:d}),s&&(0,i.jsx)(ep,{asset:n,IconComponent:b.sY,ButtonComponent:f?R:F,clickAnalyticsLabel:o.shareButton,iconContainerClassName:h.shareButtonContainer,shouldTrackAnalytics:!0,size:"medium",color:d})]})]}),a&&(0,i.jsx)("div",{className:h.ctas,children:(0,i.jsx)(a,(0,v.Z)({asset:n},l))})]})};em.defaultProps={flexBreakpoint:"sm",actionButtons:null,CtaComponent:null,ctaComponentProps:{},isCentered:!1,clickAnalyticsLabels:""};var ef=function(e){var n,t,u=e.actionButtons,p=e.asset,h=e.clickAnalyticsLabels,v=e.CtaComponent,g=e.ctaComponentProps,b=e.showShareButton,x=e.disableChannelBanner,C=(0,l.PE)().locale,w="#ffffff",y=p.aspect<1?"portrait":"landscape",Z=(0,d.Am)(p),L=(0,c.G)({asset:p,language:C}),j=m({threshold:220,skip:(null==document?void 0:null===(n=document.documentElement)||void 0===n?void 0:n.clientWidth)<=f.w.breakpoints.values.sm}),B=(0,k.G)({bgColor:"#232835",textColor:w}),I=B.classes,P=B.cx,S={portrait:I.assetDescriptionPortrait,landscape:I.assetDescriptionLandscape},N={portrait:I.iconPortrait,landscape:I.iconLandscape};return(0,i.jsx)(i.Fragment,{children:j&&(0,i.jsx)(a.Z,{direction:"down",in:j,children:(0,i.jsx)("div",{id:"top-nav-banner",className:P(I.topNav,(0,o.Z)({},I.topNavFixed,j)),children:(0,i.jsxs)(r.ZP,{className:I.root,children:[(0,i.jsxs)(r.ZP,{className:P(I.assetDescription,S[y]),children:[(0,i.jsx)("img",{className:P(I.icon,N[y]),src:Z?p.previewImageUrl:p.src,alt:null!==(t=p.alt)&&void 0!==t?t:L}),(0,i.jsx)(s.Z,{className:I.title,children:Z?L:p.title}),(0,i.jsx)(s.Z,{className:I.type,children:p.type})]}),(0,i.jsx)(r.ZP,{className:I.actionButtons,children:(0,i.jsx)(em,{actionButtons:u,asset:p,clickAnalyticsLabels:h,CtaComponent:v,ctaComponentProps:g,isCentered:!0,showShareButton:b,color:w,disableChannelBanner:void 0!==x&&x})})]})})})})}},46730:function(e,n,t){t.d(n,{G:function(){return r},I:function(){return a}});var o=t(47842),i=t(8740),a=87,r=(0,i.ZL)()(function(e,n){var t,i=e.palette,r=e.typography,s=e.breakpoints,l=e.tokens.spacing,c=n.bgColor,d=n.textColor;return{topNav:(0,o.Z)({display:"flex",width:"100%",zIndex:2,height:"".concat(a,"px"),boxShadow:"0px 16px 48px rgba(0, 0, 0, 12%)"},s.down("sm"),{display:"none"}),topNavFixed:{zIndex:10,position:"fixed",top:0,left:0,backgroundColor:c},root:(0,o.Z)({display:"flex",justifyContent:"space-between",width:"100%",margin:"0 auto",maxWidth:s.values.lg,padding:"0 ".concat(l.m)},s.up("md"),{padding:"0 ".concat(l.m," 0 ").concat(l["3xl"])}),assetDescriptionPortrait:{paddingLeft:"60px"},assetDescriptionLandscape:{paddingLeft:"90px"},assetDescription:{margin:"20px 0",paddingTop:"5px",position:"relative",overflow:"hidden"},actionButtons:(0,o.Z)({marginTop:"10px"},s.down("md"),{marginTop:0}),icon:{position:"absolute",top:0,left:0,zIndex:1},iconPortrait:{width:"40px"},iconLandscape:{width:"75px"},title:{whiteSpace:"nowrap",fontSize:"12px",fontWeight:700,color:d},type:{fontSize:"12px",color:d},buttonVariantFilter:{color:d,display:"block",width:"100%",height:"100%",backgroundColor:"inherit",border:0,minWidth:0,lineHeight:1.3,fontWeight:"normal",textAlign:"center",padding:"8px","&:hover":{border:0,backgroundColor:"inherit"}},buttonAnchor:(t={height:"auto",padding:0,minWidth:0,display:"inline-flex",fontWeight:r.fontWeightRegular,color:i.info.main},(0,o.Z)(t,s.up("sm"),{"&:hover":{backgroundColor:"inherit",color:i.text.primary},"&:focus":{backgroundColor:"inherit",color:i.text.primary}}),(0,o.Z)(t,"& .MuiTouchRipple-root",{display:"none"}),t),actionVariantRoot:(0,o.Z)({padding:l.s},s.up("md"),{padding:l.base,marginLeft:l.base}),startIcon:{margin:0}}})},52930:function(e,n,t){t.d(n,{l:function(){return L}});var o=t(98788),i=t(47842),a=t(87394),r=t(5163),s=t(52322),l=t(72841),c=t(9390),d=t(47999),u=t(91609),p=t(54112),h=t(73377),m=t(75),f=t(17411),v=t(25237),g=t.n(v),b=t(59877),x=t(2784),C=t(8740),w=c.r,y=(0,C.ZL)()(function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.breakpoints,a=t.palette,r=t.tokens,s=r.color,l=r.size,c=r.spacing,d=a.mode===u.oc.DARK,p=d?s["white-96"]:s.gray["onyx-87"],h=d?a.common.black:a.common.white;return{root:(e={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",marginTop:c.base,minHeight:l.density.high},(0,i.Z)(e,o.down("md"),{alignItems:"normal",flexWrap:"wrap"}),(0,i.Z)(e,o.up("md"),{marginTop:0,marginBottom:c.base,alignItems:"flex-start"}),(0,i.Z)(e,o.up("sm"),{flexDirection:"row"}),e),container:{width:"100%"},buttonProgress:{position:"absolute"},ctas:(n={alignItems:"center"},(0,i.Z)(n,o.up("sm"),{marginLeft:c.s,display:"flex",justifyContent:"flex-end"}),(0,i.Z)(n,o.up("md"),{marginLeft:c.base}),n),tooltip:{"&&":{color:h,backgroundColor:p}},tooltipContent:{display:"inline",cursor:"default"},banner:{width:"80%",display:"flex",justifyContent:"space-around",marginBottom:c.s},textLink:{color:a.info.main,"&:hover":{color:a.text.primary}}}}),Z=g()(function(){return t.e(97415).then(t.bind(t,97415))},{loadableGenerated:{webpack:function(){return[97415]}},ssr:!1}),L=function(e){var n,t=e.assetDownloadUrl,i=e.showDescription,c=e.color,u=e.variant,v=e.clickAnalyticsLabels,g=y(),C=g.classes,L=g.cx,k=(0,a.Z)((0,x.useState)(!1),2),j=k[0],B=k[1],I=(n=(0,o.Z)(function(){return(0,r.__generator)(this,function(e){switch(e.label){case 0:if(!t||j)return[2];return B(!0),[4,(0,f.S)(t)];case 1:return e.sent(),B(!1),[2]}})}),function(){return n.apply(this,arguments)}),P=v.dreamDownloadForFreeButton,S=v.dreamLearnMoreButton,N=(0,p.D)({namespace:m.Otp,translationKeys:{downloadForFree:"image:logout_adp_free_trial_download",standardLicenseDescription:"comparison_table_licenses_section:feature1:description",learnMore:"pricing_card_learn_more"}}),A=N.t,T=N.labels;return(0,s.jsxs)("div",{className:L(C.root,C.container),children:[i&&(0,s.jsx)("div",{className:C.banner,children:(0,s.jsxs)("span",{children:[(0,s.jsx)(b.cC,{ns:m.Otp,i18nKey:"dream_campaign:free_download_description",components:{b:(0,s.jsx)("b",{}),i:(0,s.jsx)("i",{})},t:A}),"\xa0",(0,s.jsx)(Z,{disableInteractive:!0,title:(0,s.jsx)("span",{className:C.tooltipContent,children:T.standardLicenseDescription}),children:(0,s.jsxs)(w,{href:"/explore/dream",underline:!0,className:C.textLink,clickAnalyticsLabel:(0,h.U_)(S),children:[T.learnMore,"."]})})]})}),(0,s.jsx)("div",{className:C.ctas,children:(0,s.jsxs)(d.z,{color:c,variant:u,disabled:j,fullWidth:!0,onClick:I,clickTrack:(0,h.U_)(P),"aria-label":T.downloadForFree,children:[j&&(0,s.jsx)(l.Z,{size:24,color:"inherit",className:C.buttonProgress}),T.downloadForFree]})})]})};L.defaultProps={assetDownloadUrl:null,showDescription:!1,color:"secondary",variant:"contained"}},56068:function(e,n,t){t.d(n,{U:function(){return m}});var o=t(52322),i=t(36616),a=t(95291),r=t(45728),s=t(72075),l=t(25237),c=t.n(l),d=t(5632),u=t(2784),p=t(80589),h=c()(function(){return t.e(72148).then(t.bind(t,3551)).then(function(e){return e.PersistentCart})},{loadableGenerated:{webpack:function(){return[3551]}}}),m=u.memo(function(e){var n,t,l,c=e.className,m=e.topOffset,f=e.topOffsetElRef,v=(0,d.useRouter)(),g=null==v?void 0:v.asPath;s.j&&(l=null==window?void 0:null===(n=window.location)||void 0===n?void 0:n.href);var b=u.useCallback(function(e){var n,t,o;n=l,console.error(e),null===(t=window.NREUM)||void 0===t||null===(o=t.noticeError)||void 0===o||o.call(t,e,{currentAsPath:g,msg:"(Convert Team) Persistent Cart error",url:n})},[g,l]),x=(0,a.r)().isPersistentCartOpen,C=(0,i.R)().getAudioPlayerHeight,w=(0,r.GH)({fetchFullCart:!0}).data,y=(null==w?void 0:null===(t=w.items)||void 0===t?void 0:t.length)>0;if(!x||!y)return null;var Z=C(),L=m+((null==f?void 0:f.current)?f.current.getBoundingClientRect().height:0);return(0,o.jsx)(p.ErrorBoundary,{onError:b,fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(h,{className:c,topOffset:L,bottomOffset:Z,cartData:w})})})},83858:function(e,n,t){t.d(n,{a:function(){return c}});var o=t(70865),i=t(26297),a=t(52322),r=t(96976),s=t(73469),l=function(e){var n=e.children,t=e.themeModeOverride,o=(0,s.i)({themeMode:t}).theme;return(0,a.jsx)(r.Z,{theme:o,children:n})},c=function(e){return function(n){var t=n.themeModeOverride,r=(0,i.Z)(n,["themeModeOverride"]);return(0,a.jsx)(l,{themeModeOverride:t,children:(0,a.jsx)(e,(0,o.Z)({},r))})}}},95902:function(e,n,t){t.d(n,{JJ:function(){return a},ZR:function(){return s},g7:function(){return o},iR:function(){return r},mA:function(){return i}});var o="IN",i="APAC",a="LATAM",r=["AS","AU","BD","BN","BT","BV","CC","CK","CN","CX","FJ","FM","GU","HK","HM","ID","IO","JP","KH","KI","KR","LA","LK","MH","MM","MN","MO","MP","MV","MY","NC","NF","NP","NR","NU","NZ","PF","PG","PH","PK","PN","PW","SB","SG","SY","TF","TH","TJ","TK","TO","TP","TV","TW","UM","UZ","VN","VU","WF","WS","TL","AF","AQ","KP"],s=["AG","AI","AR","AW","BB","BM","BO","BR","BS","BZ","CL","CO","CR","CU","DM","DO","EC","FK","GD","GF","GL","GP","GS","GT","GY","HN","HT","JM","KN","KY","LC","MQ","MS","MX","NI","PA","PE","PM","PR","PY","SR","SV","TC","TT","UY","VC","VE","VG","VI","BL","MF","BQ","CW","SX"]},52908:function(e,n,t){t.d(n,{j:function(){return a},x:function(){return i}});var o=t(2784),i=(0,o.createContext)({}),a=(0,o.createContext)({})},43801:function(e,n,t){t.d(n,{C:function(){return a},v:function(){return r}});var o=t(52908),i=t(2784),a=function(){return(0,i.useContext)(o.x)},r=function(){return(0,i.useContext)(o.j)}},95291:function(e,n,t){t.d(n,{r:function(){return a}});var o=t(2784),i=t(11243),a=function(){return(0,o.useContext)(i.O)}},94656:function(e,n,t){t.d(n,{l:function(){return r}});var o=t(80875),i=t(88849),a=t(27673),r=function(e){var n=(0,o.I)(e),t=n.reason,r=n.variation,s=n.error,l=n.isLoading,c=(0,a.z)({error:s,flagID:e,reason:t,variantKey:r}).recordImpression,d=t===i.M6&&!!r;return{inExperiment:d,isLoading:void 0!==l&&l,recordImpression:d?c:function(){return""},variationId:r||i.NM}}},53239:function(e,n,t){t.d(n,{c:function(){return s}});var o=t(39232),i=t(95902),a=t(65532),r=t(20865),s=function(e){var n,t,s=e.asset,l=(0,a.PE)().region,c=(0,r.av)().data,d=l===i.g7,u=(null==s?void 0:s.type)===o.jr;if(!u||d)return{showExperimentP31161:!1,isLoading:!1};var p=(null==c?void 0:c.musicSubscriptions)&&(null==c?void 0:null===(n=c.musicSubscriptions)||void 0===n?void 0:n.length)<1||(null==c?void 0:null===(t=c.musicSubscriptions)||void 0===t?void 0:t.length)===void 0;return{showExperimentP31161:c&&p&&!d&&u,isLoading:!c}}},85846:function(e,n,t){t.d(n,{T:function(){return o},s:function(){return i}});var o="p3-1161-music-adp-view-subscription-plans-v2",i="P3-1161"},73110:function(e,n,t){t.d(n,{D:function(){return i}});var o=t(84866),i=function(e){var n;return(null==e?void 0:null===(n=e.contributor)||void 0===n?void 0:n.id)&&(0,o.n_)({contributorId:e.contributor.id})?{downloadUrl:(0,o.bI)(e)}:{}}},17604:function(e,n,t){t.d(n,{t:function(){return v}});var o=t(16555),i=t(33301),a=t(43801),r=t(44297),s=t(9823),l=t(92405),c=t(48726),d=t(38204),u=t(5632),p=t(2784),h=t(23770),m=t(12847),f=t(19767),v=function(e){var n,v,g=e.asset,b=e.isTemplateAsset,x=e.labels,C=(0,s.D)().isBrandSstk,w=(0,a.v)(),y=(0,u.useRouter)(),Z=!!(0,l.p)(i.Si,!1,!1,!0)&&C,L=(0,c.E)((0,d.$3)(g.id)),k=(0,f.f)(g.id,{},(0,r.Tp)(g)),j=(0,c.E)(k),B=(0,o.aL)(),I=(0,c.E)(B({templateId:g.id})),P=x.editWithCreate,S=(0,m.rE)(x.editInCreate,h.T)?x.edit:x.editInCreate;b?(n=I,v=x.edit):(n=Z?j:L,v=Z?S:x.edit);var N=(0,p.useCallback)(function(){var e;(null==g?void 0:null===(e=g.sizes)||void 0===e?void 0:e.hugeJpg)&&!b&&(null==w?void 0:w.current)&&Object.keys(null==w?void 0:w.current).length>0?Promise.all([t.e(54280),t.e(48834),t.e(46194),t.e(22673)]).then(t.bind(t,16609)).then(function(e){(0,e.openCreateWithEdits)(w,g.sizes.hugeJpg,y.locale)}):window.open(n,"_blank")},[g,w,n,y.locale,b]);return{editorButtonHref:n,editorButtonLabel:v,isCreate:Z,onClick:N,editWithCreateLabel:P}}},8655:function(e,n,t){t.d(n,{g:function(){return c}});var o=t(70865),i=t(96670),a=t(44297),r=t(95775),s=t(94909),l=t(43110),c=function(e){var n,t,c=e.asset,d=(0,l.B)(),u=(0,s.d)(),p=(0,r.IP)({assets:[c]}).data,h=(0,a.aT)(c)&&!(0,a.N3)(c),m=(null==p?void 0:null===(n=p.subscriptions)||void 0===n?void 0:n.length)>0,f=(null==p?void 0:null===(t=p.licenses)||void 0===t?void 0:t.length)>0,v=(0,a.kX)({asset:(0,i.Z)((0,o.Z)({},c),{containedInCollections:[null==c?void 0:c.containedInCollections]})}).relatedAssets;return h&&!m&&p&&!f&&v&&v.length>0&&!u&&!!d}},99769:function(e,n,t){t.d(n,{r:function(){return c}});var o=t(70865),i=t(52322),a=t(6620),r=t(5007),s=t(2784),l=(0,a.Z)((0,i.jsx)("path",{d:"M22.667 26.667H1.334V5.334h13.333v4H20v2.667h-5.333c-.045.003-.098.005-.151.005-1.392 0-2.52-1.128-2.52-2.52 0-.053.002-.106.005-.158v.007-1.333h-8v16h18.667c1.867 0 2.667-.667 2.667-2.667v-4h2.667v4c.018.156.028.338.028.521 0 2.673-2.167 4.84-4.84 4.84-.184 0-.365-.01-.543-.03l.022.002zm5.333-12h-2.667V12h-2.667V9.333h2.667V6.666H28v2.667h2.667V12H28z"}),"SaveToCollection.svg"),c=(0,s.forwardRef)(function(e,n){return(0,i.jsx)(l,(0,o.Z)({viewBox:"0 0 32 32",ref:n},e))});c.displayName="SaveToCollectionIcon",c.muiName=r.Z.muiName},51576:function(e,n,t){t.r(n),t.d(n,{Visibility:function(){return r}});var o=t(70865),i=t(52322),a=(0,t(6620).Z)((0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M16 9.333c-3.733 0-6.667 2.933-6.667 6.667s2.933 6.667 6.667 6.667c3.733 0 6.667-2.933 6.667-6.667S19.734 9.333 16 9.333zM16 20c-2.267 0-4-1.733-4-4s1.733-4 4-4 4 1.733 4 4-1.733 4-4 4z"}),(0,i.jsx)("path",{d:"M16 5.333C4.8 5.333 1.333 16 1.333 16 5.733 26.533 16 26.667 16 26.667 26.933 26.667 30.667 16 30.667 16 26.134 5.467 16 5.333 16 5.333zM16 24s-7.067.267-11.733-8.133c0 0 2.933-8 11.733-8 0 0 7.733 0 11.733 8.133 0 .133-3.333 8-11.733 8z"})]}),"Visibility.svg"),r=function(e){return(0,i.jsx)(a,(0,o.Z)({viewBox:"0 0 32 32"},e))}}}]);
//# sourceMappingURL=11929-34e45011633208f2.js.map