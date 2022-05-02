import React from 'react'

import { Card, Select, DatePicker, Space, Input, Checkbox } from 'antd'
import moment from 'moment';



const Editar = () => {



  const dateFormat = 'YYYY/MM/DD';





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

          
          <Card title="Editar Lote de imunobiológico">


            <div className="row">

              <div className="col-sm">
                <p>
                  Imunobiológico
                </p>
                <Select placeholder="HB - Hepatite B" className="w-100" />

              </div>
              <div className="col-sm">
                <p>
                  Lote*
                </p>
                <Input placeholder="Teste" />

              </div>
              <div className="col-sm">
                <p>
                  Lote*
                </p>
                <Input placeholder="teste" />

              </div>
              <div className="col-sm">
                <p>
                  Data de validade*
                </p>
                <Space direction="vertical" size={12}>
                  <DatePicker placeholder="25/07/2021" defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />

                </Space>

              </div>
              <div className="col-sm">
                <p>
                  Ativo
                </p>
                <Checkbox />

              </div>

            </div>


          </Card>

        </div>
      </div>
    </div>
  )
}

export default Editar
