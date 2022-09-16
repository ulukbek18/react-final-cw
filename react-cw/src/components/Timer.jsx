import { Col, Row, Statistic } from 'antd';
import React, { useState }  from 'react'
const { Countdown } = Statistic;



export const Timer = ({onTimerFinish}) => {
  const deadline = Date.now() + 1000 * 30;

  return (
    <div>
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Countdown title="Время до завершения теста" value={deadline} onFinish={onTimerFinish} />
                    </Col>
                </Row>
            </div>
        
    </div>
  )
}
