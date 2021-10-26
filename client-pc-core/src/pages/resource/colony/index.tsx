import { Tabs, ConfigProvider } from 'antd';
import Cluster from './cluster'
import Nodes from './nodes'
import styles from './index.less'
import zhCN from 'antd/lib/locale/zh_CN';
const { TabPane } = Tabs;

function ContainerCluster () {
  function callback (key: any) {
    console.log(key)
  }
  return (
    <div className={styles.containerCluster}>
      <ConfigProvider locale={zhCN}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="集群" key="1">
            <Cluster/>
          </TabPane>
          <TabPane tab="网关" key="2">
            <Nodes/>
          </TabPane>
        </Tabs>
      </ConfigProvider>
    </div>
  )
}
export default ContainerCluster