
(function(a,b,c,d){var e,f,g;return g="snapscroll",f={botPadding:40,topPadding:40,scrollSpeed:300,scrollEndSpeed:100},e=function(b,c){return this.container=a(b),this.options=a.extend({},f,c),this.init()},e.prototype={init:function(){return this.snapping()},snapping:function(){var d,e,f,g,h,i,j=this;return d=this.container.children(),h=this.options.scrollSpeed,g=this.options.scrollEndSpeed,f=a(c).scrollTop(),i=null,e=!1,a(b).off("scroll.snapscroll").on("scroll.snapscroll",function(){var k,l,m;if(!e)return l=a(c).scrollTop(),m=j.getDirection(f,l),k=j.getTargetChild(d,m,l),k&&(clearTimeout(i),i=setTimeout(function(){return a(b).scrollTo(k,h),k.siblings(".ss-active").removeClass("ss-active"),k.addClass("ss-active"),e=!0,setTimeout(function(){return f=a(c).scrollTop(),e=!1},h+20)},g)),f=l})},getDirection:function(a,b){return a>b?"up":"down"},getTargetChild:function(c,d,e){var f,g,h,i,j,k;return j=this.options,k=a(b).height(),g=e+k,h=c.first().offset().top,i=c.last().offset().top+k,f=null,h<e+j.topPadding&&c.not(".ss-active").each(function(b){var c,h;h=a(this).offset().top,c=h+a(this).height();if(d==="down"){if(h<g&&c>e)return f=a(this),!1}else if(h<e&&e<c)return f=a(this)}),f}},a.fn[g]=function(b){return this.each(function(){if(!a.data(this,"plugin_"+g))return a.data(this,"plugin_"+g,new e(this,b))})}})(jQuery,window,document);