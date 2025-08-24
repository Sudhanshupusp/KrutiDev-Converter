"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setDownloadUrl(null); // reset
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setDownloadUrl(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/convert`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Upload failed");

      // Convert response to a Blob (binary file)
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      console.error(err);
      alert("Error uploading file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent p-6 relative">
      {/* Video background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/test_2_landing_page_desk_view.mkv" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navbar */}
      <nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 
  bg-white/5 backdrop-blur-xs border border-white/5 
  rounded-full px-6 py-3 md:px-12 shadow-lg z-10 
  flex items-center justify-between w-auto space-x-8"
      >
        {/* Links Section */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-white hover:text-yellow-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-yellow-300">
            About
          </a>
          <a href="#" className="text-white hover:text-yellow-300">
            Contact
          </a>
        </div>
      </nav>

      {/* Tagline text */}
      <div className="mb-6 text-center px-4">
        <h2 className="text-2xl md:text-6xl font-bold text-transparent bg-clip-text bg-white/50 drop-shadow-lg overflow-hidden">
          Convert your document from{" "}
          <span className="text-yellow-300">Mangal </span>
          to <span className="text-yellow-300">Kruti Dev</span> in one click
        </h2>
      </div>

      {/* Card overlay */}
      <div className="bg-white/5 backdrop-blur-xs shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Mangal ➝ Kruti Dev Converter
        </h1>

        <input
          type="file"
          accept=".docx"
          onChange={handleFileChange}
          className="mb-4 w-full text-white border-none rounded-2xl bg-white/10 px-4 py-4"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          {loading ? "Converting..." : "Upload & Convert"}
        </button>
        <div className="flex justify-center mt-2">
          {downloadUrl && (
            <a
              href={downloadUrl}
              download="converted.docx"
              className="inline-block px-4 py-2 mt-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md  hover:bg-green-700 transition"
            >
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
