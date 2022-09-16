import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Button,
  Form,
  Input,
  Switch,
} from 'antd';


const CreateQuestion = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [isCheckedTrue, setIsCheckedTrue]=useState(false)

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

 const onChange=(checked)=>{
    setIsCheckedTrue(checked)
    console.log('checked',checked)
 }





  const type = isCheckedTrue ? 'checkbox' : 'radio'

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >


      <Form.Item label="Имеет несколько значений" valuePropName="checked" >
        <Switch  onChange={onChange}/>
      </Form.Item>
      



      <Form.Item label="Вопрос">
        <Input />
        
      </Form.Item>
      <Form.Item label="Вариант ответа (1)">
        <Input type={type}/>
      </Form.Item>
      <Form.Item label="Вариант ответа (2)">
        <Input type={type}/>
      </Form.Item>
      <Form.Item label="Вариант ответа (3)">
        <Input type={type}/>
      </Form.Item>
      <Form.Item label="Вариант ответа (4)">
        <Input type={type}/>
      </Form.Item>
      
      
      <Form.Item >
        <Button>Создать вопрос</Button>
      </Form.Item>
    </Form>
  );
};




export default CreateQuestion;