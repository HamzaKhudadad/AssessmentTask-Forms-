import React, {useState} from 'react';


import {Row, Col, Typography, Input, Form, Button, 
Radio, Switch, Slider, Select, message, InputNumber } from 'antd';
import axios from 'axios';
import {useHistory} from 'react-router';


const {Title} = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Addresponse = () => {

  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (values) => {
    setLoading(true);
    axios.post("user/addresponse", 
      values
    )
    .then(res => {
      setLoading(false);
      
      message.info(res.data.msg);
      history.push('/home');
    })
    .catch(error => {
      setLoading(false);
      message.error(error);
    })
  }

  return (
    <div>
        <Row gutter={[40, 0]}>
          <Col span={23}>
            <Title style={{textAlign: 'center'}} level={2}>
            Please Fill the Form
            </Title>
            </Col>
        </Row>
        <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form {...layout} onFinish={handleSubmit}>
            <Form.Item name="no" label="Number"
            rules={[
              {
                required: true,
                message: 'Please input response number',
                type: 'number'
              }
            ]}
            >
               <InputNumber />
            </Form.Item>
            <Form.Item name="details" label="Details" 
            rules={[
              {
                required: true,
                message: 'Please input Details',
                
              }
            ]}
            >
              <Input placeholder="Please Enter Details" />
            </Form.Item>

            <Form.Item name="docno" label="Doc Number" 
            rules={[
              {
                required: true,
                message: 'Please enter Doc Number',
               
              }
            ]}
            >
              <Input placeholder="Please Enter Doc Number" />
            </Form.Item>

            <Form.Item name="debit" label="Debit" 
            rules={[
              {
                required: true,
                message: 'Please enter Debit Amount',
                type: 'number'
              }
            ]}
            >
               <InputNumber />
            </Form.Item>

            <Form.Item name="credit" label="Credit" 
            rules={[
              {
                required: true,
                message: 'Please enter Credit Amount',
                type: 'number'
              }
            ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item name="closingbalance" label="Closing Balance" 
            rules={[
              {
                required: true,
                message: 'Please enter Closing Balance',
                type: 'number'
              }
            ]}
            >
               <InputNumber />
            </Form.Item>

           
            <div style={{textAlign: "right"}}>
            <Button type="primary" loading={loading} htmlType="submit">
              Save
            </Button>{' '}
            <Button type="danger" htmlType="button" onClick={() => history.push('/home')}>
              Back
            </Button>
              </div>
          </Form>
          </Col>
        </Row>
    </div>
  );
}

export default Addresponse;
