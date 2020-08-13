console.log('Generator Function')

function* helloGenerator() {
    yield "Viki ThangHoang"
    return 2020
}

// const executeFunction = helloGenerator() //result la 1 iterator
// console.log("result 1:",executeFunction.next()) //giong nhu la iterator
// console.log("result 2:",executeFunction.next()) //giong nhu la iterator, true, iterator het gia tri
// console.log("result 3:",executeFunction.next()) //giong nhu la iterator, true, iterator het gia tri
// console.log("result :", helloGenerator().next())

function* printName(){
    yield "reduct-saga"
}

function* hello() {
    yield "Xin chao"
    yield* printName()
    return "Ket thuc"
}


const execute = hello()
console.log("1: ",execute.next())
console.log("2: ",execute.next())
console.log("3: ",execute.next())



