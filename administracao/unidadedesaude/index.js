import React, { useState } from 'react'
import { Input, Button, Card, Form, Modal, Checkbox, Select, Table } from 'antd'
import { FilterOutlined, CloseOutlined, EditOutlined, TeamOutlined, SearchOutlined } from '@ant-design/icons'



const Unidadedesaude = () => {
   // modal

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
    nome: 'Secretaria municipal de saúde',
    cnes: '645637',
    telefone1: '(61)3343-9887',
    telefone2: '(61)3343-9880',
    bairro: 'Asa Sul',
    icone1: <div><TeamOutlined className="col-sm-2 mr-2" /><EditOutlined className="col-sm-2 mr-2" onClick={showModal} /><CloseOutlined className="col-sm-2 mr-2" /></div>

  }
];

const columns = [
  {
    title: 'Nome da Unidade de saúde',
    dataIndex: 'nome',
    key: 'nome',
  },
  {
    title: 'CNES',
    dataIndex: 'cnes',
    key: 'cnes',
  },
  {
    title: 'Telefone1',
    dataIndex: 'telefone1',
    key: 'telefone1',
  },
  {
    title: 'Telefone 2',
    dataIndex: 'telefone2',
    key: 'telefone2',
  },
  {
    title: 'Bairro',
    dataIndex: 'bairro',
    key: 'bairro',
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
                    <div className="p-2">Nome:
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

        </div>
      </div>

      <Modal title="Editar tipos de serviço de Unidade de saúde" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
        <h6>
          Identificação
        </h6>
        <Card>
          <p>
            Nome*
          </p>
          <div className="row">
            <div className="col-sm">
              <Input />
            </div>
            <div className="col-sm">
              <Checkbox /> Ativo
            </div>
          </div>
        </Card>
        <h6>
          Geral
        </h6>
        <Card>

          <div className="row">
            <div className="col-sm">
              <p>
                CNPJ*
              </p>
              <Input />

              <p className="ml-2 mr-2">
                Complexidade*
              </p>
              <p className="ml-2 mr-2">
                Atenção básica
              </p>
              <Checkbox />
              <p className="ml-2 mr-2">
                Média Complexidade
              </p>
              <Checkbox />
              <p className="ml-2 mr-2">
                Alta Complexidade
              </p>
              <Checkbox />

              <p>
                Telefone*
              </p>
              <Input />
              <p>
                Email*
              </p>
              <Input />

            </div>
            <div className="col-sm">
              <p>
                CNES*
              </p>
              <Input />
              <p>
                Telefone 2*
              </p>
              <Input />
            </div>
            <div className="col-sm">
              <p>
                Tipo de unidade*
              </p>
              <Input />
              <p>
                Fax*
              </p>
              <Input />
            </div>
          </div>
        </Card>
        <h6>
          Endereço*
        </h6>
        <Card>

          <div className="row">
            <div className="col-sm">
              <p>
                CEP
              </p>
              <Input />
              <p>
                Município
              </p>
              <Input />
              <p>
                Tipo de lougradouro
              </p>
              <Input />



              <p>
                Número
              </p>
              <Input className="w-25" />

              <p>Sem número</p>

              <Checkbox />

              <p>Complemento</p>

              <Input className="w-50" />

              <p>
                Ponto de referência
              </p>
              <Input />
            </div>
            <div className="col-sm">
              <p>
                Estado
              </p>
              <Select className="w-50" />
              <p>
                Bairro
              </p>
              <Input className="w-50" /> <SearchOutlined />
              <p>
                Logradouro
              </p>
              <Input className="w-50" /> <SearchOutlined />

            </div>
          </div>
        </Card>
        <h6>
          Tipos de serviços
        </h6>
        <Card>

          <div className="row">
            <div className="col-sm">
              <div className="row">
                <Checkbox className="mr-2" /> Adm. medicamento
              </div>
              <div className="row">
                <Checkbox className="mr-2" /> Nebulização
              </div>
            </div>

            <div className="col-sm">
              <div className="row">
                <Checkbox className="mr-2" /> Curativo
              </div>
              <div className="row">
                <Checkbox className="mr-2" /> Odontologia
              </div>
            </div>

            <div className="col-sm">
              <div className="row">
                <Checkbox className="mr-2" /> Demanda espontãnea
              </div>
              <div className="row">
                <Checkbox className="mr-2" /> Procedimentos
              </div>
            </div>

            <div className="col-sm">
              <div className="row">
                <Checkbox className="mr-2" /> Escuta inicial
              </div>
              <div className="row">
                <Checkbox className="mr-2" /> Vacina
              </div>
            </div>

            <div className="col-sm">
              <div className="row">
                <Checkbox className="mr-2" /> Exames
              </div>

            </div>
          </div>
        </Card>
      </Modal>
    </div>
  )
}


export default Unidadedesaude
