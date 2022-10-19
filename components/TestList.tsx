import React, { useState } from 'react';
import { Divider, Button } from 'semantic-ui-react';
import Grade from '../components/grade';

export default function TestList({ testQuestions, questionNumber, answerNumber, studentAnswer, setStudentAnswer }) {
    const [revealAnswer, setRevealAnswer] = useState<boolean>(false);

    const questions = testQuestions.map(testQuestions => {

        return (
            <>
                <div style={{ transform: 'translateY(20px)' }}>
                    <div style={{ fontSize: '30px', paddingBottom: '10px' }}>
                        <h2>
                            Question #{questionNumber += 1}:{' '}
                            <span style={{ fontWeight: '100' }}>
                                {testQuestions.name}
                            </span>
                        </h2>
                    </div>
                    {revealAnswer ? (
                    <>
                        <div style={{ fontSize: '20px', color: 'red' }}>
                            Answer #{answerNumber += 1}:{' '}
                            <span>
                                {testQuestions.value}
                            </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translate(40px, -140%) scale(0.8)' }}>
                            <Button
                                color="blue"
                                onClick={() => setRevealAnswer(false)}
                            >
                                Hide Answer
                            </Button>
                        </div>
                    </>
                    ):(
                    <>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translate(40px, -120%) scale(0.8)' }}>
                            <Button
                                color="blue"
                                onClick={() => setRevealAnswer(true)}
                            >
                                Show Answer
                            </Button>
                        </div>
                    </>
                    )}
                </div>
                <input
                    placeholder="Student Answer"
                    style={{ 
                        padding: '9px 14px 9px 14px', 
                        fontSize: '14px', 
                        fontWeight: '400', 
                        cursor: 'text', 
                        width: '178.5px', 
                        borderRadius: '4px', 
                        border: '1px solid rgba(34, 36, 38, 0.15)',
                        position: 'relative', 
                        zIndex: '100' 
                    }}
                    onChange={(e) => setStudentAnswer(e.target.value)}
                />
                <Grade testQuestions={testQuestions} studentAnswer={studentAnswer} />
                <Divider />
            </>
        )
    })

    return (
        <>
            <div style={{ padding: '10px' }}>
                {questions}
            </div>
        </>
    );
}
