type IconProps = { className?: string };

export const BoneIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="24" r="6"></circle>
    <circle cx="36" cy="24" r="6"></circle>
    <rect x="16" y="20" width="16" height="8" rx="4"></rect>
  </svg>
);

export const SpineIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="24" y1="8" x2="24" y2="40"></line>
    <circle cx="24" cy="12" r="4"></circle>
    <circle cx="24" cy="24" r="4"></circle>
    <circle cx="24" cy="36" r="4"></circle>
  </svg>
);

export const JointIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="16" cy="24" r="6"></circle>
    <circle cx="32" cy="24" r="6"></circle>
    <line x1="22" y1="24" x2="26" y2="24"></line>
  </svg>
);

export const SportsIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="24" cy="24" r="10"></circle>
    <path d="M14 24h20"></path>
    <path d="M24 14c-3 2-5 5-5 10"></path>
    <path d="M24 14c3 2 5 5 5 10"></path>
  </svg>
);

export const WhatsappIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 12.2c0-4.1 3.4-7.4 7.5-7.4s7.5 3.3 7.5 7.4-3.4 7.4-7.5 7.4c-1 0-2-.2-2.9-.6L5 20l1.1-3.1c-1.1-1.2-1.6-2.7-1.6-4.7z"></path>
    <path d="M9 10.5c.4 1.2 1.4 2.2 2.6 2.8l1.1-.9c.2-.2.4-.2.6-.1l1 .4c.3.1.4.4.4.7-.1.8-.8 1.3-1.7 1.3-2.5 0-4.5-2-4.5-4.5 0-.9.5-1.5 1.3-1.7.3-.1.6.1.7.4l.4 1c.1.2 0 .5-.1.6l-1 .8z"></path>
  </svg>
);
