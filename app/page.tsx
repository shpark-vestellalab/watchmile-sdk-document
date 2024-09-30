"use client";
import React, { useState } from "react";
import Image from "next/image";
import contactsData from "../data/contacts.json";

const DownloadIcon = () => (
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
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const DocumentIcon = () => (
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
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const CodeIcon = () => (
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
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

interface SDKCardProps {
  platform: string; // platform의 타입 정의
  version: string; // version의 타입 정의
  sdkDocLink: string; // sdkDocLink의 타입 정의
  sdkLink: string; // sdkLink의 타입 정의
}

const SDKCard: React.FC<SDKCardProps> = ({
  platform,
  version,
  sdkDocLink,
  sdkLink,
}) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-bold mb-2">{platform} SDK</h2>
    <p className="text-gray-600 mb-4">Version {version}</p>
    <div className="flex flex-wrap gap-4">
      <a
        href={sdkDocLink}
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-600 transition-colors"
      >
        <DocumentIcon />
        <span>SDK Documentation</span>
      </a>
      <a
        href={sdkLink}
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded flex items-center space-x-2 hover:bg-gray-300 transition-colors"
      >
        <DownloadIcon />
        <span>Download SDK</span>
      </a>
    </div>
  </div>
);

interface APIDocumentCardProps {
  apiDocLink: string; // apiDocLink 타입 정의
}

const APIDocumentCard: React.FC<APIDocumentCardProps> = ({ apiDocLink }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-bold mb-2">API Documentation</h2>
    <p className="text-gray-600 mb-4">Version 1.0.1</p>
    <a
      href={apiDocLink}
      className="bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-green-600 transition-colors inline-flex"
    >
      <CodeIcon />
      <span>API Documentation</span>
    </a>
  </div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState("ios");

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="p-6 inline-block">
            <Image
              src="https://github.com/shpark-vestellalab/watchmile-sdk-document/blob/main/public/assets/vestellalab_logo.png?raw=true"
              alt="Vestellalab Logo"
              width={200}
              height={50}
            />
          </div>
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Watchmile SDK Documentation
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Access our SDK resources and documentation for iOS and Android
          </p>
        </div>
        <APIDocumentCard apiDocLink="https://api.watchmile.net/cdn/kakao/WATCHMILE_API_Document.pdf" />
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            <button
              className={`py-2 px-4 ${
                activeTab === "ios"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("ios")}
            >
              iOS
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "android"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("android")}
            >
              Android
            </button>
          </div>
        </div>

        {activeTab === "ios" && (
          <SDKCard
            platform="iOS"
            version="1.0.1"
            sdkDocLink="https://api.watchmile.net/cdn/kakao/WATCHMILE_SDK_iOS.pdf"
            sdkLink="https://api.watchmile.net/cdn/kakao/WatchmileSDK_iOS.zip"
          />
        )}
        {activeTab === "android" && (
          <SDKCard
            platform="Android"
            version="1.0.1"
            sdkDocLink="https://api.watchmile.net/cdn/kakao/WATCHMIE_SDK_ANDROID.pdf"
            sdkLink="https://api.watchmile.net/cdn/kakao/WatchmileSDK_ANDROID.zip"
          />
        )}
        <div className="mt-16 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Contact Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              For any inquiries about our SDK.
            </p>
          </div>
          <div className="border-t border-gray-200">
            {contactsData.contacts.map((contact, index) => (
              <div
                key={index}
                className={`px-4 py-5 sm:px-6 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-md font-medium text-gray-900">
                    {contact.name}
                  </h4>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {contact.department}
                  </span>
                </div>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {contact.email}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Phone number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {contact.phone}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
