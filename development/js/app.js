document.addEventListener('DOMContentLoaded', function () {

    var submitName = document.getElementById('submit_name');          //Znajduję input imienia
    var inputName = document.getElementById('input_name');          //Znajduję button wysyłający imię z inputu
    var userName = document.querySelector('.user_name');            //Imię w headerze aplikacji
    //console.log(inputName.value);


    submitName.addEventListener('click', function (event) {
        console.log('klik');
        if (inputName.value !== '') {                                               //jeśli coś jest w inpucie

            localStorage.setItem('userName', inputName.value);                  //dodaję do local storage imię pod nazwą userName
            // console.log(localStorage);
            inputName.value = null;

            userName.innerText = localStorage.userName;                        //zmieniam imię w html na podane przez input

        }

    });
    inputName.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            submitName.click();
        }
    })


});