interface IFormInfo {
  info: {
    name: string;
    email: string;
    phone: string;
  };
  plan: {
    name: string;
    price: number;
  };
  addOns: { name: string; title: string; price: number }[];
  duration: string;
  total: number;
}

export default IFormInfo;
