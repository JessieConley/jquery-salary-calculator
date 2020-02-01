console.log('js');
$(document).ready(onReady);

let employeeInfo = [];
let totalMonthlySalary = 0;
//inputs collect employee first name, last name, ID number, job title, annual salary_.

//A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. 
//Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

//Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

//decalre array variable to store input values entered in the DOM:

function onReady() {
  //console.log("in readyNow");
  //handle submit button click event
  $("#submit").on("click", addEmployee);
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
            </tr>`);
        } //end for loop
        
    } //end displayEmployees function

    //calculate total salary:

    function monthlySalary(){
        console.log('in totalSalary');
        //loop through employeeInfo array
        for(let i=0; i<employeeInfo.length; i++);{

        }
        //for each salary entered, add up total for all salaries
        totalMonthlySalary += Number(employeeInfo[i].salary);
        console.log('total salary:', totalMonthlySalary);
        //display total salary
        let el = $("#monthly salary");
        el.empty();
        el.append(totalMonthlySalary);



    } // end monthlySalary


