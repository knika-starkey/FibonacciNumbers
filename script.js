let newf;
let oldoldf = 1;
let oldf = 1;
let n = prompt();
if(isNaN(n))
    alert("n Должно быть числом");
else{
    document.write(oldoldf + " " + oldf + " ");
    for(let i = 1; i <= n; i++){
        newf = oldf + oldoldf;
        oldoldf = oldf;
        oldf = newf;
        document.write(newf + " ");
    }
}