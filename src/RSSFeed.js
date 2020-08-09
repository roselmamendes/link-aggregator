import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function RSSFeed(props) {
    const buildPostList = props.posts.map((element, index) => {
            return (
                <Card key={index}>
                    <CardContent>
                        {element['title']}
                    </CardContent>
                </Card>
            )
        }
    )
    
    return (
        <div>
            {buildPostList}
        </div>
    );
}

export default RSSFeed;