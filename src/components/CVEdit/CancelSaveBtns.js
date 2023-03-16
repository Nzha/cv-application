function CancelSaveBtns({ cancel = 'Cancel', handleCancel }) {
  return (
    <div className="flex justify-center gap-4">
      <button
        className="rounded-full border-4 border-gray-200 px-6 py-2 font-semibold hover:bg-gray-200"
        type="button"
        onClick={handleCancel}
      >
        {cancel}
      </button>
      <button className="rounded-full bg-gradient-to-r from-sky-500 to-teal-500 px-14 py-2 font-semibold text-white hover:from-sky-500 hover:to-sky-500">
        Save
      </button>
    </div>
  );
}

export default CancelSaveBtns;
