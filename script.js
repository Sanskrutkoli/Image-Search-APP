const accesskey = "1Ep5J2fB_g24PXxHVsKnTuLz6eM0o-tr_YRm_h3CJFk"

const Serachform = document.getElementById("SearchForm")
const Searchbox = document.getElementById("Searchbox")
const Searchresult= document.getElementById("search-result")
const Showmore = document.getElementById("show-more")

let keyword = "";
let page = 1



async function searchimage(){
    keyword = Searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`; 
    const response = await fetch(url)
    const data = await response.json();
    
  if(page===1){
    Searchresult.innerHTML = ""
  }

    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imagelink = document.createElement("a")
        imagelink.href= result.links.html;
        imagelink.target = "_blank";
        
        imagelink.appendChild(image)
        Searchresult.appendChild(imagelink) 
        Showmore.style.display= "block"
    })
}
Serachform.addEventListener("submit" ,(e)=>{
    e.preventDefault()
    page = 1;
   searchimage()
})

Showmore.addEventListener("click",()=>{
 page++;
 searchimage();
})