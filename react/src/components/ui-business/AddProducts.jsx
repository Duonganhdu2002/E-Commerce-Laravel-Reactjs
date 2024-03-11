import React, { useEffect, useState } from "react";
import axios from "axios";

import AddImageIcon from "../../assets/icon/image (1).png";

import {
    Card,
    CardBody,
    Input,
    Select,
    Option,
    Textarea,
    Button,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import { fetchAllField } from "../../services/fieldService";
import { fetchAllCategoryByFieldId } from "../../services/categoryService";
import { fetchBrandsByFieldId } from "../../services/brandService";
import { addProduct } from "../../services/productService";
import { useSelector } from 'react-redux'


const DeleteCategory = ({ product_category_id }) => {
    const handleDelete = async () => {
        try {
            let res = await deleteCategory(product_category_id);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div onClick={handleDelete} className="cursor-pointer flex justify-center hover:bg-blue-gray-50 py-2 rounded-lg " >
            <TrashIcon className="w-4 h-4 " />
        </div>
    )
}

const EditCategory = ({ product_category_id }) => {


    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const imageLength = images.length;

    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');

    const handleInputChange = (event, setterFunction) => {
        setterFunction(event.target.value);
    };

    const dataUpdate = {
        'product_category_name': categoryName,
        'description': categoryDescription,
    }

    const handleUpdate = () => {
        try {
            updateCategory(product_category_id, dataUpdate);
            alert("Thanh cong")
        } catch (error) {
            alert(error)
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await categoryInformation(product_category_id);
                setCategoryName(res.data.product_category_name || '');
                setCategoryDescription(res.data.description || '');
                // Kiểm tra xem res.data.icon_category trả về một giá trị đơn lẻ hay một mảng
                const iconCategory = Array.isArray(res.data.icon) ? res.data.icon : [res.data.icon];
                setImages(iconCategory);
                setData(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [product_category_id]);


    const [imageList, setImageList] = useState([AddImageIcon,]);

    const handleImageChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const newImageList = [...imageList];
                newImageList[index] = reader.result;
                setImageList(newImageList);
            };
            reader.readAsDataURL(file);
        }
    };



    return (
        <div className="cursor-pointer flex justify-center hover:bg-blue-gray-50 py-2 rounded-lg" >
            <Popover placement="left">
                <PopoverHandler>
                    <div className=" w-full flex justify-center">
                        <PencilIcon className=" w-4 h-4" />
                    </div>
                </PopoverHandler>
                <PopoverContent className=" z-10 p-8">
                    <div className="flex">
                        <div className="">Category Images</div>
                        <div className="w-[85%]">
                            <p>Image</p>
                            <div className="flex">
                                {imageLength === 1 ? (
                                    <div className="p-6 px-8  mr-4 border-2 hover:bg-gray-200 border-dashed border-gray-400 w-fit h-fit mt-5 rounded-md hover:border-gray-600 transition-colors duration-300">
                                        <div className="mb-4">
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={(event) => handleImageChange(event, 0)} // chỉ truyền index là 0
                                                data-index={0}
                                            />
                                            <img
                                                className="w-24 h-24 object-cover cursor-pointer"
                                                src={`../../../src/assets/icon_category/${images[0]}`} // chỉ truy cập ảnh đầu tiên trong images
                                                alt={`Image 1`}
                                                onClick={() => document.querySelector(`input[type="file"][data-index="0"]`).click()} // chỉ trigger input với index là 0
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {images.map((imageSrc, index) => (
                                            <div key={index} className="p-6 px-8  mr-4 border-2 hover:bg-gray-200 border-dashed border-gray-400 w-fit h-fit mt-5 rounded-md hover:border-gray-600 transition-colors duration-300">
                                                <div className="mb-4">
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        onChange={(event) => handleImageChange(event, index)}
                                                        data-index={index}
                                                    />
                                                    <img
                                                        className="w-24 h-24 object-cover cursor-pointer"
                                                        src={`../../../src/assets/image/${imageSrc}`}
                                                        alt={`Image ${index + 1}`}
                                                        onClick={() => document.querySelector(`input[type="file"][data-index="${index}"]`).click()}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className=" flex mt-8">
                        <div className=" ">
                            Category name
                        </div>
                        <div className=" w-[85%]">
                            <Input
                                value={categoryName}
                                label="Input"
                                onChange={(event) => handleInputChange(event, setCategoryName)}
                            />
                        </div>
                    </div>

                    <div className=" flex mt-8">
                        <div className=" ">
                            Description
                        </div>
                        <div className=" w-[85%]">
                            <Textarea
                                value={categoryDescription}
                                label="Input"
                                onChange={(event) => handleInputChange(event, setCategoryName)}
                            />
                        </div>
                    </div>


                    <div className=" flex my-8">
                        <div className=" w-[15%]">
                        </div>
                        <div className=" w-[85%]">
                            <Button onClick={handleUpdate}>Update</Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default function AddProducts() {

    const seller_id = useSelector((state) => state.seller.seller.user_id);

    // Khai báo state để lưu trữ dữ liệu nhập từ form
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    
    const [productColor1, setProductColor1] = useState(null);
    const [productColor2, setProductColor2] = useState(null);
    const [productColor3, setProductColor3] = useState(null);

    const [productSize1, setProductSize1] = useState(null);
    const [productSize2, setProductSize2] = useState(null);
    const [productSize3, setProductSize3] = useState(null);

    const [productDescription, setProductDescription] = useState("");
    const [productStock, setProductStock] = useState(0);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [selectedBrandId, setSelectedBrandId] = useState(null);

    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);

    const [dataField, setDataField] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [dataBrand, setDataBrand] = useState([]);

    const [selectedFieldId, setSelectedFieldId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resBrand = await fetchAllField();
                setDataField(resBrand.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resCategory = await fetchAllCategoryByFieldId(parseInt(selectedFieldId));
                setDataCategory(resCategory.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [selectedFieldId])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resBrand = await fetchBrandsByFieldId(parseInt(selectedFieldId));
                setDataBrand(resBrand.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [selectedFieldId])

    const handleChange1 = (e) => {
        const selectedFile = e.target.files[0];
        setFile1(selectedFile);
    };
    const handleChange2 = (e) => {
        const selectedFile = e.target.files[0];
        setFile2(selectedFile);
    };
    const handleChange3 = (e) => {
        const selectedFile = e.target.files[0];
        setFile3(selectedFile);
    };

    //hàm xử lý field
    const handlechangeField = (e) => {
        const selectedFieldId = parseInt(e);
        if (!isNaN(selectedFieldId)) {
            setSelectedFieldId(selectedFieldId);
        }
        console.log(selectedFieldId);
    };

    const handlechangeCategory = (e) => {
        const selectedCategoryId = parseInt(e);
        if (!isNaN(selectedCategoryId)) {
            setSelectedCategoryId(selectedCategoryId);
        }
        console.log(selectedCategoryId);
    };

    const handlechangeBrand = (e) => {
        const selectedBrandId = parseInt(e);
        if (!isNaN(selectedBrandId)) {
            setSelectedBrandId(selectedBrandId);
        }
        console.log(selectedBrandId);
    };

    // Hàm xử lý khi người dùng nhấn vào nút "Add New Products"
    const handleAddProduct = async () => {
        try {
            // Kiểm tra giá trị của selectedCategoryId và selectedBrandId trước khi gọi API
            if (!selectedCategoryId || !selectedBrandId) {
                console.error("Selected category or brand is invalid.");
                return;
            }

            const formData = new FormData();

            formData.append("image_urls[]", file1);
            formData.append("image_urls[]", file2);
            formData.append("image_urls[]", file3);
            formData.append("name", productName);
            formData.append("description", productDescription);
            formData.append("stock", 3224);
            formData.append("product_category_id", selectedCategoryId);
            formData.append("product_brand_id", selectedBrandId);
            formData.append("created_by_user_id", seller_id);
            formData.append("price", productPrice);
            formData.append("colors[]", productColor1);
            formData.append("colors[]", productColor2);
            formData.append("colors[]", productColor3);
            formData.append("sizes[]", productSize1);
            formData.append("sizes[]", productSize2);
            formData.append("sizes[]", productSize3);

            console.log("Product Data:", formData);

            let res = await addProduct(formData);
            console.log("Response:", res);
         
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <Card className="w-full p-4 bg-white rounded-xl">
            <CardBody>
                <div className="flex">
                    <div className="w-[15%]">Product Images</div>
                    <div className="w-[85%]">
                        <p>Image (You can upload max 3 images)</p>
                        <div className=" flex">
                            <div>
                                <input type="file" onChange={handleChange1} />
                                {file1 ? (
                                    <img className="w-40 mt-3 rounded-xl" src={URL.createObjectURL(file1)} alt="Selected File" />
                                ) : (
                                    <img
                                        className="w-40 mt-3 rounded-xl"
                                        src={`https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png`}
                                        alt="Placeholder Image"
                                    />
                                )}
                            </div>

                            <div>
                                <input type="file" onChange={handleChange2} />
                                {file2 ? (
                                    <img className="w-40 mt-3 rounded-xl" src={URL.createObjectURL(file2)} alt="Selected File" />
                                ) : (
                                    <img
                                        className="w-40 mt-3 rounded-xl"
                                        src={`https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png`}
                                        alt="Placeholder Image"
                                    />
                                )}
                            </div>

                            <div>
                                <input type="file" onChange={handleChange3} />
                                {file3 ? (
                                    <img className="w-40 mt-3 rounded-xl" src={URL.createObjectURL(file3)} alt="Selected File" />
                                ) : (
                                    <img
                                        className="w-40 mt-3 rounded-xl"
                                        src={`https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png`}
                                        alt="Placeholder Image"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-20 py-8">
                    <div className="w-[50%]">
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Product name
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productName} onChange={(e) => setProductName(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Field
                            </div>
                            <div className="w-[80%]">
                                <Select label="Select Version" onChange={handlechangeField} disabled={dataField.length === 0}>
                                    {dataField.map((data) => (
                                        <Option value={String(data.field_id)} key={data.field_id}>{data.field_name}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Category
                            </div>
                            <div className=" w-[80%]">
                                <Select label="Category" onChange={handlechangeCategory} disabled={selectedFieldId === null || dataCategory.length === 0}>
                                    {dataCategory.map((data) => (
                                        <Option value={String(data.product_category_id)} key={data.product_category_id}>{data.product_category_name}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>

                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Brand
                            </div>
                            <div className=" w-[80%]">
                                <Select disabled={selectedFieldId === null || dataBrand.length === 0} label="Brand" onChange={handlechangeBrand}>
                                    {dataBrand.map((data) => (
                                        <Option value={String(data.product_brand_id)} key={data.product_brand_id}>{data.product_brand_name}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Color 1
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productColor1} onChange={(e) => setProductColor1(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Color 2
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productColor2} onChange={(e) => setProductColor2(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Color 3
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productColor3} onChange={(e) => setProductColor3(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-16">
                            <div className=" w-[20%]">
                            </div>
                            <div className=" w-[80%]">
                                <Button className=" w-fit" onClick={handleAddProduct}>Add New Products</Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Price
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Stock
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Stock" type="number" value={productStock} onChange={(e) => setProductStock(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Description
                            </div>
                            <div className=" w-[80%]">
                                <Textarea color="gray" label="Textarea Gray" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Size 1
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productSize1} onChange={(e) => setProductSize1(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Size 2
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productSize2} onChange={(e) => setProductSize2(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Size 3
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productSize3} onChange={(e) => setProductSize3(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}


