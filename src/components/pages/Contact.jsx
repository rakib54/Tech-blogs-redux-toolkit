export default function Contact() {
  return (
    <div>
      <form className="flex items-center space-x-6">
        <div className="shrink-0">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src=""
            alt="Profile pic"
          />
        </div>
        <label>
          <span>choose profile photo</span>

          <input
            type="file"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
          />
        </label>
      </form>
    </div>
  );
}
