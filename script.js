
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
},
// quantity Validation
{
    id: 'quantity',
    regex: /^\d+$/,
    errorMessage: "invalid quantity Number. It should be a positive integer.",
    errorId: 'quality-error',
    required: true
},
// complaint type Validation
{
    id: 'complaints-group',
    regex: /^(damaged-product|nonconforming-product|delayed-dispatch |other)$/,
    errorMessage: "Please select a complaint type.",
    errorId: 'complaint-error',
    required: true
},
// Description of Complaint Reason
{
    id: 'complaint-description',
    regex: /^.{20,}$/,
    errorMessage: "Description must be at least 20 characters long.",
    errorId: 'textarea-error',
    required: false,
}


]

function validateform(){
    let isFormValid = true;

    validateForm.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const errorElement = document.getElementById(field.errorId);
        const checkboxes = document.querySelectorAll('input[name="complaint"]:checked');
// const complaintError = document.getElementById('complaint-error');
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

        // Special handling for complaint type checkboxes
        if(field.id === 'complaint-group'){
            if(checkboxes.length === 0){
                complaintError.textContent = field.errorMessage;
                complaintError.style.color = "red";
                isFormValid = false;
            }else{
                complaintError.textContent = "";
            }
        }
        
        
        // Special handling for complaint description textarea
        if(field.id === 'complaint-description'){
            const complaintCheckbox = document.getElementById('other-complaint');
            if(complaintCheckbox.checked){
                if(value === ""){
                    errorElement.textContent = "Description is required when 'Other' complaint type is selected.";
                    errorElement.style.color = "red";
                    isFormValid = false;
                }else if(!field.regex.test(value)){
                    errorElement.textContent = field.errorMessage;
                    errorElement.style.color = "red";
                    isFormValid = false;
                }
            }
        }
    });

    return isFormValid;     

}





submitBtn.addEventListener('click', function(event){
    event.preventDefault(); // Prevent form submission

    if(validateform()){
        alert("Form submitted successfully!");
    }else{
        alert("Please correct the errors in the form.");
    }
}); 

