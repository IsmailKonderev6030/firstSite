function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("text").value,
    };

if(params.name == "" || params.phone == ""){
    alert("Заполните поля Имя и Телефон");
    return(-1);
}

const serviceID="service_62gdd0d";
const templateID="template_bj3yeoe";

emailjs
.send(serviceID,templateID,params)
.then((res)=>{
        name: document.getElementById("name").value = "";
        email: document.getElementById("email").value = "";
        phone: document.getElementById("phone").value = "";
        message: document.getElementById("text").value = "";
        console.log(res);
        alert("Ваша заявка принята");
    })
.catch((err)=> console.log(err));
}