"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4026,94845],{31931:function(e,n,t){t.d(n,{B:function(){return w}});var r=t(70865),i=t(96670),a=t(87394),s=t(52322),o=t(67550),c=t(89041),u=t(83024),d=t(97599),l=t(95299),p=t(16113),m=t(2678),g=t(23490),f=t(21028),h=t(53881),v=t(75298),b=t(97593),_=t(25237),y=t.n(_),P=t(2784),O=t(8740),C=t(83081),x=y()(function(){return t.e(47279).then(t.bind(t,47279)).then(function(e){return e.CmsDynamicModules})},{loadableGenerated:{webpack:function(){return[47279]}},ssr:!0}),T=(0,O.ZL)()(function(e){return{searchBarContainer:{paddingBottom:(0,e.spacing)(4)}}}),w=function(e){var n,t,i,_=e.modulesProps,y=T().classes,O=(0,g.N)().isBot,w=(0,h.n)().isMobileServer,k=(0,f.hw)(),Z=k.hero,I=k.cmsModules,L=k.breadcrumbs,N=k.metadata,A=k.shouldIndex,S=k.entries,M=k.statusCode,E=k.legalText,R=k.topNavigationType,D=k.uniformModuleSpacing,j=k.showSearchBar,F=k.pageTitle,B=k.primaryHero,U=(0,a.Z)((0,v.I)({triggerOnce:!0,rootMargin:"100000px 0px ".concat(w?"0px":"100px"," 0px")}),2),V=U[0],H=U[1],q=(0,P.useMemo)(function(){if(I){var e=I.some(function(e){var n,t;return(null==e?void 0:e.id)&&(null===(n=S[e.id])||void 0===n?void 0:null===(t=n.fields)||void 0===t?void 0:t.jumpLinkId)});return V||O||e?I:I.slice(0,4)}return[]},[I,S,O,V]);if(M)return(0,s.jsx)(d.F,{statusCode:M});var G=L&&L[L.length-1],z=null!==(i=null==Z?void 0:Z.id)&&void 0!==i?i:null==B?void 0:B.id;return(0,s.jsxs)(s.Fragment,{children:[N&&(0,s.jsx)(c.z,{metadata:N,pageTitle:F,hero:Z,noIndex:!A}),j&&(0,s.jsx)("div",{className:y.searchBarContainer,children:(0,s.jsx)(m.v,{})}),L&&R===b.XF.TOP_NAV_SEARCH&&(0,s.jsx)(C.p,{id:G.id,contentType:null==S?void 0:null===(n=S[G.id])||void 0===n?void 0:n.contentType,breadcrumbs:L}),(Z||B)&&(0,s.jsx)(C.p,(0,r.Z)({id:z,hideSearchByAsset:!1,contentType:null==S?void 0:null===(t=S[z])||void 0===t?void 0:t.contentType,isPrimaryHero:!0,topNavigationType:R},_)),I&&(0,s.jsx)(o.Z,{mx:{xs:-4,sm:-5},children:!!(null==q?void 0:q.length)&&(0,s.jsx)(x,(0,r.Z)({cmsModules:q,CustomContainerComponent:l.H,CustomContainerComponentDarkTheme:p.I,entries:S,isContentfulLP:!0,uniformModuleSpacing:D},_))}),(0,s.jsx)("div",{ref:H}),E&&(0,s.jsx)(u.U,{legalText:E,uniformModuleSpacing:D}),I&&!(V||O)&&(0,s.jsx)("div",{style:{minHeight:"400px"}})]})};w.defaultProps=(0,i.Z)((0,r.Z)({},b.qR),{modulesProps:{customComponentMap:{},componentProps:{},isAlternatingBackground:void 0}})},83024:function(e,n,t){t.d(n,{U:function(){return u}});var r=t(52322),i=t(67550),a=t(62197),s=t(90369),o=t(36232),c=(0,t(8740).ZL)()(function(e){return{box:{textAlign:"center",justifyContent:"center",marginTop:"3rem",marginBottom:"3rem",display:"flex",flexDirection:"column",opacity:e.tokens.opacity[60]}}}),u=function(e){var n=e.legalText,t=e.isFullWidth,u=e.uniformModuleSpacing,d=c().classes;return n&&(0,r.jsx)(o.I,{cmsBgContainerProps:{index:0,isFullWidth:t,uniformModuleSpacing:u,respectLastItem:!1},children:(0,r.jsx)(i.Z,{className:d.box,children:(0,r.jsx)(s.h,{stringToTransform:n,Component:(0,r.jsx)(a.Z,{color:"primary",variant:"subtitle2"})})})})};u.defaultProps={legalText:null,isFullWidth:!1}},89041:function(e,n,t){t.d(n,{z:function(){return s}});var r=t(52322),i=t(27050),a=t(72474),s=function(e){var n=e.metadata,t=n.ogTitle,s=n.ogDescription,o=n.ogImage,c=n.pageDescription,u=e.hero,d=e.noIndex,l=e.schemas,p=e.pageTitle,m=t||p||(null==u?void 0:u.title),g=s||(null==u?void 0:u.subtitle),f=c||(null==u?void 0:u.subtitle),h=o||(null==u?void 0:u.image)&&(0,i.Co)(u.image);return(0,r.jsx)(a.B,{description:g,title:m,image:h,noIndexNoFollow:d,schemas:l,pageDescription:f})};s.defaultProps={hero:null,schemas:void 0,noIndex:!1,pageTitle:""}},90369:function(e,n,t){t.d(n,{h:function(){return o}});var r=t(70865),i=t(52322),a=t(2784),s=(0,t(8740).ZL)()(function(){return{newline:{whiteSpace:"pre-line"}}}),o=(0,a.memo)(function(e){var n=e.stringToTransform,t=e.classes,o=e.Component,c=s(),u=c.classes.newline,d={className:(0,c.cx)(t,u),dangerouslySetInnerHTML:{__html:n}};return o?(0,a.cloneElement)(o,d):(0,i.jsx)("div",(0,r.Z)({},d))})},36232:function(e,n,t){t.d(n,{I:function(){return h}});var r=t(47842),i=t(70865),a=t(96670),s=t(52322),o=t(96976),c=t(53957),u=t(91609),d=t(9823),l=t(73469),p=t(8740),m=t(41519),g=(0,p.ZL)()(function(e,n){var t=e.breakpoints,s=e.tokens.spacing,o=n.backgroundColor,u=n.isHero,d=n.isFullWidth,l=n.uniformModuleSpacing,p=n.respectLastItem,m=function(e,n){return(0,i.Z)({padding:"".concat(e," ").concat(n)},p&&{"&:last-of-type":{padding:"".concat(e," ").concat(n," 0 ").concat(n)}})};return{container:(0,i.Z)((0,a.Z)((0,i.Z)({},!u&&!d&&{"&&&>*":{maxWidth:"1280px",margin:"auto"}},!u&&d&&{"&&&>*":{maxWidth:"100%",margin:"auto"}}),{backgroundColor:o}),function(){var e,n,o;switch(l){case c.dv:return(0,a.Z)((0,i.Z)({},m(s.s,s.base)),(e={},(0,r.Z)(e,t.up("sm"),(0,i.Z)({},m(s.s,s.m))),(0,r.Z)(e,t.up("md"),(0,i.Z)({},m(s.base,s.m))),e));case c.ps:return(0,a.Z)((0,i.Z)({},m(s.base,s.base)),(n={},(0,r.Z)(n,t.up("sm"),(0,i.Z)({},m(s.base,s.m))),(0,r.Z)(n,t.up("md"),(0,i.Z)({},m(s.m,s.m))),n));case c.ON:return(0,a.Z)((0,i.Z)({},m(s.m,s.base)),(o={},(0,r.Z)(o,t.up("sm"),(0,i.Z)({},m(s.l,s.m))),(0,r.Z)(o,t.up("md"),(0,i.Z)({},m(s.xl,s.m))),o));default:return(0,r.Z)({padding:"0 ".concat(s.base)},t.up("sm"),{padding:"0 ".concat(s.m)})}}())}}),f=function(e){var n=e.index,t=e.isBlackMode,r=e.theme;return t?r.palette.common.black:r.themeName===u.iA?r.palette.background.default:n%2==0?r.palette.background.default:r.palette.skeleton},h=function(e){var n=e.children,t=e.className,r=e.cmsBgContainerProps,i=r.index,a=r.isFullWidth,p=r.uniformModuleSpacing,h=void 0===p?c.ps:p,v=r.respectLastItem,b=e.themeMode,_=e.isHero,y=(0,d.D)().themeMode,P=(0,l.i)({themeMode:b===c.Ji||b===c.VH||y===u.oc.DARK?u.oc.DARK:u.oc.LIGHT}).theme,O=f({index:i,isBlackMode:b===c.Ji,theme:P}),C=g({backgroundColor:O,isHero:_,isFullWidth:a,uniformModuleSpacing:h,respectLastItem:void 0===v||v}),x=C.classes,T=C.cx;return"number"!=typeof i?(0,s.jsx)(s.Fragment,{children:n}):(0,s.jsx)(o.Z,{theme:P,children:(0,s.jsx)(m.j.Provider,{value:O,children:(0,s.jsx)("div",{className:T(x.container,t),children:n})})})};h.defaultProps={themeMode:c.sn,className:"",isHero:!1,cmsBgContainerProps:{}}},14625:function(e,n,t){t.d(n,{AR:function(){return p},Bn:function(){return O},GN:function(){return y},K9:function(){return g},NP:function(){return l},PU:function(){return u},Ui:function(){return f},Up:function(){return b},XC:function(){return d},Xh:function(){return _},Y4:function(){return P},l_:function(){return C},wZ:function(){return x}});var r,i,a=t(47842),s=t(70865),o=t(96670),c=t(27739),u="subscription",d="onDemand",l="enhanced",p={translations:{title:"choose_monthly_plan",caption:["activation-drawers:sub_product_disclaimer"]},items:[{name:c.tq,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:c.v8,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:c.dm,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}}]},m={translations:{title:"choose_monthly_plan",caption:["activation-drawers:sub_product_disclaimer","activation-drawers:sub_product_sub_disclaimer"]},items:[{name:c.tq,translations:{price:"activation-drawers:price_per_month",description:"flex_sub_details"}},{name:c.cz,translations:{price:"activation-drawers:price_per_month"}},{name:c.dF,translations:{price:"activation-drawers:price_per_month"}}]},g={translations:{title:"choose_a_plan",caption:["activation-drawers:sub_product_sub_disclaimer"]},items:[{name:c.EV,translations:{price:"activation-drawers:price_per_year",description:"flex_sub_details"}},{name:c.KB,translations:{price:"activation-drawers:price_per_year"}},{name:c.Dy,translations:{price:"activation-drawers:price_per_year"}}]},f={translations:{title:"on_demand_title",caption:"on_demand_caption"},items:[{name:c._x},{name:c.vC},{name:c.cL}]},h={translations:{title:"on_demand_title",caption:"on_demand_caption"},items:[{name:c.cd,translations:{price:"price_standard_license"}},{name:c.vC,translations:{price:"price_standard_license"}},{name:c._x,translations:{price:"price_standard_license"}},{name:c.cL,translations:{price:"price_standard_license"}}],initialItemIndex:1},v={translations:{title:"on_demand_title",caption:"on_demand_caption"},items:[{name:c.cd,translations:{price:"price_standard_license_ai_introduction_offer"}},{name:c._x,translations:{price:"price_standard_license"}},{name:c.cL,translations:{price:"price_standard_license"}}],initialItemIndex:0},b={translations:{title:"enhanced_legal_protections",caption:"on_demand_caption"},items:[{name:c.vI},{name:c.zW},{name:c.jh}]},_=(r={},(0,a.Z)(r,u,p),(0,a.Z)(r,d,h),(0,a.Z)(r,l,b),r),y=(i={},(0,a.Z)(i,u,p),(0,a.Z)(i,d,f),(0,a.Z)(i,l,b),i),P=(0,o.Z)((0,s.Z)({},_),(0,a.Z)({},u,m)),O=(0,o.Z)((0,s.Z)({},_),(0,a.Z)({},d,v)),C=(0,o.Z)((0,s.Z)({},y),(0,a.Z)({},u,m)),x=[{translations:"subscriptions",analyticsLabel:"subscriptionTab"},{translations:"on_demand_packs",analyticsLabel:"onDemandTab"}]},75445:function(e,n,t){t.d(n,{a:function(){return r}});var r="USD"},13591:function(e,n,t){t.d(n,{C5:function(){return g},Di:function(){return o},VP:function(){return b},jm:function(){return s},nk:function(){return f},rN:function(){return h},sZ:function(){return c},wZ:function(){return v}});var r,i=t(47842),a=t(14625),s="p3-1282-credit-packs",o="Add Credit Packs",c={flagID:s,id:"P3-1282",name:o},u="2_credit_pack",d="5_credit_pack",l="30_credit_pack",p="125_credit_pack",m="250_credit_pack",g=[u,d,l,p,m],f="creditPack",h="pricingCardCreditPack",v=[{translations:"subscriptions",analyticsLabel:"subscriptionTab"},{translations:"credit_packs",analyticsLabel:"creditPacksTab"}],b=(r={},(0,i.Z)(r,a.PU,a.AR),(0,i.Z)(r,a.XC,{translations:{title:"credit_packs_title",caption:"on_demand_caption"},items:[{name:d},{name:u},{name:l}]}),(0,i.Z)(r,a.NP,{translations:{title:"enhanced_generic_legal_protections",caption:"on_demand_caption"},items:[{name:l},{name:p},{name:m}]}),r)},87414:function(e,n,t){t.d(n,{$A:function(){return b},Dg:function(){return f},Jr:function(){return v},Kg:function(){return h},OG:function(){return m},XD:function(){return y},Yc:function(){return u},Yy:function(){return p},g7:function(){return g},p_:function(){return _}});var r=t(50930),i=t(27739),a=t(56495),s=t(75445),o=t(60591),c=t(13591),u=function(e){return e.product.repeatInterval===o.MQ},d={CHF:"EUR",DKK:"EUR",NOK:"EUR",SEK:"EUR"},l=function(e){var n=e.currency,t=e.prices,r=d[n];return t[r]?r:s.a},p=function(e){var n=e.prices,t=void 0===n?{}:n,r=e.localeCurrency;return t[r.toLowerCase()]?r.toUpperCase():l({currency:r,prices:t})},m=function(e){var n=e.product;return(void 0===n?{}:n).activityTracking===i.bk},g=function(e){var n=e.product,t=void 0===n?{}:n,r=t.allotmentCredits,i=t.downloadCredits;return r&&!i},f=function(e){var n=e.product,t=(void 0===n?{}:n).name;return c.C5.includes(t)},h=function(e){var n,t=e.paymentPlans,r=e.licenseType,a=e.selectedPaymentPlan;return(null==a?void 0:a.cost)?a.cost:null===(n=(void 0===t?[]:t).find(function(e){var n=e.activityTracking,t=e.isEligibleForDownload,a=e.license;return a===r&&n===i.bk&&(t||!t&&a===o.ur)}))||void 0===n?void 0:n.cost},v=function(e){var n=e.productName;return(0,r.Z)(a.LY).concat([a.i3,a.Y_]).includes(void 0===n?"":n)},b=function(e,n){return null==e?void 0:e.find(function(e){return e.name===n})},_=function(e){var n=e.products,t=e.productsToReplace,r=new Map((void 0===t?[]:t).map(function(e){return[e.name,e]}));return(void 0===n?[]:n).map(function(e){return r.get(e.name)||e})},y=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).name;return o.$I.includes(e)}},88167:function(e,n,t){t.d(n,{IW:function(){return m},LG:function(){return l},cm:function(){return g},st:function(){return c},tP:function(){return d},vN:function(){return p}});var r=t(75445),i=t(65532),a=t(87414),s=t(2784),o=t(22921),c=function(e){var n=e.prices,t=(0,i.PE)().currencyData.currency,s=void 0===t?r.a:t;return(0,a.Yy)({prices:void 0===n?[]:n,localeCurrency:s})},u=function(e,n,t){return e+n*t},d=function(e){var n=e.product||{},t=n.prices,r=void 0===t?{}:t,i=n.pricesPerSeat,a=n.seatCount,s=n.downloadCredits,d=n.commitmentLength,l=c({prices:r}),p=r[null==l?void 0:l.toLowerCase()],m=(void 0===i?{}:i)[null==l?void 0:l.toLowerCase()],g=p;return m&&a&&(g=u(p,m,a)),(0,o.P)(g/(1===d?12*s:s),l)},l=function(e){var n=e.product||{},t=n.prices,r=void 0===t?{}:t,i=n.pricesPerSeat,a=n.seatCount,s=c({prices:r}),d=r[null==s?void 0:s.toLowerCase()],l=(void 0===i?{}:i)[null==s?void 0:s.toLowerCase()],p=d;return l&&a&&(p=u(d,l,a)),(0,o.P)(p,s)},p=function(e){var n=e.price,t=(e.product||{}).prices,r=c({prices:void 0===t?{}:t});return(0,o.P)(n,r)},m=function(e){var n=e.product,t=e.downloadsPerMonth,r=e.discountPercentage,i=void 0===r?0:r,u=c({prices:n.prices}),d=(0,s.useMemo)(function(){var e=n.allotmentCredits,r=(0,a.g7)({product:n}),s=(0,a.Dg)({product:n}),o=(0,a.Yc)({product:n}),c=o&&!s?12:1,d=n.prices[u.toLowerCase()],l=o?(d/12).toFixed(2):d,p=(d/c/(r?e:t)).toFixed(2),m=i?((d-d/100*i)/c/(r?e:t)).toFixed(2):p;return{pricePerMonth:l,pricePerAsset:p,pricePerAssetDiscounted:m,pricePerPaymentInterval:d}},[u,t,n,i]),l=d.pricePerPaymentInterval,p=d.pricePerMonth,m=d.pricePerAsset,g=d.pricePerAssetDiscounted;return{formattedPricePerPaymentInterval:(0,o.P)(l,u),formattedPricePerMonth:(0,o.P)(p,u),formattedPricePerAsset:(0,o.P)(m,u),formattedPricePerAssetDiscounted:(0,o.P)(g,u)}},g=function(e){var n=e.product,t=e.singleClipProduct,r=c({prices:n.prices}),i=n.prices[r.toLowerCase()],a=null==t?void 0:t.prices[r.toLowerCase()],s=(i/n.downloadCredits).toFixed(2),u=((a-s)*n.downloadCredits).toFixed(0);return{formattedPackagePrice:(0,o.P)(i,r),formattedPricePerAsset:(0,o.P)(s,r),formattedSaveAmount:(0,o.P)(u,r)}}},22921:function(e,n,t){t.d(n,{P:function(){return m},o:function(){return p}});var r=t(47842),i=t(39232),a=t(24861),s=t(65532),o=t(75),c=t(59877),u=t(2784),d=function(e){var n=e.t,t=e.price;return{compCredits:n("comp_credits",{PRICE:t}),credit:n(["1",1].includes(t)?"credit":"credits",{PRICE:t}),licenseCredits:n("license_credits",{PRICE:t}),unavailable:n("ent:unavailable"),unlimited:n("ent:unlimited")}},l=function(e){var n,t=e.labels,i=void 0===t?{}:t;return n={},(0,r.Z)(n,a.vh,i.credit),(0,r.Z)(n,a.un,i.compCredits),(0,r.Z)(n,a.eM,i.licenseCredits),n},p=function(){var e=(0,s.PE)(),n=e.fullLocale,t=e.currencyData,r=(void 0===t?{}:t).currency,p=void 0===r?"USD":r,m=(0,c.$G)(o.Pkf).t;return(0,u.useCallback)(function(e){var t=e.price,r=e.localeCurrencyOverride,s=e.priceType,o=void 0===s?a.Br:s,c=e.fixedFractionDigits,u=d({t:m,price:t});if(t===i.nZ)return u.unavailable;if(t===i.q9)return u.unlimited;var g=l({labels:u}),f=null==g?void 0:g[o];return f||new Intl.NumberFormat(n,{style:"currency",currency:(void 0===r?"":r)||p,minimumFractionDigits:null!=c?c:t%1==0?0:2}).format(t)},[p,n,m])},m=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.Br;return p()({price:e,localeCurrencyOverride:n,priceType:t})}},40490:function(e,n,t){t.d(n,{V:function(){return o}});var r=t(53957),i=t(13980),a=t.n(i),s=t(72505),o={linkAs:a().string,href:a().string,id:a().string,label:a().string,trackAnalytics:a().shape(s.E),variant:a().oneOf([r.xJ,r.Qh])}},38097:function(e,n,t){t.d(n,{Lh:function(){return u},St:function(){return o},ou:function(){return c}});var r=t(13980),i=t.n(r);i().arrayOf(i().shape({id:i().string,props:i().objectOf(i().any)}));var a={id:i().string,referenceType:i().oneOf(["asset","entry"])},s={contentType:i().string,fields:i().objectOf(i().any),id:i().string},o=i().shape(s),c=i().objectOf(o),u=i().shape(a)},42931:function(e,n,t){t.d(n,{B:function(){return o},H:function(){return s}});var r=t(13980),i=t.n(r),a={descriptor:i().string,height:i().number,width:i().number},s={xl:i().arrayOf(i().shape(a)),lg:i().arrayOf(i().shape(a)),md:i().arrayOf(i().shape(a)),sm:i().arrayOf(i().shape(a)),default:i().arrayOf(i().shape(a))},o={height:i().number,id:i().oneOfType([i().string,i().number]),sizes:i().string,srcSet:i().shape(s),title:i().string,type:i().string,url:i().string.isRequired,width:i().number}},9796:function(e,n,t){t.d(n,{EQ:function(){return d},G_:function(){return u}});var r=t(13980),i=t.n(r),a=t(40490),s=t(42931),o=t(72505),c={xs:i().number,sm:i().number,md:i().number,lg:i().number,xl:i().number},u={id:i().oneOfType([i().string,i().number]).isRequired,subtitle:i().oneOfType([i().string,i().node]),title:i().oneOfType([i().string,i().node]),asPath:i().string,href:i().oneOfType([i().string,i().shape({pathname:i().string,query:i().shape({})})]),image:i().shape(s.B),icon:i().shape({height:i().number,id:i().oneOfType([i().string,i().number]),sizes:i().string,srcSet:i().shape(s.H),title:i().string,type:i().string,url:i().string,width:i().number,name:i().string}),trackAnalytics:i().shape(o.E)},d={button:i().shape(a.V),inlineContent:i().shape(a.V),id:i().oneOfType([i().string,i().number]),title:i().string,items:i().arrayOf(i().shape(u)),layout:i().string,withOverlay:i().bool,itemsPerBreakpoint:i().shape(c)}},40374:function(e,n,t){t.d(n,{E:function(){return c},P:function(){return o}});var r=t(53957),i=t(13980),a=t.n(i),s=t(40490),o={dataAutomation:a().string,id:a().string,items:a().arrayOf(a().shape(s.V)),linksListTitle:a().string,titlePosition:a().oneOf([r.gO,r.nf]),textColor:a().string,bgColor:a().string,type:a().string,listCta:a().shape(s.V),linkListLayout:a().oneOf([r.e_,r.ED]),linksListShowNumbers:a().bool},c={dataAutomation:"",titlePosition:r.gO,items:[],textColor:"#FFF",bgColor:"#2C4AE0",linkListLayout:r.e_,linksListShowNumbers:!1}},97593:function(e,n,t){t.d(n,{qR:function(){return w},XF:function(){return x}});var r=t(13980),i=t.n(r),a=t(38097),s=t(70865),o=t(96670),c=t(53957),u=t(39232),d=t(43526),l=i().shape({assetClass:i().string.isRequired,externalUrl:i().string.isRequired,nativeDuration:i().number.isRequired}),p={artists:i().arrayOf(i().string),beatsPerMinute:i().oneOfType([i().string,i().number]),description:i().string,nativeDuration:i().oneOfType([i().string,i().number]),instruments:i().oneOfType([i().arrayOf(i().string),i().shape({keywords:i().arrayOf(i().string),title:i().string,link:i().string})]),genres:i().oneOfType([i().arrayOf(i().string),i().shape({keywords:i().arrayOf(i().string),title:i().string,link:i().string})]),moods:i().arrayOf(i().string),sourceExternalId:i().string,title:i().string,previewMp3:i().string,trackAssets:i().shape({loops:i().arrayOf(l),shorts:i().arrayOf(l),stems:i().arrayOf(l)})},m=i().shape((0,s.Z)({},p)),g=i().arrayOf(i().shape({key:i().string.isRequired,docCount:i().number.isRequired}));i().shape({instruments:g,genres:g,moods:g});var f=t(20107),h={id:i().string,assetId:i().string,assetType:i().oneOf([u.k4,u.xF,u.Xy,u.pX]),mediaItems:i().oneOfType([i().shape(d.R),m,i().shape(f.o)]),contentType:i().oneOf([c.wF.assetItem])},v=t(40490),b=t(42931),_=t(40374),y={title:i().string,type:i().string,tracks:i().arrayOf(m)},P={alignment:i().oneOf([c.AE,c.zo,c.O_]),buttons:i().arrayOf(i().shape(v.V)),backgroundColor:i().string,image:i().shape(b.B),isShortHero:i().bool,subtitle:i().string,title:i().string,video:i().shape({previewVideoUrls:i().shape({mp4:i().string,webm:i().string})}),logo:i().shape({url:i().string,title:i().string,size:i().number}),linksList:i().shape(_.P),customAssetMetadata:i().shape(h),showSubtitle:i().bool,showTitle:i().bool,showIconMeta:i().bool,containerHeight:i().string};i().arrayOf(i().shape(v.V)),i().string,i().shape(b.B),i().string,i().string,i().shape(h),(0,o.Z)((0,s.Z)({},P,y),{button:i().shape(v.V),heroSecondaryCta:null});var O=t(9796),C={ogImage:i().shape({url:i().string,width:i().number,height:i().number,alt:i().string}),ogTitle:i().string.isRequired,ogDescription:i().string};i().shape(C).isRequired,i().shape(P).isRequired,i().arrayOf(i().shape(O.EQ)).isRequired;var x={TOP_NAV_HIDE:"No Top Navigation",TOP_NAV_OVERLAY:"Overlay",TOP_NAV_SEARCH:"Top Navigation + Search Bar",TOP_NAV_UTILITY:"Top Navigation + Utility Bar",TOP_NAV_SEARCH_OVERLAY:"Top Navigation + Search Bar Overlaid",TOP_NAV_DEVELOPERS:"Top Navigation developers"},T={SPACING_NONE:"None",SPACING_SMALL:"Small",SPACING_MEDIUM:"Medium",SPACING_LARGE:"Large"};i().arrayOf(i().shape({title:i().string,url:i().string})),i().string,a.ou,i().string,a.St,i().arrayOf(a.St),i().string,a.St,i().bool,i().oneOf(Object.values(x)),i().bool,i().string,i().string,i().oneOf(Object.keys(T).map(function(e){return T[e]}));var w={breadcrumbs:[],canonicalUrl:void 0,entries:void 0,legalText:void 0,metadata:{},modules:void 0,primaryHero:{},shouldIndex:void 0,topNavigationType:void 0,showTopNavigation:void 0,title:void 0,url:void 0,spacingModule:void 0}},43526:function(e,n,t){t.d(n,{R:function(){return o}});var r=t(13980),i=t.n(r),a={format:i().string,dpi:i().number,name:i().string,width:i().number,height:i().number,display_name:i().string,size_in_bytes:i().number,human_readable_size:i().string,width_in:i().string,height_in:i().string,width_cm:i().string,height_cm:i().string},s={src:i().string,width:i().number,height:i().number},o={alt:i().string,aspect:i().number,categories:i().arrayOf(i().shape({id:i().oneOfType([i().string,i().number]),type:i().string,name:i().string})),channels:i().arrayOf(i().string),contentTier:i().number,contributor:i().shape({id:i().string,publicInformation:i().shape({}),type:i().string}),description:i().string,descriptionLanguageMap:i().shape({en:i().string}),displays:i().shape({"260nw":i().shape(s),"600w":i().shape(s),"1500w":i().shape(s)}),hasModelRelease:i().bool,hasPropertyRelease:i().bool,height:i().number,id:i().oneOfType([i().string,i().number]),imageScores:i().shape({id:i().string,type:i().string}),imageType:i().string,isEditorial:i().oneOfType([i().bool,i().number]),keywords:i().arrayOf(i().string),link:i().string,meta:i().shape({trackingId:i().string}),modelReleaseInfo:i().string,releases:i().arrayOf(i().number),sizes:i().shape({vectorEps:i().shape(a),mediumJpg:i().shape(a),hugeTiff:i().shape(a),smallJpg:i().shape(a),hugeJpg:i().shape(a)}),src:i().string,status:i().string,title:i().string,type:i().string,width:i().number}},72505:function(e,n,t){t.d(n,{E:function(){return a}});var r=t(13980),i=t.n(r),a={label:i().string,section:i().string}},20107:function(e,n,t){t.d(n,{o:function(){return a}});var r=t(13980),i=t.n(r);i().string,i().string,i().number,i().number,i().string,i().number,i().string,i().string,i().string;var a={aspectRatio:i().string,contributorId:i().string,contributorName:i().string,contributorPhoto:i().string,contributorDetailsUrl:i().shape({type:i().string,payload:i().shape({id:i().string})}),description:i().string,duration:i().oneOfType([i().string,i().number]),id:i().string,isEditorial:i().oneOfType([i().bool,i().number]),keywords:i().arrayOf(i().string),licenseType:i().oneOf(["editorial","model","standard"]),meta:i().shape({resolution:i().string,name:i().string,trackingId:i().string}),mp4Url:i().string,poster:i().string,webmUrl:i().string}}}]);
//# sourceMappingURL=4026-b8ac334a57a473a9.js.map