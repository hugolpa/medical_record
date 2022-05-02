import React, { useState } from 'react'
import { Input, Button, Card, Form, Modal, Checkbox, Table } from 'antd'
import { SearchOutlined, KeyOutlined, FormOutlined, MenuOutlined } from '@ant-design/icons'






const Perfil = () => {


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
      perfil: 'ACE - Agente de combate ás endemas dois',
      icone1: <div><FormOutlined className="mr-2" /><KeyOutlined className="mr-2" /><MenuOutlined className="mr-2" /><SearchOutlined onClick={showModal} /><Button type="primary">Adicionar</Button></div>


    }
  ];

  const columns = [
    {
      title: 'Perfil',
      dataIndex: 'perfil',
      key: 'perfil',
    },

    {
      title: '',
      dataIndex: 'icone1',
      key: 'icone1',
    },


  ];
  // table lista recursos
  const dataSource2 = [
    {
      key: '1',
      recurso: '	..../Acesso ao sistema',
      inserir: <Checkbox />,
      leitura: <Checkbox />,
      alteracao: <Checkbox />,
      exclusao: <Checkbox />,
      acessar: <Checkbox />,
      imprimir: <Checkbox />

    }
  ];

  const columns2 = [
    {
      title: 'Recurso',
      dataIndex: 'recurso',
      key: 'recurso',
    },

    {
      title: 'Inserir',
      dataIndex: 'inserir',
      key: 'inserir',
    },
    {
      title: 'Leitura',
      dataIndex: 'leitura',
      key: 'leitura',
    },
    {
      title: 'Alteração',
      dataIndex: 'alteracao',
      key: 'alteracao',
    },
    {
      title: 'Exclusão',
      dataIndex: 'exclusao',
      key: 'exclusao',
    },
    {
      title: 'Acessar',
      dataIndex: 'acessar',
      key: 'acessar',
    },
    {
      title: 'Imprimir',
      dataIndex: 'imprimir',
      key: 'imprimir',
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
                    <div className="p-2">Perfil:
                    </div>
                  </Form.Item>
                  <Form.Item>

                    <Input className="w-100 p-2" />
                  </Form.Item>
                </div>
              </div>
              <div className="col-sm-2">
                <Form.Item>

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

         
          
          


          <Modal title="PEC > Administração > Vizualizar recursos - ACS - Agente Comunitario de saúde" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>

            <Card title="">
              <Table className="mt-2" dataSource={dataSource2} columns={columns2} />

            </Card>

          </Modal>

        </div>
      </div>
      
    </div>
  )
}

export default Perfil

