import { makeObservable, observable, action } from "mobx";

class Store {
  @observable formInfo: {};
  constructor() {
    this.formInfo = {};
    makeObservable(this);
  }

  @action
  addPersonalInfo() {}

  @action
  addPlan() {}

  @action
  addAddOns() {}
}

export default Store;
