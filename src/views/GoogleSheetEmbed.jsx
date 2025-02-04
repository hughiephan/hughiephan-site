import React from "react";

const GoogleSheetEmbed = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <iframe
          width="100%"
          height="100%"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqkk3x0GHjWBNHRR3y09XamO5PckIsi6vhbM4LGXoxa2o02O6FSED27gL2ZWCYw431g_qKn4OdBZt8/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
          className="border-none"
          title="Google Spreadsheet"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleSheetEmbed;
