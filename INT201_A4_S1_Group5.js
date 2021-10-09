//ค่าสำหรับการนำมาทดสอบ method

const fruit = ["mango", "orange", "apple", "cherry", "banana"]; //กำหนด array fruit เก็บเป็นชื่อผลไม้ 
const student = ["Chanunporn", "Nutnaree", "Thanawat", "Chanathip", "Denphum"] //กำหนด array เก็บชื่อนักเรียน
const phonebrand = ["apple", "samsung", "oppo", "vivo", "xiaomi", "huawei", "oneplus"] //กำหนด array เก็บชื่อแบรนด์โทรศัพท์

//1 - slice()

console.log(fruit.slice(-4)); // เรียกใช้ method slice() กับ array fruit โดยให้เริ่มแสดงผลค่าตั้งแต่ index = -4 (หรือ element ลำดับที่ 4 นับจากท้ายสุด) เป็นต้นไป
console.log(fruit.slice(3)); // เรียกใช้ method slice() กับ array fruit โดยให้เริ่มแสดงผลค่าตั้งแต่ index = 3 เป็นต้นไป
console.log(phonebrand.slice(2, -2)); // เรียกใช้ method slice() กับ array fruit โดยให้เริ่มแสดงผลค่าตั้งแต่ index = 2 จนถึง index = -3 (ลำดับก่อนหน้า index = -2 )
console.log(student.slice(3, 4)); // เรียกใช้ method slice() กับ array fruit โดยแสดงผลเฉพาะค่าที่มี index = 3 เนื่องจากจุดสิ้นสุดเป็นจุดเดียวกับจุดเริ่มต้น

//Example
function callFruit(a, b) {
    console.log(fruit.slice(a, b));
}

function callStudent(a, b) {
    console.log(student.slice(a, b));
}

function callPhonebrand(a, b) {
    console.log(phonebrand.slice(a, b));
}

callFruit(2, -2);
callStudent(2, -2);
callPhonebrand(2, -2);
console.log('-------------------------');

//2 - reverse()

console.log(student.reverse()); //เรียกใช้ method reverse() กับ array student โดยจะ return เป็น array ผลลัพธ์แบบกลับค่า
console.log(fruit.reverse()); //เรียกใช้ method reverse() กับ array fruit โดยจะ return เป็น array ผลลัพธ์แบบกลับค่า
console.log(phonebrand.reverse()); //เรียกใช้ method reverse() กับ array phonebrand โดยจะ return เป็น array ผลลัพธ์แบบกลับค่า

console.log(Array.prototype.reverse.call(student)); // เป็นการเรียกใช้ reverse() แบบ Array.prototype แล้วใน () ใส่ชื่อ array ลงไป

//Example
function reFruit() {
    console.log(fruit.reverse());
}

function reStudent() {
    console.log(student.reverse());
}

function rePhonebrand() {
    console.log(phonebrand.reverse());
}

reFruit();
reStudent();
rePhonebrand();
console.log('-------------------------');