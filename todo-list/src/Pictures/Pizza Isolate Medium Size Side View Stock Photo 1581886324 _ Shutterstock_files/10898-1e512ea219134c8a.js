(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10898],{86571:function(e,t,s){var i=s(3945),n=s(21846),a=s(88028),o=s(72344),l=s(94769);function r(e){var t=-1,s=null==e?0:e.length;for(this.clear();++t<s;){var i=e[t];this.set(i[0],i[1])}}r.prototype.clear=i,r.prototype.delete=n,r.prototype.get=a,r.prototype.has=o,r.prototype.set=l,e.exports=r},81207:function(e){e.exports=function(e,t,s,i){var n=-1,a=null==e?0:e.length;for(i&&a&&(s=e[++n]);++n<a;)s=t(s,e[n],n,e);return s}},45981:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},22218:function(e,t,s){var i=s(41225);e.exports=function(e,t){for(var s=e.length;s--;)if(i(e[s][0],t))return s;return -1}},1054:function(e){e.exports=function(e){return e}},34311:function(e,t,s){var i=s(81207),n=s(97329),a=s(11618),o=RegExp("['’]","g");e.exports=function(e){return function(t){return i(a(n(t).replace(o,"")),e,"")}}},51242:function(e,t,s){var i="object"==typeof s.g&&s.g&&s.g.Object===Object&&s.g;e.exports=i},13483:function(e,t,s){var i=s(60241)(Object.keys,Object);e.exports=i},83559:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},3945:function(e){e.exports=function(){this.__data__=[],this.size=0}},21846:function(e,t,s){var i=s(22218),n=Array.prototype.splice;e.exports=function(e){var t=this.__data__,s=i(t,e);return!(s<0)&&(s==t.length-1?t.pop():n.call(t,s,1),--this.size,!0)}},88028:function(e,t,s){var i=s(22218);e.exports=function(e){var t=this.__data__,s=i(t,e);return s<0?void 0:t[s][1]}},72344:function(e,t,s){var i=s(22218);e.exports=function(e){return i(this.__data__,e)>-1}},94769:function(e,t,s){var i=s(22218);e.exports=function(e,t){var s=this.__data__,n=i(s,e);return n<0?(++this.size,s.push([e,t])):s[n][1]=t,this}},37772:function(e,t,s){var i=s(51242),n="object"==typeof self&&self&&self.Object===Object&&self,a=i||n||Function("return this")();e.exports=a},75304:function(e){var t="\ud800-\udfff",s="\\u2700-\\u27bf",i="a-z\\xdf-\\xf6\\xf8-\\xff",n="A-Z\\xc0-\\xd6\\xd8-\\xde",a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="['’]",l="["+a+"]",r="["+i+"]",c="[^"+t+a+"\\d+"+s+i+n+"]",u="(?:\ud83c[\udde6-\uddff]){2}",d="[\ud800-\udbff][\udc00-\udfff]",m="["+n+"]",f="(?:"+r+"|"+c+")",p="(?:"+o+"(?:d|ll|m|re|s|t|ve))?",x="(?:"+o+"(?:D|LL|M|RE|S|T|VE))?",h="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",g="[\\ufe0e\\ufe0f]?",v="(?:\\u200d(?:"+["[^"+t+"]",u,d].join("|")+")"+g+h+")*",I="(?:"+["["+s+"]",u,d].join("|")+")"+(g+h+v),b=RegExp([m+"?"+r+"+"+p+"(?="+[l,m,"$"].join("|")+")","(?:"+m+"|"+c+")+"+x+"(?="+[l,m+f,"$"].join("|")+")",m+"?"+f+"+"+p,m+"+"+x,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",I].join("|"),"g");e.exports=function(e){return e.match(b)||[]}},97329:function(e,t,s){var i=s(1054);e.exports=function(e){return null==e?"":i(e)}},41225:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},23059:function(e){e.exports=function(e){return e}},15125:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},79857:function(e,t,s){var i=s(34311)(function(e,t,s){return e+(s?"-":"")+t.toLowerCase()});e.exports=i},90249:function(e,t,s){var i=s(60241)(Object.keys,Object);e.exports=i},11618:function(e,t,s){var i=s(45981),n=s(83559),a=s(66188),o=s(75304);e.exports=function(e,t,s){return(e=a(e),void 0===(t=s?void 0:t))?n(e)?o(e):i(e):e.match(t)||[]}},95683:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return N},default:function(){return B}});var i=s(70865),n=s(96670),a=s(52322),o=s(14527),l=s(93968),r=s(52383),c=s(32213),u=s(66358),d=s(52908),m=s(42978),f=s(26051),p=s(85220),x=s(44297),h=s(93976),g=s(87394),v=s(81740),I=s(20567),b=s(65532),j=s(9009),S=s(70314),y=s.n(S),A=s(3255),w=y()().publicRuntimeConfig.apiEndpoints.studioapi,Z=function(e){var t=e.asset.id,s=e.relatedAssetsKey,a=(0,b.PE)().locale,o=s===I.om.VISUALLY_SIMILAR,l=s===I.om.RELATED_VIDEO,r=s===I.om.SAME_MODEL,c=s===I.om.IMAGE_COLLECTION,u={imageId:t,include:"categories,contributor.categories,contained-in-collections.categories,same-model.categories,same-artist.categories,visually-similar.categories,visually-similar-videos.categories,image-scores,contributor-settings","page[contained-in-collections][size]":I.SG,"page[contained-in-collections-items][size]":I.Jf,"page[visually-similar][size]":o?I.Dv-I.VN:I.Dv,"page[visually-similar-videos][size]":I.Kd,"page[same-model][offset]":r?I.VN:0,"page[visually-similar-videos][offset]":l?I.VN:0,"page[visually-similar][offset]":o?I.VN:0,language:a,recordActivity:!0},d=(0,v.gJ)({queryParams:u}).formattedUrl,m=function(e){var t=e.containedInCollections,s=void 0===t?[]:t,a=(0,g.Z)(s,1)[0],o=(void 0===a?{}:a).meta,l=(void 0===o?{}:o).items;return(0,x.cv)({assetGroups:[null==e?void 0:e.visuallySimilarVideos]}),(0,n.Z)((0,i.Z)({},e),{containedInCollections:s.length?(0,n.Z)((0,i.Z)({},s[0]),{meta:{items:c?l.slice(0,I.VN+1):l}}):{}})};return{asset:(0,A.ZP)(d,function(e){return fetch("".concat(w).concat(e),{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return(0,j.O)(e.data)}).then(function(e){return m(e)})})}},C=s(94909),_=s(51876),L=s(95491),P=s(58370),T=s(75),M=s(20701),z=s(38624),R=s(5632),V=s(59877),G=s(2784),O=function(e){var t=e.t,s=e.collectionTitle,i=e.contributorName,n=e.description,a=e.id,o=e.imageType;return{assetsFromSameCollection:t("assets_same_collection"),containedInCollectionsTitle:(0,z.v)(t,"image:contained_in_collection_title",{CONTRIBUTOR:i,COLLECTION_TITLE:s}),generateMoreButton:t("generate:generate_more"),metaDescription:t("image:search_meta_description",{SEARCH_TERM:n}),metaTitle:t("image:seo_title_".concat(o),{DESCRIPTION:n,ASSET_ID:a}),moreGeneratedTitle:t("generate:more_generated_title"),offsetPurchaseDisclaimer:t("offset_purchase_disclaimer"),personalizedImagesButton:t("common:actions_see_all"),personalizedImagesTitle:t("recommended_for_you"),relatedKeywordsTitle:t("image:idp_keywords_title"),relatedSectionButton:t("common:actions_see_all"),rotation3dInfo:t("image:3d_rotate_info"),sameArtistAssetsTitle:t("image:same_artist_title"),sameModelTitle:t("image:same_model_title"),visuallySimilarTitle:t("image:similar_images_title"),visuallySimilarVideosTitle:t("image:similar_videos_title")}},k=function(e){var t=e.asset,s=e.relatedAssets,c=e.relatedAssetsToUse,u=e.relatedAssetsKey,g=e.relatedAssetsPathProps,v=e.remainingRelatedAssets,I=e.schemas,b=e.canOpenDrawerOnLoad,j=e.seoServiceData,S=e.reduceRelatedAssetsForBots,y=t.containedInCollections,A=void 0===y?{}:y,w=A.title,L=A.id,z=A.meta,k=(void 0===z?{}:z).items,E=t.contributor,N=t.id,B=t.imageType;(0,h.P)({asset:t});var D=(0,R.useRouter)().locale,F=(0,G.useRef)({}),H=(0,V.$G)(T.Cgc).t,J=(0,f.G)({asset:t,language:D}),K=(0,M.gL)(J,D,t.descriptionLanguageMap),W=(0,p._N)({contributor:E}).name,U=(0,G.useMemo)(function(){return O({t:H,contributorName:W,collectionTitle:w,description:K,id:N,imageType:B})},[H,W,w,K,N,B]),$=Z({asset:t,relatedAssetsKey:u}).data,Y=void 0===$?t:$,q=Y.sameModel,Q=Y.sameArtist,X=Y.visuallySimilar,ee=Y.visuallySimilarVideos,et=Y.similarGeneratedImages,es=(0,x.PD)(t),ei=es&&(null==k?void 0:k.length),en=(0,_._6)({asset:t,page:_.lB}),ea=en.data,eo=en.isLoading,el=!!((null==q?void 0:q.length)||!S&&(null==Q?void 0:Q.length)>1||(null==X?void 0:X.length)||(null==ee?void 0:ee.length)||(null==et?void 0:et.length)||(null==ea?void 0:ea.length))&&!es,er=(0,C.d)(),ec=es&&!!(null==X?void 0:X.length)&&!er,eu=ei||el,ed=(0,G.useMemo)(function(){return(0,a.jsxs)(a.Fragment,{children:[ec&&(0,a.jsx)(m.b2,{asset:Y,collectionId:L,collectionItems:k===s?v:k,gridSpacing:4,labels:U,personalizedImages:ea,sameArtistAssets:S?void 0:Q,sameModel:q,showSimilarVideos:!S,visuallySimilar:X,visuallySimilarMaxRows:2,visuallySimilarVideos:ee,similarGeneratedImages:et,withInlineCta:!es,isLoadingPersonalizedImages:eo}),eu&&!ec&&(0,a.jsx)(l.I,{asset:Y,collectionId:L,collectionItems:k===s?v:k,gridSpacing:4,labels:U,personalizedImages:ea,sameArtistAssets:S?void 0:Q,sameModel:q,showSimilarVideos:!S,visuallySimilar:X,visuallySimilarMaxRows:2,visuallySimilarVideos:ee,similarGeneratedImages:et,withInlineCta:!es,isLoadingPersonalizedImages:eo})]})},[ec,eu,Y,L,k,s,v,U,ea,S,Q,q,X,ee,et,es,eo]);return(0,a.jsx)(d.j.Provider,{value:F,children:(0,a.jsx)(o.O,(0,n.Z)((0,i.Z)({},e),{canOpenDrawerOnLoad:b,getSearchTermPathProps:P.J1,RelatedSections:ed,RelatedSectionsSkeleton:eu?r.z:function(){return null},relatedAssetsToUse:c,relatedAssetsPathProps:g,schemas:I,translatedLabels:U,translationNameSpace:T.Cgc,seoServiceData:void 0===j?{isSeoServiceActive:!1}:j}))})},E=(0,c.$)(k);k.defaultProps={asset:{containedInCollections:{metaItems:[],title:""},sameArtist:[],sameModel:[],visuallySimilar:[],visuallySimilarVideos:[],similarGeneratedImages:[]},relatedAssets:[],relatedAssetsKey:"",relatedAssetsPathProps:["",""],relatedAssetsToUse:[],schemas:[],canOpenDrawerOnLoad:!1,reduceRelatedAssetsForBots:!1},k.defaultProps=E.defaultProps,E.analyticsData={pageType:u.ghx},E.layout={type:L.t};var N=!0,B=E},93968:function(e,t,s){"use strict";s.d(t,{I:function(){return Z}});var i=s(70865),n=s(26297),a=s(52322),o=s(44091),l=s(52383),r=s(56100),c=s(9390),u=s(66358),d=s(44297),m=s(43110),f=s(776),p=s(58370),x=s(19462),h=s(36888),g=s(8740),v="".concat(u.jeg," - personalizedImages"),I="".concat(u.jeg," - similarImages"),b="".concat(u.jeg," - sameModel"),j="".concat(u.jeg," - moreFromThisArtist"),S="".concat(u.jeg," - sameCollection"),y="".concat(u.jeg," - similarVideoClips"),A="".concat(u.jeg," - moreAI"),w=(0,g.ZL)()(function(e){return{bold:{"&&":{fontWeight:e.tokens.fontWeight.bold}}}}),Z=function(e){var t,s,g=e.asset,Z=e.collectionId,C=e.collectionItems,_=e.labels,L=e.personalizedImages,P=e.sameModel,T=e.showSimilarVideos,M=e.sameArtistAssets,z=e.visuallySimilar,R=e.visuallySimilarMaxRows,V=e.visuallySimilarVideos,G=e.similarGeneratedImages,O=e.withInlineCta,k=e.isLoadingPersonalizedImages,E=(0,n.Z)(e,["asset","collectionId","collectionItems","labels","personalizedImages","sameModel","showSimilarVideos","sameArtistAssets","visuallySimilar","visuallySimilarMaxRows","visuallySimilarVideos","similarGeneratedImages","withInlineCta","isLoadingPersonalizedImages"]),N=g.id,B=g.contributor,D=g.releases,F=g.channels,H=w(),J=H.classes,K=H.cx,W=(0,h.bo)().classes,U=_.assetsFromSameCollection,$=_.containedInCollectionsTitle,Y=_.relatedSectionButton,q=_.visuallySimilarVideosTitle,Q=(0,p.pB)(N),X=(0,p.uw)(N),ee=(0,p.c8)(N),et=(0,p.hf)({ids:D&&D.join(","),imageId:N}),es=(0,x.wo)({contributor:B,id:Z}),ei=(0,d.PD)({channels:F}),en=null===(t=(0,m.jy)())||void 0===t?void 0:null===(s=t.data)||void 0===s?void 0:s.id,ea=(0,d.f8)(g);return(0,a.jsxs)(a.Fragment,{children:[!ei&&!ea&&(0,a.jsx)(f.Mp,{value:I,children:(0,a.jsx)(o.Z,(0,i.Z)({assets:z,listId:u.xrF,buttonLabel:_.relatedSectionButton,pathProps:Q,title:_.visuallySimilarTitle,maxRows:R,withInlineCta:O},E))}),en&&(0,a.jsx)(function(){return k?(0,a.jsx)(l.z,{}):(0,a.jsx)(f.Mp,{value:v,children:(0,a.jsx)(o.Z,(0,i.Z)({maxRows:2,listId:u.syA,title:_.personalizedImagesTitle,assets:L,buttonLabel:_.personalizedImagesButton,pathProps:ee,withInlineCta:O},E))})},{}),(0,a.jsx)(f.Mp,{value:A,children:(0,a.jsx)(o.Z,(0,i.Z)({assets:G,listId:u.uJS,buttonLabel:_.generateMoreButton,pathProps:X,title:_.moreGeneratedTitle,withInlineCta:O},E))}),(0,a.jsx)(f.Mp,{value:S,children:(0,a.jsx)(o.Z,(0,i.Z)({title:O?U:(0,a.jsxs)(a.Fragment,{children:[$.preLinkLabel,(0,a.jsx)(c.r,{className:K(W.buttonAnchor,J.bold),href:es[0],linkAs:es[1],underline:!0,children:$.linkLabel}),$.postLinkLabel]}),pathProps:es,assets:C,listId:u.JG2,buttonLabel:Y,withInlineCta:O},E))}),(0,a.jsx)(f.Mp,{value:b,children:(0,a.jsx)(o.Z,(0,i.Z)({assets:P,listId:u.WQA,buttonLabel:_.relatedSectionButton,pathProps:et,title:_.sameModelTitle,withInlineCta:O},E))}),(0,a.jsx)(f.Mp,{value:j,children:(0,a.jsx)(r.Y,(0,i.Z)({asset:g,listId:u.Ht8,collectionId:Z,buttonLabel:_.relatedSectionButton,sameArtistAssets:M,title:_.sameArtistAssetsTitle,withInlineCta:O},E))}),T&&(0,a.jsx)(f.Mp,{value:y,children:(0,a.jsx)(o.Z,(0,i.Z)({assets:V,listId:u.GHs,title:q,withInlineCta:O,showAssetTypeIcon:!0},E))})]})};Z.defaultProps={asset:{},collectionId:"",collectionItems:[],labels:{},personalizedImages:[],sameArtistAssets:[],sameModel:[],showSimilarVideos:!1,visuallySimilar:[],visuallySimilarMaxRows:2,visuallySimilarVideos:[],withInlineCta:!1,isLoadingPersonalizedImages:!0}},44091:function(e,t,s){"use strict";s.d(t,{Z:function(){return y}});var i=s(70865),n=s(96670),a=s(87394),o=s(52322),l=s(41075),r=s(67550),c=s(83249),u=s(64618),d=s(83303),m=s(4418),f=s(9390),p=s(66358),x=s(44297),h=s(776),g=s(58370),v=s(68138),I=s(8740),b=s(75457),j=(0,I.ZL)()(function(e){var t=e.tokens.spacing;return{root:{marginBottom:t.xl},header:{marginBottom:t.base}}}),S=(0,g.e9)(),y=function(e){var t=e.assets,s=e.buttonLabel,g=e.gridSpacing,v=e.maxRows,I=e.pathProps,S=e.showAssetTypeIcon,y=e.title,A=e.listId,w=e.withInlineCta,Z=e.useCssGrid,C=j().classes,_=(0,h.wU)(),L=(0,d.pb)(t),P=L.isGridEmpty,T=L.isGridLoading,M=(0,x.J$)(t),z=(0,a.Z)(I,2),R=z[0],V=z[1],G=!!s&&!!R,O={href:R,linkAs:V},k="".concat(_,".").concat(p.NTm),E="non-string-mock";return"string"==typeof y&&(E=y.replace(/ /g,"-")),!P&&M&&(0,o.jsxs)(l.ZP,{id:"related-images-section","data-automation":E,container:!0,className:C.root,children:[(0,o.jsxs)(l.ZP,{container:!0,className:C.header,children:[(0,o.jsx)(l.ZP,{item:!0,xs:w?6:12,children:(0,o.jsx)(r.Z,{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"100%",children:(0,o.jsx)(b.N,{title:y,isGridLoading:T})})}),G&&w&&(0,o.jsx)(l.ZP,{item:!0,xs:6,children:(0,o.jsx)(r.Z,{display:"flex",alignItems:"center",justifyContent:"flex-end",height:"100%",children:(0,o.jsx)(c.Z,(0,n.Z)((0,i.Z)({clickAnalyticsLabel:k,color:"primary",component:f.r,size:"medium",rel:"nofollow",variant:"outlined","data-automation":y},O),{children:s}))})})]}),(0,o.jsx)(u.MosaicAssetGridWithViews,{assets:t,listId:A,hasMaxWidth:!0,maxRows:v,withLoadingSkeletons:!0,numOfSkeletonRows:v,spacing:g,hasMobileScroll:!0,showAssetTypeIcon:S,xl:3,useCssGrid:Z}),G&&!w&&(0,o.jsx)(r.Z,{display:"flex",justifyContent:"center",width:"100%",children:(0,o.jsx)(m.Y,(0,n.Z)((0,i.Z)({label:s,trackAnalytics:{section:_,label:p.NTm}},O),{mt:4,dataOptimize:"related-assets"}))})]})};y.defaultProps={assets:[],buttonLabel:"",gridSpacing:v.gP,maxRows:2,pathProps:S,showAssetTypeIcon:!1,withInlineCta:!1,useCssGrid:!1}},52383:function(e,t,s){"use strict";s.d(t,{z:function(){return a}});var i=s(52322),n=s(21647),a=function(){return(0,i.jsx)(n.Z,{width:"100%",height:"400px",variant:"rounded",sx:{mb:7}})}},56100:function(e,t,s){"use strict";s.d(t,{Y:function(){return u}});var i=s(70865),n=s(26297),a=s(52322),o=s(44297),l=s(19462),r=s(2784),c=s(44091),u=function(e){var t=e.asset,s=e.collectionId,u=e.sameArtistAssets,d=e.withInlineCta,m=(0,n.Z)(e,["asset","collectionId","sameArtistAssets","withInlineCta"]),f=t.contributor,p=t.keywords,x=(0,o.OP)({asset:t}),h=(0,o.Tp)(t);(0,r.useMemo)(function(){return(0,o.cv)({assetGroups:[u]})},[u]);var g=(0,r.useMemo)(function(){return u.filter(function(e){return(0,o.OP)({asset:e})!==x})},[x,u]),v=(0,l.wo)((0,i.Z)({contributor:f,id:s,subPage:h},(null==p?void 0:p.length)?{query:{searchterm:p[0]}}:{}));return(0,a.jsx)(c.Z,(0,i.Z)({assets:g,pathProps:v,showAssetTypeIcon:!0,withInlineCta:d},m))};u.defaultProps={asset:{},sameArtistAssets:[],withInlineCta:!1}},75457:function(e,t,s){"use strict";s.d(t,{N:function(){return o}});var i=s(52322),n=s(62197),a=s(21647),o=function(e){var t=e.isGridLoading,s=e.title;return(0,i.jsx)(n.Z,{variant:"h5",component:"h2",children:s||t&&(0,i.jsx)(a.Z,{variant:"text"})})};o.defaultProps={isGridLoading:!0}},32213:function(e,t,s){"use strict";s.d(t,{$:function(){return c}});var i=s(70865),n=s(26297),a=s(52322),o=s(97599),l=function(e){var t=e.error,s=e.pageHandledStatusCode,l=e.statusCode,r=e.Component,c=e.withSearchBar,u=(0,n.Z)(e,["error","pageHandledStatusCode","statusCode","Component","withSearchBar"]);return l&&!s?(0,a.jsx)(o.F,{error:t,statusCode:parseInt(l,10),withSearchBar:c}):(0,a.jsx)(r,(0,i.Z)({},u))},r=Error("Return the error in the getServerSideProps to get root cause in lower environments.");l.defaultProps={error:r,withSearchBar:!0,statusCode:null};var c=function(e){return function(t){return(0,a.jsx)(l,(0,i.Z)({Component:e},t))}}},42978:function(e,t,s){"use strict";s.d(t,{b2:function(){return G}});var i,n=s(52322),a=s(62021),o=s(70865),l=s(93968),r=function(e){var t=e.initialProps;return(0,n.jsx)(l.I,(0,o.Z)({},t))},c=s(47842),u=s(88849),d=s(2784),m=s(26297),f=s(44091),p=s(52383),x=s(56100),h=s(9390),g=s(66358),v=s(44297),I=s(43110),b=s(776),j=s(58370),S=s(19462),y=s(36888),A=s(8740),w="".concat(g.jeg," - personalizedImages"),Z="".concat(g.jeg," - similarImages"),C="".concat(g.jeg," - sameModel"),_="".concat(g.jeg," - moreFromThisArtist"),L="".concat(g.jeg," - sameCollection"),P="".concat(g.jeg," - similarVideoClips"),T="".concat(g.jeg," - moreAI"),M=(0,A.ZL)()(function(e){return{bold:{"&&":{fontWeight:e.tokens.fontWeight.bold}}}}),z=function(e){var t,s,i=e.asset,a=e.collectionId,l=e.collectionItems,r=e.labels,c=e.personalizedImages,u=e.sameModel,d=e.showSimilarVideos,A=e.sameArtistAssets,z=e.visuallySimilar,R=e.visuallySimilarMaxRows,V=e.visuallySimilarVideos,G=e.similarGeneratedImages,O=e.withInlineCta,k=e.isLoadingPersonalizedImages,E=(0,m.Z)(e,["asset","collectionId","collectionItems","labels","personalizedImages","sameModel","showSimilarVideos","sameArtistAssets","visuallySimilar","visuallySimilarMaxRows","visuallySimilarVideos","similarGeneratedImages","withInlineCta","isLoadingPersonalizedImages"]),N=i.id,B=i.contributor,D=i.releases,F=i.channels,H=M(),J=H.classes,K=H.cx,W=(0,y.bo)().classes,U=r.assetsFromSameCollection,$=r.containedInCollectionsTitle,Y=r.relatedSectionButton,q=r.visuallySimilarVideosTitle,Q=(0,j.pB)(N),X=(0,j.uw)(N),ee=(0,j.c8)(N),et=(0,j.hf)({ids:D&&D.join(","),imageId:N}),es=(0,S.wo)({contributor:B,id:a}),ei=(0,v.PD)({channels:F}),en=null===(t=(0,I.jy)())||void 0===t?void 0:null===(s=t.data)||void 0===s?void 0:s.id,ea=(0,v.f8)(i);return(0,n.jsxs)(n.Fragment,{children:[!ea&&(0,n.jsx)(b.Mp,{value:Z,children:(0,n.jsx)(f.Z,(0,o.Z)({assets:z,listId:g.xrF,buttonLabel:r.relatedSectionButton,pathProps:Q,title:r.visuallySimilarTitle,maxRows:R,withInlineCta:O},E))}),!ei&&en&&(0,n.jsx)(function(){return k?(0,n.jsx)(p.z,{}):(0,n.jsx)(b.Mp,{value:w,children:(0,n.jsx)(f.Z,(0,o.Z)({maxRows:2,listId:g.syA,title:r.personalizedImagesTitle,assets:c,buttonLabel:r.personalizedImagesButton,pathProps:ee,withInlineCta:O},E))})},{}),!ei&&(0,n.jsx)(b.Mp,{value:T,children:(0,n.jsx)(f.Z,(0,o.Z)({assets:G,listId:g.uJS,buttonLabel:r.generateMoreButton,pathProps:X,title:r.moreGeneratedTitle,withInlineCta:O},E))}),(0,n.jsx)(b.Mp,{value:L,children:(0,n.jsx)(f.Z,(0,o.Z)({title:O?U:(0,n.jsxs)(n.Fragment,{children:[$.preLinkLabel,(0,n.jsx)(h.r,{className:K(W.buttonAnchor,J.bold),href:es[0],linkAs:es[1],underline:!0,children:$.linkLabel}),$.postLinkLabel]}),pathProps:es,assets:l,listId:g.JG2,buttonLabel:Y,withInlineCta:O},E))}),!ei&&(0,n.jsx)(b.Mp,{value:C,children:(0,n.jsx)(f.Z,(0,o.Z)({assets:u,listId:g.WQA,buttonLabel:r.relatedSectionButton,pathProps:et,title:r.sameModelTitle,withInlineCta:O},E))}),!ei&&(0,n.jsx)(b.Mp,{value:_,children:(0,n.jsx)(x.Y,(0,o.Z)({asset:i,listId:g.Ht8,collectionId:a,buttonLabel:r.relatedSectionButton,sameArtistAssets:A,title:r.sameArtistAssetsTitle,withInlineCta:O},E))}),!ei&&d&&(0,n.jsx)(b.Mp,{value:P,children:(0,n.jsx)(f.Z,(0,o.Z)({assets:V,listId:g.GHs,title:q,withInlineCta:O,showAssetTypeIcon:!0},E))})]})};z.defaultProps={asset:{},collectionId:"",collectionItems:[],labels:{},personalizedImages:[],sameArtistAssets:[],sameModel:[],showSimilarVideos:!1,visuallySimilar:[],visuallySimilarMaxRows:2,visuallySimilarVideos:[],withInlineCta:!1,isLoadingPersonalizedImages:!0};var R={flagID:"DCVR-413-similar-assets-on-offset-adp",id:"DCVR-413",name:"Similar assets on Offset ADP",treatments:(i={},(0,c.Z)(i,u.NM,function(e){var t,s=e.experiment,i=e.initialProps;return(0,d.useEffect)(function(){s.recordImpression()},[]),(null===(t=i.collectionItems)||void 0===t?void 0:t.length)?(0,n.jsx)(r,{initialProps:i}):null}),(0,c.Z)(i,u.vG,function(e){var t=e.experiment,s=e.initialProps;return(0,d.useEffect)(function(){t.recordImpression()},[]),(0,n.jsx)(z,(0,o.Z)({},s))}),(0,c.Z)(i,u._Z,function(e){var t=e.experiment,s=e.initialProps;return(0,d.useEffect)(function(){t.recordImpression()},[]),(0,n.jsx)(z,(0,o.Z)({},s))}),i)},V=function(){return null},G=function(e){return(0,n.jsx)(a.K,{config:R,initialProps:e,Portal:r,SkeletonLoader:V})}},38624:function(e,t,s){"use strict";s.d(t,{v:function(){return o}});var i=s(70865),n=s(87394),a=":TOKEN;",o=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=e(t,(0,i.Z)({OPEN_TAG:a,CLOSE_TAG:a},s)),l=(0,n.Z)(o.split(a),3);return{preLinkLabel:l[0],linkLabel:l[1],postLinkLabel:l[2]}}},96812:function(e){var t="[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+",s="\\x5c[\\x00-\\x7f]",i="("+t+"|\\x5b([^\\x0d\\x5b-\\x5d\\x80-\\xff]|"+s+")*\\x5d)",n="("+t+"|\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]|"+s+")*\\x22)";e.exports=n+"(\\x2e"+n+")*\\x40"+i+"(\\x2e"+i+")+"}}]);
//# sourceMappingURL=10898-1e512ea219134c8a.js.map