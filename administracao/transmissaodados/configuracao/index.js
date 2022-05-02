import React from 'react'
import { Input, Button, Card, Form, Checkbox } from 'antd'



const Configuracao = () => {

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
          <Card title="Configurações">

            <div className="row">

              <div className="col-sm-4">
                <div className="row">
                  <Form.Item>
                    <div className="p-2">
                      Nome do destino:
                    </div>
                  </Form.Item>
                  <Form.Item>

                    <Input className="w-100 p-2" />
                  </Form.Item>
                  <Form.Item>
                    <div className="p-2">
                      Link para envio:
                    </div>
                  </Form.Item>
                  <Form.Item>

                    <Input className="w-100 p-2" />
                  </Form.Item>

                </div>
                <div className="row">
                  <Form.Item>
                    <div className="p-2">
                      Ativo:
                    </div>
                    <Checkbox className="w-100 p-2" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Card>
          <Button type="primary" htmlType="submit" className="text-center w-20 mt-2">
            <strong>Confirmar</strong>
          </Button>

        </div>
      </div>
    </div>

  )
}

export default Configuracao
