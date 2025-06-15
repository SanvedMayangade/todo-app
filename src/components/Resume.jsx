// DownloadResume.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadResume = () => {
  return (
    <a
      href="/Sanved_mayangade_resume.pdf"
      download
      className="text-black hover:text-blue-600 text-lg flex items-center gap-2"
    >
      <FontAwesomeIcon icon={faDownload} />
      Download Resume
    </a>
  );
};

export default DownloadResume;
