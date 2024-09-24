function changeTab(event, tabID){
    // Getting all required elements
    const tabSection = document.querySelector("#senators");

    let tabLinks = tabSection.querySelectorAll(".tab-link");
    let tabContents = tabSection.querySelectorAll(".tab-content");
    let selectedContent = tabSection.querySelector(`#${tabID}`);

    // Adding active class to selected tab link
    tabLinks.forEach(element => {
        element.classList.remove("active");
    });
    event.currentTarget.classList.add("active");

    // Showing the selected tab content
    tabContents.forEach(element => {
        element.classList.add("display-none");
    });
    selectedContent.classList.remove("display-none");
}

document.querySelector("#senators ul a").click();

// Preloader
let preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
        preloader.remove()
    });
}
