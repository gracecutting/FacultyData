console.log("employees", employees)
var getFirstName = function(employee)
{
    return employee.firstName
}
console.log("functiontest", getFirstName(employees[0]))//grabs the first itme from the employee array to test the function
d3.select("body") //where do you want to create new thing
    .selectAll("h2") //what do you want to create
    .data(employees) //where does the data go
    .enter()
    .append("h2")
    .text(getFirstName)