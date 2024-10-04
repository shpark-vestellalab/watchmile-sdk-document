"use client";
import { useState } from "react";
import Image from "next/image";
import APIDocumentCard from "./components/ApiDocumentCard";
import ContactInformation from "./components/ContactInformation";
import TabNavigation from "./components/TabNavigation";
import SDKCard from "./components/SDKCard";
import PatchNotes from "./components/PatchNotes";
import patchNotesData from "../data/patchNotes.json";

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
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />{" "}
        {/* 탭 내비게이션 추가 */}
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
        <ContactInformation /> {/* 연락처 정보 추가 */}
      </main>
    </div>
  );
}
