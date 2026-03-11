import { ChevronRight } from 'lucide-react';

interface PageTitleProps {
  title: string;
  subTitle?: string;
  subIcon?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subTitle,
  subIcon,
}) => {
  return (
    <div className="relative top-0 w-full h-40 md:h-56 bg-gradient-to-r from-amber-900 to-amber-800 shadow-2xl overflow-hidden">
      <img
        src="assets/img/design11-01_generated.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay"
      />

      <div className="relative h-full w-full flex justify-between items-end px-6 md:px-12 pb-4 md:pb-6">
        <div className="flex-1">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight drop-shadow-lg">
            {title}
          </h1>

          <div className="flex items-center gap-2 mt-2 text-white/90">
            <span className="text-sm md:text-base font-medium">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm md:text-base font-medium">
              {subTitle || title}
            </span>
          </div>
        </div>

        {subIcon && (
          <div className="hidden md:block">
            <img
              src={subIcon}
              alt=""
              className="h-24 w-24 lg:h-32 lg:w-32 object-cover rounded-lg shadow-xl border-4 border-white/20"
            />
          </div>
        )}
      </div>
    </div>
  );
};


export default PageTitle;