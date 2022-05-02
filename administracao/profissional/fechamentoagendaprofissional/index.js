import React from 'react'
import { Button, Card, Table  } from 'antd'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons'



const Fechamentoagendaprofissional = () => {
// table
const dataSource2 = [
  {
    key: '1',
    inicio: '27/08/2021',
    fim: '29/10/2021',
    motivo: 'Curso',
    icone1: <div><SearchOutlined className="ml-2 mr-2" /><CloseOutlined className="ml-2 mr-2" /><Button type="primary" htmlType="submit" className="text-center w-20"><strong>Adicionar</strong></Button></div>,


  }
];

const columns2 = [
  {
    title: 'Início',
    dataIndex: 'inicio',
    key: 'inicio',
  },
  {
    title: 'Fim',
    dataIndex: 'fim',
    key: 'fim',
  },
  {
    title: 'Motivo',
    dataIndex: 'motivo',
    key: 'motivo',
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

          <Card title=" Profissionais/ agendas / fechamentos */">
            {/* Profissionais/ agendas / fechamentos */}
            <Card>
              <Table className="mt-2" dataSource={dataSource2} columns={columns2} />

            </Card>
          </Card>

        </div>
      </div>
    </div>
  )
}


export default Fechamentoagendaprofissional
