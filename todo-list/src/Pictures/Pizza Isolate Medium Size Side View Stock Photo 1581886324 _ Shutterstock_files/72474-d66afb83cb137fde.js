"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72474],{72474:function(e,t,n){n.d(t,{B:function(){return Y}});var r=n(87394),i=n(52322),o=n(16642),a=n(71162),s=n(39232),c=n(84833),u=n(18505),l=n(65532),d=n(19799),p=n(48417),g=n(89522),m=n(31037),v=n(57858),h=n(27764),f=n(61970),y=n(70314),x=n.n(y),j=n(5632),k=n(2784),S=n(31294),w=n(9823),T=[u.Z$,u.jS],_=[u.oy,u.G4,u.in,u.gG],I=x()().publicRuntimeConfig,L=I.enterpriseBaseUrl,C=I.shutterstockBaseUrl,O=/\/search(\?|\/).+$/,A=/\/editorial\/(?:video\/)?search\/.+$/,E=/\/video\/editorial\/?search/,N=/\/music\/search\/ras\/.+$/,R=/\/music\/search(\?|\/).+$/,P=/\/video\/search(\?|\/).+$/,b=/\/video\/embed\/\d+$/,B=function(e){return O.test(e)&&!(A.test(e)||N.test(e))},Z=RegExp("^/editorial/(".concat(c.Nm.join("|"),")/")),F=function(e,t){if(!t)return n;var n,i=(0,f.jq)(t).query,o=R.test(t)&&!(A.test(t)||N.test(t)),a=Object.entries(i).reduce(function(e,n){var i=(0,r.Z)(n,2),a=i[0],s=i[1];if(o&&_.includes(a)&&(e.push([a,Array.isArray(s)?s[0]:s]),o=!1),T.includes(a)&&!Array.isArray(s)){if((B(t)||P.test(t)&&!(A.test(t)||N.test(t)))&&a===u.jS)return e;e.push([a,s])}return e},[]);if(a&&!a.length)return n;var s=Object.fromEntries(a.sort());return(0,f.BQ)({pathname:e,query:s})},G=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).asset,t=(0,w.D)().isBrandSstk?C:L,n=(0,j.useRouter)().asPath,i=(0,l.PE)().locale,o=(0,d.ug)(),a=o.query,c=o.spellcheckInfo,u=c.spellcheckedQuery,v=void 0===u?"":u,y=c.origResultsCount,x=(0,S.Q)().encodeSearchTerm,T=(0,r.Z)((0,g.KC)({asset:e}),1)[0];return{getCanonicalLink:(0,k.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.appendLocale,c=e.code,u=e.overriddenSearchTerm,l=null!==(w=null===(S=(0,f.jq)((0,h.oY)(n)))||void 0===S?void 0:S.pathname)&&void 0!==w?w:"",d=l;if(g=d,E.test(g)&&(d=d.replace("video/editorial","editorial/video")),j=d,Z.test(j)&&(d=d.replace(Z,"/editorial/livefeed/")),"/"!==T&&(k=d,b.test(k))&&(d=T),B(n)){var g,j,k,S,w,_=F(l,n);_&&(d=_);var I=(0,p.aT)(u||(0===y&&v?v:a),i),L=(0,f.jq)(n).query;d=L.image_type===s.e3&&L.entity&&""===I?(0,r.Z)((0,m.NJ)(),1)[0]:(0,h.Iz)({path:d,term:x(I)})}return"/templates/search"===d&&(d="/templates"),(0,h.ws)(t+d,o&&(c||i))},[n,t,i,T,y,v,a,x])}},M=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.overriddenSearchTerm,r=t.asset,i=t.assets,o=(0,d.ug)().queryTranslations,a=G({asset:r}).getCanonicalLink,s=(0,j.useRouter)().asPath,c=(0,l.PE)().locale,u=(0,S.Q)().encodeSearchTerm,p=a({appendLocale:!0,overriddenSearchTerm:n}),g=B(s),m=!g||"en"===c&&i&&i.length>0?a():"en"!==c&&o.en?a({overriddenSearchTerm:o.en}):void 0,h=v.Ft.map(function(e){if(!o[e]&&c!==e&&g||"en"!==c&&"en"===e&&p.includes(o.en)&&g)return null;var t=o[e]||o.en,n=a({code:e,appendLocale:!0});return g&&t&&(n=n.replace(/\/search\/[^/?]*/,"/search/".concat(u(t)))),{href:n,hrefLang:e}}).filter(function(e){return!!e});return B(s)&&(null===(e=h.find(function(e){return e.hrefLang===c}))||void 0===e?void 0:e.href)!==p&&(h=[]),B(s)&&1===h.length&&h[0].hrefLang===c&&(h=[]),{altDefaultLink:m,altLinks:h,canonicalLink:p}},D=n(97024),U=n(75),q=n(68871),H=n(97729),Q=n.n(H),W=n(59877),$="Shutterstock",V="Shutterstock Editorial",z=[["twitter:site","@shutterstock"],["twitter:card","summary_large_image"],["apple-itunes-app","app-id=473347409, app-argument=http://www.shutterstock.com/"],["google-site-verification","1wsiFwGziBzqCcMecpMDlbZgN1jKL-Fh6m05QXpg4QY"]],J=function(e){var t=e.isBrandSstk,n=(0,D.Ws)();return t&&n?V:$},K=function(e){var t=e.metaTitle,n=e.isBrandSstk,r=(0,D.Ws)()&&n;return t.includes($)?r?t.replace($,V):t:"".concat(t," | ").concat(r?V:$)},X=function(e){var t=e.statusCode,n=(0,W.$G)([U.ocu,U._eB]).t,r=(0,w.D)(),o=r.isBrandSstk,s=r.isBrandEnterprise,c=(0,q.U3)(t)?t:a.Vj,u=n("error:status_".concat(c,"_title")),l=n(s&&t===a.gB?"".concat(U._eB,"::ent:no_access_content"):"error:status_".concat(c,"_subtitle")),d=K({metaTitle:u,isBrandSstk:o});return(0,i.jsxs)(Q(),{children:[(0,i.jsx)("title",{children:d},"title"),(0,i.jsx)("meta",{name:"description",content:l},"description"),(0,i.jsx)("meta",{content:d,property:"og:title"},"og:title"),(0,i.jsx)("meta",{content:l,property:"og:description"},"og:description")]})},Y=function(e){var t,n,s,c=e.assets,u=e.description,l=e.image,d=void 0===l?{}:l,p=e.title,g=e.schemas,m=e.statusCode,v=e.noIndex,h=e.noIndexNoFollow,f=e.keywords,y=e.isAdultContent,x=e.contributor,j=void 0===x?{}:x,k=e.children,S=e.seoServiceData,T=e.asset,_=e.pageDescription,I=(0,W.$G)(U.aGO).t,L=M({overriddenSearchTerm:null==S?void 0:S.taxonomyCanonical,asset:T,assets:c}),C=L.altDefaultLink,O=L.altLinks,A=L.canonicalLink,E=(0,w.D)(),N=E.isBrandSstk,R=E.isBrandEnterprise,P={title:p||I("home:lihp_meta_title"),description:u||I("home:lihp_meta_description")},b=P.title,B=P.description,Z=J({isBrandSstk:N}),F=K({metaTitle:b,isBrandSstk:N}),G=(null==S?void 0:S.disposition)===o.M8&&(null==S?void 0:S.isSeoServiceActive),D=(null==S?void 0:S.disposition)===o.Hf&&(null==S?void 0:S.isSeoServiceActive),q=(v||G)&&!R,H=(h||D)&&!R,$=(null==S?void 0:S.disposition)===o.FL&&(null==S?void 0:S.canonicalURL)||A;return(0,i.jsxs)(i.Fragment,{children:[m>a.HO?(0,i.jsx)(X,{statusCode:m}):(0,i.jsxs)(Q(),{children:[(0,i.jsx)("title",{children:F},"title"),(0,i.jsx)("meta",{name:"description",content:_||B},"description"),(0,i.jsx)("meta",{content:F,property:"og:title"},"og:title"),(0,i.jsx)("meta",{content:B,property:"og:description"},"og:description"),k]}),(0,i.jsxs)(Q(),{children:[z.map(function(e){var t=(0,r.Z)(e,2),n=t[0],o=t[1];return(0,i.jsx)("meta",{name:n,content:o},n)}),(0,i.jsx)("meta",{content:"website",property:"og:type"},"type"),(0,i.jsx)("meta",{content:Z,property:"og:site_name"},"site"),(0,i.jsx)("meta",{content:"604800",property:"og:ttl"},"og:ttl"),j.twitterUsername&&(0,i.jsx)("meta",{content:"@".concat(j.twitterUsername),name:"twitter:creator"},"twitter:creator"),d.url&&(0,i.jsx)("meta",{content:d.url,property:"og:image"},"og:image"),d.width&&(0,i.jsx)("meta",{content:Math.round(d.width),property:"og:image:width"},"og:image:width"),d.height&&(0,i.jsx)("meta",{content:Math.round(d.height),property:"og:image:height"},"og:image:height"),(null==d?void 0:null===(t=d.imageSmall)||void 0===t?void 0:t.url)&&(0,i.jsx)("meta",{content:d.imageSmall.url,property:"og:image"},"og:imageSmall"),(null==d?void 0:null===(n=d.imageSmall)||void 0===n?void 0:n.width)&&(0,i.jsx)("meta",{content:Math.round(d.imageSmall.width),property:"og:image:width"},"og:imageSmall:width"),(null==d?void 0:null===(s=d.imageSmall)||void 0===s?void 0:s.height)&&(0,i.jsx)("meta",{content:Math.round(d.imageSmall.height),property:"og:image:height"},"og:imageSmall:height"),d.alt&&(0,i.jsx)("meta",{content:d.alt,property:"og:image:alt"},"og:image:alt"),(null==d?void 0:d.videoUrl)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{content:d.videoUrl,property:"og:video:url"},"og:video:url"),(0,i.jsx)("meta",{content:d.videoUrl,property:"og:video:secure_url"},"og:video:secure_url"),d.width&&(0,i.jsx)("meta",{content:d.width,property:"og:video:width"},"og:video:width"),d.height&&(0,i.jsx)("meta",{content:d.height,property:"og:video:height"},"og:video:height"),(0,i.jsx)("meta",{content:d.videoUrl,property:"twitter:player"},"twitter:player")]}),$&&(0,i.jsx)("meta",{content:$,property:"og:url"},"og:url"),H||q?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"robots",content:"noindex".concat(H?",nofollow":"")},"robots"),(0,i.jsx)("meta",{name:"googlebot",content:"noindex".concat(H?",nofollow":"")},"googlebot")]}):null,y?(0,i.jsx)("meta",{name:"rating",content:"adult"}):null,q||H||R?null:(0,i.jsx)("meta",{name:"robots",content:"max-image-preview:large"}),g&&g.map(function(e){var t=e.type,n=e.contentType,r=e.innerHTML;return(0,i.jsx)("script",{type:t,dangerouslySetInnerHTML:{__html:r}},n)}),$&&(0,i.jsx)("link",{rel:"canonical",href:$}),O&&O.map(function(e){var t=e.href,n=e.hrefLang;return(0,i.jsx)("link",{rel:"alternate",href:t,hrefLang:n},n)}),C&&(0,i.jsx)("link",{rel:"alternate",href:C,hrefLang:"x-default"}),!!(null==f?void 0:f.length)&&(0,i.jsx)("meta",{name:"keywords",content:f.join(", ")})]})]})};Y.defaultProps={description:void 0,image:{},title:void 0,schemas:void 0,statusCode:void 0,noIndex:!1,noIndexNoFollow:!1,keywords:[],contributor:{},isAdultContent:!1,children:void 0,seoServiceData:{},asset:void 0,assets:[],pageDescription:void 0}},16642:function(e,t,n){n.d(t,{FL:function(){return c},H2:function(){return o},Hf:function(){return s},M8:function(){return a},Rm:function(){return i},iN:function(){return u},ke:function(){return r}});var r="https://schema.org",i={IMAGE_OBJECT:"ImageObject",VIDEO_OBJECT:"VideoObject",AUDIO_OBJECT:"AudioObject",MUSIC_GROUP:"MusicGroup",MUSIC_RECORDING:"MusicRecording",PRODUCT:"Product",OFFER:"Offer",ORGANIZATION:"Organization",PERSON:"Person",THING:"Thing",SEARCH_ACTION:"SearchAction",WEB_SITE:"WebSite",BREADCRUMBSLIST:"BreadcrumbList",FAQPAGE:"FAQPage",HOWTO:"HowTo",HOWTOSTEP:"HowToStep",AGGREGATE_RATING:"AggregateRating"},o={ORGANIZATION:i.ORGANIZATION.toLocaleLowerCase(),WEB_SITE:i.WEB_SITE.toLocaleLowerCase(),FAQPAGE:i.FAQPAGE.toLocaleLowerCase(),HOWTO:i.HOWTO.toLocaleLowerCase()},a="noindex",s="noindex-nofollow",c="canonicalize",u="utm_source=schema&utm_medium=googleimages&utm_campaign=image"},89522:function(e,t,n){n.d(t,{KC:function(){return v}});var r=n(70865),i=n(96670),o=n(26297),a=n(39232),s=n(65532),c=n(37546),u=n(44297),l=n(96109),d=n(57858);n(2784);var p=n(78809),g=function(e){var t,n=e.asset,r=e.assetType,i=e.slugify,o=e.locale;if(null==n?void 0:n.isRexEditorial)return i({description:n.description});switch(r){case a.hv:return i({description:null==n?void 0:n.description});case a.pX:return i({description:!n.description&&n.description_language_map?null!==(t=n.description_language_map[o])&&void 0!==t?t:n.description_language_map[d.NZ]:n.description});case a.tn:case a.xF:case a.IK:return(null==n?void 0:n.slug)||i({description:null==n?void 0:n.title});default:return null}},m=function(e){var t=e.asset,n=e.getRoutePathProps,a=e.slugify,s=e.locale,l=(0,o.Z)(e,["asset","getRoutePathProps","slugify","locale"]),d=(0,u.Tp)(t),p=(0,c.Lr)(t),m=g({asset:p,slugify:a,assetType:d,locale:s});return n((0,r.Z)((0,i.Z)((0,r.Z)({},p),{item:t,assetType:d,slug:m}),l))},v=function(e){var t=e.asset,n=e.getRoutePathProps,i=void 0===n?l.r:n,a=(0,o.Z)(e,["asset","getRoutePathProps"]),c=(0,p.M)(),u=(0,s.PE)().locale;return m((0,r.Z)({asset:t,getRoutePathProps:i,slugify:c,locale:u},a))}},31294:function(e,t,n){n.d(t,{Q:function(){return o}});var r=n(48417),i=n(2784),o=function(){return{encodeSearchTerm:(0,i.useCallback)(function(e){return(0,r.U9)(e)},[]),decodeSearchTerm:(0,i.useCallback)(function(e){return(0,r.JF)(e)},[])}}},78809:function(e,t,n){n.d(t,{M:function(){return c}});var r=n(70865),i=n(96670),o=n(65532),a=n(42448),s=n(2784),c=function(){var e=(0,o.PE)().fullLocale;return(0,s.useCallback)(function(t){return(0,a.l)((0,i.Z)((0,r.Z)({},t),{locale:e}))},[e])}},97024:function(e,t,n){n.d(t,{JI:function(){return p},MJ:function(){return l},Wo:function(){return c},Ws:function(){return m},a$:function(){return u},jm:function(){return d}});var r=n(39232),i=n(18505),o=n(21770),a=n(27764),s=n(5632),c=function(){var e=(0,s.useRouter)().query[i.jS];return Number(void 0===e?1:e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultPageSize,n=void 0===t?10:t,r=(0,s.useRouter)().query[i.dp],a=void 0===r?n:r;return(0,o.k)(a)?Number(a):n},l=function(){var e=(0,s.useRouter)().query;return{endDate:e[i.BD],startDate:e[i.yZ]}},d=function(){return{orderBy:(0,s.useRouter)().query[i.qk]}},p=function(){var e,t=(0,s.useRouter)(),n=t.query,o=n[i.Tv],c=n[i.cb],u=t.asPath,l=(0,a.oY)(u),d=r.cp[c],p=(null===(e=l.match(a._g))||void 0===e?void 0:e[1])||o||r.k4,g=(0,a.N6)(l),m=o||d||g,v=(0,a.EV)(l,m),h=r.p_[m];return{assetType:p,assetSubType:v,fullAssetType:m,fullAssetTypeFromPath:g,editorialAssetType:h}},g=/^\/editorial/i,m=function(){var e=(0,s.useRouter)().asPath;return g.test(e)}},96109:function(e,t,n){n.d(t,{r:function(){return g}});var r,i=n(39232),o=n(24114),a=n(90856),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.slug,r="".concat(n,"-").concat(t),o="/".concat(i.k4,"-").concat(i.w5,"/").concat(r);return[o,o]},c=n(12355),u=n(47842);n(38398);var l=n(85208);(0,u.Z)({},i.xN,(r={},(0,u.Z)(r,l.Dx,"/".concat(i.xN)),(0,u.Z)(r,"category","/".concat(i.xN,"/[slug]")),(0,u.Z)(r,"subCategory","/".concat(i.xN,"/[slug]/[slug]")),r));var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.slug,r="create-".concat(n?"".concat(n,"-").concat(t):t),o="/".concat(i.xN,"/").concat(r);return[o,o]},p=n(28307),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.assetType,n=e.id,r=e.slug,u=e.link,l=e.permalink,g=e.isIllustration,m=e.isVector,v=e.description;switch(t){case i.pX:case i.FM:case i.cF:return(0,p.f0)({id:n,slug:r,permalink:l});case i.j0:case i.xF:case i.IK:case i.jr:return(0,a.o)({id:n,slug:r});case i.tn:return(0,c.I)({id:n,slug:r});case i.hv:return d({id:n,slug:r});case i.w5:return s({id:n,slug:r});case i.k4:case i.Y_:case i.gP:default:return(0,o.Q)({link:u,permalink:l,isIllustration:g,isVector:m,id:n,description:v})}}},24114:function(e,t,n){n.d(t,{Q:function(){return g}});var r=n(87394),i=n(39232),o=n(44297),a=n(42448),s=n(85208),c=n(31556),u=function(e){var t=e.isVector,n=e.isIllustration;return t?i.ox:n?i.X2:i.pV},l=function(e){var t=e.link,n=(0,r.Z)(t.split("/"),3),i=n[1],o=n[2];return{imageType:i,title:o,path:t,hrefQuery:{title:o}}},d=function(e){var t=e.permalink,n=u({isVector:e.isVector,isIllustration:e.isIllustration}),o=(0,r.Z)(t.split("/"),3),a=o[1],s=o[2],c=(0,r.Z)(a.split("-"),2)[1],l="".concat(i.k4,"-").concat(n),d="".concat(s,"-").concat(c);return{imageType:l,title:d,path:"/".concat(l,"/").concat(d)}},p=function(e){var t=e.id,n=e.description,r=(0,a.l)({description:n}),o="/".concat(i.gP,"/").concat(i.k4,"-").concat(i.gP,"/").concat(r,"-").concat(t);return[o,o]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.link,n=e.permalink,r=e.isIllustration,a=e.isVector,u=e.id,g=e.description;if(e.type===i.zo)return[t,t];if((0,o.EK)({id:u}))return p({id:u,description:g});if(!t&&!n)return[c.I$[s.Sd],c.I$[s.Sd]];var m=(n?d({permalink:n,isVector:a,isIllustration:r}):l({link:t})).path;return[m,m]}},21770:function(e,t,n){n.d(t,{k:function(){return r}});var r=function(e){return!Number.isNaN(Number.parseFloat(e))&&!Number.isNaN(+e)}},42448:function(e,t,n){n.d(t,{l:function(){return u}});var r=n(87394),i=n(38398),o=n(95324),a=/\w\.\w/,s=function(e){return e.indexOf("?")>=0},c=function(e){var t=e;if(a.test(e)){var n=e.indexOf("://")>0?e:"noop://".concat(e),o=(0,i.parse)(n);o.hostname&&(t=(0,r.Z)(o.hostname.split(".").slice(-2),1)[0])}return t},u=function(e){var t=e.description,n=e.locale,r=void 0===n?"en":n,i=e.slugLength,u=e.spaceChar,l=e.removeStopWords,d=void 0===l||l,p="".concat(void 0===t?"":t).split(/\s/).filter(function(e){var t,n;return t=e,n=d,t&&(!n||!o.O.en[t.toLowerCase()])&&(!s(t)||s(t)&&a.test(t))}).map(function(e){return c(e).toLocaleLowerCase(r).replace(/[.,\/#!$%\^&\*;:{}=\`~()]/g,"").trim()});return Array.from(new Set(p)).slice(0,void 0===i?7:i).join(void 0===u?"-":u)}}}]);
//# sourceMappingURL=72474-d66afb83cb137fde.js.map