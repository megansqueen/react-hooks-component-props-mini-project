// ArticleList
// Make an ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop called post to ArticleList)
// make sure to assign a unique key prop to each Article

import React from "react";
import Article from "./Article.js"
// import MinutesToRead from "./MinutesToRead.js"

function ArticleList({
    posts,
}) {
    return ( <main>
    {posts.map((post) => {
            return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    })
    // }
    // {posts.map((post) => {
    //         return <MinutesToRead key={post.id} ></MinutesToRead>
    // })
    }
    </main> )
} 


export default ArticleList