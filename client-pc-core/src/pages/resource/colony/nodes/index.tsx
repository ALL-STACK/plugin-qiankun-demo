import React, { useState } from 'react';
import { Descriptions, Table, Tabs, Button } from 'antd';
import {
  RollbackOutlined,
  EllipsisOutlined
} from '@ant-design/icons';
import style from './index.less'

const { TabPane } = Tabs;

function Nodes (props: any) {
  const [ num, setNum ] = useState(0)
  const [ currentPage, setCurrentPage ] = useState(1)
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setNum(selectedRows.length)
    }
  }
  const columns = [
    {
      title: '实例名称',
      dataIndex: 'instanceName',
      ellipsis: true,
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        }
      ],
      onFilter: (value: any, record: any) => true,
    },
    {
      title: '实例IP',
      dataIndex: 'instanceIP'
    },
    {
      title: '所属租户',
      dataIndex: 'tenant',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        }
      ],
      onFilter: (value: any, record: any) => true,
    },
    {
      title: '环境名称',
      dataIndex: 'environmentName',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        }
      ],
      onFilter: (value: any, record: any) => true,
    },
    {
      title: '重启次数',
      dataIndex: 'restartNumber'
    },
    {
      title: '运行状态',
      dataIndex: 'runStatus',
      render: (text: any, record: any) => runStatus(text, record)
    },
    {
      title: '资源使用',
      dataIndex: 'resourceUse',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        }
      ],
      onFilter: (value: any, record: any) => true,
    },
    {
      title: '运行时长',
      dataIndex: 'runTime'
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: () => operation()
    },
  ]
  let dataList = [
    { key: '1', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '0', resourceUse: '234核', runTime: '334天' },
    { key: '2', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '0', resourceUse: '234核', runTime: '334天' },
    { key: '3', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '1', resourceUse: '234核', runTime: '334天' },
    { key: '4', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '1', resourceUse: '234核', runTime: '334天' },
    { key: '5', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '1', resourceUse: '234核', runTime: '334天' },
    { key: '6', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '1', resourceUse: '234核', runTime: '334天' },
    { key: '7', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '1', resourceUse: '234核', runTime: '334天' },
    { key: '8', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '1', resourceUse: '234核', runTime: '334天' },
    { key: '9', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '1', resourceUse: '234核', runTime: '334天' },
    { key: '10', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '1', resourceUse: '234核', runTime: '334天' },
    { key: '11', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '1', resourceUse: '234核', runTime: '334天' },
    { key: '12', instanceName: 'djdeieeooeosserdfe…', instanceIP: '15.116.20.181', tenant: '张三', environmentName: '一测', restartNumber: '345次', runStatus: '1', resourceUse: '234核', runTime: '334天' }
  ]
  function operation () {
    return (
      <div><EllipsisOutlined /></div>
    )
  }
  function runStatus (text: any, record: any) {
    return(
      <div style={{ display: 'flex', alignItems: 'center' }}>
        { text === '0' ? <><b style={{ color: '#FF515A', fontSize: '20px' }}>·</b>异常</> : <><b style={{ color: '#73AC53', fontSize: '20px' }}>·</b>运行中</> }
      </div>
    )
  }
  function runnInstance (currentPage: any) {
    return (
      <div className={style.table}>
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          dataSource={dataList}
          columns={columns}
          rowClassName="editable-row"
          pagination={{ showSizeChanger: true, showQuickJumper: true, showTotal: total => `${currentPage}/${total}`, position: ['bottomCenter'] }}
        />
        <div className={style.statistical}>
          <div className={style.num}>共选择：<span>{ num }</span>对象</div>
          <div><Button type="primary">确定</Button><Button style={{ marginLeft: 30 }}>取消</Button></div>
        </div>
      </div>
    )
  }
  return (
    <div className={style.nodes}>
      <div className={style.head}>
        <div>节点 》 15.10.4</div>
        <div><RollbackOutlined /></div>
      </div>
      <div className={style.nodeBody}>
        <div className={style.card}>
          <Descriptions>
            <Descriptions.Item label="节点IP">15.116.20.181</Descriptions.Item>
            <Descriptions.Item label="OS">Ubuntu 20.04.3 LTS</Descriptions.Item>
            <Descriptions.Item label="Kubelet">v1.20.8</Descriptions.Item>

            <Descriptions.Item label="节点状态">NotReady</Descriptions.Item>
            <Descriptions.Item label="运行时长">345天23时34秒</Descriptions.Item>
            <Descriptions.Item label="实例数">34个</Descriptions.Item>

            <Descriptions.Item label="硬件规格"> 999核<span className={style.tag}>CPU</span>99G<span className={style.tag}>内存</span></Descriptions.Item>
            <Descriptions.Item label="硬件类型">HADOOP1</Descriptions.Item>
            <Descriptions.Item label="节点用途">集群管理</Descriptions.Item>

            <Descriptions.Item label="所属集群">S1</Descriptions.Item>
            <Descriptions.Item label="创建"><span className={style.tag}>王二狗</span> 2021-07-16 18:50:46</Descriptions.Item>
            <Descriptions.Item label="更新"><span className={style.tag}>王二狗</span> 2021-07-16 18:50:46</Descriptions.Item>
          </Descriptions>
        </div>
        <div className={style.tab}>
        <Tabs defaultActiveKey="2">
          <TabPane tab="资源信息" key="1">
          </TabPane>
          <TabPane tab="运行实例" key="2">
            { runnInstance(currentPage) }
          </TabPane>
        </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Nodes