import CustomButton from '@/app/components/CustomButton'

export default function Banner() {
  return (
    <section className="py-[80px] px-4">
      <div className="jtm-container text-center bg-white py-[30px] md:py-[80px] rounded-[8px]">
        <h2 className="text-[22px] md:text-[32px] font-bold text-gray-800 max-w-[900px] mx-auto leading-[120%]">
          No le regales tu dinero a "profesionales" ni "agencias"...
          <br /><br />
          400 usd por la misma página que le hicieron a un jardinero hace 3 años...
          <br /><br />
          No es negocio.
        </h2>
        <CustomButton customClasses="mt-[32px] mx-auto" />
      </div>
    </section>
  );
};
