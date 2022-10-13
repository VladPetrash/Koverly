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
