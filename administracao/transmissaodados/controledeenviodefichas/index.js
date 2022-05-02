import React, { useState } from 'react'
import { Card, Button, Select, Pagination, Modal } from 'antd'
import {  AlertOutlined, FilterOutlined, ShareAltOutlined, DatabaseOutlined, SearchOutlined } from '@ant-design/icons'




const Controledeenviodefichas = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  /* modal */
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
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

        <div className="jumbotron alert-primary">
          <h4>
            <AlertOutlined />
          </h4>
          <p>O sistema gera lotes com fichas automaticamente entre 00:00 e 06:00. Se deseja criar um novo lote com fichas, clique em Geral, após a geração do lote você poderá realizar o download do arquivo.
            No momento não é possível transmitir online, pois não há nodos de transmissão cadastrados.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <p>Envio Online</p>
            <Select className="w-50" /><FilterOutlined className="ml-2 mr-2" />
            <Button type="primary" htmlType="submit" className="text-center w-20">
              <strong>Pesquisar</strong>
            </Button>
          </div>
        </div>
        <Card title="Controle de envio de fichas" className="mt-2" onClick={showModal}>
          <div className="container">
            <div className="row">

              <div className="col-sm-2">

                <h6>Lote</h6>




              </div>
              <div className="col-sm-2">

                <h6>Data de criação</h6>


              </div>
              <div className="col-sm-2">

                <h6>Data de envio</h6>


              </div>
              <div className="col-sm-2">

                <h6>Fichas</h6>


              </div>
              <div className="col-sm-2">

                <h6>Arquivo</h6>


              </div>

            </div>
          </div>
          <div className="container">
            <div className="row">

              <div className="col-sm-2">

                <h6>12</h6>




              </div>
              <div className="col-sm-2">

                <h6>17/09/2021 10:00 </h6>


              </div>
              <div className="col-sm-2">

                <h6>1</h6>


              </div>
              <div className="col-sm-2">

                <h6>Não</h6>


              </div>
              <div className="col-sm-2">

                <h6>Não</h6>


              </div>
              <div className="col-sm-2">

                <ShareAltOutlined />
                <DatabaseOutlined />
                <SearchOutlined />


              </div>


            </div>
          </div>
        </Card>
        <Pagination className="mb-3" />
        <div className="row">
          <Button htmlType="submit" className="text-center w-20 mr-2">
            <strong>Imprimir</strong>
          </Button>
          <Button htmlType="submit" className="text-center w-20">
            <strong>Gerar</strong>
          </Button>
          <Button type="danger" htmlType="submit" className="text-center w-20 ml-2">
            <strong>Voltar</strong>
          </Button>
        </div>
        { /* Modal vizualizar controle de fichas */}
        <Modal title="Vizualizar" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
          <h6>
            Informações gerais
          </h6>
          <Card>


            <div className="row">
              <p>
                Número do Lote: 13
              </p>

            </div>
            <div className="row mt-2">
              <p>
                Data de criação: 16/08/2021 14:40
              </p>
              <p>
                Número de fichas: 1
              </p>

            </div>

          </Card>
          <Card className="mt-2">

            <h6>
              Salvo em arquivo
            </h6>
            <div className="container">
              <div className="row">

                <div className="col-sm-2">

                  <h6>Data</h6>

                </div>
                <div className="col-sm-2">

                  <h6>Profissional</h6>


                </div>
                <div className="col-sm-2">

                  <h6>CBO</h6>

                </div>

              </div>
            </div>

          </Card>
          <Card className="mt-2">

            <h6>
              Envio Online
            </h6>
            <div className="container">
              <div className="row">

                <div className="col-sm-2">

                  <h6>Data</h6>

                </div>
                <div className="col-sm-2">

                  <h6>Nome do destino</h6>


                </div>
                <div className="col-sm-2">

                  <h6>Situação</h6>

                </div>
                <div className="col-sm-2">

                  <h6>Percentual de envio</h6>

                </div>

              </div>
            </div>

          </Card>
          <Button htmlType="submit" className="text-center w-20 mt-2">
            <strong>Voltar</strong>
          </Button>
          <Button type="primary" htmlType="submit" className="text-center w-20">
            <strong>Iniciar envio</strong>
          </Button>
        </Modal>

      
      </div>
    </div>

  )
}

/* objeto = {hugo, lu, rebeca
}
this.objeto.hugo.OncolorBlue */
export default Controledeenviodefichas
