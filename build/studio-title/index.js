(()=>{var e,t={84:(e,t,n)=>{"use strict";const r=window.wp.blocks;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const o=window.wp.element,a=window.wp.i18n;var s=n(184),i=n.n(s);const c=window.wp.coreData,v=window.wp.blockEditor,h=window.wp.components;function p(e){let{level:t,isPressed:n=!1}=e;const r={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return r.hasOwnProperty(t)?(0,o.createElement)(h.SVG,{width:"24",height:"24",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",isPressed:n},(0,o.createElement)(h.Path,{d:r[t]})):null}const u=[1,2,3,4,5,6],g={className:"block-library-heading-level-dropdown"};function d(e){let{selectedLevel:t,onChange:n}=e;return(0,o.createElement)(h.ToolbarDropdownMenu,{popoverProps:g,icon:(0,o.createElement)(p,{level:t}),label:(0,a.__)("Change heading level"),controls:u.map((e=>{{const r=e===t;return{icon:(0,o.createElement)(p,{level:e,isPressed:r}),label:(0,a.sprintf)((0,a.__)("Heading %d"),e),isActive:r,onClick(){n(e)},role:"menuitemradio"}}}))})}const m=JSON.parse('{"u2":"ls/studio-title"}'),f=window.React;var b;function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}(0,r.registerBlockType)(m.u2,{icon:{src:function(e){return f.createElement("svg",w({viewBox:"0 0 250 250",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg"},e),b||(b=f.createElement("path",{fill:"#FFF",d:"M0 0h250v250H0z"})),f.createElement("path",{d:"M173.1 94.5c-2.3-2.1-5.7-5.4-6-8.1-.5-4.3-6.5-7.8-14.2-8.3 0 0-1.3-3.4-1.5-9 0-.8-.8-1.4-1.6-1.1-2.1.6-4.7 3.2-8.5 15.4 0 0-4.8 2-7.8 7.9-5.9 11.4-2 18.1-10 25.9-10.3 9.8-29 17.2-33.5 46.1-.3 1.8-.6 4-1 6 0 .1 0 .3-.1.4-.8-1.1-1.5-2.4-2-3.7-3.8-9.6 2.1-21.6 4.8-26.3 2.9-5 6.2-9.6 9.9-13.8.6-.6 1.1-1.3 1.7-1.9 2.8-3.1 5.8-6.3 7.8-10.6 4-8.4 3.8-19.7-.7-29.5-4.4-9.6-11.8-16.2-16.9-20.4-2-1.6-4.9-1.3-6.5.7-1.6 2-1.3 4.9.7 6.6 7.1 5.7 11.6 11.1 14.3 17.1 3.3 7.2 3.6 15.7.8 21.6-1.5 3.1-3.8 5.6-6.3 8.4-.6.7-1.2 1.3-1.8 2-4.1 4.6-7.8 9.8-11 15.3-4.2 7.3-10.5 21.5-5.4 34.4 2.2 5.6 6.3 9.7 10.1 12.9 1.2 2.9 4.1 5 7.6 5h65.5c1.6 0 2.9-1.4 2.7-3-.4-4.1-3.2-6.3-8.6-8-1.6-.5-2.6-5.9-2.6-7.6 0-2.6 0-6.3-.1-10-.2-6.6 5.2-6.9 7.1-19.8 1.3-9.1-1.9-18.5-3.5-25.1-.2-1-.5-2.1-.6-3.3-.1-1.2-.1-2.3 0-3.3.2-1.3 1.2-2.3 2.5-2.4l9-.8c1.3-.4 2.9-1.2 3.8-2.8l2.4-4.4c.4-.8.2-1.8-.5-2.5zm-8.3-5.6c0 .9-.4 1.7-.8 1.7-.5 0-.8-.8-.8-1.7 0-.9.4-1.7.8-1.7s.8.7.8 1.7z",style:{strokeWidth:.528146},transform:"matrix(1.96087 0 0 1.82828 -122.687 -105.459)"}))}},edit:function(e){let{attributes:t,setAttributes:n,context:r}=e;const{textAlign:s,level:p,isLink:u,linkTarget:g,rel:m}=t,{postId:f,postType:b}=r,w=(0,c.useEntityProp)("postType",b,"title",f)[0],k=(0,c.useEntityProp)("postType",b,"link",f)[0],y=0===p?"p":`h${p}`,_=(0,v.useBlockProps)({className:i()({[`has-text-align-${s}`]:s})});let E=(0,o.createElement)(y,_,(0,a.__)("Title","ls-studio-blocks"));return b&&f&&(E=u?(0,o.createElement)("a",{href:k,target:g,rel:m,onClick:e=>e.preventDefault},(0,o.createElement)(y,l({},_,{dangerouslySetInnerHTML:{__html:w}}))):(0,o.createElement)(y,l({},_,{dangerouslySetInnerHTML:{__html:w}}))),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(v.BlockControls,{group:"block"},(0,o.createElement)(d,{selectedLevel:p,onChange:e=>n({level:e})}),(0,o.createElement)(v.AlignmentControl,{value:s,onChange:e=>{n({textAlign:e})}})),(0,o.createElement)(v.InspectorControls,null,(0,o.createElement)(h.PanelBody,{title:(0,a.__)("Link settings")},(0,o.createElement)(h.ToggleControl,{label:(0,a.__)("Make title a link"),onChange:()=>n({isLink:!u}),checked:u}),u&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(h.ToggleControl,{label:(0,a.__)("Open in new tab"),onChange:e=>n({linkTarget:e?"_blank":"_self"}),checked:"_blank"===g}),(0,o.createElement)(h.TextControl,{label:(0,a.__)("Link rel"),value:m,onChange:e=>n({rel:e})})))),E)},save:()=>null})},184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=l.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,l,o)=>{if(!n){var a=1/0;for(v=0;v<e.length;v++){for(var[n,l,o]=e[v],s=!0,i=0;i<n.length;i++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(s=!1,o<a&&(a=o));if(s){e.splice(v--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var v=e.length;v>0&&e[v-1][2]>o;v--)e[v]=e[v-1];e[v]=[n,l,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={211:0,875:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var l,o,[a,s,i]=n,c=0;if(a.some((t=>0!==e[t]))){for(l in s)r.o(s,l)&&(r.m[l]=s[l]);if(i)var v=i(r)}for(t&&t(n);c<a.length;c++)o=a[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(v)},n=globalThis.webpackChunkla_saphire_studio_blocks=globalThis.webpackChunkla_saphire_studio_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=r.O(void 0,[875],(()=>r(84)));l=r.O(l)})();