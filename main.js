import Home from "./components/home.js";
import About from "./components/about.js";
import Project from "./components/project.js";
import Contact from "./components/contact.js";

const { createApp } = Vue;
const app = createApp({});

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/project", name: "project", component: Project },
  { path: "/contact", name: "contact", component: Contact },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router).mount("#app");
