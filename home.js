const loadData = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((res) => res.json())
        .then((data) => displayData(data.data))
};
const displayData = (dataAll) => {
    // console.log(dataAll)
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = " ";

//  "data": [
// {
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug", 
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },    
    for (let data of dataAll){
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div class="p-3 space-y-4 rounded-md shadow-lg border-t-5 border-green-500 h-80">
                    <div class="flex justify-between">
                        <img src="./assets/Open-Status.png"alt="">
                        <h3 class="bg-red-200 w-20 text-center rounded-full text-red-600">${data.priority}</h3>
                    </div>
                    <div class="space-y-2">
                        <h3>${data.title}</h3>
                        <p>${data.description}</p>
                        <div class="flex gap-5">
                            <p class="bg-red-200 w-20 text-center rounded-full text-red-600">bug</p>
                            <p class="bg-yellow-200 w-20 text-center rounded-full text-yellow-800">Badge2</p>
                        </div>
                    </div>
                    <div class="border-t-2 ">
                        <p>${data.author}</p>
                        <p>${data.updatedAt}}</p>

                    </div>
                </div>
        `
        cardContainer.append(newDiv);
    }

}
loadData()