function nama(req,res) {
    const namaProduct = parseFloat(req.require.namaProduct)
    const hasil = namaProduct;
    res.send({message : `nama product adalah ,${hasil}`});
}
function id(req,res){
    const idProduct = parseFloat(req.require.idProduct)
    const hasil = idProduct;
    res.send({message : `id product adalah ,${hasil}`});
}
function harga(req,res) {
    const hargaProduct = parseFloat(req.require.hargaProduct)
    const hasil = hargaProduct;
    res.send({message : `harga product adalah ,${hasil}`});
}
function barcode(req,res) {
    const barcodeProduct = parseFloat(req.require.barcodeProduct)
    const hasil = barcodeProduct;
    res.send({message : `barcode product adalah ,${hasil}`});
}
module.exports = {
    nama,
    id,
    harga,
    barcode,
};
