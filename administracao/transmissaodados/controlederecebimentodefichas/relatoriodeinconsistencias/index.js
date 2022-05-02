import React from 'react'
import { Card, Button, Space, Input, DatePicker } from 'antd'





const Relatoriodeinconsistencias = () => {

/* date pickerr */
const { RangePicker } = DatePicker;
/* modal  */
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

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

        <Card title="Relatório consolidado de inconsistências por lote">
          <div className="container">
            <div className="row">

              <div className="col-sm">
                <div>Período de recebimento:</div>
                <Space direction="vertical" size={12}>

                  <RangePicker
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    onChange={onChange}
                    onOk={onOk}
                  />
                </Space>
                <div>Nome do responsável:</div>
                <div><Input className="w-50" /></div>
                <div>Tipo de recebimento:</div>
                <div><Input className="w-50" /></div>
              </div>

            </div>

          </div>
          <div>Total de lotes com fichas inconsistentes: 0</div>
        </Card>
        <Button type="danger" htmlType="submit" className="text-center w-20 ml-2 mt-2">
          <strong>Voltar</strong>
        </Button>
        <Button htmlType="submit" className="text-center w-20 ml-2">
          <strong>Imprimir</strong>
        </Button>


      </div>
    </div>

  )
}


export default Relatoriodeinconsistencias
