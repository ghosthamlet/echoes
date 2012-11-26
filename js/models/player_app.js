define(["underscore","backbone","./user_profile_manager","./youtube_media_provider","safe"],function(e,t,n,r,i){var s=t.Model.extend({defaults:{query:"",layout:"video",filter:"videos",route:null,play:null,mediaId:null,mediaOptions:{type:"videos"},user:null,youtube:null},safe:"EchoesPlayerApp-v20121126",initialize:function(){this.set("user",new n),this.set("youtube",new r),this.set("play",null),this.set("route",null),this.on("change:route",this.onRouteChange),this.on("change:filter",this.onFilterChange),this.on("change:query",this.onQueryChange),this.youtube().set({feedType:this.get("filter")},{silent:!0}),this.youtube().query({query:this.get("query")})},onRouteChange:function(e,t){var n=this.get("query");this.trigger("change:query",e,n||"")},onFilterChange:function(e,t){this.youtube().set("feedType",t)},onQueryChange:function(e,t){this.youtube().query({query:t})},user:function(){return this.get("user")},connectUser:function(){this.user().fetch()},getSignin:function(){return this.user().urls.signin},getSignout:function(){return this.user().urls.signout},youtube:function(){return this.get("youtube")},route:function(e){if(!e)return this.get("route");this.set("route",e)},getMediaData:function(){return{media:this.get("mediaId"),options:this.get("mediaOptions")}},getOptions:function(){return this.get("mediaOptions")},playMedia:function(e,t){this.set("mediaOptions",t),this.set("mediaId",e),this.set("play",e)},fetchCurrentMediaInfo:function(){this.youtube().fetchMediaById(this.get("mediaId"))}});return s})