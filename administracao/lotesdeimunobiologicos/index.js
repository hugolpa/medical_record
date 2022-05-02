import React, { useState } from 'react'
import { CloseOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { Card, Button, Select, Modal, DatePicker, Space, Input, Checkbox, Table } from 'antd'
import moment from 'moment';



const Lotesdeimunobiologicos = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  /* modal */
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  const dateFormat = 'YYYY/MM/DD';

  // table
  const dataSource = [
    {
      key: '1',
      imunobiologico: 'Hepatite-B',
      lote: '123456',
      fabricante: 'Fio Cruz',
      data: '31/10/2021',
      icone: <div><EditOutlined /><CloseOutlined className="ml-2" /> <Button type="primary" htmlType="submit" className="text-center w-20 mt-2 ml-2" onClick={showModal}><strong>Adicionar</strong></Button></div>

    }
  ];

  const columns = [
    {
      title: 'Imunobiológico',
      dataIndex: 'imunobiologico',
      key: 'imunobiologico',
    },
    {
      title: 'Lote',
      dataIndex: 'lote',
      key: 'lote',
    },
    {
      title: 'Fabricante',
      dataIndex: 'fabricante',
      key: 'fabricante',
    },
    {
      title: 'Data de validade',
      dataIndex: 'data',
      key: 'data',
    },
    {
      title: '',
      dataIndex: 'icone',
      key: 'icone',
    },

  ];




  return (
    <div>

      <div
        style={{
          background: '#eceff4',
          padding: '50px 20px',
          color: '#514d6a',
          borderRadius: '5px',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0px auto', fontSize: '14px' }}>



          <Card title="Lote de imunobiológicos">


            <div className="row">



              <h6>Imunobiologico</h6>

              <Select placeholder="" className="w-50 mr-2 ml-2" />


              <SearchOutlined className="mr-2 ml-2" />

              <Button type="primary" htmlType="submit" className="text-center w-20">
                <strong>Pesquisar</strong>
              </Button>



            </div>

          </Card>

          <Card>
            <Table className="mt-2" dataSource={dataSource} columns={columns} />

          </Card>
          <Button type="secundary" htmlType="submit" className="text-center w-20 mt-2">
            <strong>Voltar</strong>
          </Button>
          <Modal title="Adicionar Lote de imunobiológico" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>

            <Card>


              <div className="row">

                <div className="col-sm">
                  <p>
                    Imunobiológico
                  </p>
                  <Select className="w-100" />

                </div>
                <div className="col-sm">
                  <p>
                    Lote*
                  </p>
                  <Input />

                </div>
                <div className="col-sm">
                  <p>
                    Lote*
                  </p>
                  <Input />

                </div>
                <div className="col-sm">
                  <p>
                    Data de validade*
                  </p>
                  <Space direction="vertical" size={12}>
                    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />

                  </Space>

                </div>
                <div className="col-sm">
                  <p>
                    Ativo
                  </p>
                  <Checkbox />

                </div>

              </div>


            </Card>

          </Modal>
         

        </div>
      </div>
    </div>
  )
}

export default Lotesdeimunobiologicos
