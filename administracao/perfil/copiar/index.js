import React from 'react'
import { Card, Button, Input, Select} from 'antd'


const Copiar = () => {


  

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
          {/* perfil copiar */}
          <Card title="Perfil > Copiar">
            <div className="row">

              <div className="col-sm-4">


                <p>Nome*</p>



                <Input className="w-100 p-2" />

              </div>


              <div className="col-sm-4">
                <p>Tipo de perfil*</p>

                <Select className="ml-2 w-100" />
              </div>

            </div>




          </Card>
          <Button type="danger" htmlType="submit" className="text-center w-20 mt-2 mr-2">
            <strong>Voltar</strong>
          </Button>
          <Button type="primary" htmlType="submit" className="text-center w-20 mt-2">
            <strong>Salvar</strong>
          </Button>

        </div>
      </div>

    </div>
  )
}

export default Copiar

