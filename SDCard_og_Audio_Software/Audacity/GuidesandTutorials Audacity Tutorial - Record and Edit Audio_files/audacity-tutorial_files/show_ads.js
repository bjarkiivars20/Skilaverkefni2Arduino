(function(){var f=!0,h=null,k=!1,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},l=function(a,b,c){l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return l.apply(h,arguments)};var m=(new Date).getTime();var p=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ca=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,da=function(a,b){if(!a)return b;var c=a.match(ca);return c?c[0]:b};var ea=p("0.15"),fa=p("0.001"),ga=p("0.5");var r=function(){return"r20130409"},ja=/^true$/.test("false")?f:k,ka=/^true$/.test("false")?f:k;var la=function(){return da("","pagead2.googlesyndication.com")};var ma=/&/g,na=/</g,oa=/>/g,pa=/\"/g,t={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},v={"'":"\\'"};var w=window,qa,ra=h,x=document.getElementsByTagName("script");x&&x.length&&(ra=x[x.length-1].parentNode);qa=ra;la();var sa=function(a){var b=y,c;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(h,b[c],c,b)},z=function(a){return!!a&&"function"==typeof a&&!!a.call},ta=function(a,b){if(!(2>arguments.length))for(var c=1,e=arguments.length;c<e;++c)a.push(arguments[c])};function ua(a,b){a.addEventListener?a.addEventListener("load",b,k):a.attachEvent&&a.attachEvent("onload",b)}
var va=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return a[Math.floor(c/b*a.length)]}return h},wa=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return k}};var xa=h,ya=function(){if(!xa){for(var a=window,b=a,c=0;a!=a.parent;)if(a=a.parent,c++,wa(a))b=a;else break;xa=b}return xa};var A,B=function(a){this.c=[];this.b=a||window;this.a=0;this.d=h},za=function(a,b){this.l=a;this.i=b};B.prototype.n=function(a,b){0==this.a&&0==this.c.length&&(!b||b==window)?(this.a=2,this.f(new za(a,window))):this.g(a,b)};B.prototype.g=function(a,b){this.c.push(new za(a,b||this.b));Aa(this)};B.prototype.o=function(a){this.a=1;a&&(this.d=this.b.setTimeout(l(this.e,this),a))};B.prototype.e=function(){1==this.a&&(this.d!=h&&(this.b.clearTimeout(this.d),this.d=h),this.a=0);Aa(this)};B.prototype.p=function(){return f};
B.prototype.nq=B.prototype.n;B.prototype.nqa=B.prototype.g;B.prototype.al=B.prototype.o;B.prototype.rl=B.prototype.e;B.prototype.sz=B.prototype.p;var Aa=function(a){a.b.setTimeout(l(a.m,a),0)};B.prototype.m=function(){if(0==this.a&&this.c.length){var a=this.c.shift();this.a=2;a.i.setTimeout(l(this.f,this,a),0);Aa(this)}};B.prototype.f=function(a){this.a=0;a.l()};
var Ba=function(a){try{return a.sz()}catch(b){return k}},Ca=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&Ba(a)&&z(a.nq)&&z(a.nqa)&&z(a.al)&&z(a.rl)},Da=function(){if(A&&Ba(A))return A;var a=ya(),b=a.google_jobrunner;return Ca(b)?A=b:a.google_jobrunner=A=new B(a)},Ea=function(a,b){Da().nq(a,b)},Fa=function(a,b){Da().nqa(a,b)};var Ga=/MSIE [2-7]|PlayStation|Gecko\/20090226/i,Ha=/Android|Opera/;var Ia=function(a,b,c){c||(c=ka?"https":"http");return[c,"://",a,b].join("")};var Ja=function(){},La=function(a,b,c){switch(typeof b){case "string":Ka(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==h){c.push("null");break}if(b instanceof Array){var e=b.length;c.push("[");for(var d="",g=0;g<e;g++)c.push(d),La(a,b[g],c),d=",";c.push("]");break}c.push("{");e="";for(d in b)b.hasOwnProperty(d)&&(g=b[d],"function"!=typeof g&&(c.push(e),Ka(d,c),c.push(":"),La(a,g,c),e=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Ma={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Na=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ka=function(a,b){b.push('"');b.push(a.replace(Na,function(a){if(a in Ma)return Ma[a];var b=a.charCodeAt(0),d="\\u";16>b?d+="000":256>b?d+="00":4096>b&&(d+="0");return Ma[a]=d+b.toString(16)}));b.push('"')};var C="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_output google_ad_override google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_bid google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_num_radlinks google_num_radlinks_per_unit google_num_slots_to_rotate google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_previous_watch google_previous_searches google_referrer_url google_region google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_sc_id google_scs google_sui google_skip google_tag_info google_targeting google_tdsma google_tfs google_tl google_ui_features google_ui_version google_video_doc_id google_video_product_type google_with_pyv_ads google_yt_pt google_yt_up".split(" ");var Oa=/\.((google(|groups|mail|images|print))|gmail)\./,Qa=function(a){var b=Oa.test(a.location.host);return!(!a.postMessage||!a.localStorage||!a.JSON||b)};var Ra=function(a){this.b=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{}});this.j=a.google_iframe_oncopy},Sa;var E="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){w.location.replace(h)}}";
/[&<>\"]/.test(E)&&(-1!=E.indexOf("&")&&(E=E.replace(ma,"&amp;")),-1!=E.indexOf("<")&&(E=E.replace(na,"&lt;")),-1!=E.indexOf(">")&&(E=E.replace(oa,"&gt;")),-1!=E.indexOf('"')&&(E=E.replace(pa,"&quot;")));Sa=E;Ra.prototype.set=function(a,b){this.j.handlers[a]=b;this.b.addEventListener&&!/MSIE/.test(navigator.userAgent)&&this.b.addEventListener("load",l(this.k,this,a),k)};Ra.prototype.k=function(a){a=this.b.document.getElementById(a);var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()};function Ta(){var a=F,b=F.document,c=a.google_ad_width,e=a.google_ad_height;if(a.top==a)return k;var d=b.documentElement;if(c&&e){var g=1,n=1;a.innerHeight?(g=a.innerWidth,n=a.innerHeight):d&&d.clientHeight?(g=d.clientWidth,n=d.clientHeight):b.body&&(g=b.body.clientWidth,n=b.body.clientHeight);if(n>2*e||g>2*c)return k}return f};var Ua=function(){var a="script";return["<",a,' src="',Ia(la(),["/pagead/js/",r(),"/r20130206/show_ads_impl.js"].join(""),""),'"></',a,">"].join("")},Va=function(a,b,c,e){return function(){var d=k;e&&Da().al(3E4);try{if(wa(a.document.getElementById(b).contentWindow)){var g=a.document.getElementById(b).contentWindow,n=g.document;if(!n.body||!n.body.firstChild)n.open(),
g.google_async_iframe_close=f,n.write(c)}else{var Q=a.document.getElementById(b).contentWindow,ha;g=c;g=String(g);if(g.quote)ha=g.quote();else{for(var n=['"'],R=0;R<g.length;R++){var S=g.charAt(R),Pa=S.charCodeAt(0),Ib=n,Jb=R+1,ia;if(!(ia=t[S])){var D;if(31<Pa&&127>Pa)D=S;else{var s=S;if(s in v)D=v[s];else if(s in t)D=v[s]=t[s];else{var q=s,u=s.charCodeAt(0);if(31<u&&127>u)q=s;else{if(256>u){if(q="\\x",16>u||256<u)q+="0"}else q="\\u",4096>u&&(q+="0");q+=u.toString(16).toUpperCase()}D=v[s]=q}}ia=D}Ib[Jb]=
ia}n.push('"');ha=n.join("")}Q.location.replace("javascript:"+ha)}d=f}catch(Ub){Q=ya().google_jobrunner,Ca(Q)&&Q.rl()}d&&(new Ra(a)).set(b,Va(a,b,c,k))}},Wa=function(){var a=["<iframe"];sa(function(b,c){a.push(" "+c+'="'+(b==h?"":b)+'"')});a.push("></iframe>");return a.join("")},Xa=function(a,b){var c=F.google_ad_height,e=b?'"':"",d=e+"0"+e;a.width=e+F.google_ad_width+e;a.height=e+c+e;a.frameborder=d;a.marginwidth=d;a.marginheight=d;a.vspace=d;a.hspace=d;a.allowtransparency=e+"true"+e;a.scrolling=
e+"no"+e},Ya=Math.floor(1E6*Math.random()),Za=function(a){for(var b=a.data.split("\n"),c={},e=0;e<b.length;e++){var d=b[e].indexOf("=");-1!=d&&(c[b[e].substr(0,d)]=b[e].substr(d+1))}b=c[3];if(c[1]==Ya&&(window.google_top_js_status=4,a.source==top&&0==b.indexOf(a.origin)&&(window.google_top_values=c,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}};window.google_loader_used=f;(function(a){"google_onload_fired"in a||(a.google_onload_fired=k,ua(a,function(){a.google_onload_fired=f}))})(window);
if(!window.google_top_experiment&&(window.google_top_experiment=va(["jp_c","jp_zl","jp_wfpmr"],ea),"jp_zl"===window.google_top_experiment||"jp_wfpmr"===window.google_top_experiment)){var $a=window,ab=2;try{$a.top.document==$a.document?ab=0:wa($a.top)&&(ab=1)}catch(bb){}if(2!==ab)window.google_top_js_status=0;else if(top.postMessage){var cb;try{cb=top.frames.google_top_static_frame?f:k}catch(db){cb=k}if(cb){var G=window;G.addEventListener?G.addEventListener("message",Za,k):G.attachEvent&&G.attachEvent("onmessage",
Za);window.google_top_js_status=3;var eb={"0":"google_loc_request",1:Ya},fb=[],gb;for(gb in eb)fb.push(gb+"="+eb[gb]);top.postMessage(fb.join("\n"),"*")}else window.google_top_js_status=2}else window.google_top_js_status=1}var hb;if(window.google_enable_async===k)hb=0;else{var ib=navigator.userAgent;hb=(Ga.test(ib)||Ha.test(ib)?k:f)&&!window.google_container_id&&(!window.google_ad_output||"html"==window.google_ad_output)}
if(hb){var jb=window;jb.google_unique_id?++jb.google_unique_id:jb.google_unique_id=1;var F=window,H={};Xa(H,f);H.onload='"'+Sa+'"';for(var I,kb=F,lb=kb.document,J=H.id,mb=0;!J||lb.getElementById(J);)J="aswift_"+mb++;H.id=J;H.name=J;var nb=kb.google_ad_width,ob=kb.google_ad_height,K=["<iframe"],L;for(L in H)H.hasOwnProperty(L)&&ta(K,L+"="+H[L]);K.push('style="left:0;position:absolute;top:0;"');K.push("></iframe>");var pb="border:none;height:"+ob+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+
nb+"px";lb.write(['<ins style="display:inline-table;',pb,'"><ins id="',H.id+"_anchor",'" style="display:block;',pb,'">',K.join(" "),"</ins></ins>"].join(""));I=H.id;var qb,M=F;M.google_page_url&&(M.google_page_url=String(M.google_page_url));for(var rb=[],sb=0,tb=C.length;sb<tb;sb++){var ub=C[sb];if(M[ub]!=h){var vb;try{var wb=[];La(new Ja,M[ub],wb);vb=wb.join("")}catch(xb){}vb&&ta(rb,ub,"=",vb,";")}}qb=rb.join("");var N=F,yb=N.google_ad_output,O=N.google_ad_format;if(!O&&("html"==yb||yb==h))O=N.google_ad_width+
"x"+N.google_ad_height;O=O&&(!N.google_ad_slot||N.google_override_format)?O.toLowerCase():"";N.google_ad_format=O;var P,zb=F.google_async_container_id?F.document.getElementById(F.google_async_container_id):qa,Ab=[w.google_ad_slot,w.google_ad_format,w.google_ad_type,w.google_ad_width,w.google_ad_height];if(zb){var T;if(zb){for(var Bb=[],Cb=0,U=zb;U&&25>Cb;U=U.parentNode,++Cb)Bb.push(9!=U.nodeType&&U.id||"");T=Bb.join()}else T="";T&&Ab.push(T)}var Db=0;if(Ab){var Eb=Ab.join(":"),Fb=Eb.length;if(0==
Fb)Db=0;else{for(var V=305419896,Gb=0;Gb<Fb;Gb++)V^=(V<<5)+(V>>2)+Eb.charCodeAt(Gb)&4294967295;Db=0<V?V:4294967296+V}}P=Db.toString();a:{var W=F,X=W.google_async_slots;X||(X=W.google_async_slots={});var Hb=W.google_unique_id,Y=String("number"==typeof Hb?Hb:0);if(Y in X&&(Y+="b",Y in X))break a;X[Y]={sent:k,w:W.google_ad_width||"",h:W.google_ad_height||"",adk:P,type:W.google_ad_type||"",slot:W.google_ad_slot||"",fmt:W.google_ad_format||"",cli:W.google_ad_client||"",saw:[]}}var Z,$=F;if(Qa($)&&void 0===
$.google_ad_handling_experiment){var Kb=ja&&"dev"!=r()?ga:fa,Lb=ja&&"dev"!=r()?["XN","PC"]:["X","XN","PC"];/MSIE/.test(navigator.userAgent)&&(Lb=["IX","IC"]);$.google_ad_handling_experiment=va(Lb,Kb)}Z=$.google_ad_handling_experiment?String($.google_ad_handling_experiment):h;var Mb="";if(Qa(F)&&1==F.google_unique_id&&"XN"!=Z){var Nb;Nb="zrt_ads_frame"+F.google_unique_id;var Ob=encodeURIComponent(F.google_page_url||Ta()?F.document.referrer:F.document.URL),Pb=h;if("PC"==Z||"IC"==Z)Pb="K-"+(Ob+"/"+P+
"/"+F.google_unique_id);var y={};Xa(y,k);y.style="display:none";var Qb=Pb;y.id=Nb;y.name=Nb;y.src=Ia(da("","googleads.g.doubleclick.net"),["/pagead/html/",r(),"/r20130206/zrt_lookup.html",Qb?"#"+encodeURIComponent(Qb):""].join(""));Mb=Wa()}for(var Rb=F,Sb=0,Tb=C.length;Sb<Tb;Sb++)Rb[C[Sb]]=h;var Vb=(new Date).getTime(),Wb=F.google_top_experiment,Xb=["<!doctype html><html><body>",Mb,"<script>",qb,"google_show_ads_impl=true;google_unique_id=",
F.google_unique_id,';google_async_iframe_id="',I,'";google_ad_unit_key="',P,'";google_start_time=',m,";",Wb?'google_top_experiment="'+Wb+'";':"",Z?'google_ad_handling_experiment="'+Z+'";':"","google_bpp=",Vb>m?Vb-m:1,";\x3c/script>",Ua(),"</body></html>"].join("");(F.document.getElementById(I)?Ea:Fa)(Va(F,I,Xb,f))}else window.google_start_time=m,document.write(Ua());})();
