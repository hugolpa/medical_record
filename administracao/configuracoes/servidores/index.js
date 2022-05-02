import React from 'react'
import { Form, Input, Button } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import style from '../style.module.scss'

const Servidores = () => {
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
          <h4>Servidor da minha instalação E-SUS AB PEC</h4>
          <hr />
          <div className={`card ${style.container}`}>
            <h6><b>INFORMAÇÕES DO SERVIDOR</b></h6>
            <div className="row">
              
              <div className="col-sm-4">
                
                <h6>Link da minha instalação*</h6>
                <Form.Item name="linkminhainstalacao" rules={[{ required: true, message: 'Por favor insira link da instalação' }]}>
                  <Input placeholder="" />
                </Form.Item>
                
                  
                
              </div>
              <div className="col-sm-4">
                
                <h6>Porta*</h6>
                <Form.Item name="porta" rules={[{ required: true, message: 'Por favor insira valor da porta' }]}>
                  <Input placeholder="Porta" />
                </Form.Item>                  
                
              </div>
              <div className="col-sm-4">
                
                <h6>.</h6>
                <Button type="primary" htmlType="submit" className="text-center w-20">
                  <strong>Habilitar</strong>
                </Button>                  
                
              </div>
              
            </div>
            
          </div>
          <h4>SERVIDOR DE E-MAIL (SMTP)</h4>
          <hr />
          <div className="jumbotron alert-primary"><h6><h4><InfoCircleTwoTone /></h4>Por questões de segurança, os profissionais devem redefinir a sua senha de acesso ao sistema após um determinado período e ter a sua sessão encerrada após um período de inatividade configurado. Para casos de comprometimento da segurança do banco de dados e / ou aplicação, é possível solicitar que todos os usuários alterem a sua senha de acesso no próximo login. </h6></div>
          <div className={`card ${style.container}`}>
            <h6><b>INFORMAÇÕES DO SERVIDOR</b></h6>
            <div className="row">
              
              <div className="col-sm-4">
                
                <h6>Link do servidor de e-mail (SMTP)*</h6>
                <Form.Item name="linkdoservidor" rules={[{ required: true, message: 'Por favor insira link da instalação' }]}>
                  <Input placeholder="" />
                </Form.Item>
                
                  
                
              </div>
              <div className="col-sm-4">
                
                <h6>Porta*</h6>
                <Form.Item name="porta" rules={[{ required: true, message: 'Por favor insira valor da porta' }]}>
                  <Input placeholder="Porta" />
                </Form.Item>                  
                
              </div>
             
              
            </div>
            <h6><b>AUTENTICAÇÃO (INFORMAÇÕES DE LOGIN)</b></h6>
            <div className="row">
              
              <div className="col-sm-4">
                
                <h6>Login*</h6>
                <Form.Item name="linkminhainstalacao" rules={[{ required: true, message: 'Por favor insira link da instalação' }]}>
                  <Input placeholder="" />
                </Form.Item>
                <h6>Senha</h6>
                <Form.Item name="linkminhainstalacao" rules={[{ required: true, message: 'Por favor insira link da instalação' }]}>
                  <Input placeholder="" />
                </Form.Item>
                <h6>E-mail remetente*</h6>
                <Form.Item name="linkminhainstalacao" rules={[{ required: true, message: 'Por favor insira link da instalação' }]}>
                  <Input placeholder="" />
                </Form.Item>
                  
                
              </div>
              <div className="col-sm-4">
                
                <h6>Usar como e-mail remetente*</h6>
                <Form.Item name="porta" rules={[{ required: true, message: 'Por favor insira valor da porta' }]}>
                  <Checkbox placeholder="Porta" />
                </Form.Item>                  
                
              </div>
              
              
            </div>
            <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  
              <Button type="primary" htmlType="submit" className="text-center w-20">
                <strong>Habilitar</strong>
              </Button>
            </Form.Item>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servidores
