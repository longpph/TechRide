
// // Xe thứ 1: Định nghĩa thủ công
// let vehicle1 = {
//     id: "V01",
//     driverName: "Nguyen Van A",
//     vehicleType: "Motorbike",
//     status: "Active",
//     calculateFare: function(distance) {
//         return distance * 5000; // Lặp lại logic tính toán
//     }
// };

// // Xe thứ 2: Định nghĩa thủ công
// let vehicle2 = {
//     id: "V02",
//     driverName: "Tran Thi B",
//     // LỖI LOGIC: Thiếu trường vehicleType do người code quên gõ
//     status: "Maintenance",
//     calculateFare: function(distance) {
//         return distance * 10000; // Lặp lại logic tính toán
//     }
// };

class vehicle{
    constructor (id, driverName, vehicleType, status = "Active"){
        this.id = id;
        this.driverName = driverName;
        this.vehicleType = vehicleType;
        this.status = status;
    }
    
    calculateFare(distances) {
        if(this.vehicleType === "Motorbike"){
            return distances * 5000;
        } else if (this.vehicleType === "Car"){
            return distances * 10000;
        }
    }
}
let vehicle1 = new vehicle("V01", "Nguyen Van A", "Motorbike");
let vehicle2 = new vehicle("V02", "Tran Thi B", "Car", "Maintenance");
console.log("Xe 1 tính tiền 10km:", vehicle1.calculateFare(10));
console.log("Xe 2 tính tiền 10km:", vehicle2.calculateFare(10));