import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Switch, } from 'antd';


const CreateQuestion = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [isCheckedTrue, setIsCheckedTrue] = useState(false)
    const [answers, setAnswers] = useState(initStateAnswers)
    const initStateAnswers = [
        {
            id: 1,
            question: "",
            multiple: false,
            answers: [
                {
                    answer: "",
                    correct: false
                },

                {
                    answer: "",
                    correct: false
                },
                {
                    answer: "",
                    correct: false
                },
                {
                    answer: "",
                    correct: false
                },
            ]
        }
    ]

    const handleAnswersInput = (e, index) => {
        const { value } = e.target
        const newAnswers = [...answers]
        newAnswers.question = value
        
        setAnswers(newAnswers)
      }

      const handleAnswersCheckbox = (e, index) => {
        const {checked} = e.target
        const newAnswers = [...answers]
        newAnswers.answers[0].correct = checked
        
        setAnswers(newAnswers)
      }
      console.log('answers',answers)


    const onChange = (checked) => {
        setIsCheckedTrue(checked)
        console.log('checked', checked)
    }

    const type = isCheckedTrue ? 'checkbox' : 'radio'

    return (
        <div>

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
                // onValuesChange={onFormLayoutChange}
                size={componentSize}
            >


                <Form.Item label="Имеет несколько значений" valuePropName="checked" >
                    <Switch onChange={onChange} />
                </Form.Item>




                <Form.Item label="Вопрос">
                    <Input />

                </Form.Item>
                <div className='question-input'>
                    <Form.Item label="Вариант ответа (1)">
                        <Input type='text' 
                        onChange={(e) => handleAnswersInput(e)}/>
                        <Input type={type}
                            name='answer'
                            id={1}  
                            onChange={(e) => handleAnswersCheckbox(e)}/>
                    </Form.Item>

                </div>
                <Form.Item label="Вариант ответа (2)">
                    <Input type='text' />
                    <Input type={type}
                        name='answer'
                        id={2} />
                </Form.Item>
                <Form.Item label="Вариант ответа (3)">
                    <Input type='text' />
                    <Input type={type}
                        name='answer' />
                </Form.Item>
                <Form.Item label="Вариант ответа (4)">
                    <Input type='text' />
                    <Input type={type}
                        name='answer'
                        id={3} />
                </Form.Item>

                <Form.Item >
                    <Button>Создать вопрос</Button>
                </Form.Item>
            </Form>
            <div>
                <button> Начать Тест</button>
            </div>
        </div>


    );
};




export default CreateQuestion;