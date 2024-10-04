"use client";
import { useState } from "react";
import Image from "next/image";
import contactsData from "../data/contacts.json";
import patchNotesData from "../data/patchNotes.json";
import SDKCard from "./components/SDKCard";
import APIDocumentCard from "./components/ApiDocumentCard";
import PatchNotes from "./components/PatchNotes";

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
          <div>
            <SDKCard
              platform="iOS"
              version="1.0.1"
              sdkDocLink="https://api.watchmile.net/cdn/kakao/WATCHMILE_SDK_iOS.pdf"
              sdkLink="https://api.watchmile.net/cdn/kakao/WatchmileSDK_iOS.zip"
            />
            <PatchNotes notes={patchNotesData.iOS} />
          </div>
        )}
        {activeTab === "android" && (
          <div>
            <SDKCard
              platform="Android"
              version="1.0.1"
              sdkDocLink="https://api.watchmile.net/cdn/kakao/WATCHMIE_SDK_ANDROID.pdf"
              sdkLink="https://api.watchmile.net/cdn/kakao/WatchmileSDK_ANDROID.zip"
            />
            <PatchNotes notes={patchNotesData.android} />
          </div>
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
