$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000
    })

    function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    
      });
    }

    const titulo = document.querySelector('.tip');
    typeWrite(titulo);

    $('[data-toggle="tooltip"]').tooltip()

    function dark(){
        $("body").addClass("dark");
        $("nav").addClass("dark-nav");
        $('#nav-img').attr("src", "./public/img/black/person.png");
        $('#ass').attr("src", "./public/img/black/assinatura.png");
        $('#mysql').attr("src", "./public/img/black/mysql.png");
        $('#coding').attr("src", "./public/img/black/cloud-coding.png");
        $('#coding2').attr("src", "./public/img/black/cloud-coding.png");
        $(".opc-box").addClass("dark-opc-box");
        $(".container-lang").addClass("dark-container-lang");
        $(".container-sobre").addClass("dark-container-sobre");
        $(".ct-contato").addClass("dark-ct-contato");
        $(".subir").addClass("dark-subir");
    }

    function light(){
        document.querySelector('body').classList.remove("dark");
        document.querySelector('nav').classList.remove("dark-nav");
        document.querySelector('#nav-img').src = "./public/img/person.png";
        document.querySelector('#ass').src = "./public/img/assinatura.png";
        document.querySelector('#mysql').src = "./public/img/mysql.png";
        document.querySelector('#coding').src = "./public/img/cloud-coding.png";
        document.querySelector('#coding2').src = "./public/img/cloud-coding.png";
        $(".opc-box").removeClass("dark-opc-box")
        document.querySelector('.container-lang').classList.remove("dark-container-lang");
        $(".container-sobre").removeClass("dark-container-sobre")
        $(".ct-contato").removeClass("dark-ct-contato")
        $(".subir").removeClass("dark-subir")
    }

    $(".light").hide();

    $(".dark").on("click", function(){
        dark();
        $(".btn-dark").hide();
        $(".light").show();
    })

    $(".light").on("click", function(){
        light()
        $(".light").hide();
        $(".btn-dark").show();
    });

});