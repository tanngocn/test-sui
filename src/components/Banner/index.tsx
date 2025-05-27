const BannerSection = () => {
  return (
    <div className="banner-wrapper relative min-h-[700px] flex items-center bg-[#000]">
      <div className="container">
        <div className="info flex items-center flex-col max-w-[500px]">
          <h1 className="text-[60px] leading-[70px]  mb-[28px] max-w-[500px]">
            Early access to ideas that Gonear
          </h1>
          <p className="text-[20px] max-">
            Highly-vetted ideas and teams you can trust. Supported by
            industry-leading creators and funds.
          </p>
        </div>
      </div>
    </div>
  );
};
export default BannerSection;
