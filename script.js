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
    ".fm",
    ".hbl",
    ".ptf",
    ".cnt",
    ".sbr",
    ".fm",
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
    //valor para pegar o topo do elemento selecionado
    const topo = section.offsetTop;
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

//animação ao scroll

function initScrollAn() {
  const section = document.querySelectorAll(".js-scroll");
  //verificação
  if (section.length) {
    const windowMetade = window.innerHeight * 0.6;

    function scrollAn() {
      section.forEach((x) => {
        const sectionTop = x.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          x.classList.add("animar");
        } else {
          //Quando rolar a page para cima, a animação inverte
          x.classList.remove("animar");
        }
      });
    }
    //ativação unica para quando iniar o site
    scrollAn();

    //Evento para a janela inteira
    window.addEventListener("scroll", scrollAn);
  }
}

initScrollAn();
