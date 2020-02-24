let nom = document.getElementById("nom");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
console.log(message);


let button = document.getElementById("envoi");
let form = document.getElementById("form");
let msg = document.getElementById("msg-name");
let msg2 = document.getElementById("msg-email");
let msg3 = document.getElementById("msg-message");
let msg4 = document.getElementById("msg-subject");
let reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



function validation() {
    if (nom.value !== "" )
    {
        nom.style.border = "solid green"; 
        msg.classList.remove();     
        button.disabled = false;
    }
    else
    {
        nom.style.border = "solid red";
        msg.classList.add("activ");
        button.disabled = true;
    }
}



function validationEmail() {
    if (reg.test(email.value) && email.value !== "" )
    {
        email.style.border = "solid green";
        msg2.classList.remove("activ");
        button.disabled = false;

    }
    else
    {
        email.style.border = "solid red";
       msg2.classList.add("activ");
       button.disabled = true;
    }
}

function validationSubject() {
    if (subject.value !== "" )
    {
        subject.style.border = "solid green";
        msg4.classList.remove("activ");     
        button.disabled = false;

    }
    else
    {
        subject.style.border = "solid red";
        msg4.classList.add("activ");
        button.disabled = true;
    }
}

function validationS() {
    if (message.value !== "" )
    {
        message.style.border = "solid green";
        msg3.classList.remove("activ");     
        button.disabled = false;
        
    }
    else
    {
        message.style.border = "solid red";
        msg3.classList.add("activ");
        button.disabled = true;
    }
}

form.addEventListener("submit", function (event) {
   event.preventDefault();
    
})





let navbackground = document.getElementById("nav-background");
let ul = document.getElementById('list');
let list = ul.querySelectorAll('li a');
list.forEach((el) => {
    el.addEventListener('click', function () {
        let result = document.getElementsByClassName("btn-green");
        result[0].className = result[0].className.replace(" btn-green", "");
        this.className += "btn-green";
    })
})

function classToggle() {
    const navs = document.querySelectorAll('.list')

    navs.forEach(nav => nav.classList.toggle('Navbar-ToggleShow'));
    navbackground.classList.toggle("nav-background1");

}
document.querySelector('.Link-toggle').addEventListener('click', classToggle);

window.addEventListener('scroll', () => {
    let card = document.getElementsByClassName('card');
    console.log(card);
    
    let cardlist = Array.from(card);
    let contentS1 = document.getElementById('services');
    let contentPositionS1 = contentS1.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;
console.log(cardlist);




    if (contentPositionS1 < screenPosition) {
        cardlist.forEach((el) => {
            el.cardlist.add('card-anim')

        })

        // card.classList.add('scal')
    } else {
        cardlist.forEach((el) => {
            el.cardlist.remove('card-anim')

        })
        //  card.classList.remove('scal')
    }


    let contentS3 = document.getElementById('s3');
    let contentPositionS3 = contentS3.getBoundingClientRect().top;
    let sA = document.getElementById('sA');
    let fA = document.getElementById('fA');
    if (contentPositionS3 < screenPosition) {
        sA.classList.add('sA')
        fA.classList.add('fA')
    } else {
        sA.classList.remove('sA')
        fA.classList.remove('fA')
    }
})


