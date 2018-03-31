//2-3
function sqrt(n){
    let x = 0
    for (x=0; x*x < n; x+=0.001){
    }/*代表程式碼正式結束*/
    return x
}

console.log('sqrt(4)=', sqrt(4))