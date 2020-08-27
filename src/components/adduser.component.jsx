import React, {useState} from 'react';


import {Row, Col, Typography, Input, Form, Button, 
Radio, message, } from 'antd';
import axios from 'axios';
import {useHistory} from 'react-router';


const {Title} = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Adduser = () => {

  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (values) => {
    setLoading(true);
    axios.post("admin/adduser", 
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
           Add user
            </Title>
            </Col>
        </Row>
        <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form {...layout} onFinish={handleSubmit}>
            <Form.Item name="username" label="Username"
            rules={[
              {
                required: true,
                message: 'Please input username',
                
              }
            ]}
            >
               <Input placeholder="Please Enter username " />
            </Form.Item>
            <Form.Item name="fullname" label="Fullname" 
            rules={[
              {
                required: true,
                message: 'Please input Fullname',
                
              }
            ]}
            >
              <Input placeholder="Please Enter Fullname" />
            </Form.Item>

            <Form.Item name="email" label="Email" 
            rules={[
              {
                required: true,
                message: 'Please enter Email',
               
              }
            ]}
            >
              <Input placeholder="Please Enter Email" />
            </Form.Item>

            <Form.Item name="password" label="Password" 
            rules={[
              {
                required: true,
                message: 'Please enter password',
                
              }
            ]}
            >
              <Input placeholder="Please Enter password" />
            </Form.Item>

            <Form.Item name="type" label="Type" 
            rules={[
              {
                required: true,
                message: 'Please select Type',
              }
            ]}
            >
              <Radio.Group>
                <Radio value="user">User</Radio>
                <Radio value="admin">Admin</Radio>
                
              </Radio.Group>
            </Form.Item>

           

           
            <div style={{textAlign: "right"}}>
            <Button type="primary" loading={loading} htmlType="submit">
              Save
            </Button>{' '}
            <Button type="danger" htmlType="button" onClick={() => history.push('/responselist')}>
              Back
            </Button>
              </div>
          </Form>
          </Col>
        </Row>
    </div>
  );
}

export default Adduser;
