
function fib (n) {
    if (n===0 || n == 1){
        return 1; 
    } else{
        return (fib(n-1) + fib(n-2))
    }  
}
for (var i = 0; i<6; i ++){
  console.log("The fibonacci of " + i + " is " + fib(i));
}