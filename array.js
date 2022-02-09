const numbers = [2,3,4,5,6,7]

// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i] * 2)
//     sum += numbers[i]

// }
// console.log(sum)

// callback function

// const cb = (value, index, arr) =>{
//     console.log(value, index, arr)
// }

// numbers.forEach(cb)


// imperative way

// const arr = [1,2,3, null, false, 4,5,6, '', 'test', 9]

// let count = 0;

// for(let i=0; i < arr.length; i++)
// {
//     for(let j=i; j < arr.length - 1; j++){
//         if(!arr[j] || typeof arr[j] !== 'number'){
//             arr[j] = arr[j+1]
//             arr[j+1] = undefined;
//         }
//     }

//     if(arr[i] == undefined){
//         count++;
//     }
// }

// arr.length -= count;
// console.log(arr)

// const filteredArray = arr.filter((v) => typeof v == 'number');
// console.log(filteredArray)


// const newArr= []
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] == 'number'){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

// const a = {a:10},
// b = {a: 10};
// console.log(a == b)

const arr = [
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
    {id: 4, value: 40}
]

// splice -> mutable
const index = arr.findIndex(item => item.id == 2);
const arr1 = arr.splice(index, 1)
// console.log(arr1)


// filter -> immutable
// const arr2 = arr.filter((item) => item.id !== 3);
// console.log(arr)
// console.log(arr2)

const microphone ={
    brand: 'Fifine',
    indicator: true,
    price: 8000,
    color: 'Black',
    startRecording() {
        console.log('recording started')
    },
    stopRecording: () =>{
        console.log('recording stopped')
    }
}

Object.freeze(microphone)
microphone.newProperty = 'my new property'

console.log(microphone)


/**
 * There are two different parts in Object
 * 1. Noun / Adjective (state/data/property)
 * 2. Verb
 */