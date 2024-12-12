import PropTypes from "prop-types";
import Image from "next/image";

const Link = ({ href, text }) => {
  return (
    <a 
        href={href}
        className="hover:underline flex items-center" 
        target="_blank" 
        rel="noreferrer"
    >
      {text}
      <Image
        src="/img/external-link.png" 
        alt="->" 
        className="ml-2" 
        width={12} 
        height={12} 
      />
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
