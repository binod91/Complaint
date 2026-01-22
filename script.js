
// const orderRegex = /^2024\d{6}$/;

// if(orderRegex.test(orderNo)){
//     messageBox.textContent = "valid order number.";
//     messageBox.style.color = "green";
// }else{
//     messageBox.textContent = "invalid order number. It should start with '2024' followed by 6 digits.";
//     messageBox.style.color = "red";
// }
const submitBtn = document.getElementById('submit-btn');


const validateForm = [
    {
        // Full Name Validation
        id: 'full-name',
        regex: /^[a-zA-Z\s]+$/,
        errorMessage: "invalid full name. It should contain only letters and spaces.",
        errorId: 'name-error',
        required: true,
    },
    {
        
// email Validation
        id: 'email',
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMessage: "invalid Email. It should contain only letters and spaces.",
        errorId: 'email-error',
        required: true,
    },
    

//  ordewr Number Validation
{
    id:'order-no',
    regex: /^2024\d{6}$/,
    errorMessage: "invalid order number. It should start with '2024' followed by 6 digits.",
    errorId: 'order-error',
    required: true,
},

// product Code Validation
{
    id: 'product-code',
    regex: /^[A-Z]{2}\d{2}-[A-Z]\d{3}-[A-Z]{2}\d{1}$/,
    errorMessage: "invalid product code. It should follow the format 'XX##-X###-XX#'.",
    errorId: 'code-error',
    required: false,
}
]

function validateform(){
    let isFormValid = true;

    validateForm.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const errorElement = document.getElementById(field.errorId);
        const value = inputElement.value.trim();

        // Clear previous error message
        errorElement.textContent = "";

        // Check if the field is required and empty
        if(field.required && value === ""){
            errorElement.textContent = `${field.id.replace('-', ' ')} is required.`;
            errorElement.style.color = "red";
            isFormValid = false;
            return;
        } 
        // Validate the field if it's not empty
        if(value !== "" && !field.regex.test(value)){
            errorElement.textContent = field.errorMessage;
            errorElement.style.color = "red";
            isFormValid = false;
        }else{
            // success case
        inputElement.style.borderColor = "green";
        }
    });

    return isFormValid;     

}



// const orderNo = document.getElementById('order-no').value;
// const fullName = document.getElementById('full-name').value.trim();
// const emailValid = document.getElementById('email').value.trim();
// const messageBox = document.getElementById('message-box');

// messageBox.textContent = "";

// validating full name
// if(!fullNameRegex.test(fullName)){
//     messageBox.textContent = "invalid full name. It should contain only letters and spaces.";
//     messageBox.style.color = "red";
//     return false;       
// }

// // validating email
// if(!emailRegex.test(emailValid)){
//     messageBox.textContent = "invalid Email Address.";
//     messageBox.style.color = "red";
//     return false;
// }

// // validating order number
// if(orderRegex.test(orderNo)){
//     return true;
// }else{
//     messageBox.textContent = "invalid order number. It should start with '2024' followed by 6 digits.";
//     messageBox.style.color = "red";
//     return false;   
// }

// }

submitBtn.addEventListener('click', function(event){
    event.preventDefault(); // Prevent form submission

    if(validateform()){
        alert("Form submitted successfully!");
    }else{
        alert("Please correct the errors in the form.");
    }
}); 

