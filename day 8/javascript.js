const submitBoutton = document.getElementById('submitButton')
submitBoutton.addEventListener("click" ,addTodo)

function addTodo(){
   const valueTodo = document.getElementById('todo').value; 
   const result = document.getElementById('result');
   result.innerHTML += `<li>${valueTodo}</li>`;

}



async function getData() {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
   const json = await response.json()
   
   
   for(let i = 0; i < json.length; i++) {
      const result = document.getElementById("result");
      result.innerHTML += `<li>${json[i].title}}</li>`
   }
   console.log(json)
}

getData()