interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = ["ios", "android"];

  return (
    <div className="mb-6">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
