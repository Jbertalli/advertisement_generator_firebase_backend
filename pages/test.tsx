import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import { Button, Icon, Divider, Container } from 'semantic-ui-react';
import TestList from '../components/TestList';
import { v4 as uuidv4 } from 'uuid';    

export default function Test() {
    const [newQuestion, setNewQuestion] = useState<boolean>(true);
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const [studentAnswer, setStudentAnswer] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [nameClicked, setNameClicked] = useState<boolean>(false);
    const [dateClicked, setDateClicked] = useState<boolean>(false);
    const [titleClicked, setTitleClicked] = useState<boolean>(false);
    // const [correct, setCorrect] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [questionNumber, setQuestionNumber] = useState<any>(0);
    const [answerNumber, setAnswerNumber] = useState<any>(0);
    const [testQuestions, setTestQuestions] = useState<any>([]);
    const [letterGrade, setLetterGrade] = useState<string>('');
    const questionNameRef = useRef<any>();
    const answerNameRef = useRef<any>();

    // const grade = function() {
    //     if (answer == studentAnswer) {
    //         setCorrect('Correct');
    //         setScore(score + 1);
    //         console.log('%c Correct!', 'color: green');
    //     } else {
    //         setCorrect('Incorrect');
    //         console.log('%c Incorrect.', 'color: red');
    //     }
    // }

    function handleAddQuestion(e) {
        const quest = questionNameRef.current.value;
        const answ = answerNameRef.current.value;

        if (quest === '') return 
        if (answ === '') return 
        
        const id = uuidv4();

        setTestQuestions(prevQuestions => {
            return [...prevQuestions, { id: id, name: quest, value: answ }]
        })

        // console.log(quest);
        // console.log(answ);
        // console.log(id);

        questionNameRef.current.value = null;
        answerNameRef.current.value = null;
    }

    const finalGrade: number = (((score / total) * 100));
    // console.log(typeof finalGrade);

    //switch statement
    useEffect(() => {
         if (finalGrade >= 91.5 && finalGrade <= 100.0) {
            setLetterGrade('A');
        } else {
            return;
        }
    }, [finalGrade])

    // if (finalGrade >= 91.5 && finalGrade <= 100.0) {
    //     letterGrade = 'A'
    // } else {
    //     return;
    // }

    // A   100.0 - 91.5
    // A- 88.5 - 91.5
    // B+ 84.5 - 88.5
    // B 81.5 - 84.5
    // B- 77.5 - 81.5
    // C+ 74.5 - 77.5
    // C   70.5 - 74.5 
    // C- 67.5 - 70.5
    // D 64.5 - 67.5
    // F 0 - 64.5

    return (
        <>
            <Head>
                <title>Test Generator</title>
                <meta name="description" content="test" />
            </Head>
            <Container>
                {!nameClicked ? (
                <>
                    <div style={{ transform: 'translateY(20px)', paddingBottom: '20px' }}>
                        <h2 style={{ marginBottom: '5px' }}>
                            Name
                        </h2>
                        <input 
                            placeholder="Name"
                            style={{ 
                                padding: '9px 14px 9px 14px', 
                                fontSize: '14px', 
                                fontWeight: '400', 
                                cursor: 'text', 
                                width: '178.5px', 
                                borderRadius: '4px', 
                                border: '1px solid rgba(34, 36, 38, 0.15)',
                                position: 'relative',
                                zIndex: '1000'
                            }}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {(name.length > 0) ? (
                        <>
                            <span style={{  display: 'flex', justifyContent: 'flex-end', transform: 'translateY(-37px)' }}>
                                <Button 
                                    color="blue"
                                    onClick= {() => setNameClicked(true)}
                                >
                                    Save
                                </Button>
                            </span>
                        </>
                        ): null}
                    </div>
                </>
                ):(
                <>
                    <div style={{ transform: 'translateY(25px)' }}>
                        <span style={{ fontSize: '24px' }}>
                            <span style={{ fontWeight: '500' }}>
                                Name:{' '} 
                            </span>
                            <span style={{ fontWeight: '300' }}>
                                {name}
                            </span>
                        </span>
                        <span style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translateY(-30px)' }}>
                            <Button 
                                color="blue"
                                onClick={() => {setName(''), setNameClicked(false)}}
                            >
                                Edit
                            </Button>
                        </span>
                    </div>
                </>
                )}
                {!dateClicked ? (
                <>
                    <div>
                        <h2 style={{ marginBottom: '5px', marginTop: '20px' }}>
                            Date
                        </h2>
                        <input 
                            type="date"
                            placeholder="Date"
                            style={{ 
                                padding: '9px 14px 9px 14px', 
                                fontSize: '14px', 
                                fontWeight: '400', 
                                cursor: 'text', 
                                width: '178.5px', 
                                borderRadius: '4px', 
                                border: '1px solid rgba(34, 36, 38, 0.15)',
                                position: 'relative',
                                zIndex: '1000'
                            }}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        {(date.length > 0) ? (
                        <>
                            <span style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translateY(-38px)' }}>
                                <Button 
                                    color="blue"
                                    onClick={() => setDateClicked(true)}
                                >
                                    Save
                                </Button>
                            </span>
                        </>
                        ):null}
                    </div>
                </>
                ):(
                <>
                    <div style={{ transform: 'translateY(20px)' }}>
                        <span style={{ fontSize: '24px' }}>
                            <span style={{ fontWeight: '500' }}>
                                Date:{' '}
                            </span>
                            <span style={{ fontWeight: '300' }}>
                                {date}
                            </span>
                        </span>
                        <span style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translateY(-32px)' }}>
                            <Button 
                                color="blue"
                                onClick={() => {setDate(''), setDateClicked(false)}}
                            >
                                Edit
                            </Button>
                        </span>
                    </div>
                </>
                )}
                {!titleClicked ? (
                <>
                    <div>
                        <h2 style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px', marginTop: '20px' }}>
                            Assignment Title
                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <input 
                                placeholder="Title"
                                style={{ 
                                    padding: '9px 14px 9px 14px', 
                                    fontSize: '14px', 
                                    fontWeight: '400', 
                                    cursor: 'text', 
                                    width: '178.5px', 
                                    borderRadius: '4px', 
                                    border: '1px solid rgba(34, 36, 38, 0.15)',
                                    position: 'relative',
                                    zIndex: '1000'
                                }}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        {(title.length > 0) ? (
                        <>
                            <span style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translateY(-37px)' }}>
                                <Button 
                                    color="blue"
                                    onClick={() => setTitleClicked(true)}
                                >
                                    Save
                                </Button>
                            </span>
                        </>
                        ): null}
                    </div>
                </>
                ):(
                <>
                    <div style={{ transform: 'translateY(20px)' }}>
                        <span style={{ fontSize: '35px' }}>
                            <span style={{ fontWeight: '500', display: 'flex', justifyContent: 'center' }}>
                                <b>
                                    {title}
                                </b>
                            </span>
                        </span>
                        <span style={{ display: 'flex', justifyContent: 'flex-end', transform: 'translateY(-32px)' }}>
                            <Button 
                                color="blue"
                                onClick={() => {setTitle(''), setTitleClicked(false)}}
                            >
                                Edit
                            </Button>
                        </span>
                    </div>
                </>
                )}
                <Divider />
                <TestList testQuestions={testQuestions} questionNumber={questionNumber} answerNumber={answerNumber} studentAnswer={studentAnswer} setStudentAnswer={setStudentAnswer} score={score} setScore={setScore} total={total} setTotal={setTotal} />
                <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
                    Create New Questions
                </h2>
                {newQuestion ? (
                <>
                    <Button 
                        color="blue"
                        onClick={() => setNewQuestion(false)}
                    >
                        <Icon
                            name="plus"
                        />
                        Add Question
                    </Button>
                </>
                ):(
                <>
                    <div style={{ paddingBottom: '10px', display: 'flex', justifyContent: 'space-around' }}>
                        <Button 
                            color="blue"
                            onClick={handleAddQuestion}
                        >
                            <Icon
                                name="save"
                            />
                            Save Question
                        </Button>
                        <Button onClick={() => {setNewQuestion(true), setQuestion(''), setAnswer('')}} color="red">
                            <Icon
                                name="plus"
                            />
                            Delete Question
                        </Button>
                    </div>
                </>
                )}
                {/* {(studentAnswer.length > 0 && answer.length > 0) ? (
                <>
                    <Button 
                        color="blue" 
                        onClick={() => grade()}
                    >
                            <Icon
                                name="check"
                            />
                            Grade
                    </Button>
                </>
                ): null} */}
                <div>
                    {!newQuestion ? (
                    <>
                        <div style={{ paddingBottom: '10px' }}>
                            <h2 style={{ marginBottom: '5px' }}>
                                Question
                            </h2>
                            <input
                                ref={questionNameRef}
                                placeholder="Question"
                                style={{ 
                                    padding: '9px 14px 9px 14px', 
                                    fontSize: '14px', 
                                    fontWeight: '400', 
                                    cursor: 'text', 
                                    width: '178.5px', 
                                    borderRadius: '4px', 
                                    border: '1px solid rgba(34, 36, 38, 0.15)' 
                                }}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </div>
                        <div>
                            <h2 style={{ marginBottom: '5px' }}>
                                Answer
                            </h2>
                            <input 
                                ref={answerNameRef}
                                placeholder="Answer"
                                style={{ 
                                    padding: '9px 14px 9px 14px', 
                                    fontSize: '14px', 
                                    fontWeight: '400', 
                                    cursor: 'text', 
                                    width: '178.5px', 
                                    borderRadius: '4px', 
                                    border: '1px solid rgba(34, 36, 38, 0.15)',
                                    marginBottom: '10px'
                                }}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                        </div>
                    </>
                    ): null}
                </div>
                {/* <div>
                    {question}
                </div>
                <div>
                    {answer}
                </div> */}
                {/* <Divider /> */}
                {/* <div>
                    <h2 style={{ marginBottom: '5px' }}>
                        Student Answer
                    </h2>
                    <input
                        placeholder="Answer"
                        style={{ 
                            padding: '9px 14px 9px 14px', 
                            fontSize: '14px', 
                            fontWeight: '400', 
                            cursor: 'text', 
                            width: '178.5px', 
                            borderRadius: '4px', 
                            border: '1px solid rgba(34, 36, 38, 0.15)' 
                        }}
                        onChange={(e) => setStudentAnswer(e.target.value)}
                    />
                </div> */}
                {/* <div>
                    {studentAnswer}
                </div> */}
                {/* <h2>
                    {correct}
                </h2> */}
            <Divider />
            <h2 style={{ marginBottom: '5px' }}>
                Grade: {score}/{total}
            </h2>
            <h2>
                {(finalGrade).toFixed(2)}%
            </h2>
            <h2>
                {letterGrade}
            </h2>
           </Container>
        </>
    );
}
