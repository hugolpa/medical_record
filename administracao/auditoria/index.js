import React from 'react'
import { Card, Input, Button, Space, DatePicker, Select } from 'antd'


/* date pickerr */
const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}
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


          <Card>
            <h4>Trilha de auditoria</h4>
            <hr />
            <div className="row">

              <div className="col-sm">

                <h6>
                  Período*:
                </h6>
                <Space direction="vertical" size={12}>

                  <RangePicker
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    onChange={onChange}
                    onOk={onOk}
                  />
                </Space>
                <p>
                  Tipo de evento:
                </p>
                <p>
                  <Select className="w-25" />
                </p>
                <p>
                  Tipo de registro afetado
                </p>
                <p>
                  <Select className="w-25" />
                </p>
                <p>
                  Identificador do registro afetado
                </p>

                <p>
                  <Input className="w-25" />
                </p>
                <p>
                  Componente gerador
                </p>

                <p>
                  <Input className="w-25" />
                </p>
                <p>
                  Usuário gerador
                </p>

                <p>
                  <Input className="w-25" />
                </p>

              </div>



            </div>
          </Card>
          <Button type="danger" htmlType="submit" className="text-center w-20 mt-2">
            <strong>voltar</strong>
          </Button>
          <Button type="primary" htmlType="submit" className="text-center w-20 mt-2 ml-2">
            <strong>Exportar CSV</strong>
          </Button>
          <Button type="primary" htmlType="submit" className="text-center w-20 mt-2 ml-2">
            <strong>Imprimir</strong>
          </Button>


          

        </div>
      </div>
    </div>
  )
}

export default Agendaonline
