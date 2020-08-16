import React from 'react';

function RSSFeed(props) {
    const buildPostList = props.posts.map((element, index) => {
            return (
                <li key={index}>
                    <a href={element['link']}> {element['title']}</a>
                </li>
            )
        }
    )
    
    return (
        <div className='feed'>
            <h1>RSS Feed</h1>
            <ul className='feedList'>
                {buildPostList}
            </ul>
        </div>
    );
}

export default RSSFeed;