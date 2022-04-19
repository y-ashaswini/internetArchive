const data = async() => {
    var utopic = document.querySelector('.usertopic').value;
    var searchstring = `https://archive.org/advancedsearch.php?output=json&&page=1&q=subject:${utopic}`;
    // console.log("search string compiled: "+searchstring)
    const response = await fetch(searchstring)
    const output = await response.json();
    // console.log(output.response.docs);
    l = output.response.docs.length;
    if(l == 0) {
        document.querySelector('.op').innerHTML = "<div style='color:#C3B091; font-size:2rem;'>sorry, no results for this query.</div>"
    } else {
        console.log('before: '+document.querySelector('.totop').classList.remove('invisible'))

        for(i=0; i<l; i++) {
            const link = `https://archive.org/details/${output.response.docs[i].identifier}`
            document.querySelector('.op').innerHTML += `<div class='box'>
            <div class='title-1'>${output.response.docs[i].title}</div>
            <div class='title-2'>Description : ${output.response.docs[i].description}</div>
            <div class='title-3'>Mediatype : ${output.response.docs[i].mediatype}</div>
            <div class='title-2'>Language : ${output.response.docs[i].language}</div>
            <a href = ${link} target = '_blank' class='click'>Visit</a>
            </div>`
        }
    }
    
}


function check() {
    document.querySelector('.op').innerHTML='';
    data();
}










// const data = async() => {
//     // https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search
//     const response = await fetch("https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search")
//     const output = await response.json();
//     console.log(output);
    
//     if(len==0) {
//         document.querySelector('.select').innerHTML = "Enter a valid number." 
//     } else {
//         for(i=0; i<len; i++) {
//             document.querySelector('.select').innerHTML += `<div class="box"><a style="text-decoration : none;" href="${output.data[i].short_url}"><img class="img" src="${output.data[i].path}" alt="image"></a>
//             <p class="written">CATEGORY: ${output.data[i].category}</p>
//             </div>`
//         }
//     }
// }

// var len=0;

// function check() {
//     const user = parseInt(document.querySelector('.userinput').value);
//     console.log("you entered: "+user+" type: "+typeof(user));
//     if(Number.isInteger(user)) {
//         len = user;
//     }
//     data();
// }
// ------------------------------------------------------------------------------------
// wallpaper api ->
// creating an account on https://www.wallhaven.cc
// username : damagiacane
// pass: nuhanyahiya6
// email : evilgeniusprevials@gmail.com
// api key: BWTvlrj8fqJZEs3McMQU3WA0j59cMsId