import { AuthContext } from "../../components/provider/AuthProvider";
import { useContext } from "react";

const Update = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className="flex justify-around">
                <div>
                    <div className="mt-10">
                        <div className="avatar">
                            <div className="w-60 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium text-4xl">Name: <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-sky-700 to-red-400 font-semibold text-4xl">{user.displayName}</span></h1>
                        <h1 className="font-medium text-4xl">Email: <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-violet-700 to-red-400 font-semibold text-4xl">{user.email}</span></h1>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="mt-16 w-full">
                            <h2 className="text-3xl text-center font-semibold text-blue-600">Update information</h2>
                            <form >
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input className="mb-4 w-full  py-2 px-4" type="text" name="name" placeholder="Your Name" id="Name" required />
                                <br />
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input className="mb-4 w-full  py-2 px-4" type="text" required id="Photo" name="photo" placeholder="Photo URL" />
                                <br />
                                <input className="btn btn-primary mb-4 w-full" type="submit" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Update;