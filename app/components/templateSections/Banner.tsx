import CustomButton from '@/app/components/CustomButton'

export default function Banner({text}: any) {
  return (
    <section className="py-[80px] px-4">
      <div className="jtm-container text-center bg-white py-[30px] md:py-[80px] rounded-[8px]">
        <h2 className="text-[22px] md:text-[32px] font-bold text-gray-800 max-w-[900px] mx-auto leading-[120%]">
          {text}
        </h2>
        <CustomButton customClasses="mt-[32px] mx-auto" />
      </div>
    </section>
  );
};
