import { useEffect, useState } from 'react';
import { connect, MicroApp } from 'umi';
import { Button, Drawer } from 'antd';

const Index = ({ dispatch, global }: any) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // dispatch({
    //   type: 'welcome/userVerifies',
    //   payload: {
    //     // ...values,
    //     password: 'CP/AmlWU450ntnzuxZQpKtOg0PEnat8QWaIimjc2VzBboDUeNYnxaMrUyjpKqv76UFNGkKADIsNwprB2+SeqWRdRv2MYX+TdseRsptDLNU8ehOAuYX+Nr1EsBRJ8mF1FD1mZ9aa/TS1dbKagzDJQQHJnhFcI3vQIkonf21fqcGQ=',
    //     username: 'ysports_admin',
    //   },
    //   onSuccess: res => {
    //     console.log(res);
    //   },
    //   onFailed: error => {
    //   },
    // });
    // console.log(umi)
  }, []);

  return (
    <div>
      <h1>欢迎欢迎，热烈欢迎</h1>
      <h1>客户侧的应用</h1>
      <Button type="primary" onClick={() => setVisible(true)}>打开子应用</Button>
      {/* <Drawer title="vue子应用" width={800} visible={visible} onClose={() => setVisible(false)} closable maskClosable>
        <MicroApp name="app2" />
      </Drawer> */}
    </div>
  );
};

export default connect(({ index, loading, global }) => ({
  index,
  loading: loading.models.index,
  global,
}))(Index);
