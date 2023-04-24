function validate(){
    const name = document.getElementById("name")
    const nameout= name.value;
    const namelogin = document.getElementById("namelogin")
    const nameloginout= namelogin.value
    const pass = document.getElementById("pass")
    const passout = pass.value
    if ( nameout.match(/[^a-zA-Z]+/)) {
        alert("Họ tên phải chỉ chứa chữ cái!");
      }
    if ( nameloginout.match(/[^\w]+/)) {
        alert("Tên đăng nhập kiểu chữ hoặc số!");
      }
    if ( passout.match(/[^\w|\S]+/)) {
        alert("Mật khẩu phải chứa chữ,số và kí tự đặt biệt,không khoảng trắng");
      }
}