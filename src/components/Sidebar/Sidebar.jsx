import { useState } from 'react';
import AppLogo from '../../assets/app-logo.svg';

const ISSUES = [
  {
    label: 'All',
    count: 36,
    link: '#all-issues',
  },
  {
    label: 'Assigned to me',
    count: 2,
    link: '#assigned-to-me',
  },
  {
    label: 'Created by me',
    count: 1,
    link: '#created-by-me',
  },
  {
    label: 'Archived',
    count: 0,
    link: '#archived',
  },
];

const TAGS = [
  {
    label: 'Bug',
    count: 0,
    link: '#bug',
  },
  {
    label: 'Feature Request',
    count: 2,
    link: '#feature-request',
  },
  {
    label: 'Marketing',
    count: 1,
    link: '#marketing',
  },
  {
    label: 'v2.0',
    count: 0,
    link: '#v2.0',
  },
  {
    label: 'Enhancement',
    count: 1,
    link: '#enhancement',
  },
  {
    label: 'Design',
    count: 1,
    link: '#design',
  },
];

function Sidebar() {
  const [selectedIssue] = useState(0);

  return (
    <div className="px-8 py-4 w-64 bg-gray-100 border-r">
      <img className="h-12 w-12" src={AppLogo} alt="" />
      <nav className="mt-8 ">
        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
          Issues
        </h3>
        <div className="mt-2 -mx-3">
          {ISSUES.map(({ label, count = 0, link }, index) => (
            <a
              href={link}
              className={`px-3 py-2 flex justify-between items-center rounded-lg ${
                selectedIssue === index ? 'bg-gray-200 ' : ''
              }`}
              key={label}
            >
              <span
                className={`text-sm font-medium ${
                  selectedIssue === index ? 'text-gray-900' : 'text-gray-700'
                }`}
              >
                {label}
              </span>
              {count ? (
                <span className="text-xs font-semibold text-gray-700">
                  {count}
                </span>
              ) : null}
            </a>
          ))}
        </div>

        <h3 className="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">
          Tags
        </h3>
        <div className="mt-2 -mx-3">
          {TAGS.map(({ label, link }) => (
            <a
              href={link}
              className="px-3 py-2 flex justify-between items-center rounded-lg"
              key={link}
            >
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </a>
          ))}
        </div>
        <button className="mt-2 -ml-1 flex text-sm font-medium text-gray-600">
          <svg
            className="h-5 w-5 text-gray-500"
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
          <span className="ml-1">New Project</span>
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
