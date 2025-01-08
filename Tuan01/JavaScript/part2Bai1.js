function calcAverage(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

const avgDolphins1 = calcAverage(44, 23, 71); 
const avgKoalas1 = calcAverage(65, 54, 49);  
const avgDolphins2 = calcAverage(85, 54, 41); 
const avgKoalas2 = calcAverage(23, 34, 27);  

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins thằng cúp! (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas thắng cúp! (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("Không team nào thắng!");
    }
}
console.log("Data 1:");
checkWinner(avgDolphins1, avgKoalas1); 

console.log("Data 2:");
checkWinner(avgDolphins2, avgKoalas2); 
