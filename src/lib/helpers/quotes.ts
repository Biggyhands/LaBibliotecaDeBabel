interface Quote {
  autor: string;
  frase: string;
}

export const quotes: Quote[] = [
  {
    autor: "Gabriel García Márquez",
    frase:
      "La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla.",
  },
  {
    autor: "Jorge Luis Borges",
    frase: "Siempre imaginé que el Paraíso sería algún tipo de biblioteca.",
  },
  {
    autor: "Miguel de Cervantes",
    frase: "El que lee mucho y anda mucho, ve mucho y sabe mucho.",
  },
  {
    autor: "Jane Austen",
    frase: "No hay encanto igual al de una voz que lee.",
  },
  { autor: "Oscar Wilde", frase: "Sé tú mismo; los demás ya están ocupados." },
  {
    autor: "Edgar Allan Poe",
    frase:
      "Aquellos que sueñan de día son conscientes de muchas cosas que escapan a los que sueñan sólo de noche.",
  },
  {
    autor: "Franz Kafka",
    frase:
      "Un libro debe ser el hacha que rompa el mar helado dentro de nosotros.",
  },
  { autor: "Mark Twain", frase: "El secreto de salir adelante es comenzar." },
  {
    autor: "Virginia Woolf",
    frase:
      "No hay barrera, cerradura ni cerrojo que puedas imponer a la libertad de mi mente.",
  },
  {
    autor: "William Shakespeare",
    frase: "Sabemos lo que somos, pero no lo que podemos llegar a ser.",
  },
  {
    autor: "Emily Dickinson",
    frase: "Para viajar lejos, no hay mejor nave que un libro.",
  },
  {
    autor: "Ernest Hemingway",
    frase:
      "El mundo rompe a todos, y luego, algunos son fuertes en los lugares rotos.",
  },
  {
    autor: "Fyodor Dostoyevsky",
    frase:
      "El misterio de la existencia humana no reside en mantenerse vivo, sino en encontrar algo por lo que vivir.",
  },
  {
    autor: "Hermann Hesse",
    frase:
      "Algunos pensamos que sujetamos el timón, pero lo que hacemos es flotar con la corriente.",
  },
  {
    autor: "George Orwell",
    frase:
      "En tiempos de engaño universal, decir la verdad es un acto revolucionario.",
  },
  {
    autor: "Italo Calvino",
    frase:
      "Un clásico es un libro que nunca termina de decir lo que tiene que decir.",
  },
  {
    autor: "Haruki Murakami",
    frase:
      "Cuando salgas de la tormenta, no serás la misma persona que entró en ella.",
  },
  {
    autor: "Julio Cortázar",
    frase:
      "Nada está perdido si se tiene el valor de proclamar que todo está perdido y hay que empezar de nuevo.",
  },
  {
    autor: "Pablo Neruda",
    frase:
      "Podrán cortar todas las flores, pero no podrán detener la primavera.",
  },
  {
    autor: "Mario Benedetti",
    frase:
      "No te rindas, por favor no cedas, aunque el frío queme, aunque el miedo muerda.",
  },
];

export function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
