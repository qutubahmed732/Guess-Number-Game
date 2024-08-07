let correctNumber = 5;
let checkButton = document.querySelector('.check');
let message = document.querySelector('.message');
let inputValue = document.querySelector('.input');
let body = document.body;
let image = document.querySelector('.questionMark');
let score = document.querySelector('.score')
let highScore = document.querySelector('.highScore')




function checkHandler() {
    if (inputValue.value == correctNumber) {
        message.innerHTML = 'Victory'
        body.style.backgroundColor = 'green'
        highScore.innerHTML = score.innerHTML
        // score.innerHTML = +score.innerHTML + 1
        // setTimeout(() => {
        //     body.style.backgroundColor = 'black';
        //     message.innerHTML = 'start guessing...';
        //     inputValue.value = ''
        // }, 3000)
        if(inputValue.value == correctNumber){
            image.innerHTML = 5;
            image.style.backgroundColor = 'green'
            image.style.fontSize = '70px'
            image.value.style.transform = '90deg'
        }

        else{
            image.innerHTML = document.querySelector('img');
            
        }
    }

    else if (inputValue.value > correctNumber) {
        score.innerHTML = +score.innerHTML - 1
        message.innerHTML = 'oops Your value is big'
        body.style.backgroundColor = 'red'
        setTimeout(() => {
            body.style.backgroundColor = 'black';
            message.innerHTML = 'start guessing...';
            inputValue.value = ''
        }, 3000)

    }
    else if (inputValue.value == '') {
        // score.innerHTML = +score.innerHTML - 1
        message.innerHTML = "Please Enter the value"
        body.style.backgroundColor = 'red'
        setTimeout(() => {
            document.body.style.backgroundColor = 'black';
            message.innerHTML = 'start guessing...';
            inputValue.value = ''
        }, 2000)
    }

    else {
        score.innerHTML = +score.innerHTML - 1
        message.innerHTML = 'oops Your value is small'
        body.style.backgroundColor = 'red'
        setTimeout(() => {
            body.style.backgroundColor = 'black';
            message.innerHTML = 'start guessing...';
            inputValue.value = ''
        }, 2000)
    }
}

function againButtonHandler(){
    // message.innerHTML = 'start guessing...';
    // inputValue.value = '';
    // body.style.backgroundColor = 'black'
    location.reload()
    

}

