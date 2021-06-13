import React, { useEffect, useRef, useState } from 'react';
import { PlusIcon } from '@heroicons/react/outline';
import { v4 as uuidv4 } from 'uuid';
import { createTrip, uploadTripCoverImage } from '../../utils/controller/TripController';
import { TRIP_DATA } from '../../models/TripData';
import { XBackButton } from '../EditTrip/XBackButton';
import ClickButton from '../General/ClickButton';

const CreateTrip: React.FC = () => {
    const imageRef = useRef<HTMLInputElement>(null);

    const [userId, setUserId] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [fileName, setFileName] = useState('');

    const errorImage = 'https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png';

    useEffect(() => {
        setFileName(uuidv4());

        // TODO: Connect with auth
        setUserId('akathecoder');
    }, []);

    const handleImageUpload = () => {
        if (userId && fileName) {
            uploadTripCoverImage(userId, uuidv4(), fileName, imageRef.current?.files?.item(0)).then((value) => {
                setImageUrl(value);
            });
        }
    };

    const checkImage = (): boolean => {
        if (!imageUrl || imageUrl === errorImage) {
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (!title || !details || !checkImage() || !userId) {
            return;
        }

        createTrip(userId, {
            coverImage: imageUrl,
            details: details,
            title: title,
            noOfPosts: 0,
            username: userId,
            userProfilePhotoUrl: '',
            lastUpdated: new Date(),
            posts: [],
        } as TRIP_DATA).then((value) => {
            if (value) {
                console.log('Moment Uploaded', {
                    imageUrl,
                    title,
                    details,
                });
            }
        });
    };

    return (
        <div>
            <div className="flex py-4 text-center bg-primary-gray border-b-2">
                <div className="absolute mx-4">
                    <XBackButton />
                </div>
                <h1 className="text-xl mx-auto text-center font-medium">Start Trip</h1>
            </div>

            <div className="p-2">
                <input
                    type="file"
                    name="momentInput"
                    id="momentInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    ref={imageRef}
                />
                <div className="flex h-72">
                    <label htmlFor="momentInput" className="mx-auto my-auto">
                        <img
                            src={imageUrl}
                            alt="Moment Image"
                            onError={() => {
                                setImageUrl(errorImage);
                            }}
                            className="object-cover max-h-72"
                        />
                    </label>
                </div>
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

export default CreateTrip;
