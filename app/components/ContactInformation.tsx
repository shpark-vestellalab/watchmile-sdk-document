import contactsData from "../../data/contacts.json";

const ContactInformation: React.FC = () => {
  return (
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
                <dd className="mt-1 text-sm text-gray-900">{contact.email}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{contact.phone}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInformation;
