"use strict";
//foi feito com sliders simples

const imagens = [
  {
    id: "1",
    url: "./img/angular.png",
    id: "2",
    url: "./img/react.png",
    id: "3",
    url: "./img/svelte.jpg",
    id: "4",
    url: "./img/vue.png",
    id: "5",
    url: "./img/girassol.png",
  },
];

const criarSlider = (imagens) => {
  const slider = document.querySelector(".slider");

  const anteriorButton = document.createElement("span");
  anteriorButton.classList.add("slider-button");
  anteriorButton.id = "anterior";
  anteriorButton.innerHTML = "&laquo;";

  const sliderContainer = createElement("div");
  sliderContainer.classList.add("slider-item-container");

  sliderContainer.innerHTML = slider.join;
  criarSlider(imagens);

  //cria o span proximo
  //<span class="slider-button" id="proximo">&raquo;</span>
  const proximoButton = document.createElement("span");
  proximoButton.classList.add("slider-button");
  proximoButton.id = "proximo";
  proximoButton.innerHTML = "&raquo;";

  slider.appendChild(anteriorButton);
  slider.appemdChild(sliderContainer);
  slider.appendChild(proximoButton);
};

const sliderItemContainer = document.querySelector(".slider-item-container");
// queryselectorall retorna um array
let sliderItems = document.querySelectorAll(".slider-item");

const proximoItem = () => {
  // append child joga sempre no final do array
  const primeiroItem = sliderItems[0];
  sliderItemContainer.appendChild(primeiroItem);
  sliderItems = document.querySelectorAll(".slider-item");
};

const anteriorItem = () => {
  const ultimoItem = sliderItems[sliderItems.length - 1];
  sliderItemContainer.prepend(ultimoItem);
  sliderItems = document.querySelectorAll(".slider-item");
};

// document.querySelector("proximo").addEventListener("click", proximoItem);
// document.querySelector("anterior").addEventListener("click", anteriorItem);
