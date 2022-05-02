import React from 'react'
import { Card, Button, Space, Tooltip, DatePicker, Table } from 'antd'
import { FilterOutlined, InfoCircleFilled, AlertOutlined } from '@ant-design/icons'




const Recebimentoporlotes = () => {
  // table
  const dataSource = [
    {
      key: '1',
      data: '16/04/2021',
      responsavel: 'Caio Borgues',
      tipo: 'AC',
      numero: <div><Tooltip title="Válidas: 110 Inválidas: 0 Duplicadsa: 0 Não Processadas: 0"><p>1</p><span><InfoCircleFilled /></span></Tooltip></div>,
      
    },
  ]
  const columns = [
    {
      title: 'Data recebimento',
      dataIndex: 'data',
      key: 'data',
    },
    {
      title: 'Responsável',
      dataIndex: 'responsavel',
      key: 'responsavel',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
    },
    {
      title: 'N° do lote',
      dataIndex: 'numero',
      key: 'numero',
    },
    
  ]
  /* date pickerr */
  const { RangePicker } = DatePicker;
  /* modal importar */
  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  /* picker */
  function onOk(value) {
    console.log('onOk: ', value);
  }


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
          <Card className="mt-2">
            <div className="row">
              <p className="mr-2">Período de recebimento:</p>
              <Space direction="vertical" size={12}>

                <RangePicker
                  showTime={{ format: 'HH:mm' }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={onChange}
                  onOk={onOk}
                />
              </Space>
              <FilterOutlined className="ml-2" />
              <Button type="primary" htmlType="submit" className="text-center w-20 ml-2">
                <strong>Pesquisar</strong>
              </Button>
            </div>
            <hr />
            <h6>
              Envio Online
            </h6>
            <Table className="mt-2" dataSource={dataSource} columns={columns} />
            
            <div className="row">
              <Button type="primary" htmlType="submit" className="text-center w-20 ml-2 mt-2">
                <strong>Processar todos</strong>
              </Button>
              <Button type="primary" htmlType="submit" className="text-center w-20 ml-2 mt-2">
                <strong>Importar arquivo</strong>
              </Button>
              <Button htmlType="submit" className="text-center w-20 ml-2 mt-2">
                <strong>Voltar</strong>
              </Button>
            </div>
          </Card>
          {/* importar aqruivo */}
          <Card>
            <h4>Importar Arquivo</h4>
            <hr />
            <div className="jumbotron alert-primary">
              <h4>
                <AlertOutlined />
              </h4>
              <p>Essa funcionalidade possibilita a importação de arquivos gerados a partir do PEC, CDS e outros sistemas no modelo RAS (Registro de Atendiemnto Simplificado).
              </p>
            </div>
            <Button type="primary" htmlType="submit" className="text-center w-20 ml-2">
              <strong>Selecionar arquivo</strong>
            </Button>
            <Button htmlType="submit" className="text-center w-20 ml-2 mt-2">
              <strong>Voltar</strong>
            </Button>
          </Card>
        </div>
      </div>
    </div>

  )
}

export default Recebimentoporlotes