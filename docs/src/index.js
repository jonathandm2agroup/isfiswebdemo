document.addEventListener('DOMContentLoaded', ()=> {
    //ID PARA EL MENÚ DESPLEGABLE
    let BurgerID = document.getElementById('Burger');
    let Desplegable = document.getElementById('desplegable');

    BurgerID.addEventListener('click', ()=> {
        if(Desplegable.classList.contains('hidden')){
            Desplegable.classList.add('flex')
            Desplegable.classList.add('ease-in-out')
            Desplegable.classList.add('duration-300')
            Desplegable.classList.remove('hidden')
        }else{
            Desplegable.classList.remove('flex')
            Desplegable.classList.add('hidden')
            Desplegable.classList.remove('ease-in-out')
            Desplegable.classList.remove('duration-300')
        }
    });

    if(window.location.pathname.includes('ofertas.html')){
        //Popup
        let popupActivator = document.querySelectorAll('.activate-popup');
        let popup = document.querySelectorAll('.popup')
        let closePopup = document.querySelectorAll('.close-popup');
    
        popupActivator.forEach((item, id) => {
            let idActivator = id
            item.setAttribute("id", `Popup-${id}`)
            item.addEventListener('click', () => {
                popup.forEach((item, id) => {
                    item.setAttribute("id", `PopUpActive-${id}`)
                    if(idActivator == id){
                        if(item.classList.contains('hidden')){
                            item.classList.add("fixed")
                            item.classList.add("flex")
                            item.classList.remove("hidden")
                        }
                    }
                })
            });
        }) 

        //Close popup 
        closePopup.forEach((item, id)=> {
           item.addEventListener('click', ()=>{
                let currentPopup = document.getElementById(`PopUpActive-${id}`);
                if(currentPopup.classList.contains("fixed")){
                    currentPopup.classList.remove("fixed")
                    currentPopup.classList.remove("flex")
                    currentPopup.classList.add("hidden")
                }
           })
        })

    }

    if(window.location.pathname.includes('oferta-academica.html')){
        new Splide('#ofertas', {
            type   : 'loop',
            perPage: 1,
            autoplay: 'play',
            interval: 4000,
            pagination:false,
        }).mount();
    }

    if(window.location.pathname.includes('evento.html')){
        let splide = new Splide('#main-carousel', {
            pagination:false,
        }).mount();

        // Collects LI elements:
        var thumbnails = document.getElementsByClassName( 'thumbnail' );

        for ( var i = 0; i < thumbnails.length; i++ ) {
        initThumbnail( thumbnails[ i ], i );
        }

        // The function to initialize each thumbnail.
        function initThumbnail( thumbnail, index ) {
            thumbnail.addEventListener( 'click', function () {
                splide.go( index );
            } );
        }
    }

    if(window.location.pathname.includes('contactanos.html')){
        const img = document.querySelector('parallax');
        window.addEventListener('scroll', function() {
            const scrollPos = window.pageYOffset;
            img.style.transform = 'translateY(' + scrollPos / 2 + 'px)';
        });
    }

    if(window.location.pathname.includes('index.html')){
        //Carrousel Novedades
        new Splide('#novedades', {
            type   : 'loop',
            perPage: 1,
            autoplay: 'play',
            interval: 4000,
            arrows:false
        }).mount();

        //Carrousel instalaciones 
        console.log()
        if(window.innerWidth < 1024){
            new Splide('#instalaciones', {
                type   : 'loop',
                perPage: 1,
                autoplay: 'play',
                interval: 2000,
                arrows:false
            }).mount();
            console.log("hola")
        }
        if(window.innerWidth >= 1024){
            new Splide('#instalacionesDesktop', {
                type   : 'loop',
                perPage: 2,
                autoplay: 'play',
                gap: 4,
                interval: 2000,
                rewind  : true,
            }).mount();
            console.log("Hola2")
        }
        // Carrousel Clientes
        new Splide("#clientes", {
            type   : 'loop',
            perPage: 1,
            autoplay: 'play',
            interval: 2000,
            arrows:false,
            pagination:false
        }).mount();

        new Splide("#testimonios", {
            type   : 'loop',
            perPage: 1,
            autoplay: 'play',
            interval: 5000,
            pagination:false,
            arrows:false
        }).mount();

    }
})