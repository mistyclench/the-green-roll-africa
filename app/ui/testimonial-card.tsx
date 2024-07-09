import Image from "next/image";

interface Props {
  testimonial: string
  client: string
  image: any
}
const TestimonialCard: React.FC<Props> = ({testimonial, client, image}) => {
  return (
          <div className="shadow-md shadow-slate-50 min-w-[350px] bg-white rounded-[27px] p-[10px] m-1 overflow-y-auto">
      {testimonial}
      <div className='flex flex-row row content-end py-4 align-bottom align-text-bottom text-end'>
        <Image className="rounded-[107px]" width={70} height={70} src={image} alt={client}/>
        <i className='text-right py-2'>{client}</i>
      </div>
    </div>

  );
};

export default TestimonialCard;