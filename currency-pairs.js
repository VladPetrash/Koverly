<script>
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

</script>


<script src="https://cdn.jsdelivr.net/npm/@loomchild/webflow-alpinejs@2/dist/index.js"></script>

<script>
window.sellList = [
  {
    currencySymbol: "$",
    countryFlag: "🇺🇸",
    currencyName: "USD",
    currencyDescription: "United States dollar",
  },
];
if ( localStorage.hasOwnProperty("valueFrom") &&Number(localStorage.getItem("valueFrom")) != 0) {
       amountPreloader.style.display = 'flex';
      }


window.addEventListener("alpine:init", () => {
// sort a-z
buttonsList.sort(function(a, b) {
    var textA = a.currencyName.toUpperCase();
    var textB = b.currencyName.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
  Alpine.data("exchanger", () => ({
    data: {
      buyCurrency: {
        currencySymbol:
          "{{wf {&quot;path&quot;:&quot;currency-to:currency-symbol&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        countryFlag:
          "{{wf {&quot;path&quot;:&quot;currency-to:flag&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        currencyName:
          "{{wf {&quot;path&quot;:&quot;currency-to:symbol&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        currencyDescription:
          "{{wf {&quot;path&quot;:&quot;currency-to:name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      },
      sellCurrency: {
        currencySymbol:
          "{{wf {&quot;path&quot;:&quot;currency-main:currency-symbol&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        countryFlag:
          "{{wf {&quot;path&quot;:&quot;currency-main:flag&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        currencyName:
          "{{wf {&quot;path&quot;:&quot;currency-main:symbol&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        currencyDescription:
          "{{wf {&quot;path&quot;:&quot;currency-main:name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      },
      valueFrom: 100,
      valueTo: 0,
      result: 0,
      rate: null,
    },
    init() {
   
   let setInit = async()=>{
      await this.refreshData();
      // if value from selected on previous page -> set it on current page
      if (
        localStorage.hasOwnProperty("valueFrom") &&
        Number(localStorage.getItem("valueFrom")) != 0
      ) {
        this.data.valueFrom = localStorage.getItem("valueFrom")
        console.log(this.data.valueFrom)
        this.sellValue();
        localStorage.removeItem("valueFrom");
        amountPreloader.style.display = 'none';
       }else{
        this.sellValue();
       }
      }
       this.$nextTick(setInit)
    },
    async refreshData() {
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
    },

    numberWithCommas(x) {
      let string = Number.parseFloat(x).toFixed(2) ?? 0;
      return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    sellValue() {
      let result = parseFloat(
        this.data.valueFrom / this.data.rate
      ).toFixed(2);
      this.data.result = result;
    },
    convert() {
        localStorage.setItem("valueFrom", this.data.valueFrom);
        this.sellValue();
    },

    buyValue() {
      this.data.valueFrom = parseFloat(
        this.data.valueTo * this.data.rate
      ).toFixed(2);
    },
  }));
  Alpine.store("rateValue", {
    data: {
      buyCurrency: {
        currencySymbol:
          "{{wf {&quot;path&quot;:&quot;currency-to:currency-symbol&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        countryFlag:
          "{{wf {&quot;path&quot;:&quot;currency-to:flag&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        currencyName:
          "{{wf {&quot;path&quot;:&quot;currency-to:symbol&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        currencyDescription:
          "{{wf {&quot;path&quot;:&quot;currency-to:name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      },
      sellCurrency: {
        currencySymbol:
          "{{wf {&quot;path&quot;:&quot;currency-main:currency-symbol&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        countryFlag:
          "{{wf {&quot;path&quot;:&quot;currency-main:flag&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        currencyName:
          "{{wf {&quot;path&quot;:&quot;currency-main:symbol&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
        currencyDescription:
          "{{wf {&quot;path&quot;:&quot;currency-main:name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      },
      rate: 1,
    },
    preloaderStatus: true,
    init() {
      this.getRateData();
    },

    async getRateData() {
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
      setTimeout(() => {
        this.preloaderStatus = false;
      }, 100);
    },
  });
  Alpine.data("stats", () => ({
    data: {
      dailyHigh: 0,
      dailyLow: 0,
      dailyAverage: 0,
      twoWeekHigh: 0,
      twoWeekLow: 0,
    },
    preloaderStatsStatus: true,
    init() {
      setTimeout(() => {
        this.getDataFromAPI();
      }, 2500);
    },
    getDataFromAPI() {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "6672486f35mshf89f62beecbe117p14025ejsn2594d0302357",
          "X-RapidAPI-Host": "yahoofinance-stocks1.p.rapidapi.com",
        },
      };
      const endpoint =
        "https://yahoofinance-stocks1.p.rapidapi.com/stock-metadata?Symbol={{wf {&quot;path&quot;:&quot;currency-to:symbol&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}%3DX";

      fetch(endpoint, options)
        .then((response) => response.json())
        .then((response) => {
          this.data.dailyHigh = response.result.regularMarketDayHigh;
          this.data.dailyLow = response.result.regularMarketDayLow;
          this.data.dailyAverage =
            (response.result.regularMarketDayLow +
              response.result.regularMarketDayHigh) /
            2;
          this.data.twoWeekHigh = response.result.fiftyTwoWeekHigh;
          this.data.twoWeekLow = response.result.fiftyTwoWeekLow;
          setTimeout(() => {
            this.preloaderStatsStatus = false;
          }, 200);
        })
        .catch((err) => console.error(err));
    },
  }));

  Alpine.data("converters", () => ({
    items: [
      { value: 1, textValue: "1" },
      { value: 5, textValue: "5" },
      { value: 10, textValue: "10" },
      { value: 25, textValue: "25" },
      { value: 50, textValue: "50" },
      { value: 100, textValue: "100" },
      { value: 500, textValue: "500" },
      { value: 1000, textValue: "1,000" },
      { value: 5000, textValue: "5,000" },
      { value: 10000, textValue: "10,000" },
      { value: 50000, textValue: "50,000" },
    ],
    setNumAfterCommas(num) {
      if (num < 20) {
        return num.toFixed(5);
      } else if (num > 20 && num < 500) {
        return num.toFixed(4);
      } else if (num > 500 && num < 10000) {
        return num.toFixed(2);
      } else if (num > 10000) {
        return num.toFixed(1);
      }
    },
    init() {},
  }));
});
</script>
