import Image from "next/image";
import APIDocumentCard from "./components/ApiDocumentCard";
import ContactInformation from "./components/ContactInformation";
import TabNavigation from "./components/TabNavigation";
export default function Home() {
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
        <TabNavigation />
        <ContactInformation />
      </main>
    </div>
  );
}
