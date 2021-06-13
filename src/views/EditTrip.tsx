import React, { useRef, useState } from 'react';
import { XBackButton } from '../components/EditTrip/XBackButton';
import ClickButton from '../components/General/ClickButton';
import { PlusIcon } from '@heroicons/react/outline';

const EditTrip: React.FC = () => {
    const imageRef = useRef<HTMLInputElement>(null);

    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    const handleImageUpload = () => {
        // TODO: Upload Image and set it here
        setImageUrl(
            'https://images.unsplash.com/photo-1604051189201-700f955d1cf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        );
    };

    const handleSubmit = () => {
        console.log();
    };

    return (
        <div>
            <div className="flex py-4 text-center bg-primary-gray border-b-2">
                <div className="absolute mx-4">
                    <XBackButton />
                </div>
                <h1 className="text-xl mx-auto text-center font-medium">Add Moment</h1>
            </div>

            <div className="p-2 flex">
                <input
                    type="file"
                    name="momentInput"
                    id="momentInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    ref={imageRef}
                />
                <label htmlFor="momentInput" className="mx-auto">
                    <img
                        src={imageUrl}
                        alt="Moment Image"
                        onError={() => {
                            setImageUrl('https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png');
                        }}
                        className="object-cover w-80 h-80"
                    />
                </label>
            </div>

            <div className="p-2">
                {title && (
                    <>
                        <label htmlFor="title" className="text-sm font-light px-1">
                            Title
                        </label>
                        <br />
                    </>
                )}
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="w-full p-2 border outline-none"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="p-2">
                {details && (
                    <>
                        <label htmlFor="description" className="text-sm font-light px-1">
                            Description
                        </label>
                        <br />
                    </>
                )}
                <textarea
                    name="description"
                    id="description"
                    className="w-full p-2 border outline-none"
                    placeholder="Description"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    cols={30}
                    rows={10}
                />
            </div>

            <div className="p-2 mb-4">
                <ClickButton heroIcon={<PlusIcon />} text="Submit" onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default EditTrip;
