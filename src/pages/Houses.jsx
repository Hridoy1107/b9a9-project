import PropTypes from 'prop-types';

const Houses = ({house}) => {

    const { estate_title, segment_name, image, price, status, area } = house
    return (
        <>
        <div className=" hover:transform hover:translate-x-2 hover:translate-y-2 card h-[810px] w-[384px] bg-base-100 shadow-2xl hover:shadow-2xl">
                <img className="w-[320px] h-[550px]" src={image} alt="Shoes" />
                <div className="card-body w-[320px] h-[156px]">
                    <div className="flex gap-3">
                        <h1>{area}</h1>
                    </div>
                    <h2 className="card-title">
                        {estate_title}
                    </h2>
                    <h2 className="card-title font-normal">
                        By: {segment_name}
                    </h2>
                </div>
                <hr />
                <div className="card-body w-[320px] h-[92px]">
                    <div className="flex justify-between">
                        <h2 className="card-title font-medium text-xl">
                            {price}
                        </h2>
                        <h2 className="card-title font-normal text-xl">
                            {status}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

Houses.propTypes = {
    house: PropTypes.array.isRequired
};

export default Houses;