import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Button, Icon, Input } from 'semantic-ui-react';

export default function Test() {
    const [newQuestion, setNewQuestion] = useState<boolean>(true);
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [nameClicked, setNameClicked] = useState<boolean>(false);
    const [dateClicked, setDateClicked] = useState<boolean>(false);
    const  [titleClicked, setTitleClicked] = useState<boolean>(false);

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
                    <input 
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
                    <input 
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
                        <input 
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
                {title}
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
                <Button onClick={() => {setNewQuestion(true), setQuestion(''), setAnswer('')}}>
                    <Icon
                        name="plus"
                    />
                    Delete Question
                </Button>
            </>
            )}
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
            <Button color="blue" style={{ transform: 'translateY(600px)' }}>
                <Icon
                    name="check"
                />
                Grade
            </Button>
        </>
    );
}
