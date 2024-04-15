

const About = () => {
    return (
        <>
            <h1 className="font-semibold text-3xl text-red-600">About Us</h1>
            <p className="text-xl font-medium ">Hi, My name is Apple Mahmud Hridoy. I am the developer of this website. I develope this for you to find your residential houses.</p>
            <div className="avatar mt-2">
                <div className="w-32 rounded-full">
                    <img src="https://i.ibb.co/PQgtbWm/sergio-de-paula-c-Gmwf-HBDzk-unsplash.jpg" />
                </div>
            </div>
            <div className="mt-3 h-[330px]">
                <h1 className="font-semibold text-4xl my-2 text-green-600">Query</h1>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        How to register
                    </div>
                    <div className="collapse-content">
                        <p>You can register with your email</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How to login
                    </div>
                    <div className="collapse-content">
                        <p>You can login after register</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How to see detail
                    </div>
                    <div className="collapse-content">
                        <p>By clicking on the show details button</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How to update information
                    </div>
                    <div className="collapse-content">
                        <p>By going to update profile</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;