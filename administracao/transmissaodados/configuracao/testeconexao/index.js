import React from 'react'
import { Button, Card, Table } from 'antd'



const Configuracao = () => {
  // table
  const dataSource = [
    {
      key: '1',
      nome: 'teste',
      link: 'teste',
      situacao: 'teste',
      conexao: 'teste',
    },
  ]
  const columns = [
    {
      title: 'Nome do destino',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Link para envio',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: 'Situação',
      dataIndex: 'situacao',
      key: 'situacao',
    },
    {
      title: 'Conexão',
      dataIndex: 'conexao',
      key: 'conexao',
    },
  ]
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
         
          <Card title="Configurações" className="mt-2">
            <Table className="mt-2" dataSource={dataSource} columns={columns} />
            
          </Card>

          <Button type="primary" htmlType="submit" className="text-center w-20 mb-2 mt-2">
            <strong>Testar conexões</strong>
          </Button>
          <div className="row">
            <Button type="danger" htmlType="submit" className="text-center w-20 mr-2">
              <strong>Cancelar</strong>
            </Button>
            <Button type="primary" htmlType="submit" className="text-center w-20">
              <strong>Salvar</strong>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configuracao
