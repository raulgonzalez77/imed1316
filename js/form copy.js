console.clear(); 

//mask phone number
  var phoneVar = document.querySelector('#phone');
  
  if (phoneVar) {
  
      phoneVar.addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      });
  
  }
//mask phone number


////show/hide///////////
document.getElementById("t-shirt").addEventListener('change', checkTshirt);

function checkTshirt() {
  
  var tShirt = document.getElementById('t-shirt').value;
  var custom = document.getElementById('custom');
  
  if (tShirt === 'CUSTOM') {   
    custom.style.display = 'block'; 
    custom.required = true;
    custom.disabled = false;
  }
  else {
    custom.style.display = 'none';
    custom.required = false;
    custom.disabled = true;
    custom.value = '';
  }
  
}
////show/hide///////////



///////////////time of day///////////////

//just the button variable
let submit = document.getElementById("submit");
submit.addEventListener("click", chckTimeOfDay);

/* extra - checking when a checkbox is clicked */
let timeOfDayFieldClass = document.querySelectorAll(".timeOfDay");

    timeOfDayFieldClass.forEach(checkbox => {
      checkbox.addEventListener('click', function() {
        // Your code to handle the change event
        chckTimeOfDay();
      });
    });




/* extra - checking when a checkbox is clicked */


function chckTimeOfDay() {
  
  let timeOfDayField = document.querySelectorAll(".timeOfDay");
  let timeOfDayFieldChecked = document.querySelectorAll(".timeOfDay:checked");


      if (timeOfDayFieldChecked.length === 0) {
          // there are no checked checkboxes
          console.log('no checkboxes checked');
          timeOfDayField.forEach(item => {
            item.required = true;  
          })   
        
      } else {
          // there are some checked checkboxes
          console.log(timeOfDayFieldChecked.length + ' checkboxes checked');
        
          timeOfDayField.forEach(item => {
            item.required = false;  
          })
          

      }
  
  
  
}
//////////////////////time of day//////////////////////////////







// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()