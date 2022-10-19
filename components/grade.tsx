import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function Grade({ testQuestions, studentAnswer }) {
    const [correct, setCorrect] = useState(false);

    const grade = function() {
        if (testQuestions.value == studentAnswer) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }

    return (
        <>
            <Button
                color="green"
                onClick={grade}
            >
                Grade
            </Button>
            <div>
                {correct ? (
                <>
                    Correct
                </>
                ):(
                <>
                    Incorrect
                </>
                )}
            </div>
        </>
    );
}
