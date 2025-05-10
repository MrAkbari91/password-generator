function Alert(props) {
  return (
    props.alert && (
      <div
        id="alert-3"
        className={`fixed top-10 right-6 z-10 m-auto my-5 mb-4 flex w-fit p-4 ${
          props.alert.type === "error"
            ? "rounded-lg bg-red-200 dark:bg-red-300"
            : "rounded-lg bg-green-200 dark:bg-green-300"
        }`}
        role="alert"
      >
        <svg
          aria-hidden="true"
          className={`h-5 w-5 flex-shrink-0 ${
            props.alert.type === "error"
              ? "text-red-700 dark:text-red-800"
              : "text-green-700 dark:text-green-800"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Info</span>
        <div
          className={`ml-3 text-sm font-medium ${
            props.alert.type === "error"
              ? "text-red-700 dark:text-red-800"
              : "text-green-700 dark:text-green-800"
          }`}
        >
          {props.alert.message}
        </div>
      </div>
    )
  );
}

export default Alert;
