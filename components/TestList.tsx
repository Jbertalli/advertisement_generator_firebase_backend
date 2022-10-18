import React, { useState } from 'react';
import { Divider, Button } from 'semantic-ui-react';

export default function TestList({ testQuestions, questionNumber }) {
    const [revealAnswer, setRevealAnswer] = useState<boolean>(false);

    const questions = testQuestions.map(testQuestions => {
        return (
            <>
                <div style={{ fontSize: '30px' }}>
                    <h2>
                        Question {questionNumber}:{' '}
                        <span style={{ fontWeight: '100' }}>
                            {testQuestions.name}
                        </span>
                    </h2>
                </div>
                {revealAnswer ? (
                <>
                    <div style={{ fontSize: '20px', color: 'red' }}>
                        Answer {questionNumber}:{' '}
                        <span>
                            {testQuestions.value}
                        </span>
                    </div>
                    <Button
                        color="blue"
                        onClick={() => setRevealAnswer(false)}
                    >
                        Hide Answer
                    </Button>
                </>
                ):(
                <>
                    <Button
                        color="blue"
                        onClick={() => setRevealAnswer(true)}
                    >
                        Show Answer
                    </Button>
                </>
                )}
                <Divider />
            </>
        )
    })

    return (
        <>
            <div>
                {questions}
            </div>
        </>
    );
}
