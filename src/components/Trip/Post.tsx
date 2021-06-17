import React from 'react';
import { POST } from '../../models/TripData';

const Post: React.FC<POST> = ({ index, title, caption, postsUrl }: POST) => {
    return (
        <div className="p-4">
            <p className="uppercase text-primary-text-gray font-medium text-sm my-2">No. {index}</p>
            <h2 className="text-2xl font-medium my-2">{title}</h2>
            <p className="text-sm leading-6 my-2">{caption}</p>
            <img className="my-4 w-full object-cover" src={postsUrl[0]} alt="" />
        </div>
    );
};

export default Post;
