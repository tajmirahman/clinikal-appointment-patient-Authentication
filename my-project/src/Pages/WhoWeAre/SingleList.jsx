

const SingleList = ({ list }) => {


    return (
        <div className="flex justify-start items-center gap-3">
          
                <img className="w-20 h-20 border-4 shadow object-cover p-2" src={list.icon} alt="" />
        
            <div>
                <h2>{list.count}</h2>
                <h2>{list.label}</h2>
            </div>
        </div>
    );
};

export default SingleList;