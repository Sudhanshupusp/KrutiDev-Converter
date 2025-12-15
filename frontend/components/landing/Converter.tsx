"use client";

import { useState } from "react";
import { Upload, FileText, Download, CheckCircle, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import Section from "../ui/Section";

export default function Converter() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            setDownloadUrl(null);
            setError(null);
        }
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
            setDownloadUrl(null);
            setError(null);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setError("Please select a file first");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        setDownloadUrl(null);
        setError(null);

        try {
            // Hardcoded API URL for local development
            const apiUrl = "https://krutidev-converter.onrender.com/convert";
            console.log('Calling API:', apiUrl);

            const response = await fetch(apiUrl, {
                method: "POST",
                body: formData,
            });

            console.log('Response status:', response.status);

            if (!response.ok) throw new Error("Upload failed");

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            setDownloadUrl(url);
        } catch (err) {
            console.error('Conversion error:', err);
            setError("Failed to convert file. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section id="converter" className="relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    Ready to <span className="text-saffron">Convert?</span>
                </h2>
                <p className="text-silver max-w-2xl mx-auto">
                    Upload your Mangal (Unicode) DOCX file and get the Kruti Dev version instantly.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-charcoal/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-saffron/5 to-transparent pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-silver uppercase tracking-wider">Input File</label>
                            <span className="text-xs text-white/40">.docx only</span>
                        </div>

                        <div
                            className={`relative h-64 border-2 border-dashed rounded-2xl transition-all duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer group
                ${dragActive ? "border-saffron bg-saffron/5" : "border-white/10 hover:border-white/20 hover:bg-white/5"}
                ${file ? "border-teal/50 bg-teal/5" : ""}
              `}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            onClick={() => document.getElementById("file-upload")?.click()}
                        >
                            <input
                                id="file-upload"
                                type="file"
                                accept=".docx"
                                className="hidden"
                                onChange={handleFileChange}
                            />

                            <AnimatePresence mode="wait">
                                {file ? (
                                    <motion.div
                                        key="file"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center gap-4"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-teal/20 flex items-center justify-center text-teal shadow-lg shadow-teal/10">
                                            <FileText className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium truncate max-w-[200px]">{file.name}</p>
                                            <p className="text-sm text-silver">{(file.size / 1024).toFixed(1)} KB</p>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setFile(null);
                                                setDownloadUrl(null);
                                            }}
                                            className="text-xs text-red-400 hover:text-red-300 underline"
                                        >
                                            Remove
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="upload"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center gap-4"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-silver group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/10 group-hover:text-white">
                                            <Upload className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Click to upload</p>
                                            <p className="text-sm text-silver">or drag and drop</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <div className="hidden md:flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <ArrowRight className="text-silver" />
                            </div>
                        </div>

                        <Button
                            onClick={handleUpload}
                            disabled={loading || !file}
                            className="w-full h-14 text-lg"
                            variant={file ? "primary" : "secondary"}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" /> Converting...
                                </>
                            ) : (
                                <>
                                    <RefreshCw className="w-5 h-5" /> Convert Document
                                </>
                            )}
                        </Button>

                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                                >
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    <span>{error}</span>
                                </motion.div>
                            )}

                            {downloadUrl && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="space-y-3"
                                >
                                    <div className="p-4 rounded-xl bg-teal/10 border border-teal/20 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-teal shrink-0">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-white font-medium text-sm">Conversion Complete</p>
                                            <p className="text-teal text-xs">Ready for download</p>
                                        </div>
                                    </div>

                                    <a
                                        href={downloadUrl}
                                        download={`converted_${file?.name || "document"}.docx`}
                                        className="block"
                                    >
                                        <Button variant="primary" className="w-full bg-teal hover:bg-teal/80 shadow-teal/20">
                                            <Download className="w-4 h-4" /> Download File
                                        </Button>
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Section>
    );
}

function ArrowRight({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
