import { useEffect, useState } from 'react';
import { Pagination, Button } from 'antd';
import { useModel, connectMaster } from 'umi';
import shareStore from '@/utils/shareStore';
import styles from './index.less';

function IndexPage(props: any) {

  if (!shareStore.getStore().Comps) return (
    <h1>没有主应用</h1>
  )
  
  const { Comps: { Demo }, getSharedUtils } = shareStore.getStore();

  useEffect(() => {
    // console.log('父应用参数：', getSharedUtils)
  }, [])
    
  function handleClick() {
    const { getDvaApp, count, setCount } = props;
    if (!getDvaApp) return;
    const _dispatch = getDvaApp()._store.dispatch;
    setCount && setCount(count + 1)
    _dispatch({
      type: 'global/changeCount',
      payload: { count: count + 1 }
    })
  }

  return (
    <div>
      <Demo />
      <Pagination
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
      />
      <h1>{props.count ?? 0}</h1>
      <Button type="primary" onClick={handleClick}>点击</Button>
      <h1 className={styles.title}>应用一</h1>
    </div>
  );
}

export default connectMaster(IndexPage);