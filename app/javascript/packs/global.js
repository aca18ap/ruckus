$(document).ready(function(){
    let signUp = document.querySelectorAll('.sign-up');
    console.log(signUp);
    signUp.forEach((btn)=>{
        console.log(btn.childNodes);
        btn.childNodes[3].addEventListener('click', ()=>{
           let email = btn.childNodes[1].value;
           let data = {
            subscriber: {
                email: email
            }
           }
           if(email!=''){
            $.ajax({
                url: '/subscribers',
                type: 'post',
                beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
                dataType: 'script',
                data: data,
                success: function(data, textStatus){
                    let dataj = JSON.parse(data);
                    if(dataj['save'])
                        alert('successfully subscribed to newsletter')
                    else
                        alert('something went wrong, try again');    
                },
                error: function(jqXHR, textStatus, errorThrown){
                    console.log(jqXHR, textStatus, errorThrown);
                }
                
            })
        }
        });
            
    })
})