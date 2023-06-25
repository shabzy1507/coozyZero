"use strict";
const homeBtn = document.getElementById("home-icon");
const assetBtn = document.getElementById("asset-icon");
const exploreBtn = document.getElementById("explore-icon");
const chatBtn = document.getElementById("chat-icon");
const homeContainer = document.querySelector(".home-contain");
const assetContainer = document.querySelector(".asset-contain");
const exploreContainer = document.querySelector(".explore-contain");
const chatContainer = document.querySelector(".chat-contain");
const hideAmount = document.querySelector(".hide-icon");
const amount = document.querySelector(".amount");
const chatBox = document.querySelector(".chat-text-box");
homeBtn.addEventListener("click", () => {
  homeBtn.classList.add("orangeBtn");
  assetBtn.classList.remove("orangeBtn");
  exploreBtn.classList.remove("orangeBtn");
  chatBtn.classList.remove("orangeBtn");
  assetContainer.classList.add("hidden");
  exploreContainer.classList.add("hidden");
  chatContainer.classList.add("hidden");
  homeContainer.classList.remove("hidden");
});
assetBtn.addEventListener("click", () => {
  homeBtn.classList.remove("orangeBtn");
  assetBtn.classList.add("orangeBtn");
  exploreBtn.classList.remove("orangeBtn");
  chatBtn.classList.remove("orangeBtn");

  assetContainer.classList.remove("hidden");
  exploreContainer.classList.add("hidden");
  chatContainer.classList.add("hidden");
  homeContainer.classList.add("hidden");
});
exploreBtn.addEventListener("click", () => {
  homeBtn.classList.remove("orangeBtn");
  assetBtn.classList.remove("orangeBtn");
  exploreBtn.classList.add("orangeBtn");
  chatBtn.classList.remove("orangeBtn");

  assetContainer.classList.add("hidden");
  exploreContainer.classList.remove("hidden");
  chatContainer.classList.add("hidden");
  homeContainer.classList.add("hidden");
});
chatBtn.addEventListener("click", () => {
  homeBtn.classList.remove("orangeBtn");
  assetBtn.classList.remove("orangeBtn");
  exploreBtn.classList.remove("orangeBtn");
  chatBtn.classList.add("orangeBtn");

  assetContainer.classList.add("hidden");
  exploreContainer.classList.add("hidden");
  chatContainer.classList.remove("hidden");
  homeContainer.classList.add("hidden");
});
hideAmount.addEventListener("click", () => {
  amount.classList.toggle("hide");
});
chatBox.addEventListener("click", () => {
  window.location.href = "/chat/chat-text.html";
});
