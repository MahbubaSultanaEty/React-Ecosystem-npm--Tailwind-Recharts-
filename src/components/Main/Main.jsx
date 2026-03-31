import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';
import { Suspense } from 'react';

const pricingPromise = fetch('/public/pricingData.json').then(res => res.json())

const Main = () => {
    console.log(pricingPromise)
    return (
        <div>
            <h3 className='text-4xl font-bold'>Get our memberShip</h3>
             <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <PricingOptions pricingPromise={pricingPromise} />
  </Suspense>
        </div>
    );
};

export default Main;