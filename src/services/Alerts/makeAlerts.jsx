import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Alert(message, icon) {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: <strong>{message}</strong>,
    icon: { icon },
  });
}
