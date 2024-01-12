import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="mx-auto px-7 flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">MERN Hotel Booking</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-200"
            to="/sign-in"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
