import React from "react";

const Entrie = ({
  entrie,
  onEditClick,
  onDeleteClick,
  showEntrie,
  onClose,
}) => {
  const showHideModal = showEntrie ? "block" : "hidden";

  return (
    <div
      className={`container w-2/3 mx-auto z-50 bg-white h-full px-14 py-2 absolute inset-0 ${showHideModal}`}
    >
      <div className="h-4/5 text-center">
        <p className="text-left">{entrie.date}</p>
        <h2 className="text-3xl pb-4">{entrie.title}</h2>
        <p className="text-right italic pb-2">{entrie.mood}</p>
        <p>{entrie.text}</p>
      </div>
      <div className="w-full flex justify-around py-8 border-t-2 border-gray-primary absolute bottom-0 left-0">
        <button onClick={() => onEditClick(entrie)} className="">
          <abbr title="Edit">
            <img
              src="/img/icons/edit-pencil.svg"
              alt="delete"
              className="h-5 w-5"
            />
          </abbr>
        </button>
        <button onClick={() => onDeleteClick(entrie.id)} className="">
          <abbr title="Delete">
            <img src="/img/icons/trash.svg" alt="delete" className="h-5 w-5" />
          </abbr>
        </button>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full w-10 h-10 flex justify-center bg-rose-light shadow-2xl"
      >
        <img src="/img/icons/close.svg" alt="X" width="20" height="20" />
      </button>
    </div>
  );
};

export default Entrie;
