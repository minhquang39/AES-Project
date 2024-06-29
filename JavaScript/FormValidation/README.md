Tạo một fuction thực hiện chức năng kiểm tra form

Đầu vào sẽ là một đối tượng bao gồm form và các thứ cần kiểm tra của nó

Các thứ cần kiểm tra ở đây là tiêu chuẩn về tên, email, mật khẩu

Tạo function Validator, hàm này nhận vào tham số là options, gồm form cần xử lý và các tiêu chuẩn yêu cầu
function Validator(options) {
  console.log(options);
}

Về bản chất hàm cũng là đối tượng nên ta có thể tạo ra các hàm sau
Validator.isFullName = function () {};
Validator.isPassword = function () {};

Đầu tiên kiểm tra xem form cần xử lý có tồn tại ko?

Khi form có tồn tại thì lấy ra ô input trong form
Vì rules là một mảng có nhiều xử lý input nên ta dùng forEach để lấy ra các ô input

Một ô input có thể sẽ dùng nhiều rule để kiểm tra dữ liệu
