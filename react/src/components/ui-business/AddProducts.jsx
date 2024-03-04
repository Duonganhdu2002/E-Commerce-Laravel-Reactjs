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
} from "@material-tailwind/react";
import { fetchAllField } from "../../services/fieldService";
import { fetchAllCategoryByFieldId } from "../../services/categoryService";
import { fetchBrandsByFieldId } from "../../services/brandService";
import { addProduct } from "../../services/productService";
import { useSelector } from 'react-redux'


export default function AddProducts() {

    const seller_id = useSelector((state) => state.seller.seller.user_id);

    // Khai báo state để lưu trữ dữ liệu nhập từ form
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productColor, setProductColor] = useState("");
    const [productSize, setProductSize] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productStock, setProductStock] = useState(0);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [selectedBrandId, setSelectedBrandId] = useState(null);

    const [imageList, setImageList] = useState([AddImageIcon, AddImageIcon, AddImageIcon]);
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

            // Tạo object chứa dữ liệu từ các state
            const productData = {
                "name": productName,
                "description": productDescription,
                "stock": productStock,
                "product_category_id": selectedCategoryId,
                "product_brand_id": selectedBrandId,
                "image_urls": imageList,
                "created_by_user_id": seller_id,
                "price": productPrice,
                "colors": productColor,
                "sizes": productSize,
            };

            console.log(productData)
            await addProduct(productData);
            // Xử lý kết quả từ API (nếu cần)
            setProductName("");
            setProductDescription("");
            setProductStock(0);
            setSelectedCategoryId(null);
            setSelectedBrandId(null);
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
                            {imageList.map((imageSrc, index) => (
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
                                            src={imageSrc}
                                            alt={`Image ${index + 1}`}
                                            onClick={() => document.querySelector(`input[type="file"][data-index="${index}"]`).click()}
                                        />
                                    </div>
                                </div>
                            ))}
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
                                Price
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Color
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productColor} onChange={(e) => setProductColor(e.target.value)} />
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
                                Size
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productSize} onChange={(e) => setProductSize(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
