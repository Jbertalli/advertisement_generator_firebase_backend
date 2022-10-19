import React, { useState } from 'react';
import { Divider, Button } from 'semantic-ui-react';

export default function TestList({ testQuestions, questionNumber, answerNumber }) {
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
