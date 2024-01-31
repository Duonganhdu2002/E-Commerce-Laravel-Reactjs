import React from 'react';
import ShopAccount from '../../components/ui-admin-mobile/ShopAccount';
import ShopOrder from '../../components/ui-admin-mobile/ShopOrder';
import ShopSelection from '../../components/ui-admin-mobile/ShopSelection';

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
