const api_url = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const container = document.querySelector("#qr-container");
const img = document.querySelector("img");
const input = document.querySelector("input");

async function getQrCode(){
    if(input.value.length > 0){
        img.src = api_url + input.value;
    container.classList.add("show-img");
    }
    
    else{
        input.classList.add("error");
        setTimeout(() =>{
            input.classList.remove("error")
        },1000);
    }
}