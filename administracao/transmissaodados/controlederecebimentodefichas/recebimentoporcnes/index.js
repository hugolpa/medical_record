import React from 'react'
import { Card, Button, Table } from 'antd'





const Recebimentoporcnes = () => {

  // table
  const dataSource = [
    {
      key: '1',
      ficha: 'CDS Ficha complementar - Síndrome neurológica por Zica/Mi...',
      quantidade: 'CDS Cadastro Domiciliar',
    },
  ]
  const columns = [
    {
      title: 'Ficha',
      dataIndex: 'ficha',
      key: 'ficha',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantidade',
      key: 'quantidade',
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

        {/* Recebimento por cnes */}
        <Card title="Informações gerais">



          <div className="row">
            <div className="col-sm">
              <p>CNES:</p>
              <div><p>54444430</p></div>
              <div><p>UNIDADE BÁSICA DE SAÚDE AGRONOMICA</p></div>
            </div>

          </div>
          <div className="row">
            <div className="col-sm">
              <p>Mês de recebimento:</p>

              <div><p>Agosto - 2016</p></div>
            </div>
          </div>
        </Card>
        <Card title="Fichas Recebidas">
          <Table className="mt-2" dataSource={dataSource} columns={columns} />

          <div>Total de fichas: 2</div>
        </Card>
        <Button htmlType="submit" className="text-center w-20 ml-2 mt-2">
          <strong>Voltar</strong>
        </Button>
      </div>
    </div>
  )
}
export default Recebimentoporcnes