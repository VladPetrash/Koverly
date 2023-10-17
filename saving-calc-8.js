window.buttonsListSaving = [
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
    /*{currencySymbol: 'kn', countryFlag: '🇭🇷', currencyName: 'HRK', currencyDescription: 'Croatian Kuna'},*/
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
 
 window.sellListSaving = [
     {
         currencySymbol: "$",
         countryFlag: "🇺🇸",
         currencyName: "USD",
         currencyDescription: "United States dollar",
     },
 ];
 
 window.addEventListener("alpine:init", () => {
     // sort a-z
     buttonsListSaving.sort(function (a, b) {
         var textA = a.currencyName.toUpperCase();
         var textB = b.currencyName.toUpperCase();
         return textA < textB ? -1 : textA > textB ? 1 : 0;
     });
     Alpine.data("saving", () => ({
         open: false,
         checkFrom: false,
         checkTo: false,
         checkDate: true,
         openDescription: false,
         data: {
             sellCurrency: {
                 currencySymbol: "$",
                 countryFlag: "🇺🇸",
                 currencyName: "USD",
                 currencyDescription: "United States dollar",
             },
             buyCurrency: {
                 currencySymbol: "€",
                 countryFlag: "🇪🇺",
                 currencyName: "EUR",
                 currencyDescription: "Euro",
             },
             valueFrom: "",
             valueTo: "",
             date: "",
             rate: 1,
             totalResult: 0,
             valueFromNumber: "",
             valueToNumber: "",
             koverlyResult: "",
             save: "",
             startOpen: true,
             minDate: "",
         },
 
         init() {
             this.data.date = new Date().toISOString().split("T")[0];
             this.refreshData();
         },
 
         validateDate() {
             var currentDate = new Date();
             var minDate = new Date(currentDate);
             minDate.setDate(currentDate.getDate() - 90);
             var minDateFormatted = minDate.toISOString().split("T")[0];
             if(this.data.date < minDateFormatted) {
                 this.data.date = minDateFormatted;
                 this.refreshData();
             } else {
                 this.refreshData();
             }
         },
 
         async refreshData() {
             let result;
             try {
                 const response = await fetch(
                     `https://yahoofinance-stocks1.p.rapidapi.com/stock-prices?EndDateInclusive=${this.data.date}&StartDateInclusive=${this.data.date}&Symbol=${this.data.buyCurrency.currencyName}=X&OrderBy=Ascending`,
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
                 console.log(result);
             } catch (e) {
                 console.log(e);
             }
             this.data.rate = result.results[0].low;
             console.log(this.data.rate);
             this.calculateValue();
         },
 
         calculateValue() {
             this.data.valueFromNumber = Number(
                 parseFloat(this.data.valueFrom.replace(/,/g, ""))
             );
             this.data.valueToNumber = Number(
                 parseFloat(this.data.valueTo.replace(/,/g, ""))
             );
             if (
                 this.data.valueFromNumber > 0 &&
                 this.data.valueFromNumber !== ""
             ) {
                 this.checkFrom = true;
             } else {
                 this.checkFrom = false;
             }
             if (
                 this.data.valueToNumber > 0 &&
                 this.data.valueFromNumber !== ""
             ) {
                 this.checkTo = true;
             } else {
                 this.checkTo = false;
             }
             if (this.data.date != "") {
                 this.checkDate = true;
             } else {
                 this.checkDate = false;
             }
             if (this.checkFrom && this.checkTo && this.checkDate) {
                 this.data.koverlyResult = (this.data.valueFromNumber * this.data.rate) - (0.001 * this.data.valueFromNumber);
                 this.data.save = this.data.koverlyResult - this.data.valueToNumber;
                 this.data.save = this.data.save.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
                 if(this.data.save > 0) {
                    this.open = true;
                    this.openDescription = false;
                 } else {
                    this.open = false;
                    this.openDescription = true;
                 }
             } else {
                 this.open = false;
                 this.openDescription = false;
             }
         },
     }));
 });
