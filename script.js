// TODO: add code here

window.addEventListener('load', function() {

    const container = document.getElementById("container")
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(data) {
            console.log(data);
           
            for (let index = 0; index < data.length; index ++) { 
            
            container.innerHTML += 
            `
            <div class="astronaut">
            <div class="bio">
            <h3>${data[index].firstName} ${data[index].lastName}</h3>
            <ul>
                <li>Hours in space: ${data[index].hoursInSpace}</li>
                <li>Active: ${data[index].active}</li>
                <li>Skills: ${data[index].skills}</li>
            </ul>
            </div>
                <img class="avatar" src=${data[index].picture}>
            </div>
            `
            }


            });   
        });
    });
