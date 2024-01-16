import React from 'react';
import ShopAccount from '../../components/ui-bussiness-mobile/ShopAccount';
import ShopOrder from '../../components/ui-bussiness-mobile/ShopOrder';
import ShopSelection from '../../components/ui-bussiness-mobile/ShopSelection';

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
