// Configurações globais do site LCR Agency
const LCR_CONFIG = {
    // Informações da empresa
    company: {
        name: 'LCR SERVIÇOS',
        fullName: 'LCR LTDA',
        email: 'adm@lcrltda.com',
        website: 'https://lcrltda.com/lcragency/',
        locations: ['Fortaleza', 'São Paulo'],
        country: 'Brasil'
    },

    // Configurações de vídeo
    video: {
        defaultId: 'AYC-6BlQhA8',
        autoplay: true,
        loop: true,
        muted: true,
        controls: false,
        brightness: 0.7
    },

    // URLs e redes sociais
    baseUrl: 'https://lcrltda.com/lcragency/',
    social: {
        instagram: 'https://instagram.com/lcragency',
        email: 'mailto:adm@lcrltda.com'
    },

    // Configurações de UI
    ui: {
        theme: 'dark',
        animations: true,
        browserBar: true,
        clockUpdateInterval: 60000 // 1 minuto
    },

    // Seções do site (para futuras expansões)
    sections: {
        home: {
            title: 'Home',
            icon: 'fas fa-home',
            active: true
        },
        services: {
            title: 'Serviços',
            icon: 'fas fa-bars',
            active: true
        },
        about: {
            title: 'Quem Somos',
            icon: 'fas fa-plus-circle',
            active: true
        },
        contact: {
            title: 'Contato',
            icon: 'fas fa-envelope',
            active: false
        },
        portfolio: {
            title: 'Portfolio',
            icon: 'fas fa-briefcase',
            active: false
        }
    },

    // Textos e conteúdos
    content: {
        copyright: '©LCR LTDA. Todos os direitos reservados.',
        services: [
            'Marketing Digital',
            'Produção Audiovisual',
            'Editoração',
            'Content Design'
        ],
        about: {
            title: 'Sobre a LCR Agency',
            description: 'Conteúdo de alta qualidade com eficiência e inovação digital.'
        }
    },

    // Configurações técnicas
    technical: {
        responsive: true,
        lazyLoad: true,
        analytics: false,
        seo: {
            title: 'LCR AGENCY - Marketing Digital e Soluções Criativas',
            description: 'Agência especializada em marketing digital, criação de conteúdo e soluções criativas em Fortaleza e São Paulo.',
            keywords: 'marketing digital, agência, criação, conteúdo, fortaleza, são paulo, lcr ltda',
            canonical: 'https://lcrltda.com/lcragency/'
        }
    },

    // Cores do tema
    colors: {
        primary: '#1a1a1a',
        secondary: '#2b2b2b',
        accent: '#444',
        text: '#ffffff',
        textSecondary: 'rgba(255,255,255,0.8)',
        instagram: '#E4405F',
        email: '#4285f4'
    }
};

// Exportar configurações
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LCR_CONFIG;
}
