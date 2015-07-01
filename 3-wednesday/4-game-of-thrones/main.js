
var episodeHandler = require('./episode-handler');
var episodeActions = require('./episode-actions');

episodeHandler(episodeActions.print);
episodeHandler(episodeActions.printSorted);
episodeHandler(episodeActions.printTop);
episodeHandler(episodeActions.findJonSnow);
