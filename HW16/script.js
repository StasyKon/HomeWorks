const button = document.querySelector(".button");

function getData(url, onSuccess, onError, onStart, onEnd) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.responseType = "json";

    xhr.onload = function() {
        if (xhr.status === 200) {
            onSuccess(xhr.response);
        } else {
            onError(xhr.response);
        }
        onEnd();
    }

    xhr.onerror = function() {
        onError("Error sending request");
        onEnd();
    }

    onStart();

    xhr.send();
}

function createUserList(characters) {
    const list = document.createElement("ul");
    for (const character of characters) {
        const listItem = document.createElement("li");
        const textElement = document.createTextNode(character.name);

        listItem.append(textElement);
        list.append(listItem);
    }

    return list;
}

function showList(list) {
    const container = document.querySelector("#results");
    if (container !== null) {
        container.append(list);
    }
}

let page = 0;

button.addEventListener("click", (event) => {
    page++

    let res;

    function onSuccess(data) {
        const list = createUserList(data.results);
        showList(list);
        res = hasNextPage(data);
        console.log(res)
    }

    function hasNextPage(data) {
        return data.info.next;
    }

    function onError(err) {
        console.error(err);
    }

    function onStart() {
        event.target.innerText = "Getting data";
        event.target.disabled = true;
    }

    function onEnd() {
        if (res) {
            event.target.innerText = "GET DATA";
            event.target.disabled = false;
        }
    }

    getData(`https://rickandmortyapi.com/api/character/?page=${page}`, onSuccess, onError, onStart, onEnd);

});