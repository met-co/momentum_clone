const images = [
  `https://images.unsplash.com/photo-1639661920872-adf8426d939b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
  `https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
  `https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`,
  `https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
  `https://images.unsplash.com/photo-1638794661087-be6bcded8762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
  `https://images.unsplash.com/photo-1518387801569-c9372e7f2dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
  `https://images.unsplash.com/photo-1539597273434-2a97155fa974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
];

/*
const backImg = document.querySelector(".background-img");



backImg.src = `${choseImage}`;
*/
const choseImage = images[Math.floor(Math.random() * images.length)];
document.body.style.background = `url(${choseImage}) center/cover no-repeat`;
