import ClientsButton from '@/app/utils/generating-landing/components/ClientsButton'

interface BannerProps {
  text: string;
}

export default function Banner({text}: BannerProps) {
  return (
    <section className="py-[80px] px-4">
      <div className="jtm-container text-center bg-white py-[30px] md:py-[80px] rounded-[8px]">
        <h2 className="text-[22px] md:text-[32px] font-bold text-gray-800 max-w-[900px] mx-auto leading-[120%]">
          {text}
        </h2>
        <ClientsButton customClasses="mt-[32px] mx-auto" />
      </div>
    </section>
  );
};
