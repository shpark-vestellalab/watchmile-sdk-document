import { CodeIcon } from "./Icons";

interface APIDocumentCardProps {
  apiDocLink: string;
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

export default APIDocumentCard;
