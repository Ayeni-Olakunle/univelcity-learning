//Get all the information from database

let idMe = 0
function getAll() {
    fetch("https://sticky-note-me.herokuapp.com/stickynote/")
        .then(response => response.json())
        .then(data => {
            data.map((item, index) => {
                idMe = item.id;
                document.getElementById("renderInfo").innerHTML += `
                <div class="info">
                    <div>
                        <p class="header">${item.name}</p>
                        <p class="desc">${item.description}</p>
                    </div>
                    <div>
                        <i class="fa fa-edit edit" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        <i class="fa fa-trash-o delete" onclick="remove(${item.id})"></i>
                    </div>
                </div>
                `
            })
        })
        .catch(err => console.error(err))
}

getAll()

//POST infomation to database
document.getElementById("submit").onclick = function (e) {
    e.preventDefault();
    let note = document.getElementById("Note");
    let WebLink = document.getElementById("WebLink");
    let description = document.getElementById("description");
    let allInfo = {
        name: note.value,
        weblink: WebLink.value,
        description: description.value,
    }

    fetch("https://sticky-note-me.herokuapp.com/stickynote/", {
        method: "POST",
        body: JSON.stringify(allInfo),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            alert("Success")
            window.location.reload()
            console.log(data)
            getAll()
        })
        .catch(err => console.error(err))
}

// edit information in database
document.getElementById("submitEdit").onclick = function (e) {
    e.preventDefault();
    let note = document.getElementById("Note2");
    let WebLink = document.getElementById("WebLink2");
    let description = document.getElementById("description2");
    let allInfo2 = {
        name: note.value,
        weblink: WebLink.value,
        description: description.value,
    }

    fetch(`https://sticky-note-me.herokuapp.com/stickynote/${idMe}`, {
        method: "PUT",
        body: JSON.stringify(allInfo2),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            alert("Success")
            window.location.reload()
            console.log(data)
            getAll()
        })
        .catch(err => console.error(err))
}


//Delete from the database
function remove(id) {
    fetch(`https://sticky-note-me.herokuapp.com/stickynote/${id}`, {
        method: 'DELETE'
    }).then(() => {
        alert('Successfully deleted');
        window.location.reload()
    }).catch(err => {
        alert(err)
    });
}