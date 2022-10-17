import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Button, Icon, Input, Divider, Container } from 'semantic-ui-react';

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
    const [correct, setCorrect] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [questionNumber, setQuestionNumber] = useState<number>(0);

    const grade = function () {
        if (answer == studentAnswer) {
            setCorrect('Correct');
            setScore(score + 1);
            console.log('%c Correct!', 'color: green');
        } else {
            setCorrect('Incorrect');
            console.log('%c Incorrect.', 'color: red');
        }
    }

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
                        <h2 style={{ marginBottom: '0px' }}>
                            Name
                        </h2>
                        <Input 
                            placeholder="Name"
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
                        <h2 style={{ marginBottom: '0px', marginTop: '20px' }}>
                            Date
                        </h2>
                        <Input 
                            type="date"
                            placeholder="Date"
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
                        <h2 style={{ display: 'flex', justifyContent: 'center', marginBottom: '0px', marginTop: '20px' }}>
                            Assignment Title
                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Input 
                                placeholder="Title"
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
                        <span style={{ fontSize: '24px' }}>
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
                {newQuestion ? (
                <>
                    <Button onClick={() => {setNewQuestion(false),setQuestionNumber(questionNumber + 1)}}>
                        <Icon
                            name="plus"
                        />
                        Add Question
                    </Button>
                </>
                ):(
                <>
                    <Button onClick={() => {setNewQuestion(true), setQuestion(''), setAnswer('')}} color="red">
                        <Icon
                            name="plus"
                        />
                        Delete Question
                    </Button>
                    <Button color="blue">
                        <Icon
                            name="save"
                        />
                        Save Question
                    </Button>
                </>
                )}
                {(studentAnswer.length > 0 && answer.length > 0) ? (
                <>
                    <Button 
                        onClick={() => grade()}
                        color="blue" 
                    >
                            <Icon
                                name="check"
                            />
                            Grade
                    </Button>
                </>
                ): null}
                <Divider />
                <h2>
                    Question #{questionNumber}
                </h2>
                <div>
                    {!newQuestion ? (
                    <>
                        <div>
                            Question
                            <Input
                                placeholder="Question"
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </div>
                        
                        <div>
                            Answer
                            <Input 
                                placeholder="Answer"
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                        </div>
                    </>
                    ): null}
                </div>
                <div>
                    {question}
                </div>
                <div>
                    {answer}
                </div>
                <div>
                    Student Answer
                    <Input
                        placeholder="Answer"
                        onChange={(e) => setStudentAnswer(e.target.value)}
                    />
                </div>
                <div>
                    {studentAnswer}
                </div>
                <h2>
                    {correct}
                </h2>
            <Divider />
            <div>
                Grade: {score}
            </div>
           </Container>
        </>
    );
}
