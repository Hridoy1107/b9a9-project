import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Details = () => {

    const houses = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const house = houses.find(house => house.id === idInt);

    return (
        <>
        <div className="w-[1216px] rounded-2xl h-[400px] mt-10 bg-[#1313130D]">
                <div className="flex">
                    <div>
                        <img className="ml-12 my-12 absolute w-[576px] h-[300px] rounded-2xl" src={house.image} alt="" />
                    </div>
                    <div className="w-[500px] h-[300px] my-12 absolute card ml-[700px]">
                    <div className="flex my-1">
                        <div className="badge badge-accent mt-1">{house.segment_name}</div>
                        <div className=" absolute right-8">
                            <h1 className="font-medium">Area: <span className="text-green-800 font-semibold">{house.area}</span></h1>
                        </div>
                    </div>
                    <h2 className="card-title text-2xl w-[520px] h-[60px]">
                        {house.estate_title}
                    </h2>
                    <div className="flex my-2 gap-3">
                        <div className="badge badge-info ">{house.facilities[0]}</div>
                        <div className="badge badge-info ">{house.facilities[1]}</div>
                        <div className="badge badge-info ">{house.facilities[2]}</div>
                    </div>
                    <div>
                    <h1 className="card-title text-2xl font-normal w-[520px] h-[60px]"><FaLocationDot />{house.location}</h1>
                    </div>
                    <div>
                    <h1 className="card-title text-xl font-normal w-[490px] text-left h-[60px]">{house.description}</h1>
                    </div>
                    <div className="flex my-2">
                        <h2 className="card-title font-medium">
                            Price: <span className="font-bold text-amber-500">{house.price}</span>
                        </h2>
                        <div className="flex absolute right-8">
                            <div className="badge badge-warning mt-1">{house.status}</div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </>
    );
};

export default Details;