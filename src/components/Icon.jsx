function Icon({ name, className = "w-5 h-5", strokeWidth = 1.75 }) {
  switch (name) {
    case "home":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5"
          />
        </svg>
      );
    case "map":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 20l-6-3V4l6 3 6-3 6 3v13l-6-3-6 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 7v13M15 4v13"
          />
        </svg>
      );
    case "cart":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h2l2.4 10.8a2 2 0 0 0 2 1.6H17a2 2 0 0 0 2-1.6L21 8H7"
          />
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="17" cy="20" r="1.5" />
        </svg>
      );
    case "user":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm7 8a7 7 0 0 0-14 0"
          />
        </svg>
      );
    case "pin":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z"
          />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "star":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.9 6.8 19.8l1-5.9-4.3-4.2 5.9-.9z" />
        </svg>
      );
    case "clock":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v5l3 2" />
        </svg>
      );
    case "users":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm10 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 20a5 5 0 0 1 10 0m0 0a5 5 0 0 1 10 0"
          />
        </svg>
      );
    case "check":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 20l-4-4" />
        </svg>
      );
    case "close":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6l12 12M18 6l-12 12"
          />
        </svg>
      );
    case "money":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "shield":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z"
          />
        </svg>
      );
    case "bolt":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
        </svg>
      );
    case "target":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "bag":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 7h12l-1 13H7L6 7z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 7a3 3 0 0 1 6 0"
          />
        </svg>
      );
    case "plus":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14M5 12h14"
          />
        </svg>
      );
    case "minus":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      );
    case "trash":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 7h14M9 7V5h6v2M8 7l1 12h6l1-12"
          />
        </svg>
      );
    case "credit-card":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
        </svg>
      );
    case "bank":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M5 10v8m4-8v8m4-8v8m4-8v8M4 18h16"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 10l8-4 8 4"
          />
        </svg>
      );
    case "wallet":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h3" />
        </svg>
      );
    case "info":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6" />
          <circle cx="12" cy="7" r="1" fill="currentColor" />
        </svg>
      );
    case "lock":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 11V8a4 4 0 1 1 8 0v3"
          />
        </svg>
      );
    case "sparkles":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6z" />
          <path d="M19 13l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9z" />
        </svg>
      );
    case "calendar":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 3v4M17 3v4M3 9h18"
          />
        </svg>
      );
    case "mail":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
        </svg>
      );
    case "phone":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 4l3 1 2 5-2 1a12 12 0 0 0 6 6l1-2 5 2 1 3a2 2 0 0 1-2 2C10 22 2 14 2 6a2 2 0 0 1 3-2z"
          />
        </svg>
      );
    case "location":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z"
          />
        </svg>
      );
    case "globe":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h18M12 3c3.5 4 3.5 14 0 18M12 3c-3.5 4-3.5 14 0 18"
          />
        </svg>
      );
    case "landmark":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 10h16M5 10v8m4-8v8m4-8v8m4-8v8M4 18h16"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 10l8-4 8 4"
          />
        </svg>
      );
    case "sun":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          />
        </svg>
      );
    case "leaf":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 4c-9 0-13 5-13 10a7 7 0 0 0 7 7c5 0 10-4 10-13-2 1-3 2-4 3"
          />
        </svg>
      );
    case "gift":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18v4H3z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14v8H5z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v14" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6a2 2 0 0 1-4 0c0-1.1.9-2 2-2 2 0 2 2 2 2zm6 0a2 2 0 0 0 4 0c0-1.1-.9-2-2-2-2 0-2 2-2 2z"
          />
        </svg>
      );
    case "crown":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7l4 4 5-6 5 6 4-4-2 10H5L3 7z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14" />
        </svg>
      );
    case "heart":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 21s-7-4.4-9.2-8.6C1 9.2 2.5 6 5.8 6c2 0 3.4 1.2 4.2 2.6C10.8 7.2 12.2 6 14.2 6c3.3 0 4.8 3.2 3 6.4C19 16.6 12 21 12 21z" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M13.5 9H16V6h-2.5C11.6 6 10 7.4 10 9.3V12H8v3h2v6h3v-6h2.2l.3-3H13v-2c0-.6.5-1 1.1-1z" />
        </svg>
      );
    case "x":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M4 4h4.3l4 5.7L16.9 4H20l-6 8.1L20 20h-4.3l-4.2-6.1L7 20H4l6.4-8.6z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M6.5 9H4v11h2.5zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 14.2c0-3-1.7-4.4-4-4.4-1.8 0-2.7 1-3.1 1.7V9H10.4v11h2.6v-5.5c0-1.4.9-2.3 2.1-2.3 1.2 0 2 1 2 2.5V20H20z" />
        </svg>
      );
    case "spinner":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={className}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4a8 8 0 0 1 8 8"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default Icon;
