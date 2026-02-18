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
    id:          'semipermanente + rusa',
    name:        'Semipermanente & Manicura Rusa',
    description: 'Cutícula pulida, color uniforme y acabado limpio',
    priceFrom:   18,
    duration:    '45 min',
    image:       '/assets/img/nails-06.webp',
  },
  {
    id:          'nailart-iconic',
    name:        'Nail Art Iconic',
    description: 'Detalles, efectos, 3D, encapsulados… diseños personalizados',
    priceFrom:   25,
    duration:    '60 min',
    image:       '/assets/img/nails-04.webp',
  },
  {
    id:          'soft-glam',
    name:        'Soft Gel | Refuerzo | Polygel',
    description: 'Durabilidad extra y estructura bonita: uñas más resistentes, finas y con acabado pulido.',
    priceFrom:   30,
    duration:    '90 min',
    image:       '/assets/img/nails-07.webp',
  },
];
