import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Button, Icon, Input, Divider } from 'semantic-ui-react';

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

    const grade = function () {
        if (answer == studentAnswer) {
            setCorrect('Correct');
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
            {!nameClicked ? (
            <>
                <div>
                    <div>
                        Name
                    </div>
                    <Input 
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    {(name.length > 0) ? (
                    <>
                        <Button onClick= {() => setNameClicked(true)}>
                            Save
                        </Button>
                    </>
                    ): null}
                </div>
            </>
            ):(
            <>
                Name: {name}
                <Button onClick={() => {setName(''), setNameClicked(false)}}>
                    Edit
                </Button>
            </>
            )}
            {!dateClicked ? (
            <>
                <div>
                    <div>
                        Date
                    </div>
                    <Input 
                        type="date"
                        placeholder="Date"
                        onChange={(e) => setDate(e.target.value)}
                    />
                    {(date.length > 0) ? (
                    <>
                        <Button onClick={() => setDateClicked(true)}>
                            Save
                        </Button>
                    </>
                    ):null}
                </div>
            </>
            ):(
            <>
                Date: {date}
                <Button onClick={() => {setDate(''), setDateClicked(false)}}>
                    Edit
                </Button>
            </>
            )}
            {!titleClicked ? (
            <>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        Title
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Input 
                            placeholder="Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    {(title.length >  0) ? (
                    <>
                        <Button onClick={() => setTitleClicked(true)}>
                            Save
                        </Button>
                    </>
                    ): null}
                </div>
            </>
            ):(
            <>
                <b>
                    {title}
                </b>
                <Button onClick={() => {setTitle(''), setTitleClicked(false)}}>
                    Edit
                </Button>
            </>
            )}
            {newQuestion ? (
            <>
                <Button onClick={() => setNewQuestion(false)}>
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
            {(studentAnswer.length > 0) ? (
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
               Grade: 
           </div>
        </>
    );
}
