let tahun = 1994

if(tahun%400==0){
    console.log("Kabisat")
}else if(tahun%100==0){
    console.log("Bukan Kabisat")
}else if(tahun%4==0){
    console.log("Kabisat")
}else{
    console.log("Bukan Kabisat")
}

let Hewan = "Laba-Laba"

switch(Hewan){
    case 'Kucing':
        console.log('Meow')
    break
    case 'Anjing':
        console.log('woof!')
    break
    case 'Sapi':
        console.log('Moooo')
    break
    case 'Kambing':
        console.log('Mbeeek')
    break
    default:
        console.log("Hewan Tidak Dikenali")
}