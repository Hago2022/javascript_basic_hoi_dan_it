console.log('Hello world from HTML')
let a = 5; // x <- y
let b = '5';

// === so sanh type va value --> phai dung === khi so sanh 2 gia tri voi nhau.
// == so sanh value
console.log(' compare a == b', 'a = ', a, 'b = ', b, ' result: ', a == b)
console.log(' compare a === b', 'a = ', a, 'b = ', b, ' result: ', a === b)

//empty: rong, khong co gi
//null (kiểu object), 
//underfined: chua dat gia tri cho bien
let c = []; //empty
let d ; // underfined
console.log(' check value: ', d)

//khi nào chúng ta dùng null cho phía frontend khi va chỉ khi
//tạo giá trị rỗng cho nó.
//null liên quan đến bộ nhớ của máy tính
//khi gán giá trị là null thì nó chưa lưu địa chỉ bộ nhớ của biến này
//còn gán empty thì nó đã lưu địa chỉ bộ nhớ.
let e = null;
console.log(' check value: ', e)
//b1: ban đầu f là empty
let f = '';
//b2: kiểu int
f = 5;
//b3: kiểu mảng là kiểu cuối của f
f = ['11']