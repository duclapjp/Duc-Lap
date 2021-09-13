
// Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv)
// Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
//     Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
//     Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
//     Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
//     Có chức năng bật và tắt điện thoại.
//     Có chức năng xạc pin điện thoại.
//     Có chức năng soạn tin nhắn.
//     Có chức năng nhận tin nhắn từ một chiếc mobile khác.
//     Có chức năng gửi tin nhắn tới một chiếc mobile khác.
//     Có chức năng xem tin trong hộp thư đến.
//     Có chức năng xem tin đã gửi.
//     Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
//     Các chức năng không thể hoạt động nếu điện thoại chưa bật.

    //Tên class: Mobile
// thuộc tính:
// trạng thái pin: baterry
// tin nhắn đang soạn thảo: draft
//tin nhắn trong hộp thư đến : inbox
//tin nhắn đã gửi : outbox

//chức năng:
//ktra trạng thái:  Checkstatus - boolean
//bật tắt: onOff  - boolean
//soạn tin nhắn: writting - void
//nhận tin nhắn : inputMessage  - void
//gủi tin nhắn : sendMessage -
//xem hộp thư đến  : getInbox
//xem thư đã gửi  : getOutbox

class Mobile{
    constructor(_name) {
        this.name = _name;
        this.baterry  = 100;
        this.draft = "";
        this.inbox = [];
        this.Outbox = [];
        this.status = true;

    }
    checkStatus(){
        return this.status;
    }
    onOff(){
        this.status !==this.status;
    }
    writting(text){
        this.baterry--;
        this.draft = text;
    }
   sendMessage(phone){
        this.baterry--;
        //this : điện thoại hiện tại
       //phone:điện thoại gửi sang
       //1.chuyển tin nhắn nháp của this sang hộp thư đến của phone
       phone.inbox.push(this.draft)
       //2.chuyên tin nhắn nháp của this sang hộp thư đã gửi
       this.Outbox.push(this.draf);
       //3.xóa tin nhắn nháp
       this.draft= "";
   }
    getInbox(){
        this.baterry--;
        return this.inbox;
    }
    getOutbox(){
        this.baterry--;
        return this.Outbox;
    }

}
let dtA = new Mobile('Lập');
let dtB = new Mobile('Linh');

function sendA(){
    //b1: lấy dữ liệu
    let mss = document.getElementById('ipa').value;
    //b2: gán thư nháp
    dtA.writting(mss);
    //b3: gửi tin
    dtA.sendMessage(dtB);
    //b4: hiển thị hộp thư đến:
    let ibLinh = dtB.inbox.join("-");
    document.getElementById('ib2').innerText = ibLinh;

}
function sendB(){
    let mss2 = document.getElementById('ipb').value;
    dtB.writting(mss2);
    dtB.sendMessage(dtA);
    let ibLap = dtA.inbox.join("-");
    document.getElementById('ib1').innerText = ibLap;
}
