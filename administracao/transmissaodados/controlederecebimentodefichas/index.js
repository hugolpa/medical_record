import React from 'react'
import { Card, Button } from 'antd'
import { SettingOutlined, FormOutlined } from '@ant-design/icons'




const Controlederecebimentodefichas = () => {

   

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
                    <h6>Recebimento por lote  </h6> <h4><SettingOutlined /></h4>
                  </Card>
                </div>
                <div className="col-sm-3">
                  <Card>
                    <h6>Recebimento por CNES  </h6> <h4><FormOutlined /></h4>
                  </Card>
                </div>
                <div className="col-sm-3">
                  <Card>
                    <h6>Relatório de inconsistências  </h6><h4><FormOutlined /></h4>
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


export default Controlederecebimentodefichas
