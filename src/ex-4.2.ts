function processData(data: unknown): string {
  if (typeof data === 'string') {
  return data.toUpperCase();
  } else {
    return "Not a string";
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
// data มี type เป็น unknown 
// หากยังไม่ได้มีการตรวจสอบ type ก่อนใช้ method จะทำให้เกิด error ได้

