export function homePage() {
    const tabContent = document.querySelector(".tab-content");
    tabContent.innerHTML = `
    <div class="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home Page</div>
    `
};