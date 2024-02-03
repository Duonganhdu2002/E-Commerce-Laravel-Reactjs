import {
    Input,
    Select,
    Option,
} from "@material-tailwind/react";

export default function SearchProduct() {
    return (
        <div>
            <div>
                <div className='flex'><div className="sm:w-[50%] w-full mb-4 sm:mb-0">
                        <Select label="Product Name" className=' rounded-r-none'>
                            <Option>Order ID</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                    </div>
                    <div className="sm:w-[80%] w-full">
                        <Input
                            label="Mờ nhi in nhút ét liét phớt thu cha rác tơ óp uơ" className='rounded-l-none'
                        />
                    </div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
