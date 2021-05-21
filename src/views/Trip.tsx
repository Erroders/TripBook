import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import UserIndicator from '../components/Trip/UserIndicator';

const Trip: React.FC = () => {
    return (
        <>
            <div className="bg-purple-400 relative text-primary-white">
                <button className="top-2 absolute px-4 py-2 focus:outline-none">
                    <FontAwesomeIcon icon={faTimes} size="2x" />
                </button>
                <img
                    src="https://picsum.photos/512"
                    alt="Cover Image"
                    className="h-tripCoverImage object-cover object-center"
                />
                <div
                    className="bottom-2 absolute p-4"
                    style={{
                        textShadow: '2px 2px 10px rgba(0, 0, 0, 1)',
                    }}
                >
                    <span className="font-medium text-sm uppercase">6 Posts</span>
                    <h1 className="text-4xl font-medium">Coping During Covid: Guide to Heaven</h1>
                    <UserIndicator />
                </div>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam? Tempore, eos? Delectus inventore,
                assumenda architecto ipsa deserunt accusantium iure placeat sint minus eius veritatis aut voluptas
                quibusdam error repellendus illum vel et repudiandae fugiat sequi quaerat amet reprehenderit recusandae
                aspernatur! Accusantium debitis ut beatae amet non hic praesentium soluta earum nam, mollitia quis
                laudantium enim at quia explicabo rerum. Nostrum accusantium placeat, dignissimos iusto unde totam
                numquam. Cumque neque quidem voluptates at blanditiis, minima est velit necessitatibus ratione aperiam
                totam ex sed obcaecati similique inventore ipsam quo laudantium accusamus accusantium quod nam
                perferendis aliquid maiores. Praesentium sint sit fugit error ab placeat laboriosam obcaecati! Dolore
                laudantium repellat voluptatem suscipit quae, asperiores reiciendis quidem perferendis cupiditate
                doloremque dolorem voluptate commodi maxime quo quibusdam quasi, rem ex facere. Optio, distinctio.
                Aliquam quos laborum, fugit doloremque necessitatibus ratione unde repudiandae excepturi deleniti sunt
                sint, cupiditate dolore ab sequi incidunt assumenda eligendi molestiae magni natus, aut possimus. Saepe,
                ut! Nesciunt suscipit tempore aut dolores placeat itaque quidem dignissimos esse numquam reprehenderit
                magni fuga fugiat quos et saepe odio repellendus, vel ullam earum! Porro aliquam fugit minus, earum
                deleniti beatae accusantium sit quam eveniet qui ipsam, harum at cum, totam repudiandae ea temporibus
                quod? Dicta ad odio ipsum quos quis earum dolor ex labore omnis nisi reprehenderit, perferendis vitae
                hic voluptatum deleniti iste molestias nostrum cumque excepturi ea. Quae odit facere eum unde
                consequuntur voluptate autem, necessitatibus nisi! Doloremque dolorem obcaecati, minus sed ipsa officia
                voluptas deserunt necessitatibus ad animi possimus voluptate, commodi consequatur nulla temporibus.
                Quasi animi, eius facilis quas ullam culpa itaque excepturi. Et repudiandae culpa asperiores est sed
                numquam vel deserunt, quidem eius aliquid reprehenderit. Magni et neque assumenda voluptatum qui tenetur
                cupiditate alias cumque eligendi repellat sed quae atque nulla totam dolorem, labore eaque unde nemo,
                enim quos molestias? Esse.
            </div>
        </>
    );
};

export default Trip;
