import { React } from 'react'
import { Button, Switch } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'
import style from '../style.module.scss'



const Estatisticas = () => {
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
        <div style={{ maxWidth: '1200px', margin: '0px auto', fontSize: '14px' }}>
          <h4>ESTATÍSTICAS DE USO E DIAGNÓSTICO DO SISTEMA</h4>
          <hr />
          <div className="row">
            <div className="jumbotron alert-primary"><h6><h4><InfoCircleTwoTone /></h4>Com o objetivo de fornecer dados para a melhoria do e-SUS AB e facilitar diagnósticos de eventuais problemas, é possível habilitar a geração e o envio automático de logs que enviam dados anônimos sobre o uso do sistema.</h6></div>
          </div>
          <h4>Baixar Logs</h4>
          <hr />
          <div className={`card ${style.container}`}>




            <div className="row">
              <div className="col-sm">

                <Button type="primary" size="large" htmlType="submit" className="text-center w-20">
                  <strong>Baixar Logs</strong>
                </Button>
              </div>
              <div className="col-sm">
                <h6>Você tem 2 arquivos(s) de logs, com tamanho total de 0,04 MB, os arquivos serão compactados para o download</h6>
              </div>
            </div>

          </div>
          <h4>Configurações</h4>
          <hr />
          <div className={`card ${style.container}`}>
            <div className="row">




              <div className="col-sm">
                <h6>Geração de estatísticas de uso</h6>
              </div>
              <div className="col-sm">
                <Switch />
              </div>




            </div>

          </div>
          <div className={`card ${style.container}`}>
            <div className="row">




              <div className="col-sm">
                <h6>Envio automático</h6>
              </div>
              <div className="col-sm">
                <Switch />
              </div>




            </div>

          </div>

         
        </div>


      </div>
      <Button type="danger" htmlType="submit" className="text-center w-20 mt-2 mr-2">
        <strong>Cancelar</strong>
      </Button>
      <Button type="primary" htmlType="submit" className="text-center w-20 mt-2 mr-2">
        <strong>Salvar</strong>
      </Button>
    </div>
  )
}

export default Estatisticas