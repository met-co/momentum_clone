const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  //const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

const now_date = document.querySelector(".now-date");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = today.getDay();
const week = ["일", "월", "화", "수", "목", "금", "토"];
let yoil = week[day];

now_date.innerText = `${year}년 ${month}월 ${date}일 ${yoil}요일`;
