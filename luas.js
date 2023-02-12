function luasPersegi(s){
    let hasil = s**2
    return hasil
}

function luasPersegiPanjang(p,l){
    let hasil = p*l
    return hasil
}
function luasLingkaran(r){
    const PI =3.14
    let hasil = PI * r ** 2
    return hasil
}

module.exports = {
    luasPersegi,
    luasPersegiPanjang,
    luasLingkaran
}
// exports.luasPersegi = luasPersegi
// exports.luasPersegiPanjang = luasPersegiPanjang
// exports.luasLingkaran = luasLingkaran
