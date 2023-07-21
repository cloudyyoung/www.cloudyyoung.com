
const Footer = () => {
  const cls = `
    max-w-full xl:max-w-10xl 
    mx-auto 
    px-6 
    my-8 xl:my-20 
    flex flex-col md:flex-row md:justify-between md:items-center
    font-heading 
    text-sm md:text-md lg:text-lg xl:text-xl
  `;

  return (
    <div className={cls}>
        <div>&copy; 2023 Yunfan Yang</div>
        <div>Built with React & Tailwind</div>
    </div>
  )
}

export default Footer