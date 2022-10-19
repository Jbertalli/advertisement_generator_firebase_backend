import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function Grade({ testQuestions, studentAnswer }) {
    const [correct, setCorrect] = useState<boolean>(false);
    const [graded, setGraded] = useState<boolean>(false);

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
                onClick={() => {grade(), setGraded(true)}}
            >
                Grade
            </Button>
            <div>
                {graded ? (
                <>
                    {correct ? (
                    <>
                        Correct
                    </>
                    ):(
                    <>
                        Incorrect
                    </>
                    )}
                </>
                ): null}
                
            </div>
        </>
    );
}
