function createNewElement (id, data) {
    console.log(data)
    const entry = document.createElement("div")
    entry.className("entry")
    const author = document.createElement("h4")
    author.className("entryAuthor")
    const date = document.createElement("h5")
    date.className("entryDate")
    const entryText = document.createElement("p")
    entryText.className("entryText")
}

async function loadDiaryEntries() {
    const response = await fetch("http://localhost:3000/diary");

    if (response.status === 200) {
        const diaryEntries = await response.json();

        const container = document.getElementById("entries");

        let id = 1;
        diaryEntries.forEach(element => {
            const newElement = createNewElement(id, element);
            container.appendChild(newElement);
            id++;
        });
    }
}

addEventListener("DOMContentLoaded", (event) => {loadDiaryEntries()});