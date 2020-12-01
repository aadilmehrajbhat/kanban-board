function Header() {
  return (
    <div className="border-b-2 border-gray-200">
      <header className="px-6">
        <div className="py-3 flex justify-between items-center border-b border-gray-300">
          <div class="flex-1">
            <div class="relative max-w-xs">
              <span class="pl-3 absolute inset-y-0 flex items-center">
                <svg
                  class="h-6 w-6 text-gray-600"
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
        <div></div>
      </header>
    </div>
  );
}

export default Header;
