import { DocumentIcon, DownloadIcon } from "./Icons";

interface SDKCardProps {
  platform: string; // platform의 타입 정의
  version: string; // version의 타입 정의
  sdkDocLink: string; // sdkDocLink의 타입 정의
  sdkLink: string; // sdkLink의 타입 정의
}

export const SDKCard: React.FC<SDKCardProps> = ({
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

export default SDKCard;
