export type Testimonial = {
  quote: string
  name: string
  role: string
  year: string
  image: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "En UCATECI no solo aprendí medicina, aprendí a servir con compasión. Los profesores son verdaderos mentores y el ambiente universitario te forma como persona, no solo como profesional.",
    name: "Gabriela Fernández",
    role: "Egresada de Medicina",
    year: "Promoción 2023",
    image: "/ucateci/student-1.jpg",
  },
  {
    quote:
      "La Facultad de Ingeniería me dio las herramientas técnicas y éticas para lanzar mi empresa. Hoy empleo a 15 personas, muchas también egresadas de UCATECI.",
    name: "Rafael Martínez",
    role: "Ing. de Sistemas",
    year: "Promoción 2020",
    image: "/ucateci/student-2.jpg",
  },
  {
    quote:
      "Lo que más valoro es la formación integral. Mi carrera en Derecho me preparó académicamente, pero UCATECI también me enseñó el compromiso con la justicia social.",
    name: "María de los Ángeles Peña",
    role: "Abogada",
    year: "Promoción 2022",
    image: "/ucateci/student-3.jpg",
  },
]
