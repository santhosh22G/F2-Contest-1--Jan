/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  const developers = arr.map(function(employee) {
    if (employee.profession === 'developer') {
      console.log(employee);
    }
  });  
}

function PrintDeveloperbyForEach() {
   arr.forEach(function(employee) {
    if (employee.profession === 'developer') {
      console.log(employee);
    }
  });  
}

function addData() {
  const newEmployee = {id:4,name:"susan",age:"20",profession:"intern"}  ;
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  const filterArray= arr.filter(function(employee) {
    return employee.profession !== 'admin';
  });
  console.log(filterArray);
}

function concatenateArray() {
  const newArray = [
    {id: 101, name: "Object1", age: "23", profession: "sd"},
    {id: 102, name: "Object2", age: "24", profession: "intern"},
    {id: 103, name: "Object3", age: "25", profession: "developer"}
  ];
  const concatArray = arr.concat(newArray);
  console.log(concatArray);
}
