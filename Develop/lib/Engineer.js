// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
 const Employee = require ("./Employee");

 class Engineer extends Employee {
     constructor (name, id, email, engineerOffice){
         super(name, id, email);
         this.officeNumber = engineerOffice;
     }

     getRole(){
         return "Engineer";
     }

     getOfficeNumber(){
         return this.officeNumber;
     }

 }

 module.exports = Engineer;