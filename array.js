const numbers = [2,3,4,5,6,7]

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i] * 2)
    sum += numbers[i]

}
console.log(sum)