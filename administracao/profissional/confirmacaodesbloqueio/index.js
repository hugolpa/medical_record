import React from 'react'
import { Button, Card } from 'antd'
import { InfoCircleFilled } from '@ant-design/icons'



const Confirmacaodesbloqueio = () => {

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

          <Card title="Confirmação">
            <h2> <InfoCircleFilled /></h2><p>Deseja desbloquear e redefinir a senha do profissional Thiago Silva para 709783654/esus?</p>
            <div className="row">


              <Button type="primary" htmlType="submit" className="text-center w-20 mr-2"><strong>Sim</strong></Button>
              <Button type="danger" htmlType="submit" className="text-center w-20"><strong>Não</strong></Button>
            </div>
          </Card>

        </div>
      </div>
    </div>
  )
}


export default Confirmacaodesbloqueio
