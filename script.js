let check = () => {
    if (document.getElementById('password').value == 
    document.getElementById('confirmpassword').value) {
        document.getElementById('password').style.border = '1px solid #E5E7EB';
        document.getElementById('confirmpassword').style.border = '1px solid #E5E7EB';
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = '';
    } else {
        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('confirmpassword').style.border = '1px solid red';
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = '*Passwords do not match'
    }
}