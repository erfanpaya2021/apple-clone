export interface IProduct {
  id: string;
  title: string;
  price: number;
  category: TProductTab;
  image: string;
}

export type TProductTab = "MAC" | "IPHONE" | "APPLE_WATCH" | "IPAD";
