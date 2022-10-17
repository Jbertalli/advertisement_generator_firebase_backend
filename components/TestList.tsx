import React from 'react';
import TestQuestions from './TestQuestions';

export default function TestList({ testQuestions }) {
    return (
        testQuestions.map(testQuestions => {
            return (
                <TestQuestions key={testQuestions.id} testQuestions={testQuestions} />
            )
        })
    );
}
