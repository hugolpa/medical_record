import React, { useState } from 'react'
import { Input, Button, Card, Form, Modal, Select, Pagination, Checkbox, List, Typography, Avatar } from 'antd'
import { FilterOutlined, HomeOutlined, UserOutlined, LockOutlined, MenuOutlined, SearchOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons'

const dados = [
  {
    title: 'Alexandre Fulano',
  },

];
const dados2 = [
  {
    title: 'Unidade Basica de Saude Agronomica',
  },

];


const data = [
  'Médico',
  'Escuta inicial',

];


const Profissional = () => {
  // modal
  const [isModalVisible, setIsModalVisible] = useState(false);



  const showModal = () => {
    setIsModalVisible(true);
  };

  const showModal3 = () => {
    setIsModalVisible(true);
  };

  const showModal2 = () => {
    setIsModalVisible(true);
  };


  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleOk2 = () => {
    setIsModalVisible(false);
  };


  const handleOk3 = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCancel2 = () => {
    setIsModalVisible(false);
  };

  const handleCancel3 = () => {
    setIsModalVisible(false);
  };

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
            <div className="row">
              Teste
              <div className="col-sm-4">
                <div className="row">
                  <Form.Item>
                    <div className="p-2"><p>Nome:</p>
                    </div>
                  </Form.Item>
                  <Form.Item>

                    <Input className="w-100 p-2" />
                  </Form.Item>
                </div>
              </div>
              <div className="col-sm-2">
                <Form.Item>
                  <FilterOutlined className="p-2" />
                  <Button type="primary" htmlType="submit" className="text-center w-20">
                    <strong>Pesquisar</strong>
                  </Button>
                </Form.Item>
              </div>

            </div>
          </Card>
          <Card>
            <div className="container">
              <div className="row">

                <div className="col-sm-2">

                  <h6>Nome do profissional</h6>




                </div>
                <div className="col-sm-2">

                  <h6>CNS</h6>


                </div>
                <div className="col-sm-2">

                  <h6>CPF</h6>


                </div>




              </div>
            </div>
            <div className="container">
              <div className="row">

                <div className="col-sm-2">

                  <p>Alberto Castro</p>



                </div>
                <div className="col-sm-2">

                  <p>645637</p>


                </div>
                <div className="col-sm-2">

                  <p>613343551-87</p>


                </div>
                <div className="col-sm-2">


                  {/* Botão que chama o segundo modal lotacão do profissional */}
                  <p><HomeOutlined className="mr-2" onClick={showModal2} /> <LockOutlined className="mr-2" /> <UserOutlined className="mr-2" /> <MenuOutlined /></p>

                </div>

              </div>

            </div>
            <div className="row mt-3">
              <Pagination />
              {/* botão que chama o primeiro modal Adicionar profissional */}
              <Button type="primary" onClick={showModal} htmlType="submit" className="text-center w-20 ml-2">
                <strong>Adicionar</strong>
              </Button>
            </div>

          </Card>

          <Button type="danger" htmlType="submit" className="text-center w-20 mt-2">
            <strong>Voltar</strong>
          </Button>

          <div className="row">
            <div className="col-sm">
              {/* Profissionais/ lotações/Configurar agenda */}
              <List
                itemLayout="horizontal"
                dataSource={dados}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Cirurgião Dentista Clínico Geral"
                    />
                  </List.Item>
                )}
              />
            </div>
            <div className="col-sm">
              {/* Profissionais/ lotações/Configurar agenda */}
              <List
                itemLayout="horizontal"
                dataSource={dados2}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="data:image/png;base64,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" />}
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="2023824373 - Esb- asa sul"
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
          <hr />
          <Button type="primary" htmlType="submit" className="text-center w-20 ml-2">
            <strong>Horário Padrão</strong>
          </Button>
          <Button type="primary" htmlType="submit" className="text-center w-20 ml-2">
            <strong>Limpar Campos</strong>
          </Button>
          <Button type="secundary" htmlType="submit" className="text-center w-20 ml-2">
            <strong>Excluir Agenda</strong>
          </Button>
          <h4 className="mt-4">Domingo</h4>
          <hr />
          <h6>Unidades de saúde não realiza atendimentos neste dia </h6>
          <h4 className="mt-4">Segunda</h4>
          <hr />
          <div className="row">
            <Card>
              <h6>1° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm mr-2">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

            <Card>
              <h6>2° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>3° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>4° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

          </div>
          <h4 className=" mt-4">Terça</h4>
          <hr />
          <div className="row">
            <Card>
              <h6>1° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

            <Card>
              <h6>2° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>3° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>4° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

          </div>

          <h4 className=" mt-4">Quarta</h4>
          <hr />
          <div className="row">
            <Card>
              <h6>1° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

            <Card>
              <h6>2° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>3° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>4° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

          </div>

          <h4 className=" mt-4">Quinta</h4>
          <hr />
          <div className="row">
            <Card>
              <h6>1° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

            <Card>
              <h6>2° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>3° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>4° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

          </div>

          <h4 className=" mt-4">Sexta</h4>
          <hr />
          <div className="row">
            <Card>
              <h6>1° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

            <Card>
              <h6>2° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>3° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>4° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

          </div>

          <h4 className=" mt-4">Sábado</h4>
          <hr />
          <div className="row">
            <Card>
              <h6>1° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

            <Card>
              <h6>2° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>3° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>
            <Card>
              <h6>4° periodo</h6>
              <div className="col-sm">

                <Form.Item name="horainicial" rules={[{ required: true, message: 'Por favor insira horário inicial' }]}>
                  <div><h6><b>Hora inicial:*</b></h6></div>
                  <Input type='time' placeholder="Hora Inicial" />
                </Form.Item>

              </div>
              <div className="col-sm">
                <Form.Item name="horafinal" rules={[{ required: true, message: 'Por favor insira horário Final' }]}>
                  <div><h6><b>Hora final:*</b></h6></div>
                  <Input type='time' placeholder="Hora Final" />
                </Form.Item>
              </div>
            </Card>

          </div>

        </div>
      </div>
      {/* Modal 1  Adicionar profissional */}
      <Modal title="Adicionar profissional / usuário de sistema" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>

        <Card title="Dados pessoais">

          <div className="row">
            <div className="col-sm">
              <p>
                Nome*
              </p>
              <Input />
              <p>
                CNS
              </p>
              <Input />
              <p>
                Conselho de classe
              </p>
              <Input />
              <p>
                Email
              </p>
              <Input />
            </div>

            <div className="col-sm">
              <p>
                CPF*
              </p>
              <Input />
              <p>
                Estado emissor
              </p>
              <Input />
              <p>
                Registro no conselho de classe
              </p>
              <Input />
              <p>
                Data de nascimento
              </p>
              <Input />
              <p>
                Sexo
              </p>
              <Select className="w-25" />
              <p>
                Telefone
              </p>
              <Input />

            </div>

          </div>
        </Card>

        <Card title="Endereço residencial" className="mt-2">

          <div className="row">
            <div className="col-sm">
              <p>
                CEP
              </p>
              <Input />

              <p className="ml-2 mr-2">
                Município
              </p>

              <Select className="w-25" />
              <p className="ml-2 mr-2">
                Tipo de logradouro
              </p>
              <Select className="w-25" />
              <p className="ml-2 mr-2">
                Número
              </p>
              <Input />
              <p className="ml-2 mr-2">
                Sem número
              </p>
              <Checkbox />

              <p>
                Ponto de referência
              </p>
              <Input />

            </div>
            <div className="col-sm">
              <p>
                Estado
              </p>
              <Select className="w-25" />
              <p>
                Bairro
              </p>
              <Select className="w-25" /> <SearchOutlined className="ml-2" />
              <p>
                Logradouro
              </p>
              <Select className="w-25" /> <SearchOutlined className="ml-2" />
              <p>
                Complemento
              </p>
              <Select className="w-25" />
            </div>

          </div>
        </Card>


      </Modal>
      {/* Modal 2 Lotação do profissional */}
      <Modal title="Lotação do profissional" visible={isModalVisible} onOk={handleOk2} onCancel={handleCancel2} width={1000}>

        <Card>
          <div className="row">

            <div className="col-sm-4">
              <div className="row">
                <Form.Item>
                  <div className="p-2">Unidade de Saúde:
                  </div>
                </Form.Item>
                <Form.Item>

                  <Input className="w-100 p-2" />
                </Form.Item>
              </div>
            </div>
            <div className="col-sm-2">
              <Form.Item>
                <FilterOutlined className="p-2" />
                <Button type="primary" htmlType="submit" className="text-center w-20">
                  <strong>Pesquisar</strong>
                </Button>
              </Form.Item>
            </div>

          </div>
        </Card>
        <Card>
          <div className="container">
            <div className="row">

              <div className="col-sm-2">

                <h6>Unidade de saúde</h6>




              </div>
              <div className="col-sm-2">

                <h6>CBO</h6>


              </div>
              <div className="col-sm-2">

                <h6>Perfis</h6>


              </div>
              <div className="col-sm-2">

                <h6>Ativo</h6>


              </div>

            </div>
          </div>
          <div className="container">
            <div className="row">

              <div className="col-sm-2">

                <p>SECRETARIA MUNICIPAL DE SAÚDE</p>

              </div>
              <div className="col-sm-2">

                <p>AGENTE COMUNITÁRIO DE SAÚDE</p>
              </div>
              <div className="col-sm-2">

                <p>DIGITADOR</p>
              </div>
              <div className="col-sm-2">



                <h6>Sim <SearchOutlined className="mr-2 ml-2" /> <EditOutlined className="mr-2" /> <CloseOutlined className="mr-2 mf-2" /> </h6>





              </div>





            </div>

          </div>
          <div className="row mt-3">
            <Pagination />
            <Button type="primary" onClick={showModal3} htmlType="submit" className="text-center w-20 ml-2">
              <strong>Adicionar</strong>
            </Button>
          </div>

        </Card>

      </Modal>

      {/* Modal 3 Adicionar lotação do profissional */}
      <Modal title="Adicionar lotação do profissional" visible={isModalVisible} onOk={handleOk3} onCancel={handleCancel3} width={1000}>

        <Card title="Geral">

          <div className="row">
            <div className="col-sm">
              <p>
                Unidade de saúde *
              </p>
              <Select className="w-25" />
              <p>
                CBO*
              </p>
              <Select className="w-25" />
              <p>
                Ativo
              </p>
              <Checkbox />
              <p>
                INE
              </p>
              <Select className="w-25" />

            </div>
          </div>
        </Card>
        <Card title="Perfis" className="mt-2">
          <div className="col-sm">
            <p>
              Tipo de perfil*
            </p>
            <Select className="w-25" />



            <p>
              Perfil*
            </p>
            <Select className="w-25" />

            <List
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Typography.Text>-</Typography.Text> {item} <CloseOutlined className="mr-2 mf-2" />
                </List.Item>
              )}
            />


          </div>


        </Card>
      </Modal>



    </div>
  )
}


export default Profissional
