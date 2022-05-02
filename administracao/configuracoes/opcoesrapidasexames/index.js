import React, { useState } from 'react'
import { Button, Card, Modal, Input, Select, Table } from 'antd'
import { EditOutlined, CloseOutlined, InfoCircleTwoTone } from '@ant-design/icons'



const Opcoesrapidasexames = () => {
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
      nome: 'Gestante 1° Trimestre',
      exame: '16 exame(S)',
      icone: <div><EditOutlined className="mr-2" /><CloseOutlined className="mr-2" /><Button type="primary" htmlType="submit" className="text-center w-20 mr-2" onClick={showModal}><strong>Adicionar</strong></Button></div>,
    }
  ];

  const columns = [
    {
      title: 'Nome do grupo',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Exames',
      dataIndex: 'exame',
      key: 'exame',
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
          <h4>Opções Rápidas de Exame</h4>
          <hr />
          <div className="jumbotron alert-primary">

            <h6><h4><InfoCircleTwoTone /></h4>Para utilizar opções rápidas customizadas de exames, cadastre-as conforme necessário abaixo.Todos os profissionais de seu município terão
              acesso a elas. As opções rápidas serão filtradas de acordo com idade e sexo do cidadão em atendimento.
            </h6>
          </div>
          <Card>
            <Table className="mt-2" dataSource={dataSource} columns={columns} />
            
          </Card>
          <Modal title="Adicionar Grupo de Opções Rápidas" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
            <h6>
              Exames comuns
            </h6>
            <Card>


              <div className="row">
                <p>
                  Nome do grupo de opções rápidas*
                </p>
                <Input />
              </div>
              <div className="row mt-2">
                <p>
                  Exames*
                </p>
                <Select className="w-50" />

              </div>

            </Card>
          </Modal>
        </div>

      </div>


    </div>
  )
}

export default Opcoesrapidasexames
