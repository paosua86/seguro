import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function LanguageSelector(props) {
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");

  const handleSelect = (eventKey) => {
    setSelectedLanguage(eventKey);
    props.onLanguageSelected(eventKey);
  };

  return (
    <DropdownButton title={selectedLanguage} onSelect={handleSelect} className="w-full flex-col">
      <Dropdown.Item eventKey="JavaScript">JavaScript</Dropdown.Item>
      <Dropdown.Item eventKey="Python">Python</Dropdown.Item>
      <Dropdown.Item eventKey="Java">Java</Dropdown.Item>
    </DropdownButton>
  );
}

export default LanguageSelector;
