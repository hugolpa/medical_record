import React from 'react'
import { Form, Input, Button, Card, Table } from 'antd'
import { EditOutlined, CloseOutlined } from '@ant-design/icons'



const Municipios = () => {
  // table
  const dataSource = [
    {
      key: '1',
      municipio: 'Florianípolis-SC',
      administrador: 'Rodrigo',
      habilitar: 'Não',
      ativado: 'Sim',
      icone: <div><EditOutlined className="mr-2" /><CloseOutlined className="mr-2" /></div>,
    }
  ];

  const columns = [
    {
      title: 'Município*',
      dataIndex: 'municipio',
      key: 'municipio',
    },
    {
      title: 'Administrador*',
      dataIndex: 'administrador',
      key: 'administrador',
    },
    {
      title: 'Habilitar*',
      dataIndex: 'habilitar',
      key: 'habilitar',
    },
    {
      title: 'Ativado*',
      dataIndex: 'ativado',
      key: 'ativado',
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
          <h4>Municípios</h4>
          <hr />
          <Card>
            <h6><b>INFORMAÇÕES DO SERVIDOR</b></h6>
            <div className="row">

              <div className="col-sm-4">

                <h6>Município*</h6>
                <Form.Item name="municipio" rules={[{ required: true, message: 'Por favor insira municipio' }]}>
                  <Input placeholder="" />
                </Form.Item>



              </div>
              <div className="col-sm-4">

                <h6>Administrador*</h6>
                <Form.Item name="administrador" rules={[{ required: true, message: 'Por favor insira administrador' }]}>
                  <Input placeholder="" />
                </Form.Item>

              </div>
              <div className="col-sm-4">

                <h6>&nbsp;</h6>
                <Button type="primary" htmlType="submit" className="text-center w-20">
                  <strong>Confirmar</strong>
                </Button>

              </div>

            </div>

          </Card>

          <Card>
            <Table className="mt-2" dataSource={dataSource} columns={columns} />
           
          </Card>
        </div>

      </div>
      <Button type="danger" htmlType="submit" className="text-center w-20 mr-2 mt-2">
        <strong>Cancelar</strong>
      </Button>
      <Button type="primary" htmlType="submit" className="text-center w-20 mt-2">
        <strong>Confirmar</strong>
      </Button>
    </div>
  )
}

export default Municipios
