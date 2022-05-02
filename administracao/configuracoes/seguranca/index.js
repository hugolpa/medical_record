import {React} from 'react'
import { Button, Input, Form, Select } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'
import style from '../style.module.scss'

const Seguranca = () => {
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
          <h4>SEGURANÇA</h4>
          <hr />      
          <div className="container">
            
            <div className="row">
              <div className="col-sm-12">
                
                <div className="jumbotron alert-primary"><p><h4><InfoCircleTwoTone  /></h4>Por questões de segurança, os profissionais devem redefinir a sua senha de acesso ao sistema após um determinado período e ter a sua sessão encerrada após um período de inatividade configurado. Para casos de comprometimento da segurança do banco de dados e / ou aplicação, é possível solicitar que todos os usuários alterem a sua senha de acesso no próximo login. </p></div>
                  
                
              </div>
              
            </div>
            
          </div>
          
          <hr />
          
          <div className={`card ${style.container}`}>
            <h5>Período da redefinição de senha*</h5>
            <div className="row">
              <div className="col-sm-4">
                <Form.Item name="" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  
                  <p>As senhas devem ser redefinidas a cada:*</p>
                </Form.Item>
              </div>
              <div className="col-sm-2">
                <Form.Item name="" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  
                  <Input placeholder="6 meses" />
                </Form.Item>
              </div>
              
            </div>
            <h5>Período máximo de inatividade*</h5>
            <div className="row">
              
              <div className="col-sm-5">
                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  
                  <p>O usuário deve ser deslogado após permanecer inativo por:</p>
                </Form.Item>
              </div>
              <div className="col-sm-2">
                <Form.Item name="" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  
                  <Input placeholder="1 hora" />
                </Form.Item>
              </div>
              
            </div>
            <h5>Máximo de tentativas consecutivas de login com autenticação inválida*</h5>
            <div className="row">
              
              <div className="col-sm-6">
                <Form.Item name="" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  
                  <p>O Sistema deve bloquear o acesso ao usuário após o número máximo de:</p>
                </Form.Item>
              </div>
              <div className="col-sm-2">
                <Form.Item name="" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  
                  <Select placeholder="10 tentativas" />
                </Form.Item>
              </div>
              
            </div>
            <h5>Solicitação para redefinção de senha*</h5>
            <div className="row">
              
              <div className="col-sm-5">
                <Form.Item name="" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  
                  <p>Solicitar que todos os usuários do sistema redefinam suas senhas no próximo acesso.</p>
                </Form.Item>
              </div>
              <div className="col-sm-2">
                <Form.Item name="" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  
                  <Button type="primary" htmlType="submit" className="text-center w-20">
                    <strong>Solicitar redefinição</strong>
                  </Button>
                </Form.Item>
              </div>
              
            </div>
            
          </div>
          
          
        </div>  


      </div>
      <Button type="danger" htmlType="submit" className="text-center w-20">
        <strong>Cancelar</strong>
      </Button>
      <Button type="primary" htmlType="submit" className="text-center w-20">
        <strong>Salvar</strong>
      </Button>
    </div>
  )
}

export default Seguranca
