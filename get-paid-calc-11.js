window.buttonsListGp = [
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
   /*{currencySymbol: '₹', countryFlag: '🇮🇳', currencyName: 'INR', currencyDescription: 'Indian Rupee'},*/
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

window.sellListGp = [
    {
        currencySymbol: "$",
        countryFlag: "🇺🇸",
        currencyName: "USD",
        currencyDescription: "United States dollar",
    },
];

window.addEventListener("alpine:init", () => {
    // sort a-z
    buttonsListGp.sort(function (a, b) {
        var textA = a.currencyName.toUpperCase();
        var textB = b.currencyName.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    Alpine.data("exchangerGp", () => ({
        data: {
            buyCurrency: {
                currencySymbol: "€",
                countryFlag: "🇪🇺",
                currencyName: "EUR",
                currencyDescription: "Euro",                
            },
            sellCurrency: {
                currencySymbol: "$",
                countryFlag: "🇺🇸",
                currencyName: "USD",
                currencyDescription: "United States dollar",
            },
            valueFrom: '0',
            valueTo: '1,000',
            rate: 1,
            inverseRate: 1,
            valueFromNumber: '',
            valueToNumber: ''
        },
        init() {
            this.refreshData(this.buyValue);
        },

        validate(evt) {
            var theEvent = evt || window.event;

            // Handle paste
            if (theEvent.type === "paste") {
                key = event.clipboardData.getData("text/plain");
            } else {
                // Handle key press
                var key = theEvent.keyCode || theEvent.which;
                key = String.fromCharCode(key);
            }
            var regex = /[0-9]|\./;
            if (!regex.test(key)) {
                theEvent.returnValue = false;
                if (theEvent.preventDefault) theEvent.preventDefault();
            }
        },

        async refreshData(callback) {
            let result;
            let inverseResult;
            let date = new Date().toISOString().split("T")[0];
            try {
                const response = await fetch(
                   `https://yahoofinance-stocks1.p.rapidapi.com/stock-prices?EndDateInclusive=${date}&StartDateInclusive=${date}&Symbol=${this.data.buyCurrency.currencyName}USD=X&OrderBy=Ascending`,
                   {
                       method: "GET",
                       headers: {
                           "X-RapidAPI-Key":
                               "6672486f35mshf89f62beecbe117p14025ejsn2594d0302357",
                           "X-RapidAPI-Host":
                               "yahoofinance-stocks1.p.rapidapi.com",
                           Accept: "application/json",
                       },
                   }
               );
                const inverseResponse = await fetch(
                   `https://yahoofinance-stocks1.p.rapidapi.com/stock-prices?EndDateInclusive=${date}&StartDateInclusive=${date}&Symbol=${this.data.buyCurrency.currencyName}=X&OrderBy=Ascending`,
                   {
                       method: "GET",
                       headers: {
                           "X-RapidAPI-Key":
                               "6672486f35mshf89f62beecbe117p14025ejsn2594d0302357",
                           "X-RapidAPI-Host":
                               "yahoofinance-stocks1.p.rapidapi.com",
                           Accept: "application/json",
                       },
                   }
               );
                result = JSON.parse(await response.text());
                inverseResult = JSON.parse(await inverseResponse.text());
                console.log("result: " + result);
                console.log("inverseResult: " + inverseResult);
            } catch (e) {
                console.log(e);
            }
            this.data.rate = result.results[0].high;
            this.data.inverseRate = inverseResult.results[0].high;
            console.log("rate: " + this.data.rate);
            console.log("inverseRate: " + this.data.inverseRate);
            console.log("rateDate: " + date);
            if (callback) {
                callback.apply(this);
            }
        },

        sellValue() {
            this.refreshData();
            this.data.valueFromNumber = Number(parseFloat(this.data.valueFrom.replace(/,/g, '')));
            this.data.valueToNumber = this.data.valueFromNumber / this.data.rate;
            this.data.valueTo = this.data.valueToNumber.toLocaleString("en-US", {maximumFractionDigits: 2,});
            console.log("sell");
        },

        buyValue() {
            this.refreshData();
            this.data.valueToNumber = Number(parseFloat(this.data.valueTo.replace(/,/g, '')));
            this.data.valueFromNumber = this.data.valueToNumber * this.data.rate;
            this.data.valueFrom = this.data.valueFromNumber.toLocaleString("en-US", {maximumFractionDigits: 2,});
            console.log("buy" , "valueFromNumber = " + this.data.valueFromNumber, "valueFrom = " + this.data.valueFrom);
        },
    }));
});
