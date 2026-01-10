export const certificatesList: Certificate[] = [
    {
        img: '../../assets/img/certificado-php.jpg',
        alt: 'Certificado Udemy',
        title: 'Backend',
        url: 'https://www.udemy.com/certificate/UC-d613dd77-6a71-40f1-817b-db563af812c0/'
    },
    {
        img: '../../assets/img/certificado-java.jpg',
        alt: 'Certificado Udemy',
        title: 'Backend',
        url: 'https://www.udemy.com/certificate/UC-bec812b1-40c3-4c0b-9317-e7f07f9bb4dd/'
    },
    {
        img: '../../assets/img/certificado-mean.jpg',
        alt: 'Certificado Udemy',
        title: 'Backend',
        url: 'https://www.udemy.com/certificate/UC-a6a2f0aa-6031-487f-ad65-9dae7bd70b45/'
    },
    {
        img: '../../assets/img/certificado-angular.jpg',
        alt: 'Certificado Udemy',
        title: 'Fronted',
        url: 'https://www.udemy.com/certificate/UC-cfb3f0d6-2877-43b2-858d-71b6e45751e4/'
    },
    {
        img: '../../assets/img/certificado-flutter.jpg',
        alt: 'Certificado Udemy',
        title: 'Móvil',
        url: 'https://www.udemy.com/certificate/UC-3c4382ac-2491-4f2b-9415-d331c360d7f4/'
    },
    {
        img: '../../assets/img/certificado-hacking.jpg',
        alt: 'Certificado Udemy',
        title: 'Ciberseguridad',
        url: 'https://www.udemy.com/certificate/UC-7714a0ae-0284-4264-906c-e929d5977904/'
    }
]

export interface Certificate {
  img: String;
  alt: String;
  title: String;
  url: String;
}