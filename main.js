const scrollLinksContainer = document.querySelector("header div section div nav ul")
    console.log(scrollLinksContainer)

scrollLinksContainer.children.forEach((item) => {
    item.children[0].addEventListener("click", (event) => {
        event.preventDefault()
        window.scrollTo({ top: document.getElementById(item.children[0].href.split("#")[1]).offsetTop, behavior: 'smooth'});
    })
});