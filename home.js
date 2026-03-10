const issuesCount = document.getElementById("issues-count")
const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn")
let allIssues = [];
const loadData = () => {
    manageSpinner(true)
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((res) => res.json())
        .then((data) => {
            allIssues = data.data
            displayData(allIssues)
        })
};
// modal
const loadCardDetail = async (id) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    const res = await fetch(url);
    const details = await res.json();
    displayCardDetails(details.data);
}
// display modal
const displayCardDetails = (data) => {
    console.log(data)
    const cardDetailsContainer = document.getElementById("modal-container");
    cardDetailsContainer.innerHTML = `
            <div class="p-3 space-y-4 rounded-md shadow-lg h-80">
                    <div class="flex justify-between">
                        <img class="w-6 h-6" src="${data.status === 'closed' ? './assets/Closed- Status .png' : './assets/Open-Status.png'}"alt="${data.status}">
                        <h3 class="bg-red-200 w-20 text-center rounded-full text-red-600">${data.priority}</h3>
                    </div>
                    <div class="space-y-2">
                        <h3 class="font-bold">${data.title}</h3>
                        <p>${data.description}</p>
                        <div class="flex gap-5">
                            <p class="bg-red-200 w-20 text-center rounded-full text-red-600">Badge1</p>
                            <p class="bg-yellow-200 w-20 text-center rounded-full text-yellow-800">Badge2</p>
                        </div>
                    </div>
                    <div class="border-t-2 ">
                        <p>#${data.author}</p>
                        <p>${data.updatedAt}</p>

                    </div>
                    <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
                </div>
        `

    document.getElementById("my_modal").showModal();
}

// spinner
const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("card-container").classList.add("hidden")
    }
    else {
        document.getElementById("spinner").classList.add("hidden")
        document.getElementById("card-container").classList.remove("hidden")
    }
}


const displayData = (dataAll) => {
    // console.log(dataAll)
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = " ";
    issuesCount.innerText = `${dataAll.length} Issues`
    for (let data of dataAll) {
        const newDiv = document.createElement("div");
        const borderColor = data.status === "open" ? "#00A96E" : data.status === "closed" ? "#A855F7" : "transparent";

        newDiv.style.borderTop = `4px solid ${borderColor}`;
        newDiv.innerHTML = `
            <div onclick="loadCardDetail(${data.id})" class="p-3 space-y-4 rounded-md shadow-lg h-80">
                    <div class="flex justify-between">
                        <img class="w-6 h-6" src="${data.status === 'closed' ? './assets/Closed- Status .png' : './assets/Open-Status.png'}"alt="${data.status}">
                        <h3 class="bg-red-200 w-20 text-center rounded-full text-red-600">${data.priority}</h3>
                    </div>
                    <div class="space-y-2">
                        <h3 class="font-bold">${data.title}</h3>
                        <p>${data.description}</p>
                        <div class="flex gap-5">
                            <p class="bg-red-200 w-20 text-center rounded-full text-red-600">badge</p>
                            <p class="bg-yellow-200 w-20 text-center rounded-full text-yellow-800">badge</p>
                        </div>
                    </div>
                    <div class="border-t-2 ">
                        <p>#${data.author}</p>
                        <p>${data.updatedAt}</p>

                    </div>
                </div>
        `
        cardContainer.append(newDiv);
    }
    manageSpinner(false);
}

loadData()

// filter
allBtn.addEventListener("click", () => {
    displayData(allIssues);
});

openBtn.addEventListener("click", () => {
    const openIssues = allIssues.filter(issue => issue.status === "open");
    displayData(openIssues);

});

closeBtn.addEventListener("click", () => {
    const closedIssues = allIssues.filter(issue => issue.status === "closed");
    displayData(closedIssues);

});


// search
searchBtn.addEventListener("click", () => {

    const searchText = searchInput.value.toLowerCase();

    const filteredIssues = allIssues.filter(issue =>
        issue.title.toLowerCase().includes(searchText) ||
        issue.description.toLowerCase().includes(searchText)
    );

    displayData(filteredIssues);
});