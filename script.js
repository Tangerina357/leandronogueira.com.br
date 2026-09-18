document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // ANIMAÇÃO AO ROLAR A PÁGINA
    // ===============================

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section, .card").forEach((el) => {

        el.classList.add("hidden");
        observer.observe(el);

    });

    // ===============================
    // NAVBAR
    // ===============================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "rgba(9,9,11,.95)";
            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";

        } else {

            header.style.background = "rgba(9,9,11,.80)";
            header.style.boxShadow = "none";

        }

    });

    // ===============================
    // TEXTO DIGITANDO
    // ===============================

    const titulo = document.querySelector(".hero h1");

    if (titulo) {

        const palavras = [

            "Analista de Dados",
            "Power BI",
            "SQL",
            "Python",
            "Excel + VBA"

        ];

        let indicePalavra = 0;
        let indiceLetra = 0;
        let apagando = false;

        function escrever() {

            const palavraAtual = palavras[indicePalavra];

            if (!apagando) {

                titulo.textContent = palavraAtual.substring(0, indiceLetra + 1);

                indiceLetra++;

                if (indiceLetra === palavraAtual.length) {

                    apagando = true;

                    setTimeout(escrever, 1500);

                    return;

                }

            } else {

                titulo.textContent = palavraAtual.substring(0, indiceLetra - 1);

                indiceLetra--;

                if (indiceLetra === 0) {

                    apagando = false;

                    indicePalavra++;

                    if (indicePalavra >= palavras.length) {

                        indicePalavra = 0;

                    }

                }

            }

            setTimeout(escrever, apagando ? 50 : 100);

        }

        escrever();

    }

    // ===============================
    // EFEITO 3D NOS CARDS
    // ===============================

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 18;
            const rotateY = (x - rect.width / 2) / 18;

            card.style.transform =
                `perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.03)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    // ===============================
    // BOTÃO VOLTAR AO TOPO
    // ===============================

    const botaoTopo = document.createElement("button");

    botaoTopo.innerHTML = "↑";

    botaoTopo.style.position = "fixed";
    botaoTopo.style.bottom = "30px";
    botaoTopo.style.right = "30px";
    botaoTopo.style.width = "50px";
    botaoTopo.style.height = "50px";
    botaoTopo.style.borderRadius = "50%";
    botaoTopo.style.border = "none";
    botaoTopo.style.background = "#00BFFF";
    botaoTopo.style.color = "white";
    botaoTopo.style.fontSize = "22px";
    botaoTopo.style.cursor = "pointer";
    botaoTopo.style.display = "none";
    botaoTopo.style.boxShadow = "0 0 20px rgba(0,191,255,.6)";
    botaoTopo.style.transition = ".3s";
    botaoTopo.style.zIndex = "999";

    document.body.appendChild(botaoTopo);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            botaoTopo.style.display = "block";

        } else {

            botaoTopo.style.display = "none";

        }

    });

    botaoTopo.addEventListener("mouseenter", () => {

        botaoTopo.style.transform = "scale(1.1)";

    });

    botaoTopo.addEventListener("mouseleave", () => {

        botaoTopo.style.transform = "scale(1)";

    });

    botaoTopo.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

});