import React, { useState } from 'react'
import { Input, Button, Card, Form, Modal, Checkbox, Table } from 'antd'
import { FilterOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'


const CBO = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // table
  const dataSource = [
    {
      key: '1',
      codigo: '871238',
      nome: 'Abatedor',
      disponivel: 'Não',
      icone1: <div><EditOutlined className="mr-2" /> <SearchOutlined onClick={showModal} /></div>
    }
  ];

  const columns = [
    {
      title: 'Código da CBO',
      dataIndex: 'codigo',
      key: 'codigo',
    },
    {
      title: 'Nome da CBO',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Disponível para lotação',
      dataIndex: 'disponivel',
      key: 'disponivel',
    },
    {
      title: '',
      dataIndex: 'icone1',
      key: 'icone1',
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
          <Card>
            <div className="row">

              <div className="col-sm-4">
                <div className="row">
                  <Form.Item>
                    <div className="p-2">Nome da CBO:
                    </div>
                  </Form.Item>
                  <Form.Item>

                    <Input className="w-100 p-2" />
                  </Form.Item>
                </div>
              </div>
              <div className="col-sm-2">
                <Form.Item>
                  <FilterOutlined className="p-2" />
                  <Button type="primary" htmlType="submit" className="text-center w-20">
                    <strong>Pesquisar</strong>
                  </Button>
                </Form.Item>
              </div>

            </div>
          </Card>
          <Card>
            <Table className="mt-2" dataSource={dataSource} columns={columns} />
            
          </Card>
          
          <Button type="danger" htmlType="submit" className="text-center w-20 mt-2">
            <strong>Voltar</strong>
          </Button>

          <Modal title="PEC > Administração > Vizualizar" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
            <h6>
              Dados gerais
            </h6>
            <Card>
              <p>
                CBO
              </p>
              <div className="row">

                <Input className="w-25" />
              </div>
              <div className="row">
                <Checkbox className="mr-2 mt-2" /> <p className="mt-2">Disponível para lotação</p>
              </div>
              <div className="row">
                <b>Duração da consulta<Input className="w-25" /> minutos. por padrão, a duração da consulta é de 20 minutos.</b>
              </div>

            </Card>

          </Modal>
        </div>
      </div>
    </div>
  )
}

export default CBO
