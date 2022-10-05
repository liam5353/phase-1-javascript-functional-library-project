function myEach(collection, alert) {
    let arr = Object.values(collection)
    // arr.forEach((ele) => alert(ele)) - usual for iterating thorugh collection through array - non mutating
    // for(let i = 0; i<arr.length; i++) {
    //     alert(arr[i])
    // }
    for(let ele of arr) { //more preferred method
        alert(ele)
    }
    return collection
}

function myMap(collection, callback) {

    let arr = Object.values(collection)
    let newArr = []
    for(let ele of arr) {
        newArr.push(callback(ele))
    }
    return newArr
}

function myReduce(collection, callback, ...acc) {
    let arr = Object.values(collection)
    let newAcc;
    let i;
    if(acc.length > 0) {
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = arr[0]
        i = 1
    }

    for(i; i < arr.length; i++) {
        newAcc = callback(newAcc, arr[i], collection)   
    }
    return newAcc

}

function myFind(collection, predicate) {
    let myFind = Object.values(collection, predicate)
    return myFind
}

