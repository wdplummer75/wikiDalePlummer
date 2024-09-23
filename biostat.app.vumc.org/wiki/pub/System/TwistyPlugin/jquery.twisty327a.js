var foswiki;foswiki||(foswiki={}),function(i){foswiki.TwistyPlugin=new function(){var t=this;this._getName=function(i){var t=new RegExp("(.*)(hide|show|toggle)","g").exec(i);return t&&t[1]?t[1]:""},this._getType=function(i){var t=new RegExp("(.*)(hide|show|toggle)","g").exec(i);return t&&t[2]?t[2]:""},this._toggleTwisty=function(i){i&&(i.state=i.state==foswiki.TwistyPlugin.CONTENT_HIDDEN?foswiki.TwistyPlugin.CONTENT_SHOWN:foswiki.TwistyPlugin.CONTENT_HIDDEN,t._update(i,!0))},this._update=function(t,s){var e=t.show,n=t.hide,o=t.toggle;t.state==foswiki.TwistyPlugin.CONTENT_SHOWN?(s&&0!=t.speed?foswiki.TwistyPlugin.showAnimation(o,t):foswiki.TwistyPlugin.show(o,t),i(e).hide(),i(n).show()):(s&&0!=t.speed?foswiki.TwistyPlugin.hideAnimation(o,t):foswiki.TwistyPlugin.hide(o,t),i(e).show(),i(n).hide()),s&&t.saveSetting&&foswiki.Pref.setPref(foswiki.TwistyPlugin.COOKIE_PREFIX+t.name,t.state),t.clearSetting&&(foswiki.Pref.clearPref?foswiki.Pref.clearPref(foswiki.TwistyPlugin.COOKIE_PREFIX+t.name):foswiki.Pref.setPref(foswiki.TwistyPlugin.COOKIE_PREFIX+t.name,""))},this._register=function(s){if(s){var e=t._getName(s.id),n=t._storage[e];n||(n=new foswiki.TwistyPlugin.Storage),i(s).hasClass("twistyRememberSetting")&&(n.saveSetting=!0),i(s).hasClass("twistyForgetSetting")&&(n.clearSetting=!0),i(s).hasClass("twistyStartShow")&&(n.startShown=!0),i(s).hasClass("twistyStartHide")&&(n.startHidden=!0),i(s).hasClass("twistyFirstStartShow")&&(n.firstStartShown=!0),i(s).hasClass("twistyFirstStartHide")&&(n.firstStartHidden=!0),n.name=e;var o=t._getType(s.id);switch(n[o]=s,t._storage[e]=n,o){case"show":case"hide":s.onclick=function(){return t._toggleTwisty(n),!1}}return n}},this._storage={}},foswiki.TwistyPlugin.show=function(t,s){i(t).show()},foswiki.TwistyPlugin.hide=function(t,s){i(t).hide()},foswiki.TwistyPlugin.showAnimation=function(t,s){i(t).animate({height:"show",opacity:"show"},s.speed,(function(){i(t).trigger("showcompleted")}))},foswiki.TwistyPlugin.hideAnimation=function(t,s){i(t).animate({height:"hide",opacity:"hide"},s.speed,(function(){i(t).trigger("hidecompleted")}))},foswiki.TwistyPlugin.CONTENT_HIDDEN=0,foswiki.TwistyPlugin.CONTENT_SHOWN=1,foswiki.TwistyPlugin.COOKIE_PREFIX="TwistyPlugin_",foswiki.TwistyPlugin.prefList,foswiki.TwistyPlugin.init=function(t){if(t){var s=this._getName(t.id),e=this._storage[s];if(e&&e.show&&e.hide&&e.toggle)return e;if((e=this._register(t)).show&&e.hide&&e.toggle){if(i(t).hasClass("twistyInited1"))return e.state=foswiki.TwistyPlugin.CONTENT_SHOWN,this._update(e,!1),e;if(i(t).hasClass("twistyInited0"))return e.state=foswiki.TwistyPlugin.CONTENT_HIDDEN,this._update(e,!1),e;null==foswiki.TwistyPlugin.prefList&&(foswiki.TwistyPlugin.prefList=foswiki.Pref.getPrefList());var n=foswiki.Pref.getPrefValueFromPrefList(foswiki.TwistyPlugin.COOKIE_PREFIX+e.name,foswiki.TwistyPlugin.prefList);e.firstStartHidden&&(e.state=foswiki.TwistyPlugin.CONTENT_HIDDEN),e.firstStartShown&&(e.state=foswiki.TwistyPlugin.CONTENT_SHOWN),n&&"0"==n&&(e.state=foswiki.TwistyPlugin.CONTENT_HIDDEN),n&&"1"==n&&(e.state=foswiki.TwistyPlugin.CONTENT_SHOWN),e.startHidden&&(e.state=foswiki.TwistyPlugin.CONTENT_HIDDEN),e.startShown&&(e.state=foswiki.TwistyPlugin.CONTENT_SHOWN),this._update(e,!1)}return e}},foswiki.TwistyPlugin.toggleAll=function(i){for(var t in this._storage){var s=this._storage[t];s.state=i,this._update(s,!0)}},foswiki.TwistyPlugin.Storage=function(){this.name,this.state=foswiki.TwistyPlugin.CONTENT_HIDDEN,this.hide,this.show,this.toggle,this.saveSetting=!1,this.clearSetting=!1,this.startShown,this.startHidden,this.firstStartShown,this.firstStartHidden,this.marginTop,this.marginBottom,this.paddingTop,this.paddingBottom,this.speed},i((function(){i(".twistyStartHide").livequery((function(){i(this).hide()})),i(".foswikiMakeVisible").livequery((function(){i(this).removeClass("foswikiMakeVisible")})),i(".twistyContent").livequery((function(){var t,s=foswiki.TwistyPlugin.init(this);t="SPAN"==i(this).get(0).tagName?0:200,s.speed=t})),i(".twistyTrigger").livequery((function(){foswiki.TwistyPlugin.init(this)})),i(document).on("click",".twistyExpandAll",(function(){foswiki.TwistyPlugin.toggleAll(foswiki.TwistyPlugin.CONTENT_SHOWN)})),i(document).on("click",".twistyCollapseAll",(function(){foswiki.TwistyPlugin.toggleAll(foswiki.TwistyPlugin.CONTENT_HIDDEN)}))}))}(jQuery);
