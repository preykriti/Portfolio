const LinkButton = ({ link, children }) => {
  return (
    <a
      href={link}
      target="blank"
      rel="noopener noreferrer"
      className={`flex justify-between items-center bg-sageGreen rounded-full py-2 px-5 my-3 font-medium text-shadowColor shadow-[4px_4px_0px_#4A5845]`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
