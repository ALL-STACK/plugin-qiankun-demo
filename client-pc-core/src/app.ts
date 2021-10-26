import sharedStore from '@/utils/shareStore';

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {},
  // 应用 render 之前触发
  async mount(props: any) {
    console.log('嘿嘿嘿')
    if (props.sharedStore) {
      // 重载公用属性
      sharedStore.overloadStore(props.sharedStore);
    }
  },
  // 应用卸载之后触发
  async unmount(props: any) {},
};
