
let a = prompt("Bạn là ai")
if (a=="admin"){
    let b = prompt("nhập mật khẩu")
    if (b=="master"){
       alert("xin chào")
    }else if (b=="null"){
        alert("canceld")
    }else alert("wrong password")
}else if (a=="null"){
    alert("canceld")
}else alert("I don’t know you")




