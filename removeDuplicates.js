//Remove duplicates and sort in Order

//1.  Using Set
const arr = [1,3,4,5,5,3,2,6]

const uniqueArray  = [... new Set(arr)].sort((a,b)=> a-b);
console.log(uniqueArray);

// 2 . Using filters and indexOf

const arr = [1,3,4,5,5,3,2,6];
const uniqueArray = arr.filter((item , index) =>  arr.indexOf(item) == index ).sort((a,b)=> a-b);
                    
console.log(uniqueArray);


//  3. Using for of and includes

const uniqueArray = [];

for ( let n of arr){
    if(!uniqueArray.includes(n)){
        uniqueArray.push(n)
    }
    uniqueArray.sort((a,b)=> a-b);
}
console.log(uniqueArray)







