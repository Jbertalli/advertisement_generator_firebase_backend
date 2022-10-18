import React from 'react';
import { Divider } from 'semantic-ui-react';

export default function TestList({ testQuestions, questionNumber }) {

    const questions = testQuestions.map(testQuestions => {
        return (
            <>
                <div>
                    Question # {testQuestions.name}
                </div>
                <div>
                    Answer # {testQuestions.value}
                </div>
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
