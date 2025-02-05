this._hd=this._hd||{};(function(_){var window=this;
try{
_.z("aLUfP");
var Ttb=function(a){this.Ut=a};var Utb=function(a){_.jn.call(this);var b=this;this.window=a.service.window.get();this.wa=this.Ut();this.oa=window.orientation;this.ka=function(){var c=b.Ut(),d="orientation"in window&&Math.abs(window.orientation)===90&&b.oa===-1*window.orientation;b.oa=window.orientation;if(c!==b.wa||d){b.wa=c;d=_.n(b.listeners);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new Ttb(c);try{e(f)}catch(g){_.ca(g)}}}};this.listeners=new Set;this.window.addEventListener("resize",this.ka);"orientation"in window&&
this.window.addEventListener("orientationchange",this.ka)};_.E(Utb,_.kn);Utb.Ia=function(){return{service:{window:_.ln}}};_.m=Utb.prototype;_.m.addListener=function(a){this.listeners.add(a)};_.m.removeListener=function(a){this.listeners.delete(a)};
_.m.Ut=function(){if(_.xa()&&_.va()&&!navigator.userAgent.includes("GSA")){var a=_.Ak(this.window);a=new _.mk(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.oc()||(_.xa()?_.xa()&&_.va()&&!navigator.userAgent.includes("GSA"):this.window.visualViewport)?_.Ak(this.window):new _.mk(this.window.innerWidth,this.window.innerHeight);return a.height<a.width};
_.m.destroy=function(){this.window.removeEventListener("resize",this.ka);this.window.removeEventListener("orientationchange",this.ka)};_.m.oc=function(){return _.Vtb};_.Vtb=!1;_.mn(_.nSa,Utb);
_.Vtb=!0;
_.A();
}catch(e){_._DumpException(e)}
})(this._hd);
// Google Inc.
