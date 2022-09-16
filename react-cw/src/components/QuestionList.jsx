import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Modal, Result } from 'antd';
import './QuestionList.css'

import 'antd/dist/antd.css';

import { Col, Row, Statistic } from 'antd';
import { QuestionItem } from './QuestionItem';
import { Timer } from './Timer';





export const QuestionList = () => {

    const deadline = Date.now() + 1000 * 30;
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
    const title = timeOut ? 'Ваше время истекло' : 'Результат'




    console.log('render')
    return (
        <div>

            <div className='wrapper-upper'>
                <span  >Ответов на вопрос может быть больше чем один</span>
            </div>








            <div>
                <Timer
                    onTimerFinish={onTimerFinish}
                    deadline={deadline}
                />
            </div>







            <div>
                <form onSubmit={handleSubmit} >
                    {questions.map(question => {
                        return (
                            <QuestionItem
                                question={question}
                                handleChange={handleChange}
                                isMultiple={question.multiple} />

                        )

                    })}
                    <button className='button' type="submit" onClick={showModal}>Завершить тест</button>

                    <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p><strong>Уважаемый: {newUserName}</strong></p>
                        <p><strong>Ваш результат:{correctAnswers} из {questions.length}</strong></p>
                        <p><strong>Успешность теста:{Math.floor((correctAnswers / questions.length) * 100)}%</strong></p>


                    </Modal>
                </form>
            </div>

        </div >
    )
}
