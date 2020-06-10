import 'bootstrap/dist/css/bootstrap.min.css';
import table from './table.js';
import { homePage } from './homepage.js';
import { contactPage } from './contactpage.js';
import { profilePage } from './profilepage.js'

const container = document.querySelector(".container");
homePage();
container.addEventListener('click', (e) => {
    if (event.target.id == "home-tab") {
        homePage();
    } else if (event.target.id == "profile-tab") {
        profilePage();
    } else if (event.target.id == "contact-tab") {
        contactPage();
    };
});