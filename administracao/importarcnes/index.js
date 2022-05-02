import React from 'react'
import { Button, Card, Table } from 'antd'
import { PrinterOutlined, InfoCircleTwoTone } from '@ant-design/icons'


const Importarcnes = () => {
   // table
   const dataSource = [
    {
      key: '1',
      data: '14/09/2021',
      nome: 'Judite',
      icone1: <PrinterOutlined /> ,
      

    }
  ];

  const columns = [
    {
      title: 'Data de importação',
      dataIndex: 'data',
      key: 'data',
    },
    {
      title: 'Nome do profissional',
      dataIndex: 'nome',
      key: 'nome',
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
          <h4 className="p-2">Importar CNES</h4>
          <hr />
          <div className="jumbotron alert-primary"><InfoCircleTwoTone size="small" /> Prontuário Eletrônico do Cidadão versão 3.1.00. Importe o arquivo XML versão 2.1 a ser obtido no portal <b><a>http://cnes.datasus.gov.br</a></b>. Para saber como obter o arquivo compatível com essa versão, acesse o portal <b><a>http://dab.saude.gov.br/esus</a></b>.</div>
          <Button htmlType="submit" className="text-center w-20 mt-2 btn btn-primary mb-2">
            <strong>Selecionar arquivo</strong>
          </Button>
          <h6>Histórico de Importações</h6>
          <hr />
          <Card>
            <Table className="mt-2" dataSource={dataSource} columns={columns} />
            
          </Card>

          <Button type="danger" htmlType="submit" className="text-center w-20 mt-2">
            <strong>Voltar</strong>
          </Button>

        </div>
      </div>
    </div>
  )
}

export default Importarcnes
