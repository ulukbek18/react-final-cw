import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Modal, Result } from 'antd';
import './QuestionList.css'

import 'antd/dist/antd.css';

import { Col, Row, Statistic } from 'antd';

const { Countdown } = Statistic;




export const QuestionList = () => {
    const deadline = Date.now() + 1000 * 30; // Moment is also OK
    const questions = useSelector(store => store.questions)
    const username = useSelector((store) => store.username)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [values, setValues] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [timeOut, setTimeOut] = useState(null);
    

    const newUserName = Object.values(username)
    

    const onTimerFinish = () => {
        console.log('finished!');
        showModal()
        setTimeOut(true)
    };


    const calculateResults = () => {

        let correct = 0;
        Object.values(values).forEach((value) => {
            if (value === 'true') {
                console.log(value)
                correct++
            }
        })
        setCorrectAnswers(correct)
        console.log(correct)
    }
    
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Derived Results: ", values);
    };


    const showModal = () => {
        setIsModalOpen(true);
        calculateResults()
        setTimeOut(false)

    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    console.log('questions', questions)
    const title = timeOut? 'Ваше время истекло' : 'Результат'
    console.log('render')
    return (
        <div>
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Countdown title="Время до завершения теста" value={deadline} onFinish={onTimerFinish} />
                    </Col>
                </Row>
            </div>
            <span >Ответов на вопрос может быть больше чем один</span>
            <div>
                <form onSubmit={handleSubmit} >
                    {questions.map(question => {
                        return question.multiple ?

                            <div key={question.id}>
                                <h2>{question.question}</h2>
                                <div className='input-wrapper'>
                                    <input onChange={handleChange} type="checkbox" id={question.id} name={question.id} value={question.answers[0].correct}></input>
                                    <label htmlFor="html"><b>Option 1:</b>   {question.answers[0].answer}</label>

                                    <input onChange={handleChange} type="checkbox" id={question.id} name={question.id} value={question.answers[1].correct} />
                                    <label htmlFor="css"><b>Option 2:</b>   {question.answers[1].answer}</label>

                                    <input onChange={handleChange} type="checkbox" id={question.id} name={question.id} value={question.answers[2].correct} />
                                    <label htmlFor="javascript"><b>Option 3:</b>   {question.answers[2].answer}</label>

                                    <input onChange={handleChange} type="checkbox" id={question.id} name={question.id} value={question.answers[3].correct} />
                                    <label htmlFor="javascript"><b>Option 4:</b>   {question.answers[3].answer}</label>
                                </div>
                            </div>
                            :
                            <div key={question.id}>
                                <h2>{question.question}</h2>
                                <div className='input-wrapper'>
                                    <input onChange={handleChange} type="radio" id={question.id} name={question.id} value={question.answers[0].correct}></input>
                                    <label htmlFor="html"><b>Option 1:</b>   {question.answers[0].answer}</label>

                                    <input onChange={handleChange} type="radio" id={question.id} name={question.id} value={question.answers[1].correct} />
                                    <label htmlFor="css"><b>Option 2:</b>   {question.answers[1].answer}</label>

                                    <input onChange={handleChange} type="radio" id={question.id} name={question.id} value={question.answers[2].correct} />
                                    <label htmlFor="javascript"><b>Option 3:</b>   {question.answers[2].answer}</label>

                                    <input onChange={handleChange} type="radio" id={question.id} name={question.id} value={question.answers[3].correct} />
                                    <label htmlFor="javascript"><b>Option 4:</b>   {question.answers[3].answer}</label>
                                </div>
                            </div>
                    })}
                    <button className='button' type="submit" onClick={showModal}>Завершить тест</button>

                    <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>Уважаемый: <b>{newUserName}</b></p>
                        <p>Ваш результат:{correctAnswers} из {questions.length}</p>
                        <p>Успешность теста:{Math.floor((correctAnswers / questions.length) * 100)}%</p>
                    </Modal>
                </form>
            </div>

        </div >
    )
}
