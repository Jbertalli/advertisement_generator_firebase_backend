import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default function Grade({ testQuestions, studentAnswer, score, setScore, total, setTotal }) {
    const [correct, setCorrect] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [graded, setGraded] = useState<boolean>(false);
    const [gradeClicked, setGradeClicked] = useState<boolean>(false);

    const grade = function() {
        if (testQuestions.value == studentAnswer) {
            setCorrect(true);
            setScore(score + 1)
        } else {
            setCorrect(false);
            setScore(score);
        }
    }

    // console.log(testQuestions.value);
    // console.log(studentAnswer);
    console.log(score);

    return (
        <>
            {submitted ? (
            <>
                {/* <Button
                    color="blue"
                >
                    Submit
                </Button> */}
            </>
            ):(
            <>
                {gradeClicked ? (
                <>
                    <Button
                        color="red"
                        onClick={() => {setGradeClicked(false), setTotal(total - 1)}}
                    >
                        Redo Grade
                    </Button>
                </>
                ):(
                <>
                    <Button
                        color="green"
                        onClick={() => {grade(), setGraded(true), setGradeClicked(true), setTotal(total + 1)}}
                    >
                        Grade
                    </Button>
                </>
                )}
            </>
            )}
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
