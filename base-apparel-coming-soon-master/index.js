const form = document.querySelector('.form');
const feedback =document.querySelector('.feedback');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  
   const email=form.email.value;
   const pattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   if(!pattern.test(email)){
     feedback.textContent=' Please provide a valid email'
   }
});

