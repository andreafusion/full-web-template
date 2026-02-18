export interface Testimonial {
  id:     string;
  quote:  string;
  author: string;
}

export const testimonials: Testimonial[] = [
  { id: 't1', quote: 'Mis uñas nunca habían durado tanto.',    author: 'Laura' },
  { id: 't2', quote: 'Siempre salgo sintiéndome más guapa.',   author: 'Marta' },
];
