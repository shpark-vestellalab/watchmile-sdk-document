interface Change {
  title: string;
  description: string[];
}

interface PatchNote {
  version: string;
  date: string;
  changes: Change[];
}

interface PatchNotesProps {
  notes: PatchNote[];
}

const PatchNotes: React.FC<PatchNotesProps> = ({ notes }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-bold mb-2">Patch Notes</h2>
    {notes.map((note, index) => (
      <div key={index} className="mb-6">
        <h3 className="text-gray-600 mb-4">{`Version ${note.version} (${note.date})`}</h3>
        <ul className="list-disc">
          {note.changes.map((change, idx) => (
            <li key={idx} className="text-gray-700 list-none">
              <strong className="block text-gray-900 mt-4">
                {change.title}
              </strong>
              <ul className="list-disc ml-5">
                {change.description.map((description, descIdx) => (
                  <li key={descIdx} className="text-gray-700">
                    {description}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default PatchNotes;
