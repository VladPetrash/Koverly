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
  
  window.sellList = [
     {
         currencySymbol: "$",
         countryFlag: "🇺🇸",
         currencyName: "USD",
         currencyDescription: "United States dollar",
     },
  ];
  
  window.sellList = [
     {
         currencySymbol: "$",
         countryFlag: "🇺🇸",
         currencyName: "USD",
         currencyDescription: "United States dollar",
     },
  ];
  
  window.addEventListener("alpine:init", () => {
     // sort a-z
     buttonsList.sort(function (a, b) {
         var textA = a.currencyName.toUpperCase();
         var textB = b.currencyName.toUpperCase();
         return textA < textB ? -1 : textA > textB ? 1 : 0;
     });
     Alpine.data("exchanger", () => ({
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
             valueFrom: '1,000',
             valueTo: '0',
             rate: 1,
             inverseRate: 1,
             valueFromNumber: '',
             valueToNumber: '',
             rateLock: 0,
             totalFrom: 0,
             
         },
         init() {
             this.refreshData(this.sellValue);
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
             //let result;
             //let inverseResult;
             //let date = new Date().toISOString().split("T")[0];
             let data = "";
             try {
                const response = await fetch("https://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3D" + this.data.buyCurrency.currencyName + this.data.sellCurrency.currencyName + "%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json");
            
                if (response.status !== 200) {
                  console.error("Помилка отримання обмінного курсу");
                  return;
                }
            
                data = await response.json();
            
                if (data.query.results.row) {
                  sessionStorage['exchangeRate'] = data.query.results.row.rate;
                } else {
                  console.error("Неможливо отримати обмінний курс");
                }
             } catch (e) {
                 console.log(e);
             }
             //this.data.rate = data.query.results.row.rate;
             console.log("data: " + data);
             if (callback) {
                 callback.apply(this);
             }
         },
  
         sellValue() {
             this.refreshData();
             this.data.valueFromNumber = Number(parseFloat(this.data.valueFrom.replace(/,/g, '')));
             this.data.rateLock = this.data.valueFromNumber * 0.001;
             this.data.totalFrom = this.data.valueFromNumber - this.data.rateLock;
             this.data.valueToNumber = this.data.totalFrom * this.data.rate;
             this.data.valueTo = this.data.valueToNumber.toLocaleString("en-US", {maximumFractionDigits: 2,});
             this.data.rateLock = this.data.rateLock.toLocaleString("en-US", {maximumFractionDigits: 2,});
             this.data.totalFrom = this.data.totalFrom.toLocaleString("en-US", {maximumFractionDigits: 2,});
             console.log("sell");
         },
  
         buyValue() {
             this.refreshData();
             this.data.valueToNumber = Number(parseFloat(this.data.valueTo.replace(/,/g, '')));
             this.data.valueFromNumber = this.data.valueToNumber / this.data.rate / 0.999;
             this.data.rateLock = this.data.valueFromNumber * 0.001;
             this.data.totalFrom = this.data.valueFromNumber - this.data.rateLock;
             this.data.valueFrom = this.data.valueFromNumber.toLocaleString("en-US", {maximumFractionDigits: 2,});
             this.data.rateLock = this.data.rateLock.toLocaleString("en-US", {maximumFractionDigits: 2,});
             this.data.totalFrom = this.data.totalFrom.toLocaleString("en-US", {maximumFractionDigits: 2,});
             console.log("buy" , "valueFromNumber = " + this.data.valueFromNumber, "valueFrom = " + this.data.valueFrom);
         },
     }));
  });
