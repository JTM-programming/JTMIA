import CustomButton from '@/app/components/CustomButton'

export default function Banner() {
  return (
    <section className="py-[80px] px-4">
      <div className="jtm-container text-center bg-white py-[80px] rounded-3">
        <h2 className="text-[32px] font-bold text-gray-800 max-w-[900px] mx-auto leading-[120%]">
          No le regales tu dinero a "profesionales" ni "agencias" que te cobran
          400 usd por una web que parece y en muchos casos es una plantilla
        </h2>
        <CustomButton customClasses="mt-[32px] mx-auto" />
      </div>
    </section>
  );
};
