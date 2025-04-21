"use client";

import { useState } from "react";
import { useLanguageContext } from "../contexts/LanguageContext";

type DownloadCVProps = {
  className?: string;
};

type DownloadError = {
  title: string;
  message: string;
  severity: "warning" | "error";
};

export const CvDownloadButton: React.FC<DownloadCVProps> = ({
  className = "",
}) => {
  const { t, language } = useLanguageContext();

  const [error, setError] = useState<DownloadError | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const triggerDownload = async (response: Response, filename: string) => {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsDownloading(true);
    setError(null);

    const cvUrl = `/cv/${language}/cv.pdf`;
    const fileName = `${process.env.NEXT_PUBLIC_NAME}-${process.env.NEXT_PUBLIC_LAST_NAME}-CV.pdf`;

    try {
      const response = await fetch(cvUrl);
      if (response.ok) {
        await triggerDownload(response, fileName);
      }
    } catch (err) {
      setError({
        title: t.downloadFailed,
        message: t.cvDlError,
        severity: "error",
      });
      console.error("CV download error:", err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className={`flex flex-col gap-2 text-center ${className}`}>
      <a
        href={`/cv/${language}/cv.pdf`}
        onClick={handleDownload}
        className={`px-8 py-3 bg-indigo-500 text-white rounded-full font-semibold text-base shadow hover:bg-indigo-600 transition
          ${
            isDownloading
              ? "bg-gray-300 text-gray-600 cursor-progress"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }
        `}
        aria-busy={isDownloading}
      >
        {isDownloading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {t.preparing + "..."}
          </>
        ) : (
          t.downloadCv
        )}
      </a>

      {error && (
        <div
          className={`
          relative p-4 pr-10 rounded-md border-l-4 text-left
          ${
            error.severity === "warning"
              ? "bg-amber-50 border-amber-400 text-amber-800"
              : "bg-red-50 border-red-400 text-red-800"
          }
        `}
        >
          <button
            onClick={() => setError(null)}
            className={`absolute top-3 right-3 p-1 rounded-full focus:outline-none transition-colors ${
              error.severity === "warning"
                ? "hover:bg-amber-100"
                : "hover:bg-red-100"
            }`}
            aria-label="Close message"
          >
            <i
              className={`fa-solid fa-times h-4 w-4 ${
                error.severity === "warning" ? "text-amber-600" : "text-red-600"
              }`}
            ></i>
          </button>
          <h4 className="font-bold mb-1 pr-4">{error.title}</h4>
          <p className="text-sm pr-4">{error.message}</p>
        </div>
      )}
    </div>
  );
};
