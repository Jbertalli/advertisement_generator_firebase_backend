import React, { useState } from 'react';
import { Divider, Button } from 'semantic-ui-react';

export default function TestList({ testQuestions, questionNumber }) {
    const [revealAnswer, setRevealAnswer] = useState<boolean>(false);

    const questions = testQuestions.map(testQuestions => {
        return (
            <>
                <div>
                    Question # {testQuestions.name}
                </div>
                {revealAnswer ? (
                <>
                    <div>
                        Answer # {testQuestions.value}
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
