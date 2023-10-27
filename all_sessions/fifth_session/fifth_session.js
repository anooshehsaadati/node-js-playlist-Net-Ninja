// Normal Function Statement
function sayHi(){
    console.log('hi');
}

sayHi();

// Function Expression
var sayBye = function(){
    console.log('bye');
};

sayBye();

// Call Function
function callFunction(func){
    func();
}

callFunction(sayBye);