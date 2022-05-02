import { React } from 'react'
import { Button, Input, Form } from 'antd'
import style from '../style.module.scss'





const Horario = () => {
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
        <div style={{ maxWidth: '1200px', margin: '0px auto', fontSize: '14px' }}>
          <h4>HORÁRIO DE FUNCIONAMENTO DAS UNIDADES DE SAÚDE</h4>
          <hr />
          <div className={`card ${style.container}`}>

            <div className="row">
              <div className=" card col-sm-2 mr-2">
                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>
              </div>
              <div className=" card col-sm-2">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </div>
            <div>

              <h6><b>Dias da semana em que são realizados atendimentos *</b></h6>


              <div className={`card ${style.container}`}>
                <div className="row">
                  <div className="col-sm">

                    <Input type='checkbox' />
                  </div>
                  <div className="col-sm">
                    <h6>Domingo</h6>
                  </div>
                  <div className="col-sm">
                    <Input type='checkbox' />
                  </div>
                  <div className="col-sm">
                    <h6>Segunda-feira</h6>
                  </div>
                  <div className="col-sm">
                    <Input type='checkbox' />
                  </div>
                  <div className="col-sm">
                    <h6>Terça-feira</h6>
                  </div>
                  <div className="col-sm">
                    <Input type='checkbox' />
                  </div>
                  <div className="col-sm">
                    <h6>Quarta-feira</h6>
                  </div>
                  <div className="col-sm">
                    <Input type='checkbox' />
                  </div>
                  <div className="col-sm">
                    <h6>Quinta-feira</h6>
                  </div>
                  <div className="col-sm">
                    <Input type='checkbox' />
                  </div>
                  <div className="col-sm">
                    <h6>Sexta-feira</h6>
                  </div>
                  <div className="col-sm">
                    <Input type='checkbox' />
                  </div>
                  <div className="col-sm">
                    <h6>Sábado</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4>HORÁRIO PADRÃO DA AGENDA DO PROFISSIONAL</h4>
          <hr />
          <div className={`card ${style.container}`}>
            <div className="row">

              <div className="col-sm">
                <div><h6><b>1° Período:*</b></h6></div>
                <div className={`card ${style.container}`}>
                  <div className="col-sm">
                    <div><h6><b>Hora inicial:*</b></h6></div>
                    <Input />
                  </div>
                  <div className="col-sm mt-2">
                    <div><h6><b>Hora final:*</b></h6></div>
                    <Input type='time' />
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div><h6><b>2° Período:*</b></h6></div>
                <div className={`card ${style.container}`}>
                  <div className="col-sm">
                    <div><h6><b>Hora inicial:*</b></h6></div>
                    <Input type='time' />
                  </div>
                  <div className="col-sm mt-2">
                    <div><h6><b>Hora final:*</b></h6></div>
                    <Input type='time' />
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div><h6><b>3° Período:*</b></h6></div>
                <div className={`card ${style.container}`}>
                  <div className="col-sm">
                    <div><h6><b>Hora inicial:*</b></h6></div>
                    <Input type='time' />
                  </div>
                  <div className="col-sm mt-2">
                    <div><h6><b>Hora final:*</b></h6></div>
                    <Input type='time' />
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div><h6><b>4° Período:*</b></h6></div>
                <div className={`card ${style.container}`}>
                  <div className="col-sm">
                    <div><h6><b>Hora inicial:*</b></h6></div>
                    <Input type='time' />
                  </div>
                  <div className="col-sm mt-2">
                    <div><h6><b>Hora final:*</b></h6></div>
                    <Input type='time' />
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className={`card ${style.container}`}>
            <div className="row">
              <div className=" col-sm-3">
                <div><h6><b>Tempo padrão de duração para atendimentos *</b></h6></div>
                <div className={`card ${style.container}`}>
                  <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                    <div>Duração da consulta min:*</div>
                    <Input placeholder="20" />
                  </Form.Item>
                </div>

              </div>
              <h6><b>Nota: Caso o tempo de duração da consulta for para algumas CBOs for diferente do tempo padrão, o mesmo deve ser informado no módulo CBO</b></h6>

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

export default Horario