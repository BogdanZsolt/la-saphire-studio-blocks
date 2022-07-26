(()=>{"use strict";var e,r={2:()=>{const e=window.wp.blocks,r=window.wp.element,t=window.wp.i18n,o=window.wp.data,n=window.wp.coreData,c=window.wp.components,l=window.wp.blockEditor,s=(0,c.withNotices)((function(e,s){const i=(0,o.useSelect)((e=>e("core/editor").getCurrentPostType()),[]),a=(0,r.useRef)(),[p,u]=(0,n.useEntityProp)("postType",i,"meta"),d=p._ls_course_video,v=["video"];(0,r.useEffect)((()=>{a.current&&a.current.load()}),[]);const w=e=>{u({...p,_ls_course_video:e.url})},m=e=>{u({...p,_ls_course_video:e})};return(0,r.createElement)(r.Fragment,null,d&&(0,r.createElement)(l.BlockControls,null,(0,r.createElement)(l.MediaReplaceFlow,{mediaURL:d,allowedTypes:v,accept:"video/*",onSelect:w,onSelectURL:m,onError:r=>{e.removeAllNotices(),e.createErrorNotice(r)},notices:s}),(0,r.createElement)(c.ToolbarButton,{onClick:()=>{u({...p,_ls_course_video:""})}},(0,t.__)("Remove","kc-courses"))),(0,r.createElement)("figure",(0,l.useBlockProps)(),d&&(0,r.createElement)("video",{width:"100%",src:d,controls:!0,ref:a}),!d&&(0,r.createElement)(l.MediaPlaceholder,{icon:"admin-users",accept:"video/*",allowedTypes:v,onSelect:w,onSelectURL:m})))})),i=JSON.parse('{"u2":"ls/meta-video"}'),a=window.React;var p;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u.apply(this,arguments)}(0,e.registerBlockType)(i.u2,{icon:{src:function(e){return a.createElement("svg",u({viewBox:"0 0 250 250",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg"},e),p||(p=a.createElement("path",{fill:"#FFF",d:"M0 0h250v250H0z"})),a.createElement("path",{d:"M173.1 94.5c-2.3-2.1-5.7-5.4-6-8.1-.5-4.3-6.5-7.8-14.2-8.3 0 0-1.3-3.4-1.5-9 0-.8-.8-1.4-1.6-1.1-2.1.6-4.7 3.2-8.5 15.4 0 0-4.8 2-7.8 7.9-5.9 11.4-2 18.1-10 25.9-10.3 9.8-29 17.2-33.5 46.1-.3 1.8-.6 4-1 6 0 .1 0 .3-.1.4-.8-1.1-1.5-2.4-2-3.7-3.8-9.6 2.1-21.6 4.8-26.3 2.9-5 6.2-9.6 9.9-13.8.6-.6 1.1-1.3 1.7-1.9 2.8-3.1 5.8-6.3 7.8-10.6 4-8.4 3.8-19.7-.7-29.5-4.4-9.6-11.8-16.2-16.9-20.4-2-1.6-4.9-1.3-6.5.7-1.6 2-1.3 4.9.7 6.6 7.1 5.7 11.6 11.1 14.3 17.1 3.3 7.2 3.6 15.7.8 21.6-1.5 3.1-3.8 5.6-6.3 8.4-.6.7-1.2 1.3-1.8 2-4.1 4.6-7.8 9.8-11 15.3-4.2 7.3-10.5 21.5-5.4 34.4 2.2 5.6 6.3 9.7 10.1 12.9 1.2 2.9 4.1 5 7.6 5h65.5c1.6 0 2.9-1.4 2.7-3-.4-4.1-3.2-6.3-8.6-8-1.6-.5-2.6-5.9-2.6-7.6 0-2.6 0-6.3-.1-10-.2-6.6 5.2-6.9 7.1-19.8 1.3-9.1-1.9-18.5-3.5-25.1-.2-1-.5-2.1-.6-3.3-.1-1.2-.1-2.3 0-3.3.2-1.3 1.2-2.3 2.5-2.4l9-.8c1.3-.4 2.9-1.2 3.8-2.8l2.4-4.4c.4-.8.2-1.8-.5-2.5zm-8.3-5.6c0 .9-.4 1.7-.8 1.7-.5 0-.8-.8-.8-1.7 0-.9.4-1.7.8-1.7s.8.7.8 1.7z",style:{strokeWidth:.528146},transform:"matrix(1.96087 0 0 1.82828 -122.687 -105.459)"}))}},edit:s,save:()=>null})}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var c=t[e]={exports:{}};return r[e](c,c.exports,o),c.exports}o.m=r,e=[],o.O=(r,t,n,c)=>{if(!t){var l=1/0;for(p=0;p<e.length;p++){for(var[t,n,c]=e[p],s=!0,i=0;i<t.length;i++)(!1&c||l>=c)&&Object.keys(o.O).every((e=>o.O[e](t[i])))?t.splice(i--,1):(s=!1,c<l&&(l=c));if(s){e.splice(p--,1);var a=n();void 0!==a&&(r=a)}}return r}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[t,n,c]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={191:0,349:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,c,[l,s,i]=t,a=0;if(l.some((r=>0!==e[r]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(i)var p=i(o)}for(r&&r(t);a<l.length;a++)c=l[a],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(p)},t=globalThis.webpackChunkla_saphire_studio_blocks=globalThis.webpackChunkla_saphire_studio_blocks||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[349],(()=>o(2)));n=o.O(n)})();