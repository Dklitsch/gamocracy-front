import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography'

const StoryList = (props) => {

    const [stories, setStories] = useState(null);

    useEffect(() => { 

        async function fetchData() {
            const url = process.env.REACT_APP_TEST_URL
            const result = await fetch(url) 
            if (result.ok && stories == null){
                    setStories(await result.text())
            }
        }

      fetchData();
    });

    return(<Typography>{stories}</Typography>);

}

export default StoryList;