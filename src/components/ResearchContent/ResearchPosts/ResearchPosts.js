import React from 'react';

const researchPost = (props) => (
    <article className="Post">
        <div>{props.author} </div>
        <h1> {props.title} </h1>
        <p>{props.body} </p>
    </article>
)

export default researchPost