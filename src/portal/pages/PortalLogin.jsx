function PortalLogin() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Student Login</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Student ID"
            className="border rounded-xl px-4 py-3 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-xl px-4 py-3 outline-none"
          />
          <button className="bg-blue-600 text-white rounded-xl py-3 font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default PortalLogin