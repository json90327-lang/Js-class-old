let employees=[{id: 1, name: "uday", salary: 50000},
            {id: 2, name: "suresh", salary: 60000}]
function createemployee(emp,callback){
    setTimeout(()=>{
        employees.push(emp)
        callback();

    },2000);
}
function getemployee(){
    setTimeout(() => {
        let rows="";
        for(let emp of employees){
            rows=rows+`<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.salary}</td>
            </tr>`
        }
        document.getElementById("tdata").innerHTML=rows;

    }, 2000);
}
createemployee({id: 3, name: "sanjay", salary: 70000},getemployee);
getemployee()