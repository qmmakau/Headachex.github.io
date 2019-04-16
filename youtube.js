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