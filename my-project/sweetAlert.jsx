import Swal from "sweetalert2";

const SweetNotify = {
    success: (message ="Appointment booked successfully!") => {
        Swal.fire({
            toast: true,
            position: "top",
            icon: "success",
            title: "Saved successfully",
            showConfirmButton: false,
            text: message,
            timer: 2000,
        });
    },

    error: (message = "Something went wrong!") => {
        Swal.fire({
            toast: true,
            icon: "error",
            position: "top",
            title: "Oops!",
            text: message,
            timer: 2000,
        });
    },

    warning: (message = "Please be careful!") => {
        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: message,
            confirmButtonColor: "#f59e0b",
        });
    },
};

export default SweetNotify;
