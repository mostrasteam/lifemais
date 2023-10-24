
let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/3);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}

    const body = document.body; 

    const openModalBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("myModal");
    const closeBtn = document.getElementsByClassName("close")[0];
    
    // Abre o modal
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe "noscroll" ao <body>
    });
    
    // Fecha o modal ao clicar no botão "Fechar"
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
    });
    
    // Fecha o modal ao clicar fora do modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
        }
    });
    


document.addEventListener("DOMContentLoaded", function () {
    const mostrarSinopseButtonLivro2 = document.getElementById("mostrarSinopseLivro2");
    const modalLivro2 = document.getElementById("myModalLivro2");
    const closeLivro2 = modalLivro2.querySelector(".close");

    mostrarSinopseButtonLivro2.addEventListener("click", function () {
        modalLivro2.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe 'noscroll' ao body
    });

    closeLivro2.addEventListener("click", function () {
        modalLivro2.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe 'noscroll' do body
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalLivro2) {
            modalLivro2.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe 'noscroll' do body
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const mostrarSinopseButtonLivro3 = document.getElementById("mostrarSinopseLivro3");
    const modalLivro3 = document.getElementById("myModalLivro3");
    const closeLivro3 = modalLivro3.querySelector(".close");

    mostrarSinopseButtonLivro3.addEventListener("click", function () {
        modalLivro3.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe "noscroll" ao <body>
    });

    closeLivro3.addEventListener("click", function () {
        modalLivro3.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalLivro3) {
            modalLivro3.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const mostrarSinopseButtonLivro4 = document.getElementById("mostrarSinopseLivro4");
    const modalLivro4 = document.getElementById("myModalLivro4");
    const closeLivro4 = modalLivro4.querySelector(".close");

    mostrarSinopseButtonLivro4.addEventListener("click", function () {
        modalLivro4.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe "noscroll" ao <body>
    });

    closeLivro4.addEventListener("click", function () {
        modalLivro4.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalLivro4) {
            modalLivro4.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
        }
    });

    // Restante do seu código...
});

document.addEventListener("DOMContentLoaded", function () {
    const mostrarSinopseButtonLivro5 = document.getElementById("mostrarSinopseLivro5");
    const modalLivro5 = document.getElementById("myModalLivro5");
    const closeLivro5 = modalLivro5.querySelector(".close");

    mostrarSinopseButtonLivro5.addEventListener("click", function () {
        modalLivro5.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe "noscroll" ao <body>
    });

    closeLivro5.addEventListener("click", function () {
        modalLivro5.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalLivro5) {
            modalLivro5.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
        }
    });

    // Restante do seu código...
});


document.addEventListener("DOMContentLoaded", function () {
    const mostrarSinopseButtonLivro6 = document.getElementById("mostrarSinopseLivro6");
    const modalLivro6 = document.getElementById("myModalLivro6");
    const closeLivro6 = modalLivro6.querySelector(".close");

    mostrarSinopseButtonLivro6.addEventListener("click", function () {
        modalLivro6.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe "noscroll" ao <body>
    });

    closeLivro6.addEventListener("click", function () {
        modalLivro6.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalLivro6) {
            modalLivro6.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
        }
    });

    // Restante do seu código...
});


document.addEventListener("DOMContentLoaded", function () {
    const mostrarSinopseButtonLivro7 = document.getElementById("mostrarSinopseLivro7");
    const modalLivro7 = document.getElementById("myModalLivro7");
    const closeLivro7 = modalLivro7.querySelector(".close");

    mostrarSinopseButtonLivro7.addEventListener("click", function () {
        modalLivro7.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe "noscroll" ao <body>
    });

    closeLivro7.addEventListener("click", function () {
        modalLivro7.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalLivro7) {
            modalLivro7.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
        }
    });

    // Restante do seu código...
});
document.addEventListener("DOMContentLoaded", function () {
    const mostrarSinopseButtonLivro8 = document.getElementById("mostrarSinopseLivro8");
    const modalLivro8 = document.getElementById("myModalLivro8");
    const closeLivro8 = modalLivro8.querySelector(".close");

    mostrarSinopseButtonLivro8.addEventListener("click", function () {
        modalLivro8.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe "noscroll" ao <body>
    });

    closeLivro8.addEventListener("click", function () {
        modalLivro8.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalLivro8) {
            modalLivro8.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
        }
    });

    // Restante do seu código...
});

document.addEventListener("DOMContentLoaded", function () {
    const mostrarSinopseButtonLivro9 = document.getElementById("mostrarSinopseLivro9");
    const modalLivro9 = document.getElementById("myModalLivro9");
    const closeLivro9 = modalLivro9.querySelector(".close");

    mostrarSinopseButtonLivro9.addEventListener("click", function () {
        modalLivro9.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe "noscroll" ao <body>
    });

    closeLivro9.addEventListener("click", function () {
        modalLivro9.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalLivro9) {
            modalLivro9.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
        }
    });

    // Restante do seu código...
});


document.addEventListener("DOMContentLoaded", function () {
    const mostrarSinopseButtonLivro10 = document.getElementById("mostrarSinopseLivro10");
    const modalLivro10 = document.getElementById("myModalLivro10");
    const closeLivro10 = modalLivro10.querySelector(".close");

    mostrarSinopseButtonLivro10.addEventListener("click", function () {
        modalLivro10.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe "noscroll" ao <body>
    });

    closeLivro10.addEventListener("click", function () {
        modalLivro10.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalLivro10) {
            modalLivro10.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
        }
    });

    // Restante do seu código...
});


document.addEventListener("DOMContentLoaded", function () {
    const mostrarSinopseButtonLivro11 = document.getElementById("mostrarSinopseLivro11");
    const modalLivro11 = document.getElementById("myModalLivro11");
    const closeLivro11 = modalLivro11.querySelector(".close");

    mostrarSinopseButtonLivro11.addEventListener("click", function () {
        modalLivro11.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe "noscroll" ao <body>
    });

    closeLivro11.addEventListener("click", function () {
        modalLivro11.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalLivro11) {
            modalLivro11.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
        }
    });

    // Restante do seu código...
});

document.addEventListener("DOMContentLoaded", function () {
    const mostrarSinopseButtonLivro12 = document.getElementById("mostrarSinopseLivro12");
    const modalLivro12 = document.getElementById("myModalLivro12");
    const closeLivro12 = modalLivro12.querySelector(".close");

    mostrarSinopseButtonLivro12.addEventListener("click", function () {
        modalLivro12.style.display = "block";
        body.classList.add('noscroll'); // Adiciona a classe "noscroll" ao <body>
    });

    closeLivro12.addEventListener("click", function () {
        modalLivro12.style.display = "none";
        body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
    });

    window.addEventListener("click", function (event) {
        if (event.target === modalLivro12) {
            modalLivro12.style.display = "none";
            body.classList.remove('noscroll'); // Remove a classe "noscroll" do <body>
        }
    });

    // Restante do seu código...
});



  const openOverlayButton = document.getElementById('openOverlay');
  const closeOverlayButton = document.getElementById('closeOverlay');
  const overlay = document.getElementById('overlay');
  openOverlayButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    body.classList.add('noscroll');
  });
  closeOverlayButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    body.classList.remove('noscroll');
  });