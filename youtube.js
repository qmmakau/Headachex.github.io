var playerCurrentlyPlaying = null;
function chain(){       
    $('.post').each(function(){
        var player_id = $(this).children('iframe').attr("id");
        player = new YT.Player( player_id, { 
            events:
                {      
                'onStateChange': function (event) 
                    {

                    if (event.data == YT.PlayerState.PLAYING) 
                        { 
                          if(playerCurrentlyPlaying != null && 
                          playerCurrentlyPlaying != player_id)
                          callPlayer( playerCurrentlyPlaying , 'pauseVideo' );
                          playerCurrentlyPlaying = player_id;

                        }            

                    }
                }        
        });
    });
}