define(["underscore","backbone","utils"],function(e,t,n){var r=t.Model.extend({defaults:{likeCountDisplay:0,time:0,mediaType:"video",isPlaying:!1},initialize:function(){var e=this.get("likeCount")||0;this.set("likeCountDisplay",n.formatNumberWithComma(e)),this.set("time",n.secondsToHms(this.get("duration")))}});return r})