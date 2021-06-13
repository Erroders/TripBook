import { TRIP_DATA } from '../models/TripData';
import { USER_DATA } from '../models/UserData';

type getTripDataProps = (username: string, tripId: string) => TRIP_DATA;

export const getTripData: getTripDataProps = (username, tripId) => {
    const tripData: TRIP_DATA = {
        id: tripId,
        coverImage:
            'https://user-images.githubusercontent.com/50939480/119163329-effb5580-ba78-11eb-83e5-012223957839.jpg',
        title: 'Coping During COVID‑19',
        noOfPosts: 6,
        username: username,
        userProfilePhotoUrl:
            'https://user-images.githubusercontent.com/50939480/119163355-f689cd00-ba78-11eb-961e-53efaf5c1ab4.jpg',
        details:
            'Six tips on looking after yourself and staying connected with each other during the #COVID19 pandemic situations. Six tips on looking after yourself and staying connected with each other during the #COVID19 pandemic situations.',
        lastUpdated: new Date('27 May 2021'),
        posts: [
            {
                index: 1,
                title: 'Process your feelings',
                caption:
                    'For anyone feeling anxious, isolated and disappointed, know this: you are not alone. Processing feelings looks different for everyone. What’s important is that you do what feels right for you.',
                postsUrl: [
                    'https://user-images.githubusercontent.com/50939480/119163320-ee319200-ba78-11eb-8182-d573ca8b567e.jpg',
                ],
            },
            {
                index: 2,
                title: 'Take time to reflect',
                caption:
                    "When you're under difficult conditions, it can be helpful to divide problems into two categories: things I can do something about, and things I can do nothing about. There is a lot that falls under that second category right now, and that’s okay.",
                postsUrl: [
                    'https://user-images.githubusercontent.com/50939480/119163329-effb5580-ba78-11eb-83e5-012223957839.jpg',
                ],
            },
            {
                index: 3,
                title: 'Keep moving',
                caption:
                    'If you are spending more time at home, it’s important to keep moving. Regular exercise has numerous benefits for your body and mind. If you can, try to exercise daily.',
                postsUrl: [
                    'https://user-images.githubusercontent.com/50939480/119163335-f12c8280-ba78-11eb-846f-0fa122c063a2.jpg',
                ],
            },
            {
                index: 4,
                title: 'Share kind notes',
                caption:
                    'Playing our part might mean we are apart, but together we can fill the space between us with kindness and support.',
                postsUrl: [
                    'https://user-images.githubusercontent.com/50939480/119163339-f25daf80-ba78-11eb-9687-e4a054be9002.jpg',
                ],
            },
            {
                index: 5,
                title: 'Brighten up your community',
                caption:
                    'Bring joy to your neighbours and show your appreciation for essential workers and other everyday heroes by decorating your windows.',
                postsUrl: [
                    'https://user-images.githubusercontent.com/50939480/119163344-f38edc80-ba78-11eb-850c-34a405a898b3.jpg',
                ],
            },
            {
                index: 6,
                title: 'Get creative... and breathe',
                caption:
                    'Have you been wanting to learn how to do something new, like mindfulness or drawing? Now is the time to do just that. Focusing on yourself and finding ways to use your new‑found time is a productive way to look after your mental health.',
                postsUrl: [
                    'https://user-images.githubusercontent.com/50939480/119163348-f4c00980-ba78-11eb-80ec-ded478003422.jpg',
                ],
            },
        ],
    };

    return tripData;
};

type getUserDataProps = (username: string) => USER_DATA;

export const getUserData: getUserDataProps = (username) => {
    const tripData: USER_DATA = {
        username: username,
        firstName: 'Sparsh',
        lastName: 'Agarwal',
        email: 'akathecoder@gmail.com',
        bio: 'Tripper | Blogger | The best things come from living outside of your comfort zone',
        noOfTrips: 6,
        userProfilePhotoUrl: 'https://wallpapercave.com/wp/wp4288429.jpg',
        followers: [
            {
                username: 'Raghav Goyal',
                userProfilePhotoUrl:
                    'https://user-images.githubusercontent.com/50939480/119163320-ee319200-ba78-11eb-8182-d573ca8b567e.jpg',
            },
            {
                username: 'Vineet Sharma',
                userProfilePhotoUrl: 'https://wallpapercave.com/wp/wp4288429.jpg',
            },
            {
                username: 'Nonit Mittal',
                userProfilePhotoUrl:
                    'https://user-images.githubusercontent.com/50939480/119163320-ee319200-ba78-11eb-8182-d573ca8b567e.jpg',
            },
            {
                username: 'Priya Kaushik',
                userProfilePhotoUrl: 'https://wallpapercave.com/wp/wp4288429.jpg',
            },
            {
                username: 'Garima Gaur',
                userProfilePhotoUrl:
                    'https://user-images.githubusercontent.com/50939480/119163320-ee319200-ba78-11eb-8182-d573ca8b567e.jpg',
            },
        ],
        followings: [
            {
                username: 'Raghav Goyal',
                userProfilePhotoUrl:
                    'https://user-images.githubusercontent.com/50939480/119163320-ee319200-ba78-11eb-8182-d573ca8b567e.jpg',
            },
            {
                username: 'Nonit Mittal',
                userProfilePhotoUrl: 'https://wallpapercave.com/wp/wp4288429.jpg',
            },
            {
                username: 'Vineet Sharma',
                userProfilePhotoUrl:
                    'https://user-images.githubusercontent.com/50939480/119163320-ee319200-ba78-11eb-8182-d573ca8b567e.jpg',
            },
        ],
        currentTrip: '',
    };

    return tripData;
};
