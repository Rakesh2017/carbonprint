import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = (message, value) => {
    toast.error(message, {
        position: "top-right",
        autoClose: value,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}

export default Toaster;
