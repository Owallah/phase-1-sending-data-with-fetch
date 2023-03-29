// Add your code here

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

function submitData(name, email) {
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept:'application/json',
        },
        body:JSON.stringify({
            name:'Steve',
            email: 'steve@steve.com'
        }),
    })
    .then(res => res.json())
    .then(data => console.log(data.id))
    .catch(error => document.querySelector('body').innerHTML = error.message)
}
