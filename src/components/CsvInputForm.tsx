import React, { useRef, useState } from "react";
import classNames from "classnames";

function CsvInputForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [csvFile, setCsvFile] = useState<File>();
  const handleInputFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files ? event.target.files[0] : undefined;
    setCsvFile(file);
  };
  const handleFileUpload = () => {
    inputRef.current?.click();
  };
  return (
    <form className={classNames("e-input-group", "e-flex")}>
      <div className="e-csv-file">
        <div className="e-import-button">
          <button type={"button"} onClick={handleFileUpload}>
            csvを選択
          </button>
          <input
            hidden
            ref={inputRef}
            type="file"
            accept="text/csv"
            onChange={handleInputFileChange}
          />
        </div>
      </div>
      {csvFile && (
        <>
          <div className="e-input-file-name">{csvFile.name}</div>
          <div className="e-upload-button">
            <button type="button">読み込む</button>
          </div>
        </>
      )}
    </form>
  );
}

export default CsvInputForm;
