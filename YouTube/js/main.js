const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");
const Container = document.querySelector(".container");



menuIcon.onclick = function(){
    sideBar.classList.toggle("side-bar");
    Container.classList.toggle("large-container");
}

const followButton = document.getElementById("followButton");
let isFollowing = false;

followButton.addEventListener("click", () => {
  if (isFollowing) {
    followButton.textContent = "Follow";
    followButton.classList.remove("following");
  } else {
    followButton.textContent = "Following";
    followButton.classList.add("following");
  }
  
  isFollowing = !isFollowing;
});

