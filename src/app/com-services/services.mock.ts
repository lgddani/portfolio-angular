export const servicesList: Service[] = [
    {
      icono: 'iconos fa-brands fa-html5',
      titulo: 'HTML 5',
    },
    {
        icono: 'iconos fa-brands fa-css3-alt',
        titulo: 'CSS 3',
    },
    {
        icono: 'iconos fa-brands fa-js',
        titulo: 'JavaScript',
    },
    {
        icono: 'iconos fa-brands fa-bootstrap',
        titulo: 'Bootstrap',
    },
    {
        icono: 'iconos fa-brands fa-angular',
        titulo: 'Angular',
    },
    {
        icono: 'iconos fa-brands fa-node',
        titulo: 'NodeJS',
    },
    {
        icono: 'iconos fa-brands fa-php',
        titulo: 'PHP',
    },
    {
        icono: 'iconos fa-solid fa-database',
        titulo: 'MySQL',
    },
    {
        icono: 'iconos fa-solid fa-leaf',
        titulo: 'MongoDB',
    },
    {
        icono: 'iconos fa-brands fa-git-alt',
        titulo: 'Git',
    },
]

export interface Service {
  icono: String;
  titulo: String;
}