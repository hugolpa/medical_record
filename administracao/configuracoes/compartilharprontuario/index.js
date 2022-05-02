import React from 'react'
import { WifiOutlined, PoweroffOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import style from '../style.module.scss'


const Compartilharprontuario = () => {
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

          <hr />

          

          <div className="row">


            <div className="col-sm">
              <div className={`card ${style.container}`}>
                <h6><b>Compartilhamento de prontuário</b></h6>
                <h6>Ativo</h6>
                <WifiOutlined />
                <h6 className="mt-2"><b>Ativado por ADMINISTRADOR DO SISTEMA em 08/08/2021 as 16:40</b></h6>
                <Button type="danger" htmlType="submit" className="text-center w-20 mt-2">
                  <strong>Desativar</strong>
                </Button>



              </div>
            </div>

            <div className="col-sm">
              <div className={`card ${style.container}`}>
                <h6><b>Compartilhamento de prontuário</b></h6>
                <h6>Ativo</h6>
                <PoweroffOutlined />
                <h6 className="mt-2"><b>Desativado por ADMINISTRADOR DO SISTEMA em 08/08/2021 as 16:40</b></h6>
                <Button type="primary" htmlType="submit" className="text-center w-20 mt-2">
                  <strong>Ativar</strong>
                </Button>



              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Compartilharprontuario
