!function(o,t,e,s){var n,a="autoHidingNavbar",l=o(t),r=o(e),i=null,h=null,c=0,u=null,d=l.height(),f=!0,m={disableAutohide:!1,showOnUpscroll:!0,showOnBottom:!0,hideOffset:"auto",animationDuration:200,navbarOffset:0};function g(t,e){this.element=o(t),this.settings=o.extend({},m,e),this._defaults=m,this._name=a,this.init()}function b(t){if(f){t.element.addClass("navbar-hidden").animate({top:-1*parseInt(t.element.css("height"),10)+t.settings.navbarOffset},{queue:!1,duration:t.settings.animationDuration});try{o(".dropdown.open .dropdown-toggle, .dropdown.show .dropdown-toggle",t.element).dropdown("toggle")}catch(t){}f=!1,t.element.trigger("hide.autoHidingNavbar")}}function p(t){f||(t.element.removeClass("navbar-hidden").animate({top:0},{queue:!1,duration:t.settings.animationDuration}),f=!0,t.element.trigger("show.autoHidingNavbar"))}function v(t){t.settings.disableAutohide||(c=(new Date).getTime(),function(t){var e=l.scrollTop(),i=e-u;if(u=e,i<0){if(f)return;(t.settings.showOnUpscroll||e<=n)&&p(t)}else if(0<i){if(!f)return t.settings.showOnBottom&&e+d===r.height()&&p(t);n<=e&&b(t)}}(t))}g.prototype={init:function(){var t;return this.elements={navbar:this.element},this.setDisableAutohide(this.settings.disableAutohide),this.setShowOnUpscroll(this.settings.showOnUpscroll),this.setShowOnBottom(this.settings.showOnBottom),this.setHideOffset(this.settings.hideOffset),this.setAnimationDuration(this.settings.animationDuration),n="auto"===this.settings.hideOffset?parseInt(this.element.css("height"),10):this.settings.hideOffset,t=this,r.on("scroll."+a,function(){70<(new Date).getTime()-c?v(t):(clearTimeout(i),i=setTimeout(function(){v(t)},70))}),l.on("resize."+a,function(){clearTimeout(h),h=setTimeout(function(){d=l.height()},70)}),this.element},setDisableAutohide:function(t){return this.settings.disableAutohide=t,this.element},setShowOnUpscroll:function(t){return this.settings.showOnUpscroll=t,this.element},setShowOnBottom:function(t){return this.settings.showOnBottom=t,this.element},setHideOffset:function(t){return this.settings.hideOffset=t,this.element},setAnimationDuration:function(t){return this.settings.animationDuration=t,this.element},show:function(){return p(this),this.element},hide:function(){return b(this),this.element},destroy:function(){return r.off("."+a),l.off("."+a),p(this),o.data(this,"plugin_"+a,null),this.element}},o.fn[a]=function(e){var i,n=arguments;return e===s||"object"==typeof e?this.each(function(){o.data(this,"plugin_"+a)||o.data(this,"plugin_"+a,new g(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?(this.each(function(){var t=o.data(this,"plugin_"+a);t instanceof g&&"function"==typeof t[e]&&(i=t[e].apply(t,Array.prototype.slice.call(n,1)))}),i!==s?i:this):void 0}}(jQuery,window,document),AOS.init({once:!0}),$("nav.sticky-top").autoHidingNavbar({showOnBottom:!1}),$(".menu-icon").on("click",function(){$("body").toggleClass("mobile__nav-active"),setTimeout(function(){$("body").hasClass("mobile__nav-active")?bodyScrollLock.disableBodyScroll($("body")):(bodyScrollLock.enableBodyScroll($("body")),bodyScrollLock.clearAllBodyScrollLocks())},50)}),$(window).resize(function(){991.98<$(window).width()&&$("body").hasClass("mobile__nav-active")&&($("body").removeClass("mobile__nav-active"),bodyScrollLock.enableBodyScroll($("body")),bodyScrollLock.clearAllBodyScrollLocks())}),$("#custom_carousel").on("slide.bs.carousel",function(t){$("#custom_carousel .controls li.active").removeClass("active"),$("#custom_carousel .controls li:eq("+$(t.relatedTarget).index()+")").addClass("active")}),$(".carousel").each(function(){var t=$(".carousel-item",this);t.css("min-height",0);var e=Math.max.apply(null,t.map(function(){return $(this).outerHeight()}).get());t.css("min-height",e+"px")});