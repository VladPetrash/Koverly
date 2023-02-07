/* converter */
window.addEventListener('alpine:init', () => {
    Alpine.data('exchangerLarge', () => ({
        data: {
            buyCurrency: {
                currencySymbol: '€',
                countryFlag: '🇪🇺',
                currencyName: 'EUR',
                currencyDescription: 'Euro'
            },
            sellCurrency: {
                currencySymbol: '$',
                countryFlag: '🇺🇸',
                currencyName: 'USD',
                currencyDescription: 'United States dollar'
            },
            valueFrom: 0,
            valueTo: 100,
            rate: 1,
            totalPaymentsFirst: 0,
            totalPaymentsSecond: 0,
            totalPaymentsThird: 0,
            paymentFirst: 0,
            paymentSecond: 0,
            paymentThird: 0,
            resultSymbol: '$',
            totalResult: 0,
            valueFromNumber: '',
            valueToNumber: ''
        },
        init() {
            this.refreshData(this.buyValue)
        },

        async refreshData(callback) {
            let result;
            try {
                let buy = this.data.buyCurrency.currencyName;
                let sell = this.data.sellCurrency.currencyName;
                const response = await fetch('https://app.koverly.com/api/currency/rate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "buyCurrency": buy,
                        "sellCurrency": sell
                    }),
                    redirect: 'follow'
                })
                result = JSON.parse(await response.text());
            } catch (e) {
                console.log(e);
            }
            this.data.rate = result.rate;
            if (callback) {
                callback.apply(this);
            }

        },

        sellValue() {
            this.refreshData();
            this.data.valueFromNumber = Number(parseFloat(this.data.valueFrom.replace(/,/g, '')));
            this.data.valueToNumber = this.data.valueFromNumber / this.data.rate;
            this.data.valueTo = this.data.valueToNumber.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.totalPaymentsFirst = this.data.valueToNumber + (1 / 100) * this.data.valueToNumber;
            this.data.paymentFirst = this.data.totalPaymentsFirst / 8;
            this.data.totalPaymentsSecond = this.data.valueToNumber + (2 / 100) * this.data.valueToNumber;
            this.data.paymentSecond = this.data.totalPaymentsSecond / 12;
            this.data.totalPaymentsThird = this.data.valueToNumber + (3 / 100) * this.data.valueToNumber;
            this.data.paymentThird = this.data.totalPaymentsThird / 16;
            this.data.valueToNumber = this.data.valueToNumber.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.totalResult = this.data.valueToNumber.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.totalPaymentsFirst = this.data.totalPaymentsFirst.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.paymentFirst = this.data.paymentFirst.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.totalPaymentsSecond = this.data.totalPaymentsSecond.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.paymentSecond = this.data.paymentSecond.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.totalPaymentsThird = this.data.totalPaymentsThird.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.paymentThird = this.data.paymentThird.toLocaleString("en-US", {maximumFractionDigits: 2,});
            console.log("sell");
        },

        buyValue() {
            this.refreshData();
            this.data.valueToNumber = Number(parseFloat(this.data.valueTo.replace(/,/g, '')));
            this.data.valueFromNumber = this.data.valueToNumber * this.data.rate;
            this.data.valueFrom = this.data.valueFromNumber.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.totalPaymentsFirst = this.data.valueFromNumber + (1 / 100) * this.data.valueFromNumber;
            this.data.paymentFirst = this.data.totalPaymentsFirst / 8;
            this.data.totalPaymentsSecond = this.data.valueFromNumber + (2 / 100) * this.data.valueFromNumber;
            this.data.paymentSecond = this.data.totalPaymentsSecond / 12;
            this.data.totalPaymentsThird = this.data.valueFromNumber + (3 / 100) * this.data.valueFromNumber;
            this.data.paymentThird = this.data.totalPaymentsThird / 16;
            this.data.valueFromNumber = this.data.valueFromNumber.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.totalResult = this.data.valueFromNumber.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.totalPaymentsFirst = this.data.totalPaymentsFirst.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.paymentFirst = this.data.paymentFirst.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.totalPaymentsSecond = this.data.totalPaymentsSecond.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.paymentSecond = this.data.paymentSecond.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.totalPaymentsThird = this.data.totalPaymentsThird.toLocaleString("en-US", {maximumFractionDigits: 2,});
            this.data.paymentThird = this.data.paymentThird.toLocaleString("en-US", {maximumFractionDigits: 2,});
            console.log("buy" , "valueFromNumber = " + this.data.valueFromNumber, "valueFrom = " + this.data.valueFrom);
        },
    }));
});


/* new converter */
$('.currency__dropdown__link').on('click',function(e){
    e.preventDefault()
    $(".currency__dropdown-wrap.w-dropdown").triggerHandler("w-close.w-dropdown")
    const flag = $(this).find('.currency-logo').text()
    const currencyName = $(this).find('.toggle__text').text()
    const selectedCurrencyLink = $(this).attr("href")
    $('#currency-logo').text(flag)
    $('#currency-name').text(currencyName)
    $('#currencyLearnMore').attr("href", selectedCurrencyLink)
})


/* dropdown list */
window.buttonsList = [
   {currencySymbol: '$', countryFlag: '🇺🇸', currencyName: 'USD', currencyDescription: 'United States dollar'},
   {currencySymbol: '€', countryFlag: '🇪🇺', currencyName: 'EUR', currencyDescription: 'Euro'},
   {currencySymbol: 'د.إ', countryFlag: '🇦🇪', currencyName: 'AED', currencyDescription: 'United Arab Emirates Dirham'},
   {currencySymbol: 'A$', countryFlag: '🇦🇺', currencyName: 'AUD', currencyDescription: 'Australian Dollar'},
   {currencySymbol: 'Лв.', countryFlag: '🇧🇬', currencyName: 'BGN', currencyDescription: 'Bulgarian Lev'},
   {currencySymbol: 'C$', countryFlag: '🇨🇦', currencyName: 'CAD', currencyDescription: 'Canadian Dollar'},
   {currencySymbol: 'CHf', countryFlag: '🇨🇭', currencyName: 'CHF', currencyDescription: 'Swiss Franc'},
   {currencySymbol: '¥', countryFlag: '🇨🇳', currencyName: 'CNY', currencyDescription: 'Chinese Yuan'},
   {currencySymbol: 'Kč', countryFlag: '🇨🇿', currencyName: 'CZK', currencyDescription: 'Czech Koruna'},
   {currencySymbol: 'Kr.', countryFlag: '🇩🇰', currencyName: 'DKK', currencyDescription: 'Danish Krone'},
 	 {currencySymbol: '£', countryFlag: '🇬🇧', currencyName: 'GBP', currencyDescription: 'British Pound'},
   {currencySymbol: 'HK$', countryFlag: '🇭🇰', currencyName: 'HKD', currencyDescription: 'Hong Kong Dollar'},
   {currencySymbol: 'kn', countryFlag: '🇭🇷', currencyName: 'HRK', currencyDescription: 'Croatian Kuna'},
   {currencySymbol: 'Ft', countryFlag: '🇭🇺', currencyName: 'HUF', currencyDescription: 'Hungarian Forint'},
   {currencySymbol: 'Rp', countryFlag: '🇮🇩', currencyName: 'IDR', currencyDescription: 'Indonesian Rupiah'},
   {currencySymbol: '₪', countryFlag: '🇮🇱', currencyName: 'ILS', currencyDescription: 'Israeli New Sheqel'},
   {currencySymbol: '₹', countryFlag: '🇮🇳', currencyName: 'INR', currencyDescription: 'Indian Rupee'},
   {currencySymbol: '¥', countryFlag: '🇯🇵', currencyName: 'JPY', currencyDescription: 'Japanese Yen'},
   {currencySymbol: '/-', countryFlag: '🇰🇪', currencyName: 'KES', currencyDescription: 'Kenyan Shilling'},
   {currencySymbol: 'ك', countryFlag: '🇰🇼', currencyName: 'KWD', currencyDescription: 'Kuwaiti Dinar'},
   {currencySymbol: 'Mex$', countryFlag: '🇲🇽', currencyName: 'MXN', currencyDescription: 'Mexican Peso'},
   {currencySymbol: 'RM', countryFlag: '🇲🇾', currencyName: 'MYR', currencyDescription: 'Malaysian Ringgit'},
   {currencySymbol: 'kr', countryFlag: '🇳🇴', currencyName: 'NOK', currencyDescription: 'Norwegian Krone'},
   {currencySymbol: '$', countryFlag: '🇳🇿', currencyName: 'NZD', currencyDescription: 'New Zealand Dollar'},
   {currencySymbol: 'ر.ع', countryFlag: '🇴🇲', currencyName: 'OMR', currencyDescription: 'Omani Rial'},
   {currencySymbol: '₱', countryFlag: '🇵🇭', currencyName: 'PHP', currencyDescription: 'Philippine Peso'},
   {currencySymbol: 'zł', countryFlag: '🇵🇱', currencyName: 'PLN', currencyDescription: 'Polish Zloty'},
   {currencySymbol: 'ر.ق', countryFlag: '🇶🇦', currencyName: 'QAR', currencyDescription: 'Qatari Rial'},
   {currencySymbol: 'lei', countryFlag: '🇷🇴', currencyName: 'RON', currencyDescription: 'Romanian New Leu'},
   {currencySymbol: 'ر.س', countryFlag: '🇸🇦', currencyName: 'SAR', currencyDescription: 'Saudi Riyal'},
   {currencySymbol: 'kr', countryFlag: '🇸🇪', currencyName: 'SEK', currencyDescription: 'Swedish Krona'},
   {currencySymbol: 'S$', countryFlag: '🇸🇬', currencyName: 'SGD', currencyDescription: 'Singapore Dollar'},
   {currencySymbol: '฿', countryFlag: '🇹🇭', currencyName: 'THB', currencyDescription: 'Thai Baht'},
   {currencySymbol: '₺', countryFlag: '🇹🇷', currencyName: 'TRY', currencyDescription: 'Turkish Lira'},
   {currencySymbol: 'USh', countryFlag: '🇺🇬', currencyName: 'UGX', currencyDescription: 'Ugandan Shilling'},
   {currencySymbol: 'R', countryFlag: '🇿🇦', currencyName: 'ZAR', currencyDescription: 'South African Rand'}
];

window.sellList = [
   {currencySymbol: '$', countryFlag: '🇺🇸', currencyName: 'USD', currencyDescription: 'United States dollar'},
   ];
