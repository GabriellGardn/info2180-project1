/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', (event) => 

{

    var mail = getElement('email');
    var msg = document.getElementsByClassName('message');

    document.getElementsByClassName('form-group').addEventListener('submit', function(ele)
    {
        ele.preventDefault()
        msg.setAttribute(`Thank you! Your email adress ${mail} has been added to our mailing list!`)

        if (mail == null)
        {
            msg.setAttribute("Please enter a valid email address")
            return false
        }

    });

});