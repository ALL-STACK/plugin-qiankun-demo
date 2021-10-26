import { ReactNode } from "react";

class selfStore {
  Comps: any;
}

class SharedStore {
  static store = new selfStore();

  /**
   * 重载 store
   */
  static overloadStore(store: any) {
    SharedStore.store = store;
  }

  /**
   * 获取 store 实例
   */
  static getStore() {
    return SharedStore.store;
  }
}

export default SharedStore;
