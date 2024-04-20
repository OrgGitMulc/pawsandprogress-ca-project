//form validation for review form submission
let form = document.getElementById('revForm');
let formName = document.getElementById('name');
let email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    if (formName.value === '' || formName.value == null){
        alert('Please enter a name!');
        e.preventDefault();
    }

    if (email.value === '' || email.value == null){
        alert('Please enter an email address!');
        e.preventDefault();
    }

});