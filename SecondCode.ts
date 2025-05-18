let paymentMethod: "E-Sewa" | "Khalti" = "E-Sewa";
paymentMethod = "Khalti"; // This is valid
// paymentMethod = "Cash"; // This will cause an error

//Using enum
enum PaymentMethod {
  ESEWA = "E-Sewa",
  KHALTI = "Khalti",
  CASH = "Cash",
}
let paymentMethod2: PaymentMethod = PaymentMethod.ESEWA;


type TName = string;


let user_name: TName = "John Doe";
