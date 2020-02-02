console.log('js');
$(document).ready(onReady);

let employeeInfo = [];
let totalMonthlySalary = 0;



function onReady() {
  //console.log("in readyNow");
  //handle submit button click event
  $("#submit").on("click", addEmployee);
  $("#employeesOut").on('click', 'button', removeEmployee);
  
  
}


//Set up function to capture employee information:
function addEmployee(){
    //console.log('in addEmployee');
    //get user input create new object
    let employee = {
      firstName: $("#employeeFirstName").val(),
      lastName: $("#employeeLastName").val(),
      id: $("#employeeIDNumber").val(),
      title:$("#employeeJobTitle").val(),
      salary:$("#employeeAnnualSalary").val()
    } //end object array

    //push employee info into array
    employeeInfo.push(employee);
    //empty inputs
    $("#employeeFirstName").val('');
    $("#employeeLastName").val('');
    $("#employeeIDNumber").val('');
    $("#employeeJobTitle").val('');
    $("#employeeAnnualSalary").val('');

    //invoke displayEmployees function
    displayEmployees();
    //invoke monthly salary function
    monthlySalary();
    addRed();
   
} //end add Employee

    //create function to display employees added:

    function displayEmployees(){
        console.log("in displayEmployees");
        //target outputs by id
        let el = $("#employeesOut");
        el.empty();
        // loop through employeeInfo array
        for (let i=0; i<employeeInfo.length; i++){
            //append employee info to table in DOM
            el.append(`
            <tr>
            <td>${employeeInfo[i].firstName}</td>
            <td>${employeeInfo[i].lastName}</td>
            <td>${employeeInfo[i].id}</td>
            <td>${employeeInfo[i].title}</td>
            <td>${employeeInfo[i].salary}</td>
            <td><button class="deleteButton">Delete</button></td>
            </tr>`);
        } //end for loop

        monthlySalary();
        
    } //end displayEmployees function

    //calculate total salary:

    function monthlySalary(){
        console.log('in monthlySalary');
        let monthlyCost = 0;
        //loop through employeeInfo array
        for(let i=0; i<employeeInfo.length; i++){
            monthlyCost += (employeeInfo[i].salary/12);
            

        } //end for loop
        totalMonthlySalary = monthlyCost;
        console.log(totalMonthlySalary);
        
    $("#mSalary").text(totalMonthlySalary);

    } // end monthlySalary

    function addRed(){
        console.log('in addRed');
        if (totalMonthlySalary > 20000) {
          $("#mSalary").addClass("red");
        }
    } //end addRed function

    function removeEmployee(){
        let buttonElement = $(this);
        let tdElement = buttonElement.parent();
        let trElement = tdElement.parent();
        trElement.remove();
    }
    


