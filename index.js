let form = document.getElementById("form");
let name = document.getElementById("name");
let description = document.getElementById("description");
let inputImg = document.getElementById("img");
let img = document.createElement('img');
let msgName = document.getElementById("msgName");
let msgDes = document.getElementById("msgDes");
let posts = document.getElementById("posts");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();

});

let formValidation = () => {
    if (name.value === "") {
        msgName.innerHTML = "Name cannot be blank";
        console.log("failure");
    } else if (description.value === "") {
        msgDes.innerHTML = "Description cannot be blank";
        console.log("failure");
    } else {
        console.log("successs");
        acceptData();
    }
};



let data = {};

let acceptData = () => {
    data["name"] = name.value;
    data["description"] = description.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    let reader = new FileReader();
    reader.readAsDataURL(inputImg.files[0]);
    reader.onload = function () {
        const dataUrl = reader.result;

        posts.innerHTML += `
            <div class="col-4 col-s-12 card">
                <div id="pics" class="pic">
                    <img src="${dataUrl}" />
                </div>
                <div class="container">
                    <h4><b>${data.name}</b></h4>
                    <p class="text">${data.description}</p>
                    <button class="button buttonSubmit" onclick="deleteItem(this)">Remove</button>
                </div>
            </div>`;
    }
    name.value = "";
    description.value = "";
};

let deleteItem = (e) => {
    e.parentElement.parentElement.remove();
};

let editItem = (e) => {
    name.value = e.parentElement.previousElementSibling.innerHTML;
    description.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};