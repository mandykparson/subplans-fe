import React, { useState } from 'react'

export default function Footer() {

    const [ title, setTitle ] = useState('')
    const [ grade, setGrade ] = useState('')
    const [ overview, setOverview ] = useState('')
    const [ link, setLink ] = useState('')
    const [ subplansURL ] = useState('http://localhost:3001/subplan_options/')
  
    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(subplansURL, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({ title, grade, overview, link })
        })

        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Form submitted successfully');
            })
            .catch(error => {
            console.error('Error submitting form:', error);
        });
    };
  
    return (
        <div className='container'>
            <form onSubmit={ handleSubmit }>
                <label className='row'>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                </label>
                <label className='row'>
                Grade:
                    <select onChange={(event) => setGrade(event.target.value)}>
                        <option value='first'>first</option>
                        <option value='second'>second</option>
                        <option value='third'>third</option>
                        <option value='forth'>forth</option>
                        <option value='fifth'>fifth</option>
                    </select>
                {/* <input
                    type="text"
                    value={grade}
                    onChange={(event) => setGrade(event.target.value)}
                /> */}
                </label>
                <label className='row'>
                Overview:
                <textarea
                    value={overview}
                    onChange={(event) => setOverview(event.target.value)}
                />
                </label>
                <label className='row'>
                Link:
                <input
                    type="text"
                    value={link}
                    onChange={(event) => setLink(event.target.value)}
                />
                </label>
                <button type="submit" className='row'>Submit</button>
            </form>
        </div>
    );
}
