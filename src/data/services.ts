export interface Service {
  id:          string;
  name:        string;
  description: string;
  priceFrom:   number;
  duration:    string;
  image:       string;
  featured:    boolean;
}

export const services: Service[] = [
  {
    id:          'natural-clean',
    name:        'Natural & Clean',
    description: 'Manicura básica con esmaltado semipermanente. Limpieza, forma y color duradero.',
    priceFrom:   18,
    duration:    '45 min',
    image:       '/assets/img/nails-06.webp',
    featured:    true,
  },
  {
    id:          'cute-detail',
    name:        'Cute Detail',
    description: 'Diseños delicados y personalizados adaptados a tu estilo.',
    priceFrom:   25,
    duration:    '60 min',
    image:       '/assets/img/nails-04.webp',
    featured:    true,
  },
  {
    id:          'soft-glam',
    name:        'Soft Glam',
    description: 'Refuerzo o gel con acabado pulido y brillo duradero.',
    priceFrom:   30,
    duration:    '90 min',
    image:       '/assets/img/nails-07.webp',
    featured:    true,
  },
  {
    id:          'retirado',
    name:        'Retirado',
    description: 'Retirada segura del esmalte semipermanente o gel sin dañar la uña natural.',
    priceFrom:   10,
    duration:    '30 min',
    image:       '/assets/img/nails-03.webp',
    featured:    false,
  },
  {
    id:          'relleno',
    name:        'Relleno',
    description: 'Mantenimiento del crecimiento para alargar la duración de tu manicura.',
    priceFrom:   20,
    duration:    '60 min',
    image:       '/assets/img/nails-08.webp',
    featured:    false,
  },
  {
    id:          'reparacion',
    name:        'Reparación',
    description: 'Reparación de una o varias uñas rotas o dañadas.',
    priceFrom:   5,
    duration:    '15 min',
    image:       '/assets/img/nails-09.webp',
    featured:    false,
  },
  {
    id:          'decoracion',
    name:        'Decoración por uña',
    description: 'Añade un diseño especial a una uña concreta. Nail art puntual.',
    priceFrom:   3,
    duration:    '10 min',
    image:       '/assets/img/nails-02.webp',
    featured:    false,
  },
  {
    id:          'pedicura',
    name:        'Pedicura',
    description: 'Cuidado completo del pie: limpieza, forma, hidratación y esmaltado.',
    priceFrom:   25,
    duration:    '60 min',
    image:       '/assets/img/nails-05.webp',
    featured:    false,
  },
];