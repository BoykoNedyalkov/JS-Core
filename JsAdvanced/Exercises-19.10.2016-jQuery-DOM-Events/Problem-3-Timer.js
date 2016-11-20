function timer() {
    let seconds = parseInt($('#seconds').text());
    let minutes = parseInt($('#minutes').text());
    let hours = parseInt($('#hours').text());
    let startClicked = false;
    let timer;
    $('#start-timer').on('click',function (event) {

        if(startClicked == false){
            timer = setInterval(step,1000);
            function step() {

                seconds++;
                if(seconds == 60){
                    seconds = 0;
                    minutes ++;
                }
                if(minutes == 60){
                    minutes = 0;
                    hours++;
                }
                if(seconds<10){
                    $('#seconds').text(`0${seconds}`)
                }else{
                    $('#seconds').text(`${seconds}`)
                }
                if(minutes<10){
                    $('#minutes').text((`0${minutes}`))
                }else{
                    $('#minutes').text(`${minutes}`)
                }
                if(hours<10){
                    $('#hours').text((`0${hours}`))
                }else{
                    $('#hours').text(`${hours}`)
                }
            }
        }
        
        startClicked = true;
    })
    $('#stop-timer').on('click',function (event) {
        clearInterval(timer)
        startClicked = false;
    })

}