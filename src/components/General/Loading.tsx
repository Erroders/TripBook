import { RefreshIcon } from '@heroicons/react/outline';

const Loading = () => {
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center">
            <div>
                <RefreshIcon className="h-14 w-14 animate-spin" />
                <p className="mt-7 font-semibold">Loading....</p>
            </div>
        </div>
    );
};

export default Loading;
