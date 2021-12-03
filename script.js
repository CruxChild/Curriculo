function initExpandMenu() {
  const menuJs = document.querySelectorAll(".menuJs li a");
  const texto = [
    ".sobre",
    ".formação",
    ".habilidade",
    ".portifólio",
    ".contato",
    ".sobre",
    ".formação",
    ".habilidade",
    ".portifólio",
    ".contato",
  ];

  const textoret = [
    ".sbr",
    ".frm",
    ".hbl",
    ".ptf",
    ".cnt",
    ".sbr",
    ".frm",
    ".hbl",
    ".ptf",
    ".cnt",
  ];

  //Adicionando a classe inativo a todos os links dos menus
  menuJs.forEach((x) => {
    x.classList.add("inativo");
  });

  //Transformando array-like menuJs em array
  menuJsA = Array.from(menuJs);

  //Primeira função de entrada do mouse no link
  function callback(event) {
    event.preventDefault();
    for (i = 0; i < menuJs.length; i++) {
      if (menuJs[i].innerText === event.path[0].innerText) break;
    }

    console.log((event.path[0].innerText = menuJs[i].innerText));
    this.classList.toggle("ativo");
    this.classList.toggle("inativo");
    document.querySelector(".ativo").innerText = texto[i];
  }

  //Função de saida do mouse do link

  function trueback(event) {
    this.classList.toggle("ativo");
    this.classList.toggle("inativo");
    const inat = document.querySelectorAll(".inativo");

    inat.forEach((x, y) => {
      for (i = 0; i < 10; i++) {
        x.innerText = textoret[y];
      }
    });
  }

  //chamada dos eventos

  menuJs.forEach((event) => {
    event.addEventListener("mouseover", callback);
    event.addEventListener("mouseleave", trueback);
  });
}

initExpandMenu();

//scroll suave

function initScroll() {
  const menuJsHome = document.querySelectorAll(".menuJsHome a");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    console.log(topo);
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }

  menuJsHome.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}

initScroll();
