let midPoint = +prompt("nhập vào điểm thi giữa kỳ");
let test = +prompt("nhập vào điểm thi bài kiểm tra");
let endPoint = +prompt("nhập vào điểm thi cuối kỳ");
sum = midPoint*2 + test + endPoint*3;
if (sum<30) {
    document.write("học lực kém, cần cố gắng hơn nữa");
}
else if (sum <42) {
    document.write("học lực trung bình");
}
else if (sum < 48) {
    document.write("học lực khá");
}
else {
    document.write("học lực giỏi")
}