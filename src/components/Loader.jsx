import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-transparent">
      <div className="w-12 h-12 border-4 border-mint-400 dark:border-mint-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
