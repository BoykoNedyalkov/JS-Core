function solve() {
    $('#submit').on('click',function (ev) {
        ev.preventDefault()
        let invalidCounter = 0;
        let userName = $('#username').val();;
        let email = $('#email').val();
        let password = $('#password').val();
        let confirmPassword = $('#confirm-password').val();
        let companyNumber = parseInt($('#companyNumber').val());
        let usernamePattern = /^([A-Za-z1-9]{3,20})$/g
        let passwordPattern = /^(\w){5,15}$/g
        let confirmPasswordPattern = /w+/g
        let emailPattern = /^.*\@.*\..*$/g
        let usernameMatch = usernamePattern[Symbol.match](userName);
        let passwordMatch = passwordPattern[Symbol.match](password);
        let confirmPasswordMatch = passwordPattern[Symbol.match](confirmPassword);
        let emailMatch = emailPattern[Symbol.match](email)

        console.log(usernameMatch)
        console.log(passwordMatch)

        if(usernameMatch && userName.length >=3 && userName.length<=20){
            $('#username').css("border-color","")
        }
        else{
            $('#username').css("border-color","red")
            invalidCounter++
        }

        if(passwordMatch){
            $('#password').css("border-color","")
            $('#confirm-password').css("border-color","")
        }
        else{
            $('#password').css("border-color","red")
           $('#confirm-password').css("border-color","red")
            invalidCounter++
        }
        if(confirmPasswordMatch && confirmPassword == password){
            $('#password').css("border-color","")
            $('#confirm-password').css("border-color","")
        }
        else{
            $('#password').css("border-color","red")
            /$('#confirm-password').css("border-color","red")
            invalidCounter++
        }


        if(emailMatch){
                $('#email').css("border-color","")
        }
        else{
            $('#email').css("border-color","red")
            invalidCounter++;
        }



        if(document.getElementById('company').checked){
            console.log(companyNumber)
            if(companyNumber >= 1111 && companyNumber <= 9999){
                $('#companyNumber').css("border-color","")
            }
            else{
                $('#companyNumber').css("border-color","red")
                invalidCounter++;
            }
        }else{
            $('#companyNumber').css("border-color","")
        }
        if(invalidCounter == 0){
            $('#valid').css('display','block')
        }
        else{
            $('#valid').css('display','none')
        }
    })
    $('#company').on('change',function (event) {
        if(document.getElementById('company').checked){
            $('#companyInfo').css("display","block")
        }
        else{
            $('#companyInfo').css("display","none")

        }
    })

}
