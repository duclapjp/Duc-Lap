let Productlist = [
    new Product('Bàn phấn',1500,3,'Bàn nhập khẩu ở nga, chất lượng cao'),
    new Product('Giường',10000,4,'giường xoan đào, chất lượng cao, màu xám óc chó')
];

function showAll(){
    let conten='';
for (let i=0;i<Productlist.length;i++){
    conten+='<tr>\n' +
        '                            <td>'+Productlist[i].getName()+'</td>\n' +
        '                            <td>'+Productlist[i].getPrice()+'</td>\n' +
        '                            <td>'+Productlist[i].getQuantity()+'</td>\n' +
        '                            <td>'+Productlist[i].getDescription()+'</td>\n' +
        '                            <td><button type="button" onclick="editProduct('+i+')">Sửa</button></td>\n' +
        '                            <td><button type="button" onclick="deleteProduct('+i+')">Xóa</button></td>\n' +
        '                         </tr>'
    }
    document.getElementById('qlsp1').innerHTML = conten;
}
showAll();

function creatProduct(){
    let newName = document.getElementById('name').value;
    let newPrice = document.getElementById('price').value;
    let newQuantity = document.getElementById('quantity').value;
    let newDescription = document.getElementById('description').value;
    let newp = new Product(newName,newPrice,newQuantity,newDescription);
    Productlist.push(newp);
    showAll();
}
function deleteProduct(index){
    Productlist.splice(index,1);
    showAll();
}
function editProduct(index){
    let neN = prompt('nhập lại tên sản phẩm');
    let neP = prompt('nhập lại giá sản phẩm');
    let neQ = prompt('nhập lại số lượng sản phẩm');
    let neD = prompt('nhập lại mô tả sản phẩm');
    Productlist[index].setName(neN);
    Productlist[index].setPrice(neP);
    Productlist[index].setQuantity(neQ);
    Productlist[index].setDescription(neD);
    showAll()
}

