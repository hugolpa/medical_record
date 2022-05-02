import React from 'react'
import { Card, Checkbox, Table } from 'antd'


const Visualizarrecurso = () => {


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
          <Card title="Lista de recursos do perfil">
            <Table className="mt-2" dataSource={dataSource2} columns={columns2} />

          </Card>

        </div>
      </div>

    </div>
  )
}

export default Visualizarrecurso

