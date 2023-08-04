/* first calculator */
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
            valueFrom: '0',
            valueTo: '1,000',
            rate: 1,
            totalPaymentsFirst: 0,
            totalPaymentsSecond: 0,
            totalPaymentsThird: 0,
            paymentFirst: 0,
            paymentSecond: 0,
            paymentThird: 0,
            changeRate: true,
            totalResult: 0,
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
            try {
                let buy = this.data.buyCurrency.currencyName;
                let sell = this.data.sellCurrency.currencyName;
                const response = await fetch(
                    "https://app.koverly.com/api/currency/rate",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            buyCurrency: buy,
                            sellCurrency: sell,
                        }),
                        redirect: "follow",
                    }
                );
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
            this.data.valueTo = this.data.valueToNumber.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2,});
            this.data.valueToNumber = this.data.valueToNumber.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2,});
        },

        buyValue() {
            this.refreshData();
            this.data.valueToNumber = Number(parseFloat(this.data.valueTo.replace(/,/g, '')));
            this.data.valueFromNumber = this.data.valueToNumber * this.data.rate;
            this.data.valueFrom = this.data.valueFromNumber.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2,});
            this.data.valueFromNumber = this.data.valueFromNumber.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2,});
        },
    }));
});


/* second calculator */
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
    Alpine.data("exchanger2", () => ({
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
            totalPaymentsFirst: 0,
            totalPaymentsSecond: 0,
            totalPaymentsThird: 0,
            paymentFirst: 0,
            paymentSecond: 0,
            paymentThird: 0,
            changeRate: true,
            totalResult: 0,
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
            try {
                let buy = this.data.buyCurrency.currencyName;
                let sell = this.data.sellCurrency.currencyName;
                const response = await fetch(
                    "https://app.koverly.com/api/currency/rate",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            buyCurrency: buy,
                            sellCurrency: sell,
                        }),
                        redirect: "follow",
                    }
                );
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
            this.data.valueTo = this.data.valueToNumber.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2,});
            this.data.valueToNumber = this.data.valueToNumber.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2,});
        },

        buyValue() {
            this.refreshData();
            this.data.valueToNumber = Number(parseFloat(this.data.valueTo.replace(/,/g, '')));
            this.data.valueFromNumber = this.data.valueToNumber * this.data.rate;
            this.data.valueFrom = this.data.valueFromNumber.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2,});
            this.data.valueFromNumber = this.data.valueFromNumber.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2,});
        },
    }));
});
