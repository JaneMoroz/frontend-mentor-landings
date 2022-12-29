import { makeObservable, observable, action } from "mobx";
import IFormInfo from "../interfaces/IFormInfo";

class FormStore {
  @observable formInfo: IFormInfo;
  constructor() {
    this.formInfo = {
      info: { name: "", email: "", phone: "" },
      plan: { name: "Arcade", price: 90 },
      addOns: [] as { name: string; title: string; price: number }[],
      duration: "yr",
      total: 90,
    };
    makeObservable(this);
  }

  @action
  addPersonalInfo = (info: { name: string; email: string; phone: string }) => {
    this.formInfo.info = info;
  };

  @action
  addPlan = (plan: { name: string; price: number; duration: string }) => {
    this.formInfo.plan = { name: plan.name, price: plan.price };
    this.formInfo.duration = plan.duration;
  };

  @action
  addAddOns = (addOns: { name: string; title: string; price: number }[]) => {
    this.formInfo.addOns = addOns;
  };
}
const Store = new FormStore();
export default Store;
