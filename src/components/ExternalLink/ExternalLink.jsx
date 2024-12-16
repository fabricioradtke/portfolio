import PropTypes from "prop-types";
import Image from "next/image";

const ExternalLink = ({ href, text }) => {
  return (
    <a
      href={href}
      className="hover:underline flex items-center"
      target="_blank"
      rel="noreferrer"
    >
      {text}
      <div className="ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-external-link">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
          <path d="M11 13l9 -9" />
          <path d="M15 4h5v5" />
        </svg>
      </div>
    </a>
  );
};

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExternalLink;
