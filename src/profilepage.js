export function profilePage() {
    const tabContent = document.querySelector(".tab-content");
    tabContent.innerHTML = `
    <div class="tab-pane show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile Page</div>
    `
};