import React from 'react'
import { Card, Button } from 'antd'
import { SettingOutlined, FormOutlined } from '@ant-design/icons'




const Transmissaodados = () => {


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
              <div className="row">
                <div className="col-sm-3">
                  <Card>
                    <h6>Configurações  </h6> <h4><SettingOutlined /></h4>
                  </Card>
                </div>
                <div className="col-sm-3">
                  <Card>
                    <h6>Controle de envio de fichas  </h6> <h4><FormOutlined /></h4>
                  </Card>
                </div>
                <div className="col-sm-3">
                  <Card>
                    <h6>Controle de recebimento de fichas  </h6><h4><FormOutlined /></h4>
                  </Card>
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

/* objeto = {hugo, lu, rebeca
}
this.objeto.hugo.OncolorBlue */
export default Transmissaodados
