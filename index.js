console.log("news ya working")
//6e8a3150a2c94a558d878fd651af6965

// let source='subha-news';
// let apiKey ='6e8a3150a2c94a558d878fd651af6965';

let newsaccordion = document.getElementById('newsaccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=ea5e509bc15a42ee8412c66194bdb50a`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        console.log(articles)
        let newshtml ="";
        articles.forEach(function(element,index) {
         
            let news = `<div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapse${index}">
                           <b> Breaking News ${index+1} : </b>  ${element["title"]}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse "
                        aria-labelledby="panelsStayOpen-heading${index}" data-parent="newsaccordion">
                        <div class="accordion-body">
                           ${element["content"]}. <a href="${element['url']}" target="_blank">click here to read more</a>
                        </div>
                    </div>
                </div>`
                newshtml+=news;
            });
        
        newsaccordion.innerHTML=newshtml;
    }
    else {
        console.log("some errror has occured")
    }
}

xhr.send()



