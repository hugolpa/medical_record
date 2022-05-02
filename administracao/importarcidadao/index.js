import React from 'react'
import { Button, Card } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'


const Importarcnes = () => {
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
            <div className="container">
              <h4>Importar Cidadão</h4>
              <hr />
              <div className="row">

                <div className="jumbotron alert-primary">

                  <h6><InfoCircleTwoTone />Para utilizar opções rápidas customizadas de exames, cadastre-as conforme necessário abaixo.Todos os profissionais de seu município terão
                    acesso a elas. As opções rápidas serão filtradas de acordo com idade e sexo do cidadão em atendimento.
                  </h6>
                </div>
                <div className="col-sm">

                  <Button type="primary" htmlType="submit" className="text-center w-20 mt-2">
                    <strong>Selecionar arquivo</strong>
                  </Button>

                </div>
              </div>
            </div>

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
