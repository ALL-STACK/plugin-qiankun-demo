import React, { useState } from 'react';
import { Select, Table, Progress, Pagination, Button } from 'antd';
import {
  GlobalOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';
import style from './index.less'

const { Option } = Select;
function Cluster () {
  const [ currentPage, setCurrentPage ] = useState(1)
  const [data, setData] = useState([]);
  let schoolingList = [
    {value: 1, name: 's20'}
  ]
  const columns = [
    {
      title: '环境ID',
      dataIndex: 'id',
      render: (text: any, record: any) => environment(text, record)
    },
    {
      title: '环境名称',
      dataIndex: 'name'
    },
    {
      title: '环境类型',
      dataIndex: 'type'
    },
    {
      title: '资源配额',
      dataIndex: 'resourcesRuota',
      render: (text: any, record: any) => resourcesRuota(text, record)
    },
    {
      title: '资源使用率',
      dataIndex: 'usage',
      render: (text: any, record: any) => usage(text, record)
    },
    {
      title: '实例数',
      dataIndex: 'instances'
    },
    {
      title: '节点数',
      dataIndex: 'nodes'
    },
    {
      title: '所属租户',
      dataIndex: 'tenant'
    },
    {
      title: '所属集群',
      dataIndex: 'cluster'
    },
  ]
  let dataList = [
    { key: '1', id: '11', name: 'xxx', type: 'xx', resourcesRuota: 'xxx', usage: 'xxx', instances: 'xxx', nodes: 'xxxx', tenant: 'xxx', cluster: 'xxx' },
    { key: '2', id: '11', name: 'xxx', type: 'xx', resourcesRuota: 'xxx', usage: 'xxx', instances: 'xxx', nodes: 'xxxx', tenant: 'xxx', cluster: 'xxx' },
    { key: '3', id: '11', name: 'xxx', type: 'xx', resourcesRuota: 'xxx', usage: 'xxx', instances: 'xxx', nodes: 'xxxx', tenant: 'xxx', cluster: 'xxx' },
    { key: '4', id: '11', name: 'xxx', type: 'xx', resourcesRuota: 'xxx', usage: 'xxx', instances: 'xxx', nodes: 'xxxx', tenant: 'xxx', cluster: 'xxx' },
    { key: '5', id: '11', name: 'xxx', type: 'xx', resourcesRuota: 'xxx', usage: 'xxx', instances: 'xxx', nodes: 'xxxx', tenant: 'xxx', cluster: 'xxx' },
    { key: '6', id: '11', name: 'xxx', type: 'xx', resourcesRuota: 'xxx', usage: 'xxx', instances: 'xxx', nodes: 'xxxx', tenant: 'xxx', cluster: 'xxx' },
    { key: '7', id: '11', name: 'xxx', type: 'xx', resourcesRuota: 'xxx', usage: 'xxx', instances: 'xxx', nodes: 'xxxx', tenant: 'xxx', cluster: 'xxx' },
    { key: '8', id: '11', name: 'xxx', type: 'xx', resourcesRuota: 'xxx', usage: 'xxx', instances: 'xxx', nodes: 'xxxx', tenant: 'xxx', cluster: 'xxx' }
  ]
  function schoolingHandleChange () {

  }
  function environment (text: any, record: any) {
    return (
      <div className={style.environment}>
        <div className={style.title}>显示K8S命名空间 <span className={style.tag}>呼池</span></div>
        <div className={style.time}>创建时间：2021-07-16 12:34</div>
      </div>
    )
  }
  function usage (text: any, record: any) {
    return (
      <div className={style.usage} style={{ width: 150 }}>
        <div><GlobalOutlined style={{ marginRight: '5px' }}/><Progress percent={30} /></div>
        <div><GlobalOutlined style={{ marginRight: '5px' }}/><Progress strokeColor='#FEA300' percent={60} /></div>
      </div>
    )
  }
  function resourcesRuota (text: any, record: any) {
    return (
      <div className={style.resourcesRuota} >
        <div><GlobalOutlined style={{ marginRight: '5px' }}/>1000</div>
        <div><GlobalOutlined style={{ marginRight: '5px' }}/>5000</div>
      </div>
    )
  }
  function showTotal (total: any) {
   return `${currentPage}/${total}`
  }
  return (
    <div className={style.cluster}>
      <div className={style.queryHeard}>
        <div className={style.title}>集群</div>
        <div className={style.query}>
          <div className={style.item}>
            <div className={style.itemTitle}>所属集群</div>
            <div>
              <Select placeholder="请选择所属集群" style={{ width: 265, background: '#BFC1D5' }} onChange={schoolingHandleChange}>
                {
                  schoolingList?.map((item) => {
                    return <Option value={item.value} key={item.value}> {item.name} </Option>
                  })
                }
              </Select>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.itemTitle}>所属租户</div>
            <div>
              <Select placeholder="请选择所属租户" style={{ width: 265, background: '#BFC1D5' }} onChange={schoolingHandleChange}>
                {
                  schoolingList?.map((item) => {
                    return <Option value={item.value} key={item.value}> {item.name} </Option>
                  })
                }
              </Select>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.itemTitle}>环境类型</div>
            <div>
              <Select placeholder="请选择环境类型" style={{ width: 265, background: '#BFC1D5' }} onChange={schoolingHandleChange}>
                {
                  schoolingList?.map((item) => {
                    return <Option value={item.value} key={item.value}> {item.name} </Option>
                  })
                }
              </Select>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.itemTitle}>环境名称</div>
            <div>
              <Select placeholder="请选择环境名称" style={{ width: 265, background: '#BFC1D5' }} onChange={schoolingHandleChange}>
                {
                  schoolingList?.map((item) => {
                    return <Option value={item.value} key={item.value}> {item.name} </Option>
                  })
                }
              </Select>
            </div>
          </div>
          <div className={style.search}>
            <Button type="primary">查询</Button>
            <CloseCircleOutlined style={{ color: '#fff', fontSize: '26px', marginLeft: '10px', position: 'relative', top: 5, cursor: 'pointer' }}/>
          </div>
        </div>
      </div>
      <div className={style.table}>
      {/* columns */}
        <Table
          dataSource={dataList}
          columns={columns}
          rowClassName="editable-row"
          pagination={{ showSizeChanger: true, showQuickJumper: true, showTotal: total => showTotal(total), position: ['bottomCenter'] }}
        />
      </div>
    </div>
  )
}
export default Cluster