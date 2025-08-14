

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey ">Nirman Raj </p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <a href="#">{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2025 Nirman Raj | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;