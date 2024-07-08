document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var formData = new FormData(this); 
    var data = { 
        service_id: 'substituir', 
        template_id: 'substituir', 
        user_id: 'substituir', 
        template_params: { 
            'username': formData.get('name'), 
            'email': formData.get('email'), 
            'message': formData.get('message')
        }
    };
    
    fetch('https://api.emailjs.com/api/v1.0/email/send', { 
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data) 
    })
    .then(function(response) { 
        if (response.ok) { 
            alert('Your mail is sent!'); 
        } else {
            alert('Oops... ' + response.statusText); 
        }
    })
    .catch(function(error) { 
        alert('Oops... ' + error); 
    });
});

function openMenu(){
    var element = document.getElementById("menuball");
    element.classList.toggle("close");
}
// $(".menu").click(function(){
//     $(this).parent().toggleClass("close");
//  });

