import React from 'react'
import { WifiOutlined, PoweroffOutlined } from '@ant-design/icons'
import style from '../style.module.scss'



const Cadsus = () => {


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

          <h6><b>Sua instalação está</b></h6>

          <div className="row">


            <div className="col-sm">
              <div className={`card ${style.container}`}>
                <h6>Conexão com CADSUS está HABILITADA</h6>
                <WifiOutlined />



              </div>
            </div>

            <div className="col-sm">
              <div className={`card ${style.container}`}>
                <h6>Conexão com CADSUS está DESABILITADA</h6>
                <PoweroffOutlined />

              </div>


            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Cadsus
