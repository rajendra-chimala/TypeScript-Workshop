
// let platform:string = "Digital Pathshala"
// platform = true
// platform  = 123
// let age:number = 123

// let numbers:number[] = [1,2,3,4]
// let names:string[] = ["haha","hehe"]

// let paymentMethod: "Esewa" | "Khalti" | "IME Pay" = "Khalti"
// paymentMethod = "Esewa"
// paymentMethod = "IME Pay"
// paymentMethod = "hahahaha"

// enum PaymentMethod{
//     Esewa, 
//     Khalti, 
//     IME_Pay
// }

// let paymentMethod:PaymentMethod  = PaymentMethod.Khalti

// interface IUser{
//   name : string, 
//   address : string, 
//   postalCode ?: number, 
//   age ?: number | string | boolean
// }

// let info:IUser = {
//     name : "Manish", 
//     address : "Itahari", 
//     age : true
// }

// enum IRole{
//     Developer, 
//     Manager
// }

// interface IEmployee{
//     name : string, 
//     address : string, 
//     age : number ,
//     role : "Developer" | "Manager"
// }

// interface IEmployee extends IUser{
//     role : "Developer" | "Manager"
// }

// let employee:IEmployee = {
//     name : "manish",
//     address : "Itahari", 
//     age : 22, 
//     role : "Developer",
// }

// interface IPersonalDetail{
//     name : string, 
//     age : number
// }

// type TPersonalDetail = {
//     name : string, 
//     age : number
// }

// let personalDetail:TPersonalDetail = {
//     name : "manish", 
//     age : 22
// }

// type TRole = {
//      age : string,
//     role : "Developer" | "Manager"
// }

// type TStatus = {
//     status : "active" | "inactive"
// }

// type TProfessionalDetail = TPersonalDetail & TRole & TStatus

// // let professionalDetail:TProfessionalDetail = {
// //     name : "manish", 
// //     age :"22 year",
// //     role : "Developer",
// //     status : "active"
// // }

// // type TName = string
// let namess:TName = "manish"



// let datas = {
//     name : "haha", 
//     author : "hehe"
// }


// // console.log(datas.namesss)

// function addNumbers(a:number,b:number):void{
//   console.log(a+b) 
// }

// addNumbers(1,3)

// function addStrings(a:string,b:string){
//     console.log(a + b)
// }

// function addJPani<T,U>(a:T,b:U){
//     console.log("haha")
// }

// // addJPani<number,string>(1,"haha")
// addJPani<string,number>("hello",123)

// interface IData<T,U>{
//     first : T, 
//     second : U
// }

// let data:IData<string,number> = {
//     first : "manish", 
//     second : 22
// }

// let data2:IData<number,string> = {
//     first : 22, 
//     second : "manish"
// }


// class Developer{
//     name:string
//     age : number 
//     constructor(name:string, age:number){
//         this.name = name 
//         this.age = age 
//     }
// }