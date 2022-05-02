import React, {useState} from 'react'
import { Input, Button, Card, Form, Select, List, Typography, Checkbox, Modal, Table } from 'antd'
import { FilterOutlined, SearchOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons'

// table
const dataSource = [
  {
    key: '1',
    unidadedesaude: 'Secretaria Municipal de saúde',
    cbo: 'Agente comunitário de saúde',
    perfis: 'Digitador',
    ativo: <div><h6>Sim <SearchOutlined className="mr-2 ml-2" /> <EditOutlined className="mr-2" /> <CloseOutlined className="mr-2 mf-2" /> </h6></div>

  }
];

const columns = [
  {
    title: 'Unidade de saúde',
    dataIndex: 'unidadedesaude',
    key: 'unidadedesaude',
  },
  {
    title: 'CBO',
    dataIndex: 'cbo',
    key: 'cbo',
  },
  {
    title: 'Perfis',
    dataIndex: 'perfis',
    key: 'perfis',
  },
  {
    title: 'Ativo',
    dataIndex: 'ativo',
    key: 'ativo',
  },

];

const Lotacaodoprofissional = () => {
  // modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal3 = () => {
    setIsModalVisible(true);
  };
  const handleOk3 = () => {
    setIsModalVisible(false);
  };
  const handleCancel3 = () => {
    setIsModalVisible(false);
  };
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const data = [
    'Médico',
    'Escuta inicial',
  
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
                    <div className="p-2">Unidade de Saúde:
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
            
            <div className="row mt-3">
              
              <Button type="primary" onClick={showModal3} htmlType="submit" className="text-center w-20 ml-2">
                <strong>Adicionar</strong>
              </Button>
            </div>

          </Card>
          {/* Modal 3 Adicionar lotação do profissional */}
          <Modal title="Adicionar lotação do profissional" visible={isModalVisible} onOk={handleOk3} onCancel={handleCancel3} width={1000}>

            <Card title="Geral">

              <div className="row">
                <div className="col-sm">
                  <p>
                    Unidade de saúde *
                  </p>
                  <Select defaultValue="lucy" style={{ width: 220 }} allowClear>
                    <Option value="lucy">USB-Asa norte</Option>
                  </Select>
                  <p>
                    CBO*
                  </p>
                  <Select defaultValue="lucy" style={{ width: 220 }} allowClear>
                    <Option value="lucy">CBO</Option>
                  </Select>
                  <p>
                    Ativo
                  </p>
                  <Checkbox />
                  <p>
                    INE
                  </p>
                  <Select className="w-25" />

                </div>
              </div>
            </Card>
            <Card title="Perfis" className="mt-2">
              <div className="col-sm">
                <p>
                  Tipo de perfil*
                </p>
                <Select defaultValue="lucy" style={{ width: 220 }} allowClear>
                  <Option value="lucy">Administrador</Option>
                </Select>



                <p>
                  Perfil*
                </p>
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="selecione"
                  defaultValue={['Médico']}
                  onChange={handleChange}
                  optionLabelProp="label"
                >
                  <Option value="Médico" label="Médico">
                    <div className="demo-option-label-item">

                      Médico
                    </div>
                  </Option>
                  <Option value="Escuta inicial" label="Escuta inicial">
                    <div className="demo-option-label-item">

                      Escuta inicial
                    </div>
                  </Option>

                </Select>

                <List
                  bordered
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <Typography.Text>-</Typography.Text> {item} <CloseOutlined className="mr-2 mf-2" />
                    </List.Item>
                  )}
                />


              </div>


            </Card>
          </Modal>

        </div>
      </div>
    </div>
  )
}


export default Lotacaodoprofissional
