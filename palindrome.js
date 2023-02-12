let kata = "Kasur Nababan hancur"
//normalisasi
kata=kata.toLowerCase()
//split
let kataArray = kata.split('')
kataArray.reverse()
console.log(kataArray)

let kataDibalik = kataArray.toString()
//hapus koma
kataDibalik = kataDibalik.replaceAll(',','')

console.log(kataDibalik)
if(kata === kataDibalik){
    console.log("Palindrom")
}else{
    console.log('Bukan Palindrome')
}