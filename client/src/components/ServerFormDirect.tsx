const ServerFormDirect = () => {
  return (
    <form className="flex flex-col gap-2 w-full md:w-1/4 p-4 bg-gray-100">
      <div>
        <p className="text-center text-xl font-semibold">
          Server Form - Direct
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="setup">Setup</label>
        <input className="px-2 py-1" type="text" id="setup" name="setup" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="punchline">Punchline</label>
        <input
          className="px-2 py-1"
          type="text"
          id="punchline"
          name="punchline"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="type">Type</label>
        <select className="px-4 py-2" id="type" name="type">
          <option value="general">General</option>
          <option value="nsfw">NSFW</option>
        </select>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-200 hover:bg-blue-400 hover:text-white rounded transition-colors duration-300"
        type="submit"
      >
        Tambah Bercandaan
      </button>
    </form>
  );
};

export default ServerFormDirect;
