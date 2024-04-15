import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../components/provider/AuthProvider";
import { useContext } from "react";

const Houses = ({ house }) => {

    const { user } = useContext(AuthContext);



    const { estate_title, segment_name, image, price, status, area, facilities } = house
    return (
        <>
            <div className=" hover:transform hover:translate-x-2 hover:translate-y-2 card h-[500px] w-[384px] shadow-2xl hover:shadow-2xl bg-slate-200">
                <img className="w-[384px] h-[200px] p-4 rounded-2xl" src={image} alt="Shoes" />
                <div className="card-body w-[380px] h-[100px]">
                    <div className="flex my-1">
                        <div className="badge badge-accent mt-1">{segment_name}</div>
                        <div className=" absolute right-8">
                            <h1 className="font-medium">Area: <span className="text-green-800 font-semibold">{area}</span></h1>
                        </div>
                    </div>
                    <h2 className="card-title w-[320px] h-[20px]">
                        {estate_title}
                    </h2>
                    <div className="flex my-2 gap-3">
                        <div className="badge badge-info ">{facilities[0]}</div>
                        <div className="badge badge-info ">{facilities[1]}</div>
                    </div>
                    <div className="badge badge-info ">{facilities[2]}</div>
                    <div className="flex my-1">
                        <h2 className="card-title font-medium">
                            Price: <span className="font-bold text-amber-500">{price}</span>
                        </h2>
                        <div className="flex absolute right-8">
                            <div className="badge badge-warning mt-1">{status}</div>
                        </div>
                    </div>
                    <hr
                        style={{
                            background: 'lime',
                            color: 'lime',
                            borderColor: 'lime',
                            height: '2px',
                        }} />
                        {
                            user ?
                            <NavLink to="/details"className="btn my-2 btn-active btn-primary">View Details</NavLink>
                            :
                            <NavLink to="/login" className="btn my-2 btn-active btn-primary">View Details</NavLink>
                        }
                </div>

            </div>
        </>
    );
};

Houses.propTypes = {
    house: PropTypes.array.isRequired
};

export default Houses;