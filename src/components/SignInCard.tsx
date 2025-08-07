
const SignInCard = () => {
  return (
    <form onSubmit={()=>{}} className="twflex flex-col bg-blue-100 border border-blue-200 size-72 md:size-96 rounded-xl relative">
      <h1 className="absolute top-10 text-2xl text-blue-500">
        Sign In to Better Auth
      </h1>
      <label htmlFor="name" className="text-blue-400 mt-10">
        Name
      </label>
      <input
        className="w-[80%] p-4 mb-4 h-10 bg-blue-200 rounded-sm placeholder:text-md placeholder:text-blue-50 focus:outline-none border border-blue-200 focus:border-blue-400"
        placeholder="Type your name"
        type="text"
        required
      />
      <label htmlFor="password" className="text-blue-400">
        Password
      </label>
      <input
        className="w-[80%] p-4 mb-4 h-10 bg-blue-200 rounded-sm placeholder:text-md placeholder:text-blue-50 focus:outline-none border border-blue-200 focus:border-blue-400"
        placeholder="Type your password"
        type="password"
        required
      />

      <button type="submit" className="mt-5 bg-blue-500 h-8 w-15 rounded-sm text-blue-50">Submit</button>
    </form>
  );
}

export default SignInCard