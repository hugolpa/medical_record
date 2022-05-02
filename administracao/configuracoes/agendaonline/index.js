import React from 'react'
import { InfoCircleTwoTone, SyncOutlined, PoweroffOutlined, WifiOutlined } from '@ant-design/icons'
import { Card, Input, Button } from 'antd'



const Agendaonline = () => {
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



          <h4>Agenda Online</h4>
          <hr />
          <div className="row">

            <div className="jumbotron alert-primary">

              <h6><h4><InfoCircleTwoTone /></h4>Para habilitar este serviço é necessário gerar uma contra-chave no <a>Portal do gestor</a> e ter conectividade com a internet.
                Ao habilitá-lo, os cidadãos receberão notificações de agendamentos
                e cancelamentos de consultas no aplicativo Meu digiSUS.
              </h6>
            </div>



          </div>

          <div className="row">
            <Card>
              <div className="row">
                <div className="col-sm">
                  <h6>Agenda Online</h6>
                  <div><h6><b>DESABILITADA</b></h6></div>
                  <PoweroffOutlined />
                  <hr />

                </div>
              </div>
              <div className="row">

                <div className="col-sm">
                  <h6>Chave</h6>
                  <Input />
                </div>
                <div className="col-sm">
                  <h6><SyncOutlined /></h6>
                </div>
              </div>

              <h6>Contra-chave</h6>
              <Input />
              <Button type="primary" htmlType="submit" className="text-center w-20 mt-2">
                <strong>Habilitar</strong>
              </Button>
            </Card>
          </div>
          <div className="row">

            <div className="jumbotron alert-primary">

              <h6><h4><InfoCircleTwoTone /></h4>Para habilitar este serviço é necessário acessar o <b>Portal do gestor</b> para gerar uma contra-chave.
                Se preferrir, é possível gerar a contra-chave ligando para o <b>Disque Saúde</b> através do <b>telefone 136</b>.
                Também é preciso ter conectividade com a internet para este serviço funcionar.
              </h6>
            </div>



          </div>
          <div className="row">
            <Card>

              <div className="col-sm">
                <h6>Agenda Online</h6>
                <div className="mt-2"><h6><b>HABILITADA</b></h6></div>
                <WifiOutlined />
                <hr />
                <div><h6>Habilitada por Flor em <b>22/01/2021 às 12:13</b></h6></div>
                <Button type="danger" htmlType="submit" className="text-center w-20 mt-2">
                  <strong>Desabilitar</strong>
                </Button>
                <hr />
                <div>Testar conexão com servidor da Agenda</div>
                <Button type="primary" htmlType="submit" className="text-center w-20 mt-2">
                  <strong>Testar conexão </strong>
                </Button>
              </div>


            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Agendaonline
