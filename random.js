const randomUser = ()=>{
    fetch('https://randomuser.me/api/')
    .then(res =>res.json())
    .then(data =>displayUser(data))

}

const displayUser = user =>{
    const showNameDisplay = document.getElementById('name')
    showNameDisplay.innerText = user.results[0].name.first + ' ' + user.results[0].name.last ;
    // console.log(user.results[0].name.first + ' ' + user.results[0].name.last );


    const showGenderDisplay = document.getElementById('gender')
    showGenderDisplay.innerText = user.results[0].gender;
    // console.log(user.results[0].gender);

    const showImagesDisplay = document.getElementById('images')
    showImagesDisplay.src = user.results[0].picture.large;
    // console.log(user.results[0].picture.large);
}
randomUser();