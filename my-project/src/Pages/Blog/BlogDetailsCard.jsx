import { Link } from 'react-router-dom';
import proPic from '../../assets/image/download.png'
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthPorvider';

const BlogDetailsCard = ({ newBlog }) => {

    const { addComments, comments } = useContext(AuthContext);

    const handleComments = (e) => {
        e.preventDefault();
        const form = e.target;

        const commentsInfo = {
            id: Date.now(),
            text: form.text.value
        }

        addComments(commentsInfo);
        form.reset();
    }


    return (
        <>
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
            <div className='w-9/12 mx-auto space-y-4 shadow-lg p-2 mt-10'>
                <div className="card text-center">
                    <h2 className='text-2xl'>Comments ({comments.length})</h2>
                    <hr className='w-[60px] mx-auto bg-sky-300 border-t-2 my-2' />
                    <hr className='w-[50px] mx-auto bg-sky-300 border-t-2' />
                    <div>
                        {
                            comments.map(comment => (<p key={comment.id} className='my-5 text-sky-600'>{comment.text}</p>))
                        }
                    </div>
                </div>
            </div>
            <div className='w-9/12 mx-auto space-y-4 shadow-lg p-2 mt-10'>
                <div className="card text-center">
                    <h2 className='text-2xl'>Leave a reply</h2>
                    <hr className='w-[60px] mx-auto bg-sky-300 border-t-2 my-2' />
                    <hr className='w-[50px] mx-auto bg-sky-300 border-t-2' />


                    <p className='mt-5'>Please keep a comment</p>

                    <div className='my-5 flex justify-center items-center gap-3'>
                        <form onSubmit={handleComments} className='*:border-2'>
                            <input type="text" name='text' className='p-2 ' placeholder='please write here ...' />

                            <button className='btn bg-[#32a3ac]'>send</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BlogDetailsCard;