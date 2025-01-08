function tinhTip(bill) {
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
    const total = bill + tip;
    console.log(`Bill là ${bill}, tip là ${tip.toFixed(2)}, tổng hóa đơn là ${total.toFixed(2)}`);
}

tinhTip(275);  
tinhTip(40);   
tinhTip(430);  
