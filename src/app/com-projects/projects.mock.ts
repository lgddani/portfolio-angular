export const projectsList: Project[] = [
    {
      img: '../../assets/img/proyecto6.jpeg',
      alt: 'Página web completa',
      title: 'Página MG',
      description: 'Un sitio web completo ideal para pequeños/medianos emprendedores u emprendimientos, vital para la muestra de sus productos/servicios.',
      link: 'https://pagina-mg.netlify.app/',
      showButton: true
    },
    {
      img: '../../assets/img/proyecto1.jpg',
      alt: 'App para fiestas - App para beber',
      title: 'Trago Loco',
      description: 'Una divertida app con minijuegos de bebida, perfecta para disfrutar con amigos o familiares en reuniones y fiestas.',
      link: 'https://10038-rdenriquez2.github.io/trago_loco/',
      showButton: true
    },
    {
      img: '../../assets/img/proyecto2.jpg',
      alt: 'ESPE - página universidad',
      title: 'Página ESPE',
      description: 'Una página web principal para la Universidad de las Fuerzas Armadas ESPE, incluyendo los requirimientos de WCAG para fácil acceso a personas con discapacidad.',
      link: 'https://10038-rdenriquez2.github.io/pagina-espe/',
      showButton: true
    },
    {
      img: '../../assets/img/proyecto3.jpg',
      alt: 'Juego con tecnologías web',
      title: 'Ley de la Fuerza',
      description: 'Un sitio web sobre la Ley de la Fuerza que incluye teoría, simulaciones interactivas y un test; diseñados para hacer el aprendizaje más dinámico y accesible',
      link: 'https://ley-fuerza.netlify.app/',
      showButton: true
    },
    {
      img: '../../assets/img/proyecto4.jpg',
      alt: 'Comercio electrónico',
      title: 'E-Commerce',
      description: 'Una completa plataforma de comercio electrónico, con funcionalidades de navegación de productos, carrito de compras y gestión de pagos.',
      link: '',
      showButton: false
    },
    {
      img: '../../assets/img/proyecto5.jpg',
      alt: 'Sistema web para óptica',
      title: 'Sistema Óptica',
      description: 'Una solución integral para la gestión de una óptica; incluyendo inventario, reporte de actividades, registro de clientes, control de productos y ventas.',
      link: '',
      showButton: false
    }
]

export interface Project {
  img: String;
  alt: String;
  title: String;
  description: String;
  link: string;
  showButton: boolean;
}