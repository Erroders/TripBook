import React from 'react';

interface PostProps {
    index: number;
    title: string;
    caption: string;
    postImgSrc: string;
}

const Post: React.FC<PostProps> = ({ index, title, caption, postImgSrc }: PostProps) => {
    return (
        <div className="p-4">
            <p className="uppercase text-primary-text-gray font-medium text-sm my-2">No. {index}</p>
            <h2 className="text-2xl font-medium my-2">{title}</h2>
            <p className="text-sm leading-6 my-2">{caption}</p>
            <img className="my-4" src={postImgSrc} alt="" />
        </div>
    );
};

export default Post;
