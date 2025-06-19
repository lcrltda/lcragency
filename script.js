// Configurações e inicialização do site
class LCRAgency {
    constructor() {
        this.init();
    }

    init() {
        this.setupBackground();
        this.setupVideo();
        this.setupClock();
        this.setupEventListeners();
        this.setupAnimations();
    }

    // Configurar fundo escuro inicial
    setupBackground() {
        $('.background-video').css('background-color', '#111');
    }

    // Configurar e carregar o vídeo do YouTube
    setupVideo() {
        const iframe = document.createElement('iframe');
        iframe.id = 'youtube-iframe';
        iframe.setAttribute('src', 'https://www.youtube.com/embed/AYC-6BlQhA8?autoplay=1&controls=0&rel=0&showinfo=0&loop=1&playlist=AYC-6BlQhA8&mute=1&playsinline=1&modestbranding=1&iv_load_policy=3');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        
        // Estilos do iframe
        Object.assign(iframe.style, {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            opacity: '0.7'
        });

        // Adicionar o iframe ao player
        $('#player').html('').append(iframe);
        
        // Configurar redimensionamento responsivo
        this.setupVideoResize();
    }

    // Configurar redimensionamento responsivo do vídeo
    setupVideoResize() {
        const resizeIframe = () => {
            const $win = $(window);
            const $iframe = $('#youtube-iframe');
            const videoRatio = 16/9;
            const windowRatio = $win.width() / $win.height();
            
            if (windowRatio < videoRatio) {
                // Janela mais alta que o vídeo
                const height = $win.width() / videoRatio;
                const marginTop = ($win.height() - height) / 2;
                
                $iframe.css({
                    'width': '100%',
                    'height': height,
                    'margin-top': marginTop,
                    'transform': 'scale(1.2)'
                });
            } else {
                // Janela mais larga que o vídeo
                const width = $win.height() * videoRatio;
                const marginLeft = ($win.width() - width) / 2;
                
                $iframe.css({
                    'width': width,
                    'height': '100%',
                    'margin-left': marginLeft,
                    'transform': 'scale(1.2)'
                });
            }
        };

        // Aplicar redimensionamento inicial e configurar listener
        resizeIframe();
        $(window).on('resize', resizeIframe);
    }

    // Configurar relógio em tempo real
    setupClock() {
        const updateTime = () => {
            const now = new Date();
            const dateOptions = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            const timeOptions = { 
                hour: '2-digit', 
                minute: '2-digit' 
            };
            
            const formattedDate = now.toLocaleDateString('en-US', dateOptions);
            const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
            
            $('.timestamp').text(`${formattedDate} ${formattedTime}`);
        };
        
        // Atualizar imediatamente e depois a cada minuto
        updateTime();
        setInterval(updateTime, 60000);
    }

    // Configurar event listeners
    setupEventListeners() {
        // Click no logo
        $('.logo').on('click', () => {
            this.animateLogoClick();
        });

        // Click nos itens de navegação
        $('.nav-item').on('click', function() {
            const text = $(this).text().trim();
            console.log(`Navegação clicada: ${text}`);
            // Aqui você pode adicionar lógica para cada item do menu
        });

        // Click no Instagram
        $('.instagram-icon').on('click', () => {
            window.open('https://instagram.com', '_blank');
        });

        // Click no email
        $('.email-icon').on('click', () => {
            window.location.href = 'mailto:contato@lcragency.com';
        });

        // Ações do browser simulado
        $('.browser-action').on('click', function() {
            const action = $(this).text();
            console.log(`Browser action: ${action}`);
        });
    }

    // Configurar animações
    setupAnimations() {
        // Animação de entrada para elementos
        this.fadeInElements();
        
        // Animação de hover para ícones
        this.setupHoverEffects();
    }

    // Animação de fade in para elementos
    fadeInElements() {
        $('nav, footer').css({
            opacity: 0,
            transform: 'translateY(20px)'
        }).animate({
            opacity: 1
        }, 1000).css({
            transform: 'translateY(0)'
        });
    }

    // Efeitos de hover
    setupHoverEffects() {
        $('.nav-item').hover(
            function() {
                $(this).css('transform', 'translateY(-2px)');
            },
            function() {
                $(this).css('transform', 'translateY(0)');
            }
        );
    }

    // Animação para click no logo
    animateLogoClick() {
        $('.logo').css('transform', 'scale(0.95)');
        setTimeout(() => {
            $('.logo').css('transform', 'scale(1)');
        }, 150);
    }

    // Método para adicionar páginas/seções
    addSection(sectionName, content) {
        // Funcionalidade para expandir o site com mais seções
        console.log(`Adicionando seção: ${sectionName}`);
    }

    // Método para trocar o vídeo de fundo
    changeBackgroundVideo(videoId) {
        const newSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0&showinfo=0&loop=1&playlist=${videoId}&mute=1&playsinline=1&modestbranding=1&iv_load_policy=3`;
        $('#youtube-iframe').attr('src', newSrc);
    }
}

// Inicializar quando o documento estiver pronto
$(document).ready(() => {
    const lcr = new LCRAgency();
    
    // Disponibilizar globalmente para debug/extensões
    window.LCR = lcr;
});
