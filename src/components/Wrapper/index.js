import React from 'react';
import PriceCard from '../PriceCard'
import SizeCard from '../SizeCard'
import ProductCard from '../ProductCard'
import CategoriesCard from '../CategoriesCard'
import RecentlyAddedCard from '../RecentlyAddedCard'

const Wrapper = ({ size }) => {

    const { small, medium, large } = size;

    return (
        <main className={small ?? medium ?? large}>
            {small && <RecentlyAddedCard />}
            {medium &&
                <React.Fragment>
                    <CategoriesCard />
                    <PriceCard />
                    <SizeCard />
                </React.Fragment>}
            {large && <ProductCard />}
        </main >
    )
}

export default Wrapper;