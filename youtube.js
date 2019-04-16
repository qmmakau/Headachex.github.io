// load the IFrame Player API code asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayers = new Array();
var ytPlayerStates = new Array();

window.onYouTubePlayerAPIReady = function()
{
    jQuery('.video-container>iframe').each(function(index)
    {
        var iframeID = jQuery(this).attr('id');
        ytPlayerStates[iframeID] = -1;

        (function (iframeID) {
            ytPlayers.push(new YT.Player(iframeID, { 
                events:
                {      
                    'onStateChange' : function (event) 
                    {
                        console.log(iframeID+' '+event.data);

                        if (event.data == 1)
                        {
                            ytPlayerStates[iframeID] = 1;
                            for (var key in ytPlayerStates)
                            {
                                if (key != iframeID)
                                {
                                    if (ytPlayerStates[key] == 1 || ytPlayerStates[key] == 3)
                                    {
                                        ytPlayerStates[key] = 2;
                                        callPlayer(key, 'pauseVideo')
                                    }
                                }
                                console.log(key+' : '+ytPlayerStates[key]);
                            };
                        }
                    }
                }
            }));
        })(iframeID); 
    });
}