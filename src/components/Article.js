// Article
// Make an Article component as a child of ArticleList. It should return:

// an <article> element, with the following elements inside:
// an <h3> element displaying the title of the article, passed as a prop called title
// a <small> element displaying the date of the article, passed as a prop called date
// a default value of "January 1, 1970" should be used if no date is passed as a prop
// a <p> element displaying the preview of the article, passed as a prop called preview

import React from "react";






function Article ({
    title,
    date,
    preview,
    minutes
}) {
    const coffeeCup = "☕️"
    const bentoBox = "🍱"
    const emoji = minutes > 30 ? bentoBox : coffeeCup
    const numOfMins = minutes > 30 ? minutes/10 : minutes/5
    return (
        <article>
            <h3>{title}</h3>
            <small>{date || "January 1, 1970"}</small>
            <p>{preview}</p>
            <p>{minutes}</p>
            {emoji.repeat(numOfMins)}
        </article>
    )
}

export default Article