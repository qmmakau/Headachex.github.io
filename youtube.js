 function onYouTubeIframeAPIReady() {
                player = new YT.Player('player', {
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });
                player1 = new YT.Player('player1', {
                    events: {
                        'onStateChange': onPlayerStateChange1
                    }
                });
                player2 = new YT.Player('player2', {
                    events: {
                        'onStateChange': onPlayerStateChange2
                    }
                });
        
            }
            onYouTubeIframeAPIReady();
            function onPlayerStateChange(event) {
                if (event.data == YT.PlayerState.PLAYING ) {
                    player1.stopVideo();
                    player2.stopVideo();
                }
            }
            function onPlayerStateChange1(event) {
                if (event.data == YT.PlayerState.PLAYING ) {
                    player.stopVideo();
                    player2.stopVideo();
                }
            }
            function onPlayerStateChange2(event) {
                if (event.data == YT.PlayerState.PLAYING ) {
                    player.stopVideo();
                    player1.stopVideo();
                }
            }


players = new Array();

function onYouTubeIframeAPIReady() {
    var temp = $("iframe.yt_players");
    for (var i = 0; i < temp.length; i++) {
        var t = new YT.Player($(temp[i]).attr('id'), {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
        players.push(t);
    }

}
onYouTubeIframeAPIReady();


function onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.PLAYING) {
        //alert(event.target.getVideoUrl());
       // alert(players[0].getVideoUrl());
        var temp = event.target.getVideoUrl();
        var tempPlayers = $("iframe.yt_players");
        for (var i = 0; i < players.length; i++) {
            if (players[i].getVideoUrl() != temp) players[i].stopVideo();

        }
    }
}
