var height = prompt("키를 입력해 주세요");
console.log(height, typeof(height));
// prompt는 문자열로 받기 때문에 string으로 표현해준다.

var height_int = parseInt(height);
console.log( height_int, typeof(height_int));

var height_float = parseFloat(height);
console.log( height_float, typeof(height_float));