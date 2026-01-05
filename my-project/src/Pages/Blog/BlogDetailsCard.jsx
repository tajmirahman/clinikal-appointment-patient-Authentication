import proPic from '../../assets/image/download.png'

const BlogDetailsCard = ({ newBlog }) => {
    return (
        <div className="w-9/12 mx-auto space-y-4 shadow-lg p-2">

            <figure className='*/:border-4 border-gray-300'>
                <img className='w-96 mx-auto p-2' src={newBlog.image} alt="" />
            </figure>
            <h2 className='text-center text-3xl'>{newBlog.title}</h2>
            <div className='flex justify-center items-center gap-5'>
                <div className='flex justify-center items-center'>
                    <img className='w-8 h-8 object-cover' src={proPic} alt="" />
                    <p>{newBlog.author}</p>
                </div>
                <div>{newBlog.date}</div>
            </div>
            <p className='justify-start text-sm text-justify'>{newBlog.details}</p>

        </div>
    );
};

export default BlogDetailsCard;