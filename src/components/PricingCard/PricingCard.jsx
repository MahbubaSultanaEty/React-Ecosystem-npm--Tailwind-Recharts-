import React from 'react';
import { ArrowRight } from 'lucide-react';

const PricingCard = ({pricing}) => {
    return (
        <div className='flex flex-col border p-4 bg-fuchsia-900 rounded'>
            <div className='my-3'>
                {/* card header */}
                <h4 className='text-3xl font-bold'>{pricing.name}</h4>
                    <h5 className='text-lg font-semibold bg-amber-700 inline-block px-2 rounded'>{pricing.priceTag}</h5> 
            </div>
            <div className=' p-1 flex-1'> 
                {/* card body */}
                <p >{ pricing.description}</p>
                <div className='bg-amber-500 rounded  '><h6 className='font-semibold text-xl flex justify-center  '>Features</h6>
                    <hr></hr>
                <ol className='grid grid-cols-2 gap-x-4 text-xs '>
                    {
                        pricing.features.map((feature, index) => <li key={index}  className="flex items-center gap-2">
                            <ArrowRight  className='h-5'/>
                            <span>{feature}</span></li>)
                    }
                    </ol>
                    </div>
            </div>
            <button class="btn -w-full m-2">Wide</button>
        </div>
    );
};

export default PricingCard;
