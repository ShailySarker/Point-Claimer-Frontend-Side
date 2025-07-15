import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
const dataOfFAQs = [
    {
        id: 1,
        question: 'How do I add a new user?',
        answer: 'Kindly click the “Add New User” button, enter a name in the popup modal, and hit Submit. The new user will appear instantly in the leaderboard and can start earning points.',
    },
    {
        id: 2,
        question: 'How are points claimed?',
        answer: 'Kindly click “Claim Points” on any user card. This triggers the backend to award a random amount (between 1–10 points), updates their total, and logs the claim in the history section.',
    },
    {
        id: 3,
        question: 'Where can I see the ranking order?',
        answer: "The Leaderboard section displays all users sorted by total points, highest first. It updates in real-time after each claim so you can watch the order shift immediately."
    },
    {
        id: 4,
        question: 'Can I view every claim made?',
        answer: 'Yes! The Claim History list shows each claim with the user’s name, the points awarded, and the timestamp. This offers full transparency on all point transactions.',
    },
    {
        id: 5,
        question: 'How many users can I add and claim for?',
        answer: "You can add unlimited users. While the homepage shows your current users, pagination loads 10 per page—so you can scale without performance issues.",
    },
];

interface IFAQ {
    id: number,
    question: string,
    answer: string
}
const FaqItem = (faq: IFAQ) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-2 rounded-xl border-amber-700 shadow-lg">
            <button
                className="flex items-center justify-between w-full xl:p-5 lg:p-4 md:p-5 px-3 py-4 text-left focus:outline-none"
                onClick={toggleAccordion}>
                <span className="w-[93%] xl:text-xl lg:text-lg md:text-base text-[15px] font-semibold"><span className="font-bold text-black">Question 0{faq?.id}: </span>{faq?.question}</span>
                <span className='w-[5%] flex justify-end'>
                    {
                        isOpen ? <FaAngleUp /> : <FaAngleDown />
                    }
                </span>
            </button>
            {isOpen && (
                <div className="xl:p-5 lg:p-4 md:p-5 px-3 py-4 bg-amber-100 rounded-b-xl">
                    <p className="text-black xl:text-xl lg:text-lg md:text-base text-[15px] font-medium">
                        <span className="font-bold border-b-2 border-black">Answer:</span> {faq?.answer}</p>
                </div>
            )}
        </div>
    );
};


const FAQ = () => {
    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10 xl:mb-24 lg:mb-20 md:mb-16 mb-14">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Frequently Asked Questions</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl lg:text-lg md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">Explore our frequently asked questions for comprehensive information!</p>
            </div>
            <div className="lg:mt-12 md:mt-10 mt-8 flex flex-col gap-3 ">
                {
                    dataOfFAQs?.map((faq) => (
                        <FaqItem key={faq?.id} question={faq?.question} answer={faq?.answer} id={faq?.id} />
                    ))}
            </div>
        </div>
    );
};

export default FAQ;