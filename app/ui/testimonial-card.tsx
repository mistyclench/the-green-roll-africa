
const TestimonialCard = ({ testimonial, client, image }) => {
  return (
          <div className="shadow-md shadow-slate-50 min-w-[350px] bg-white rounded-[27px] p-[10px] m-1 overflow-y-auto">
      {testimonial}
      <div className='flex flex-row row content-end py-4'>
        <img className="max-w-[70px] max-h-[70px] rounded-[107px]" src={image} alt={client}/>
        <i className='text-right'>{client}</i>
      </div>
    </div>

  );
};

export default TestimonialCard;