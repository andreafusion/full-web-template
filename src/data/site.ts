export const site = {
  brand:       'Mimas Iconic',
  tagline:     'Manicura Natural y Elegante en Valencia',
  description: 'Manicura natural y elegante en Valencia. Diseños delicados personalizados sin exagerar.',
  url:         'https://mimas-iconic-n6hi.vercel.app',
  ogImage:     '/assets/img/nails-05.webp',
  lang:        'es',

  location: {
    street: 'Calle Example, 123',
    city:   'Valencia, España',
  },

  hours: [
    { days: 'Lunes a Viernes', time: '10:00 – 20:00' },
    { days: 'Sábado',          time: '10:00 – 14:00' },
    { days: 'Domingo',         time: 'Cerrado'        },
  ],

  whatsapp:        'https://wa.me/34123456789',
  instagram:       'https://instagram.com/mimas.iconic',
  instagramHandle: '@mimas.iconic',
  bookingUrl:      '/reservar',

  // ⚠️ Reemplaza con tu URL real de Calendly
  calendlyUrl: 'https://calendly.com/mimas-iconic/reserva',
} as const;
