import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function PortalLogin() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");

  const sendlogin = (e) => {
    e.preventDefault();

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (newAttempts >= 3) {
      setMessage("Please contact administration for help.");
    } else {
      setMessage("Wrong student number and password combination.");
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-md">
        
        <h1 className="text-2xl font-bold mb-6 text-center">
          Student Login
        </h1>

        <form onSubmit={sendlogin} className="flex flex-col gap-4">

          {/* Student ID */}
          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-blue-500
              transition
              duration-300
              text-sm
              sm:text-base
            "
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                border
                rounded-xl
                px-4
                py-3
                pr-12
                w-full
                outline-none
                focus:ring-2
                focus:ring-blue-500
                transition
                duration-300
                text-sm
                sm:text-base
              "
              required
            />

            <button
              type="button"
              onPointerDown={() => setShowPassword(true)}
              onPointerUp={() => setShowPassword(false)}
              onPointerLeave={() => setShowPassword(false)}
              onPointerCancel={() => setShowPassword(false)}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-gray-500
                hover:text-gray-800
                cursor-pointer
                flex
                items-center
                justify-center
              "
              aria-label="Hold to show password"
            >
              {showPassword ? (
                <VisibilityOffIcon fontSize="small" />
              ) : (
                <VisibilityIcon fontSize="small" />
              )}
            </button>
          </div>

          {/* Login Message */}
          {message && (
            <div
              className="
                text-red-500
                bg-red-50
                border
                border-red-200
                rounded-lg
                px-3
                py-2
                text-sm
                text-center
              "
            >
              {message}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="
              text-white
              rounded-xl
              py-3
              bg-gradient-to-r
              from-blue-500
              to-teal-400
              shadow-md
              hover:from-blue-500
              hover:to-blue-500
              transition
              duration-300
              text-base
              sm:text-lg
              font-semibold
              transform
              hover:scale-105
            "
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default PortalLogin;