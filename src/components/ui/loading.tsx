import React from "react";

export const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-gray-200">
        <span className="text-sm text-gray-700">Loading...</span>
      </div>
    </div>
  );
};
