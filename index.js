
let userName=localStorage.getItem("username");

fetchData();



function fetchData(){
fetch(`https://jsonplaceholder.typicode.com/users?username=${userName}`)
    .then(response => response.json())
    .then(data => {
        const tableBody=document.getElementById("table-body");
        
        const row=tableBody.insertRow();
        row.insertCell(0).textContent=data[0].id;
        row.insertCell(1).textContent=data[0].name;
        row.insertCell(2).textContent=data[0].username;
        row.insertCell(3).textContent=data[0].email;

})
    .catch(error => {
        console.error("Error:",error);
});
}
