export interface FaqItem {
  question: string;
  answer:   string;
}

export const faqItems: FaqItem[] = [
  {
    question: '¿Cuánto duran las uñas?',
    answer:   'Dependiendo del servicio, entre 2–4 semanas. El gel y los diseños con refuerzo duran más tiempo y mantienen su brillo intacto.',
  },
  {
    question: '¿Dañan la uña natural?',
    answer:   'No, si se aplican y retiran correctamente. Trabajo con productos de calidad y técnicas que respetan tu uña natural.',
  },
  {
    question: '¿Cuánto tiempo tarda el servicio?',
    answer:   'Entre 45 minutos y 1h 30min, dependiendo del servicio. Es tu momento de relax, así que no hay prisa.',
  },
  {
    question: '¿Se puede cambiar el diseño?',
    answer:   '¡Claro! Podemos modificar cualquier diseño para que sea exactamente lo que buscas. Lo hablamos antes de empezar.',
  },
];
