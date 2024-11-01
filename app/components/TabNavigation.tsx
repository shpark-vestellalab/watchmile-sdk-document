"use client";

import { useState } from "react";
import SDKCard from "../components/SDKCard";
import PatchNotes from "../components/PatchNotes";
import patchNotesData from "../../data/patchNotes.json";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("ios");

  return (
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

      {activeTab === "ios" && (
        <div>
          <SDKCard
            platform="iOS"
            version="1.0.2"
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
            version="1.0.4"
            sdkDocLink="https://api.watchmile.net/cdn/kakao/WATCHMILE_SDK_ANDROID.pdf"
            sdkLink="https://api.watchmile.net/cdn/kakao/WatchmileSDK_ANDROID.zip"
          />
          <PatchNotes notes={patchNotesData.android} />
        </div>
      )}
    </div>
  );
}
