import React from 'react';
import ShopAccount from '../../components/ui-business-mobile/ShopAccount';
import ShopOrder from '../../components/ui-business-mobile/ShopOrder';
import ShopSelection from '../../components/ui-business-mobile/ShopSelection';

const ContentMobile = () => {
    return (
        <div>
            <ShopAccount/>
            <ShopOrder/>
            <ShopSelection/>
        </div>
    );
}

export default ContentMobile;
