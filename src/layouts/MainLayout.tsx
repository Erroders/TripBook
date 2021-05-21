import React, { useState } from 'react';
import { TABS } from '../assets/themes/variables';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomeLayout: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<TABS>(TABS.FEED);

    return (
        <>
            <Header />
            <main>
                Home Layout Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iure. Necessitatibus
                delectus nam temporibus ut? Quisquam impedit fuga quod unde similique consectetur asperiores in ex quos
                eveniet nobis perspiciatis necessitatibus velit, quae, officia quasi, qui est deleniti officiis? Vitae
                blanditiis soluta libero labore? Recusandae eaque molestias est, nulla omnis voluptas similique deleniti
                facere, dolor eos, laborum corporis! Nihil voluptates, porro cum laborum fugiat eaque ipsa, doloribus
                eligendi dolorem obcaecati, harum blanditiis sapiente inventore repellendus rem minus provident! Facilis
                doloribus magni nam sit facere. Explicabo ex quisquam amet ducimus. Aspernatur est in soluta labore nisi
                inventore delectus voluptatem molestias optio autem, ex fuga odit deleniti itaque quos iste ipsa iure
                sint aperiam eaque obcaecati unde! Veritatis, temporibus cumque natus similique blanditiis quis non
                neque laboriosam inventore debitis vero dolorem placeat enim atque rem eveniet. Eos, beatae culpa
                dolorem vitae maiores fugiat ipsa quas ad reprehenderit asperiores! Molestias voluptatum, maxime sint,
                ipsa vero reprehenderit consectetur quibusdam, iusto quos laboriosam officiis architecto unde et ex amet
                beatae. Repellat cumque fugiat magni laboriosam placeat in ab excepturi ipsa. Eligendi quod, harum sed,
                non quisquam praesentium assumenda repellat dignissimos, velit animi sunt dicta dolorem commodi! Dolorum
                dolorem consequuntur at ea quae expedita voluptas praesentium velit aperiam minus officia architecto
                ullam animi nihil alias, recusandae, cumque atque accusantium quisquam deleniti, laborum ut tenetur!
                Optio quos nostrum aliquid quae consequuntur a at, delectus nesciunt tenetur enim impedit, temporibus
                unde omnis velit reprehenderit nihil odit deserunt quas sint corporis provident similique. Veniam ex at
                sapiente doloribus, ab quis. Praesentium omnis corporis repellendus quibusdam numquam ut commodi
                doloremque sequi molestias laudantium, ab rem, quam ad, quis in totam asperiores nisi quos voluptates.
                Ipsum vitae quos quaerat! Iure dignissimos adipisci magnam porro quisquam vitae saepe eos ullam neque,
                animi veritatis dolore! Odio, veritatis magni commodi deserunt cumque mollitia minus esse.
            </main>
            <Footer selectedTab={currentTab} setSelectedTab={setCurrentTab} />
        </>
    );
};

export default HomeLayout;
