// Add your code here




function submitData(userName,userEmail) {
  const userData={
    name: userName,
    email: userEmail
  }

  const configurationObject={
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetch("http://localhost:3000/users",configurationObject)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let card=document.createElement('div')
      card.innerHTML=`${object.id}`
      console.log(object);
      document.querySelector('body').appendChild(card)
    }).catch(function(error) {
      let errorMsgDiv=document.createElement('div')
      errorMsgDiv.innerHTML=`${error.message}`
      document.querySelector('body').appendChild(errorMsgDiv)
      console.log(error.message);
    });

}
console.log(submitData("Joe","Joe@gmail.com"))
// submitData("Joe","Joe@gmail.com")