// Our variables
const key = "3964209a43fd4132a12a1549ca0d463c"
const url = `https://newsapi.org/v2/everything?q=nature&apiKey=${key}`
const url2 = `http://api.open-notify.org/astros.json`


// Our main function
const recievedNews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {

					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
            <img src="${article.urlToImage}"/>
            <h2>${article.title}</h2>
            <h3>${article.description}</h3>
            <button onclick=window.location.href="${article.url}" class="readMoreButton">Read more</button>
            </div>`
    })
}


//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)
