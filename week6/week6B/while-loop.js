const bankInfo = [
    {
        fullName: 'Tobi Gloria',
        amount: 30000,
        bankName: "GTBank",
    },
    {
        fullName: 'Tom Timoty',
        amount: 500000,
        bankName: "Union Bank",
    },
    {
        fullName: 'Ram Jerry',
        amount: 550000,
        bankName: "Union Bank",
    },
    {
        fullName: 'Gray Farm',
        amount: 150000,
        bankName: "Union Bank",
    },
]

let count = 0;
while (count < bankInfo.length) {
    document.getElementById("holdBankInfo").innerHTML += `<div class="holdContent">
    <div class="infoOne">
        <h4 class="fullName">${bankInfo[count].fullName}</h4>
        <p class="amount">${bankInfo[count].amount}</p>
    </div>
        <div class="infoTwo">
        <h4 class="bankName">${bankInfo[count].bankName}</h4>
        <p date="date">12-02-2022</p>
    </div>
</div>`
    count++;
}