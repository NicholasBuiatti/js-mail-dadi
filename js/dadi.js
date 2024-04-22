let userNum = Math.floor(Math.random() * 6 + 1);
console.log(userNum);

let pcNum = Math.floor(Math.random() * 6 + 1);
console.log(pcNum);

if (userNum > pcNum) {
    console.log(`Ha vinto l'user!`);
} else if (userNum < pcNum) {
    console.log(`Ha vinto il pc!`);
} else {
    console.log(`pareggio!`);
}