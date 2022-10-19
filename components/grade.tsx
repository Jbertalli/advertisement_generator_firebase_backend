import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';

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
            <div style={{ marginTop: '10px' }}>
                {graded ? (
                <>
                    {correct ? (
                    <>
                        <div style={{ fontSize: '30px', fontWeight: '500', color: 'green' }}>
                            <Icon
                                name="check"
                            />
                            <span>
                                Correct
                            </span>  
                        </div>
                    </>
                    ):(
                    <>
                        <div style={{ fontSize: '30px', fontWeight: '500', color: 'red' }}>
                            <Icon
                                name="plus"
                                style={{ transform: 'rotate(45deg)' }}
                            />
                            <span>
                                Incorrect
                            </span>
                        </div>
                    </>
                    )}
                </>
                ): null}
            </div>
        </>
    );
}
