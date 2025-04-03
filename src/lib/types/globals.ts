/*Utilizado en frase de autor famoso*/
export interface Quote {
  autor: string;
  frase: string;
}

/*Utilizado en en componente about us*/
export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}
