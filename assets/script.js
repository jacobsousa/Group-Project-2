const puma = document.getElementById("puma");
const nike = document.getElementById("nike");
const adidas = document.getElementById("adidas");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=15").then((data)=>{
    // console.log(data);
    return data.json();
}).then((fetched_data)=>{
    // console.log(fetched_data[0].url);
    fetched_data.map(value=>{
        key = value.id;
        let img = document.createElement("img");
        img.src = value.url;
        puma.appendChild(img)
        // console.log(value.url)
    })
})




fetch("https://jsonplaceholder.typicode.com/photos?_limit=15").then((data)=>{
    return data.json();
}).then((fetched_data)=>{
    fetched_data.map(value=>{
        key = value.id;
        let img = document.createElement("img");
        img.src = value.url;
        nike.appendChild(img)
        // console.log(value.url)
    })
})



fetch("https://jsonplaceholder.typicode.com/photos?_limit=15").then((data)=>{
    // console.log(data);
    return data.json();
}).then((fetched_data)=>{
    // console.log(fetched_data[0].url);
    fetched_data.map(value=>{
        key = value.id;
        let img = document.createElement("img");
        img.src = value.url;
        adidas.appendChild(img)
        // console.log(value.url)
    })
})