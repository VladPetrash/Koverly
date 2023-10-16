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
    Alpine.data("saving", () => ({
        open: false,
        checkFrom: false,
        checkTo: false,
        checkDate: true,
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
                this.data.save =
                    this.data.koverlyResult - this.data.valueToNumber;
                this.data.save = this.data.save.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                });
                this.open = true;
            } else {
                this.open = false;
            }
        },
    }));
});
