define([
	'jquery',
	'underscore',
	'backbone',

	'views/media_search',
	'views/youtube_player',
	'views/content_layout',
	'views/results_navigation',
	'views/feed_filter',
	'views/youtube_playlists_provider',
	'views/user_profile_manager',
	'views/facebook/facebook_like_view',
	// 'views/infinite_scroller',

	'collections/history_playlist',
	'xManager',
	'switcher'
], function(
	$, _, Backbone,
	MediaSearch, YoutubePlayer, ContentLayoutView,
	ResultsNavigation, FeedFilter, YoutubePlaylistsProvider, UserProfileManager,
	FacebookLikeView, 
	// InfiniteScroll,
	HistoryPlaylist) {
   
	var PlayerApp = Backbone.View.extend({
		el: '.container-main',
		
		initialize: function() {
			this.views = {
				searchBar: new MediaSearch({ model: this.model }),
				youtubePlayer: new YoutubePlayer({ model: this.model }),
				contentView: new ContentLayoutView({ model: this.model }),
				resultsNav: new ResultsNavigation({ model: this.model }),
				//	historyPlaylistData: new HistoryPlaylist()
				searchFeedFilter: new FeedFilter({ model: this.model }),
				userPlaylists: new YoutubePlaylistsProvider({ model: this.model }),
				userProfileManager: new UserProfileManager({ model: this.model }),
				facebookLikeView: new FacebookLikeView({ model: this.model })
				// infiniteScroll: new InfiniteScroll({ model: this.model })
			};
				
			// set correct height
			$(window).on('resize', _.bind(this.setSize, this));
			this.setSize();
			// this.model.connectUser();
			// show first time dialog
			this.setFirstTimeDialog();
		},

		setSize: function() {
			// 10 is for keeping the bottom line of content stick
			// to the footer bar
			this.$el.height(_().getPortviewSize().height + 10);	
		},

		setFirstTimeDialog: function() {
			var showFirstTimeDialog = localStorage.getItem('showFirstTime');
			var closeDialog = function() {
				$('#e-dialog').modal("hide");
			};

			if (showFirstTimeDialog !== "false") {

				$('#e-dialog').find('.dont-remind').on('click', function(ev){
					localStorage.setItem('showFirstTime', "false");
					closeDialog();
				});

				$('#e-dialog').modal();
			}
		}

		// renderHistory: function() {
		// 	this.modules.contentView.update( this.modules.historyPlaylistData.toJSON().reverse() );
		// 	return this;
		// },

	});
   
	return PlayerApp;
});