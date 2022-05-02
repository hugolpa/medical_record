import React from 'react'
import { Card, List, Select, Typography } from 'antd'
import { CloseOutlined } from '@ant-design/icons'



const Perfildeacessoprofissional = () => {
  const data = [
    'Médico',
    'Escuta inicial',

  ];
    // tipo de perfil
    const { Option } = Select;
    function handleChange(value) {
      console.log(`selected ${value}`);
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
        <div style={{ maxWidth: '1000px', margin: '0px auto', fontSize: '14px' }}>

          <Card title="Perfis" className="mt-2">
            <div className="col-sm">
              <p>
                Tipo de perfil*
              </p>
              <Select defaultValue="lucy" style={{ width: 220 }} allowClear>
                <Option value="lucy">Administrador</Option>
              </Select>



              <p>
                Perfil*
              </p>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="selecione"
                defaultValue={['Médico']}
                onChange={handleChange}
                optionLabelProp="label"
              >
                <Option value="Médico" label="Médico">
                  <div className="demo-option-label-item">

                    Médico
                  </div>
                </Option>
                <Option value="Escuta inicial" label="Escuta inicial">
                  <div className="demo-option-label-item">

                    Escuta inicial
                  </div>
                </Option>

              </Select>

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
        </div>
      </div>
    </div>
  )
}


export default Perfildeacessoprofissional
