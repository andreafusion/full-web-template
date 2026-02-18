export interface Service {
  id:          string;
  name:        string;
  description: string;
  priceFrom:   number;
  duration:    string;
  image:       string;
}

export const services: Service[] = [
  {
    id:          'natural-clean',
    name:        'Natural & Clean',
    description: 'Manicura básica + esmaltado',
    priceFrom:   18,
    duration:    '45 min',
    image:       '/assets/img/nails-06.webp',
  },
  {
    id:          'cute-detail',
    name:        'Cute Detail',
    description: 'Diseños delicados personalizados',
    priceFrom:   25,
    duration:    '60 min',
    image:       '/assets/img/nails-04.webp',
  },
  {
    id:          'soft-glam',
    name:        'Soft Glam',
    description: 'Refuerzo / gel con acabado pulido',
    priceFrom:   30,
    duration:    '90 min',
    image:       '/assets/img/nails-07.webp',
  },
];
