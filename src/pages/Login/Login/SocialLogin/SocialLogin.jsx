import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div className="divider divider-accent">Or</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline "><FaGoogle /></button>
            </div>
        </div>
    );
};

export default SocialLogin;