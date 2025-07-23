const textInput = document.querySelector('#input_text');
const textBtn = document.querySelector('#plus');
console.log(textBtn, textInput);
textBtn.addEventListener('click',()=>{
    if(textInput.value == ''){
        alert('할 일을 입력하십시오')
    }
})