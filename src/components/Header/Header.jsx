function Header() {
  return (
    <div className="border-b-2 border-gray-200">
      <header className="px-6">
        <div className="py-3 flex justify-between items-center">
          <div className="flex-1">
            <div className="relative max-w-xs">
              <span className="pl-3 absolute inset-y-0 flex items-center">
                <svg
                  className="h-6 w-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                class="block w-full py-2 pl-10 pr-3 text-sm rounded-md border border-gray-200 text-gray-900 placeholder-gray-3600"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex items-center">
            <button>
              <svg
                className="h-6 w-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button class="ml-6">
              <img
                class="h-9 w-9 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                alt="Your profile"
              />
            </button>
          </div>
        </div>
        <div className="py-2 flex justify-between">
          <div className="flex items-center">
            <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
              All Issues
            </h3>
            <div className="flex ml-6">
              <span className="rounded border-2 border-white">
                <img
                  className="h-6 w-6 rounded-full object-cover"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.3&w=144&h=144&q=80"
                  alt=""
                />
              </span>
              <span className="-ml-2 rounded-full border-2 border-white">
                <img
                  className="h-6 w-6 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=144&h=144&q=80"
                  alt=""
                />
              </span>
              <span className="-ml-2 rounded-full border-2 border-white">
                <img
                  className="h-6 w-6 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
                  alt="Your profile"
                />
              </span>
              <span className="-ml-2 rounded-full border-2 border-white">
                <img
                  className="h-6 w-6 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=144&h=144&q=80"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div class="flex">
            <span class="p-1 inline-flex border bg-gray-200 rounded">
              <button class="px-2 py-1">
                <svg
                  className="h-6 w-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <button class="px-2 py-1 bg-white rounded shadow">
                <svg
                  class="h-6 w-6 text-gray-600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    d="M12.933 3.555v18m0-18h7a2 2 0 012 2v14a2 2 0 01-2 2h-7v-18zm0 0h-7a2 2 0 00-2 2v14a2 2 0 002 2h7v-18z"
                  ></path>
                </svg>
              </button>
            </span>

            <button className="ml-5 pl-2 pr-4 py-2 flex items-center text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="ml-1">New Issue</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
