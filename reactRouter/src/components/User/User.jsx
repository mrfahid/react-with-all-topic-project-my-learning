
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className=" text-center mx-auto bg-blue-950 text-white p-3 font-bold text-lg">
      User: {userid}
    </div>
  );
}

export default User;
