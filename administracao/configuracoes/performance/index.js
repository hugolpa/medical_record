import React from 'react'
import { WifiOutlined } from '@ant-design/icons'
import { Checkbox, Button, Input } from 'antd'
import style from '../style.module.scss'


const Performance = () => {
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


            <div className="col-sm-4">
              <div className={`card ${style.container}`}>

                <h6><b>REQUISIÇÕES SIMULTÂNEAS</b></h6>
                <WifiOutlined />
                <h6 className="mt-2">N ° requisições</h6>
                <Input />
                <div className="row">

                  <Checkbox className="mt-2 mr-2 ml-3" />
                  <h6 className="mt-2">Usar valor padrão</h6>

                </div>
                

                <hr />
                <Button type="primary" htmlType="submit" className="text-center w-20">
                  <strong>Salvar</strong>
                </Button>




              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Performance

