/* eslint-disable no-unused-vars */


const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 mt-6">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <p className="text-[30px] uppercase border-y-2 py-2">{heading}</p>
        </div>
    );
};

export default SectionTitle;