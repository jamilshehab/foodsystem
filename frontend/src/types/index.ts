export interface BreadCrumbProps {
  title: string;
  firstLink: string;
  secondLink: string;
  thirdLink?: string;
  firstTitle: string;
  secondTitle: string;
  thirdTitle?: string;
}

export interface ModalProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  onClose: () => void;
}

export interface RegisterModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface ProductProps {
  products: {
    title: string;
    description: string;
    price: Number;
    
  };
}
