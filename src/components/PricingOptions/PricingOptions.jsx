import React from 'react';
import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({ pricingPromise }) => {
    
    const pricingData = use(pricingPromise)
    console.log(pricingData);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 '>
            {/* {
                pricingData.map(pricing => <PricingCard pricing={pricing}></PricingCard>)
            } */}

            {
                pricingData.map(pricing => <DaisyPricingCard
                key={pricing.id}
                pricing={pricing}></DaisyPricingCard>)
            }
        </div>
    );
};

export default PricingOptions;