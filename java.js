var random = [];
var litID = [];
var clicked = [];
var i;
var j = 0;
var count = 1;
var on;
var off;
var x;

$(document).ready(function () {

    $('#count').hide();
    $('#on').click(function () {
        $('#count').show();
        for (i = 0; i < 20; i++) {
            random[i] = Math.ceil((Math.random() * 4));
        }

        $('#start').click(function () {
            $('#count').html(count);
            change1();
        });

        $('#one').click(function () {
            $('#one').addClass('light1');
            $('#audio1')[0].play();
            clicked.push(1);
            setTimeout(function () {
                $('#one').removeClass('light1');
            }, 250);
            checking();
        });

        $('#two').click(function () {
            $('#two').addClass('light2');
            $('#audio2')[0].play();
            clicked.push(2);
            setTimeout(function () {
                $('#two').removeClass('light2');
            }, 250);
            checking();
        });

        $('#three').click(function () {
            $('#three').addClass('light3');
            $('#audio3')[0].play();
            clicked.push(3);
            setTimeout(function () {
                $('#three').removeClass('light3');
            }, 250);
            checking();
        });

        $('#four').click(function () {
            $('#four').addClass('light4');
            $('#audio4')[0].play();
            clicked.push(4);
            setTimeout(function () {
                $('#four').removeClass('light4');
            }, 250);
            checking();
        });

    });

    $('#reset').click(function () {
        location.reload();
    });

    function change1() {

        if (count <= 10) {
            off = 400;
            on = 800;
        } else {
            off = 250;
            on = 500;
        }

        x = setInterval(function () {

            if (random[j] == 1) {
                $('#one').addClass('light1');
                $('#audio1')[0].play();
                litID.push(1);

                setTimeout(function () {
                    $('#one').removeClass('light1');
                }, off);
            } else if (random[j] == 2) {
                $('#two').addClass('light2');
                $('#audio2')[0].play();
                litID.push(2);

                setTimeout(function () {
                    $('#two').removeClass('light2');
                }, off);

            } else if (random[j] == 3) {
                $('#three').addClass('light3');
                $('#audio3')[0].play();
                litID.push(3);

                setTimeout(function () {
                    $('#three').removeClass('light3');
                }, off);
            } else {
                $('#four').addClass('light4');
                $('#audio4')[0].play();
                litID.push(4);

                setTimeout(function () {
                    $('#four').removeClass('light4');
                }, off);
            }

            j++;

            if (j >= count) {
                clearInterval(x);
            }

        }, 500);
    }

    function checking() {
        if (litID.length === clicked.length) {
            if (litID.join() === clicked.join()) {
                if (count === 20) {
                    setTimeout(function () {
                        alert("You win!");
                        location.reload();
                    }, 1000);
                } else {
                    setTimeout(function () {
                        $('#count').html(count + 1);
                        count++;
                        litID = [];
                        clicked = [];
                        j = 0;
                        change1();
                    }, 1000);
                }
            } else {
                $('#count').text('That\'s Wrong !! Your Score : ' + count);
                $('#start').hide();
                $('#on').hide();
            }
        }
    }


});