years.oninput = () => {
    let years = document.getElementById('years');
    let yearsValue = document.getElementById("year-value");
    yearsValue.value = years.value;
}

rate.oninput = () => {
    let rate = document.getElementById('rate');
    let rateValue = document.getElementById('rate-value');
    rateValue.value = rate.value;
}

let calculateMonthlyPayment = (loanAmount, yearsValue, rate) => {
    let monthlyRate = (rate / 100) / 12;
    let monthlyPayment = monthlyRate * loanAmount / (1-Math.pow((1 + monthlyRate), -yearsValue * 12));
    return {loanAmount, yearsValue, rate, monthlyPayment};
};

let calculate = document.getElementById('calculate');

calculate.addEventListener('click', () => {
    let requireds = ['years', 'rate-value', 'loan-amount', 'annual-tax', 'annual-insurance'],
        calcObj = {},
        allClear = true;

    requireds.forEach( (item) => {
        form = document.getElementById(item);
        calcObj[item] = document.getElementById(item).value;
        if (requireds.indexOf(item) !== -1 && calcObj[item] == '') {
            form.classList.add('error');
            allClear = false;
        } else {
            form.classList.remove('error');
            allClear;
        }
    })
    
    if (allClear) {
        let yearsValue = document.getElementById('years').value;
        let rate = document.getElementById('rate-value').value;
        let loanAmount = document.getElementById('loan-amount').value;
        let taxes = document.getElementById('annual-tax').value;
        let insurance = document.getElementById('annual-insurance').value;
        let {monthlyPayment} = calculateMonthlyPayment(loanAmount, yearsValue, rate);
        
        let annualTaxes = taxes / 12;
        let annualInsurance = insurance / 12;
        let total = annualTaxes + annualInsurance + monthlyPayment;
        window.screen.availWidth >= "768" ? (document.getElementById("small-results").style.height =  "440px") : (document.getElementById("small-results").style.height =  "290px");
            
        document.getElementById('principal').innerHTML = `$${monthlyPayment.toFixed(2)}`;
        document.getElementById('tax').innerHTML = `$${annualTaxes.toFixed(2)}`;
        document.getElementById('insurance').innerHTML = `$${annualInsurance.toFixed(2)}`;
        document.getElementById('total').innerHTML = `$${total.toFixed(2)}`;
        calculate.innerHTML = "RECALCULATE";
    }

});
