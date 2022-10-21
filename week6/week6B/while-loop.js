const bankInfo = [
    {
        fullName: 'Tobi Gloria',
        amount: 30000,
        bankName: "GTBank",
    },
    {
        fullName: 'Tom Shelby',
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

// let count = 0;
// while (count < bankInfo.length) {
//     document.getElementById("holdBankInfo").innerHTML += `<div class="holdContent">
//     <div class="infoOne">
//         <h4 class="fullName">${bankInfo[count].fullName}</h4>
//         <p class="amount">${bankInfo[count].amount}</p>
//     </div>
//         <div class="infoTwo">
//         <h4 class="bankName">${bankInfo[count].bankName}</h4>
//         <p date="date">12-02-2022</p>
//     </div>
// </div>`
//     count++;
// }

// JavaScript Do While Loop

// let count = 0;

// do {
//     document.getElementById("holdBankInfo").innerHTML += `<div class="holdContent">
//         <div class="infoOne">
//             <h4 class="fullName">${bankInfo[0].fullName}</h4>
//             <p class="amount">${bankInfo[count].amount}</p>
//         </div>
//             <div class="infoTwo">
//             <h4 class="bankName">${bankInfo[count].bankName}</h4>
//             <p date="date">12-02-2022</p>
//         </div>
//     </div>`
//     count++;
// }

// while (10 < bankInfo.length)


// for (let i = 0; i < bankInfo.length; i++) {
//     document.getElementById("holdBankInfo").innerHTML += `<div class="holdContent">
//         <div class="infoOne">
//             <h4 class="fullName">${bankInfo[i].fullName}</h4>
//             <p class="amount">${bankInfo[i].amount}</p>
//         </div>
//             <div class="infoTwo">
//             <h4 class="bankName">${bankInfo[i].bankName}</h4>
//             <p date="date">12-02-2022</p>
//         </div>
//     </div>`
// }

// bankInfo.forEach((item) => {
//     document.getElementById("holdBankInfo").innerHTML += `<div class="holdContent">
//         <div class="infoOne">
//             <h4 class="fullName">${item.fullName}</h4>
//             <p class="amount">${item.amount}</p>
//         </div>
//             <div class="infoTwo">
//             <h4 class="bankName">${item.bankName}</h4>
//             <p date="date">12-02-2022</p>
//         </div>
//     </div>`
// });


// bankInfo.map((item) => {
//     document.getElementById("holdBankInfo").innerHTML += `<div class="holdContent">
//         <div class="infoOne">
//             <h4 class="fullName">${item.fullName}</h4>
//             <p class="amount">${item.amount}</p>
//         </div>
//             <div class="infoTwo">
//             <h4 class="bankName">${item.bankName}</h4>
//             <p date="date">12-02-2022</p>
//         </div>
//     </div>`
// });

// for (let x in bankInfo) {
//     document.getElementById("holdBankInfo").innerHTML += `<div class="holdContent">
//         <div class="infoOne">
//             <h4 class="fullName">${bankInfo[x].fullName}</h4>
//             <p class="amount">${bankInfo[x].amount}</p>
//         </div>
//             <div class="infoTwo">
//             <h4 class="bankName">${bankInfo[x].bankName}</h4>
//             <p date="date">12-02-2022</p>
//         </div>
//     </div>`
// }

// for (let x of bankInfo) {
//     document.getElementById("holdBankInfo").innerHTML += `<div class="holdContent">
//         <div class="infoOne">
//             <h4 class="fullName">${x.fullName}</h4>
//             <p class="amount">${x.amount}</p>
//         </div>
//             <div class="infoTwo">
//             <h4 class="bankName">${x.bankName}</h4>
//             <p date="date">12-02-2022</p>
//         </div>
//     </div>`
// }