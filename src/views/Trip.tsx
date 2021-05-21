import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import UserIndicator from '../components/Trip/UserIndicator';
import TripDetails from '../components/Trip/TripDetails';
import Post from '../components/Trip/Post';

const Trip: React.FC = () => {
    return (
        <div>
            <div className="bg-purple-400 relative text-primary-white font-display">
                <button className="top-2 absolute px-4 py-2 focus:outline-none">
                    <FontAwesomeIcon icon={faTimes} size="2x" />
                </button>
                <img
                    src="https://user-images.githubusercontent.com/50939480/119163329-effb5580-ba78-11eb-83e5-012223957839.jpg"
                    alt="Trip Cover Image"
                    className="h-tripCoverImage object-cover object-center"
                />
                <div
                    className="bottom-2 absolute p-4"
                    style={{
                        textShadow: '2px 2px 10px rgba(0, 0, 0, 1)',
                    }}
                >
                    <span className="font-medium text-sm uppercase">6 Posts</span>
                    <h1 className="text-4xl font-semibold">Coping During COVID‑19</h1>

                    <UserIndicator
                        userProfilePicSrc="https://user-images.githubusercontent.com/50939480/119163355-f689cd00-ba78-11eb-961e-53efaf5c1ab4.jpg"
                        username="unicef"
                    />
                </div>
            </div>

            <TripDetails
                tripDetails="Six tips on looking after yourself and staying connected during the #COVID19 pandemic."
                lastUpdated={new Date('27 June 2020')}
            />

            <div>
                <Post
                    index={1}
                    title="Process your feelings"
                    caption="For anyone feeling anxious, isolated and disappointed, know this: you are not alone. Processing feelings looks different for everyone. What’s important is that you do what feels right for you."
                    postImgSrc="https://user-images.githubusercontent.com/50939480/119163320-ee319200-ba78-11eb-8182-d573ca8b567e.jpg"
                />
                <Post
                    index={2}
                    title="Take time to reflect"
                    caption="When you're under difficult conditions, it can be helpful to divide problems into two categories: things I can do something about, and things I can do nothing about. There is a lot that falls under that second category right now, and that’s okay. "
                    postImgSrc="https://user-images.githubusercontent.com/50939480/119163329-effb5580-ba78-11eb-83e5-012223957839.jpg"
                />
                <Post
                    index={3}
                    title="Keep moving"
                    caption="If you are spending more time at home, it’s important to keep moving. Regular exercise has numerous benefits for your body and mind. If you can, try to exercise daily. "
                    postImgSrc="https://user-images.githubusercontent.com/50939480/119163335-f12c8280-ba78-11eb-846f-0fa122c063a2.jpg"
                />
                <Post
                    index={4}
                    title="Share kind notes"
                    caption="Playing our part might mean we are apart, but together we can fill the space between us with kindness and support."
                    postImgSrc="https://user-images.githubusercontent.com/50939480/119163339-f25daf80-ba78-11eb-9687-e4a054be9002.jpg"
                />
                <Post
                    index={5}
                    title="Brighten up your community"
                    caption="Bring joy to your neighbours and show your appreciation for essential workers and other everyday heroes by decorating your windows. "
                    postImgSrc="https://user-images.githubusercontent.com/50939480/119163344-f38edc80-ba78-11eb-850c-34a405a898b3.jpg"
                />
                <Post
                    index={6}
                    title="Get creative... and breathe"
                    caption="Have you been wanting to learn how to do something new, like mindfulness or drawing? Now is the time to do just that. Focusing on yourself and finding ways to use your new‑found time is a productive way to look after your mental health."
                    postImgSrc="https://user-images.githubusercontent.com/50939480/119163348-f4c00980-ba78-11eb-80ec-ded478003422.jpg"
                />
            </div>
        </div>
    );
};

export default Trip;
