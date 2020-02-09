const router = {
  "/": () => showContent("content-home"),
  "/consultaapi": () =>
    requireAuth(() => showContent("content-api"), "/consultaapi"),
};

const eachElement = (selector, fn) => {
  for (let e of document.querySelectorAll(selector)) {
    fn(e);
  }
};

const showContentFromUrl = (url) => {
  if (router[url]) {
    router[url]();
    return true;
  }

  return false;
};

const isRouteLink = (element) =>
  element.tagName === "A" && element.classList.contains("route-link");

const showContent = (id) => {
  eachElement(".page", (p) => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
};
 
const updateDogUI = (url) => {
  document.getElementById("random-dog").src = url;
}

window.onpopstate = (e) => {
  if (e.state && e.state.url && router[e.state.url]) {
    showContentFromUrl(e.state.url);
  }
};
