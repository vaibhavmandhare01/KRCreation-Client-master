export class Product {
  name: string;
  category: string;
  price: string;
  description: string;
  isActive: boolean;
  images: any[];
}

export class Filedata {
  name: string;
  url: string | ArrayBuffer;
  format: string;
}