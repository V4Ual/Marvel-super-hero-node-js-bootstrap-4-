// var orders = [{ "name": "chain", "description": "necklace chain", "status": "shipped" }, { "name": "pen", "description": "ball pen", "status": "shipped" }, { "name": "book", "description": "travel diary", "status": "delivered" }, { "name": "brush", "description": "paint brush", "status": "delivered" }];
// console.log(orders);
// var orderInfo = orders.map(function(order) {
//     if (order.status === "delivered") {
//         var info = {
//             "orderName": order.name,
//             "orderDesc": order.description
//         }
//         return info;
//     }
// });
// console.log(orderInfo);

const characterList = document.getElementById('load');

const submitBtn = document.getElementById('submitBtn');
const searchbar = document.getElementById('heroname');



let MVcharaters = []

// submitBtn.addEventListener('click', () => {
//     const text = searchbar.ariaValueMax.toLowerCase
//     const a = MVcharaters.filter(character => {
//         return character.name.toLowerCase().includes(text);
//     });


//     console.log(a)

//     console.log(displayCharcters(a));
// })

// searchbar.addEventListener('onkeyup', (e) => {
//     const searchString = e.target.value.toLowerCase();

//     const a = MVcharaters.filter((character) => {
//         return (character.name.toLowerCase().includes(searchString));
//     });
//     console.log(a);
// });






const loadCharacters = async() => {

    try {

        const res = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.2.0/api/all.json');
        MVcharaters = await res.json();
        // console.log(MVcharaters)

        displayCharcters(MVcharaters);
        // var orderInfo = data.map(function(order) {
        //     if (order.name && order.images.md) {

        //         const htmlData = `
        //         <div class="main" style="background-image:url(${order.images.md});">
        //         <div class="overlay">
        //         <div class="text">
        //         <h4>${order.name}</h4>
        //         </div>
        //         </div>
        //         </div>`

        //         container.insertAdjacentHTML('beforeend', htmlData)

        //         return htmlData;
        //     }

        // });
    } catch (error) {
        console.error(error)

    }
}


const displayCharcters = (characters) => {
    const htmlString = characters.map((character) => {
        return `
        <div class="main" style="background-image:url(${character.images.md});">
        <div class="overlay">
        <div class="text">
        <h4>${character.name}</h4>
        </div>
        </div>
        </div>`;
    }).join('');
    characterList.insertAdjacentHTML('beforeend', htmlString)
};

loadCharacters();





// searchbar.addEventListener('onkeyup', myFunction())

const myFunction = (event) => {
    event.preventDefault();
    var input, filter, li, a, i, txtValue;
    input = document.getElementById("heroname");
    filter = input.value.toUpperCase();

    li = document.getElementsByClassName("main");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h4")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

submitBtn.addEventListener('click', myFunction)