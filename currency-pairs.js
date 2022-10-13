//-------------------INPUT NUM VALIDATION---------------
function validateNumber(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if ( key < 48 || key > 57 ) {
        return false;
    } else {
        return true;
    }
};

$(document).ready(function(){
    $('#sendField').keypress(validateNumber);
    
    // Change currency logic
$('.currency__dropdown__link').on('click',function(e){
    e.preventDefault()
    // close dropdown by click on item
    $(".currency__dropdown-wrap.w-dropdown").triggerHandler("w-close.w-dropdown")
    // get all data from clicked item
    const flag = $(this).find('.currency-logo').text()
    const currencyName = $(this).find('.toggle__text').text()
    const selectedCurrencyLink = $(this).attr("href")
    // set data to active item
    $('#currency-logo').text(flag)
    $('#currency-name').text(currencyName)
    //set selected item link to button
    $('#currencyLearnMore').attr("href", selectedCurrencyLink)
})
});

// FORM (HOME / GLOBAL / PRICING PAGES)
//-------------------FORM REDIRECT--------------------------
let Webflow = window.Webflow || [];
Webflow.push(() => {
    $('#email-form-2').submit(() => {
        document.querySelector('.sign-up').style.display = 'flex';
        let inputV = document.querySelector('#email').value;
        document.querySelector('.field--email').value = inputV;
    });
    $('#wf-form-Sign-Up-Pop-Up').submit(() => {
        console.log('Btn is work')
        let input = $('.field--email').val();
        window.location.href = "https://app.koverly.com/signup" + '?email=' + input;
    });
});

//-------------------INPUT NUM VALIDATION---------------
function validateNumber(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
};

function testInput(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/[a-zåäö ]/i);
    return pattern.test(value);
}

$(document).ready(function () {
    $('#Phone-Number-2').keypress(validateNumber);
    $('#singup-name').keypress(testInput);
});

//--------------------CUSTOM SELECTOR------------------
let primaryBussines = document.querySelector('#primary-business'),
    whatInterested = document.querySelector('#what-interested'),
    aboutKoverly = document.querySelector('#about-koverly'),
    primaryBussinesRadio = document.querySelectorAll('input[name=primary-business]'),
    whatInterestedRadio = document.querySelectorAll('input[name=what-interested]'),
    aboutKoverlyRadio = document.querySelectorAll('input[name=about-koverly]');

primaryBussinesRadio.forEach(element => {
    element.addEventListener('click', () => {
        primaryBussines.textContent = element.nextElementSibling.textContent;
        primaryBussines.style.color = '#646464';
    });
});
whatInterestedRadio.forEach(element => {
    element.addEventListener('click', () => {
        whatInterested.textContent = element.nextElementSibling.textContent;
        whatInterested.style.color = '#646464';
    });
});
aboutKoverlyRadio.forEach(element => {
    element.addEventListener('click', () => {
        aboutKoverly.textContent = element.nextElementSibling.textContent;
        aboutKoverly.style.color = '#646464';
    });
});

//---------------------NEXT BUTTON-----------------
$('#to-next').click(() => {
    $('#next').trigger("click");
});
