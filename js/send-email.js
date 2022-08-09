function enviar(){
    var url = "https://nodemailerportfolio.herokuapp.com/contact"
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    console.log(name);
    if(name == '' && phone == ''){
        
        alert("Verifique os campos e tente novamente.")
    }else{
        
         body = {

            "name": name,
            "email": email,
            "phone": phone,
            "message": message

         } 
         enviaEmail(url, body)
       
        alert("Obrigado " + name + ", aguarde que logo entrarei em contato");
    }

}
function enviaEmail(url, body){
    let req = new XMLHttpRequest()
    req.open("POST", url, true)
    req.setRequestHeader("Content-type", "application/json")
    req.send(JSON.stringify(body))
    req.onload = function (){
        console.log(this.responseText);
    }
    return req.responseText
}