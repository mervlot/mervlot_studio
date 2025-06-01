import React, {useState, useEffect} from "react";
import Post from "./Post";
// import {data} from "autoprefixer";
const Feed = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/get-feeds');
            const result = await response.json()
            setData(result)
        };
        fetchData();
    }, []);
    return (
        <>
            <div>
                {data.map((post) => (
                    < Post img={post.media} usrImg={post.profilePicture} username={post.username} content={post.content} date={post.display_date} />
                ))}
            </div>

        </>
    )
}

export default Feed