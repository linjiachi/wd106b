//4-2陣列處理
function find(array, item){
    for(let i=0; i<array.length; i++){
        if (array[i] === item)/*三個等於是型態,內容一樣*/
        return i              /*兩個等於是內容一樣*/
    }
    return -1
}

/*變數宣告: var前後皆可使用 let只有之後的程式碼或一整個區塊{}*/

let idx = find([ 1, 4, 5, 8, 9], 5)
console.log('idx=', idx)//=>idx= 2

idx = find([ 1, 4, 5, 8, 9], 6)
console.log('idx=', idx)//=>idx= -1
