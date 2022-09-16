import React from 'react'

export const QuestionItem = ({ question, handleChange, isMultiple }) => {
    const answerType = isMultiple ? 'checkbox' : 'radio'
    return (

        <div key={question.id} className='wrapper'>
            <h2 className='question-text'>{question.question}</h2>
            <div className='input-wrapper'>
                {question.answers.map(item => (
                    <div key={item.answer} className="question-option">
                        <input
                            onChange={handleChange}
                            type={answerType}
                            id={item.answer}
                            name={question.question}
                            value={item.correct}
                        />
                        <label className='answer-text' htmlFor="html"><b ></b>   {item.answer}</label>
                    </div>
                ))}



            </div>
        </div>

    )
}
