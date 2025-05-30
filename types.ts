
export interface NavLinkItem {
  href: string;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  contact: string; 
  fullScribe?: string;
  subDescription?: string;
  directions?: string;
  caution?: string;
  guarantee?: string;
}
